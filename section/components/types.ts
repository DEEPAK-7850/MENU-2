export enum BarMenuCategory {
  WHISKEY = 'Whiskey',
  BEER = 'Beer',
  RUM = 'Rum',
  VODKA = 'Vodka',
  BREEZER = 'Breezer',
}

export interface BarMenuItem {
  name: string;
  prices: (number | null)[];
}

export interface BarMenuCategoryData {
  category: BarMenuCategory;
  columns: string[];
  items: BarMenuItem[];
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}