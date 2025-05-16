export interface Team {
  id: number;
  name: string;
  category: string;
  location: string;
  logo?: string;
}

export interface Match {
  id: number;
  date: string;
  time: string;
  category: string;
  teamA: string;
  teamB: string;
  venue: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  scoreA?: number;
  scoreB?: number;
}

export interface Standing {
  id: number;
  position: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  category: string;
}

export interface Player {
  id: number;
  name: string;
  team: string;
  goals?: number;
  assists?: number;
  category: string;
}

export interface Venue {
  id: number;
  name: string;
  description: string;
  image: string;
  features: string[];
  location: string;
  mapUrl?: string;
  number?: string;
}

export interface Package {
  id: number;
  name: string;
  description: string;
  image: string;
  features: string[];
  price: number;
  perNight: boolean;
  perPerson: boolean;
  type: 'accommodation' | 'transportation';
}

export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
  items: string[];
  type: 'categories' | 'prizes' | 'scouts' | 'venues' | 'accommodation' | 'transportation';
}

export interface GalleryItem {
  id: number;
  image: string | any; // Aceptar tanto string como objetos importados
  title: string;
  subtitle: string;
}

export interface FormData {
  teamName: string;
  category: string;
  city: string;
  teamSize: number;
  coachName: string;
  coachPhone: string;
  coachEmail: string;
  coachPosition: string;
  needAccommodation: boolean;
  needTransportation: boolean;
  comments: string;
  acceptTerms: boolean;
  recaptchaToken?: string; // Token de verificación reCAPTCHA
}
