import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.5)]">
               <Scissors className="text-dark-900 w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl tracking-wider text-white">
                FERREIRO
              </span>
              <span className="text-[0.65rem] tracking-[0.3em] text-gold-500 uppercase font-semibold">
                Barber Shop
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-gold-400 font-medium text-sm tracking-wide transition-colors duration-200 uppercase"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#book"
                  className="bg-gold-500 hover:bg-gold-400 text-dark-900 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-[0_4px_14px_0_rgba(212,175,55,0.39)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.23)] hover:-translate-y-0.5"
                >
                  Agendar Agora
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold-400 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-dark-900 fixed inset-0 top-20 z-40 overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 pb-20">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-medium text-white hover:text-gold-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#book"
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-gold-500 text-dark-900 px-8 py-3 rounded-full font-bold text-lg shadow-lg"
              >
                Agendar Horário
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;