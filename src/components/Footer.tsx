import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm flex items-center gap-2">
            <span>© 2024 Portfolio. Hecho con</span>
            <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
            <span>y React</span>
          </div>

          <div className="flex gap-6">
            <a
              href="#hero"
              className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Inicio
            </a>
            <a
              href="#projects"
              className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Proyectos
            </a>
            <a
              href="#contact"
              className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
