import { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen.js";

export default function SkillsGrid() {
  const gridRef = useRef(null);
  const visible = useOnScreen(gridRef, 0.25);

  const skills = [
    {
      name: "HTML",
      level: 95,
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      level: 90,
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      level: 88,
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      level: 80,
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      level: 85,
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Angular",
      level: 70,
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    },
    {
      name: "Node.js",
      level: 75,
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "PHP",
      level: 70,
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "SQL",
      level: 78,
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Git",
      level: 85,
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ];

  // Effet Tilt 3D
  const handleTilt = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `
      perspective(700px)
      rotateX(${(-y / 25).toFixed(2)}deg)
      rotateY(${(x / 25).toFixed(2)}deg)
      scale(1.02)
    `;
  };

  const resetTilt = (card) => {
    card.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {skills.map((skill, i) => (
        <div
          key={skill.name}
          onMouseMove={(e) => handleTilt(e, e.currentTarget)}
          onMouseLeave={(e) => resetTilt(e.currentTarget)}
          className={`bg-gray-900/60 p-5 rounded-xl border border-gray-800 shadow-xl 
          backdrop-blur-md transform transition-all duration-700
          ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: `${i * 90}ms` }}
        >
          <div className="flex items-center gap-4 mb-3">
            <img src={skill.logo} alt={skill.name} className="w-10 h-10" />
            <h3 className="text-xl font-semibold font-['Sora']">
              {skill.name}
            </h3>
          </div>

          <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
            <div
              className="bg-primary-400 h-3 rounded-full transition-all duration-[1200ms]"
              style={{ width: visible ? `${skill.level}%` : "0%" }}
            />
          </div>

          <p className="text-gray-400 text-sm mt-1 font-['Inter']">
            {skill.level}%
          </p>
        </div>
      ))}
    </div>
  );
}
