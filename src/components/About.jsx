import { useLanguage } from "../hooks/useLanguage";
import SectionTransition from "./SectionTransition";

const About = () => {
  const { t } = useLanguage();

  return (
    <SectionTransition>
    <section id="about" className="about">
      <h2 className="section-title">{t.aboutTitle}</h2>

      <p className="about__text">{t.aboutP1}</p>
      <p className="about__text">{t.aboutP2}</p>
      <p className="about__text">{t.aboutP3}</p>
    </section>
    </SectionTransition>
  );
};

export default About;
