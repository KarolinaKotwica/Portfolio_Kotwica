import { useContext } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const Hero = () => {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang] || translations.en;


  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <motion.h2
        className="hero__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t.heroTitle}
      </motion.h2>

      <motion.p
        className="hero__subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {t.heroSubtitle}
      </motion.p>

      <motion.button
        type="button"
        className="hero__scroll-indicator hero__scroll-indicator--hero"
        onClick={scrollToAbout}
        aria-label="Scroll to About section"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <motion.span
          className="hero__scroll-icon"
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={20} aria-hidden="true" />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default Hero;
