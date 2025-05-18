import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import ImageGallery from './ImageGallery';
import { GalleryImage } from '../../data/galleryImages';

interface BeerCardProps {
  id: string;
  name: string;
  type: string;
  description: string;
  tasting: string;
  abv: string;
  ibu: string;
  imageSrc: string;
  color: string;
  className?: string;
  gallery?: GalleryImage[];
}

const BeerCard = ({
  id,
  name,
  type,
  description,
  tasting,
  abv,
  ibu,
  imageSrc,
  color,
  className = '',
  gallery = [],
}: BeerCardProps) => {
  const [showGallery, setShowGallery] = useState(false);
  const { language } = useLanguage();
  
  // Testi localizzati per i pulsanti della galleria
  const viewGalleryText = language === 'en' ? 'View Gallery' : 'Visualizza galleria';
  const hideGalleryText = language === 'en' ? 'Hide Gallery' : 'Nascondi galleria';
  const galleryTitleText = language === 'en' ? 'Image Gallery' : 'Galleria immagini';
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`group rounded-lg overflow-hidden shadow-md bg-white transition-all duration-300 hover:shadow-xl ${className}`}
    >
      <div className={`relative h-72 overflow-hidden ${color}`}>
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        {gallery.length > 0 && (
          <button 
            onClick={() => setShowGallery(true)}
            className="absolute bottom-4 right-4 bg-white bg-opacity-90 text-neutral-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-opacity-100 transition-all duration-300"
          >
            {viewGalleryText}
          </button>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="font-brand text-2xl font-bold mb-1">{name}</h3>
        <p className="font-brand text-neutral-600 mb-4">{type}</p>
        
        <div className="mb-4">
          <p className="text-neutral-700 mb-3">{description}</p>
          <p className="text-neutral-700 italic">{tasting}</p>
        </div>
        
        <div className="flex gap-4 text-sm">
          <span className="px-3 py-1 bg-neutral-100 rounded-full">{abv}</span>
          <span className="px-3 py-1 bg-neutral-100 rounded-full">{ibu}</span>
        </div>
      </div>

      {showGallery && gallery.length > 0 && (
        <div className="px-6 pb-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-brand text-xl">{galleryTitleText}</h4>
            <button 
              onClick={() => setShowGallery(false)}
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {hideGalleryText}
            </button>
          </div>
          <ImageGallery images={gallery} />
        </div>
      )}
    </motion.div>
  );
};

export default BeerCard;