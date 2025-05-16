import React from 'react';

const SponsorLogosSection = () => {
  return (
    <div className="py-10 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-8 text-primary underline">
          Gracias al Ayuntamiento de Los Cabos y al INDEM por el apoyo, compromiso y gestión a nuestros niños y jóvenes en el Deporte
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-16">
          <div className="w-44 h-44 relative">
            <img 
              src="/logo-sponsor1.jpeg" 
              alt="Logo INDEM" 
              className="object-contain w-full h-full"
            />
          </div>
          <div className="w-44 h-44 relative">
            <img 
              src="/logo-sponsor2.jpeg" 
              alt="Logo Ayuntamiento de Los Cabos" 
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorLogosSection;