import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ProfileCard = () => {
  const scrollDownSlightly = () => {
    const start = window.scrollY;
    const distance = 380;
    const duration = 1000;
  
    let startTime = null;
 
    const easeInOut = (t) => {
      return t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2;
    };
  
    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
  
      const linearProgress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeInOut(linearProgress);
  
      window.scrollTo(0, start + distance * easedProgress);
  
      if (linearProgress < 1) {
        requestAnimationFrame(animation);
      }
    };
  
    requestAnimationFrame(animation);
  };

  return (
    <>
      <div className="profile-card">
        <img
          className="profile-card__photo"
          src="/karolina.webp"
          alt="Portrait of Karolina Kotwica"
          width="600"
          height="800"
          fetchPriority="high"
        />

        <div className="profile-card__info">
          <h1 className="profile-card__name">Karolina Kotwica</h1>
          <p className="profile-card__role">Web Developer</p>
          <p className="profile-card__location">Switzerland</p>

          <ul className="profile-card__socials">
            <li>
              <a
                href="https://github.com/KarolinaKotwica"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithub aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/karolina-k-0330a4223/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="mailto:karolina.kotwica@powercoders.org" aria-label="Send email">
                <FaEnvelope aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <motion.button
        type="button"
        className="hero__scroll-indicator hero__scroll-indicator--profile"
        onClick={scrollDownSlightly}
        aria-label="Scroll down"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.span
          className="hero__scroll-icon"
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={20} aria-hidden="true" />
        </motion.span>
      </motion.button>
    </>
  );
};

export default ProfileCard;
