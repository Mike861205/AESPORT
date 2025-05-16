import React, { useRef, useState } from "react";
import { useTranslation } from "@/lib/useTranslation";

// Los estilos están pensados para que el video se muestre correctamente en todas las pantallas
// y mantenga su aspecto cinematográfico
const VideoSection = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          {t("officialVideoTitle")}
        </h2>
        
        <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
          {/* Usamos un poster (imagen de fondo) mientras se carga el video */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            controls
            poster="/tournament-poster.jpg"
            preload="metadata"
          >
            <source 
              src="/MC King - Play 2 Win (Himno Oficial Los Cabos Soccer Tournament).mp3" 
              type="audio/mp3" 
            />
            {t("browserNotSupported")}
          </video>
          
          {/* Botón play central que desaparece cuando inicia el video */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-all duration-300"
              aria-label="Play video"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-primary bg-opacity-90 hover:bg-opacity-100 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 md:h-12 md:w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </button>
          )}
        </div>
        
        <p className="text-center text-gray-300 mt-6 italic">
          {t("officialVideoDescription")}
        </p>
      </div>
    </section>
  );
};

export default VideoSection;