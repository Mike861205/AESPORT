import { useTranslation } from "@/lib/useTranslation";
import LogoImage from "@/assets/LogoImage";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { name: t("home"), href: "#inicio" },
    { name: t("tournament"), href: "#torneo" },
    { name: t("gallery"), href: "#galeria" },
    { name: t("venues"), href: "#sedes" },
    { name: t("teams"), href: "#equipos" },
    { name: t("packages"), href: "#paquetes" },
    { name: t("sponsors"), href: "#patrocinadores" },
    { name: t("register"), href: "#registro" },
    { name: t("contact"), href: "#contacto" },
  ];

  const tournamentInfo = [
    { name: t("rules"), href: "#" },
    { name: t("matchSchedule"), href: "#equipos" },
    { name: t("categories"), href: "#torneo" },
    { name: t("scouts"), href: "#torneo" },
    { name: t("prizes"), href: "#torneo" },
    { name: t("sponsor"), href: "#" },
    { name: t("faq"), href: "#" },
  ];

  return (
    <footer className="bg-[#333333] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <div className="flex items-center mb-4">
              <LogoImage className="h-12 w-auto mr-3" />
              <h3 className="font-montserrat font-bold text-lg">
                Los Cabos Soccer Tournament
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              {t("heroDescription")}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/LosCabosSoccerTournament" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/loscabossoccertournament/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">
              {t("tournamentInfo")}
            </h4>
            <ul className="space-y-2">
              {tournamentInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {info.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">
              {t("contact")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-secondary mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400">{t("address")}</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-secondary mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:ventas@loscabossoccertournament.com"
                  className="text-gray-400 hover:text-white transition-colors break-words inline-block"
                >
                  ventas@loscabossoccertournament.com
                </a>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-secondary mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+526241910031"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +52 (624) 191-0031
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>{t("copyright")}</p>
          <div className="flex justify-center mt-2 space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              {t("privacyPolicy")}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t("terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
