
// Script para insertar las imágenes de la galería en la base de datos
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from './shared/schema.js';
import ws from 'ws';

// Configuración de la base de datos
neonConfig.webSocketConstructor = ws;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL debe estar configurada");
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle(pool, { schema });

async function insertGalleryImages() {
  try {
    console.log('Insertando imágenes en la galería...');
    
    // Array con todas las imágenes y sus metadatos
    const galleryItems = [
      {
        image: "/attached_assets/487407341_942303264756956_7863574062028340197_n.jpg",
        title: "LCST 5ta Edición Los Cabos",
        subtitle: "Del 23 al 27 de Abril 2024"
      },
      {
        image: "/attached_assets/481669276_922157023438247_8712901074579883240_n.jpg",
        title: "Categorías Juveniles",
        subtitle: "2007-2010 Fut 11"
      },
      {
        image: "/attached_assets/481785461_922706960049920_7577861548638452234_n.jpg",
        title: "CABODATO",
        subtitle: "Jugadores Alistados a Fuerzas Básicas"
      },
      {
        image: "/attached_assets/481776657_923612889959327_5956490530320706811_n.jpg",
        title: "Angel Olsín",
        subtitle: "Visor Confirmado de Pachuca"
      },
      {
        image: "/attached_assets/481670467_924188043235145_6133843336931895207_n.jpg",
        title: "Equipos Participantes",
        subtitle: "6ta Edición • NOV 2024"
      },
      {
        image: "/attached_assets/481774150_924189233235026_6059054713111046316_n.jpg",
        title: "Equipo Infinite Athlete",
        subtitle: "6ta Edición • NOV 2024"
      },
      {
        image: "/attached_assets/481775531_924190173234932_7293576038941216848_n.jpg",
        title: "FC Zorritos",
        subtitle: "Orgullo de Los Cabos"
      },
      {
        image: "/attached_assets/481903267_924194226567860_5930671976104748809_n.jpg",
        title: "Campeones U Strong",
        subtitle: "6ta Edición • NOV 2024"
      },
      {
        image: "/attached_assets/481994196_924193319901284_5391320162709966153_n.jpg",
        title: "Acción en la Cancha",
        subtitle: "Talento Juvenil en Acción"
      },
      {
        image: "/attached_assets/482023569_924194816567801_2560799370087253780_n.jpg",
        title: "Staff y Voluntarios",
        subtitle: "6ta Edición • NOV 2024"
      },
      {
        image: "/attached_assets/482345468_924194813234468_3613115002131673064_n.jpg",
        title: "Premiación Sub-10",
        subtitle: "Campeones Los Cabos"
      },
      {
        image: "/attached_assets/482353475_924192896567993_4444384978929572157_n.jpg",
        title: "Visor Reada",
        subtitle: "LCST 6ta Edición"
      }
    ];
    
    // Insertar todas las imágenes en la base de datos
    const insertPromises = galleryItems.map(item => 
      db.insert(schema.gallery).values(item)
    );
    
    await Promise.all(insertPromises);
    console.log(`Se insertaron ${galleryItems.length} imágenes en la galería.`);
  } catch (error) {
    console.error('Error al insertar imágenes:', error);
  } finally {
    process.exit(0);
  }
}

insertGalleryImages();
