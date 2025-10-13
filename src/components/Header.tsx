import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold text-white">
            {/* <Code2 className="text-orange-400" size={28} />
            <span>Kean Duque</span> */}
            <div className="text-2xl font-bold text-white">
              <img
                src="/keanduque-logo2.png"
                alt="Keanduque Logo"
                className="h-10 w-auto"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-300 hover:text-orange-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("expertise")}
              className="text-slate-300 hover:text-orange-400 transition-colors"
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-slate-300 hover:text-orange-400 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-slate-300 hover:text-orange-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-slate-300 hover:text-orange-400 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Contact
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-300 hover:text-orange-400 transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("expertise")}
              className="text-slate-300 hover:text-orange-400 transition-colors text-left"
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-slate-300 hover:text-orange-400 transition-colors text-left"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-slate-300 hover:text-orange-400 transition-colors text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-slate-300 hover:text-orange-400 transition-colors text-left"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors text-left"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
