import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Section from '../components/ui/Section';
import BeerCard from '../components/ui/BeerCard';
import { beers } from '../data/beers';

const BeersPage = () => {
  const { t, language } = useLanguage();
  
  return (
    <>
      <Helmet>
        <title>
          {language === 'en' ? 'Our Beers | Birrificio Ugliancaldo' : 'Le Nostre Birre | Birrificio Ugliancaldo'}
        </title>
        <meta
          name="description"
          content={language === 'en' 
            ? 'Discover our selection of handcrafted beers including Salvan, Mazzolesa, Canalata, and Cambra.'
            : 'Scopri la nostra selezione di birre artigianali tra cui Salvan, Mazzolesa, Canalata e Cambra.'}
        />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-brand text-4xl md:text-5xl font-bold mb-4"
          >
            {t('beers.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-brand text-xl text-neutral-300 max-w-2xl mx-auto"
          >
            {t('beers.subtitle')}
          </motion.p>
        </div>
      </section>
      
      {/* Beers Section */}
      <Section title={t('beers.title')} className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {beers.map((beer) => (
            <BeerCard
              key={beer.id}
              id={beer.id}
              name={t(beer.nameKey)}
              type={t(beer.typeKey)}
              description={t(beer.descriptionKey)}
              tasting={t(beer.tastingKey)}
              abv={t(beer.abvKey)}
              ibu={t(beer.ibuKey)}
              imageSrc={beer.imageSrc}
              color={beer.color}
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export default BeersPage;