import { useState } from "react";

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
  const [lang, setLang] = useState("eng");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <>
        <MobileIconBar /> 

        <div className="layout">
          <Sidebar />

          <main className="content">
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
