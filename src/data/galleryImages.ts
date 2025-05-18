import { beerImages } from './images';

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Configurazione centralizzata di Cloudinary
const cloudinaryConfig = {
  cloudName: 'dpzex8n4u',
  baseUrl: 'https://res.cloudinary.com/dpzex8n4u/image/upload',
  mainFolder: 'Birrificio%20Ugliancaldo', // Cartella principale con URL encoding per lo spazio
  version: '' // Rimosso il parametro di versione (se necessario puoi reintrodurlo)
};

// Helper per generare URL Cloudinary
const cloudinaryUrl = (folder: string, filename: string): string => 
  `${cloudinaryConfig.baseUrl}/${cloudinaryConfig.mainFolder}/${folder}/${filename}`;

// Immagini birre per gallerie dedicate
export const salvanGallery: GalleryImage[] = [
  {
    src: beerImages.salvan.primary,
    alt: 'Birra Salvan - Castagne',
    width: 1600,
    height: 1067,
  },
  ...beerImages.salvan.gallery.map(src => ({
    src,
    alt: 'Dettaglio Birra Salvan',
    width: 1600,
    height: 1067,
  }))
];

export const mazzolesaGallery: GalleryImage[] = [
  {
    src: beerImages.mazzolesa.primary,
    alt: 'Birra Mazzolesa - IPA',
    width: 1600,
    height: 1067,
  },
  ...beerImages.mazzolesa.gallery.map(src => ({
    src,
    alt: 'Dettaglio Birra Mazzolesa',
    width: 1600,
    height: 1067,
  }))
];

export const canalataGallery: GalleryImage[] = [
  {
    src: beerImages.canalata.primary,
    alt: 'Birra Canalata - Bionda',
    width: 1600,
    height: 1067,
  },
  ...beerImages.canalata.gallery.map(src => ({
    src,
    alt: 'Dettaglio Birra Canalata',
    width: 1600,
    height: 1067,
  }))
];

export const cambraGallery: GalleryImage[] = [
  {
    src: beerImages.cambra.primary,
    alt: 'Birra Cambra - APA Ambrata',
    width: 1600,
    height: 1067,
  },
  ...beerImages.cambra.gallery.map(src => ({
    src,
    alt: 'Dettaglio Birra Cambra',
    width: 1600,
    height: 1067,
  }))
];

export const breweryImages: GalleryImage[] = [
  {
    src: cloudinaryUrl('birre', 'beers_bg_ugliancaldo.jpg'),
    alt: 'Birre Ugliancaldo',
    width: 1600,
    height: 1067,
  },
  // {
  //   src: cloudinaryUrl('brewery', 'tanks.jpg'),
  //   alt: 'Serbatoi di fermentazione',
  //   width: 1600,
  //   height: 1067,
  // },
  // {
  //   src: cloudinaryUrl('brewery', 'production.jpg'),
  //   alt: 'Produzione della birra',
  //   width: 1600,
  //   height: 1067,
  // },
  // {
  //   src: cloudinaryUrl('brewery', 'craftprocess.jpg'),
  //   alt: 'Processo di produzione artigianale',
  //   width: 1600,
  //   height: 1067,
  // },
  // {
  //   src: cloudinaryUrl('brewery', 'brewing.jpg'),
  //   alt: 'Processo di fermentazione',
  //   width: 1600,
  //   height: 1067,
  // },
  // {
  //   src: cloudinaryUrl('brewery', 'landscape.jpg'),
  //   alt: 'Panorama montano vicino al birrificio',
  //   width: 1600,
  //   height: 1067,
  // },
];

export const locationImages: GalleryImage[] = [
  // {
  //   src: cloudinaryUrl('location', 'mountains.jpg'),
  //   alt: 'Paesaggio montano delle Alpi Apuane',
  //   width: 1600,
  //   height: 1067,
  // },
  // {
  //   src: cloudinaryUrl('location', 'trails.jpg'),
  //   alt: 'Sentieri escursionistici vicino al birrificio',
  //   width: 1600,
  //   height: 1067,
  // },
  // {
  //   src: cloudinaryUrl('location', 'forest.jpg'),
  //   alt: 'Foresta nei dintorni del birrificio',
  //   width: 1600,
  //   height: 1067,
  // },
];