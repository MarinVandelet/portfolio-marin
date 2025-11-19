import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-900/30 backdrop-blur-sm border-y border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-primary-400 font-['Sora']">
          Projets
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <Link key={id} to={`/projet-${id}`}>
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="bg-gray-900/70 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-primary-400 transition backdrop-blur-md"
              >
                <div className="h-40 bg-gradient-to-br from-gray-700 to-gray-800 rounded mb-4" />
                <h3 className="text-xl font-semibold font-['Sora']">
                  Projet #{id}
                </h3>
                <p className="text-gray-300 text-sm font-['Inter'] mt-2">
                  Cliquez pour voir ce projet.
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
