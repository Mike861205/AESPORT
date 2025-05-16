import { useState } from "react";
import { useTranslation } from "@/lib/useTranslation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Importamos directamente las imágenes necesarias para asegurar que se incluyan durante el build
import img1 from "@assets/480322273_909730764680873_1851939665253931371_n.jpg";
import img2 from "@assets/481669276_922157023438247_8712901074579883240_n.jpg";
import img3 from "@assets/481776657_923612889959327_5956490530320706811_n.jpg";
import img4 from "@assets/481785461_922706960049920_7577861548638452234_n.jpg";
import img5 from "@assets/481670467_924188043235145_6133843336931895207_n.jpg";
import img6 from "@assets/481914332_924188296568453_4147828020214817037_n.jpg";
import img7 from "@assets/481774150_924189233235026_6059054713111046316_n.jpg";
import img8 from "@assets/481658961_924190416568241_8209967177483676678_n.jpg";
import img9 from "@assets/481775531_924190173234932_7293576038941216848_n.jpg";
import img10 from "@assets/481679446_924191703234779_4143634726266410243_n.jpg";
import img11 from "@assets/482221180_921951026792180_472302613700955818_n.jpg";
import img12 from "@assets/481662753_924186396568643_8593886648106008020_n.jpg";

// Definimos las imágenes usando las variables importadas
const galleryImages = [
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
    subtitle: "6ta Edición • NOV 2024"
  },
  {
    id: 6,
    image: img6,
    title: "Infinite Athlete",
    subtitle: "6ta Edición • NOV 2024"
  },
  {
    id: 7,
    image: img7,
    title: "Equipos Sub-10",
    subtitle: "6ta Edición • NOV 2024"
  },
  {
    id: 8,
    image: img8,
    title: "Acción en la Cancha",
    subtitle: "6ta Edición • NOV 2024"
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
    subtitle: "6ta Edición • NOV 2024"
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
    subtitle: "6ta Edición • 12-17 NOV 2024"
  }
];

const GalleryWithStaticImages = () => {
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState(12);

  const handleViewMore = () => {
    setVisibleItems(Math.min(visibleItems + 4, galleryImages.length));
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {galleryImages.slice(0, visibleItems).map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                <p className="font-montserrat font-bold">{item.title}</p>
                <p>{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleItems < galleryImages.length && (
        <div className="mt-8 text-center">
          <Button 
            onClick={handleViewMore}
            className="bg-secondary hover:bg-secondary/90 text-white"
          >
            Ver más <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default GalleryWithStaticImages;