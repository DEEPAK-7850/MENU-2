import React from 'react';
import { MenuItem as MenuItemType, MenuCategory } from '../types';
import { MenuItem } from './MenuItem';
import { CATEGORY_ORDER } from '../constants';

interface MenuListProps {
  groupedItems: { [key in MenuCategory]?: MenuItemType[] };
  expandedCategories: Set<MenuCategory>;
  onToggleCategory: (category: MenuCategory) => void;
  onSectionRef: (category: MenuCategory, element: HTMLDivElement | null) => void;
}

const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 text-text-secondary transform transition-transform duration-300 ${
      isExpanded ? 'rotate-180' : ''
    }`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

export const MenuList: React.FC<MenuListProps> = ({
  groupedItems,
  expandedCategories,
  onToggleCategory,
  onSectionRef,
}) => {
  const availableCategories = CATEGORY_ORDER.filter(
    (category) => groupedItems[category] && groupedItems[category]!.length > 0
  );

  if (availableCategories.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-text-secondary">No dishes found.</p>
        <p className="text-md text-text-secondary mt-2">
          Try adjusting your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-ui-border rounded-2xl p-2 sm:p-4 shadow-sm">
      {availableCategories.map((category, index) => {
        const isExpanded = expandedCategories.has(category);
        // Get the count. The '!' is safe because of the filter above.
        const count = groupedItems[category]!.length;

        return (
          <div
            key={category}
            ref={(el) => onSectionRef(category, el)}
            data-category={category}
            className={
              index !== availableCategories.length - 1
                ? 'border-b border-ui-border'
                : ''
            }
          >
            <button
              onClick={() => onToggleCategory(category)}
              className="w-full flex justify-between items-center py-4 px-2 focus:outline-none"
              aria-expanded={isExpanded}
            >
              {/* UPDATED: Added item count */}
              <h2 className="text-md sm:text-md font-extrabold text-primary text-left">
                {category} ({count})
              </h2>
              <ChevronIcon isExpanded={isExpanded} />
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-4 pt-2">
                  {groupedItems[category]?.map((item, itemIndex) => (
                    <MenuItem key={item.id} item={item} index={itemIndex} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};