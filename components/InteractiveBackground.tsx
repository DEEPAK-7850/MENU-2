import React, { useState, useEffect, useRef } from 'react';

export const InteractiveBackground: React.FC = () => {
  // Direct mouse position, stored in a ref to avoid re-renders on every mouse move
  const mousePosition = useRef({ x: -1000, y: -1000 });
  
  // Position used for rendering, which will lag behind the mouse for a smooth effect
  const [animatedPosition, setAnimatedPosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Set an initial position in the center to avoid a flash from the corner on load
    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    mousePosition.current = { x: initialX, y: initialY };
    setAnimatedPosition({ x: initialX, y: initialY });

    let animationFrameId: number;

    // The animation loop that smoothly moves the aura
    const animate = () => {
      setAnimatedPosition(currentPos => {
        const dx = mousePosition.current.x - currentPos.x;
        const dy = mousePosition.current.y - currentPos.y;
        
        // The easing factor determines how quickly the aura catches up to the cursor.
        // A smaller value means more lag and a smoother, more "liquid" effect.
        const easingFactor = 0.08; 
        
        const newX = currentPos.x + dx * easingFactor;
        const newY = currentPos.y + dy * easingFactor;

        return { x: newX, y: newY };
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const backgroundStyle: React.CSSProperties = {
    // Using two gradients for a richer, more layered effect
    background: `
      radial-gradient(800px at ${animatedPosition.x}px ${animatedPosition.y}px, rgba(90, 20, 37, 0.15), transparent 80%),
      radial-gradient(1200px at ${animatedPosition.x}px ${animatedPosition.y}px, rgba(90, 20, 37, 0.1), transparent 80%)
    `,
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none transition-opacity duration-300"
      style={backgroundStyle}
    />
  );
};
