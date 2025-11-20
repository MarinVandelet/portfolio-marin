export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900/30 backdrop-blur-sm border-y border-white/10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-primary-400 font-['Sora']">Contact</h2>

        <p className="text-gray-200 font-['Inter'] mb-4">
          Vous pouvez me contacter pour un projet, une opportunité
          professionnelle ou simplement pour échanger autour du développement web.
        </p>

        <ul className="space-y-2 text-gray-300 font-['Inter']">
          <li><span className="text-primary-300 font-semibold">Email :</span> vandeletmarin.pro@gmail.com</li>
          <li><span className="text-primary-300 font-semibold">Numéro de téléphone :</span> 07.69.32.12.01</li>
          <li><span className="text-primary-300 font-semibold">Localisation :</span> France (ou remote)</li>
          <li><span className="text-primary-300 font-semibold">Disponibilité :</span> Ouvert aux opportunités freelance et CDI.</li>
        </ul>
      </div>
    </section>
  );
}
