import React from 'react';
import { Scissors, Instagram, Facebook } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Background glow for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-start">
             {/* Logo Match with Header */}
             <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
                 <Scissors className="text-black w-6 h-6 rotate-[-90deg]" strokeWidth={2.5} />
               </div>
               <div className="flex flex-col leading-none">
                 <span className="font-display font-bold text-xl tracking-wider text-white">
                   FERREIRO
                 </span>
                 <span className="text-[0.6rem] tracking-[0.2em] text-gold-500 font-bold uppercase">
                   Barber Shop
                 </span>
               </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Excedendo expectativas e definindo o padrão de excelência em barbearia masculina.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 border-b border-gold-500/30 pb-2 inline-block">Navegação</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-gold-500 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-6 border-b border-gold-500/30 pb-2 inline-block">Siga-nos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-dark-900 hover:border-gold-500 transition-all shadow-lg">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-dark-900 hover:border-gold-500 transition-all shadow-lg">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom with Grupo CBL */}
        <div className="border-t border-white/5 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Ferreiro Barber Shop. Todos os direitos reservados.
          </p>

          {/* Grupo CBL Logo/Credit */}
          <div className="flex flex-col items-center md:items-end group cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
             <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Desenvolvido por</span>
             <div className="flex flex-col items-center md:items-end leading-none">
                <span className="text-white font-sans font-bold text-lg tracking-tight">GRUPO CBL</span>
                <span className="text-gray-500 font-sans font-bold text-[0.6rem] tracking-[0.15em] uppercase">Inovação & Tech</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;