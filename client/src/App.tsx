import { Route, Switch } from "wouter";
import Home from "@/pages/Home";
import Layout from "@/components/Layout";
import { ThemeProvider } from "@/components/ui/theme-provider";
import WhatsAppButton from "@/components/WhatsAppButton";
import LanguageToggle from "@/components/LanguageToggle";
import RecentRegistrations from "@/components/RecentRegistrations";
import PromotionBall from "@/components/PromotionBall";
import { useState } from "react";
import { LanguageProvider } from "@/lib/useTranslation";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  const [language, setLanguage] = useState<"es" | "en">("es");

  return (
    <ThemeProvider defaultTheme="light" storageKey="lcst-theme">
      <LanguageProvider initialLanguage={language} onLanguageChange={setLanguage}>
        <TooltipProvider>
          <Layout>
            <Switch>
              <Route path="/" component={Home} />
              <Route>
                <Home />
              </Route>
            </Switch>
          </Layout>
          <WhatsAppButton phoneNumber="526241910031" />
          <LanguageToggle />
          <RecentRegistrations />
          <PromotionBall />
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
