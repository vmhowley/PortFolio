import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Presente',
      description: 'Liderazgo de equipo en el desarrollo de aplicaciones web escalables. Implementación de arquitecturas de microservicios y optimización de rendimiento.',
      achievements: [
        'Reducción del tiempo de carga en un 60%',
        'Implementación de CI/CD con GitHub Actions',
        'Mentoría a 5 desarrolladores junior',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      period: '2020 - 2022',
      description: 'Desarrollo de aplicaciones web y móviles usando React, Node.js y PostgreSQL. Colaboración estrecha con equipos de diseño y producto.',
      achievements: [
        'Desarrollo de 15+ features de alto impacto',
        'Integración de APIs de terceros',
        'Mejora de cobertura de tests al 85%',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Studios',
      period: '2018 - 2020',
      description: 'Creación de interfaces de usuario modernas y responsivas. Especialización en React y animaciones web.',
      achievements: [
        'Rediseño completo de la plataforma principal',
        'Implementación de design system',
        'Optimización de accesibilidad (WCAG 2.1)',
      ],
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Labs',
      period: '2017 - 2018',
      description: 'Inicio en el desarrollo web profesional. Trabajo en proyectos diversos usando JavaScript, HTML y CSS.',
      achievements: [
        'Desarrollo de componentes reutilizables',
        'Aprendizaje de frameworks modernos',
        'Participación en code reviews',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Experiencia Profesional
            </span>
          </h2>
          <p className="text-slate-400 text-lg">Mi trayectoria en el desarrollo de software</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-cyan-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2"></div>

                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 border-4 border-slate-800 z-10"></div>

                <div className="md:w-1/2 ml-16 md:ml-0">
                  <div className="group bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2 text-cyan-400">
                        <Briefcase size={20} />
                        <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                          {exp.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-violet-400 mb-2">
                      <span className="font-semibold">{exp.company}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>

                    <p className="text-slate-300 mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"></div>
                          <span className="text-slate-400 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
