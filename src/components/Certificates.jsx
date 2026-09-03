import { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const CERTIFICATES = [
  { image: "/certificate/Advance-css.webp" },
  { image: "/certificate/seo.webp" },
  { image: "/certificate/sql-mysql_for_data_analytics.webp" },
  { image: "/certificate/sql.webp" },
  { image: "/certificate/web_dev.webp" }
];

const Certificates = () => {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang] || translations.en;

  return (
    <section id="certificates" className="certificates">
      <h2 className="section-title">{t.certificatesTitle}</h2>

      <div className="certificates__grid">
        {CERTIFICATES.map((cert, i) => (
          <motion.div
            key={i}
            className="cert-tile-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: i * 0.1
            }}
          >
            <div className="cert-tile">
              <div className="cert-tile__image">
                <img
                  src={cert.image}
                  loading="lazy"
                  alt="certificate"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
