import { Team, Match, Standing, Player, Venue, Package, Feature, GalleryItem } from "@/types";

// Teams data
export const teams: Team[] = [
  {
    id: 1,
    name: "FC Zorritos",
    category: "2013",
    location: "Los Cabos"
  },
  {
    id: 2,
    name: "Delfines Tijuana",
    category: "2015",
    location: "Tijuana"
  },
  {
    id: 3,
    name: "Lobos Sinaloa",
    category: "2011",
    location: "Culiacán"
  },
  {
    id: 4,
    name: "Águilas GDL",
    category: "2008",
    location: "Guadalajara"
  },
  {
    id: 5,
    name: "Pequeños Marinos",
    category: "2018",
    location: "La Paz"
  },
  {
    id: 6,
    name: "Tiburones Baja",
    category: "2013",
    location: "Ensenada"
  }
];

// Matches data
export const matches: Match[] = [
  {
    id: 1,
    date: "11 Nov 2025",
    time: "09:00",
    category: "sub10",
    teamA: "FC Zorritos",
    teamB: "Delfines Tijuana",
    venue: "Estadio Principal",
    status: "scheduled"
  },
  {
    id: 2,
    date: "11 Nov 2025",
    time: "11:00",
    category: "sub14",
    teamA: "Lobos Sinaloa",
    teamB: "Águilas GDL",
    venue: "Complejo Deportivo",
    status: "scheduled"
  },
  {
    id: 3,
    date: "12 Nov 2025",
    time: "10:00",
    category: "sub8",
    teamA: "Pequeños Marinos",
    teamB: "Tiburones Baja",
    venue: "Campo Municipal",
    status: "scheduled"
  },
  {
    id: 4,
    date: "13 Nov 2025",
    time: "16:00",
    category: "sub17",
    teamA: "Águilas GDL",
    teamB: "FC Zorritos",
    venue: "Cancha Sintética",
    status: "scheduled"
  }
];

// Standings data
export const standings: Standing[] = [
  {
    id: 1,
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
    category: "2013"
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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

// Players data (goal scorers and assists)
export const goalScorers: Player[] = [
  {
    id: 1,
    name: "Carlos Mendoza",
    team: "FC Zorritos",
    goals: 7,
    category: "sub12"
  },
  {
    id: 2,
    name: "Luis Ramírez",
    team: "Delfines Tijuana",
    goals: 5,
    category: "sub12"
  },
  {
    id: 3,
    name: "Javier Torres",
    team: "Tiburones Baja",
    goals: 4,
    category: "sub12"
  }
];

export const assists: Player[] = [
  {
    id: 4,
    name: "Daniel Morales",
    team: "FC Zorritos",
    assists: 6,
    category: "sub12"
  },
  {
    id: 5,
    name: "Miguel Castro",
    team: "Delfines Tijuana",
    assists: 4,
    category: "sub12"
  },
  {
    id: 6,
    name: "Sergio Vega",
    team: "Tiburones Baja",
    assists: 3,
    category: "sub12"
  }
];

// Venues data
export const venues: Venue[] = [
  {
    id: 1,
    name: "Cancha Palmas Nueva Creación",
    description: "Cancha de césped sintético situada en la colonia Las Palmas, con excelentes instalaciones para categorías juveniles.",
    image: "/images/venues/cancha-palmas-nueva-creacion.jpg",
    features: ["Césped Sintético", "Iluminación", "Estacionamiento", "Área de Calentamiento"],
    location: "C. Palma Fosterina, Colonia Las Palmas, 23477, B.C.S.",
    mapUrl: "https://goo.gl/maps/G59CEyn2bzWmDYxEA",
    number: "01"
  },
  {
    id: 2,
    name: "Cancha Palmas",
    description: "Cancha deportiva cercana a la anterior, también situada en la colonia Las Palmas, ideal para partidos simultáneos.",
    image: "/images/venues/cancha-palmas.jpg",
    features: ["Césped Sintético", "Gradas", "Áreas Comunes", "Estacionamiento"],
    location: "C. Palma Fosterina, Colonia Las Palmas, 23477, B.C.S.",
    mapUrl: "https://goo.gl/maps/GYDMZpm9AvjNGDdx6",
    number: "02"
  },
  {
    id: 3,
    name: "Cancha Lomas del Sol",
    description: "Campo deportivo en el área de Lomas del Sol, con buenas instalaciones y acceso para espectadores.",
    image: "/images/venues/cancha-lomas-del-sol.jpg",
    features: ["Césped Natural", "Áreas Deportivas", "Estacionamiento", "Enfermería"],
    location: "C. Atmósfera y C. Centella, Col. Lomas del Sol, 23477, B.C.S.",
    mapUrl: "https://goo.gl/maps/T7hSE5VbZAo5DYt56",
    number: "03"
  },
  {
    id: 4,
    name: "Estadio Delegación Leonardo Gastelúm",
    description: "Estadio con capacidad significativa, perfecto para partidos de mayor categoría y eventos especiales del torneo.",
    image: "/images/venues/estadio-leonardo-gastelum.jpg",
    features: ["Césped Natural", "Gradas", "Vestidores", "Iluminación Profesional"],
    location: "Auditorio Leonardo Gastelum, 23460, B.C.S.",
    mapUrl: "https://goo.gl/maps/sVZCJEYSxtwLp6eV7",
    number: "04"
  },
  {
    id: 5,
    name: "Cancha Parque El Arenal",
    description: "Cancha deportiva en el área de El Arenal, ubicada cerca de la carretera principal para fácil acceso.",
    image: "/images/venues/cancha-parque-el-arenal.jpg",
    features: ["Césped Sintético", "Áreas Recreativas", "Acceso a Transporte", "Estacionamiento"],
    location: "Gral. Bibiano Dávalos, El Arenal, 23460 Cabo San Lucas, B.C.S.",
    mapUrl: "https://goo.gl/maps/D4Ci7xmhpXpgvUzR7",
    number: "05"
  },
  {
    id: 6,
    name: "Estadio Don Koll",
    description: "Estadio principal con múltiples instalaciones deportivas, ideal para las finales y partidos más importantes del torneo.",
    image: "/images/venues/estadio-don-koll.jpg",
    features: ["Césped Natural", "Gradas Amplias", "Vestidores Completos", "Área VIP"],
    location: "Calle Pacífico Los Cangrejos, 23473, B.C.S.",
    mapUrl: "https://goo.gl/maps/VZXdeP8f16SNfkh67",
    number: "06"
  }
];

// Packages data
export const accommodationPackages: Package[] = [
  {
    id: 1,
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
    id: 2,
    name: "Hotel Confort Los Cabos",
    description: "Paquete estándar con alojamiento cómodo, excelente ubicación y fácil acceso a las sedes del torneo.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    features: ["Céntrico", "Piscina", "WiFi", "Gimnasio"],
    price: 800,
    perNight: true,
    perPerson: false,
    type: "accommodation"
  }
];

export const transportationPackages: Package[] = [
  {
    id: 3,
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
    id: 4,
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

// Features data
export const features: Feature[] = [
  {
    id: 1,
    icon: "medal",
    title: "Categorías",
    description: "Competencia en múltiples categorías por año de nacimiento, categoría libre y Mamá Fut.",
    items: [
      "2018",
      "2017",
      "2016",
      "2015",
      "2014",
      "2013",
      "2012", 
      "2011",
      "2010",
      "2009",
      "2008",
      "Libre",
      "Mamá Fut"
    ],
    type: "categories"
  },
  {
    id: 2,
    icon: "trophy",
    title: "Premios",
    description: "Reconocimientos y premios para los equipos destacados en cada categoría del torneo.",
    items: [
      "Trofeos para campeones y subcampeones",
      "Medallas para todos los participantes",
      "Reconocimientos individuales",
      "Premio al goleador del torneo",
      "Premio al mejor portero"
    ],
    type: "prizes"
  },
  {
    id: 3,
    icon: "eye",
    title: "Visores",
    description: "Oportunidad única para que los jóvenes talentos sean observados por visores y entrenadores profesionales.",
    items: [
      "Visores de academias profesionales",
      "Entrenadores de equipos nacionales",
      "Representantes de clubes deportivos",
      "Oportunidades de becas deportivas",
      "Evaluación técnica profesional"
    ],
    type: "scouts"
  },
  {
    id: 4,
    icon: "location",
    title: "Sedes",
    description: "Canchas e instalaciones de primer nivel preparadas para ofrecer la mejor experiencia deportiva.",
    items: [
      "Canchas profesionales de césped natural",
      "Canchas de césped sintético",
      "Vestidores y áreas de calentamiento",
      "Zonas para espectadores",
      "Servicios completos para equipos"
    ],
    type: "venues"
  },
  {
    id: 5,
    icon: "hotel",
    title: "Hospedaje",
    description: "Opciones de alojamiento convenientes y cómodas para equipos y familias durante el torneo.",
    items: [
      "Hoteles asociados con tarifas especiales",
      "Opciones para diferentes presupuestos",
      "Ubicaciones cercanas a las sedes",
      "Paquetes todo incluido disponibles",
      "Asistencia para reservaciones"
    ],
    type: "accommodation"
  },
  {
    id: 6,
    icon: "bus",
    title: "Transporte",
    description: "Servicios de transporte para facilitar la movilidad de equipos entre hoteles y sedes del torneo.",
    items: [
      "Traslados aeropuerto-hotel",
      "Transporte hotel-sedes deportivas",
      "Vehículos con aire acondicionado",
      "Horarios coordinados con partidos",
      "Opciones para diferentes tamaños de grupos"
    ],
    type: "transportation"
  }
];

// Gallery items
export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "@assets/480322273_909730764680873_1851939665253931371_n.jpg",
    title: "Sede Los Cabos",
    subtitle: "2da Edición"
  },
  {
    id: 2,
    image: "@assets/482221180_921951026792180_472302613700955818_n.jpg",
    title: "Campeones del Torneo",
    subtitle: "LCST 5ta Edición"
  },
  {
    id: 3,
    image: "@assets/481669276_922157023438247_8712901074579883240_n.jpg",
    title: "Categorías Juveniles",
    subtitle: "Máximo 20 Jugadores"
  },
  {
    id: 4,
    image: "@assets/481785461_922706960049920_7577861548638452234_n.jpg",
    title: "CABODATO",
    subtitle: "Jugadores Alistados a Fuerzas Básicas"
  },
  {
    id: 5,
    image: "@assets/481776657_923612889959327_5956490530320706811_n.jpg",
    title: "Angel Olsín",
    subtitle: "Visor Confirmado de Pachuca"
  },
  {
    id: 6,
    image: "@assets/481662753_924186396568643_8593886648106008020_n.jpg",
    title: "PLAY2WIN LCST",
    subtitle: "7ma Edición • 11-16 NOV 2025"
  },
  {
    id: 7,
    image: "@assets/481670467_924188043235145_6133843336931895207_n.jpg",
    title: "Participantes del Torneo",
    subtitle: "7ma Edición • 11-16 NOV 2025"
  },
  {
    id: 8,
    image: "@assets/481914332_924188296568453_4147828020214817037_n.jpg",
    title: "Infinite Athlete",
    subtitle: "Equipos Participantes 2024"
  },
  {
    id: 9,
    image: "@assets/481774150_924189233235026_6059054713111046316_n.jpg",
    title: "Equipo Monterrey",
    subtitle: "7ma Edición • 11-16 NOV 2025"
  },
  {
    id: 10,
    image: "@assets/481658961_924190416568241_8209967177483676678_n.jpg",
    title: "Acción en la Cancha",
    subtitle: "Torneo Los Cabos 2025"
  },
  {
    id: 11,
    image: "@assets/481775531_924190173234932_7293576038941216848_n.jpg",
    title: "FC Zorritos",
    subtitle: "7ma Edición • 11-16 NOV 2025"
  },
  {
    id: 12,
    image: "@assets/481679446_924191703234779_4143634726266410243_n.jpg",
    title: "Entrenador y Jugadores",
    subtitle: "Torneo Los Cabos 2025"
  },
  {
    id: 13,
    image: "@assets/482353475_924192896567993_4444384978929572157_n.jpg",
    title: "Acción en el Campo",
    subtitle: "Categorías Juveniles"
  },
  {
    id: 14,
    image: "@assets/481994196_924193319901284_5391320162709966153_n.jpg",
    title: "Talento Joven",
    subtitle: "Futuras Estrellas"
  },
  {
    id: 15,
    image: "@assets/481903267_924194226567860_5930671976104748809_n.jpg",
    title: "Campeones",
    subtitle: "Celebración de Victoria"
  },
  {
    id: 16,
    image: "@assets/482345468_924194813234468_3613115002131673064_n.jpg",
    title: "Ceremonia de Premiación",
    subtitle: "Reconociendo el Esfuerzo"
  },
  {
    id: 17,
    image: "@assets/482023569_924194816567801_2560799370087253780_n.jpg",
    title: "Colaboración",
    subtitle: "Equipos y Organizadores"
  },
  {
    id: 18,
    image: "@assets/481982354_924194806567802_3590107069296800161_n.jpg",
    title: "Campeones del Torneo",
    subtitle: "Orgullo y Éxito"
  },
  {
    id: 19,
    image: "@assets/487407341_942303264756956_7863574062028340197_n.jpg",
    title: "Los Mejores Jugadores",
    subtitle: "Talento Destacado"
  }
];
