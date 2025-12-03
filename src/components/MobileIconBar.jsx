import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Home, FolderKanban, Wrench, Award, User } from "lucide-react";

const SECTIONS = [
  { id: "top", icon: <Home size={20} /> },
  { id: "about", icon: <User size={20} /> },
  { id: "tech", icon: <Wrench size={20} /> },
  { id: "projects", icon: <FolderKanban size={20} /> },
  { id: "certificates", icon: <Award size={20} /> },
];

const MobileIconBar = () => {
  const [active, setActive] = useState("top");
  const containerRef = useRef(null);
  const btnRefs = useRef({});

  // ✅ DETEKCJA SCROLLA
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 120) setActive("top");
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    ["about", "projects", "tech", "certificates"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // ✅ RUCH PILL
  const [pillStyle, setPillStyle] = useState({});

  useLayoutEffect(() => {
    const btn = btnRefs.current[active];
    const container = containerRef.current;

    if (btn && container) {
      const btnRect = btn.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      setPillStyle({
        width: btnRect.width,
        height: btnRect.height,
        x: btnRect.left - containerRect.left,
        y: btnRect.top - containerRect.top,
      });
    }
  }, [active]);

  const scrollTo = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <div className="mobile-icon-wrapper">
    <motion.div
      className="mobile-icon-bar"
      ref={containerRef}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      {/* ✅ ANIMOWANY PILL */}
      <motion.div
        className="mobile-pill"
        animate={pillStyle}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      {SECTIONS.map((item) => (
        <button
          key={item.id}
          ref={(el) => (btnRefs.current[item.id] = el)}
          onClick={() => scrollTo(item.id)}
          className={`mobile-icon-btn ${
            active === item.id ? "active" : ""
          }`}
        >
          {item.icon}
        </button>
      ))}
    </motion.div>
    </div>
    </>
  );
};

export default MobileIconBar;
