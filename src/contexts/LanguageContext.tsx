import { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.beers': 'Our Beers',
    'nav.about': 'About Us',
    'nav.visit': 'Visit Us',
    'language': 'Language',
    'italian': 'Italian',
    'english': 'English',
    
    // Home Page
    'home.hero.title': 'Craft Beer from the Heart of Apuane Alps',
    'home.hero.subtitle': 'Tradition and nature in every bottle',
    'home.intro.title': 'Welcome to Birrificio Ugliancaldo',
    'home.intro.text': 'Located in the scenic Apuane Park, our brewery creates distinctive beers that capture the essence of our mountain terrain and pure water sources. Every beer is crafted with passion and without compromises.',
    'home.featured.title': 'Our Signature Beers',
    'home.featured.subtitle': 'Discover our artisanal selection',
    'home.location.title': 'Visit Our Brewery',
    'home.location.text': 'Come experience the beauty of our location and taste our beers at their source. Located in a pristine natural environment, our brewery offers a unique tasting experience.',
    'home.cta': 'Explore Our Beers',
    
    // Beers Page
    'beers.title': 'Our Beers',
    'beers.subtitle': 'Crafted with passion and local ingredients',
    'beer.salvan.name': 'Salvan',
    'beer.salvan.type': 'Chestnut Beer',
    'beer.salvan.description': 'A blonde high-fermentation beer made with chestnuts from Ugliancaldo, dried according to tradition. Produced using artisanal methods, unfiltered, unpasteurized, with no added additives.',
    'beer.salvan.tasting': 'Notes of chestnut, caramel, and subtle spice with a smooth finish.',
    'beer.salvan.abv': 'ABV: 6.5%',
    'beer.salvan.ibu': 'IBU: 25',
    
    'beer.mazzolesa.name': 'Mazzolesa',
    'beer.mazzolesa.type': 'IPA',
    'beer.mazzolesa.description': 'A high-fermentation IPA, produced using artisanal methods, unfiltered, unpasteurized, with no added additives.',
    'beer.mazzolesa.tasting': 'Herbal, fresh, with hints of citrus and pine. Clean finish.',
    'beer.mazzolesa.abv': 'ABV: 5.2%',
    'beer.mazzolesa.ibu': 'IBU: 20',
    
    'beer.canalata.name': 'Canalata',
    'beer.canalata.type': 'Blonde Ale',
    'beer.canalata.description': 'A high-fermentation blonde beer, produced using artisanal methods, unfiltered, unpasteurized, with no added additives.',
    'beer.canalata.tasting': 'Clean, crisp, with a balanced maltiness and delicate hop aroma.',
    'beer.canalata.abv': 'ABV: 4.8%',
    'beer.canalata.ibu': 'IBU: 22',
    
    'beer.cambra.name': 'Cambra',
    'beer.cambra.type': 'Amber APA',
    'beer.cambra.description': 'A high-fermentation amber APA, produced using artisanal methods, unfiltered, unpasteurized, with no added additives.',
    'beer.cambra.tasting': 'Citrus, pine, with a robust hoppy character and dry finish.',
    'beer.cambra.abv': 'ABV: 6.8%',
    'beer.cambra.ibu': 'IBU: 65',
    
    // About Page
    'about.title': 'Our Story',
    'about.subtitle': 'From mountain springs to your glass',
    'about.history.title': 'Brewery History',
    'about.history.text': 'Founded in the heart of the Apuane Alps, Birrificio Ugliancaldo started as a passion project dedicated to creating artisanal beers that celebrate our unique mountain terroir. We focus on quality ingredients and traditional brewing methods.',
    'about.location.title': 'Our Location',
    'about.location.text': 'Nestled at the foot of Pizzo d\'Uccello and a short hike from Equi Terme, our brewery draws inspiration and ingredients from the pristine natural surroundings of the Apuan Alps.',
    'about.process.title': 'Our Process',
    'about.process.text': 'We combine traditional brewing methods with respect for nature, using locally sourced ingredients whenever possible. All our beers are unfiltered, unpasteurized, and free from additives.',
    'about.gallery.title': 'Brewery Gallery',
    
    // Visit Page
    'visit.title': 'Visit Us',
    'visit.subtitle': 'Experience our brewery and surroundings',
    'visit.location.title': 'Find Us',
    'visit.location.address': 'Birrificio Ugliancaldo, Via dei Monti, Ugliancaldo, Tuscany, Italy',
    'visit.trails.title': 'Hiking Trails',
    'visit.trails.text': 'Explore the beautiful hiking trails connecting our brewery to Equi Terme and the stunning landscapes of the Apuan Alps. The area offers magnificent views and unique natural environments.',
    'visit.hours.title': 'Opening Hours',
    'visit.hours.weekdays': 'Monday - Friday: 10:00 - 18:00',
    'visit.hours.weekend': 'Saturday - Sunday: 10:00 - 20:00',
    'visit.contact.title': 'Contact Us',
    'visit.contact.name': 'Name',
    'visit.contact.email': 'Email',
    'visit.contact.message': 'Message',
    'visit.contact.submit': 'Send Message',
    
    // Footer
    'footer.rights': 'All Rights Reserved',
    'footer.address': 'Ugliancaldo, Tuscany, Italy',
    'footer.phone': '+39 388 8490145',
    'footer.email': 'birrificiougliancaldo@gmail.com',
    
    // Misc
    'readMore': 'Read More',
    'learnMore': 'Learn More',
    'viewAll': 'View All',
    '404.title': 'Page Not Found',
    '404.text': 'The page you are looking for does not exist.',
    '404.button': 'Return Home',
  },
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.beers': 'Le Nostre Birre',
    'nav.about': 'Chi Siamo',
    'nav.visit': 'Visitaci',
    'language': 'Lingua',
    'italian': 'Italiano',
    'english': 'Inglese',
    
    // Home Page
    'home.hero.title': 'Birra Artigianale dal Cuore delle Alpi Apuane',
    'home.hero.subtitle': 'Tradizione e natura in ogni bottiglia',
    'home.intro.title': 'Benvenuti al Birrificio Ugliancaldo',
    'home.intro.text': 'Immerso nel pittoresco Parco delle Apuane, il nostro birrificio produce birre distintive che catturano l\'essenza del nostro territorio montano e delle pure sorgenti d\'acqua. Ogni birra è realizzata con passione e senza compromessi.',
    'home.featured.title': 'Le Nostre Birre Signature',
    'home.featured.subtitle': 'Scopri la nostra selezione artigianale',
    'home.location.title': 'Visita il Nostro Birrificio',
    'home.location.text': 'Vieni a vivere la bellezza della nostra location e assaggia le nostre birre alla fonte. Situato in un ambiente naturale incontaminato, il nostro birrificio offre un\'esperienza di degustazione unica.',
    'home.cta': 'Scopri le Nostre Birre',
    
    // Beers Page
    'beers.title': 'Le Nostre Birre',
    'beers.subtitle': 'Create con passione e ingredienti locali',
    'beer.salvan.name': 'Salvan',
    'beer.salvan.type': 'Birra alle Castagne',
    'beer.salvan.description': 'Birra bionda ad alta fermentazione alle castagne di Ugliancaldo, essiccate come da tradizione, prodotta con metodo artigianale, non filtrata, non pastorizzata, senza addittivi aggiunti.',
    'beer.salvan.tasting': 'Note di castagna, caramello e spezie sottili con un finale morbido.',
    'beer.salvan.abv': 'ABV: 6.5%',
    'beer.salvan.ibu': 'IBU: 25',
    
    'beer.mazzolesa.name': 'Mazzolesa',
    'beer.mazzolesa.type': 'IPA',
    'beer.mazzolesa.description': 'Birra IPA ad alta fermentazione, prodotta con metodo artigianale, non filtrata, non pastorizzata, senza addittivi aggiunti.',
    'beer.mazzolesa.tasting': 'Erbacea, fresca, con sentori di agrumi e pino. Finale pulito.',
    'beer.mazzolesa.abv': 'ABV: 5.2%',
    'beer.mazzolesa.ibu': 'IBU: 20',
    
    'beer.canalata.name': 'Canalata',
    'beer.canalata.type': 'Bionda',
    'beer.canalata.description': 'Birra bionda ad alta fermentazione, prodotta con metodo artigianale, non filtrata, non pastorizzata, senza addittivi aggiunti.',
    'beer.canalata.tasting': 'Pulita, croccante, con un maltato equilibrato e un delicato aroma di luppolo.',
    'beer.canalata.abv': 'ABV: 4.8%',
    'beer.canalata.ibu': 'IBU: 22',
    
    'beer.cambra.name': 'Cambra',
    'beer.cambra.type': 'APA Ambrata',
    'beer.cambra.description': 'Birra APA ambrata ad alta fermentazione, prodotta con metodo artigianale, non filtrata, non pastorizzata, senza addittivi aggiunti.',
    'beer.cambra.tasting': 'Agrumi, pino, con un robusto carattere luppolato e un finale secco.',
    'beer.cambra.abv': 'ABV: 6.8%',
    'beer.cambra.ibu': 'IBU: 65',
    
    // About Page
    'about.title': 'La Nostra Storia',
    'about.subtitle': 'Dalle sorgenti di montagna al tuo bicchiere',
    'about.history.title': 'Storia del Birrificio',
    'about.history.text': 'Fondato nel cuore delle Alpi Apuane, il Birrificio Ugliancaldo è nato come un progetto appassionato dedicato alla creazione di birre artigianali che celebrano il nostro unico terroir montano. Ci concentriamo su ingredienti di qualità e metodi tradizionali di produzione.',
    'about.location.title': 'La Nostra Location',
    'about.location.text': 'Adagiato ai piedi del Pizzo d\'Uccello e a breve distanza da Equi Terme, il nostro birrificio trae ispirazione e ingredienti dall\'incontaminato ambiente naturale delle Alpi Apuane.',
    'about.process.title': 'Il Nostro Processo',
    'about.process.text': 'Combiniamo metodi di birrificazione tradizionali con rispetto per la natura, utilizzando ingredienti locali quando possibile. Tutte le nostre birre sono non filtrate, non pastorizzate e prive di additivi.',
    'about.gallery.title': 'Galleria del Birrificio',
    
    // Visit Page
    'visit.title': 'Visitaci',
    'visit.subtitle': 'Vivi l\'esperienza del nostro birrificio e dei dintorni',
    'visit.location.title': 'Dove Siamo',
    'visit.location.address': 'Birrificio Ugliancaldo, Via dei Monti, Ugliancaldo, Toscana, Italia',
    'visit.trails.title': 'Sentieri Escursionistici',
    'visit.trails.text': 'Esplora i bellissimi sentieri escursionistici che collegano il nostro birrificio a Equi Terme e ai meravigliosi paesaggi delle Alpi Apuane. L\'area offre viste magnifiche e ambienti naturali unici.',
    'visit.hours.title': 'Orari di Apertura',
    'visit.hours.weekdays': 'Lunedì - Venerdì: 10:00 - 18:00',
    'visit.hours.weekend': 'Sabato - Domenica: 10:00 - 20:00',
    'visit.contact.title': 'Contattaci',
    'visit.contact.name': 'Nome',
    'visit.contact.email': 'Email',
    'visit.contact.message': 'Messaggio',
    'visit.contact.submit': 'Invia Messaggio',
    
    // Footer
    'footer.rights': 'Tutti i Diritti Riservati',
    'footer.address': 'Ugliancaldo, Toscana, Italia',
    'footer.phone': '+39 388 8490145',
    'footer.email': 'birrificiougliancaldo@gmail.com',
    
    // Misc
    'readMore': 'Leggi di Più',
    'learnMore': 'Scopri di Più',
    'viewAll': 'Vedi Tutto',
    '404.title': 'Pagina Non Trovata',
    '404.text': 'La pagina che stai cercando non esiste.',
    '404.button': 'Torna alla Home',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'it',
  setLanguage: () => {},
  changeLanguage: () => {},
  t: () => '',
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('it');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  // Aggiungiamo changeLanguage come alias per setLanguage per compatibilità
  const changeLanguage = setLanguage;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};