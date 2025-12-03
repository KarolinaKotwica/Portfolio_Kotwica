import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Sidebar from "./components/ProfileCard";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import MobileIconBar from "./components/MobileIconBar";

function App() {
  return (
    <>
    <MobileIconBar /> 
    <div className="layout">
      <Sidebar />

    <main className="content">
      <Navbar />
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
}

export default App;
