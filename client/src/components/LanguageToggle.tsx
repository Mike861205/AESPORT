import { useTranslation } from "@/lib/useTranslation";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const LanguageToggle = () => {
  const { language, changeLanguage, t } = useTranslation();

  const toggleLanguage = () => {
    changeLanguage(language === "es" ? "en" : "es");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed bottom-6 left-6 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-50"
            onClick={toggleLanguage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary"
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
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          {language === "es" ? "Switch to English" : "Cambiar a Español"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LanguageToggle;
