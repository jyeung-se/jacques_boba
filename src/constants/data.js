import images from './images';

const wines = [
  {
    title: 'Red Starfall',
    price: '$8',
    tags: 'Pomegranate | Red Mango |  16 oz',
  },
  {
    title: 'Strawberry Mojito',
    price: '$6',
    tags: 'Strawberry | Lime | 16 oz',
  },
  {
    title: 'Lemon Sky',
    price: '$7',
    tags: 'Yuzu Lemon | Lime Soda | 16 oz',
  },
  {
    title: 'Moondrop',
    price: '$9',
    tags: 'Lychee | Longan | Vanilla | 16 oz',
  },
  {
    title: 'Sunset Bay ',
    price: '$8',
    tags: 'Persimmon | Blood Orange | 16 oz',
  },
];

const cocktails = [
  {
    title: 'The Jacques',
    price: '$13',
    tags: 'Watermelon | Rose | 21 oz',
  },
  {
    title: 'Lavender Spring',
    price: '$11',
    tags: 'Lavender | Condensed Milk | Black Tea | 21 oz',
  },
  {
    title: 'Matcha World',
    price: '$11',
    tags: 'Matcha | Vanilla | Honey | 21 oz',
  },
  {
    title: 'The Gatsby',
    price: '$12',
    tags: 'Cherry | Mango | Soda Pop | 21 oz',
  },
  {
    title: 'Love Shot',
    price: '$11',
    tags: 'Strawberry | Pomegranate | Rose Petals | 21 oz',
  },
  {
    title: 'Hawaiian Surf',
    price: '$12',
    tags: 'Pineapple | Coconut | Natural Blue Flower | 21 oz',
  },
  {
    title: 'Golden Days',
    price: '$18',
    tags: '18K Gold | Mango | Yogurt | Mochi | 21 oz',
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
