import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ProfileCard = () => {
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsStuck(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <div className={`profile-card ${isStuck ? "profile-card--stuck" : ""}`}>
        <div className="profile-card__photo"></div>

        <div className="profile-card__info">
          <h2 className="profile-card__name">Karolina Kotwica</h2>
          <p className="profile-card__role">Web Developer</p>
          <p className="profile-card__location">Switzerland</p>

          <ul className="profile-card__socials">
            <li>
              <a
                href="https://github.com/KarolinaKotwica"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/karolina-k-0330a4223/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="mailto:karolina.kotwica@powercoders.org">
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ✅ STRZAŁKA POD KARTĄ – LEKKIE SCROLL DOWN */}
      <motion.button
        type="button"
        className="hero__scroll-indicator hero__scroll-indicator--profile"
        onClick={scrollDownSlightly}
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
          <ChevronDown size={20} />
        </motion.span>
      </motion.button>
    </>
  );
};

export default ProfileCard;
