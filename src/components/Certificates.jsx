import { m } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import { CERTIFICATES } from "../data/certificates";

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const tileVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Certificates = () => {
  const { t } = useLanguage();

  return (
    <section id="certificates" className="certificates">
      <h2 className="section-title">{t.certificatesTitle}</h2>

      <m.div
        className="certificates__grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
      >
        {CERTIFICATES.map((cert) => (
          <m.div
            key={cert.image}
            className="cert-tile-wrapper"
            variants={tileVariants}
          >
            <a
              className="cert-tile"
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.certificateAlt.replace("{name}", cert.name)}
            >
              <div className="cert-tile__image">
                <img
                  src={cert.image}
                  width="1600"
                  height="1190"
                  loading="lazy"
                  decoding="async"
                  alt={t.certificateAlt.replace("{name}", cert.name)}
                />
              </div>
            </a>
          </m.div>
        ))}
      </m.div>
    </section>
  );
};

export default Certificates;
