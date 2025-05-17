import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Section from '../components/ui/Section';
import MapComponent from '../components/ui/MapComponent';
import ContactForm from '../components/ui/ContactForm';
import ImageGallery from '../components/ui/ImageGallery';
import { locationImages } from '../data/galleryImages';
import { Clock, MapPin } from 'lucide-react';

const VisitPage = () => {
  const { t, language } = useLanguage();
  
  // Coordinates for Ugliancaldo, Italy (approximate)
  const breweryLocation: [number, number] = [44.1344, 10.1789];
  
  return (
    <>
      <Helmet>
        <title>
          {language === 'en' ? 'Visit Us | Birrificio Ugliancaldo' : 'Visitaci | Birrificio Ugliancaldo'}
        </title>
        <meta
          name="description"
          content={language === 'en' 
            ? 'Plan your visit to our brewery with opening hours, location details, and hiking trail information to Equi Terme.'
            : 'Pianifica la tua visita al nostro birrificio con orari di apertura, dettagli sulla posizione e informazioni sui sentieri escursionistici per Equi Terme.'}
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
            {t('visit.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-brand text-xl text-neutral-300 max-w-2xl mx-auto"
          >
            {t('visit.subtitle')}
          </motion.p>
        </div>
      </section>
      
      {/* Location Section */}
      <Section
        title={t('visit.location.title')}
        className="bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-3 mb-6">
              <MapPin size={24} className="text-primary-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-brand text-xl font-bold mb-2">Birrificio Ugliancaldo</h3>
                <p className="text-neutral-700">
                  {t('visit.location.address')}
                </p>
              </div>
            </div>
            <MapComponent center={breweryLocation} zoom={14} className="mt-6" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-brand text-2xl font-bold mb-4">{t('visit.trails.title')}</h3>
            <p className="text-neutral-700 mb-6">
              {t('visit.trails.text')}
            </p>
            <ImageGallery images={locationImages} />
          </motion.div>
        </div>
      </Section>
      
      {/* Hours & Contact Section */}
      <Section title={t('visit.hours.title')} className="bg-neutral-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock size={24} className="text-primary-500" />
              <h3 className="font-brand text-2xl font-bold">{t('visit.hours.title')}</h3>
            </div>
            <ul className="space-y-4 text-lg">
              <li className="pb-4 border-b border-neutral-100">
                {t('visit.hours.weekdays')}
              </li>
              <li>
                {t('visit.hours.weekend')}
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-brand text-2xl font-bold mb-6">{t('visit.contact.title')}</h3>
            <ContactForm />
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default VisitPage;