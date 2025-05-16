import { useTranslation } from "@/lib/useTranslation";
import CountdownTimer from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-hero-pattern py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="font-montserrat font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">
            Los Cabos Soccer<br />
            Tournament
          </h1>
          <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-secondary mb-8">
            7ma Edición • 11-16 Noviembre 2025
          </h2>
          <p className="text-lg md:text-xl mb-8">El torneo de fútbol juvenil más importante de Baja California Sur, México.</p>

          {/* Countdown Timer */}
          <CountdownTimer />

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#registro">
              <Button
                variant="default"
                size="lg"
                className="bg-secondary text-primary font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all w-full sm:w-auto"
              >
                Inscribe tu Equipo
              </Button>
            </a>
            <a href="#torneo">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-primary font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all w-full sm:w-auto"
              >
                Conoce el Torneo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
