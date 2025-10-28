import React from 'react';
import { ItemType, FilterType } from '../types';

interface FilterButtonsProps {
  activeFilter: FilterType;
  setFilter: (filter: FilterType) => void;
}

export const FilterButtons: React.FC<FilterButtonsProps> = ({ activeFilter, setFilter }) => {
  const filters: { label: string; value: FilterType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Veg', value: ItemType.VEG },
    { label: 'Non-Veg', value: ItemType.NON_VEG },
  ];

  const getButtonClasses = (value: FilterType) => {
    const baseClasses = `px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white`;

    if (activeFilter === value) {
      switch (value) {
        case ItemType.VEG:
          return `${baseClasses} bg-green-500 text-white shadow-lg focus:ring-green-500`;
        case ItemType.NON_VEG:
          return `${baseClasses} bg-red-500 text-white shadow-lg focus:ring-red-500`;
        default: // 'all'
          return `${baseClasses} bg-primary text-white shadow-lg focus:ring-primary`;
      }
    }
    
    // Inactive styles
    return `${baseClasses} bg-ui-bg text-text-primary border border-ui-border hover:bg-gray-200 focus:ring-primary`;
  };

  return (
    <div className="flex justify-center space-x-3 mb-8">
      {filters.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => setFilter(value)}
          className={getButtonClasses(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};