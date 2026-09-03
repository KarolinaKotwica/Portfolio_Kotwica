import { m } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import { PROJECTS } from "../data/projects";

// Grid staggers its cards once when it enters the viewport, so cards
// scrolled to later are already visible (no per-card delay build-up)
const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Projects = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">{t.projectsTitle}</h2>

      <m.div
        className="projects__grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
      >
        {PROJECTS.map((project) => (
          <m.div
            key={project.link}
            className="project-card-wrapper"
            variants={cardVariants}
          >
            <a
              href={project.link}
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-card__image">
                <img
                  src={project.image}
                  width={project.width}
                  height={project.height}
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
              </div>

              <div className="project-card__content">
                <p className="project-tech">{project.tech}</p>
                <h3 className="project-title">
                  {project.title[lang] || project.title.en}
                </h3>
              </div>
            </a>
          </m.div>
        ))}
      </m.div>
    </section>
  );
};

export default Projects;
