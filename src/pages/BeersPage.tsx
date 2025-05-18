import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Section from '../components/ui/Section';
import BeerCard from '../components/ui/BeerCard';
import { beers } from '../data/beers';
import { salvanGallery, mazzolesaGallery, canalataGallery, cambraGallery } from '../data/galleryImages';

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
          <BeerCard
            id="salvan"
            name={t('beer.salvan.name')}
            type={t('beer.salvan.type')}
            description={t('beer.salvan.description')}
            tasting={t('beer.salvan.tasting')}
            abv={t('beer.salvan.abv')}
            ibu={t('beer.salvan.ibu')}
            imageSrc={beers[0].imageSrc}
            color={beers[0].color}
            gallery={salvanGallery}
          />
          <BeerCard
            id="mazzolesa"
            name={t('beer.mazzolesa.name')}
            type={t('beer.mazzolesa.type')}
            description={t('beer.mazzolesa.description')}
            tasting={t('beer.mazzolesa.tasting')}
            abv={t('beer.mazzolesa.abv')}
            ibu={t('beer.mazzolesa.ibu')}
            imageSrc={beers[1].imageSrc}
            color={beers[1].color}
            gallery={mazzolesaGallery}
          />
          <BeerCard
            id="canalata"
            name={t('beer.canalata.name')}
            type={t('beer.canalata.type')}
            description={t('beer.canalata.description')}
            tasting={t('beer.canalata.tasting')}
            abv={t('beer.canalata.abv')}
            ibu={t('beer.canalata.ibu')}
            imageSrc={beers[2].imageSrc}
            color={beers[2].color}
            gallery={canalataGallery}
          />
          <BeerCard
            id="cambra"
            name={t('beer.cambra.name')}
            type={t('beer.cambra.type')}
            description={t('beer.cambra.description')}
            tasting={t('beer.cambra.tasting')}
            abv={t('beer.cambra.abv')}
            ibu={t('beer.cambra.ibu')}
            imageSrc={beers[3].imageSrc}
            color={beers[3].color}
            gallery={cambraGallery}
          />
        </div>
      </Section>
    </>
  );
};

export default BeersPage;