import { useState } from "react";
import { useTranslation } from "@/lib/useTranslation";
import { FormData } from "@/types";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const RegistrationForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    teamName: "",
    category: "",
    city: "",
    teamSize: 0,
    coachName: "",
    coachPhone: "",
    coachEmail: "",
    coachPosition: "",
    needAccommodation: false,
    needTransportation: false,
    comments: "",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    
    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));
    
    // Clear error when field is filled
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Required fields
    if (!formData.teamName.trim()) newErrors.teamName = "Team name is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.city.trim()) newErrors.city = "City/State is required";
    if (!formData.teamSize || formData.teamSize < 8) 
      newErrors.teamSize = "Valid number of players is required (min 8)";
    if (!formData.coachName.trim()) newErrors.coachName = "Coach name is required";
    if (!formData.coachPhone.trim()) newErrors.coachPhone = "Phone number is required";
    if (!formData.coachEmail.trim()) newErrors.coachEmail = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.coachEmail)) 
      newErrors.coachEmail = "Email is invalid";
    if (!formData.coachPosition) newErrors.coachPosition = "Position is required";
    if (!formData.acceptTerms) 
      newErrors.acceptTerms = "You must accept the terms and conditions";
    
    // reCAPTCHA validation - removido temporalmente
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Función de reCAPTCHA eliminada

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: t("formError"),
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Enviar los datos del formulario sin reCAPTCHA
      const response = await apiRequest("POST", "/api/register", formData);
      
      // Verificar si la respuesta contiene información sobre el estado del email
      const responseData = response as any; // Casting para acceder a datos personalizados
      const emailSent = responseData?.emailSent === true;
      
      toast({
        title: t("formSuccess"),
        description: emailSent ? t("formSuccessDetail") : t("formSuccessNoEmail"),
        duration: 10000, // Mostrar por más tiempo para que el usuario pueda leer bien el mensaje
        className: "bg-green-50 border-l-4 border-green-500 text-green-900 p-4 shadow-lg",
      });
      
      // Reset form
      setFormData({
        teamName: "",
        category: "",
        city: "",
        teamSize: 0,
        coachName: "",
        coachPhone: "",
        coachEmail: "",
        coachPosition: "",
        needAccommodation: false,
        needTransportation: false,
        comments: "",
        acceptTerms: false,
      });
      
      // El reCAPTCHA ha sido eliminado
      
    } catch (error: any) {
      console.error("Error submitting form:", error);
      
      // Intentar obtener un mensaje de error más informativo si la API devuelve detalles
      let errorMessage = t("formError");
      
      // Si hay respuesta con datos y errores detallados
      if (error.response?.data?.errors && Array.isArray(error.response.data.errors)) {
        const firstError = error.response.data.errors[0];
        if (firstError.message) {
          errorMessage = firstError.message;
          console.log("Campo con error:", firstError.field);
        }
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form id="registration-form" className="space-y-6" onSubmit={handleSubmit}>
      {/* Team Information */}
      <div>
        <h3 className="font-montserrat font-bold text-xl text-primary mb-4">
          Información del Equipo
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="teamName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre del Equipo *
            </label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              className={`w-full p-3 border ${
                errors.teamName ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
              required
            />
            {errors.teamName && (
              <p className="text-red-500 text-xs mt-1">{errors.teamName}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("category")} *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`w-full p-3 border ${
                errors.category ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
              required
            >
              <option value="">{t("selectCategory")}</option>
              <option value="2018">{t("cat2018")}</option>
              <option value="2017">{t("cat2017")}</option>
              <option value="2016">{t("cat2016")}</option>
              <option value="2015">{t("cat2015")}</option>
              <option value="2014">{t("cat2014")}</option>
              <option value="2013">{t("cat2013")}</option>
              <option value="2012">{t("cat2012")}</option>
              <option value="2011">{t("cat2011")}</option>
              <option value="2010">{t("cat2010")}</option>
              <option value="2009">{t("cat2009")}</option>
              <option value="2008">{t("cat2008")}</option>
              <option value="libre">{t("catLibre")}</option>
              <option value="mamafut">{t("catMamaFut")}</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-xs mt-1">{errors.category}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("city")} *
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full p-3 border ${
                errors.city ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
              required
            />
            {errors.city && (
              <p className="text-red-500 text-xs mt-1">{errors.city}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="teamSize"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("numberOfPlayers")} *
            </label>
            <input
              type="number"
              id="teamSize"
              name="teamSize"
              value={formData.teamSize || ""}
              onChange={handleChange}
              min="8"
              max="25"
              className={`w-full p-3 border ${
                errors.teamSize ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
              required
            />
            {errors.teamSize && (
              <p className="text-red-500 text-xs mt-1">{errors.teamSize}</p>
            )}
          </div>
        </div>
      </div>

      {/* Coach/Contact Information */}
      <div>
        <h3 className="font-montserrat font-bold text-xl text-primary mb-4">
          {t("coachInfo")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="coachName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("coachName")} *
            </label>
            <input
              type="text"
              id="coachName"
              name="coachName"
              value={formData.coachName}
              onChange={handleChange}
              className={`w-full p-3 border ${
                errors.coachName ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
              required
            />
            {errors.coachName && (
              <p className="text-red-500 text-xs mt-1">{errors.coachName}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="coachPhone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("coachPhone")} *
            </label>
            <input
              type="tel"
              id="coachPhone"
              name="coachPhone"
              value={formData.coachPhone}
              onChange={handleChange}
              className={`w-full p-3 border ${
                errors.coachPhone ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
              required
            />
            {errors.coachPhone && (
              <p className="text-red-500 text-xs mt-1">{errors.coachPhone}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="coachEmail"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("coachEmail")} *
            </label>
            <input
              type="email"
              id="coachEmail"
              name="coachEmail"
              value={formData.coachEmail}
              onChange={handleChange}
              className={`w-full p-3 border ${
                errors.coachEmail ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
              required
            />
            {errors.coachEmail && (
              <p className="text-red-500 text-xs mt-1">{errors.coachEmail}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="coachPosition"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("position")} *
            </label>
            <select
              id="coachPosition"
              name="coachPosition"
              value={formData.coachPosition}
              onChange={handleChange}
              className={`w-full p-3 border ${
                errors.coachPosition ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
              required
            >
              <option value="">{t("selectPosition")}</option>
              <option value="coach">{t("headCoach")}</option>
              <option value="assistant">{t("assistantCoach")}</option>
              <option value="director">{t("technicalDirector")}</option>
              <option value="manager">{t("manager")}</option>
              <option value="parent">{t("parentGuardian")}</option>
            </select>
            {errors.coachPosition && (
              <p className="text-red-500 text-xs mt-1">{errors.coachPosition}</p>
            )}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div>
        <h3 className="font-montserrat font-bold text-xl text-primary mb-4">
          {t("additionalInfo")}
        </h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="needAccommodation"
              name="needAccommodation"
              checked={formData.needAccommodation}
              onChange={handleChange}
              className="mt-1 mr-3"
            />
            <div>
              <label htmlFor="needAccommodation" className="font-medium">
                {t("needAccommodation")}
              </label>
              <p className="text-sm text-gray-600">{t("accommodationDesc")}</p>
            </div>
          </div>
          <div className="flex items-start">
            <input
              type="checkbox"
              id="needTransportation"
              name="needTransportation"
              checked={formData.needTransportation}
              onChange={handleChange}
              className="mt-1 mr-3"
            />
            <div>
              <label htmlFor="needTransportation" className="font-medium">
                {t("needTransportation")}
              </label>
              <p className="text-sm text-gray-600">{t("transportationDesc")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Comments */}
      <div>
        <label
          htmlFor="comments"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {t("comments")}
        </label>
        <textarea
          id="comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-start">
        <input
          type="checkbox"
          id="acceptTerms"
          name="acceptTerms"
          checked={formData.acceptTerms}
          onChange={handleChange}
          className={`mt-1 mr-3 ${errors.acceptTerms ? "border-red-500" : ""}`}
          required
        />
        <div>
          <label htmlFor="acceptTerms" className="font-medium">
            {t("acceptTerms")} *
          </label>
          <p className="text-sm text-gray-600">
            {t("termsText")} {" "}
            <a href="#" className="text-primary hover:underline">
              {t("termsLink")}
            </a>{" "}
            {t("and")} {" "}
            <a href="#" className="text-primary hover:underline">
              {t("privacyLink")}
            </a>
          </p>
          {errors.acceptTerms && (
            <p className="text-red-500 text-xs mt-1">{errors.acceptTerms}</p>
          )}
        </div>
      </div>

      {/* reCAPTCHA se ha eliminado temporalmente */}

      {/* Submit Button */}
      <div className="text-center">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-secondary text-primary font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Inscribir Equipo...
            </>
          ) : (
            "Inscribir Equipo"
          )}
        </Button>
        
        {/* Mensaje informativo */}
        <p className="mt-6 text-sm text-gray-600 italic">
          {t("registrationConfirmation")}
        </p>
      </div>
    </form>
  );
};

export default RegistrationForm;
