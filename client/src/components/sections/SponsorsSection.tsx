import React from "react";
import { useTranslation } from "@/lib/useTranslation";
import { Button } from "@/components/ui/button";
import { HandshakeIcon, FileIcon, DownloadIcon, Users } from "lucide-react";

const SponsorsSection = () => {
  const { t } = useTranslation();

  const handleDownloadPDF = () => {
    // Ruta al archivo PDF ubicado en la carpeta public/docs
    const pdfUrl = '/docs/SOCIOS LOS CABOS SOCCER TOURNAMENT ACTUALIZADO MAYO 2025.pdf';
    
    // Abre el PDF en una nueva pestaña
    window.open(pdfUrl, '_blank');
  };

  return (
    <section id="sponsors" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t("sponsors")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("sponsorsDescription")}
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                <HandshakeIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t("partnershipBenefits")}</h3>
                <p className="text-gray-600">
                  {t("partnershipBenefitsDesc")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t("audienceReach")}</h3>
                <p className="text-gray-600">
                  {t("audienceReachDesc")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                <FileIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t("sponsorshipPackages")}</h3>
                <p className="text-gray-600">
                  {t("sponsorshipPackagesDesc")}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Button 
                onClick={handleDownloadPDF}
                className="bg-secondary text-primary hover:bg-secondary/90 flex items-center gap-2 py-6 px-8 text-lg"
              >
                <DownloadIcon className="h-5 w-5" />
                {t("downloadSponsorInfo")}
              </Button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center text-primary">{t("whyBecomeSponsor")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                <p>{t("sponsorReason1")}</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                <p>{t("sponsorReason2")}</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                <p>{t("sponsorReason3")}</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                <p>{t("sponsorReason4")}</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                <p>{t("sponsorReason5")}</p>
              </li>
            </ul>

            <div className="border-t border-gray-200 mt-8 pt-8">
              <p className="text-center font-bold text-xl text-primary mb-4">{t("interestedSponsor")}</p>
              <div className="flex justify-center">
                <Button className="bg-primary text-white hover:bg-primary/90">
                  {t("contactUs")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;