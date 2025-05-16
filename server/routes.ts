import type { Express } from "express";
import express from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendRegistrationEmails } from "./email";
import { insertRegistrationSchema } from "@shared/schema";
import { ZodError, z } from "zod";
import { fromZodError } from "zod-validation-error";
import path from "path";
import { verifyRecaptcha } from "./recaptcha";

// Crear un esquema personalizado que maneje mejor la validación de formatos
const customRegistrationSchema = insertRegistrationSchema.extend({
  // Permitir enviar teamSize como número o cadena y convertirlo
  teamSize: z.preprocess(
    (val) => {
      if (typeof val === 'string') {
        // Eliminar caracteres no numéricos y convertir a entero
        const cleaned = val.replace(/\D/g, '');
        return cleaned ? parseInt(cleaned, 10) : undefined;
      }
      return val;
    },
    z.number({
      required_error: "El número de jugadores es requerido",
      invalid_type_error: "El número de jugadores debe ser un número válido"
    }).min(1, "El equipo debe tener al menos 1 jugador")
  ),
  
  // Validar formato de teléfono con manejo de caracteres especiales
  coachPhone: z.preprocess(
    (val) => {
      if (typeof val === 'string') {
        // Eliminar todos los caracteres no numéricos
        return val.replace(/\D/g, '');
      }
      return val;
    },
    z.string()
      .min(10, "El número de teléfono debe tener al menos 10 dígitos")
  ),
  
  // Validar formato de correo con mensaje amigable
  coachEmail: z.string().email("Por favor ingresa un correo electrónico válido"),
  
  // Asegurar que los checkboxes sean booleanos
  needAccommodation: z.preprocess(
    (val) => val === "true" || val === true,
    z.boolean().optional().default(false)
  ),
  needTransportation: z.preprocess(
    (val) => val === "true" || val === true,
    z.boolean().optional().default(false)
  )
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for team registration
  app.post("/api/register", async (req, res) => {
    try {
      // La validación de reCAPTCHA ha sido eliminada
      const formData = req.body;
      
      // Validate the request body con el esquema personalizado que maneja mejor los tipos
      const validatedData = customRegistrationSchema.parse(formData);
      
      // Store the registration in the database
      const registration = await storage.createRegistration(validatedData);
      
      // Intentar enviar confirmación o al menos registrar la información
      let emailSent = false;
      try {
        emailSent = await sendRegistrationEmails({
          teamName: registration.teamName,
          category: registration.category,
          coachName: registration.coachName,
          coachEmail: registration.coachEmail,
          needAccommodation: registration.needAccommodation ?? false,
          needTransportation: registration.needTransportation ?? false
        });
        
        console.log("Email status:", emailSent ? "Sent successfully" : "Not sent");
      } catch (emailError) {
        // Si falla el envío de correo, solo registramos el error pero permitimos que
        // el registro continúe, ya que los datos se guardaron en la base de datos
        console.error("Error sending registration confirmation email:", emailError);
        console.log("Registration data was saved successfully, but email confirmation failed.");
        emailSent = false;
      }
      
      res.status(201).json({
        success: true,
        message: "¡Gracias por registrarte! Un asesor se contactará contigo vía telefónica pronto. Gracias por ser parte del mejor torneo Los Cabos Soccer Tournament.",
        data: registration,
        emailSent: emailSent
      });
    } catch (error) {
      console.log("Datos recibidos:", JSON.stringify(req.body));
      
      if (error instanceof ZodError) {
        // Crear un mensaje de error más amigable
        const validationError = fromZodError(error);
        console.error('Errores de validación:', validationError.details);
        
        // Transformar errores a un formato más amigable para el frontend
        const formattedErrors = error.errors.map(err => {
          // Simplificar el path del error (ej: "body.teamSize" -> "teamSize")
          const field = err.path[err.path.length - 1];
          return {
            field: String(field),
            message: err.message
          };
        });
        
        res.status(400).json({
          success: false,
          message: "Error de validación en el formulario",
          errors: formattedErrors
        });
      } else {
        console.error("Error al procesar el registro:", error);
        res.status(500).json({
          success: false,
          message: "Error interno del servidor. Por favor, inténtalo nuevamente más tarde."
        });
      }
    }
  });

  // Get teams
  app.get("/api/teams", async (req, res) => {
    try {
      const category = req.query.category as string | undefined;
      const teams = await storage.getTeams(category);
      res.json(teams);
    } catch (error) {
      console.error("Error getting teams:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while retrieving teams"
      });
    }
  });

  // Get matches
  app.get("/api/matches", async (req, res) => {
    try {
      const date = req.query.date as string | undefined;
      const matches = await storage.getMatches(date);
      res.json(matches);
    } catch (error) {
      console.error("Error getting matches:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while retrieving matches"
      });
    }
  });

  // Get standings
  app.get("/api/standings", async (req, res) => {
    try {
      const category = req.query.category as string | undefined;
      if (!category) {
        return res.status(400).json({
          success: false,
          message: "Category is required"
        });
      }
      const standings = await storage.getStandingsByCategory(category);
      res.json(standings);
    } catch (error) {
      console.error("Error getting standings:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while retrieving standings"
      });
    }
  });

  // Get top scorers
  app.get("/api/goal-scorers", async (req, res) => {
    try {
      const category = req.query.category as string | undefined;
      if (!category) {
        return res.status(400).json({
          success: false,
          message: "Category is required"
        });
      }
      const players = await storage.getTopScorersByCategory(category);
      res.json(players);
    } catch (error) {
      console.error("Error getting top scorers:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while retrieving top scorers"
      });
    }
  });

  // Get top assists
  app.get("/api/top-assists", async (req, res) => {
    try {
      const category = req.query.category as string | undefined;
      if (!category) {
        return res.status(400).json({
          success: false,
          message: "Category is required"
        });
      }
      const players = await storage.getTopAssistsByCategory(category);
      res.json(players);
    } catch (error) {
      console.error("Error getting top assists:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while retrieving top assists"
      });
    }
  });

  // Get venues
  app.get("/api/venues", async (req, res) => {
    try {
      const venues = await storage.getVenues();
      res.json(venues);
    } catch (error) {
      console.error("Error getting venues:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while retrieving venues"
      });
    }
  });

  // Get packages
  app.get("/api/packages", async (req, res) => {
    try {
      const type = req.query.type as string | undefined;
      const packages = await storage.getPackages(type);
      res.json(packages);
    } catch (error) {
      console.error("Error getting packages:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while retrieving packages"
      });
    }
  });

  // Get gallery items
  app.get("/api/gallery", async (req, res) => {
    try {
      const gallery = await storage.getGallery();
      res.json(gallery);
    } catch (error) {
      console.error("Error getting gallery:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while retrieving gallery items"
      });
    }
  });

  // Serve static files from the public directory
  app.use(express.static(path.join(process.cwd(), "public")));

  const httpServer = createServer(app);
  return httpServer;
}
