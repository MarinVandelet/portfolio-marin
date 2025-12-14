import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Image, Layout, Palette } from "lucide-react";
import Contact from "../components/Contact.jsx";

export default function Projet5() {
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
          Portfolio artistique — Anaé Delmas
        </motion.h1>

        {/* Contexte */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-300 font-['Inter'] leading-relaxed mb-10"
        >
          <p className="mb-4">
            Ce projet est un{" "}
            <span className="text-primary-300 font-semibold">
              portfolio artistique complet
            </span>{" "}
            réalisé pour une makeup artiste professionnelle. L’objectif était de
            créer un site immersif et élégant, mettant en valeur son travail
            visuel à travers des galeries photos animées et une identité
            graphique forte.
          </p>

          <p className="mb-4">
            Le site a été pensé comme une véritable vitrine artistique :
            navigation fluide, mise en avant des visuels, animations subtiles,
            et structure évolutive pour ajouter facilement de nouveaux contenus.
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
              • Conception complète du design (univers sombre, glassmorphism,
              ambiance artistique).
            </li>
            <li>• Mise en place d’une navigation avec React Router (Accueil + galeries).</li>
            <li>• Création de galeries photos interactives avec ouverture en grand (lightbox).</li>
            <li>• Animations Framer Motion : apparitions, hover 3D, transitions fluides.</li>
            <li>• Intégration d’un CV téléchargeable et sections À propos / Contact stylisées.</li>
          </ul>
        </motion.div>

        {/* Images */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <motion.img
            src="/projet5-1.png"
            className="rounded-xl border border-gray-700 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            alt="Portfolio Anaé - Aperçu 1"
          />

          <motion.img
            src="/projet5-2.png"
            className="rounded-xl border border-gray-700 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            alt="Portfolio Anaé - Aperçu 2"
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
            Le résultat est un portfolio artistique professionnel, moderne et
            immersif, pensé pour mettre en valeur le travail visuel de l’artiste.
            Le site est totalement responsive, fluide à la navigation, et conçu
            pour évoluer facilement avec de nouvelles galeries ou contenus.
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
              src="https://www.youtube.com/embed/n_m_T-IunsQ"
              title="Présentation Portfolio Artistique"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>

              {/* LIEN DU SITE */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-center"
        >
          <p className="text-gray-300 mb-2 font-['Inter']">
            Vous pouvez consulter la page que j’ai réalisée ici :
          </p>

          <a
            href="https://portfolio-anae.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="
              inline-block px-5 py-2 rounded-lg
              bg-white/5 border border-primary-400/40
              hover:border-primary-400 hover:text-primary-300
              backdrop-blur-md transition shadow-md shadow-primary-400/20
              font-['Inter']"
          >
            https://portfolio-anae.vercel.app/
          </a>
        </motion.div>  

        {/* Tech stack */}
        <div className="mt-12">
          <h2 className="text-2xl font-['Sora'] text-primary-400 mb-4">
            Technologies utilisées
          </h2>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm flex items-center gap-2">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                className="w-5 h-5"
                alt="React"
              />
              React
            </span>

            <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm flex items-center gap-2">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"
                className="w-5 h-5"
                alt="Vite"
              />
              Vite
            </span>

            <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm flex items-center gap-2">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                className="w-5 h-5"
                alt="TailwindCSS"
              />
              TailwindCSS
            </span>

            <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary-300" />
              Framer Motion
            </span>

            <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm flex items-center gap-2">
              <Image className="w-5 h-5 text-primary-300" />
              Galeries & Lightbox
            </span>

            <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm flex items-center gap-2">
              <Layout className="w-5 h-5 text-primary-300" />
              React Router
            </span>

            <span className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm flex items-center gap-2">
              <Palette className="w-5 h-5 text-primary-300" />
              UI / UX Design
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
