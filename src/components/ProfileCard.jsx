import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";


const ProfileCard = () => {
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsStuck(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`profile-card ${isStuck ? "profile-card--stuck" : ""}`}>
      <div className="profile-card__photo"></div>

      <h2 className="profile-card__name">Karolina Kotwica</h2>
      <p className="profile-card__role">Web Developer</p>
      <p className="profile-card__location">Switzerland</p>

      <ul className="profile-card__socials">
        <li><FaGithub /></li>
        <li><FaLinkedin /></li>
        <li><FaEnvelope /></li>
      </ul>
    </div>
  );
};

export default ProfileCard;
