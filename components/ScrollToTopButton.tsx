import React, { useState, useEffect } from 'react';

const UpArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
);

const DownArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

export const ScrollToTopButton: React.FC = () => {
  // Renamed state for clarity: true if user is scrolled down
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  const handleScroll = () => {
    // Same logic: show "up" button if scrolled > 300px
    if (window.pageYOffset > 300) {
      setIsScrolledDown(true);
    } else {
      setIsScrolledDown(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // New function to scroll to the bottom of the page
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Determine which function and label to use
  const handleClick = isScrolledDown ? scrollToTop : scrollToBottom;
  const ariaLabel = isScrolledDown ? "Scroll to top" : "Scroll to bottom";

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`
        fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full 
        bg-primary text-white 
        flex items-center justify-center shadow-lg 
        transition-all duration-300 ease-springy 
        transform hover:bg-opacity-90 hover:scale-110 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
        opacity-100 scale-100 /* This button is now always visible */
      `}
      aria-label={ariaLabel}
    >
      {/* Conditionally render the correct icon */}
      {isScrolledDown ? <UpArrowIcon /> : <DownArrowIcon />}
    </button>
  );
};