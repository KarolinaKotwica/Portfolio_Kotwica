import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Home, FolderKanban, Wrench, Award, User } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

const SECTIONS = [
  { id: "top", icon: Home },
  { id: "about", icon: User },
  { id: "tech", icon: Wrench },
  { id: "projects", icon: FolderKanban },
  { id: "certificates", icon: Award },
];

const LANGS = ["en", "pl", "de"];

const MobileIconBar = () => {
  const [active, setActive] = useState("top");
  const containerRef = useRef(null);
  const btnRefs = useRef({});
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 120) setActive("top");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the intersecting section whose center is closest to the
        // viewport center, so two adjacent sections never fight for "active"
        const viewportCenter = window.innerHeight / 2;
        const closest = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            const centerA = a.boundingClientRect.top + a.boundingClientRect.height / 2;
            const centerB = b.boundingClientRect.top + b.boundingClientRect.height / 2;
            return Math.abs(centerA - viewportCenter) - Math.abs(centerB - viewportCenter);
          })[0];

        if (closest) setActive(closest.target.id);
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    SECTIONS.filter((s) => s.id !== "top").forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const [pillStyle, setPillStyle] = useState({});

  useLayoutEffect(() => {
    const measure = () => {
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
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  const scrollTo = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="mobile-icon-wrapper" aria-label={t.nav.ariaLabel}>
      <motion.div
        className="mobile-icon-bar"
        ref={containerRef}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <motion.div
          className="mobile-pill"
          animate={pillStyle}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {SECTIONS.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              ref={(el) => {
                btnRefs.current[item.id] = el;
              }}
              onClick={() => scrollTo(item.id)}
              className={`mobile-icon-btn ${active === item.id ? "active" : ""}`}
              aria-label={t.nav[item.id]}
              aria-current={active === item.id ? "true" : undefined}
            >
              <Icon size={20} aria-hidden="true" />
            </button>
          );
        })}

        <div className="mobile-lang" role="group" aria-label={t.nav.langLabel}>
          {LANGS.map((code, i) => (
            <Fragment key={code}>
              {i > 0 && <span aria-hidden="true">|</span>}
              <button
                className={lang === code ? "active" : ""}
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                lang={code}
              >
                {code.toUpperCase()}
              </button>
            </Fragment>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default MobileIconBar;
