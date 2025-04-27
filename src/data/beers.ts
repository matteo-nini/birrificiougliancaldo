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
    imageSrc: 'https://images.pexels.com/photos/1282248/pexels-photo-1282248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'bg-primary-50',
  },
  {
    id: 'mazzolesa',
    nameKey: 'beer.mazzolesa.name',
    typeKey: 'beer.mazzolesa.type',
    descriptionKey: 'beer.mazzolesa.description',
    tastingKey: 'beer.mazzolesa.tasting',
    abvKey: 'beer.mazzolesa.abv',
    ibuKey: 'beer.mazzolesa.ibu',
    imageSrc: 'https://images.pexels.com/photos/1089931/pexels-photo-1089931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'bg-secondary-50',
  },
  {
    id: 'canalata',
    nameKey: 'beer.canalata.name',
    typeKey: 'beer.canalata.type',
    descriptionKey: 'beer.canalata.description',
    tastingKey: 'beer.canalata.tasting',
    abvKey: 'beer.canalata.abv',
    ibuKey: 'beer.canalata.ibu',
    imageSrc: 'https://images.pexels.com/photos/1269043/pexels-photo-1269043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'bg-accent-50',
  },
  {
    id: 'cambra',
    nameKey: 'beer.cambra.name',
    typeKey: 'beer.cambra.type',
    descriptionKey: 'beer.cambra.description',
    tastingKey: 'beer.cambra.tasting',
    abvKey: 'beer.cambra.abv',
    ibuKey: 'beer.cambra.ibu',
    imageSrc: 'https://images.pexels.com/photos/5530314/pexels-photo-5530314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'bg-tertiary-50',
  },
];