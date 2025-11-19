export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/70 backdrop-blur-md text-white z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="text-xl font-semibold text-primary-400">
          Marin Vandelet
        </a>

        <ul className="flex items-center gap-8 text-sm md:text-base">
          <li><a href="#about" className="hover:text-primary-300 transition">À propos</a></li>

          <li className="relative group">
            <button className="hover:text-primary-300 transition">Projets</button>
            <ul className="absolute left-0 mt-2 bg-gray-900/95 border border-gray-700 rounded-lg opacity-0 group-hover:opacity-100 transition p-2 w-52 shadow-xl backdrop-blur-md">
              {[1,2,3,4,5,6].map((id) => (
                <li key={id}>
                  <a href={`/projet-${id}`} className="block px-4 py-2 hover:bg-gray-800 rounded text-sm">
                    Projet {id}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          <li><a href="#contact" className="hover:text-primary-300 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
