import { Mail, Phone, MapPin, Briefcase, Github, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="py-24 bg-gray-900/30 backdrop-blur-sm border-y border-white/10"
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl font-bold mb-6 text-primary-400 font-['Sora']">
          Contact
        </h2>

        {/* TEXT */}
        <p className="text-gray-200 font-['Inter'] mb-6">
          Vous pouvez me contacter pour un projet, une opportunité
          professionnelle ou simplement pour échanger autour du développement web.
        </p>

        {/* CONTACT INFOS */}
        <ul className="space-y-3 text-gray-300 font-['Inter']">
          <li className="flex items-center gap-3">
            <Mail className="text-primary-300" size={18} />
            <span>
              <span className="text-primary-300 font-semibold">Email :</span>{" "}
              vandeletmarin.pro@gmail.com
            </span>
          </li>

          <li className="flex items-center gap-3">
            <Phone className="text-primary-300" size={18} />
            <span>
              <span className="text-primary-300 font-semibold">Numéro :</span>{" "}
              07.69.32.12.01
            </span>
          </li>

          <li className="flex items-center gap-3">
            <MapPin className="text-primary-300" size={18} />
            <span>
              <span className="text-primary-300 font-semibold">Localisation :</span>{" "}
              France (ou remote)
            </span>
          </li>

          <li className="flex items-center gap-3">
            <Briefcase className="text-primary-300" size={18} />
            <span>
              <span className="text-primary-300 font-semibold">Disponibilité :</span>{" "}
              Ouvert aux opportunités freelance et CDI
            </span>
          </li>
        </ul>

        {/* SOCIAL LINKS */}
        <div className="mt-10">
          <h3 className="text-xl font-['Sora'] text-primary-400 mb-4">
            Réseaux
          </h3>

          <div className="flex gap-6">
            {/* GitHub */}
            <a 
              href="https://github.com/MarinVandelet"
              target="_blank"
              className="group"
            >
              <Github 
                size={28}
                className="text-gray-300 group-hover:text-white transition 
                drop-shadow-[0_0_4px_rgba(56,189,248,0.3)] group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" 
              />
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/marin-v-9a3320241/"
              target="_blank"
              className="group"
            >
              <Linkedin 
                size={28}
                className="text-gray-300 group-hover:text-white transition
                drop-shadow-[0_0_4px_rgba(56,189,248,0.3)] group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" 
              />
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/TON_INSTAGRAM" 
              target="_blank"
              className="group"
            >
              <Instagram 
                size={28}
                className="text-gray-300 group-hover:text-white transition
                drop-shadow-[0_0_4px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" 
              />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
