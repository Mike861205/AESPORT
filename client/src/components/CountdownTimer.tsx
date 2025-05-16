import { useState, useEffect } from "react";
import { useTranslation } from "@/lib/useTranslation";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Tournament date: November 11, 2025
    const tournamentDate = new Date("Nov 11, 2025 00:00:00");
    
    const updateCountdown = () => {
      const now = new Date();
      
      // Calcula la diferencia en milisegundos
      const distance = tournamentDate.getTime() - now.getTime();

      if (distance < 0) {
        // Si el torneo ya ha comenzado
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      // Calcula días, horas, minutos y segundos
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Initial update
    updateCountdown();

    // Set up interval
    const interval = setInterval(updateCountdown, 1000);

    // Clean up interval
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mb-8">
      <h3 className="font-montserrat font-bold text-xl mb-4">Cuenta Regresiva para el Torneo</h3>
      <div className="flex justify-center space-x-4 md:space-x-8">
        <div className="text-center">
          <div className="font-montserrat font-bold text-3xl md:text-4xl text-secondary">
            {formatTime(timeLeft.days)}
          </div>
          <div className="text-sm mt-1">Días</div>
        </div>
        <div className="text-center">
          <div className="font-montserrat font-bold text-3xl md:text-4xl text-secondary">
            {formatTime(timeLeft.hours)}
          </div>
          <div className="text-sm mt-1">Horas</div>
        </div>
        <div className="text-center">
          <div className="font-montserrat font-bold text-3xl md:text-4xl text-secondary">
            {formatTime(timeLeft.minutes)}
          </div>
          <div className="text-sm mt-1">Minutos</div>
        </div>
        <div className="text-center">
          <div className="font-montserrat font-bold text-3xl md:text-4xl text-secondary">
            {formatTime(timeLeft.seconds)}
          </div>
          <div className="text-sm mt-1">Segundos</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
