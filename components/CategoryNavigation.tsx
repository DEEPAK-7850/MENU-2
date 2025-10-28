import React, { useRef, useEffect } from 'react';
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

const iconMap: { [key in MenuCategory]: React.FC<React.SVGProps<SVGSVGElement>> } = {
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeItemRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeItem = activeItemRef.current;
      const containerRect = container.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      
      const scrollOffset =
        itemRect.left -
        containerRect.left -
        containerRect.width / 2 +
        itemRect.width / 2;

      container.scrollTo({
        left: container.scrollLeft + scrollOffset,
        behavior: 'smooth',
      });
    }
  }, [activeCategory]);
  
  const allCategories: CategoryFilterType[] = ['all', ...categories];

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex space-x-2 overflow-x-auto scrollbar-hide"
      >
        {allCategories.map((category) => {
          const isActive = activeCategory === category;
          const Icon = category === 'all' ? AllIcon : iconMap[category];
          
          return (
            <button
              key={category}
              ref={isActive ? activeItemRef : null}
              onClick={() => setCategory(category)}
              className={`flex-shrink-0 flex my-1 flex-col items-center justify-center w-20 ml-1 h-20 p-2 rounded-xl border transition-all duration-300 transform hover:scale-105 ${
                isActive
                  ? 'bg-primary text-white border-primary shadow-lg'
                  : 'bg-ui-bg text-text-secondary border-ui-border hover:bg-gray-200'
              }`}
            >
              <Icon className="w-8 h-8 mb-1" />
              <span className="text-xs text-center font-semibold break-words">
                {category === 'all' ? 'All' : category}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};