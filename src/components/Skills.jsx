import React from "react";

const SKILLS = [
  "React",
  "JavaScript",
  "TypeScript",
  "Git",
  "CSS / SCSS",
  "Node.js",
  "React",
  "JavaScript",
  "TypeScript",
  "Git",
  "CSS / SCSS",
  "Node.js",
  "React",
  "JavaScript",
  "TypeScript",
  "Git",
  "CSS / SCSS",
  "Node.js"
];

const Skills = () => {
  return (
    <section id="tech" className="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__grid">
        {SKILLS.map((skill) => (
          <div className="skill-tag" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
