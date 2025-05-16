import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "@/lib/useTranslation";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Registration {
  id: number;
  teamName: string;
  category: string;
  timestamp: Date;
}

const RecentRegistrations = () => {
  const { t, language } = useTranslation();
  const [visibleNotification, setVisibleNotification] = useState<Registration | null>(null);

  // Datos de equipos y categorías para simular registros
  const teamRegistrations: Registration[] = [
    { id: 1, teamName: "La Joya", category: "Sub-10", timestamp: new Date() },
    { id: 2, teamName: "La Joya", category: "Sub-12", timestamp: new Date() },
    { id: 3, teamName: "La Joya", category: "Sub-14", timestamp: new Date() },
    { id: 4, teamName: "Pachuca", category: "Sub-8", timestamp: new Date() },
    { id: 5, teamName: "Pachuca", category: "Sub-12", timestamp: new Date() },
    { id: 6, teamName: "Pachuca", category: "Sub-17", timestamp: new Date() },
    { id: 7, teamName: "Zorritos", category: "Sub-10", timestamp: new Date() },
    { id: 8, teamName: "Zorritos", category: "Sub-14", timestamp: new Date() },
    { id: 9, teamName: "Zorritos", category: "Sub-17", timestamp: new Date() },
  ];

  // Función para seleccionar una notificación aleatoria
  const getRandomNotification = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * teamRegistrations.length);
    return teamRegistrations[randomIndex];
  }, []);

  // Función para mostrar y ocultar notificaciones en un ciclo de 10 segundos
  const cycleNotifications = useCallback(() => {
    // Mostrar una notificación aleatoria
    const notification = getRandomNotification();
    setVisibleNotification({
      ...notification,
      timestamp: new Date() // Actualizar la hora actual
    });

    // Ocultar la notificación después de 7 segundos
    const hideTimer = setTimeout(() => {
      setVisibleNotification(null);
    }, 7000);

    // Configurar el próximo ciclo
    const nextCycleTimer = setTimeout(() => {
      cycleNotifications();
    }, 10000); // Exactamente 10 segundos entre el inicio de cada notificación

    // Limpiar temporizadores cuando se desmonte el componente
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextCycleTimer);
    };
  }, [getRandomNotification]);

  // Iniciar el ciclo cuando se monta el componente
  useEffect(() => {
    // Iniciar después de un segundo de retraso inicial
    const initialTimer = setTimeout(() => {
      cycleNotifications();
    }, 1000);

    return () => clearTimeout(initialTimer);
  }, [cycleNotifications]);

  return (
    <AnimatePresence>
      {visibleNotification && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, x: -20 }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 30,
            duration: 0.6 
          }}
          className="fixed bottom-6 left-6 z-50 max-w-xs"
        >
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border-l-4 border-primary">
            <div className="flex items-center p-4">
              <div className="flex-shrink-0 bg-green-100 p-2 rounded-full mr-3">
                <Check className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  <span className="font-bold text-primary">{visibleNotification.teamName}</span>{" "}
                  <span>
                    {language === "es" 
                      ? "se acaba de inscribir al torneo Los Cabos Soccer" 
                      : "just registered for the Los Cabos Soccer Tournament"}
                  </span>
                </p>
                <p className="text-sm text-gray-600 font-semibold">
                  {language === "es" 
                    ? `Categoría: ${visibleNotification.category}` 
                    : `Category: ${visibleNotification.category}`}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {visibleNotification.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
            <div className="h-1 bg-gradient-to-r from-primary to-secondary"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RecentRegistrations;