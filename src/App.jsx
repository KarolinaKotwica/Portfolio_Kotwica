import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Sidebar from "./components/ProfileCard";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import MobileIconBar from "./components/MobileIconBar";

import LanguageProvider from "./context/LanguageProvider";
import { useLanguage } from "./hooks/useLanguage";

const Layout = () => {
  const { t } = useLanguage();

  return (
    <>
      <a href="#main-content" className="skip-link">{t.skipLink}</a>

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
  );
};

function App() {
  return (
    <LanguageProvider>
      <Layout />
    </LanguageProvider>
  );
}

export default App;
