import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { LOCATIONS, OPERATING_HOURS } from '../constants';

const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-24 relative">
       {/* Section specific overlay for contrast */}
       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-gold-500 font-display text-sm md:text-base tracking-[0.3em] uppercase mb-3 font-bold">Venha nos visitar</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">Nossas Unidades</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {LOCATIONS.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-[#111] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)] transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image Header */}
              <div className="h-48 md:h-64 relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-dark-900/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src={location.image} 
                  alt={location.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#111] to-transparent z-20"></div>
                <h3 className="absolute bottom-6 left-8 z-30 text-2xl md:text-3xl font-bold text-white font-display tracking-wide drop-shadow-lg">
                  {location.name}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow bg-[#111] relative">
                 {/* Top gold line */}
                <div className="w-12 h-1.5 bg-gold-500 mb-8 rounded-full"></div>

                <div className="space-y-6 flex-grow">
                  {/* Address - Changed to items-center for vertical centering */}
                  <div className="flex items-center gap-4 group/icon">
                    <div className="w-12 h-12 rounded-full bg-dark-800 flex items-center justify-center shrink-0 text-gold-500 border border-white/5 group-hover/icon:border-gold-500/30 transition-colors">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium leading-relaxed">{location.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4 group/icon">
                     <div className="w-12 h-12 rounded-full bg-dark-800 flex items-center justify-center shrink-0 text-gold-500 border border-white/5 group-hover/icon:border-gold-500/30 transition-colors">
                      <Phone size={20} />
                    </div>
                    <p className="text-gray-300 font-medium tracking-wide">{location.phone}</p>
                  </div>

                  {/* Hours */}
                  <div className="pt-6 border-t border-white/5 mt-4">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gold-500" /> 
                      Horários
                    </h4>
                    <div className="space-y-3">
                      {OPERATING_HOURS.map((h, i) => (
                        <div key={i} className="flex justify-between items-center text-sm">
                          <span className="text-gray-400 font-medium">{h.day}</span>
                          <span className={`${h.hours === 'Fechado' ? 'text-red-400 bg-red-400/10 border-red-400/20' : 'text-white bg-white/5 border-white/5'} font-bold px-3 py-1 rounded-lg border`}>
                            {h.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                   <a 
                     href={location.mapLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center justify-center w-full gap-3 bg-gold-500 text-dark-900 py-4 rounded-xl font-bold text-lg hover:bg-white hover:scale-[1.02] transition-all shadow-lg hover:shadow-gold-500/20 group/btn"
                   >
                     <Navigation size={20} className="group-hover/btn:-rotate-45 transition-transform" />
                     Como Chegar
                   </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;