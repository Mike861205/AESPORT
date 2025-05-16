import { useTranslation } from "@/lib/useTranslation";
import GalleryWithStaticImages from "@/components/GalleryWithStaticImages";

const GallerySection = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">
          {t("galleryTitle")}
        </h2>
        <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
        <p className="max-w-3xl mx-auto text-lg">
          {t("galleryDescription")}
        </p>
      </div>

      <GalleryWithStaticImages />
    </div>
  );
};

export default GallerySection;
