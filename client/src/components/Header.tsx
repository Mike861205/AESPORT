import { useState } from "react";
import { useTranslation } from "@/lib/useTranslation";
import LogoImage from "@/assets/LogoImage";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const Header = () => {
  const { t, language, changeLanguage } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleLangMenu = () => {
    setLangMenuOpen(!langMenuOpen);
  };

  const changeLang = (lang: "es" | "en") => {
    changeLanguage(lang);
    setLangMenuOpen(false);
  };

  const navItems = [
    { name: t("home"), href: "#inicio" },
    { name: t("tournament"), href: "#torneo" },
    { name: t("gallery"), href: "#galeria" },
    { name: t("venues"), href: "#sedes" },
    { name: t("teams"), href: "#equipos" },
    { name: t("packages"), href: "#paquetes" },
    { name: t("sponsors"), href: "#patrocinadores" },
    { name: t("contact"), href: "#contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center max-w-7xl">
        <div className="flex items-center">
          <LogoImage className="h-14 w-auto mr-3" />
          <div>
            <h1 className="font-montserrat font-bold text-lg md:text-xl text-primary">
              Los Cabos Soccer Tournament
            </h1>
            <p className="text-sm text-accent">7ma Edición • 11-16 Nov 2025</p>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-primary focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-bold text-primary hover:text-accent transition-colors whitespace-nowrap px-2"
            >
              {item.name}
            </a>
          ))}
          <div className="relative">
            <button
              className="flex items-center font-bold text-primary hover:text-accent transition-colors whitespace-nowrap px-2"
              onClick={toggleLangMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              {language.toUpperCase()}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-white shadow-lg rounded-md">
                <button
                  className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                  onClick={() => changeLang("es")}
                >
                  Español
                </button>
                <button
                  className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                  onClick={() => changeLang("en")}
                >
                  English
                </button>
              </div>
            )}
          </div>
          <a href="#registro">
            <Button 
              variant="default" 
              className="bg-secondary text-primary font-bold hover:bg-opacity-90 transition-all ml-1"
            >
              {t("register")}
            </Button>
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-bold py-2 text-primary hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="py-2">
              <p className="font-bold text-primary mb-1">{t("language")}:</p>
              <div className="flex space-x-4">
                <button
                  className={`text-sm font-bold ${
                    language === "es" ? "text-accent" : "text-gray-500"
                  }`}
                  onClick={() => changeLang("es")}
                >
                  {t("spanish")}
                </button>
                <button
                  className={`text-sm font-bold ${
                    language === "en" ? "text-accent" : "text-gray-500"
                  }`}
                  onClick={() => changeLang("en")}
                >
                  {t("english")}
                </button>
              </div>
            </div>
            <a 
              href="#registro" 
              className="bg-secondary text-primary font-bold py-3 px-4 rounded-md text-center hover:bg-opacity-90 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("register")}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
