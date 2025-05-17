import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Componente Preloader che mostra un'animazione di caricamento
 * con il logo del birrificio su un gradiente dei colori delle birre
 */
const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuliamo il caricamento della pagina
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, 
              rgb(141, 69, 59) 0%, 
              rgb(114, 179, 128) 35%, 
              rgb(234, 198, 87) 70%, 
              rgb(214, 119, 69) 100%)`
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img
              src="/logo-birrificio-ugliancaldo.png"
              alt="Birrificio Ugliancaldo"
              className="h-32 md:h-40"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
