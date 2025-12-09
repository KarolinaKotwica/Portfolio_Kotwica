import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const Hero = () => {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang] || translations.en;


  const scrollToAbout = () => {
    const target = document.getElementById("about");
    if (!target) return;
  
    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + startY;
    const distance = targetY - startY;
    const duration = 900; // im więcej = wolniej (Apple ~900–1100)
  
    let startTime = null;
  
    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  
    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
  
      window.scrollTo(0, startY + distance * ease);
  
      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };
  
    requestAnimationFrame(animateScroll);
  };
  
  

  return (
    <section className="hero">
      <motion.h1
        className="hero__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t.heroTitle}
      </motion.h1>

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
          <ChevronDown size={20} />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default Hero;
