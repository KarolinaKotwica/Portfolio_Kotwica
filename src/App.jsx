import { useState, useEffect } from "react";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Sidebar from "./components/ProfileCard";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import MobileIconBar from "./components/MobileIconBar";

import { LanguageContext } from "./context/LanguageContext";

function App() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = "Karolina Kotwica | Web Developer";
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <>
        <a href="#main-content" className="skip-link">Skip to content</a>

        <header>
          <MobileIconBar />
        </header>

        <div className="layout">
          <Sidebar />

          <main id="main-content" className="content">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certificates />
            <Footer />
          </main>
        </div>
      </>
    </LanguageContext.Provider>
  );
}

export default App;
