import { useTranslation } from "@/lib/useTranslation";
import { Package } from "@/types";
import { Button } from "@/components/ui/button";

interface PackageCardProps {
  packageData: Package;
}

const PackageCard = ({ packageData }: PackageCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="bg-light rounded-xl overflow-hidden shadow-md">
      <img
        src={packageData.image}
        alt={packageData.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h4 className="font-montserrat font-bold text-xl text-primary mb-2">
          {packageData.name}
        </h4>
        <p className="text-gray-700 mb-4">{packageData.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {packageData.features.map((feature, index) => (
            <span
              key={index}
              className="bg-primary bg-opacity-10 text-primary text-sm py-1 px-3 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-600">{t("from")}</span>
            <p className="text-xl font-bold text-primary">
              ${packageData.price} MXN
              <span className="text-sm font-normal">
                {packageData.perNight
                  ? `/${t("night")}`
                  : packageData.perPerson
                  ? `/${t("person")}/${t("day")}`
                  : `/${t("day")}`}
              </span>
            </p>
          </div>
          <Button
            variant="default"
            className="bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-accent transition-colors"
          >
            {t("book")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
