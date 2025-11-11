import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { BarCategoryNavigation } from './components/BarCategoryNavigation';
import { ScrollToTopButton } from '../components/ScrollToTopButton';
import { InteractiveBackground } from './components/InteractiveBackground';
import { BAR_MENU_DATA, BAR_CATEGORY_ORDER } from './components/constants';
import { BarMenuCategory } from './components/types';
import { Logo } from '@/components/Logo';
import { Footer } from '@/components/Footer';

const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 text-text-secondary transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const BarMenu: React.FC = () => {
  const data = BAR_MENU_DATA;

  // ✅ Prevent crash
  if (!data || !Array.isArray(data)) {
    return <p className="text-center mt-20 text-black">Loading menu...</p>;
  }

  const dataMap = new Map(data.map(cat => [cat.category, cat]));

  const [activeBarCategory, setActiveBarCategory] = useState<BarMenuCategory>(BAR_CATEGORY_ORDER[0]);
  const [expandedBarCategories, setExpandedBarCategories] = useState<Set<BarMenuCategory>>(new Set(BAR_CATEGORY_ORDER));
  const barSectionRefs = useRef<Map<BarMenuCategory, HTMLElement | null>>(new Map());

  const [isScrolling, setIsScrolling] = useState(false);
  const isProgrammaticScroll = useRef(false);
  const programmaticScrollTimeout = useRef<number | null>(null);

  const handleToggleBarCategory = (category: BarMenuCategory) => {
    setExpandedBarCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) newSet.delete(category);
      else newSet.add(category);
      return newSet;
    });
  };

  const handleBarCategorySelect = (category: BarMenuCategory) => {
    isProgrammaticScroll.current = true;
    setActiveBarCategory(category);

    const element = barSectionRefs.current.get(category);

    if (element) {
      const stickyHeader = document.querySelector('.sticky');
      const offset = stickyHeader ? stickyHeader.clientHeight + 20 : 120;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }

    if (programmaticScrollTimeout.current) clearTimeout(programmaticScrollTimeout.current);
    programmaticScrollTimeout.current = window.setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 1000);
  };

  const registerBarSectionRef = (category: BarMenuCategory, element: HTMLElement | null) => {
    if (element) barSectionRefs.current.set(category, element);
    else barSectionRefs.current.delete(category);
  };

  return (
    <>
      <InteractiveBackground />
      <div className="min-h-screen">
        <div className="flex items-center justify-center space-x-8 bg-white rounded-lg mb-4">
          <Logo />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Header />

          <div className="sticky top-0 z-10 bg-white rounded-lg shadow-sm py-4 px-4 sm:px-6 lg:px-8 transition-opacity duration-300">
            <BarCategoryNavigation
              activeCategory={activeBarCategory}
              setCategory={handleBarCategorySelect}
              categories={BAR_CATEGORY_ORDER}
            />
          </div>

          <main className="mt-8">
            <div className="bg-white border border-ui-border rounded-2xl p-2 sm:p-4 shadow-sm animate-fade-in-up">
              {BAR_CATEGORY_ORDER.map((category, index) => {
                const categoryData = dataMap.get(category);
                if (!categoryData) return null;

                const isExpanded = expandedBarCategories.has(category);
                const Icon = categoryData.icon;

                return (
                  <div
                    key={category}
                    ref={(el) => registerBarSectionRef(category, el)}
                    className={index !== BAR_CATEGORY_ORDER.length - 1 ? 'border-b border-ui-border' : ''}
                  >
                    <button
                      onClick={() => handleToggleBarCategory(category)}
                      className="w-full flex justify-between items-center py-4 px-2 focus:outline-none"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-center">
                        <Icon className="w-8 h-8 mr-3 text-primary" />
                        <h2 className="text-xl font-bold text-text-primary">{category}</h2>
                      </div>
                      <ChevronIcon isExpanded={isExpanded} />
                    </button>

                    <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        <div className="pb-4 pt-2 px-2">
                          
                          {/* Price Columns */}
                          {categoryData.columns.length > 0 && (
                            <div className="flex items-center justify-between font-semibold text-text-secondary mb-2 text-sm sm:text-base">
                              <div className="flex-1 pr-4">Item</div>
                              <div className="flex w-1/2 sm:w-1/3 justify-end">
                                {categoryData.columns.map(col => (
                                  <div key={col} className="w-20 text-right">{col}</div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Items */}
                          <div className="divide-y divide-ui-border">
                            {categoryData.items.map((item, i) => (
                              <div
                                key={i}
                                className={`flex items-center justify-between py-4 border-b border-ui-border last:border-b-0 transition-all duration-500 ease-out transform ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                              >
                                <h3 className="font-medium text-sm text-text-primary flex-1 pr-4">
                                  {item.name}
                                </h3>

                                <div className="flex w-1/2 sm:w-1/3 justify-end">
                                  {item.prices.map((price, j) => (
                                    <div key={j} className="w-20 text-right font-light text-sm text-gray-600">
                                      {price ? `₹${price}` : '-'}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="text-center py-6 px-2 text-sm text-text-secondary space-y-1">
                <p>Outside Drinks are not allowed*</p>
                <p>Alcohol will not be served to guest below the age of 21</p>
              </div>
            </div>

            <Footer />
          </main>
        </div>

        <ScrollToTopButton />
      </div>
    </>
  );
};

export default BarMenu;
