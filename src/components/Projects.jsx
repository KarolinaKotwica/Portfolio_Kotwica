import { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const PROJECTS = [
  {
    title: {
      en: "Recipe website with user authentication, recipe creation, favorites system, and shopping list functionality",
      pl: "Strona z przepisami z logowaniem użytkownika, dodawaniem przepisów, ulubionymi i listą zakupów",
      de: "Rezept-Website mit Benutzeranmeldung, Rezeptspeicherung, Favoritenfunktion und Einkaufsliste",
    },
    tech: "Node.js | Express.js | MongoDB",
    image: "/projects/cookbook.webp",
    width: 1200,
    height: 616,
    link: "https://cookbook.com.pl",
  },
  {
    title: {
      en: "Online shop for lifestyle and children's products, built with WordPress",
      pl: "Sklep internetowy z artykułami lifestyle i dla dzieci, zbudowany w WordPress",
      de: "Online-Shop für Lifestyle- und Kinderprodukte, erstellt mit WordPress",
    },
    tech: "WordPress",
    image: "/projects/superlativ.webp",
    width: 1200,
    height: 578,
    link: "https://www.superlativ.ch/",
  },
  {
    title: {
      en: "Kindergarten and daycare website built with WordPress",
      pl: "Strona żłobka i przedszkola zbudowana w WordPress",
      de: "Kita- und Tageskindergarten-Website erstellt mit WordPress",
    },
    tech: "WordPress",
    image: "/projects/rasselschischte.webp",
    width: 1200,
    height: 588,
    link: "https://rasselchischte.ch/",
  },
  {
    title: {
      en: "Wedding website with countdown timer, digital invitation and RSVP functionality",
      pl: "Strona ślubna z odliczaniem, zaproszeniem online i formularzem RSVP",
      de: "Hochzeits-Website mit Countdown, digitaler Einladung und RSVP-Funktion",
    },
    tech: "Node.js | Express.js",
    image: "/projects/wedding.webp",
    width: 1200,
    height: 596,
    link: "https://wedding-website-ki7s.onrender.com/",
  },
  {
    title: {
      en: "Pure HTML & CSS project with Sass and Grid layout",
      pl: "Projekt w czystym HTML i CSS z użyciem Sass i Grid",
      de: "Projekt mit reinem HTML und CSS unter Verwendung von Sass und Grid",
    },
    tech: "HTML | CSS",
    image: "/projects/nails.webp",
    width: 1200,
    height: 574,
    link: "https://karolinakotwica.github.io/Beauty-world-grid/",
  },
  {
    title: {
      en: "Website using CSS Grid",
      pl: "Strona internetowa oparta o CSS Grid",
      de: "Website basierend auf CSS Grid",
    },
    tech: "HTML | SASS | Grid",
    image: "/projects/Project_grid.webp",
    width: 1200,
    height: 576,
    link: "https://grid-website-1.netlify.app/",
  },
  {
    title: {
      en: "Website based on Flexbox",
      pl: "Strona internetowa oparta o Flexbox",
      de: "Website basierend auf Flexbox",
    },
    tech: "HTML | SASS | Flexbox",
    image: "/projects/hotel-reservation.webp",
    width: 1200,
    height: 572,
    link: "https://hotel-reservation-2.netlify.app/",
  },
  {
    title: {
      en: "Landing page using Sass",
      pl: "Landing page stworzony z użyciem Sass",
      de: "Landing Page mit Sass erstellt",
    },
    tech: "HTML | SASS",
    image: "/projects/Naturos.webp",
    width: 1200,
    height: 564,
    link: "https://karolinakotwica.github.io/Website-Natours/",
  },
  {
    title: {
      en: "Guess the Number game",
      pl: "Gra „Zgadnij liczbę”",
      de: "„Guess the Number“-Spiel",
    },
    tech: "HTML | JAVASCRIPT",
    image: "/projects/guess-number.webp",
    width: 1200,
    height: 588,
    link: "https://karolinakotwica.github.io/Game---Guess-my-number/",
  },
  {
    title: {
      en: "Excel website with rhymed content",
      pl: "Strona o Excelu z treścią w rymach",
      de: "Excel-Website mit Reim-Inhalten",
    },
    tech: "HTML | CSS | Javascript",
    image: "/projects/Excel_website.webp",
    width: 860,
    height: 471,
    link: "https://karolinakotwica.github.io/Excel/access.html",
  },
  {
    title: {
      en: "Beauty salon website from PSD template",
      pl: "Strona salonu kosmetycznego na podstawie projektu PSD",
      de: "Website für ein Kosmetikstudio basierend auf einer PSD-Vorlage",
    },
    tech: "HTML | CSS | Javascript",
    image: "/projects/beauty_website.webp",
    width: 860,
    height: 448,
    link: "https://karolinakotwica.github.io/Beauty-salon/index.html",
  },
];

const Projects = () => {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang] || translations.en;

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">{t.projectsTitle}</h2>

      <div className="projects__grid">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.link}
            className="project-card-wrapper"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: i * 0.1,
            }}
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
