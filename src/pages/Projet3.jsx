import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Projet3() {
  return (
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
        Portfolio — Site personnel
      </motion.h1>

      {/* Contexte */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-gray-300 font-['Inter'] leading-relaxed mb-10"
      >
        <p className="mb-4">
          Ce portfolio est mon projet “vitrine” : l’objectif était de créer un site
          <span className="text-primary-300 font-semibold"> moderne, immersif et très animé</span>,
          qui présente mes projets avec une identité visuelle forte et une navigation fluide.
        </p>

        <p className="mb-4">
          Je voulais un rendu futuriste, avec du glassmorphism, des effets néon, et des
          micro-interactions partout (hover, scroll, transitions). Le tout en gardant une base
          propre, responsive, et facile à faire évoluer pour ajouter de nouveaux projets.
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
          Ce que j’ai construit
        </h2>

        <ul className="space-y-3 text-gray-300 font-['Inter'] leading-relaxed">
          <li>
            • Design global et intégration : sections Hero, About, Projects, Contact, pages projets.
          </li>
          <li>
            • Animations : Framer Motion (apparitions au scroll, hover, transitions), effets néon et glass.
          </li>
          <li>
            • Expérience UI : navbar desktop + mobile, CTA, composants réutilisables, cohérence visuelle.
          </li>
          <li>
            • Optimisations : responsive, assets propres, gestion des images (Vercel), structure scalable.
          </li>
        </ul>
      </motion.div>

      {/* Images */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <motion.img
          src="/projet3-1.png"
          className="rounded-xl border border-gray-700 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          alt="Aperçu Portfolio 1"
        />

        <motion.img
          src="/projet3-2.png"
          className="rounded-xl border border-gray-700 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          alt="Aperçu Portfolio 2"
        />
      </div>

      {/* Résultat */}
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
          Le portfolio est une base solide que je peux enrichir : ajout de nouveaux projets,
          amélioration des pages, optimisation SEO/perf, et montée en gamme sur les animations.
          C’est aussi un terrain de jeu : je teste des idées d’UI et je pousse le détail visuel.
        </p>

        {/* VIDEO YTB (optionnelle) */}
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
            src="https://www.youtube.com/embed/V7Wm30I8dtM"
            title="Présentation Portfolio"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>

        <div className="mt-6 text-center">
          <p className="text-gray-300 mb-2 font-['Inter']">
            Voir le portfolio en ligne :
          </p>
          <a
            href="https://portfoliomarin.vercel.app/"
            target="_blank"
            className="
              inline-block px-5 py-2 rounded-lg
              bg-white/5 border border-primary-400/40
              hover:border-primary-400 hover:text-primary-300
              backdrop-blur-md transition shadow-md shadow-primary-400/20
              font-['Inter']
            "
          >
            https://portfoliomarin.vercel.app/
          </a>
        </div>
      </motion.div>

      {/* Tech stack */}
      <div className="mt-12">
        <h2 className="text-2xl font-['Sora'] text-primary-400 mb-4">
          Technologies utilisées
        </h2>

        <div className="flex flex-wrap gap-3">
          {/* React */}
          <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm font-['Inter'] flex items-center gap-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              className="w-5 h-5"
              alt="React"
            />
            React
          </span>

          {/* Vite */}
          <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm font-['Inter'] flex items-center gap-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"
              className="w-5 h-5"
              alt="Vite"
            />
            Vite
          </span>

          {/* Tailwind */}
          <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm font-['Inter'] flex items-center gap-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
              className="w-5 h-5"
              alt="TailwindCSS"
            />
            TailwindCSS
          </span>

          {/* Framer Motion */}
          <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm font-['Inter'] flex items-center gap-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg"
              className="w-5 h-5"
              alt="Framer Motion"
            />
            Framer Motion
          </span>

          {/* React Router */}
          <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm font-['Inter'] flex items-center gap-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg"
              className="w-5 h-5"
              alt="React Router"
            />
            React Router
          </span>
        </div>
      </div>
    </div>
  );
}
