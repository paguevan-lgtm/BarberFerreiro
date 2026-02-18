import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-gold-500 font-display text-sm tracking-[0.3em] uppercase mb-3 font-bold">Feedback</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Experiências Reais</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white/[0.03] backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 hover:border-gold-500/30 relative group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute -top-6 left-8 bg-dark-800 p-3 rounded-2xl border border-white/10 shadow-xl group-hover:scale-110 transition-transform duration-300">
                 <Quote className="text-gold-500 fill-gold-500 w-6 h-6" />
              </div>
              
              <div className="mt-6 mb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold-500 text-gold-500 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed text-lg font-light italic opacity-90">
                  "{item.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="relative">
                  <div className="absolute inset-0 bg-gold-500 rounded-full blur-sm opacity-20"></div>
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/10 relative z-10"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{item.name}</h4>
                  <span className="text-sm text-gold-500 font-medium uppercase tracking-wide">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;