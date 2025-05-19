import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Gestione dello scroll per cambiare lo stile della navbar
  useEffect(() => {
    const handleScroll = () => {
      // Imposta isScrolled se siamo scesi di almeno 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Imposta isPastHero se siamo scesi oltre la hero section (altezza viewport)
      if (window.scrollY > window.innerHeight * 0.9) {
        setIsPastHero(true);
      } else {
        setIsPastHero(false);
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
        isHomePage && !isScrolled && !isPastHero
          ? 'bg-transparent'
          : isScrolled 
            ? 'bg-[rgb(57,109,59)]/90 backdrop-blur-sm shadow-lg py-2' 
            : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo con testo brand - visibile quando:
            - Non è homepage
            - È homepage ma abbiamo scrollato oltre la hero */}
        {(!isHomePage || (isHomePage && isPastHero)) && (
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/logo-birrificio-ugliancaldo.png" 
              alt="Logo Birrificio Ugliancaldo" 
              className="h-12 md:h-14"
            />
            <span className="font-brand text-2xl md:text-3xl text-white tracking-wide">Ugliancaldo</span>
          </Link>
        )}
        
        {/* Spaziatore per centrare il menu quando non c'è logo (homepage all'inizio) */}
        {isHomePage && !isPastHero && <div className="w-1/4"></div>}

        {/* Menu su desktop - stile speciale in homepage top */}
        <nav className={`hidden md:flex items-center ${
          isHomePage && !isPastHero ? 'absolute left-0 top-0 mt-7 ml-24 z-20' : 'space-x-6'
        }`}>
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`nav-link text-lg mx-4 ${
                isHomePage && !isPastHero
                  ? location.pathname === link.path 
                    ? 'text-[rgb(57,109,59)] font-semibold' 
                    : 'text-[rgb(57,109,59)] hover:text-[rgb(57,109,59)]/70 transition-colors'
                  : location.pathname === link.path 
                    ? 'text-green-200 font-semibold' 
                    : 'text-white hover:text-green-200 transition-colors'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className={`flex space-x-2 ml-4 ${
            isHomePage && !isPastHero ? '' : 'text-white'
          }`}>
            <button
              onClick={() => handleLanguageChange('it')}
              className={`${
                language === 'it' 
                  ? isHomePage && !isPastHero 
                    ? 'font-bold text-[rgb(57,109,59)]' 
                    : 'font-bold text-green-200' 
                  : isHomePage && !isPastHero 
                    ? 'text-[rgb(57,109,59)] opacity-70' 
                    : 'text-white opacity-70'
              } hover:opacity-100 transition-colors`}
            >
              IT
            </button>
            <span className={isHomePage && !isPastHero ? 'text-[rgb(57,109,59)]' : 'text-white'}>|</span>
            <button
              onClick={() => handleLanguageChange('en')}
              className={`${
                language === 'en' 
                  ? isHomePage && !isPastHero 
                    ? 'font-bold text-[rgb(57,109,59)]' 
                    : 'font-bold text-green-200' 
                  : isHomePage && !isPastHero 
                    ? 'text-[rgb(57,109,59)] opacity-70' 
                    : 'text-white opacity-70'
              } hover:opacity-100 transition-colors`}
            >
              EN
            </button>
          </div>
        </nav>

        {/* Menu mobile toggle con colore che cambia in base al contesto */}
        <button 
          className={`md:hidden p-2 ${
            isHomePage && !isPastHero ? 'text-[rgb(57,109,59)]' : 'text-white'
          }`} 
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
        <div className="md:hidden bg-[rgb(57,109,59)] shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`nav-link text-lg ${
                  location.pathname === link.path 
                    ? 'text-green-200 font-semibold' 
                    : 'text-white hover:text-green-200'
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
                  language === 'it' ? 'font-bold text-green-200' : 'text-white'
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
                  language === 'en' ? 'font-bold text-green-200' : 'text-white'
                }`}
              >
                English
              </button>
            </div>
          </nav>
          {/* Spaziatore per centrare il menu nella homepage */}
          {location.pathname === '/' && <div className="w-1/4"></div>}
        </div>
      )}
    </header>
  );
};

export default Navbar;