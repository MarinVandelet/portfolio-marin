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
        className="text-4xl md:text-5xl font-['Sora'] font-bold mb-6"
      >
        Projet 3 — Portfolio
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-300 font-['Inter'] leading-relaxed mb-10"
      >
        Description détaillée du projet :
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
