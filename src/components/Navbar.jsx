export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-30 flex w-full items-center justify-between bg-transparent px-8 py-6 md:px-16">

      <div className="text-yellow-100 text-6xl select-none hover:scale-110 transition-transform">
        ✦ 
      </div>

      <div className="flex items-center gap-6 md:gap-10">
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li>
            <a href="#about" className="hover:text-red-700 transition-colors">About Me</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-red-700 transition-colors">Projects</a>
          </li>
          <li>
            <a href="#side-quests" className="hover:text-red-700 transition-colors">Side Quests</a>
          </li>
        </ul>
      </div>

    </nav>
  );
}