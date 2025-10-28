import React, { useRef, useEffect, useState } from 'react';
import { MenuItem as MenuItemType, ItemType } from '../types';

interface MenuItemProps {
  item: MenuItemType;
}

const VegIcon = () => (
    <div className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0"></div>
);
const NonVegIcon = () => (
    <div className="w-3 h-3 rounded-full bg-red-500 flex-shrink-0"></div>
);

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the item is visible
      }
    );

    const currentRef = itemRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div 
      ref={itemRef}
      className={`flex items-center justify-between py-4 border-b-2 border-ui-border last:border-b-0 transition-all duration-500 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="flex items-center flex-1 pr-4">
        <div className="mr-2">
          {item.type === ItemType.VEG ? <VegIcon /> : <NonVegIcon />}
        </div>
        <h3 className="font-semibold text-text-primary">{item.name}</h3>
      </div>
      <p className="font-semibold text-text-primary whitespace-nowrap">₹{item.price.toFixed(2)}</p>
    </div>
  );
};