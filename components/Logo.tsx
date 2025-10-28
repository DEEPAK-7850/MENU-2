import React from 'react';
import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png';


export const Logo: React.FC = () => {

  const settledClasses = "h-[8rem] rounded-lg w-auto"; // Example: sets height to 2.5rem

  return (
    <>
      {/* Light Mode Image */}
      <img 
        src={logo} 
        alt="Logo" 
        className={`${settledClasses} `} 
      />
      
      {/* Dark Mode Image */}
      <img 
        src={logo2} 
        alt="Logo" 
        className={`${settledClasses} `} 
      />
    </>
  );
};