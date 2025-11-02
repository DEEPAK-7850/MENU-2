import React, { useRef, useEffect } from 'react';
import { MenuCategory, CategoryFilterType } from '../types';
import {
  BeveragesIcon,
  BreakfastIcon,
  EggsIcon,
  SaladPapadIcon,
  SoupIcon,
  IndianStartersIcon,
  StartersIcon,
  IndianMainCourseIcon,
  ChefSpecialIcon,
  RajasthaniMainCourseIcon,
  RaitaIcon,
  IndianBreadsIcon,
  RiceIcon,
  DessertsIcon,
} from './CategoryIcons';

interface CategoryNavigationProps {
  activeCategory: CategoryFilterType;
  setCategory: (category: CategoryFilterType) => void;
  categories: MenuCategory[];
}

const iconMap: { [key in MenuCategory]: React.FC<React.SVGProps<SVGSVGElement> & { isActive?: boolean }> } = {
  [MenuCategory.BEVERAGES]: BeveragesIcon,
  [MenuCategory.BREAKFAST]: BreakfastIcon,
  [MenuCategory.EGGS]: EggsIcon,
  [MenuCategory.SALAD_PAPAD]: SaladPapadIcon,
  [MenuCategory.SOUP]: SoupIcon,
  [MenuCategory.INDIAN_STARTERS]: IndianStartersIcon,
  [MenuCategory.STARTERS]: StartersIcon,
  [MenuCategory.INDIAN_MAIN_COURSE]: IndianMainCourseIcon,
  [MenuCategory.CHEF_SPECIAL]: ChefSpecialIcon,
  [MenuCategory.RAJASTHANI_MAIN_COURSE]: RajasthaniMainCourseIcon,
  [MenuCategory.RAITA]: RaitaIcon,
  [MenuCategory.INDIAN_BREADS]: IndianBreadsIcon,
  [MenuCategory.RICE]: RiceIcon,
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
  
  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex space-x-2 overflow-x-auto scrollbar-hide"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;
          const Icon = iconMap[category];
          
          return (
            <button
              key={category}
              ref={isActive ? activeItemRef : null}
              onClick={() => setCategory(category)}
              className={`flex-shrink-0 my-1 flex flex-col items-center justify-center w-24 h-24 p-2 rounded-xl border transition-all duration-300 transform hover:scale-105 ${
                isActive
                  ? 'bg-primary text-white border-primary shadow-lg'
                  : 'bg-ui-bg text-text-secondary border-ui-border hover:bg-gray-200'
              }`}
            >
              <Icon 
                className={`w-8 h-8 mb-1${category === MenuCategory.DESSERTS ? ' animate-dessert' : ''}`}
                isActive={isActive}
              />
              <span className="text-xs text-center font-semibold break-words">
                {category}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};