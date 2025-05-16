import React from 'react';
import { useTranslation } from '@/lib/useTranslation';

const BasicGallery: React.FC = () => {
  const { t } = useTranslation();
  
  // Usamos placeholders de servicios externos para garantizar que las imágenes carguen
  const images = [
    {
      id: 1,
      url: 'https://placehold.co/600x400/0047AB/FFFFFF?text=Los+Cabos+Soccer',
      title: 'Sede Los Cabos',
      subtitle: '2da Edición'
    },
    {
      id: 2,
      url: 'https://placehold.co/600x400/0047AB/FFFFFF?text=Categorías+Juveniles',
      title: 'Categorías Juveniles',
      subtitle: 'Máximo 20 Jugadores'
    },
    {
      id: 3,
      url: 'https://placehold.co/600x400/0047AB/FFFFFF?text=Angel+Olsín',
      title: 'Angel Olsín',
      subtitle: 'Visor Confirmado de Pachuca'
    },
    {
      id: 4,
      url: 'https://placehold.co/600x400/0047AB/FFFFFF?text=CABODATO',
      title: 'CABODATO',
      subtitle: 'Jugadores Alistados a Fuerzas Básicas'
    },
    {
      id: 5,
      url: 'https://placehold.co/600x400/0047AB/FFFFFF?text=Equipos+Participantes',
      title: 'Equipos Participantes',
      subtitle: '6ta Edición • NOV 2024'
    },
    {
      id: 6,
      url: 'https://placehold.co/600x400/0047AB/FFFFFF?text=Infinite+Athlete',
      title: 'Infinite Athlete',
      subtitle: '6ta Edición • NOV 2024'
    },
    {
      id: 7,
      url: 'https://placehold.co/600x400/0047AB/FFFFFF?text=Equipos+Sub-10',
      title: 'Equipos Sub-10',
      subtitle: '6ta Edición • NOV 2024'
    },
    {
      id: 8,
      url: 'https://placehold.co/600x400/0047AB/FFFFFF?text=Acción+en+la+Cancha',
      title: 'Acción en la Cancha',
      subtitle: '6ta Edición • NOV 2024'
    },
    {
      id: 9,
      url: 'https://placehold.co/600x400/0047AB/FFFFFF?text=FC+Zorritos',
      title: 'FC Zorritos',
      subtitle: 'Orgullo de Los Cabos'
    },
    {
      id: 10,
      url: 'https://placehold.co/600x400/0047AB/FFFFFF?text=Entrenadores+y+Jugadores',
      title: 'Entrenadores y Jugadores',
      subtitle: '6ta Edición • NOV 2024'
    },
    {
      id: 11,
      url: 'https://placehold.co/600x400/0047AB/FFFFFF?text=Campeones+del+Torneo',
      title: 'Campeones del Torneo',
      subtitle: 'LCST 5ta Edición'
    },
    {
      id: 12,
      url: 'https://placehold.co/600x400/0047AB/FFFFFF?text=PLAY2WIN+LCST',
      title: 'PLAY2WIN LCST',
      subtitle: '6ta Edición • 12-17 NOV 2024'
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
              src={image.url}
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

export default BasicGallery;