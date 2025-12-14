import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Tags, MessageSquare, Gauge, PenTool, LayoutTemplate,} from "lucide-react";
import Contact from "../components/Contact.jsx";

export default function Projet4() {
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
          RapActus — Site d’actualité Rap (WordPress)
        </motion.h1>

        {/* Contexte */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-300 font-['Inter'] leading-relaxed mb-10"
        >
          <p className="mb-4">
            RapActus est un site d’actualité dédié au rap : sorties d’albums,
            collaborations, événements, mais aussi un peu d’analyse et de
            critique. L’objectif était d’avoir une plateforme claire, cohérente
            visuellement et simple à administrer.
          </p>

          <p className="mb-4">
            Le projet a été pensé autour d’une charte sobre (noir / blanc /
            verts), d’une navigation efficace et d’une structure de contenu
            propre : catégories, étiquettes, recherche et commentaires (activés
            pour la démo).
          </p>
        </motion.div>

        {/* Ce que j’ai fait */}
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
              • Mise en place de l’arborescence du site : Accueil, Actualités, À
              propos, Contact, Shop.
            </li>
            <li>
              • Design & intégration sous WordPress avec un rendu “pro”
              (typographie, couleurs, sections, footer).
            </li>
            <li>
              • Structuration des posts : miniatures, extrait, catégories/étiquettes,
              navigation “suivant”, commentaires.
            </li>
            <li>
              • Optimisations : travail SEO on-site (titres, méta, etc.) et
              cache/performances.
            </li>
          </ul>
        </motion.div>

        {/* Images */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <motion.img
            src="/projet4-1.png"
            className="rounded-xl border border-gray-700 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            alt="Aperçu RapActus 1"
          />

          <motion.img
            src="/projet4-2.png"
            className="rounded-xl border border-gray-700 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            alt="Aperçu RapActus 2"
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

          <p className="mb-4">
            Le site propose une expérience simple et structurée : une home
            “vitrine” avec CTA vers les pages clés, une page actualités bien
            filtrable (catégories, tags, recherche), et des pages complémentaires
            (à propos / contact / shop) cohérentes visuellement.
          </p>

          <p>
            C’était un vrai exercice de gestion de contenu : penser
            l’architecture, rendre l’édition facile, et améliorer le
            référencement/chargement avec des outils WordPress adaptés.
          </p>
        </motion.div>

        {/* Tech stack */}
        <div className="mt-12">
          <h2 className="text-2xl font-['Sora'] text-primary-400 mb-4">
            Technologies utilisées
          </h2>

          <div className="flex flex-wrap gap-3">
            {/* WordPress */}
            <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm font-['Inter'] flex items-center gap-2">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
                className="w-5 h-5"
                alt="WordPress"
              />
              WordPress
            </span>

            {/* Kubio (thème/éditeur) */}
            <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm font-['Inter'] flex items-center gap-2">
              <LayoutTemplate className="w-5 h-5 text-primary-300" />
              Kubio (thème/éditeur)
            </span>

            {/* WPForms */}
            <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm font-['Inter'] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary-300" />
              WPForms (contact)
            </span>

            {/* SEO Press */}
            <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm font-['Inter'] flex items-center gap-2">
              <Search className="w-5 h-5 text-primary-300" />
              SEOPress
            </span>

            {/* WP Super Cache */}
            <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm font-['Inter'] flex items-center gap-2">
              <Gauge className="w-5 h-5 text-primary-300" />
              WP Super Cache
            </span>

            {/* Catégories / Tags */}
            <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm font-['Inter'] flex items-center gap-2">
              <Tags className="w-5 h-5 text-primary-300" />
              Catégories & Tags
            </span>

            {/* Photoshop */}
            <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm font-['Inter'] flex items-center gap-2">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                className="w-5 h-5"
                alt="Photoshop"
              />
              Photoshop
            </span>

            {/* Design / wireframe */}
            <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm font-['Inter'] flex items-center gap-2">
              <PenTool className="w-5 h-5 text-primary-300" />
              Wireframe / UI
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
