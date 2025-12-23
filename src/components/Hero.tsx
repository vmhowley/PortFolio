import { ArrowDown, Download, MessageSquare } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-cyan-900/20"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Full Stack Developer
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Construyo soluciones escalables y de alto rendimiento que transforman ideas en productos digitales excepcionales
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-lg font-semibold text-white shadow-lg shadow-violet-500/50 hover:shadow-violet-500/80 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Ver Proyectos
              <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </button>

            <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg font-semibold text-slate-200 hover:bg-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-2">
              <Download size={20} />
              Descargar CV
            </button>
          </div>

          <div className="mt-16 flex justify-center gap-6">
            <a
              href="#contact"
              className="group flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <MessageSquare size={20} />
              <span className="group-hover:underline">Hablemos</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('techstack')}
          className="text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
