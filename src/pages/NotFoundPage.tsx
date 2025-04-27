import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Birrificio Ugliancaldo</title>
      </Helmet>
      
      <div className="flex items-center justify-center h-screen bg-neutral-50 px-4">
        <div className="text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-neutral-800">404</h1>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-neutral-700">
            {t('404.title')}
          </h2>
          <p className="text-neutral-600 mb-8 max-w-md mx-auto">
            {t('404.text')}
          </p>
          <Button to="/" variant="primary">
            {t('404.button')}
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;