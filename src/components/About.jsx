export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-950/60 border-y border-white/10 backdrop-blur-sm"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary-400 font-['Sora'] mb-6">
          À propos
        </h2>

        <p className="text-gray-300 font-['Inter'] text-sm md:text-base leading-relaxed">
          Je suis un développeur web passionné, spécialisé dans les interfaces
          modernes, animées et performantes. J'aime créer des expériences
          fluides, élégantes et centrées sur l'utilisateur, avec une attention
          particulière aux détails visuels et à la qualité du code.
        </p>
      </div>
    </section>
  );
}
