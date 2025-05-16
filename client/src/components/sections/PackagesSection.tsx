import { useTranslation } from "@/lib/useTranslation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PackagesSection = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">
          {t("packagesTitle")}
        </h2>
        <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
        <p className="max-w-3xl mx-auto text-lg">
          {t("packagesDescription")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Hospedaje */}
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="relative h-64 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Hoteles en Los Cabos" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <h3 className="text-white font-bold text-2xl p-6">
                {t("accommodation")}
              </h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              {t("accommodationText")}
            </p>
          </div>
        </div>

        {/* Transporte */}
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="relative h-64 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Transporte en Los Cabos" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <h3 className="text-white font-bold text-2xl p-6">
                {t("transportation")}
              </h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              {t("transportationText")}
            </p>
          </div>
        </div>

        {/* Destino */}
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="relative h-64 overflow-hidden">
            <img 
              src="/Cabo-San-Lucas-Beaches.jpg" 
              alt="Arco de Cabo San Lucas" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <h3 className="text-white font-bold text-2xl p-6">
                {t("destination")}
              </h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              {t("destinationText")}
            </p>
          </div>
        </div>
      </div>

      <div className="text-center bg-primary/5 py-10 px-6 rounded-xl shadow-sm">
        <h3 className="font-bold text-xl mb-4 text-primary">{t("needCustomPackage")}</h3>
        <p className="mb-6 text-lg max-w-3xl mx-auto">
          {t("packageHelp")}
        </p>
        <a href="#contacto">
          <Button
            variant="default"
            className="inline-flex items-center bg-secondary text-primary font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all"
          >
            {t("requestInfo")} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default PackagesSection;
