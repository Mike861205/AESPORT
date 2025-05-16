import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/useTranslation";

const whatsappNumber = "526241370820";

const PromotionBall = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [currentDiscount, setCurrentDiscount] = useState(0);
  
  // Array de descuentos que rotarán
  const discounts = ["20%", "15%", "10%"];

  useEffect(() => {
    // Función para alternar la visibilidad del componente
    const toggleVisibility = () => {
      setIsVisible(true);
      
      // Ocultamos después de 10 segundos
      setTimeout(() => {
        setIsVisible(false);
      }, 10000);
    };

    // Función para cambiar el descuento actual
    const changeDiscount = () => {
      setCurrentDiscount((prev) => (prev + 1) % discounts.length);
    };

    // Mostrar inicialmente después de 3 segundos
    const initialTimeout = setTimeout(() => {
      toggleVisibility();
    }, 3000);

    // Configurar el intervalo para mostrar la promoción cada 30 segundos
    const visibilityInterval = setInterval(() => {
      toggleVisibility();
      changeDiscount();
    }, 30000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(visibilityInterval);
    };
  }, []);

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(t("promoMessage"));
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-32 right-8 z-50 cursor-pointer"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          onClick={handleClick}
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 relative">
            {/* Balón de fútbol con sombra */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-black to-gray-800 shadow-2xl border-2 border-white">
              {/* Interior blanco del balón con hexágonos negros */}
              <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center overflow-hidden">
                {/* Patrón del balón */}
                <svg 
                  viewBox="0 0 100 100" 
                  className="absolute w-full h-full"
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M50 10L65 25L50 40L35 25L50 10Z" fill="black" />
                  <path d="M25 35L40 50L25 65L10 50L25 35Z" fill="black" />
                  <path d="M75 35L90 50L75 65L60 50L75 35Z" fill="black" />
                  <path d="M50 60L65 75L50 90L35 75L50 60Z" fill="black" />
                  <path d="M50 10L65 25M50 10L35 25M65 25L50 40M65 25L75 35M50 40L35 25M50 40L40 50M35 25L25 35M25 35L10 50M25 35L40 50M10 50L25 65M40 50L25 65M40 50L50 60M25 65L35 75M75 35L90 50M75 35L60 50M90 50L75 65M60 50L75 65M60 50L50 60M75 65L65 75M50 60L65 75M50 60L35 75M65 75L50 90M35 75L50 90" stroke="black" strokeWidth="1"/>
                </svg>
                
                {/* Texto de promoción dentro del balón */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center bg-white bg-opacity-90 rounded-full p-3">
                  <div className="text-red-600 font-bold text-lg sm:text-xl text-center">
                    {t("promotion")}
                  </div>
                  <div className="font-bold text-base sm:text-lg text-center text-black">
                    {t("discountMessage")
                      .replace("%0%", discounts[0])
                      .replace("%1%", discounts[1])
                      .replace("%2%", discounts[2])}
                  </div>
                  <div className="text-sm sm:text-base mt-1 text-center text-black font-semibold animate-pulse">
                    {t("registerNow")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromotionBall;