import React from 'react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <header className="text-center mb-8 sm:mb-12">
     <h1 className="text-4xl font-bold text-center text-text-primary mb-2">MENU</h1>
     <p className="text-center text-lg text-text-secondary mb-6">EXPERIENCE CULINARY ELEGANCE</p>
      
      <div className="relative max-w-2xl mx-auto">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search for your favorite dish..."
          className="w-full pl-12 pr-4 py-3 bg-white border-2 border-ui-border rounded-full text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
        />
      </div>
    </header>
  );
};