import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import SectionTransition from "./SectionTransition";

const SKILLS = {
  frontend: [
    "React",
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3 / SCSS",
    "Bootstrap",
  ],

  backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
  ],

  databases: [
    "MongoDB",
    "MySQL / SQL",
    "DB2",
  ],

  languages: [
    "JavaScript",
    "TypeScript",
    "Python",
  ],

  cms: [
    "WordPress",
  ],

  tools: [
    "Git & GitHub",
    "npm",
    "Vite",
    "VS Code",
  ],
};

const Skills = () => {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang] || translations.en;

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
