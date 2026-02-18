import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-dark-900/40 z-10" />
        <div 
          className="w-full h-full bg-hero-pattern bg-cover bg-center bg-no-repeat transform scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]"
          style={{ animationDuration: '20s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gold-400 text-sm font-semibold tracking-widest uppercase mb-6">
            Estilo • Tradição • Excelência
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            FERREIRO <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-200">BARBER</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Mais do que um corte, uma experiência. Transformamos seu visual com técnicas modernas e atendimento de primeira classe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#locations"
              className="w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-400 text-dark-900 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:-translate-y-1"
            >
              Encontrar Unidade
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white font-medium rounded-xl backdrop-blur-sm transition-all hover:-translate-y-1"
            >
              Nossos Serviços
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white/50 animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;