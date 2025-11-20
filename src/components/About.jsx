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
      <div className="max-w-5xl mx-auto px-6">
        {/* Titre */}
        <h2 className="text-3xl font-bold text-primary-400 font-['Sora'] mb-6">
          À propos
        </h2>

        {/* Déscription classique */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300 font-['Inter'] text-sm md:text-base leading-relaxed mb-12"
        >
          Je suis un développeur web passionné, spécialisé dans les interfaces
          modernes, animées et performantes. J'aime créer des expériences
          fluides, élégantes et centrées sur l'utilisateur, avec une attention
          particulière aux détails visuels et à la qualité du code.
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
          {/* Cache la ligne pr les utilisateurs mobiles */}
          <div className="hidden md:block absolute left-0 right-0 h-[3px] bg-white/10 top-1/2 transform -translate-y-1/2"></div>

          {/* Frise Néon anim */}
          <motion.div
            className="hidden md:block absolute left-0 right-0 h-[3px] 
            bg-gradient-to-r from-primary-400 via-cyan-400 to-primary-400 
            top-1/2 transform -translate-y-1/2 blur-[2px]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="
                relative 
                flex flex-col items-center text-center
                w-full md:w-auto
              "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* ICON */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="
                  w-12 h-12 flex items-center justify-center 
                  rounded-xl border border-primary-400/60
                  bg-white/5 backdrop-blur-md
                  shadow-md shadow-primary-400/30
                  transition-all
                "
              >
                {item.icon}
              </motion.div>

              {/* NOM (pour les etudes) */}
              <h4 className="mt-9 text-white font-semibold font-['Sora'] text-sm">
                {item.label}
              </h4>

              {/* Description */}
              <p className="text-gray-400 text-xs font-['Inter'] mt-1">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
