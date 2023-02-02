import images from './images';

const wines = [
  {
    title: 'Pomegranate Starfall',
    price: '$8',
    tags: 'Pomagrante |  21 oz',
  },
  {
    title: 'Strawberry Mojito',
    price: '$6',
    tags: 'Strawberry | Lime | 16 oz',
  },
  {
    title: 'Yuzu Lemon Sky',
    price: '$7',
    tags: 'Yuzu Lemon | 21 oz',
  },
  {
    title: 'Moondrop',
    price: '$9',
    tags: 'Lychee | Longan | Vanilla | 16 oz',
  },
  {
    title: 'Sunset Bay ',
    price: '$8',
    tags: 'Persimmon | Blood Orange | 21 oz',
  },
];

const cocktails = [
  {
    title: 'Watermelon Rose',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
