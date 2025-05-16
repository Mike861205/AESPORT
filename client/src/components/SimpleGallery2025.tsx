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
      image: "https://images.unsplash.com/photo-1624880357913-a8539888de79?q=80&w=1600&auto=format&fit=crop",
      title: "Categorías Juveniles",
      subtitle: "Máximo 20 Jugadores"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1624728043501-c7a9aaa68a57?q=80&w=1600&auto=format&fit=crop",
      title: "Angel Olsín",
      subtitle: "Visor Confirmado de Pachuca"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1600&auto=format&fit=crop",
      title: "CABODATO",
      subtitle: "Jugadores Alistados a Fuerzas Básicas"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1599232288126-22cfd41051b7?q=80&w=1600&auto=format&fit=crop",
      title: "Equipos Participantes",
      subtitle: "6ta Edición • NOV 2025"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop",
      title: "Infinite Athlete",
      subtitle: "6ta Edición • NOV 2025"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1518996380789-8bc1701986ca?q=80&w=1600&auto=format&fit=crop",
      title: "Equipos Sub-10",
      subtitle: "6ta Edición • NOV 2025"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1434648957308-5e6a859697e8?q=80&w=1600&auto=format&fit=crop",
      title: "Acción en la Cancha",
      subtitle: "6ta Edición • NOV 2025"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1600&auto=format&fit=crop",
      title: "FC Zorritos",
      subtitle: "Orgullo de Los Cabos"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=1600&auto=format&fit=crop",
      title: "Entrenadores y Jugadores",
      subtitle: "6ta Edición • NOV 2025"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed?q=80&w=1600&auto=format&fit=crop",
      title: "Campeones del Torneo",
      subtitle: "LCST 5ta Edición"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1574027542338-14112e8a716c?q=80&w=1600&auto=format&fit=crop",
      title: "PLAY2WIN LCST",
      subtitle: "6ta Edición • 12-17 NOV 2025"
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
        {images.map((image) => (
          <div key={image.id} className="relative group overflow-hidden rounded-lg shadow-md">
            <img
              src={image.image}
              alt={image.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                <p className="font-montserrat font-bold">{image.title}</p>
                <p>{image.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleGallery;