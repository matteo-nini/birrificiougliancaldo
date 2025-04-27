import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Section from '../components/ui/Section';
import ImageGallery from '../components/ui/ImageGallery';
import { breweryImages } from '../data/galleryImages';

const AboutPage = () => {
  const { t, language } = useLanguage();
  
  return (
    <>
      <Helmet>
        <title>
          {language === 'en' ? 'About Us | Birrificio Ugliancaldo' : 'Chi Siamo | Birrificio Ugliancaldo'}
        </title>
        <meta
          name="description"
          content={language === 'en' 
            ? 'Learn about our brewery history, location near Pizzo d\'Uccello, and our traditional brewing process.'
            : 'Scopri la storia del nostro birrificio, la nostra posizione vicino al Pizzo d\'Uccello e il nostro processo di produzione tradizionale.'}
        />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0 bg-about-pattern bg-cover bg-center before:absolute before:inset-0 before:bg-black before:opacity-50"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            {t('about.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-2xl"
          >
            {t('about.subtitle')}
          </motion.p>
        </div>
      </section>
      
      {/* History Section */}
      <Section
        title={t('about.history.title')}
        className="bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
              {t('about.history.text')}
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eu ultricies malesuada, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Donec auctor, nisl eu ultricies malesuada, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://images.pexels.com/photos/5530308/pexels-photo-5530308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Brewery equipment"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </Section>
      
      {/* Location Section */}
      <Section
        title={t('about.location.title')}
        className="bg-neutral-50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Mountain landscape"
              className="w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
              {t('about.location.text')}
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eu ultricies malesuada, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Donec auctor, nisl eu ultricies malesuada, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.
            </p>
          </motion.div>
        </div>
      </Section>
      
      {/* Process Section */}
      <Section
        title={t('about.process.title')}
        className="bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
              {t('about.process.text')}
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eu ultricies malesuada, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Donec auctor, nisl eu ultricies malesuada, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://images.pexels.com/photos/5468945/pexels-photo-5468945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Beer brewing process"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </Section>
      
      {/* Gallery Section */}
      <Section
        title={t('about.gallery.title')}
        className="bg-neutral-50"
      >
        <ImageGallery images={breweryImages} />
      </Section>
    </>
  );
};

export default AboutPage;