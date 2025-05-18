import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import MapComponent from '../components/ui/MapComponent';
import ImageCarousel from '../components/ui/ImageCarousel';
import { beers } from '../data/beers';
import { breweryCarouselImages } from '../data/images';

const HomePage = () => {
  const { t, language } = useLanguage();
  
  // Coordinates for Ugliancaldo, Italy (approximate)
  const breweryLocation: [number, number] = [44.1344, 10.1789];
  
  return (
    <>
      <Helmet>
        <title>Birrificio Ugliancaldo | {language === 'en' ? 'Craft Brewery' : 'Birrificio Artigianale'}</title>
        <meta
          name="description"
          content={language === 'en' 
            ? 'Craft brewery located in the beautiful Apuane Park, producing artisanal beers with local ingredients and traditional methods.'
            : 'Birrificio artigianale situato nel bellissimo Parco delle Apuane, che produce birre artigianali con ingredienti locali e metodi tradizionali.'}
        />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <ImageCarousel images={breweryCarouselImages} interval={6000} />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 text-center z-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-brand text-4xl md:text-6xl lg:text-7xl font-bold mb-4 max-w-4xl"
          >
            Birrificio Ugliancaldo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-brand text-xl md:text-2xl mb-8 max-w-2xl"
          >
            Birre artigianali dal cuore delle Alpi Apuane
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button to="/beers" size="lg" variant="primary" className="font-brand text-lg">
              Scopri le nostre birre
            </Button>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="animate-bounce"
          >
            <a
              href="#intro"
              className="inline-block text-white p-2 rounded-full border-2 border-white hover:bg-white hover:text-neutral-900 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <Section
        id="intro"
        title={t('home.intro.title')}
        className="bg-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-lg text-neutral-700 mb-8"
          >
            {t('home.intro.text')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button to="/about" variant="outline">
              {t('learnMore')}
            </Button>
          </motion.div>
        </div>
      </Section>
      
      {/* Featured Beers Section */}
      <Section
        title={t('home.featured.title')}
        subtitle={t('home.featured.subtitle')}
        className="bg-neutral-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {beers.map((beer) => (
            <Link key={beer.id} to={`/beers#${beer.id}`} className="block group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`h-80 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl relative`}
              >
                <div className={`absolute inset-0 ${beer.color} opacity-90 transition-opacity duration-300 group-hover:opacity-95`}></div>
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={beer.imageSrc}
                    alt={t(beer.nameKey)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-4 text-center relative">
                  <h3 className="font-brand text-xl font-bold mb-1 text-white">{t(beer.nameKey)}</h3>
                  <p className="text-white text-sm">{t(beer.typeKey)}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/beers">
            {t('viewAll')}
          </Button>
        </div>
      </Section>
      
      {/* Location Section */}
      <Section
        title={t('home.location.title')}
        className="bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-neutral-700 mb-6">
              {t('home.location.text')}
            </p>
            <Button to="/visit">
              {t('learnMore')}
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <MapComponent center={breweryLocation} />
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default HomePage;