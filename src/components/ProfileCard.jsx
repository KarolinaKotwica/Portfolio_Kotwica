import { m } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { scrollToElement } from "../utils/scroll";

const ProfileCard = () => {
  const { t } = useLanguage();
  const isMobile = useMediaQuery("(max-width: 820px)");

  return (
    <>
      <div className="profile-card">
        <img
          className="profile-card__photo"
          src="/karolina.webp"
          alt={t.profile.portraitAlt}
          width="600"
          height="800"
          fetchPriority="high"
        />

        <div className="profile-card__info">
          <h1 className="profile-card__name">Karolina Kotwica</h1>
          <p className="profile-card__role">{t.profile.role}</p>
          <p className="profile-card__location">{t.profile.location}</p>

          <ul className="profile-card__socials">
            <li>
              <a
                href="https://github.com/KarolinaKotwica"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.profile.github}
              >
                <Github size={22} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/karolina-k-0330a4223/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.profile.linkedin}
              >
                <Linkedin size={22} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="mailto:karolina.kotwica@powercoders.org" aria-label={t.profile.email}>
                <Mail size={22} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {isMobile && (
        <m.button
          type="button"
          className="hero__scroll-indicator hero__scroll-indicator--profile"
          onClick={() => scrollToElement("main-content")}
          aria-label={t.scroll.down}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <m.span
            className="hero__scroll-icon"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown size={20} aria-hidden="true" />
          </m.span>
        </m.button>
      )}
    </>
  );
};

export default ProfileCard;
