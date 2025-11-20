import Background from "./components/Background.jsx";
import CursorLight from "./components/CursorLight.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import SkillsGrid from "./components/SkillsGrid.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

import Projet1 from "./pages/Projet1.jsx";
import Projet2 from "./pages/Projet2.jsx";
import Projet3 from "./pages/Projet3.jsx";
import Projet4 from "./pages/Projet4.jsx";
import Projet5 from "./pages/Projet5.jsx";
import Projet6 from "./pages/Projet6.jsx";

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// 👇 Gère le scroll vers les ancres (#projects, etc.)
function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    // Si pas de hash => remonte en haut
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
}

export default function App() {
  return (
    <div className="relative text-white overflow-x-hidden">
      {/* Effets */}
      <Background />
      <CursorLight />
      <Navbar />

      {/* Gestion du scroll */}
      <ScrollManager />

      <Routes>
        {/*  Accueil (+ à propos) */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />

              {/* Compétences */}
              <section id="skills" className="py-24 max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-10 text-primary-400 font-['Sora'] text-center">
                  Compétences
                </h2>
                <SkillsGrid />
              </section>

              <Contact />
              <Footer />
            </>
          }
        />

        {/*  Projets  */}
        <Route path="/projet-1" element={<Projet1 />} />
        <Route path="/projet-2" element={<Projet2 />} />
        <Route path="/projet-3" element={<Projet3 />} />
        <Route path="/projet-4" element={<Projet4 />} />
        <Route path="/projet-5" element={<Projet5 />} />
        <Route path="/projet-6" element={<Projet6 />} />
      </Routes>
    </div>
  );
}
