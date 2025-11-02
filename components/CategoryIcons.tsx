import React from 'react';

export const AllIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

// --- New, Bespoke, Highly Recognisable, Researched Icons with Color ---

export const BeveragesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <clipPath id="beverage-glass-clip">
            <path d="M7 21H16L17.5 9H5.5L7 21Z" />
        </clipPath>
    </defs>

    {/* Liquid and Fizz, clipped to the glass shape */}
    <g clip-path="url(#beverage-glass-clip)">
        {/* Animated Liquid */}
        <rect x="5" width="13" height="12" fill="#FFB74D">
            <animate 
                attributeName="y" 
                values="21; 9" 
                dur="3s" 
                repeatCount="indefinite" 
            />
            <animate 
                attributeName="height" 
                values="0; 12" 
                dur="3s" 
                repeatCount="indefinite" 
            />
        </rect>
        
        {/* Fizz/Bubbles */}
        <circle cx="9" cy="21" r="0.7" fill="white" fill-opacity="0.8">
            <animateTransform attributeName="transform" type="translate" from="0 0" to="0 -10" dur="2s" repeatCount="indefinite" begin="0.5s"/>
            <animate attributeName="opacity" values="0; 1; 1; 0" dur="2s" repeatCount="indefinite" begin="0.5s"/>
        </circle>
        <circle cx="11.5" cy="21" r="0.5" fill="white" fill-opacity="0.9">
            <animateTransform attributeName="transform" type="translate" from="0 0" to="0 -12" dur="1.5s" repeatCount="indefinite" begin="1s"/>
            <animate attributeName="opacity" values="0; 1; 1; 0" dur="1.5s" repeatCount="indefinite" begin="1s"/>
        </circle>
        <circle cx="14" cy="21" r="0.7" fill="white" fill-opacity="0.8">
            <animateTransform attributeName="transform" type="translate" from="0 0" to="0 -11" dur="2.5s" repeatCount="indefinite" begin="0.2s"/>
            <animate attributeName="opacity" values="0; 1; 1; 0" dur="2.5s" repeatCount="indefinite" begin="0.2s"/>
        </circle>
         <circle cx="12.5" cy="21" r="0.6" fill="white" fill-opacity="0.7">
            <animateTransform attributeName="transform" type="translate" from="0 0" to="0 -9" dur="2.8s" repeatCount="indefinite" begin="1.5s"/>
            <animate attributeName="opacity" values="0; 1; 1; 0" dur="2.8s" repeatCount="indefinite" begin="1.5s"/>
        </circle>
    </g>

    {/* Glass Outline */}
    <path d="M7 21H16L17.5 9H5.5L7 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.5 9H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
</svg>
);

export const BreakfastIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Plate */}
        <path d="M22 12C22 16.4183 17.5228 20 12 20C6.47715 20 2 16.4183 2 12C2 7.58172 6.47715 4 12 4C17.5228 4 22 7.58172 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#E3F2FD"/>
        
        {/* Toast */}
        <path d="M17.5 8.5H13.5C13.2239 8.5 13 8.72386 13 9V13C13 13.2761 13.2239 13.5 13.5 13.5H17.5C17.7761 13.5 18 13.2761 18 13V9C18 8.72386 17.7761 8.5 17.5 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#FFD180"/>

        {/* Fried Egg */}
        <path d="M11.85 15.85C9.9 16.6 7.6 15.9 6.45 14.4C5.3 12.9 5.25 10.75 6.4 9.2C7.55 7.65 9.85 7.3 11.6 8.35C13.35 9.4 13.8 11.8 12.8 13.55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="white" />
        <circle cx="9" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="#FFD60A"/>
        
        {/* Steam from egg */}
        <path d="M8 7C8 6 7.5 5.5 7 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -3" dur="3s" repeatCount="indefinite" begin="0s" />
            <animate attributeName="opacity" values="1; 0" dur="3s" repeatCount="indefinite" begin="0s" />
        </path>
        <path d="M9.5 7.5C9.5 6.5 9 6 8.5 5.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -3" dur="3s" repeatCount="indefinite" begin="0.5s" />
            <animate attributeName="opacity" values="1; 0" dur="3s" repeatCount="indefinite" begin="0.5s" />
        </path>
    </svg>
);


export const EggsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Frying Pan */}
    <path d="M3 14C3 18.9706 7.02944 22 12 22C16.9706 22 21 18.9706 21 14" stroke="currentColor" strokeWidth="1.5" fill="#CFD8DC" strokeLinecap="round"/>
    <path d="M21 14H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M1 14H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>

    {/* Falling Egg Animation Group */}
    <g>
        <animateTransform 
            attributeName="transform" 
            type="translate" 
            values="0 -6; 0 0"
            dur="2.5s" 
            repeatCount="indefinite" 
            begin="0s" 
        />
        <animate 
            attributeName="opacity" 
            values="0; 1; 1; 0" 
            keyTimes="0; 0.2; 0.8; 1"
            dur="2.5s" 
            repeatCount="indefinite" 
            begin="0s" 
        />
        {/* Egg White */}
        <path d="M12 16 C 8 16, 6 14, 8 12 C 10 10, 14 10, 16 12 C 18 14, 16 16, 12 16 Z" fill="white" stroke="currentColor" strokeWidth="1" />
        {/* Yolk */}
        <circle cx="12" cy="14" r="2.5" fill="#FFD60A" />
    </g>
    
    {/* Broken Egg Shells */}
    <path d="M10 2C10 2 10.5 5 8 6C5.5 7 4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#F5EFE6"/>
    <path d="M14 2C14 2 13.5 5 16 6C18.5 7 20 4 20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#F5EFE6"/>
  </svg>
);

export const SaladPapadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bowl */}
    <path d="M3 12C3 17.5228 7.02944 21 12 21C16.9706 21 21 17.5228 21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#CFD8DC"/>
    
    {/* Salad Leaves */}
    <path d="M16 8C19 9 19 13 16 14C13 15 13 11 16 8Z" fill="#81C784" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
         <animateTransform attributeName="transform" type="rotate" from="0 16 11" to="5 16 11" dur="2s" begin="0s" values="0 16 11; 5 16 11; 0 16 11" repeatCount="indefinite" />
    </path>
    <path d="M13 10C15.5 10.5 16 13 13.5 14C11 15 11 12 13 10Z" fill="#A5D6A7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <animateTransform attributeName="transform" type="rotate" from="0 13 12" to="-5 13 12" dur="2.5s" begin="0.5s" values="0 13 12; -5 13 12; 0 13 12" repeatCount="indefinite" />
    </path>
    
    {/* Papad */}
    <path d="M11 14C6 14 5 10 8 8C11 6 12 10 11 14Z" fill="#FFECB3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8" cy="12" r="0.4" fill="currentColor"/>
    <circle cx="10" cy="10.5" r="0.4" fill="currentColor"/>
    <circle cx="8.5" cy="9.5" r="0.4" fill="currentColor"/>

    {/* Sparkle on Papad */}
    <path d="M7 8 L 7.5 7 L 8 8 L 7.5 9 Z" fill="currentColor">
         <animate attributeName="opacity" values="0; 1; 0" dur="3s" repeatCount="indefinite" begin="1s" />
         <animateTransform attributeName="transform" type="scale" from="1" to="1.3" dur="3s" begin="1s" values="1; 1.3; 1" repeatCount="indefinite" />
    </path>
  </svg>
);


export const SoupIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M43.75 25C43.75 34.33 34.33 41.67 25 41.67C15.67 41.67 6.25 34.33 6.25 25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M43.75 25H6.25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.58 41.67H35.42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.75 14.58C18.75 12.08 17.71 10.42 16.67 8.33" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <animateTransform attributeName="transform" type="translate" values="0 0; 0 -8" dur="3s" repeatCount="indefinite" begin="0s" />
      <animate attributeName="opacity" values="1; 0" dur="3s" repeatCount="indefinite" begin="0s" />
    </path>
    <path d="M25 14.58C25 12.08 23.96 10.42 22.92 8.33" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <animateTransform attributeName="transform" type="translate" values="0 0; 0 -8" dur="3s" repeatCount="indefinite" begin="0.5s" />
      <animate attributeName="opacity" values="1; 0" dur="3s" repeatCount="indefinite" begin="0.5s" />
    </path>
    <path d="M31.25 14.58C31.25 12.08 30.21 10.42 29.17 8.33" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <animateTransform attributeName="transform" type="translate" values="0 0; 0 -8" dur="3s" repeatCount="indefinite" begin="1s" />
      <animate attributeName="opacity" values="1; 0" dur="3s" repeatCount="indefinite" begin="1s" />
    </path>
    <path d="M41.67 25C41.67 20.83 34.33 18.75 25 18.75C15.67 18.75 8.33 20.83 8.33 25H41.67Z" fill="#FF8A65"/>
    <circle cx="16.67" cy="22.92" r="2.08" fill="#fff"/>
    <circle cx="22.92" cy="22.92" r="1.04" fill="#fff"/>
    <rect x="27.08" y="21.88" width="4.17" height="2.08" rx="1" fill="#fff"/>
    <rect x="33.33" y="20.83" width="2.08" height="2.08" rx="0.5" fill="#fff"/>
  </svg>
);

export const IndianStartersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Plate */}
    <path d="M5 21C5 21 8.5 22.5 12 22.5C15.5 22.5 19 21 19 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

    {/* Skewer Stick */}
    <path d="M12 22V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>

    {/* Paneer Tikka Components on Skewer */}
    {/* Bottom Paneer */}
    <rect x="9.5" y="16" width="5" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="#FFB74D"/>
    {/* Capsicum */}
    <path d="M9.5 16C9.5 14.8954 10.3954 14 11.5 14H12.5C13.6046 14 14.5 14.8954 14.5 16" stroke="currentColor" strokeWidth="1.5" fill="#81C784"/>
    {/* Middle Paneer */}
    <rect x="9.5" y="10" width="5" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="#FFB74D"/>
    {/* Onion */}
    <path d="M9.5 10C9.5 8.89543 10.3954 8 11.5 8H12.5C13.6046 8 14.5 8.89543 14.5 10" stroke="currentColor" strokeWidth="1.5" fill="#E1BEE7"/>
    {/* Top Paneer */}
    <rect x="9.5" y="4" width="5" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="#FFB74D"/>

    {/* Sizzle/Steam Animation */}
    <path d="M10 3C10 2 9.5 1.5 9 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -2" dur="2.5s" repeatCount="indefinite" begin="0s" />
        <animate attributeName="opacity" values="1; 0" dur="2.5s" repeatCount="indefinite" begin="0s" />
    </path>
    <path d="M14 3C14 2 13.5 1.5 13 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -2" dur="2.5s" repeatCount="indefinite" begin="0.8s" />
        <animate attributeName="opacity" values="1; 0" dur="2.5s" repeatCount="indefinite" begin="0.8s" />
    </path>
  </svg>
);

export const StartersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Plate */}
    <circle cx="12" cy="13" r="9" stroke="currentColor" strokeWidth="1.5" fill="#E3F2FD" />

    {/* Skewer */}
    <line x1="6" y1="10" x2="14" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="6" y="8.5" width="3" height="3" rx="1" fill="#FFB74D" stroke="currentColor" strokeWidth="1"/>
    <circle cx="12" cy="10" r="2" fill="#81C784" stroke="currentColor" strokeWidth="1"/>
    
    {/* Fried Item (like a spring roll) */}
    <rect x="9" y="14" width="8" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="#FFD180"/>
    <line x1="11" y1="15" x2="12" y2="17" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <line x1="13" y1="15" x2="14" y2="17" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    
    {/* Sparkle Animation */}
    <path d="M18 8 L 19 7 L 20 8 L 19 9 Z" fill="currentColor">
         <animate attributeName="opacity" values="0; 1; 0" dur="2s" repeatCount="indefinite" begin="0s" />
    </path>
    <path d="M6 15 L 7 14 L 8 15 L 7 16 Z" fill="currentColor">
         <animate attributeName="opacity" values="0; 1; 0" dur="2s" repeatCount="indefinite" begin="1s" />
    </path>
  </svg>
);

export const IndianMainCourseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Plate */}
    <path d="M2.5 19C2.5 19 6.5 21 12 21C17.5 21 21.5 19 21.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Curry */}
    <path d="M19 14H5C5 16.2091 8.13401 18 12 18C15.866 18 19 16.2091 19 14Z" fill="#E65100"/>
    {/* Curry Bowl */}
    <path d="M5 14C5 16.7614 8.13401 19 12 19C15.866 19 19 16.7614 19 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M5 14H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="8" cy="16" r="0.5" fill="currentColor"/>
    <circle cx="12" cy="15.5" r="0.5" fill="currentColor"/>
    <circle cx="16" cy="16" r="0.5" fill="currentColor"/>
    {/* Naan Bread */}
    <path d="M15 5C17.5 5 21 7 20 11C19 15 14 13 15 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#FFECB3"/>
    <circle cx="17" cy="8" r="0.5" fill="currentColor"/>
    <circle cx="18" cy="10.5" r="0.5" fill="currentColor"/>
    {/* Rice Bowl */}
    <path d="M4 9C4 10.6569 5.79086 12 8 12C10.2091 12 12 10.6569 12 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="#F5F5F5"/>
    <path d="M4 9C5 7.5 7 7.5 8 8.5C9 7.5 11 7.5 12 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    
    {/* Steam from Curry */}
    <path d="M10 13C10 12 9.5 11.5 9 11" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -3" dur="3s" repeatCount="indefinite" begin="0.2s" />
        <animate attributeName="opacity" values="1; 0" dur="3s" repeatCount="indefinite" begin="0.2s" />
    </path>
    <path d="M14 13C14 12 13.5 11.5 13 11" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -3" dur="3s" repeatCount="indefinite" begin="0.7s" />
        <animate attributeName="opacity" values="1; 0" dur="3s" repeatCount="indefinite" begin="0.7s" />
    </path>
  </svg>
);


export const ChefSpecialIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5"/>
      {/* Hat band color */}
      <rect x="7" y="13.5" width="10" height="2" fill="#5A1425" />
      {/* Hat outline */}
      <path d="M17 13.5C20 13.5 20.5 9.5 17.5 8.5C16.5 6.5 14.5 6 12 6C9.5 6 7.5 6.5 6.5 8.5C3.5 9.5 4 13.5 7 13.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
      <path d="M7 13.5V17.5H17V13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="7" y1="15.5" x2="17" y2="15.5" stroke="currentColor" strokeWidth="1.5"/>
      {/* Star */}
      <path d="M12 12.5L12.6 14L14.2 14.2L13 15.2L13.3 16.7L12 15.8L10.7 16.7L11 15.2L9.8 14.2L11.4 14L12 12.5Z" fill="#FFD60A" stroke="#FFD60A" strokeLinejoin="round">
          <animateTransform attributeName="transform" type="scale" from="1" to="1.2" dur="1.5s" begin="0s" values="1; 1.2; 1" repeatCount="indefinite" additive="sum" />
      </path>
    </svg>
  );

export const RajasthaniMainCourseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Thali Plate */}
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="#CFD8DC"/>
    
    {/* Katori 1 (top-left) */}
    <circle cx="7.5" cy="7.5" r="3" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="7.5" cy="7.5" r="2.5" fill="#FFC107"/>

    {/* Katori 2 (top-right) */}
    <circle cx="16.5" cy="7.5" r="3" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="16.5" cy="7.5" r="2.5" fill="#8D6E63"/>

    {/* Katori 3 (bottom-left) */}
    <circle cx="7.5" cy="16.5" r="3" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="7.5" cy="16.5" r="2.5" fill="#A5D6A7"/>

    {/* Bajra Roti (bottom-right) */}
    <circle cx="16.5" cy="16.5" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="#FFECB3"/>
    <circle cx="15.5" cy="15.5" r="0.4" fill="currentColor" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="17.5" cy="17.5" r="0.4" fill="currentColor" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="16.5" cy="16.5" r="0.4" fill="currentColor" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="17.5" cy="15.5" r="0.4" fill="currentColor" stroke="currentColor" strokeWidth="0.5"/>

     {/* Shine animation on katori */}
    <path d="M6 6 L 9 9" stroke="white" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.7">
        <animate attributeName="d" values="M6 6 L 9 9; M6 6 L 6 6" dur="3s" repeatCount="indefinite" begin="0s" />
        <animate attributeName="stroke-opacity" values="0.7; 0; 0" dur="3s" repeatCount="indefinite" begin="0s" />
    </path>
  </svg>
);

export const RaitaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bowl */}
    <path d="M4.5 15.5C4.5 18.5376 7.81371 21 12 21C16.1863 21 19.5 18.5376 19.5 15.5H4.5Z" fill="#CFD8DC" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 21H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Raita */}
    <path d="M4.5 15.5C5.76051 14.0539 8.44198 13 12 13C15.558 13 18.2395 14.0539 19.5 15.5H4.5Z" fill="white" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

    {/* Animated Spoon */}
    <path d="M18.5 9L15 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <animateTransform 
            attributeName="transform" 
            type="translate" 
            values="0 0; -1 1; 0 0" 
            dur="3s" 
            repeatCount="indefinite" 
        />
    </path>
    
    {/* Leaves */}
    <path d="M10 13C10.2761 12.4477 11.118 12.4477 11.3942 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#81C784"/>
    <path d="M12.5 13C12.7761 12.4477 13.618 12.4477 13.8942 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#81C784">
        <animateTransform attributeName="transform" type="rotate" from="0 13.2 12.5" to="-10 13.2 12.5" dur="2.5s" begin="0s" values="0 13.2 12.5; -10 13.2 12.5; 0 13.2 12.5" repeatCount="indefinite" />
    </path>
    
    {/* Animated Dots */}
    <g>
        <animateTransform 
            attributeName="transform" 
            type="translate" 
            values="0 0; 0.5 -0.5; 0 0" 
            dur="4s" 
            repeatCount="indefinite" 
            begin="0s"
        />
        <circle cx="9" cy="15" r="0.5" fill="#FF8A65"/>
        <circle cx="13" cy="15" r="0.5" fill="#FF8A65"/>
    </g>
    <g>
        <animateTransform 
            attributeName="transform" 
            type="translate" 
            values="0 0; -0.5 0.5; 0 0" 
            dur="4s" 
            repeatCount="indefinite" 
            begin="2s"
        />
        <circle cx="11" cy="14.5" r="0.5" fill="#FF8A65"/>
        <circle cx="15" cy="14.5" r="0.5" fill="#FF8A65"/>
        <circle cx="12" cy="16" r="0.5" fill="#FF8A65"/>
    </g>
  </svg>
);

export const IndianBreadsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Plate */}
    <path d="M3 19C3 19 7 21 12 21C17 21 21 19 21 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Bread 3 (Bottom) */}
    <ellipse cx="14.5" cy="16.5" rx="7.5" ry="3" stroke="currentColor" strokeWidth="1.5" fill="#FFD180"/>
    
    {/* Bread 2 (Middle) */}
    <ellipse cx="13" cy="13.5" rx="8" ry="3.5" stroke="currentColor" strokeWidth="1.5" fill="#FFD180"/>
    
    {/* Bread 1 (Top) */}
    <ellipse cx="12" cy="10" rx="9" ry="4" stroke="currentColor" strokeWidth="1.5" fill="#FFD180"/>
    
    {/* Markings on Top Bread */}
    <path d="M8 9.5C8.5 9 9 9.5 9.5 9.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M12 8.5C12.5 8 13 8.5 13.5 8.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M16 9.5C16.5 9 17 9.5 17.5 9.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M10 11C10.5 10.5 11 11 11.5 11" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M14 11C14.5 10.5 15 11 15.5 11" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M6.5 11C7 10.5 7.5 11 8 11" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    
    {/* Steam animation */}
    <path d="M10 5.5C10 4.5 9.5 4 9 3.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -2" dur="3s" repeatCount="indefinite" begin="0.1s" />
        <animate attributeName="opacity" values="1; 0" dur="3s" repeatCount="indefinite" begin="0.1s" />
    </path>
    <path d="M14 5.5C14 4.5 13.5 4 13 3.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -2" dur="3s" repeatCount="indefinite" begin="0.6s" />
        <animate attributeName="opacity" values="1; 0" dur="3s" repeatCount="indefinite" begin="0.6s" />
    </path>
  </svg>
);

export const RiceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Steam */}
    <path d="M10.5 8C10.5 6.5 9.5 5.5 9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -3" dur="3s" repeatCount="indefinite" begin="0s" />
        <animate attributeName="opacity" values="1; 0" dur="3s" repeatCount="indefinite" begin="0s" />
    </path>
    <path d="M12.5 8C12.5 6.5 11.5 5.5 11 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -3" dur="3s" repeatCount="indefinite" begin="0.5s" />
        <animate attributeName="opacity" values="1; 0" dur="3s" repeatCount="indefinite" begin="0.5s" />
    </path>
    <path d="M14.5 8C14.5 6.5 13.5 5.5 13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -3" dur="3s" repeatCount="indefinite" begin="1s" />
        <animate attributeName="opacity" values="1; 0" dur="3s" repeatCount="indefinite" begin="1s" />
    </path>
    
    {/* Bowl */}
    <path d="M4.5 15C4.5 18.5 7.582 20 12 20C16.418 20 19.5 18.5 19.5 15H4.5Z" fill="#CFD8DC" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 20H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Rice */}
    <path d="M4.5 15C6.5 13 9 12.5 12 12.5C15 12.5 17.5 13 19.5 15H4.5Z" fill="white" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Yellow grains */}
    <circle cx="9" cy="14" r="0.5" fill="#FFD60A"/>
    <circle cx="12" cy="13.5" r="0.5" fill="#FFD60A"/>
    <circle cx="15" cy="14" r="0.5" fill="#FFD60A"/>
  </svg>
);

export const DessertsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="ice-cream-body">
      {/* Cone */}
      <path d="M12 22L16 12H8L12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#FBC02D"/>
      {/* Cone texture */}
      <path d="M9.5 15.5L12 18L14.5 15.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 13.5L14 13.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Ice cream scoop */}
      <path d="M16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12H16Z" stroke="currentColor" strokeWidth="1.5" fill="#F06292"/>
    </g>
    <g id="cherry-on-top">
      {/* Cherry on top */}
      <path d="M12 8C12.5 6 14 5 15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="15.5" cy="4.5" r="1.5" fill="#E53935" stroke="currentColor" strokeWidth="1.5"/>
    </g>
  </svg>
);
 
 