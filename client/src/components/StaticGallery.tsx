import React from 'react';
import { useTranslation } from '@/lib/useTranslation';

const StaticGallery: React.FC = () => {
  const { t } = useTranslation();
  
  // Las imágenes están en la carpeta pública y podemos acceder directamente con rutas relativas
  const images = [
    {
      id: 1,
      url: '/gallery-images/480322273_909730764680873_1851939665253931371_n.jpg',
      title: 'Sede Los Cabos',
      subtitle: '2da Edición'
    },
    {
      id: 2,
      url: '/gallery-images/481669276_922157023438247_8712901074579883240_n.jpg',
      title: 'Categorías Juveniles',
      subtitle: 'Máximo 20 Jugadores'
    },
    {
      id: 3,
      url: '/gallery-images/481776657_923612889959327_5956490530320706811_n.jpg',
      title: 'Angel Olsín',
      subtitle: 'Visor Confirmado de Pachuca'
    },
    {
      id: 4,
      url: '/gallery-images/481785461_922706960049920_7577861548638452234_n.jpg',
      title: 'CABODATO',
      subtitle: 'Jugadores Alistados a Fuerzas Básicas'
    },
    {
      id: 5,
      url: '/gallery-images/481670467_924188043235145_6133843336931895207_n.jpg',
      title: 'Equipos Participantes',
      subtitle: '6ta Edición • NOV 2024'
    },
    {
      id: 6,
      url: '/gallery-images/481914332_924188296568453_4147828020214817037_n.jpg',
      title: 'Infinite Athlete',
      subtitle: '6ta Edición • NOV 2024'
    },
    {
      id: 7,
      url: '/gallery-images/481774150_924189233235026_6059054713111046316_n.jpg',
      title: 'Equipos Sub-10',
      subtitle: '6ta Edición • NOV 2024'
    },
    {
      id: 8,
      url: '/gallery-images/481658961_924190416568241_8209967177483676678_n.jpg',
      title: 'Acción en la Cancha',
      subtitle: '6ta Edición • NOV 2024'
    },
    {
      id: 9,
      url: '/gallery-images/481775531_924190173234932_7293576038941216848_n.jpg',
      title: 'FC Zorritos',
      subtitle: 'Orgullo de Los Cabos'
    },
    {
      id: 10,
      url: '/gallery-images/481679446_924191703234779_4143634726266410243_n.jpg',
      title: 'Entrenadores y Jugadores',
      subtitle: '6ta Edición • NOV 2024'
    },
    {
      id: 11,
      url: '/gallery-images/482221180_921951026792180_472302613700955818_n.jpg',
      title: 'Campeones del Torneo',
      subtitle: 'LCST 5ta Edición'
    },
    {
      id: 12,
      url: '/gallery-images/481662753_924186396568643_8593886648106008020_n.jpg',
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

export default StaticGallery;