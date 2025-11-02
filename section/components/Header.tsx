import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center py-8 sm:py-12">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-primary mb-2 tracking-tight">
        Oriental Palace
      </h1>
      <p className="text-lg text-text-secondary max-w-2xl mx-auto">
        Explore our exquisite bar menu, a symphony of flavors crafted with passion.
      </p>
    </header>
  );
};