import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-dark-900">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* The Image - Slightly animated */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <div 
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat"
          />
        </motion.div>

        {/* Dark Overlay Layer - Increases contrast for text */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Gradient Overlays */}
        {/* 1. Darkens the top for header readability and bottom for blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/90 via-transparent to-dark-900"></div>
        
        {/* 2. Radial vignette to focus center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.8)_100%)]"></div>
        
        {/* 3. Texture overlay for consistency */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex justify-center mb-6">
             <span className="py-2 px-6 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-gold-400 text-xs md:text-sm font-bold tracking-[0.2em] uppercase shadow-lg">
               Desde 2015 • São Paulo
             </span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-[0.9] tracking-tight drop-shadow-2xl">
            FERREIRO <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold-300 to-gold-600 filter drop-shadow-lg">BARBER</span>
          </h1>
          
          <p className="text-gray-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide bg-black/20 p-2 rounded-lg backdrop-blur-sm">
            Excelência em cortes clássicos e modernos. O ambiente perfeito para o homem que valoriza estilo e tradição.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button
              onClick={onOpenBooking}
              className="group w-full sm:w-auto px-10 py-4 bg-gold-500 hover:bg-gold-400 text-dark-950 font-bold text-lg rounded-xl transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 uppercase tracking-wide"
            >
              <MapPin size={20} className="group-hover:scale-110 transition-transform" />
              Agendar Horário
            </button>
            <a
              href="#services"
              className="w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-medium text-lg rounded-xl border border-white/10 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-gold-500/50 block uppercase tracking-wide"
            >
              Ver Serviços
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <a href="#services" className="flex flex-col items-center gap-2 text-white/50 hover:text-gold-500 transition-colors cursor-pointer group">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-opacity">Explorar</span>
          <ChevronDown size={28} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;