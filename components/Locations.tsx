import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { LOCATIONS, OPERATING_HOURS } from '../constants';

const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold-500 font-display text-lg tracking-[0.2em] uppercase mb-2">Onde Estamos</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Nossas Unidades</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {LOCATIONS.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-dark-800 rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex flex-col md:flex-row group"
            >
              {/* Image/Map Side - Modified to show Map */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative min-h-[300px]">
                 {/* Google Maps Embed iframe (Functional without API Key using embed) */}
                 <iframe 
                   width="100%" 
                   height="100%" 
                   frameBorder="0" 
                   scrolling="no" 
                   marginHeight={0} 
                   marginWidth={0} 
                   src={`https://maps.google.com/maps?q=${encodeURIComponent(location.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                   className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                   style={{ filter: 'invert(90%) hue-rotate(180deg)' }} 
                   title={`Mapa ${location.name}`}
                 ></iframe>
                 {/* Overlay para facilitar clique em dispositivos touch se necessario, ou apenas estilo */}
                 <div className="absolute inset-0 bg-gold-500/10 mix-blend-overlay pointer-events-none"></div>
              </div>

              {/* Content Side */}
              <div className="p-8 w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-2">{location.name}</h3>
                <div className="w-12 h-1 bg-gold-500 mb-6 rounded-full"></div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-1" />
                    <p>{location.address}</p>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                    <p>{location.phone}</p>
                  </div>
                </div>

                <div className="mt-auto">
                   <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                     <Clock className="w-4 h-4 text-gold-500" /> Horários
                   </h4>
                   <ul className="text-sm text-gray-400 space-y-1 mb-6">
                     {OPERATING_HOURS.map((h, i) => (
                       <li key={i} className="flex justify-between border-b border-white/5 pb-1 last:border-0">
                         <span>{h.day}</span>
                         <span className="text-gray-200">{h.hours}</span>
                       </li>
                     ))}
                   </ul>

                   <a 
                     href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center justify-center w-full gap-2 bg-white/5 hover:bg-gold-500 hover:text-dark-900 text-white py-3 rounded-xl transition-all font-medium border border-white/10 hover:border-transparent"
                   >
                     <ExternalLink size={18} />
                     Abrir no Google Maps
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