import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Projet2() {
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
        Novace — Site vitrine & téléchargement du jeu
      </motion.h1>

      {/* Contexte */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-gray-300 font-['Inter'] leading-relaxed mb-10"
      >
        <p className="mb-4">
          Ce projet était un site <span className="text-primary-300 font-semibold">100% statique</span>,
          conçu pour présenter un jeu vidéo fantasy réalisé par des connaissances, et permettre son{" "}
          <span className="text-primary-300 font-semibold">téléchargement facilement</span> (sans backend).
        </p>

        <p className="mb-4">
          L’objectif : une page simple à héberger, légère, responsive et claire, qui donne envie de
          découvrir l’univers du jeu. Même si le projet n’a jamais été totalement finalisé, j’en suis fier
          car c’est l’un de mes <span className="text-primary-300 font-semibold">tout premiers sites</span> :
          c’est là que j’ai appris les bases solides du HTML/CSS et mes premiers réflexes d’intégration.
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
          Missions réalisées
        </h2>

        <ul className="space-y-3 text-gray-300 font-['Inter'] leading-relaxed">
          <li>
            • Intégration complète en <span className="text-primary-300 font-semibold">HTML/CSS</span> avec
            une mise en page propre et une hiérarchie claire.
          </li>
          <li>
            • Utilisation de <span className="text-primary-300 font-semibold">Bootstrap</span> pour
            accélérer le responsive et structurer les sections.
          </li>
          <li>
            • Création d’une page pensée pour le{" "}
            <span className="text-primary-300 font-semibold">téléchargement du jeu</span> (CTA, infos, visuels).
          </li>
          <li>
            • Travail en collaboration : échanges, retours, améliorations progressives — apprentissage des
            bonnes pratiques.
          </li>
        </ul>
      </motion.div>

      {/* Images */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <motion.img
          src="/projet2-1.png"
          className="rounded-xl border border-gray-700 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          alt="Aperçu projet Novace 1"
        />

        <motion.img
          src="/projet2-2.png"
          className="rounded-xl border border-gray-700 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          alt="Aperçu projet Novace 2"
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
          Le site remplissait son objectif : une vitrine simple, rapide à héberger, avec une navigation
          claire et une mise en avant du téléchargement. C’est surtout un projet important pour moi
          car il marque mes débuts : celui où j’ai vraiment compris comment construire une page propre
          et responsive avec les bases.
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
            src="https://youtube.com/embed/fMiw1BUnPlw"
            title="Présentation Novace"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </motion.div>

      {/* Tech stack */}
      <div className="mt-12">
        <h2 className="text-2xl font-['Sora'] text-primary-400 mb-4">
          Technologies utilisées
        </h2>

        <div className="flex flex-wrap gap-3">
          {/* HTML */}
          <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm font-['Inter'] flex items-center gap-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              className="w-5 h-5"
              alt="HTML"
            />
            HTML
          </span>

          {/* CSS */}
          <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm font-['Inter'] flex items-center gap-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              className="w-5 h-5"
              alt="CSS"
            />
            CSS
          </span>

          {/* Bootstrap */}
          <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm font-['Inter'] flex items-center gap-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              className="w-5 h-5"
              alt="Bootstrap"
            />
            Bootstrap
          </span>
        </div>
      </div>
    </div>
  );
}



