import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { translations } from "./translations";

type Language = "es" | "en";
// Usamos string como tipo para permitir cualquier clave
type TranslationKey = string;

interface LanguageContextProps {
  language: Language;
  t: (key: TranslationKey) => string;
  changeLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: Language;
  onLanguageChange?: (lang: Language) => void;
}

export function LanguageProvider({ 
  children, 
  initialLanguage = "es",
  onLanguageChange 
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  const t = (key: TranslationKey): string => {
    // @ts-ignore - Ignoramos el error de TypeScript ya que estamos usando string como clave
    return translations[language][key] || key;
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    if (onLanguageChange) {
      onLanguageChange(lang);
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    // Set initial HTML lang attribute
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
