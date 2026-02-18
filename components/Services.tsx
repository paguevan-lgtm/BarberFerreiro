import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

interface ServicesProps {
  onOpenBooking?: () => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Aligned Left specifically */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col items-start text-left">
            <span className="text-gold-500 font-display text-sm tracking-[0.3em] uppercase mb-2 font-bold pl-1">
              Menu de Serviços
            </span>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Nossos Serviços
            </h3>
          </div>
          
          <div className="md:max-w-md">
            <p className="text-gray-400 text-sm md:text-base leading-relaxed border-l-2 border-gold-500 pl-4">
              Técnicas clássicas e modernas unidas para proporcionar o melhor visual e bem-estar para você.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={onOpenBooking}
              className="group relative bg-dark-800 rounded-[2rem] p-8 border border-white/5 hover:border-gold-500/30 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] overflow-hidden cursor-pointer"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-dark-900 rounded-2xl text-gold-500 group-hover:bg-gold-500 group-hover:text-dark-900 transition-colors duration-300 shadow-inner">
                    {service.icon ? <service.icon size={32} strokeWidth={1.5} /> : null}
                  </div>
                  <span className="text-xl font-bold text-white bg-white/5 px-4 py-1 rounded-full border border-white/10">
                    {service.price}
                  </span>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                  {service.name}
                </h4>
                <p className="text-gray-400 leading-relaxed text-sm mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-gold-500 text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Agendar <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;