import React from "react";

const SKILLS = {
  Frontend: [
    "React",
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3 / SCSS",
    "Bootstrap"
  ],

  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs"
  ],

  Databases: [
    "MongoDB",
    "MySQL / SQL",
    "DB2"
  ],

  "Programming Languages": [
    "JavaScript",
    "TypeScript",
    "Python"
  ],

  CMS: [
    "WordPress"
  ],
  
  "Tools & Workflow": [
    "Git & GitHub",
    "npm",
    "Vite",
    "VS Code"
  ],
};

const Skills = () => {
  return (
    <section id="tech" className="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__categories">
        {Object.entries(SKILLS).map(([category, items]) => (
          <div className="skills-category" key={category}>
            <h3 className="skills-category__title">{category}</h3>

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
  );
};

export default Skills;
