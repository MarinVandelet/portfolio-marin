import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
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

        letter.style.transform = `
          translate(${x * 0.15 * power}px, ${y * 0.15 * power}px)
          scale(${1 + 0.25 * power})
          skew(${x * 0.04 * power}deg, ${y * 0.04 * power}deg)
        `;

        letter.style.filter = `
          drop-shadow(0 0 ${10 + power * 14}px rgba(56,189,248,${
          0.4 + power * 0.3
        }))
        `;
      });

      letter.addEventListener("mouseleave", () => {
        letter.style.transform = "translate(0,0) scale(1) skew(0deg)";
        letter.style.filter = "none";
      });
    });
  }, []);

  const text = "MARIN VANDELET".split("");

  return (
    <header
      id="hero"
      className="
        h-screen flex flex-col items-center justify-center 
        relative px-6 overflow-hidden

        translate-y-6 md:translate-y-10  /* ⭐ Descend tout légèrement */
      "
    >
      {/* === MV STATIC === */}
      <span
        className="
          pointer-events-none select-none
          absolute top-1/2 -translate-y-1/2
          -z-20
          font-['Sora'] font-extrabold
          text-white/5
          text-[170px] sm:text-[220px] md:text-[270px] lg:text-[390px]
          leading-none tracking-wide
        "
      >
        MV
      </span>

      {/* === MV SHIMMER === */}
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ backgroundPosition: ["300% 0%", "-300% 0%"] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none select-none
          absolute top-1/2 -translate-y-1/2
          -z-10
          font-['Sora'] font-extrabold
          text-[170px] sm:text-[220px] md:text-[270px] lg:text-[390px]
          leading-none tracking-wide
          text-transparent bg-clip-text
          [background-size:300%_100%]
          opacity-[0.12]
        "
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0.0) 100%)",
        }}
      >
        MV
      </motion.span>

      {/* === TITRE MAGNÉTIQUE === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        ref={containerRef}
        className="
          flex gap-[2px] md:gap-2 flex-wrap justify-center 
          select-none cursor-default z-10
        "
      >
        {text.map((char, i) => (
          <span
            key={i}
            className="
              magnetic-letter inline-block 
              font-['Sora'] font-extrabold
              text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl
              text-white transition-transform duration-150 ease-out
            "
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </motion.div>

      {/* === SOUS-TITRE === */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="
          text-primary-200 
          text-xs sm:text-sm md:text-base lg:text-lg 
          mt-4 md:mt-6 font-['Inter'] z-10
        "
      >
        Développeur Fullstack • Spécialisé Frontend & Animations
      </motion.p>
    </header>
  );
}
