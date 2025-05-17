import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const location = useLocation();

  // Gestione dello scroll per cambiare lo stile della navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle del menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Cambio della lingua
  const handleLanguageChange = (lang: 'it' | 'en') => {
    changeLanguage(lang);
  };

  // Collegamenti della navbar - testi hardcoded temporaneamente per debugging
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/beers', label: 'Le nostre birre' },
    { path: '/about', label: 'Chi siamo' },
    { path: '/visit', label: 'Visita' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-amber-900/90 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo con testo brand */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/logo-birrificio-ugliancaldo.png" 
            alt="Logo Birrificio Ugliancaldo" 
            className="h-12 md:h-14"
          />
          <span className="font-brand text-2xl md:text-3xl text-white tracking-wide">Ugliancaldo</span>
        </Link>

        {/* Menu su desktop con classe nav-link */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`nav-link text-lg ${
                location.pathname === link.path 
                  ? 'text-amber-200 font-semibold' 
                  : 'text-white hover:text-amber-200 transition-colors'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex space-x-2 ml-4">
            <button
              onClick={() => handleLanguageChange('it')}
              className={`${
                language === 'it' ? 'font-bold text-amber-200' : 'text-white opacity-70'
              } hover:text-amber-200 transition-colors`}
            >
              IT
            </button>
            <span className="text-white">|</span>
            <button
              onClick={() => handleLanguageChange('en')}
              className={`${
                language === 'en' ? 'font-bold text-amber-200' : 'text-white opacity-70'
              } hover:text-amber-200 transition-colors`}
            >
              EN
            </button>
          </div>
        </nav>

        {/* Menu mobile toggle */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Menu mobile con classe nav-link */}
      {isMenuOpen && (
        <div className="md:hidden bg-amber-900 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`nav-link text-lg ${
                  location.pathname === link.path 
                    ? 'text-amber-200 font-semibold' 
                    : 'text-white hover:text-amber-200'
                }`}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex space-x-4 pt-2">
              <button
                onClick={() => {
                  handleLanguageChange('it');
                  toggleMenu();
                }}
                className={`${
                  language === 'it' ? 'font-bold text-amber-200' : 'text-white'
                }`}
              >
                Italiano
              </button>
              <button
                onClick={() => {
                  handleLanguageChange('en');
                  toggleMenu();
                }}
                className={`${
                  language === 'en' ? 'font-bold text-amber-200' : 'text-white'
                }`}
              >
                English
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;