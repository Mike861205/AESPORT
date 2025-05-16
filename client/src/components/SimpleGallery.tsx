import { useTranslation } from "@/lib/useTranslation";

const SimpleGallery = () => {
  const { t } = useTranslation();
  
  // Usaremos URLs públicas y seguras de Unsplash
  const images = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=1600&auto=format&fit=crop",
      title: "Sede Los Cabos",
      subtitle: "2da Edición"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551280857-2b9b2376d53e?q=80&w=1600&auto=format&fit=crop", 
      title: "Categorías Juveniles",
      subtitle: "Máximo 20 Jugadores"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1600&auto=format&fit=crop",
      title: "Angel Olsín",
      subtitle: "Visor Confirmado de Pachuca"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop",
      title: "CABODATO",
      subtitle: "Jugadores Alistados a Fuerzas Básicas"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?q=80&w=1600&auto=format&fit=crop",
      title: "Equipos Participantes",
      subtitle: "6ta Edición • NOV 2024"
    },
    {
      id: 6, 
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1600&auto=format&fit=crop",
      title: "Infinite Athlete",
      subtitle: "6ta Edición • NOV 2024"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?q=80&w=1600&auto=format&fit=crop",
      title: "Equipos Sub-10",
      subtitle: "6ta Edición • NOV 2024"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1600&auto=format&fit=crop",
      title: "Acción en la Cancha",
      subtitle: "6ta Edición • NOV 2024"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1600&auto=format&fit=crop",
      title: "FC Zorritos",
      subtitle: "Orgullo de Los Cabos"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1598881034611-c54f354a09af?q=80&w=1600&auto=format&fit=crop",
      title: "Entrenadores y Jugadores",
      subtitle: "6ta Edición • NOV 2024"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1515923152115-758a6b16f35e?q=80&w=1600&auto=format&fit=crop",
      title: "Campeones del Torneo",
      subtitle: "LCST 5ta Edición"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=1600&auto=format&fit=crop",
      title: "PLAY2WIN LCST",
      subtitle: "6ta Edición • 12-17 NOV 2024"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">
          {t("galleryTitle")}
        </h2>
        <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
        <p className="max-w-3xl mx-auto text-lg">
          {t("galleryDescription")}
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((item) => (
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
    </div>
  );
};

export default SimpleGallery;