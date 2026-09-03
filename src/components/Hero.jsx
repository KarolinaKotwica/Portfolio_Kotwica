import { m } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { scrollToElement } from "../utils/scroll";

const Hero = () => {
  const { t } = useLanguage();
  const isMobile = useMediaQuery("(max-width: 820px)");

  return (
    <section className="hero">
      <m.h2
        className="hero__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t.heroTitle}
      </m.h2>

      <m.p
        className="hero__subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {t.heroSubtitle}
      </m.p>

      {!isMobile && (
        <m.button
          type="button"
          className="hero__scroll-indicator hero__scroll-indicator--hero"
          onClick={() => scrollToElement("about")}
          aria-label={t.scroll.toAbout}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <m.span
            className="hero__scroll-icon"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown size={20} aria-hidden="true" />
          </m.span>
        </m.button>
      )}
    </section>
  );
};

export default Hero;
