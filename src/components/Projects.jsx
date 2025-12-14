import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useOnScreen from "../hooks/useOnScreen.js";

// Importation images
const thumbnails = import.meta.glob("/src/assets/projects/*", { eager: true });

export default function Projects() {
  const gridRef = useRef(null);
  const visible = useOnScreen(gridRef, 0.25);

  const projects = [
    {
      id: 1,
      title: "Deepblock",
      description:
        "One page pour Deepblock, dépôt de capital en ligne pour sociétés innovantes.",
      thumbnail: "/src/assets/projects/projet-1.jpg",
    },
    {
      id: 2,
      title: "Novace",
      description:
        "One page fantasy pour le jeu Novace, univers immersif codé en HTML, CSS et JS.",
      thumbnail: "/src/assets/projects/projet-2.jpg",
    },
    {
      id: 3,
      title: "Portfolio",
      description:
        "Portfolio personnel futuriste, vitrine de mes projets front, animations et UI soignée.",
      thumbnail: "/src/assets/projects/projet-3.jpg",
    },
    {
      id: 4,
      title: "RapActus",
      description:
        "Site d’actualité rap sous WordPress, articles, contenus éditoriaux et mises à jour rapides.",
      thumbnail: "/src/assets/projects/projet-4.jpg",
    },
    {
      id: 5,
      title: "Vitrine Makeup Artist",
      description:
        "Site Portfolio en react, pour une makeup artist, avec galerie d’images et contact.",
      thumbnail: "/src/assets/projects/projet-5.jpg",
    },
    {
      id: 6,
      title: "Easy2Drive",
      description:
        "Site Easy2Drive pour auto-école, construit avec TypeScript, PHP, SQL et UI Bootstrap.",
      thumbnail: "/src/assets/projects/projet-6.jpg",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gray-900/30 backdrop-blur-sm border-y border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-primary-400 font-['Sora']">
          Projets
        </h2>

        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const image = thumbnails[project.thumbnail]?.default;

            return (
              <Link key={project.id} to={`/projet-${project.id}`}>
                <motion.div
                  onHoverStart={() => {}}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={
                    visible
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 20, scale: 0.97 }
                  }
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 220,
                    damping: 20,
                  }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="
                    relative
                    bg-white/5 
                    rounded-xl p-6 
                    shadow-xl shadow-black/40 
                    border border-white/10 
                    hover:border-primary-400/80 
                    hover:bg-white/10
                    backdrop-blur-xl 
                    transition
                    overflow-hidden
                  "
                >
                  {/* Glow */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-cyan-400/10 opacity-0 hover:opacity-100 transition duration-500" />

                  {/* Images */}
                  <div className="h-40 rounded-lg mb-4 overflow-hidden relative">
                    <img
                      src={image}
                      alt={project.title}
                      className="w-full h-full object-cover scale-[1.02] hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  <h3 className="text-xl font-semibold font-['Sora']">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm font-['Inter'] mt-2">
                    {project.description}
                  </p>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
