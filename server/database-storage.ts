import { 
  type Registration, 
  type InsertRegistration,
  type Team,
  type InsertTeam,
  type Match,
  type InsertMatch,
  type Standing,
  type InsertStanding,
  type Player,
  type InsertPlayer,
  type Venue,
  type InsertVenue,
  type Package,
  type InsertPackage,
  type Gallery,
  type InsertGallery
} from "@shared/schema";

import { db } from './db';
import { and, asc, desc, eq, gt, gte, isNull, lt, lte, ne, or } from 'drizzle-orm';
import { 
  registrations,
  teams,
  matches, 
  standings,
  players,
  venues,
  packages,
  gallery
} from '@shared/schema';

import { IStorage } from './storage';

// Database storage implementation
export class DatabaseStorage implements IStorage {
  // Registration methods
  async createRegistration(registration: InsertRegistration): Promise<Registration> {
    const [newRegistration] = await db
      .insert(registrations)
      .values({
        ...registration,
        createdAt: new Date()
      })
      .returning();
    
    return newRegistration;
  }

  async getRegistration(id: number): Promise<Registration | undefined> {
    const [registration] = await db
      .select()
      .from(registrations)
      .where(eq(registrations.id, id));
      
    return registration;
  }

  async getRegistrations(): Promise<Registration[]> {
    return await db.select().from(registrations);
  }

  // Teams methods
  async createTeam(team: InsertTeam): Promise<Team> {
    const [newTeam] = await db
      .insert(teams)
      .values(team)
      .returning();
      
    return newTeam;
  }

  async getTeam(id: number): Promise<Team | undefined> {
    const [team] = await db
      .select()
      .from(teams)
      .where(eq(teams.id, id));
      
    return team;
  }

  async getTeams(category?: string): Promise<Team[]> {
    if (category && category !== "all") {
      return await db
        .select()
        .from(teams)
        .where(eq(teams.category, category));
    }
    
    return await db.select().from(teams);
  }

  // Matches methods
  async createMatch(match: InsertMatch): Promise<Match> {
    const [newMatch] = await db
      .insert(matches)
      .values(match)
      .returning();
      
    return newMatch;
  }

  async getMatch(id: number): Promise<Match | undefined> {
    const [match] = await db
      .select()
      .from(matches)
      .where(eq(matches.id, id));
      
    return match;
  }

  async getMatches(date?: string): Promise<Match[]> {
    if (date) {
      return await db
        .select()
        .from(matches)
        .where(eq(matches.date, date));
    }
    
    return await db.select().from(matches);
  }

  // Standings methods
  async createStanding(standing: InsertStanding): Promise<Standing> {
    const [newStanding] = await db
      .insert(standings)
      .values(standing)
      .returning();
      
    return newStanding;
  }

  async getStanding(id: number): Promise<Standing | undefined> {
    const [standing] = await db
      .select()
      .from(standings)
      .where(eq(standings.id, id));
      
    return standing;
  }

  async getStandingsByCategory(category: string): Promise<Standing[]> {
    return await db
      .select()
      .from(standings)
      .where(eq(standings.category, category))
      .orderBy(asc(standings.position));
  }

  // Players methods
  async createPlayer(player: InsertPlayer): Promise<Player> {
    const [newPlayer] = await db
      .insert(players)
      .values(player)
      .returning();
      
    return newPlayer;
  }

  async getPlayer(id: number): Promise<Player | undefined> {
    const [player] = await db
      .select()
      .from(players)
      .where(eq(players.id, id));
      
    return player;
  }

  async getTopScorersByCategory(category: string): Promise<Player[]> {
    return await db
      .select()
      .from(players)
      .where(and(
        eq(players.category, category),
        gt(players.goals, 0)
      ))
      .orderBy(desc(players.goals))
      .limit(5);
  }

  async getTopAssistsByCategory(category: string): Promise<Player[]> {
    return await db
      .select()
      .from(players)
      .where(and(
        eq(players.category, category),
        gt(players.assists, 0)
      ))
      .orderBy(desc(players.assists))
      .limit(5);
  }

  // Venues methods
  async createVenue(venue: InsertVenue): Promise<Venue> {
    const [newVenue] = await db
      .insert(venues)
      .values(venue)
      .returning();
      
    return newVenue;
  }

  async getVenue(id: number): Promise<Venue | undefined> {
    const [venue] = await db
      .select()
      .from(venues)
      .where(eq(venues.id, id));
      
    return venue;
  }

  async getVenues(): Promise<Venue[]> {
    return await db.select().from(venues);
  }

  // Packages methods
  async createPackage(pkg: InsertPackage): Promise<Package> {
    const [newPackage] = await db
      .insert(packages)
      .values(pkg)
      .returning();
      
    return newPackage;
  }

  async getPackage(id: number): Promise<Package | undefined> {
    const [pkg] = await db
      .select()
      .from(packages)
      .where(eq(packages.id, id));
      
    return pkg;
  }

  async getPackages(type?: string): Promise<Package[]> {
    if (type) {
      return await db
        .select()
        .from(packages)
        .where(eq(packages.type, type));
    }
    
    return await db.select().from(packages);
  }

  // Gallery methods
  async createGalleryItem(item: InsertGallery): Promise<Gallery> {
    const [newItem] = await db
      .insert(gallery)
      .values(item)
      .returning();
      
    return newItem;
  }

  async getGalleryItem(id: number): Promise<Gallery | undefined> {
    const [item] = await db
      .select()
      .from(gallery)
      .where(eq(gallery.id, id));
      
    return item;
  }

  async getGallery(): Promise<Gallery[]> {
    return await db.select().from(gallery);
  }

  // This function will be called to initialize sample data after DB migration
  async initializeSampleData() {
    console.log("Initializing sample data in the database...");
    
    // Sample teams
    const teamData: InsertTeam[] = [
      { name: "FC Zorritos", category: "sub12", location: "Los Cabos" },
      { name: "Delfines Tijuana", category: "sub10", location: "Tijuana" },
      { name: "Lobos Sinaloa", category: "sub14", location: "Culiacán" },
      { name: "Águilas GDL", category: "sub17", location: "Guadalajara" },
      { name: "Pequeños Marinos", category: "sub8", location: "La Paz" },
      { name: "Tiburones Baja", category: "sub12", location: "Ensenada" }
    ];
    
    for (const team of teamData) {
      await this.createTeam(team);
    }
    
    // Sample matches
    const matchData: InsertMatch[] = [
      {
        date: "12 Nov 2024",
        time: "09:00",
        category: "sub10",
        teamA: "FC Zorritos",
        teamB: "Delfines Tijuana",
        venue: "Estadio Principal",
        status: "scheduled"
      },
      {
        date: "12 Nov 2024",
        time: "11:00",
        category: "sub14",
        teamA: "Lobos Sinaloa",
        teamB: "Águilas GDL",
        venue: "Complejo Deportivo",
        status: "scheduled"
      },
      {
        date: "13 Nov 2024",
        time: "10:00",
        category: "sub8",
        teamA: "Pequeños Marinos",
        teamB: "Tiburones Baja",
        venue: "Campo Municipal",
        status: "scheduled"
      },
      {
        date: "14 Nov 2024",
        time: "16:00",
        category: "sub17",
        teamA: "Águilas GDL",
        teamB: "FC Zorritos",
        venue: "Cancha Sintética",
        status: "scheduled"
      }
    ];
    
    for (const match of matchData) {
      await this.createMatch(match);
    }
    
    // Sample standings
    const standingData: InsertStanding[] = [
      {
        position: 1,
        team: "FC Zorritos",
        played: 3,
        won: 3,
        drawn: 0,
        lost: 0,
        goalsFor: 12,
        goalsAgainst: 2,
        goalDifference: 10,
        points: 9,
        category: "sub12"
      },
      {
        position: 2,
        team: "Delfines Tijuana",
        played: 3,
        won: 2,
        drawn: 1,
        lost: 0,
        goalsFor: 7,
        goalsAgainst: 3,
        goalDifference: 4,
        points: 7,
        category: "sub12"
      },
      {
        position: 3,
        team: "Tiburones Baja",
        played: 3,
        won: 1,
        drawn: 1,
        lost: 1,
        goalsFor: 5,
        goalsAgainst: 5,
        goalDifference: 0,
        points: 4,
        category: "sub12"
      },
      {
        position: 4,
        team: "Lobos Sinaloa",
        played: 3,
        won: 0,
        drawn: 0,
        lost: 3,
        goalsFor: 1,
        goalsAgainst: 15,
        goalDifference: -14,
        points: 0,
        category: "sub12"
      }
    ];
    
    for (const standing of standingData) {
      await this.createStanding(standing);
    }
    
    // Sample players (goal scorers and assists)
    const playerData: InsertPlayer[] = [
      {
        name: "Carlos Mendoza",
        team: "FC Zorritos",
        goals: 7,
        category: "sub12"
      },
      {
        name: "Luis Ramírez",
        team: "Delfines Tijuana",
        goals: 5,
        category: "sub12"
      },
      {
        name: "Javier Torres",
        team: "Tiburones Baja",
        goals: 4,
        category: "sub12"
      },
      {
        name: "Daniel Morales",
        team: "FC Zorritos",
        assists: 6,
        category: "sub12"
      },
      {
        name: "Miguel Castro",
        team: "Delfines Tijuana",
        assists: 4,
        category: "sub12"
      },
      {
        name: "Sergio Vega",
        team: "Tiburones Baja",
        assists: 3,
        category: "sub12"
      }
    ];
    
    for (const player of playerData) {
      await this.createPlayer(player);
    }
    
    // Sample venues
    const venueData: InsertVenue[] = [
      {
        name: "Estadio Principal Los Cabos",
        description: "Cancha de césped natural con capacidad para 3,000 espectadores, iluminación profesional y todas las instalaciones necesarias para un torneo de alto nivel.",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        features: ["Césped Natural", "Iluminación", "Gradas", "Vestidores"],
        location: "Av. Constituyentes, San José del Cabo"
      },
      {
        name: "Cancha Sintética Cabo San Lucas",
        description: "Complejo deportivo con múltiples canchas de césped sintético de última generación, perfectas para las categorías juveniles del torneo.",
        image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        features: ["Césped Sintético", "Multicanchas", "Áreas Comunes", "Estacionamiento"],
        location: "Blvd. Lázaro Cárdenas, Cabo San Lucas"
      },
      {
        name: "Campo Deportivo Municipal",
        description: "Campo deportivo comunitario renovado especialmente para el torneo, con amplias áreas para espectadores y servicios completos.",
        image: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        features: ["Césped Mixto", "Áreas de Descanso", "Zona de Calentamiento", "Enfermería"],
        location: "Calle Deportiva s/n, San José del Cabo"
      },
      {
        name: "Complejo Deportivo Los Cabos",
        description: "Centro deportivo moderno con múltiples campos de fútbol que permiten la realización simultánea de varios partidos del torneo.",
        image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        features: ["Múltiples Canchas", "Gimnasio", "Cafetería", "Área Técnica"],
        location: "Carretera Transpeninsular Km 30, Los Cabos"
      }
    ];
    
    for (const venue of venueData) {
      await this.createVenue(venue);
    }
    
    // Sample packages
    const packageData: InsertPackage[] = [
      {
        name: "Hotel Premium Los Cabos",
        description: "Disfruta de nuestro paquete premium con alojamiento de lujo frente al mar, desayuno incluido y servicio de transporte al torneo.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        features: ["Frente al Mar", "Piscina", "Desayuno", "WiFi"],
        price: 1200,
        perNight: true,
        perPerson: false,
        type: "accommodation"
      },
      {
        name: "Hotel Confort Los Cabos",
        description: "Paquete estándar con alojamiento cómodo, excelente ubicación y fácil acceso a las sedes del torneo.",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        features: ["Céntrico", "Piscina", "WiFi", "Gimnasio"],
        price: 800,
        perNight: true,
        perPerson: false,
        type: "accommodation"
      },
      {
        name: "Transporte Premium - Equipo Completo",
        description: "Servicio de transporte exclusivo para tu equipo, incluyendo traslados aeropuerto-hotel y hotel-sedes durante todos los días del torneo.",
        image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        features: ["Autobús Privado", "A/C", "Hasta 30 personas"],
        price: 5000,
        perNight: false,
        perPerson: false,
        type: "transportation"
      },
      {
        name: "Transporte Compartido - Shuttle",
        description: "Servicio de traslado compartido con horarios regulares entre hoteles oficiales y sedes del torneo.",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        features: ["Shuttle", "A/C", "Horarios Regulares"],
        price: 150,
        perNight: false,
        perPerson: true,
        type: "transportation"
      }
    ];
    
    for (const pkg of packageData) {
      await this.createPackage(pkg);
    }
    
    // Sample gallery items - utilizando las imágenes actualizadas
    const galleryData: InsertGallery[] = [
      {
        image: "@assets/480322273_909730764680873_1851939665253931371_n.jpg",
        title: "Sede Los Cabos",
        subtitle: "2da Edición"
      },
      {
        image: "@assets/482221180_921951026792180_472302613700955818_n.jpg",
        title: "Campeones del Torneo",
        subtitle: "LCST 5ta Edición"
      },
      {
        image: "@assets/481669276_922157023438247_8712901074579883240_n.jpg",
        title: "Categorías Juveniles",
        subtitle: "Máximo 20 Jugadores"
      },
      {
        image: "@assets/481785461_922706960049920_7577861548638452234_n.jpg",
        title: "CABODATO",
        subtitle: "Jugadores Alistados a Fuerzas Básicas"
      },
      {
        image: "@assets/481776657_923612889959327_5956490530320706811_n.jpg",
        title: "Angel Olsín",
        subtitle: "Visor Confirmado de Pachuca"
      },
      {
        image: "@assets/481662753_924186396568643_8593886648106008020_n.jpg",
        title: "PLAY2WIN LCST",
        subtitle: "6ta Edición • 12-17 NOV 2024"
      }
    ];
    
    for (const item of galleryData) {
      await this.createGalleryItem(item);
    }
  }
}