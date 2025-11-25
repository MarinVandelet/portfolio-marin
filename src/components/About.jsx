import { motion } from "framer-motion";
import { GraduationCap, Users, Code2 } from "lucide-react";

export default function About() {
  const timeline = [
    {
      label: "Bac S",
      sub: "Fondations scientifiques & rigueur",
      icon: <GraduationCap size={22} className="text-primary-400" />,
    },
    {
      label: "Licence Evman",
      sub: "Communication, UX, gestion d’événements",
      icon: <Users size={22} className="text-primary-400" />,
    },
    {
      label: "BUT MMI",
      sub: "Développement Web, UI/UX, design & audiovisuel",
      icon: <Code2 size={22} className="text-primary-400" />,
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gray-950/60 border-y border-white/10 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITRE */}
        <h2 className="text-3xl font-bold text-primary-400 font-['Sora'] mb-6">
          À propos
        </h2>

        {/* GRID PRINCIPALE */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* Partie texte + frise (col-span:3) */}
          <div className="lg:col-span-3">

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-300 font-['Inter'] text-sm md:text-base leading-relaxed mb-12"
            >
              J’ai 21 ans et je suis actuellement étudiant en développement web, avec une vraie préférence pour le front-end. Ce qui me motive, c’est créer des interfaces modernes, fluides et agréables à utiliser. J’aime travailler les détails visuels, soigner les animations et construire des expériences qui donnent envie de rester. Pour moi, un bon projet, c’est un mélange d’esthétique, de simplicité et de code propre.
            </motion.p>

            {/* FRISE */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="
                relative 
                flex flex-col md:flex-row 
                items-center md:items-start 
                justify-between 
                gap-12 md:gap-10
              "
            >
              {/* Ligne */}
              <div className="hidden md:block absolute left-0 right-0 h-[3px] bg-white/10 top-1/2 -translate-y-1/2" />

              {/* Ligne Néon */}
              <motion.div
                className="
                  hidden md:block absolute left-0 right-0 h-[3px]
                  bg-gradient-to-r from-primary-400 via-cyan-400 to-primary-400 
                  top-1/2 -translate-y-1/2 blur-[2px]
                "
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                style={{ transformOrigin: 'left' }}
              />

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center w-full md:w-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="
                      w-12 h-12 flex items-center justify-center 
                      rounded-xl border border-primary-400/60
                      bg-white/5 backdrop-blur-md
                      shadow-md shadow-primary-400/30
                    "
                  >
                    {item.icon}
                  </motion.div>

                  <h4 className="mt-9 text-white font-semibold font-['Sora'] text-sm">
                    {item.label}
                  </h4>

                  <p className="text-gray-400 text-xs font-['Inter'] mt-1">
                    {item.sub}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </div>

          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ rotateX: 2, rotateY: -2, scale: 1.015 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="
    bg-white/5 backdrop-blur-xl 
    p-2 rounded-xl 
    border border-white/10
    shadow-[0_0_25px_rgba(56,189,248,0.18)]
    flex flex-col
    w-[170px]   /* encore plus petit */
    mx-auto lg:mx-0
  "
>
  {/* Portrait plus petit */}
  <div className="w-full aspect-[3/4] rounded-lg overflow-hidden mb-2 scale-60">
    <img
      src="/portrait.png"
      alt="portrait"
      className="w-full h-full object-cover"
    />
  </div>

  <a
    href="/cv_marinvandelet.pdf"
    download
    className="
      mt-1 block text-center w-full py-1.5 
      bg-white/10 hover:bg-white/20 
      border border-white/10 rounded-lg 
      text-white text-xs font-medium
      transition
      shadow-[0_0_8px_rgba(56,189,248,0.25)]
      hover:shadow-[0_0_14px_rgba(56,189,248,0.45)]
    "
  >
    Télécharger mon CV
  </a>
</motion.div>


        </div>
      </div>
    </section>
  );
}
