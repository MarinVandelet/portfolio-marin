import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const projectTitles = [
    { id: 1, title: "Deepblock" },
    { id: 2, title: "Novace" },
    { id: 3, title: "Portfolio" },
    { id: 4, title: "RapActus" },
    { id: 5, title: "Edunote" },
    { id: 6, title: "Easy2Drive" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/70 backdrop-blur-md text-white z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-['Sora'] font-extrabold tracking-wider 
          text-white hover:text-primary-300 transition"
        >
          <span className="relative inline-block">
            <span className="text-white/90">M</span>
            <span className="text-white/40 ml-[-6px]">V</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-sm md:text-base">
          <li>
            <a href="#about" className="hover:text-primary-300 transition">À propos</a>
          </li>

          {/* -------- MENU PROJETS -------- */}
          <li className="relative">
            {/* ⭐ Le bouton est maintenant un lien */}
            <a
              href="#projects"
              className="hover:text-primary-300 transition"
              onMouseEnter={() => setProjectsOpen(true)}
            >
              Projets
            </a>

            {/* Zone anti-fermeture du menu */}
            <div
              className="absolute left-0 w-full h-4 top-full"
              onMouseEnter={() => setProjectsOpen(true)}
            />

            <AnimatePresence>
              {projectsOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10, rotateX: -45 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -10, rotateX: -45 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="
                    absolute left-0 mt-3 bg-gray-900/95 border border-gray-700
                    rounded-lg p-2 w-56 shadow-xl backdrop-blur-md z-50
                    origin-top
                  "
                  onMouseLeave={() => setProjectsOpen(false)}
                >
                  {projectTitles.map((project) => (
                    <li key={project.id}>
                      <Link
                        to={`/projet-${project.id}`}
                        className="block px-4 py-2 hover:bg-gray-800 rounded text-sm"
                      >
                        {project.title}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li>
            <a href="#contact" className="hover:text-primary-300 transition">Contact</a>
          </li>
        </ul>

        {/* BURGER */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* MOBILE */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900/95 border-t border-gray-800 p-4 space-y-4">
          <a href="#about" className="block py-2">À propos</a>

          <div>
            <button
              onClick={() => setProjectsOpen(!projectsOpen)}
              className="w-full text-left py-2"
            >
              Projets ▾
            </button>

            {projectsOpen && (
              <div className="pl-4 space-y-1">
                {projectTitles.map((project) => (
                  <Link
                    key={project.id}
                    to={`/projet-${project.id}`}
                    className="block py-1 text-sm"
                  >
                    {project.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a href="#contact" className="block py-2">Contact</a>
        </div>
      )}
    </nav>
  );
}
