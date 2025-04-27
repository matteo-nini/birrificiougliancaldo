import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Beer, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Beer size={24} className="text-primary-500" />
              <span className="font-serif text-xl font-bold">Birrificio Ugliancaldo</span>
            </Link>
            <p className="text-neutral-400 text-sm mb-4">
              Craft brewery located in the beautiful Apuane Park, producing artisanal beers with local ingredients and traditional methods.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/beers" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                  {t('nav.beers')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/visit" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                  {t('nav.visit')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Our Beers</h3>
            <ul className="space-y-2">
              <li>
                <a href="/beers#salvan" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                  Salvan - {t('beer.salvan.type')}
                </a>
              </li>
              <li>
                <a href="/beers#mazzolesa" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                  Mazzolesa - {t('beer.mazzolesa.type')}
                </a>
              </li>
              <li>
                <a href="/beers#canalata" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                  Canalata - {t('beer.canalata.type')}
                </a>
              </li>
              <li>
                <a href="/beers#cambra" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                  Cambra - {t('beer.cambra.type')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-400">{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary-500 flex-shrink-0" />
                <span className="text-neutral-400">{t('footer.phone')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary-500 flex-shrink-0" />
                <a href="mailto:birrificiougliancaldo@gmail.com" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                  {t('footer.email')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-6 text-center text-neutral-500 text-sm">
          <p>© {currentYear} Birrificio Ugliancaldo. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;