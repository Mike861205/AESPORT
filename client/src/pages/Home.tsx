import { useRef } from "react";
import { useTranslation } from "@/lib/useTranslation";
import HeroSection from "@/components/sections/HeroSection";
import SponsorLogosSection from "@/components/sections/SponsorLogosSection"; 
import TournamentSection from "@/components/sections/TournamentSection";
import StaticGallery from "@/components/StaticGallery2025";
import VenuesSection from "@/components/sections/VenuesSection";
import TeamsSection from "@/components/sections/TeamsSection";
import PackagesSection from "@/components/sections/PackagesSection";
import RegistrationSection from "@/components/sections/RegistrationSection";
import ContactSection from "@/components/sections/ContactSection";
import SponsorsSection from "@/components/sections/SponsorsSection";

const Home = () => {
  const { t } = useTranslation();
  
  // Refs for scrolling
  const inicioRef = useRef<HTMLDivElement>(null);
  const torneoRef = useRef<HTMLDivElement>(null);
  const galeriaRef = useRef<HTMLDivElement>(null);
  const sedesRef = useRef<HTMLDivElement>(null);
  const equiposRef = useRef<HTMLDivElement>(null);
  const paquetesRef = useRef<HTMLDivElement>(null);
  const registroRef = useRef<HTMLDivElement>(null);
  const patrocinadoresRef = useRef<HTMLDivElement>(null);
  const contactoRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      {/* Hero Section */}
      <section id="inicio" ref={inicioRef}>
        <HeroSection />
      </section>

      {/* Sponsor Logos Section */}
      <section>
        <SponsorLogosSection />
      </section>

      {/* Tournament Info Section */}
      <section id="torneo" ref={torneoRef} className="py-16 bg-white">
        <TournamentSection />
      </section>

      {/* Gallery Section */}
      <section id="galeria" ref={galeriaRef} className="py-16 bg-light">
        <StaticGallery />
      </section>

      {/* Venues Section */}
      <section id="sedes" ref={sedesRef} className="py-16 bg-white">
        <VenuesSection />
      </section>

      {/* Teams & Schedule Section */}
      <section id="equipos" ref={equiposRef} className="py-16 bg-light">
        <TeamsSection />
      </section>

      {/* Packages Section */}
      <section id="paquetes" ref={paquetesRef} className="py-16 bg-white">
        <PackagesSection />
      </section>

      {/* Registration Form Section */}
      <section id="registro" ref={registroRef} className="py-16 bg-light">
        <RegistrationSection />
      </section>
      
      {/* Sponsors Section */}
      <section id="patrocinadores" ref={patrocinadoresRef} className="py-16 bg-white">
        <SponsorsSection />
      </section>

      {/* Contact Section */}
      <section id="contacto" ref={contactoRef} className="py-16 bg-primary text-white">
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;
