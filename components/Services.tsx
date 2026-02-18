import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-900 relative">
      <div className="absolute inset-0 bg-texture opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-gold-500 font-display text-lg tracking-[0.2em] uppercase mb-2">O que oferecemos</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Nossos Serviços</h3>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-dark-800 rounded-2xl p-8 border border-white/5 hover:border-gold-500/50 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-dark-700 rounded-xl text-gold-500 group-hover:bg-gold-500 group-hover:text-dark-900 transition-colors duration-300">
                    {service.icon ? <service.icon size={28} /> : null}
                  </div>
                  <span className="text-xl font-bold text-gold-400 group-hover:text-gold-300">
                    {service.price}
                  </span>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">
                  {service.name}
                </h4>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;