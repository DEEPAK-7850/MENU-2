import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { FilterButtons } from './components/FilterButtons';
import { MenuList } from './components/MenuList';
import { MENU_DATA, CATEGORY_ORDER } from './constants';
import { ItemType, FilterType, CategoryFilterType, MenuItem, MenuCategory } from './types';
import { CategoryNavigation } from './components/CategoryNavigation';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { InteractiveBackground } from './components/InteractiveBackground';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [activeCategory, setActiveCategory] = useState<CategoryFilterType>('all');
  const [expandedCategories, setExpandedCategories] = useState<Set<MenuCategory>>(
    new Set(CATEGORY_ORDER.length > 0 ? [CATEGORY_ORDER[0]] : [])
  );

  const handleToggleCategory = (category: MenuCategory) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  const handleCategorySelect = (category: CategoryFilterType) => {
    setActiveCategory(category);
    if (category !== 'all') {
      // Automatically expand the selected category
      setExpandedCategories(prev => new Set(prev).add(category));
    }
  };

  const filteredAndGroupedMenuItems = useMemo(() => {
    const filtered = MENU_DATA.filter(item => {
      const matchesFilter =
        activeFilter === 'all' || item.type === activeFilter;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });

    // Group by category
    const grouped = filtered.reduce((acc, item) => {
      const category = item.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {} as { [key in MenuCategory]?: MenuItem[] });

    // If a specific category is selected, only return that one
    if (activeCategory !== 'all') {
      const singleCategoryGroup: { [key in MenuCategory]?: MenuItem[] } = {};
      if (grouped[activeCategory]) {
        singleCategoryGroup[activeCategory] = grouped[activeCategory];
      }
      return singleCategoryGroup;
    }

    return grouped;
  }, [searchQuery, activeFilter, activeCategory]);


  return (
    <div className="min-h-screen w-full text-text-primary relative z-0">
      <InteractiveBackground />
      <main className="container mx-auto px-4 py-8 relative z-10">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <FilterButtons activeFilter={activeFilter} setFilter={setActiveFilter} />
        <CategoryNavigation 
          activeCategory={activeCategory} 
          setCategory={handleCategorySelect} 
          categories={CATEGORY_ORDER} 
        />
        <MenuList 
          groupedItems={filteredAndGroupedMenuItems}
          expandedCategories={expandedCategories}
          onToggleCategory={handleToggleCategory}
        />
      </main>
      <ScrollToTopButton />
    </div>
  );
}

export default App;