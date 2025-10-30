import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 border-t border-ui-border py-6 text-center text-sm text-text-secondary">
      <p>© 2025. Oriental Palace Resort. All rights reserved.</p>
      <p className="mt-1">
        Made with <span className="flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="25" height="25" aria-label="heart">
  <path d="M32 57s-1.2-.9-7.6-6.1C12.6 40.6 6 33.9 6 25.6 6 17.6 12.8 11 20.8 11c4.8 0 8.6 2.8 10.8 6.6C33.6 13.8 37.4 11 42.2 11 50.2 11 57 17.6 57 25.6c0 8.3-6.6 15-18.4 25.3C33.2 56.1 32 57 32 57z"
        fill="#FF4D6D"/>
</svg>
</span>
 by <span className="font-medium text-primary">Howdy Marketing Solutions</span>.
      </p>
    </footer>
  );
};


