import { useTranslation } from "@/lib/useTranslation";
import RegistrationForm from "@/components/RegistrationForm";

const RegistrationSection = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">
            {t("registerTitle")}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg">
            {t("registerDescription")}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default RegistrationSection;
