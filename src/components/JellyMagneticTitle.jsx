import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function JellyMagneticTitle() {
  const containerRef = useRef(null);

  useEffect(() => {
    const letters = containerRef.current.querySelectorAll(".magnetic-letter");

    letters.forEach((letter) => {
      letter.addEventListener("mousemove", (e) => {
        const rect = letter.getBoundingClientRect();

        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        const distance = Math.sqrt(x * x + y * y);
        const maxDist = 90;
        const power = Math.max(0, 1 - distance / maxDist);

        const translateX = x * 0.15 * power;
        const translateY = y * 0.15 * power;
        const scale = 1 + 0.25 * power;
        const skewX = x * 0.04 * power;
        const skewY = y * 0.04 * power;

        letter.style.transform = `
          translate(${translateX}px, ${translateY}px)
          scale(${scale})
          skew(${skewX}deg, ${skewY}deg)`;

        letter.style.filter = `
          drop-shadow(0 0 ${10 + power * 14}px rgba(56,189,248,${0.4 + power * 0.3}))`;
      });

      letter.addEventListener("mouseleave", () => {
        letter.style.transform = `
          translate(0,0)
          scale(1)
          skew(0deg, 0deg)`;
        letter.style.filter = "none";
      });
    });
  }, []);

  const text = "MARIN VANDELET".split("");

  return (
    <div className="relative flex flex-col items-center px-4 text-center">

      {/* 🟦 MV AVEC GLOW + AURA ROTATIVE + CENTRÉ ENTRE LES DEUX TEXTES */}
      <div className="
        pointer-events-none select-none 
        absolute top-[45%] -translate-y-[45%]
        -z-10 flex justify-center">
        {/* Glow */}
        <motion.div
          className="
            absolute inset-0 
            bg-gradient-to-r from-transparent via-primary-400/20 to-transparent
            blur-3xl opacity-30"/>

        {/* MV */}
        <span
          className="
            font-['Sora'] font-extrabold
            text-white/5
            text-[170px] sm:text-[220px] md:text-[270px] lg:text-[390px]
            leading-none tracking-wide
            drop-shadow-[0_0_20px_rgba(56,189,248,0.25)]"> MV
        </span>
      </div>

      {/* TITRE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        ref={containerRef}
        className="flex gap-[2px] md:gap-2 select-none cursor-default flex-wrap justify-center z-10"
      >
        {text.map((char, i) => (
          <span
            key={i}
            className="magnetic-letter inline-block font-['Sora'] font-extrabold
            text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl
            text-white transition-transform duration-150 ease-out"
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </motion.div>

      {/* SOUS-TITRE */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-primary-200 
        text-xs sm:text-sm md:text-base lg:text-lg 
        mt-4 md:mt-6 font-['Inter'] z-10">
        Développeur Fullstack • Spécialisé Frontend & Animations
      </motion.p>
    </div>
  );
}