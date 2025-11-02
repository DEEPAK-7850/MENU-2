import { BarMenuCategory, BarMenuCategoryData } from './types';
import { WhiskeyIcon, BeerIcon, RumIcon, VodkaIcon, BreezerIcon } from './CategoryIcons';

export const BAR_CATEGORY_ORDER: BarMenuCategory[] = [
  BarMenuCategory.WHISKEY,
  BarMenuCategory.BEER,
  BarMenuCategory.RUM,
  BarMenuCategory.VODKA,
  BarMenuCategory.BREEZER,
];

export const BAR_MENU_DATA: BarMenuCategoryData[] = [
  {
    category: BarMenuCategory.WHISKEY,
    icon: WhiskeyIcon,
    columns: ['30 ml', '60 ml'],
    items: [
      { name: '100 Pipers', prices: [162, 322] },
      { name: 'Red Label', prices: [162, 322] },
      { name: "Teacher's 50", prices: [174, 348] },
      { name: 'Blenders Pride', prices: [124, 248] },
    ]
  },
  {
    category: BarMenuCategory.BEER,
    icon: BeerIcon,
    columns: ['330ml', '650ml'],
    items: [
      { name: 'Kingfisher Lager', prices: [null, 298] },
      { name: 'Kingfisher Strong', prices: [null, 298] },
      { name: 'Kingfisher Ultra', prices: [174, 347] },
      { name: 'Budweiser', prices: [null, 396] },
      { name: 'Tuborg Strong', prices: [null, 298] },
      { name: 'Carlsberg', prices: [null, 396] },
      { name: 'Kingfisher Lager Can (500ml)', prices: [200, null] },
    ]
  },
  {
    category: BarMenuCategory.RUM,
    icon: RumIcon,
    columns: ['30 ml', '60 ml'],
    items: [
      { name: 'Bacardi White Rum', prices: [124, 248] },
      { name: 'Old Monk', prices: [124, 223] },
    ]
  },
  {
    category: BarMenuCategory.VODKA,
    icon: VodkaIcon,
    columns: ['30 ml', '60 ml'],
    items: [
      { name: 'Smirnoff', prices: [112, 224] },
    ]
  },
  {
    category: BarMenuCategory.BREEZER,
    icon: BreezerIcon,
    columns: [],
    items: [
      { name: 'Lemonade', prices: [149] },
      { name: 'Cranberry', prices: [149] },
      { name: 'Blackberry', prices: [149] },
      { name: 'Jamaican', prices: [149] },
      { name: 'Watermelon', prices: [149] },
    ]
  }
];