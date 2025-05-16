import { useState } from "react";
import { useTranslation } from "@/lib/useTranslation";
import { GalleryItem } from "@/types";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface GalleryProps {
  items: GalleryItem[];
}

const Gallery = ({ items }: GalleryProps) => {
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState(12);

  const handleViewMore = () => {
    setVisibleItems(Math.min(visibleItems + 4, items.length));
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.slice(0, visibleItems).map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                <p className="font-montserrat font-bold">{item.title}</p>
                <p>{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleItems < items.length && (
        <div className="text-center mt-8">
          <Button 
            variant="default" 
            className="inline-flex items-center bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-accent transition-colors"
            onClick={handleViewMore}
          >
            {t("viewMore")} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
