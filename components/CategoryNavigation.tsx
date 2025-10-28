
import React from 'react';
import { MenuCategory, CategoryFilterType } from '../types';
import {
  AllIcon,
  BeveragesIcon,
  BreakfastIcon,
  EggsIcon,
  SaladPapadIcon,
  SoupVegIcon,
  SoupNonVegIcon,
  IndianStartersVegIcon,
  IndianStartersNonVegIcon,
  StartersVegIcon,
  StartersNonVegIcon,
  IndianMainCourseVegIcon,
  IndianMainCourseNonVegIcon,
  ChefSpecialVegIcon,
  ChefSpecialNonVegIcon,
  RajasthaniMainCourseIcon,
  RaitaIcon,
  IndianBreadsIcon,
  RiceVegIcon,
  RiceNonVegIcon,
  DessertsIcon,
} from './CategoryIcons';

interface CategoryNavigationProps {
  activeCategory: CategoryFilterType;
  setCategory: (category: CategoryFilterType) => void;
  categories: MenuCategory[];
}

const categoryIconMap: { [key in MenuCategory]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  [MenuCategory.BEVERAGES]: BeveragesIcon,
  [MenuCategory.BREAKFAST]: BreakfastIcon,
  [MenuCategory.EGGS]: EggsIcon,
  [MenuCategory.SALAD_PAPAD]: SaladPapadIcon,
  [MenuCategory.SOUP_VEG]: SoupVegIcon,
  [MenuCategory.SOUP_NONVEG]: SoupNonVegIcon,
  [MenuCategory.INDIAN_STARTERS_VEG]: IndianStartersVegIcon,
  [MenuCategory.INDIAN_STARTERS_NONVEG]: IndianStartersNonVegIcon,
  [MenuCategory.STARTERS_VEG]: StartersVegIcon,
  [MenuCategory.STARTERS_NONVEG]: StartersNonVegIcon,
  [MenuCategory.INDIAN_MAIN_COURSE_VEG]: IndianMainCourseVegIcon,
  [MenuCategory.INDIAN_MAIN_COURSE_NONVEG]: IndianMainCourseNonVegIcon,
  [MenuCategory.CHEF_SPECIAL_MAIN_COURSE_VEG]: ChefSpecialVegIcon,
  [MenuCategory.CHEF_SPECIAL_MAIN_COURSE_NONVEG]: ChefSpecialNonVegIcon,
  [MenuCategory.RAJASTHANI_MAIN_COURSE]: RajasthaniMainCourseIcon,
  [MenuCategory.RAITA]: RaitaIcon,
  [MenuCategory.INDIAN_BREADS]: IndianBreadsIcon,
  [MenuCategory.RICE_VEG]: RiceVegIcon,
  [MenuCategory.RICE_NONVEG]: RiceNonVegIcon,
  [MenuCategory.DESSERTS]: DessertsIcon,
};

export const CategoryNavigation: React.FC<CategoryNavigationProps> = ({ activeCategory, setCategory, categories }) => {
  const allCategories: CategoryFilterType[] = ['all', ...categories];

  return (
    <nav className="mb-8">
      <div className="flex overflow-x-auto space-x-2 pb-3 -mx-4 px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {allCategories.map((category) => {
          const isActive = activeCategory === category;
          const Icon = category === 'all' ? AllIcon : categoryIconMap[category as MenuCategory];
          
          return (
            <button
              key={category}
              onClick={() => setCategory(category)}
              className={`flex-shrink-0 flex flex-col items-center justify-center w-24 h-20 rounded-xl p-2 transition-all duration-200 text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                isActive ? 'bg-primary text-white shadow-lg' : 'bg-ui-bg text-text-secondary hover:bg-gray-200'
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-[10px] font-medium leading-tight whitespace-normal">{category}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
