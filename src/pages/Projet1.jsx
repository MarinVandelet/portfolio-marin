import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Projet1() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 text-white max-w-5xl mx-auto">

      {/* Bouton retour */}
      <Link
        to="/"
        className="inline-block mb-8 text-primary-300 hover:text-primary-400 transition font-['Inter']"
      >
        ← Retour
      </Link>

      {/* Titre */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-['Sora'] font-bold mb-6"
      >
        Projet 1 — Deepblock
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-300 font-['Inter'] leading-relaxed mb-10"
      >
        Description détaillée du projet:
        <br />• Le contexte  
        <br />• La stack utilisée  
        <br />• Les challenges techniques  
        <br />• Les fonctionnalités clés  
        <br />• Ton rôle personnel  
      </motion.p>

      {/* Images */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.img
          src="/images/projet1-1.png"
          className="rounded-xl border border-gray-700 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        />

        <motion.img
          src="/images/projet1-2.png"
          className="rounded-xl border border-gray-700 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        />
      </div>

      {/* Tech stack */}
      <div className="mt-12">
        <h2 className="text-2xl font-['Sora'] text-primary-400 mb-4">
          Technologies utilisées
        </h2>

        <div className="flex flex-wrap gap-3">
          {["React", "TailwindCSS", "Framer Motion"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-sm font-['Inter']"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
