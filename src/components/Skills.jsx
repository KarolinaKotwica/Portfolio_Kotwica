import { useLanguage } from "../hooks/useLanguage";
import SectionTransition from "./SectionTransition";
import { SKILLS } from "../data/skills";

const Skills = () => {
  const { t } = useLanguage();

  return (
    <SectionTransition>
    <section id="tech" className="skills">
      <h2 className="section-title">{t.skillsTitle}</h2>

      <div className="skills__categories">
        {Object.entries(SKILLS).map(([key, items]) => (
          <div className="skills-category" key={key}>
            <h3 className="skills-category__title">
              {t.skillsCategories[key]}
            </h3>

            <div className="skills__grid">
              {items.map((skill) => (
                <div className="skill-tag" key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </SectionTransition>
  );
};

export default Skills;
