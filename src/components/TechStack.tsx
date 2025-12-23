import { Code2, Database, Cloud, Box, Braces, FileCode, Server, Container } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    { name: 'React', icon: Code2, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Next.js', icon: Braces, color: 'from-slate-300 to-slate-500' },
    { name: 'TypeScript', icon: FileCode, color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', icon: Server, color: 'from-green-400 to-green-600' },
    { name: 'Python', icon: Code2, color: 'from-yellow-400 to-blue-500' },
    { name: 'PostgreSQL', icon: Database, color: 'from-blue-500 to-blue-700' },
    { name: 'Docker', icon: Container, color: 'from-blue-400 to-cyan-500' },
    { name: 'AWS', icon: Cloud, color: 'from-orange-400 to-orange-600' },
  ];

  return (
    <section id="techstack" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-slate-400 text-lg">Tecnologías que domino y uso en mis proyectos</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-violet-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className={`p-4 rounded-lg bg-gradient-to-br ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-slate-200 font-semibold text-center">{tech.name}</h3>
                </div>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 via-violet-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-violet-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
