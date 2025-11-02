import React, { useRef, useEffect } from 'react';
import { BarMenuCategory } from './types';
import { BAR_MENU_DATA } from './constants';

interface BarCategoryNavigationProps {
  activeCategory: BarMenuCategory;
  setCategory: (category: BarMenuCategory) => void;
  categories: BarMenuCategory[];
}

const iconMap = new Map<BarMenuCategory, React.FC<React.SVGProps<SVGSVGElement>>>(
  BAR_MENU_DATA.map(data => [data.category, data.icon])
);

export const BarCategoryNavigation: React.FC<BarCategoryNavigationProps> = ({ activeCategory, setCategory, categories }) => {
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
          const Icon = iconMap.get(category);

          if (!Icon) return null;
          
          return (
            <button
              key={category}
              ref={isActive ? activeItemRef : null}
              onClick={() => setCategory(category)}
              className={`flex-shrink-0 flex flex-col items-center justify-center w-24 h-24 p-2 rounded-xl border transition-all duration-300 ease-in-out transform focus:outline-none ${
                isActive
                  ? 'bg-primary text-white border-primary shadow-xl'
                  : 'bg-ui-bg text-text-secondary border-ui-border hover:bg-gray-200 hover:shadow-lg'
              }`}
            >
              <Icon className="w-8 h-8 mb-1" />
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