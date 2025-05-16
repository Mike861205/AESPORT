import React from 'react';
import { useTranslation } from '@/lib/useTranslation';

const BasicGallery: React.FC = () => {
  const { t } = useTranslation();
  
  // Usamos placeholders de servicios externos para garantizar que las imágenes carguen
  const images = [
    {
      id: 1,
      url: 'https://source.unsplash.com/random/800x600/?soccer,field',
      title: 'Sede Los Cabos',
      subtitle: '2da Edición'
    },
    {
      id: 2,
      url: 'https://source.unsplash.com/random/800x600/?soccer,youth',
      title: 'Categorías Juveniles',
      subtitle: 'Máximo 20 Jugadores'
    },
    {
      id: 3,
      url: 'https://source.unsplash.com/random/800x600/?soccer,coach',
      title: 'Angel Olsín',
      subtitle: 'Visor Confirmado de Pachuca'
    },
    {
      id: 4,
      url: 'https://source.unsplash.com/random/800x600/?soccer,team',
      title: 'CABODATO',
      subtitle: 'Jugadores Alistados a Fuerzas Básicas'
    },
    {
      id: 5,
      url: 'https://source.unsplash.com/random/800x600/?soccer,tournament',
      title: 'Equipos Participantes',
      subtitle: '6ta Edición • NOV 2025'
    },
    {
      id: 6,
      url: 'https://source.unsplash.com/random/800x600/?soccer,technology',
      title: 'Infinite Athlete',
      subtitle: '6ta Edición • NOV 2025'
    },
    {
      id: 7,
      url: 'https://source.unsplash.com/random/800x600/?soccer,kids',
      title: 'Equipos Sub-10',
      subtitle: '6ta Edición • NOV 2025'
    },
    {
      id: 8,
      url: 'https://source.unsplash.com/random/800x600/?soccer,action',
      title: 'Acción en la Cancha',
      subtitle: '6ta Edición • NOV 2025'
    },
    {
      id: 9,
      url: 'https://source.unsplash.com/random/800x600/?soccer,local',
      title: 'FC Zorritos',
      subtitle: 'Orgullo de Los Cabos'
    },
    {
      id: 10,
      url: 'https://source.unsplash.com/random/800x600/?soccer,training',
      title: 'Entrenadores y Jugadores',
      subtitle: '6ta Edición • NOV 2025'
    },
    {
      id: 11,
      url: 'https://source.unsplash.com/random/800x600/?soccer,trophy',
      title: 'Campeones del Torneo',
      subtitle: 'LCST 5ta Edición'
    },
    {
      id: 12,
      url: 'https://source.unsplash.com/random/800x600/?soccer,win',
      title: 'PLAY2WIN LCST',
      subtitle: '6ta Edición • 12-17 NOV 2025'
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