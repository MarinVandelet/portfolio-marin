import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Projet1() {
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
            font-['Inter']">
          <span className="text-lg">←</span>
          <span>Retour aux projets</span>
        </motion.div>
      </Link>

      {/* Titre */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-['Sora'] font-bold mb-8">
        Deepblock — Landing Page Dépôt de Capital
      </motion.h1>

      {/* Contexte */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-gray-300 font-['Inter'] leading-relaxed mb-10"
      >
        <p className="mb-4">
          Deepblock est une LegalTech spécialisée dans les services financiers, la signature électronique
          et la blockchain. Lors de mon stage, j’ai été chargé de refondre entièrement la landing page du
          service <span className="text-primary-300 font-semibold">Dépôt de Capital</span>, utilisée par des clients français et internationaux
          souhaitant créer leur entreprise en ligne.
        </p>

        <p className="mb-4">
          L’ancien site n’affichait qu’un simple iframe sans contexte. L’objectif était donc de concevoir
          une page claire, rassurante, performante, et surtout adaptée aux affiliés de Deepblock.
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
            • Création d’une <span className="text-primary-300 font-semibold">One Page complète</span> comprenant hero, avantages, FAQ, avis clients,
            footer et intégration du formulaire.
          </li>
          <li>
            • Refonte graphique respectant la charte Deepblock : bleu principal, visuels cohérents,
            header modernisé et ajout d’une carte du monde animée.
          </li>
          <li>
            • Développement complet : HTML, TailwindCSS, interactions JS, animations au scroll,
            FAQ dynamique inspirée de Netflix.
          </li>
          <li>
            • Optimisation responsive et contraintes de livraison en moins de 10 jours.
          </li>
        </ul>
      </motion.div>

      {/* Images  */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <motion.img
          src="/public/projet1-1.png"
          className="rounded-xl border border-gray-700 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.img
          src="/public/projet1-2.png" // 👉 À remplacer aussi
          className="rounded-xl border border-gray-700 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
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
          La nouvelle landing page apporte une meilleure compréhension du service, renforce la confiance
          des utilisateurs, respecte la charte Deepblock et améliore l’expérience pour les affiliés
          étrangers. Le rendu final a été validé et intégré dans les outils internes de l’entreprise.
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
            src="https://www.youtube.com/embed/QbzgS3ofdqs"
            title="Présentation Deepblock"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>

        </motion.div>
                {/* LIEN DU SITE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-center">
            <p className="text-gray-300 mb-2 font-['Inter']">
              Vous pouvez consulter la page que j’ai réalisée ici :
            </p>

            <a
              href="https://capital.deepblock.fr/"
              target="_blank"
              className="
                inline-block px-5 py-2 rounded-lg
                bg-white/5 border border-primary-400/40
                hover:border-primary-400 hover:text-primary-300
                backdrop-blur-md transition shadow-md shadow-primary-400/20
                font-['Inter']">
              https://capital.deepblock.fr/
            </a>
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
              className="w-5 h-5" />
            HTML
          </span>

          {/* Tailwind */}
          <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm font-['Inter'] flex items-center gap-2">
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" 
              className="w-5 h-5" />
            TailwindCSS
          </span>

          {/* JavaScript */}
          <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm font-['Inter'] flex items-center gap-2">
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
              className="w-5 h-5" />
            JavaScript
          </span>

          {/* Photoshop */}
          <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm font-['Inter'] flex items-center gap-2">
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" 
              className="w-5 h-5" />
            Photoshop
          </span>
        </div>
      </div>
    </div>
  );
}
