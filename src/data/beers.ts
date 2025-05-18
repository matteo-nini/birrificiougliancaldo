import { beerImages } from './images';

export interface Beer {
  id: string;
  nameKey: string;
  typeKey: string;
  descriptionKey: string;
  tastingKey: string;
  abvKey: string;
  ibuKey: string;
  imageSrc: string;
  color: string;
}

export const beers: Beer[] = [
  {
    id: 'salvan',
    nameKey: 'beer.salvan.name',
    typeKey: 'beer.salvan.type',
    descriptionKey: 'beer.salvan.description',
    tastingKey: 'beer.salvan.tasting',
    abvKey: 'beer.salvan.abv',
    ibuKey: 'beer.salvan.ibu',
    imageSrc: beerImages.salvan.primary,
    color: 'bg-[rgb(141,69,59)]',
  },
  {
    id: 'mazzolesa',
    nameKey: 'beer.mazzolesa.name',
    typeKey: 'beer.mazzolesa.type',
    descriptionKey: 'beer.mazzolesa.description',
    tastingKey: 'beer.mazzolesa.tasting',
    abvKey: 'beer.mazzolesa.abv',
    ibuKey: 'beer.mazzolesa.ibu',
    imageSrc: beerImages.mazzolesa.primary,
    color: 'bg-[rgb(114,179,128)]',
  },
  {
    id: 'canalata',
    nameKey: 'beer.canalata.name',
    typeKey: 'beer.canalata.type',
    descriptionKey: 'beer.canalata.description',
    tastingKey: 'beer.canalata.tasting',
    abvKey: 'beer.canalata.abv',
    ibuKey: 'beer.canalata.ibu',
    imageSrc: beerImages.canalata.primary,
    color: 'bg-[rgb(234,198,87)]',
  },
  {
    id: 'cambra',
    nameKey: 'beer.cambra.name',
    typeKey: 'beer.cambra.type',
    descriptionKey: 'beer.cambra.description',
    tastingKey: 'beer.cambra.tasting',
    abvKey: 'beer.cambra.abv',
    ibuKey: 'beer.cambra.ibu',
    imageSrc: beerImages.cambra.primary,
    color: 'bg-[rgb(214,119,69)]',
  },
];