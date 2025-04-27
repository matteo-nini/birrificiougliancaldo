import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

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
}: BeerCardProps) => {
  const { t } = useLanguage();
  
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
      </div>
      
      <div className="p-6">
        <h3 className="font-serif text-2xl font-bold mb-1">{name}</h3>
        <p className="text-neutral-600 mb-4">{type}</p>
        
        <div className="mb-4">
          <p className="text-neutral-700 mb-3">{description}</p>
          <p className="text-neutral-700 italic">{tasting}</p>
        </div>
        
        <div className="flex gap-4 text-sm">
          <span className="px-3 py-1 bg-neutral-100 rounded-full">{abv}</span>
          <span className="px-3 py-1 bg-neutral-100 rounded-full">{ibu}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default BeerCard;