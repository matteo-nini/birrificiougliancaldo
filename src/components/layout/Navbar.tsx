import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Beer, Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);
  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

  const closeNav = () => {
    setIsOpen(false);
    setIsLangMenuOpen(false);
  };

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/beers', label: t('nav.beers') },
    { to: '/about', label: t('nav.about') },
    { to: '/visit', label: t('nav.visit') },
  ];

  return (
    <header className="fixed w-full z-50 bg-gradient-to-b from-neutral-900/80 to-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2" onClick={closeNav}>
            <Beer size={28} className="text-primary-500" />
            <span className="font-serif text-xl font-bold text-white">Birrificio Ugliancaldo</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `font-medium transition-colors duration-300 hover:text-primary-500 ${
                    isActive ? 'text-primary-500' : 'text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            
            <div className="relative">
              <button
                onClick={toggleLangMenu}
                className="flex items-center gap-1 text-white hover:text-primary-500 transition-colors duration-300"
              >
                <Globe size={18} />
                <span>{language.toUpperCase()}</span>
              </button>
              
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden"
                  >
                    <div className="py-1">
                      <button
                        onClick={() => {
                          setLanguage('en');
                          toggleLangMenu();
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          language === 'en' ? 'bg-primary-100 text-primary-800' : 'text-neutral-800 hover:bg-neutral-100'
                        }`}
                      >
                        {t('english')}
                      </button>
                      <button
                        onClick={() => {
                          setLanguage('it');
                          toggleLangMenu();
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          language === 'it' ? 'bg-primary-100 text-primary-800' : 'text-neutral-800 hover:bg-neutral-100'
                        }`}
                      >
                        {t('italian')}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
          
          <button
            onClick={toggleNav}
            className="flex md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-neutral-900/95 backdrop-blur-sm"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeNav}
                  className={({ isActive }) =>
                    `font-medium py-2 transition-colors duration-300 hover:text-primary-500 ${
                      isActive ? 'text-primary-500' : 'text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              
              <div className="border-t border-neutral-700 pt-4 mt-2">
                <span className="text-white text-sm mb-2 block">{t('language')}</span>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setLanguage('en');
                      closeNav();
                    }}
                    className={`text-sm ${
                      language === 'en' ? 'text-primary-500 font-medium' : 'text-white'
                    }`}
                  >
                    {t('english')}
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('it');
                      closeNav();
                    }}
                    className={`text-sm ${
                      language === 'it' ? 'text-primary-500 font-medium' : 'text-white'
                    }`}
                  >
                    {t('italian')}
                  </button>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;