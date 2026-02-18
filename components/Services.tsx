import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowRight, Scissors } from 'lucide-react';

interface ServicesProps {
  onOpenBooking?: () => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-dark-900">
      {/* Luz de fundo decorativa */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-full bg-gold-500/5 blur-[120px] pointer-events-none rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col items-start text-left">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold-500 font-display text-sm tracking-[0.3em] uppercase mb-2 font-bold pl-1"
            >
              Menu de Serviços
            </motion.span>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight font-display"
            >
              Nossos Serviços
            </motion.h3>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:max-w-md"
          >
            <p className="text-gray-400 text-sm md:text-base leading-relaxed border-l-2 border-gold-500 pl-4">
              Técnicas clássicas e modernas unidas para proporcionar o melhor visual e bem-estar para você.
            </p>
          </motion.div>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenBooking}
              className="group relative bg-dark-800 rounded-[2.5rem] p-8 border border-white/5 hover:border-gold-500/40 transition-all duration-300 shadow-xl overflow-hidden cursor-pointer flex flex-col h-full"
            >
              {/* Efeito de luz interna no hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Topo do Card: Ícone e Preço */}
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-dark-900 rounded-2xl text-gold-500 group-hover:bg-gold-500 group-hover:text-dark-900 transition-all duration-300 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
                    {service.icon ? <service.icon size={28} strokeWidth={1.5} /> : <Scissors size={28} strokeWidth={1.5} />}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-1 opacity-60">Valor</span>
                    <span className="text-xl font-bold text-white font-display">
                      {service.price}
                    </span>
                  </div>
                </div>
                
                {/* Conteúdo */}
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors font-display">
                  {service.name}
                </h4>
                <p className="text-gray-400 leading-relaxed text-sm mb-8 flex-grow">
                  {service.description}
                </p>

                {/* Footer do Card: Botão de ação (Sempre visível no mobile) */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                   <span className="text-xs text-gray-500 uppercase tracking-[0.2em] font-bold">Reserva Online</span>
                   <div className="flex items-center gap-2 text-gold-500 text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all duration-300 bg-gold-500/5 px-4 py-2 rounded-full border border-gold-500/20 group-hover:bg-gold-500 group-hover:text-dark-900">
                    Agendar <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to action inferior para mobile */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center md:hidden"
        >
          <p className="text-gray-500 text-sm italic">
            * Toque em qualquer serviço para agendar via WhatsApp
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;