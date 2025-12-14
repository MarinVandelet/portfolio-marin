import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Contact from "../components/Contact.jsx";

export default function Projet6() {
  return (
    <>
      {/* ===== CONTENU PROJET (container) ===== */}
      <div className="min-h-screen pt-24 pb-16 px-6 text-white max-w-5xl mx-auto">
        {/* Bouton retour */}
        <Link to="/#projects">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="
              inline-flex items-center gap-2 mb-10 px-4 py-2
              bg-white/5 border border-primary-400/40 
              rounded-lg shadow-md shadow-primary-400/20 
              backdrop-blur-md text-primary-300
              hover:text-primary-200 hover:border-primary-400 
              hover:shadow-primary-400/40
              transition-all duration-300
              font-['Inter']
            "
          >
            <span className="text-lg">←</span>
            <span>Retour aux projets</span>
          </motion.div>
        </Link>

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-['Sora'] font-bold mb-8"
        >
          ACF2L — Site vitrine Aéroclub (Bootstrap)
        </motion.h1>

        {/* Contexte */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-300 font-['Inter'] leading-relaxed mb-10"
        >
          <p className="mb-4">
            Projet réalisé dans le cadre d’un{" "}
            <span className="text-primary-300 font-semibold">
              apprentissage de Bootstrap
            </span>{" "}
            : l’objectif était de construire un site vitrine complet et responsive,
            en utilisant la grille Bootstrap et ses composants (sections, cards, carousel, formulaire).
          </p>

          <p className="mb-4">
            Le site présente un aéroclub et ses services : une home avec slider, une section
            “Nos Activités”, une partie “Tarifs”, des moyens pédagogiques, une galerie et un contact.
          </p>
        </motion.div>

        {/* Missions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-['Sora'] text-primary-400 mb-4">
            Ce que j’ai réalisé
          </h2>

          <ul className="space-y-3 text-gray-300 font-['Inter'] leading-relaxed">
            <li>
              • Intégration d’une landing page complète : navbar, sections, footer et navigation fluide.
            </li>
            <li>
              • Mise en page Bootstrap : grille responsive, alignements, espacement, sections propres.
            </li>
            <li>
              • Mise en place des sections : Activités, Tarifs, Moyens pédagogiques, Galerie et Contact (formulaire).
            </li>
            <li>
              • <span className="text-primary-300 font-semibold">Photoshop</span> : création / préparation des visuels du{" "}
              <span className="text-primary-300 font-semibold">premier slider</span> (bannières optimisées).
            </li>
          </ul>
        </motion.div>

        {/* Images */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <motion.img
            src="/projet6-1.png"
            className="rounded-xl border border-gray-700 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            alt="Aperçu ACF2L - Slider / Accueil"
          />

          <motion.img
            src="/projet6-2.png"
            className="rounded-xl border border-gray-700 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            alt="Aperçu ACF2L - Sections"
          />
        </div>

        {/* Résultat + VIDEO */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-gray-300 font-['Inter'] leading-relaxed mb-10"
        >
          <h2 className="text-2xl font-['Sora'] text-primary-400 mb-4">
            Résultat
          </h2>

          <p className="mb-10">
            Le rendu final est un site vitrine cohérent et responsive, avec une structure claire,
            une hiérarchie visuelle propre et une utilisation complète des bases Bootstrap
            (grille, sections, carousel, formulaires).
          </p>

          {/* VIDEO YTB */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              w-full aspect-video rounded-xl overflow-hidden
              border border-gray-700 shadow-lg shadow-primary-400/10
              bg-black/40 backdrop-blur-md
            "
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/d1W-wkdd8u8"
              title="Présentation ACF2L"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>

        {/* Tech stack */}
        <div className="mt-12">
          <h2 className="text-2xl font-['Sora'] text-primary-400 mb-4">
            Technologies utilisées
          </h2>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm font-['Inter'] flex items-center gap-2">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                className="w-5 h-5"
                alt="HTML"
              />
              HTML
            </span>

            <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm font-['Inter'] flex items-center gap-2">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                className="w-5 h-5"
                alt="CSS"
              />
              CSS
            </span>

            <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm font-['Inter'] flex items-center gap-2">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                className="w-5 h-5"
                alt="Bootstrap"
              />
              Bootstrap
            </span>

            <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm font-['Inter'] flex items-center gap-2">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                className="w-5 h-5"
                alt="Photoshop"
              />
              Photoshop
            </span>
          </div>
        </div>
      </div>

      {/* ===== SÉPARATEUR + CONTACT PLEINE LARGEUR ===== */}
      <div className="mt-10">
        <div className="h-px bg-gradient-to-r from-transparent via-primary-400/25 to-transparent" />
        <Contact />
      </div>
    </>
  );
}

