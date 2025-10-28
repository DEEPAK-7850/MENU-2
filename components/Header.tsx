import React from 'react';
import { Logo } from './Logo';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
    </svg>
);

export const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="mb-8 flex flex-col items-center">
      <div className="flex items-center justify-center space-x-8 mb-6">
       <Logo/>
      </div>
      <h1 className="text-4xl font-bold text-center text-text-primary mb-2">Digital Menu</h1>
      <p className="text-center text-lg text-text-secondary mb-6">Experience the taste of tomorrow</p>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="text-text-secondary">
                <SearchIcon />
            </span>
        </div>
        <input
          type="text"
          placeholder="Search for a dish..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-ui-bg text-text-primary rounded-xl border border-ui-border focus:ring-2 focus:ring-primary transition-shadow duration-200 placeholder-text-secondary shadow-sm"
        />
      </div>
    </header>
  );
};