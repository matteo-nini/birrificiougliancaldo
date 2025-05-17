import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
}

const Section = ({ id, title, subtitle, className = '', children }: SectionProps) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-brand text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          {subtitle && <p className="font-brand text-neutral-600 max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export default Section;