import React from 'react';

export const WhiskeyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>{`
      @keyframes ice-fall-and-bob {
        0% { transform: translateY(-25px) rotate(-15deg); opacity: 0; }
        20% { transform: translateY(-10px) rotate(-15deg); opacity: 1; }
        40% { transform: translateY(5px) rotate(20deg); } /* Hit liquid */
        55% { transform: translateY(-2px) rotate(-10deg); } /* Bob up */
        70% { transform: translateY(2px) rotate(5deg); } /* Settle */
        90% { transform: translateY(2px) rotate(5deg); opacity: 1; }
        100% { opacity: 0; transform: translateY(2px) rotate(5deg); }
      }
      @keyframes splash-pop {
        0%, 40%, 100% { transform: scale(0); opacity: 0; }
        45% { transform: scale(1) translateY(-3px); opacity: 0.8; }
        60% { transform: scale(1.2) translateY(-8px); opacity: 0; }
      }
      .ice-cube-falling {
        animation: ice-fall-and-bob 4s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
        transform-origin: 32px 46px;
      }
      .whiskey-splash {
        animation: splash-pop 4s ease-out infinite;
        transform-origin: 32px 35px;
        fill: #FFC107;
      }
    `}</style>
    <defs>
      <linearGradient id="whiskey-liquid-grad-v2" x1="32" y1="35" x2="32" y2="58" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFA000"/>
        <stop offset="1" stopColor="#E65100"/>
      </linearGradient>
    </defs>
    <path d="M14 26 L16 58 H48 L50 26" fill="#FFFFFF" fillOpacity="0.1"/>
    <path d="M16.5 35 L17.5 58 H46.5 L47.5 35" fill="url(#whiskey-liquid-grad-v2)"/>
    <path d="M16.5 35 C 16.5 32, 47.5 32, 47.5 35 S 16.5 38, 16.5 35 Z" fill="#FFC107" fillOpacity="0.8"/>
    
    <g className="ice-cube-falling">
      <rect x="24" y="38" width="16" height="16" rx="3" fill="#FFFFFF" fillOpacity="0.8"/>
    </g>

    <g className="whiskey-splash">
        <path d="M28 35 C 29 32, 31 32, 32 35" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M32 35 C 33 32, 35 32, 36 35" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
    </g>

    <path d="M14 26 L16 58 H48 L50 26 H14 Z" stroke="#4E342E" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
    <path d="M14 26 C 14 22, 50 22, 50 26" stroke="#4E342E" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
    <path d="M18 55 H46" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
  </svg>
);

export const RumIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>{`
      @keyframes ice-collide-1-pro {
        0%, 100% { transform: translate(0, 0) rotate(12deg); }
        50% { transform: translate(1.5px, 1px) rotate(5deg); }
      }
      @keyframes ice-collide-2-pro {
        0%, 100% { transform: translate(0, 0) rotate(-10deg); }
        50% { transform: translate(-1.5px, -1px) rotate(-15deg); }
      }
      .rum-ice-1-pro { animation: ice-collide-1-pro 3.5s ease-in-out infinite; transform-origin: 30px 39px; }
      .rum-ice-2-pro { animation: ice-collide-2-pro 3.5s ease-in-out infinite; transform-origin: 36.5px 51.5px; }
    `}</style>
    <defs>
      <linearGradient id="rum-liquid-grad-v2" x1="32" y1="28" x2="32" y2="58" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6D4C41"/>
        <stop offset="1" stopColor="#3E2723"/>
      </linearGradient>
      <linearGradient id="lime-grad-v2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#8BC34A" />
        <stop offset="100%" stopColor="#558B2F" />
      </linearGradient>
    </defs>
    <path d="M16 18 L18 58 H46 L48 18" fill="#FFFFFF" fillOpacity="0.1"/>
    <path d="M18.5 28 L19.5 58 H44.5 L45.5 28" fill="url(#rum-liquid-grad-v2)"/>
    <path d="M18.5 28 C 18.5 25, 45.5 25, 45.5 28 S 18.5 31, 18.5 28 Z" fill="#795548" fillOpacity="0.8"/>
    
    <g className="rum-ice-1-pro">
      <rect x="23" y="32" width="14" height="14" rx="3" fill="white" fillOpacity="0.7"/>
    </g>
    <g className="rum-ice-2-pro">
      <rect x="30" y="45" width="13" height="13" rx="3" fill="white" fillOpacity="0.7"/>
    </g>
    
    <path d="M16 18 L18 58 H46 L48 18 H16 Z" stroke="#4E342E" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
    <path d="M16 18 C 16 14, 48 14, 48 18" stroke="#4E342E" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
    <path d="M48 18 C 44 18, 44 26, 48 26" fill="url(#lime-grad-v2)" stroke="#33691E" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
    <path d="M20 55 H44" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4"/>
  </svg>
);


export const BeerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      {`
        @keyframes fizz-rise {
          0% { transform: translateY(0); opacity: 0.9; }
          100% { transform: translateY(-35px); opacity: 0; }
        }
        .fizz-bubble { animation: fizz-rise linear infinite; }
        .fizz-1 { animation-duration: 2s; }
        .fizz-2 { animation-duration: 2.5s; animation-delay: 0.7s; }
        .fizz-3 { animation-duration: 1.8s; animation-delay: 1.2s; }
        .fizz-4 { animation-duration: 3s; animation-delay: 0.3s; }
        .fizz-5 { animation-duration: 2.2s; animation-delay: 1.5s; }
      `}
    </style>
     <defs>
      <linearGradient id="beer-grad-new" x1="32" y1="20" x2="32" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFCA28"/>
        <stop offset="1" stopColor="#FFB300"/>
      </linearGradient>
    </defs>
    <path d="M16 60H44V20C44 17.7909 42.2091 16 40 16H20C17.7909 16 16 17.7909 16 20V60Z" stroke="#4E342E" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M44 28H50C52.2091 28 54 29.7909 54 32V48C54 50.2091 52.2091 52 50 52H44" stroke="#4E342E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <mask id="beer-mask-new">
       <path d="M16.5 20.5H43.5V59.5H16.5V20.5Z" fill="white"/>
    </mask>
     <g mask="url(#beer-mask-new)">
      <rect x="16" y="20" width="28" height="40" fill="url(#beer-grad-new)"/>
      <circle cx="24" cy="58" r="1.5" fill="white" fillOpacity="0.7" className="fizz-bubble fizz-1"/>
      <circle cx="36" cy="58" r="2" fill="white" fillOpacity="0.7" className="fizz-bubble fizz-2"/>
      <circle cx="28" cy="58" r="1" fill="white" fillOpacity="0.7" className="fizz-bubble fizz-3"/>
      <circle cx="32" cy="58" r="1.5" fill="white" fillOpacity="0.7" className="fizz-bubble fizz-4"/>
       <circle cx="38" cy="58" r="1.2" fill="white" fillOpacity="0.7" className="fizz-bubble fizz-5"/>
    </g>
    <path d="M14 12C14 7.58172 17.5817 4 22 4H42C46.4183 4 50 7.58172 50 12C50 16.4183 46.4183 20 42 20H22C17.5817 20 14 16.4183 14 12Z" fill="#FFFDE7" stroke="#4E342E" strokeWidth="2.5"/>
    <path d="M10 16C10 13.7909 11.7909 12 14 12" stroke="#4E342E" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export const VodkaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      {`
        @keyframes sparkle-flicker {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1); }
        }
        .sparkle-vodka { animation: sparkle-flicker 4s ease-in-out infinite; }
        .sparkle-1 { animation-delay: 0s; }
        .sparkle-2 { animation-delay: 1.5s; }
        .sparkle-3 { animation-delay: 2.8s; }
      `}
    </style>
     <defs>
      <radialGradient id="frost-grad" cx="0.5" cy="0.5" r="0.5">
        <stop offset="70%" stopColor="#E1F5FE" stopOpacity="0"/>
        <stop offset="95%" stopColor="#E1F5FE" stopOpacity="0.5"/>
        <stop offset="100%" stopColor="white" stopOpacity="0.7"/>
      </radialGradient>
    </defs>
    <path d="M32 34V60" stroke="#4E342E" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M22 60H42" stroke="#4E342E" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M8 8H56L38 34H26L8 8Z" stroke="#4E342E" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M8 8H56L38 34H26L8 8Z" fill="url(#frost-grad)"/>
    <path d="M26 18L44 26" stroke="#4E342E" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="28" cy="19" r="4" fill="#7CB342"/>
    <circle cx="28" cy="19" r="1.5" fill="#E53935"/>
     <g fill="white">
      <path d="M18 18L20 17L22 18L21 20L22 22L20 23L18 22L19 20L18 18Z" className="sparkle-vodka sparkle-1"/>
      <path d="M44 28L45 30L44 32L43 30Z" className="sparkle-vodka sparkle-2"/>
       <path d="M32 10L34 9L36 10L35 12L36 14L34 15L32 14L33 12Z" className="sparkle-vodka sparkle-3"/>
    </g>
  </svg>
);

export const BreezerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
     <style>
      {`
        @keyframes condensation-drip {
          0% { opacity: 0; transform: translateY(0); }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(22px); opacity: 0; }
        }
        .condensation-drop {
          animation: condensation-drip 5s cubic-bezier(0.5, 0, 0.9, 0.7) infinite;
        }
      `}
    </style>
     <defs>
      <linearGradient id="breezer-grad-new" x1="32" y1="22" x2="32" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F48FB1"/>
        <stop offset="1" stopColor="#D81B60"/>
      </linearGradient>
    </defs>
    <path d="M38 22V10C38 8.89543 37.1046 8 36 8H28C26.8954 8 26 8.89543 26 10V22" stroke="#4E342E" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M42 60H22L26 22H38L42 60Z" stroke="#4E342E" strokeWidth="2.5" strokeLinejoin="round"/>
    <g>
       <path d="M42 60H22L26 22H38L42 60Z" fill="url(#breezer-grad-new)"/>
    </g>
    <rect x="28" y="34" width="8" height="18" fill="white" fillOpacity="0.9" rx="2"/>
    <path d="M30 38H34" stroke="#D81B60" strokeWidth="2" strokeLinecap="round"/>
    <path d="M29 44H35" stroke="#D81B60" strokeWidth="2" strokeLinecap="round"/>
    <path d="M30 50H34" stroke="#D81B60" strokeWidth="2" strokeLinecap="round"/>
    <path d="M26.5 28 C 26.5 30, 24.5 30, 24.5 28 C 24.5 26, 26.5 26, 26.5 28 Z" fill="#E1F5FE" fillOpacity="0.9" className="condensation-drop"/>
  </svg>
);