import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Contáctame
            </span>
          </h2>
          <p className="text-slate-400 text-lg">Hablemos sobre tu próximo proyecto</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-6">Información de Contacto</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-violet-500/50 transition-colors">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-lg">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <a href="mailto:vmhowley@gmail.com" className="text-slate-200 hover:text-cyan-400 transition-colors">
                      vmhowley@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-violet-500/50 transition-colors">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-lg">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Teléfono</p>
                    <a href="tel:+1234567890" className="text-slate-200 hover:text-cyan-400 transition-colors">
                      +18497515993
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-violet-500/50 transition-colors">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-lg">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Ubicación</p>
                    <p className="text-slate-200">Republica Dominicana, Santo Domingo</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">Redes Sociales</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/vmhowley"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-cyan-500 hover:bg-slate-700/50 transition-all duration-300 group"
                >
                  <Github size={24} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-cyan-500 hover:bg-slate-700/50 transition-all duration-300 group"
                >
                  <Linkedin size={24} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </a>
                <a
                  href="mailto:vmhowley@gmail.com"
                  className="p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-cyan-500 hover:bg-slate-700/50 transition-all duration-300 group"
                >
                  <Mail size={24} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-lg font-semibold text-white shadow-lg shadow-violet-500/50 hover:shadow-violet-500/80 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensaje
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-center">
                  Mensaje enviado correctamente. Te responderé pronto.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-center">
                  Error al enviar el mensaje. Por favor, intenta de nuevo.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
