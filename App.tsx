import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { FilterButtons } from './components/FilterButtons';
import { CategoryNavigation } from './components/CategoryNavigation';
import { MenuList } from './components/MenuList';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { InteractiveBackground } from './components/InteractiveBackground';
import { MENU_DATA, CATEGORY_ORDER } from './constants';
import { MenuItem, FilterType, CategoryFilterType, MenuCategory } from './types';
import { Logo } from './components/Logo';


const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [itemTypeFilter, setItemTypeFilter] = useState<FilterType>('all');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilterType>('all');
  const [expandedCategories, setExpandedCategories] = useState<Set<MenuCategory>>(new Set());
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: number;
    const handleScroll = () => {
      setIsScrolling(true);
      window.clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.clearTimeout(scrollTimeout);
    };
  }, []);

  const filteredItems = useMemo(() => {
    return MENU_DATA.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesItemType = itemTypeFilter === 'all' || item.type === itemTypeFilter;
      const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
      return matchesSearch && matchesItemType && matchesCategory;
    });
  }, [searchQuery, itemTypeFilter, categoryFilter]);
  
  const availableCategories = useMemo(() => {
    const categoriesInFilteredItems = new Set(
        MENU_DATA
          .filter(item => itemTypeFilter === 'all' || item.type === itemTypeFilter)
          .map(item => item.category)
    );
    return CATEGORY_ORDER.filter(category => categoriesInFilteredItems.has(category));
  }, [itemTypeFilter]);

  const groupedItems = useMemo(() => {
    return filteredItems.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category]!.push(item);
      return acc;
    }, {} as { [key in MenuCategory]?: MenuItem[] });
  }, [filteredItems]);

  useEffect(() => {
    if (categoryFilter === 'all') {
      setExpandedCategories(new Set(availableCategories.slice(0, 1))); // Only expand the first one by default
    } else {
      setExpandedCategories(new Set([categoryFilter]));
    }
  }, [categoryFilter, availableCategories]);
  
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
    setCategoryFilter(category);
    // When a category is selected, we want to expand it in the list.
    if(category !== 'all') {
      setExpandedCategories(new Set([category]));
    }
  };


  return (
    <>
      <InteractiveBackground />
      <div className="min-h-screen">
      <div className="flex items-center justify-center space-x-8 bg-white rounded-lg mb-4">
       <Logo/>
      </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* --- NON-STICKY HEADER --- */}
          <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          <FilterButtons activeFilter={itemTypeFilter} setFilter={setItemTypeFilter} />
          
          {/* --- STICKY CATEGORY NAVIGATION --- */}
          <div className={`sticky bg-white top-0 z-10 rounded-lg sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-4 transition-opacity duration-300`}>
            <CategoryNavigation 
              activeCategory={categoryFilter} 
              setCategory={handleCategorySelect}
              categories={availableCategories}
            />
          </div>

          <main className="mt-8">
            <MenuList 
              groupedItems={groupedItems} 
              expandedCategories={expandedCategories}
              onToggleCategory={handleToggleCategory}
            />
          </main>
        </div>
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default App;