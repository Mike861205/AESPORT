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

// Define the storage interface with CRUD methods
export interface IStorage {
  // Registration methods
  createRegistration(registration: InsertRegistration): Promise<Registration>;
  getRegistration(id: number): Promise<Registration | undefined>;
  getRegistrations(): Promise<Registration[]>;

  // Teams methods
  createTeam(team: InsertTeam): Promise<Team>;
  getTeam(id: number): Promise<Team | undefined>;
  getTeams(category?: string): Promise<Team[]>;

  // Matches methods
  createMatch(match: InsertMatch): Promise<Match>;
  getMatch(id: number): Promise<Match | undefined>;
  getMatches(date?: string): Promise<Match[]>;

  // Standings methods
  createStanding(standing: InsertStanding): Promise<Standing>;
  getStanding(id: number): Promise<Standing | undefined>;
  getStandingsByCategory(category: string): Promise<Standing[]>;

  // Players methods
  createPlayer(player: InsertPlayer): Promise<Player>;
  getPlayer(id: number): Promise<Player | undefined>;
  getTopScorersByCategory(category: string): Promise<Player[]>;
  getTopAssistsByCategory(category: string): Promise<Player[]>;

  // Venues methods
  createVenue(venue: InsertVenue): Promise<Venue>;
  getVenue(id: number): Promise<Venue | undefined>;
  getVenues(): Promise<Venue[]>;

  // Packages methods
  createPackage(pkg: InsertPackage): Promise<Package>;
  getPackage(id: number): Promise<Package | undefined>;
  getPackages(type?: string): Promise<Package[]>;

  // Gallery methods
  createGalleryItem(item: InsertGallery): Promise<Gallery>;
  getGalleryItem(id: number): Promise<Gallery | undefined>;
  getGallery(): Promise<Gallery[]>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private registrations: Map<number, Registration>;
  private teams: Map<number, Team>;
  private matches: Map<number, Match>;
  private standings: Map<number, Standing>;
  private players: Map<number, Player>;
  private venues: Map<number, Venue>;
  private packages: Map<number, Package>;
  private gallery: Map<number, Gallery>;
  
  private registrationId: number;
  private teamId: number;
  private matchId: number;
  private standingId: number;
  private playerId: number;
  private venueId: number;
  private packageId: number;
  private galleryId: number;

  constructor() {
    this.registrations = new Map();
    this.teams = new Map();
    this.matches = new Map();
    this.standings = new Map();
    this.players = new Map();
    this.venues = new Map();
    this.packages = new Map();
    this.gallery = new Map();
    
    this.registrationId = 1;
    this.teamId = 1;
    this.matchId = 1;
    this.standingId = 1;
    this.playerId = 1;
    this.venueId = 1;
    this.packageId = 1;
    this.galleryId = 1;

    // Initialize with sample data
    this.initializeSampleData();
  }

  // Registration methods
  async createRegistration(registration: InsertRegistration): Promise<Registration> {
    const id = this.registrationId++;
    const newRegistration = { 
      ...registration, 
      id,
      createdAt: new Date() 
    } as Registration;
    
    this.registrations.set(id, newRegistration);
    return newRegistration;
  }

  async getRegistration(id: number): Promise<Registration | undefined> {
    return this.registrations.get(id);
  }

  async getRegistrations(): Promise<Registration[]> {
    return Array.from(this.registrations.values());
  }

  // Teams methods
  async createTeam(team: InsertTeam): Promise<Team> {
    const id = this.teamId++;
    const newTeam = { ...team, id } as Team;
    this.teams.set(id, newTeam);
    return newTeam;
  }

  async getTeam(id: number): Promise<Team | undefined> {
    return this.teams.get(id);
  }

  async getTeams(category?: string): Promise<Team[]> {
    const teams = Array.from(this.teams.values());
    if (category && category !== "all") {
      return teams.filter(team => team.category === category);
    }
    return teams;
  }

  // Matches methods
  async createMatch(match: InsertMatch): Promise<Match> {
    const id = this.matchId++;
    const newMatch = { ...match, id } as Match;
    this.matches.set(id, newMatch);
    return newMatch;
  }

  async getMatch(id: number): Promise<Match | undefined> {
    return this.matches.get(id);
  }

  async getMatches(date?: string): Promise<Match[]> {
    const matches = Array.from(this.matches.values());
    if (date) {
      return matches.filter(match => match.date.includes(date));
    }
    return matches;
  }

  // Standings methods
  async createStanding(standing: InsertStanding): Promise<Standing> {
    const id = this.standingId++;
    const newStanding = { ...standing, id } as Standing;
    this.standings.set(id, newStanding);
    return newStanding;
  }

  async getStanding(id: number): Promise<Standing | undefined> {
    return this.standings.get(id);
  }

  async getStandingsByCategory(category: string): Promise<Standing[]> {
    const standings = Array.from(this.standings.values());
    return standings.filter(standing => standing.category === category);
  }

  // Players methods
  async createPlayer(player: InsertPlayer): Promise<Player> {
    const id = this.playerId++;
    const newPlayer = { ...player, id } as Player;
    this.players.set(id, newPlayer);
    return newPlayer;
  }

  async getPlayer(id: number): Promise<Player | undefined> {
    return this.players.get(id);
  }

  async getTopScorersByCategory(category: string): Promise<Player[]> {
    const players = Array.from(this.players.values());
    return players
      .filter(player => player.category === category && player.goals && player.goals > 0)
      .sort((a, b) => (b.goals || 0) - (a.goals || 0))
      .slice(0, 5);
  }

  async getTopAssistsByCategory(category: string): Promise<Player[]> {
    const players = Array.from(this.players.values());
    return players
      .filter(player => player.category === category && player.assists && player.assists > 0)
      .sort((a, b) => (b.assists || 0) - (a.assists || 0))
      .slice(0, 5);
  }

  // Venues methods
  async createVenue(venue: InsertVenue): Promise<Venue> {
    const id = this.venueId++;
    const newVenue = { ...venue, id } as Venue;
    this.venues.set(id, newVenue);
    return newVenue;
  }

  async getVenue(id: number): Promise<Venue | undefined> {
    return this.venues.get(id);
  }

  async getVenues(): Promise<Venue[]> {
    return Array.from(this.venues.values());
  }

  // Packages methods
  async createPackage(pkg: InsertPackage): Promise<Package> {
    const id = this.packageId++;
    const newPackage = { ...pkg, id } as Package;
    this.packages.set(id, newPackage);
    return newPackage;
  }

  async getPackage(id: number): Promise<Package | undefined> {
    return this.packages.get(id);
  }

  async getPackages(type?: string): Promise<Package[]> {
    const packages = Array.from(this.packages.values());
    if (type) {
      return packages.filter(pkg => pkg.type === type);
    }
    return packages;
  }

  // Gallery methods
  async createGalleryItem(item: InsertGallery): Promise<Gallery> {
    const id = this.galleryId++;
    const newItem = { ...item, id } as Gallery;
    this.gallery.set(id, newItem);
    return newItem;
  }

  async getGalleryItem(id: number): Promise<Gallery | undefined> {
    return this.gallery.get(id);
  }

  async getGallery(): Promise<Gallery[]> {
    return Array.from(this.gallery.values());
  }

  // Initialize sample data for testing
  private async initializeSampleData() {
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

    // Sample gallery items
    const galleryData: InsertGallery[] = [
      {
        image: "/src/assets/481775531_924190173234932_7293576038941216848_n.jpg",
        title: "Los Cabos Soccer Tournament",
        subtitle: "6ta Edición • 2024"
      },
      {
        image: "/src/assets/481679446_924191703234779_4143634726266410243_n.jpg",
        title: "Equipos Participantes",
        subtitle: "6ta Edición • 2024"
      },
      {
        image: "/src/assets/482353475_924192896567993_4444384978929572157_n.jpg",
        title: "Acción en el Campo",
        subtitle: "Categorías Juveniles"
      },
      {
        image: "/src/assets/481994196_924193319901284_5391320162709966153_n.jpg",
        title: "Talento Joven",
        subtitle: "Futuras Estrellas"
      },
      {
        image: "/src/assets/481903267_924194226567860_5930671976104748809_n.jpg",
        title: "Campeones",
        subtitle: "Celebración de Victoria"
      },
      {
        image: "/src/assets/482345468_924194813234468_3613115002131673064_n.jpg",
        title: "Ceremonia de Premiación",
        subtitle: "Reconociendo el Esfuerzo"
      },
      {
        image: "/src/assets/482023569_924194816567801_2560799370087253780_n.jpg",
        title: "Colaboración",
        subtitle: "Equipos y Organizadores"
      },
      {
        image: "/src/assets/481982354_924194806567802_3590107069296800161_n.jpg",
        title: "Campeones del Torneo",
        subtitle: "Orgullo y Éxito"
      }
    ];

    for (const item of galleryData) {
      await this.createGalleryItem(item);
    }
  }
}

import { DatabaseStorage } from './database-storage';

// Cambiamos de MemStorage a DatabaseStorage para persistencia en PostgreSQL
export const storage = new DatabaseStorage();
