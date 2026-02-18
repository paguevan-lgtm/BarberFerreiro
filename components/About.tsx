import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Armchair } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-dark-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.15)] border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1000&auto=format&fit=crop" 
                alt="Barbeiro realizando corte detalhado" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Secondary Image */}
            <div className="absolute -bottom-10 -right-10 w-2/3 z-20 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-4 border-dark-950 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop" 
                alt="Ferramentas de barbearia vintage" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative Gold Box */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-gold-500/30 rounded-tl-3xl z-0"></div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Crown className="text-gold-500 w-5 h-5" />
                <span className="text-gold-500 font-display text-sm tracking-[0.3em] uppercase font-bold">
                  Nossa Filosofia
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight font-display mb-6">
                Além do Corte, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">
                  Uma Experiência
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed font-light text-lg">
              <p className="border-l-2 border-gold-500 pl-6">
                Na <strong className="text-white">Ferreiro Barber</strong>, não oferecemos apenas cortes de cabelo e barba, proporcionamos uma experiência única de bem-estar visual. Nossa missão vai além da tesoura e da navalha.
              </p>
              
              <p>
                Acreditamos que cada visita à nossa barbearia deve ser uma pausa na correria do dia a dia, um momento de cuidado pessoal e de sair com uma aparência e sensação renovada.
              </p>

              <p>
                Venha fazer parte dessa experiência, onde a excelência no atendimento se funde com a arte da barbearia tradicional e técnicas modernas.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-dark-900 border border-white/5 rounded-xl p-4 flex items-center gap-3">
                <div className="bg-gold-500/10 p-2 rounded-lg text-gold-500">
                  <Armchair size={20} />
                </div>
                <span className="text-sm font-bold text-white uppercase tracking-wide">Ambiente Premium</span>
              </div>
              <div className="bg-dark-900 border border-white/5 rounded-xl p-4 flex items-center gap-3">
                <div className="bg-gold-500/10 p-2 rounded-lg text-gold-500">
                  <Crown size={20} />
                </div>
                <span className="text-sm font-bold text-white uppercase tracking-wide">Profissionais Elite</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;