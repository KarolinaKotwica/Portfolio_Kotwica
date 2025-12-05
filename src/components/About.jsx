import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const About = () => {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang] || translations.en;

  return (
    <section id="about" className="about">
      <h2 className="section-title">{t.aboutTitle}</h2>

      <p className="about__text">{t.aboutP1}</p>
      <p className="about__text">{t.aboutP2}</p>
      <p className="about__text">{t.aboutP3}</p>
    </section>
  );
};

export default About;
