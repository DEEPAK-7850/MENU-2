
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
  SOUP_VEG = 'Soup(veg)',
  SOUP_NONVEG = 'Soup(non-veg)',
  INDIAN_STARTERS_VEG = 'Indian Starters(Veg)',
  INDIAN_STARTERS_NONVEG = 'Indian Starters(non-veg)',
  STARTERS_VEG = 'Starters(Veg)',
  STARTERS_NONVEG = 'Starters(non-veg)',
  INDIAN_MAIN_COURSE_VEG = 'Indian Main Course(Veg)',
  INDIAN_MAIN_COURSE_NONVEG = 'Indian Main Course(non-veg)',
  CHEF_SPECIAL_MAIN_COURSE_VEG = 'Chef’s Special(Veg)',
  CHEF_SPECIAL_MAIN_COURSE_NONVEG = 'Chef’s Special(non-veg)',
  RAJASTHANI_MAIN_COURSE = 'Rajasthani Main Course',
  RAITA = 'Raita',
  INDIAN_BREADS = 'Indian Breads',
  RICE_VEG = 'Rice(veg)',
  RICE_NONVEG = 'Rice(non-veg)',
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
