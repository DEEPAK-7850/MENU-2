import React from 'react';
import { MenuItem as MenuItemType, MenuCategory } from '../types';
import { MenuItem } from './MenuItem';
import { CATEGORY_ORDER } from '../constants';

interface MenuListProps {
  groupedItems: { [key in MenuCategory]?: MenuItemType[] };
}

export const MenuList: React.FC<MenuListProps> = ({ groupedItems }) => {
  const availableCategories = CATEGORY_ORDER.filter(category => groupedItems[category] && groupedItems[category].length > 0);

  if (availableCategories.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-text-secondary">No dishes found.</p>
        <p className="text-md text-text-secondary mt-2">Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-ui-border rounded-2xl p-4 sm:p-6 space-y-8 shadow-sm">
      {availableCategories.map(category => (
        <div key={category}>
          <h2 className="text-2xl font-bold text-text-primary mb-4 px-2">{category}</h2>
          {groupedItems[category]?.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
};