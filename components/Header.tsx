import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  onOpenBooking: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled || isOpen
            ? 'py-3 bg-dark-950/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* LOGO FERREIRO BARBER SHOP */}
            <div className="flex items-center gap-3 group cursor-pointer z-50">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gold-500 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)] transform group-hover:rotate-6 transition-transform duration-300">
                <Scissors className="text-black w-6 h-6 md:w-7 md:h-7 rotate-[-90deg]" strokeWidth={2.5} />
              </div>
              
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-xl md:text-2xl tracking-wide text-white drop-shadow-sm">
                  FERREIRO
                </span>
                <span className="text-[0.6rem] md:text-[0.65rem] tracking-[0.2em] text-gold-500 font-bold uppercase">
                  Barber Shop
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <ul className="flex items-center gap-8 mr-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white font-display text-sm tracking-[0.1em] uppercase transition-all duration-300 relative group py-2"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full box-border shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>
                    </a>
                  </li>
                ))}
              </ul>
              <button
                onClick={onOpenBooking}
                className="bg-gold-500 hover:bg-gold-400 text-dark-950 px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:-translate-y-0.5 transform active:scale-95"
              >
                Agendar
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-12 h-12 flex items-center justify-center bg-gold-500/10 rounded-full border border-gold-500/50 text-gold-500 hover:bg-gold-500 hover:text-dark-900 transition-all backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode='wait'>
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} strokeWidth={2.5} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} strokeWidth={2.5} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark-950/95 md:hidden flex flex-col"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
            
            <div className="flex-1 flex flex-col items-center justify-center space-y-6 p-6 relative z-10 pt-20">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  className="w-full text-center py-2 text-3xl font-display font-bold text-white hover:text-gold-500 transition-colors tracking-tight"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="mt-6 bg-gold-500 text-dark-900 px-12 py-5 rounded-2xl font-bold text-xl uppercase tracking-widest shadow-[0_10px_30px_rgba(212,175,55,0.3)] w-full max-w-xs text-center hover:bg-gold-400 transition-colors"
              >
                Agendar Agora
              </motion.button>
            </div>

            {/* Credit mention to Grupo CBL inside Menu */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="p-8 flex flex-col items-center relative z-10 border-t border-white/5 bg-black/20"
            >
              <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-2 font-bold">Desenvolvido por</span>
              <div className="flex flex-col items-center leading-none">
                <span className="text-white font-sans font-bold text-lg tracking-tighter">GRUPO CBL</span>
                <span className="text-gold-500/50 font-sans font-bold text-[0.6rem] tracking-[0.2em] uppercase">Inovação & Tech</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;