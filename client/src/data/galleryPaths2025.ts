import { GalleryItem } from '@/types';

// Importar todas las imágenes de galería directamente desde attached_assets
import img1 from '@assets/480322273_909730764680873_1851939665253931371_n.jpg';
import img2 from '@assets/481669276_922157023438247_8712901074579883240_n.jpg';
import img3 from '@assets/481776657_923612889959327_5956490530320706811_n.jpg';
import img4 from '@assets/481785461_922706960049920_7577861548638452234_n.jpg';
import img5 from '@assets/481670467_924188043235145_6133843336931895207_n.jpg';
import img6 from '@assets/481914332_924188296568453_4147828020214817037_n.jpg';
import img7 from '@assets/481774150_924189233235026_6059054713111046316_n.jpg';
import img8 from '@assets/481658961_924190416568241_8209967177483676678_n.jpg';
import img9 from '@assets/481775531_924190173234932_7293576038941216848_n.jpg';
import img10 from '@assets/481679446_924191703234779_4143634726266410243_n.jpg';
import img11 from '@assets/482221180_921951026792180_472302613700955818_n.jpg';
import img12 from '@assets/481662753_924186396568643_8593886648106008020_n.jpg';

// Exportar los elementos de la galería con las imágenes importadas
export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: img1,
    title: "Sede Los Cabos",
    subtitle: "2da Edición"
  },
  {
    id: 2,
    image: img2,
    title: "Categorías Juveniles",
    subtitle: "Máximo 20 Jugadores"
  },
  {
    id: 3,
    image: img3,
    title: "Angel Olsín",
    subtitle: "Visor Confirmado de Pachuca"
  },
  {
    id: 4,
    image: img4,
    title: "CABODATO",
    subtitle: "Jugadores Alistados a Fuerzas Básicas"
  },
  {
    id: 5,
    image: img5,
    title: "Equipos Participantes",
    subtitle: "6ta Edición • NOV 2025"
  },
  {
    id: 6,
    image: img6,
    title: "Infinite Athlete",
    subtitle: "6ta Edición • NOV 2025"
  },
  {
    id: 7,
    image: img7,
    title: "Equipos Sub-10",
    subtitle: "6ta Edición • NOV 2025"
  },
  {
    id: 8,
    image: img8,
    title: "Acción en la Cancha",
    subtitle: "6ta Edición • NOV 2025"
  },
  {
    id: 9,
    image: img9,
    title: "FC Zorritos",
    subtitle: "Orgullo de Los Cabos"
  },
  {
    id: 10,
    image: img10,
    title: "Entrenadores y Jugadores",
    subtitle: "6ta Edición • NOV 2025"
  },
  {
    id: 11,
    image: img11,
    title: "Campeones del Torneo",
    subtitle: "LCST 5ta Edición"
  },
  {
    id: 12,
    image: img12,
    title: "PLAY2WIN LCST",
    subtitle: "6ta Edición • 12-17 NOV 2025"
  }
];