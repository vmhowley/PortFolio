import profile from "../assets/profile.jpg";
const AboutMe = () => {
    return (
        <section id="about" className="py-20 bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center lg:justify-start">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-2xl blur-xl opacity-50"></div>
                            <img
                                src={profile}
                                alt="Profile"
                                className="relative w-80 h-80 object-cover rounded-2xl border-4 border-cyan-500/50 shadow-2xl"
                            />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                            SOBRE MÍ
                        </h2>
                        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                            <p>
                                Soy <span className="text-cyan-400 font-semibold">Victor M Howley</span>, un Ingeniero Full Stack apasionado por transformar ideas complejas en productos digitales de alto impacto. Mi enfoque va más allá del código: me especializo en crear <span className="text-violet-400 font-semibold">soluciones escalables</span> y experiencias de usuario memorables que impulsan el crecimiento del negocio.
                            </p>
                            <p>
                                Con una sólida trayectoria en el ecosistema moderno de desarrollo web, combino experiencia técnica con visión estratégica. No solo construyo aplicaciones; optimizo rendimiento, aseguro la calidad y diseño arquitecturas robustas preparadas para el futuro.
                            </p>
                            <p>
                                Si buscas un desarrollador que se apropie de los proyectos, resuelva problemas difíciles y esté comprometido con la excelencia constante, estoy listo para llevar tu visión al siguiente nivel.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-6">
                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 group hover:border-cyan-500/50 transition-colors">
                                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                                <div className="text-slate-400 text-sm font-medium">Proyectos Completados</div>
                            </div>
                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 group hover:border-violet-500/50 transition-colors">
                                <div className="text-3xl font-bold text-violet-400 mb-2">5+</div>
                                <div className="text-slate-400 text-sm font-medium">Años de Experiencia</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
