import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { FilterButtons } from './components/FilterButtons';
import { CategoryNavigation } from './components/CategoryNavigation';
import { MenuList } from './components/MenuList';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { InteractiveBackground } from './components/InteractiveBackground';
import { MENU_DATA, CATEGORY_ORDER } from './constants';
import { MenuItem, FilterType, CategoryFilterType, MenuCategory, ItemType } from './types';
import { Logo } from './components/Logo';
import { Footer } from './components/Footer';
import Timings from './components/Timings';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [itemTypeFilter, setItemTypeFilter] = useState<FilterType>('all');
  // This state now tracks the visually active category for scroll-spy and navigation, it does not filter the list.
  const [activeCategory, setActiveCategory] = useState<CategoryFilterType>(CATEGORY_ORDER[0]);
  
  // All categories are expanded by default to prevent layout shifts during scroll. User can toggle manually.
  const [expandedCategories, setExpandedCategories] = useState<Set<MenuCategory>>(new Set(CATEGORY_ORDER));
  
  const [isScrolling, setIsScrolling] = useState(false);
  
  const sectionRefs = useRef<Map<MenuCategory, HTMLElement | null>>(new Map());
  const isProgrammaticScroll = useRef(false);
  const programmaticScrollTimeout = useRef<number | null>(null);

  // Effect to handle visual feedback on scroll
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
  
  // Effect to reset programmatic scroll flag on user interaction
  useEffect(() => {
    const handleManualScroll = () => {
      if (programmaticScrollTimeout.current) {
        clearTimeout(programmaticScrollTimeout.current);
      }
      isProgrammaticScroll.current = false;
    };
    window.addEventListener('wheel', handleManualScroll, { passive: true });
    window.addEventListener('touchstart', handleManualScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleManualScroll);
      window.removeEventListener('touchstart', handleManualScroll);
    };
  }, []);

  const alwaysVisibleCategories = useMemo(() => [
    MenuCategory.BEVERAGES,
    MenuCategory.INDIAN_BREADS,
    MenuCategory.DESSERTS,
  ], []);
  
  const filteredItems = useMemo(() => {
    return MENU_DATA.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase());
        if (!matchesSearch) return false;

        if (itemTypeFilter === 'all') return true;

        if (itemTypeFilter === ItemType.NON_VEG) {
            return item.type === ItemType.NON_VEG || alwaysVisibleCategories.includes(item.category);
        }
        
        // For VEG filter
        return item.type === ItemType.VEG;
    });
  }, [searchQuery, itemTypeFilter, alwaysVisibleCategories]);
  
  const availableCategories = useMemo(() => {
    const categoriesInFilteredItems = new Set(
        MENU_DATA
        .filter(item => {
            if (itemTypeFilter === 'all') return true;
            if (itemTypeFilter === ItemType.NON_VEG) {
                return item.type === ItemType.NON_VEG || alwaysVisibleCategories.includes(item.category);
            }
            // For VEG filter
            return item.type === ItemType.VEG;
        })
        .map(item => item.category)
    );
    return CATEGORY_ORDER.filter(category => categoriesInFilteredItems.has(category));
  }, [itemTypeFilter, alwaysVisibleCategories]);

  const groupedItems = useMemo(() => {
    const grouped = filteredItems.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category]!.push(item);
      return acc;
    }, {} as { [key in MenuCategory]?: MenuItem[] });

    for (const category in grouped) {
      if (Object.prototype.hasOwnProperty.call(grouped, category)) {
        grouped[category as MenuCategory]?.sort((a, b) => {
          if (a.type === ItemType.VEG && b.type === ItemType.NON_VEG) return -1;
          if (a.type === ItemType.NON_VEG && b.type === ItemType.VEG) return 1;
          return 0;
        });
      }
    }
    
    return grouped;
  }, [filteredItems]);
  
  // New Scroll-spy logic using a throttled scroll listener for accuracy.
  useEffect(() => {
    const handleScroll = () => {
        if (isProgrammaticScroll.current) return;
        
        const stickyHeader = document.querySelector('.sticky');
        const headerHeight = stickyHeader ? stickyHeader.clientHeight : 120;
        const offset = headerHeight + 24; // 24px padding below header

        let newActiveCategory: CategoryFilterType = availableCategories[0] || 'all';

        // Find the last category whose top is above the offset line
        for (const category of availableCategories) {
            const element = sectionRefs.current.get(category);
            if (element && element.getBoundingClientRect().top < offset) {
                newActiveCategory = category;
            }
        }

        setActiveCategory(prevActive => prevActive === newActiveCategory ? prevActive : newActiveCategory);
    };

    // Throttle the scroll event to improve performance
    let scrollTimeout: number;
    const throttledScrollHandler = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = window.setTimeout(handleScroll, 50);
    };

    window.addEventListener('scroll', throttledScrollHandler);
    return () => {
        window.removeEventListener('scroll', throttledScrollHandler);
        clearTimeout(scrollTimeout);
    };
  }, [availableCategories]); // Rerun when available categories change
  
  const handleToggleCategory = (category: MenuCategory) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) newSet.delete(category);
      else newSet.add(category);
      return newSet;
    });
  };
  
  const handleCategorySelect = (category: CategoryFilterType) => {
    isProgrammaticScroll.current = true;
    setActiveCategory(category);
    
    const element = category !== 'all' ? sectionRefs.current.get(category as MenuCategory) : null;
    
    if (element) {
      const stickyHeader = document.querySelector('.sticky');
      const offset = stickyHeader ? stickyHeader.clientHeight + 20 : 120;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    } else if (category === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (programmaticScrollTimeout.current) clearTimeout(programmaticScrollTimeout.current);
    programmaticScrollTimeout.current = window.setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 1000);
  };
  
  const registerSectionRef = (category: MenuCategory, element: HTMLElement | null) => {
    if (element) sectionRefs.current.set(category, element);
    else sectionRefs.current.delete(category);
  };

  return (
    <>
      <InteractiveBackground />
      <div className="min-h-screen">
      <div className="flex items-center justify-center space-x-8 bg-white rounded-lg mb-4">
       <Logo/>
      </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          <FilterButtons activeFilter={itemTypeFilter} setFilter={setItemTypeFilter} />
          
          <div className={`sticky bg-white top-0 z-10 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 shadow-sm py-4 transition-opacity duration-300 rounded-lg`}>
            <CategoryNavigation 
              activeCategory={activeCategory} 
              setCategory={handleCategorySelect}
              categories={availableCategories}
            />
          </div>

          <main className="mt-8">
            <MenuList 
              groupedItems={groupedItems} 
              expandedCategories={expandedCategories}
              onToggleCategory={handleToggleCategory}
              onSectionRef={registerSectionRef}
            />
          </main>
          <Timings/>
          <Footer/>
        </div>
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default App;
