import { useTranslation } from "@/lib/useTranslation";
import { Venue } from "@/types";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface VenueCardProps {
  venue: Venue;
}

const VenueCard = ({ venue }: VenueCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="bg-light rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
      <img
        src={venue.image}
        alt={venue.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="font-montserrat font-bold text-xl text-primary mb-2">
            {venue.name}
          </h3>
          <p className="text-gray-700 mb-4">{venue.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {venue.features.map((feature, index) => (
              <span
                key={index}
                className="bg-primary bg-opacity-10 text-primary text-sm py-1 px-3 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <MapPin className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
            <span>{venue.location}</span>
          </div>
        </div>
        
        {venue.mapUrl && (
          <div className="mt-auto pt-2">
            <a 
              href={venue.mapUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button 
                variant="secondary" 
                className="w-full flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-primary font-semibold"
              >
                <MapPin className="h-4 w-4" />
                {t("viewMap")}
              </Button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default VenueCard;
