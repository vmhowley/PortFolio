import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Facturacion Electronica [DigitBill]',
      description: 'Aplicacion para la facturacion electronica con soporte para grupos, archivos multimedia y notificaciones push DGII.',
      image: 'https://gftfyrrcyppdbtgolkqe.supabase.co/storage/v1/object/public/Public/Gemini_Generated_Image_vwmlf5vwmlf5vwml.png',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      demo: 'https://digitbill.netlify.app/',
      github: 'https://github.com/vmhowley/FacturacionElectronica',
    },
    {
      title: 'IBSYSTEMS PROJECT TRACKER',
      description: 'Aplicación para la gestion de proyectos con soporte para grupos, archivos multimedia y notificaciones push.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', ' PostgreSQL', 'Supabase', 'Stripe'],
      demo: 'https://ibsprojectracker.netlify.app/dashboard',
      github: 'https://github.com/vmhowley/IprojectByIbs',
    },
    {
      title: 'ManitasRD',
      description: 'Aplicacion para la gestion de mano de obra como Mecanica, Electricidad, Plomeria, etc.',
      image: 'https://gftfyrrcyppdbtgolkqe.supabase.co/storage/v1/object/public/Public/manitas.jpg',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      demo: 'https://manitasrd.netlify.app/',
      github: 'https://github.com/vmhowley/ManitasRd',
    },
    // {
    //   title: 'Task Management System',
    //   description: 'Sistema de gestión de proyectos con tableros Kanban, seguimiento de tiempo y colaboración en equipo.',
    //   image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['Next.js', 'PostgreSQL', 'Docker', 'AWS'],
    //   demo: '#',
    //   github: '#',
    // },
    // {
    //   title: 'API Gateway Microservices',
    //   description: 'Arquitectura de microservicios con API Gateway, autenticación JWT y balanceo de carga.',
    //   image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['Node.js', 'Docker', 'Kubernetes', 'Redis'],
    //   demo: '#',
    //   github: '#',
    // },
    // {
    //   title: 'Mobile Fitness Tracker',
    //   description: 'Aplicación móvil para seguimiento de ejercicios, nutrición y objetivos de salud con sincronización en la nube.',
    //   image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    //   demo: '#',
    //   github: '#',
    // },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Proyectos Destacados
            </span>
          </h2>
          <p className="text-slate-400 text-lg">Algunos de mis trabajos más recientes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/20"
            >
              <div className="relative h-48  overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover drop-blur-sm  group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-cyan-400 rounded-full border border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-lg text-white text-sm font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-200 text-sm font-semibold hover:bg-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 via-violet-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:via-violet-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
