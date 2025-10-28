import React, { useState, useEffect } from 'react';

export const InteractiveBackground: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const backgroundStyle = {
    background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(90, 20, 37, 0.15), transparent 80%)`,
  };

  return (
    <div
      className="fixed inset-0 -z-10 transition-all duration-300 pointer-events-none"
      style={backgroundStyle}
    />
  );
};
