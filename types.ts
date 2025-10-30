
// FIX: Removed a self-import of `ItemType`. Since `ItemType` is defined in this file, importing it causes a conflict.
export enum ItemType {
  VEG = 'VEG',
  NON_VEG = 'NON_VEG',
}

export enum MenuCategory {
  BEVERAGES = 'Beverages',
  BREAKFAST = 'Breakfast',
  EGGS = 'Eggs',
  SALAD_PAPAD = 'Salad / Papad',
  SOUP = 'Soup',
  INDIAN_STARTERS = 'Indian Starters',
  STARTERS = 'Starters',
  INDIAN_MAIN_COURSE = 'Indian Main Course',
  CHEF_SPECIAL = 'Chef’s Special',
  RAJASTHANI_MAIN_COURSE = 'Rajasthani Main Course',
  RAITA = 'Raita',
  INDIAN_BREADS = 'Indian Breads',
  RICE = 'Rice',
  DESSERTS = 'Desserts',
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  type: ItemType;
  imageUrl: string;
  category: MenuCategory;
}

export type FilterType = 'all' | ItemType.VEG | ItemType.NON_VEG;

export type CategoryFilterType = MenuCategory | 'all';