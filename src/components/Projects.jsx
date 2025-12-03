import React from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Website about recipes. After logging in, you can add a recipe, add to favorites, have a shopping list...",
    tech: "Node.js | Express.js | MongoDB",
    image: "/projects/book-to-cook.webp",
    link: "https://cookbook.com.pl"
  },
  {
    title: "Website about wedding. Contains information such as: countdown, invitation, RSVP",
    tech: "Node.js | Express.js",
    image: "/projects/wedding.webp",
    link: "#"
  },
  {
    title: "Pure HTML & CSS project with Sass and Grid layout",
    tech: "HTML | CSS",
    image: "/projects/nails.webp",
    link: "https://karolinakotwica.github.io/Beauty-world-grid/"
  },
  {
    title: "Website using CSS Grid",
    tech: "HTML | SASS | GRID",
    image: "/projects/Project_grid.webp",
    link: "https://grid-website-1.netlify.app/"
  },
  {
    title: "Website based on Flexbox",
    tech: "HTML | SASS | FLEXBOX",
    image: "/projects/hotel-reservation.webp",
    link: "https://hotel-reservation-2.netlify.app/"
  },
  {
    title: "Landing page using Sass",
    tech: "HTML | SASS",
    image: "/projects/Naturos.webp",
    link: "https://karolinakotwica.github.io/Website-Natours/"
  },
  {
    title: "Guess the Number game",
    tech: "HTML | JAVASCRIPT",
    image: "/projects/guess-number.webp",
    link: "https://karolinakotwica.github.io/Game---Guess-my-number/"
  },
  {
    title: "Excel website with rhymed content",
    tech: "HTML | CSS | JAVASCRIPT",
    image: "/projects/Excel_website.webp",
    link: "https://karolinakotwica.github.io/Excel/access.html"
  },
  {
    title: "Beauty salon website from PSD template",
    tech: "HTML | CSS | JAVASCRIPT",
    image: "/projects/beauty_website.webp",
    link: "https://karolinakotwica.github.io/Beauty-salon/index.html"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects__grid">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            className="project-card-wrapper"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: i * 0.1
            }}
          >
            <a
              href={project.link}
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-card__image">
                <img src={project.image} loading="lazy" alt={project.title} />
              </div>

              <div className="project-card__content">
                <p className="project-tech">{project.tech}</p>
                <h3 className="project-title">{project.title}</h3>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
