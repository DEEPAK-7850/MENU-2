import React from 'react';

export const AllIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

// --- New, Bespoke, Highly Recognisable, Researched Icons with Color ---

export const BeveragesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 21H16L17.5 9H5.5L7 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.5 9H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 5L12 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 6L20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 9C9.5 9 8.25 7 9.5 5.5C10.75 4 12.5 4.5 13.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BreakfastIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.5 13.5C8.5 13.5 10 15 12 14C14 13 15.5 14.5 15.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="10" cy="9.5" r="1.5" fill="#C6A875"/>
        <circle cx="10" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="9.5" r="1.5" fill="#C6A875"/>
        <circle cx="14" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);


export const EggsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 13C22 17.9706 17.5228 22 12 22C6.47715 22 2 17.9706 2 13C2 8.02944 6.47715 4 12 4C17.5228 4 22 8.02944 22 13Z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="13" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="13" r="3" fill="#FFD60A"/>
        <path d="M12 4V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 6V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 6V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

export const SaladPapadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="10" cy="10" r="1" fill="#4CAF50"/>
        <circle cx="14" cy="10" r="1" fill="#F44336"/>
        <circle cx="12" cy="14" r="1" fill="#FF9800"/>
        <path d="M12 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 12L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M2 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);


export const SoupVegIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 11C4 7.68629 6.68629 5 10 5H14C17.3137 5 20 7.68629 20 11V12H4V11Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 12H20V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V12Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M10 3V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 3V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10.5 15.5C10.5 15.5 11 14 12 15C13 16 13.5 14.5 13.5 14.5" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const SoupNonVegIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 11C4 7.68629 6.68629 5 10 5H14C17.3137 5 20 7.68629 20 11V12H4V11Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 12H20V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V12Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M10 3V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 3V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M13.5 16L10 12.5L10 9.5C10 8.94772 10.4477 8.5 11 8.5C11.5523 8.5 12 8.94772 12 9.5L12 12.5L13.5 14" fill="#D2B48C" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IndianStartersVegIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="4" y1="20" x2="20" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="5" y="12" width="6" height="6" rx="1" fill="#FF9800"/>
    <rect x="5" y="12" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="13" y="4" width="6" height="6" rx="1" fill="#4CAF50"/>
    <rect x="13" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const IndianStartersNonVegIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.284 3.71607C17.4068 5.47034 18.5 9 18.5 12.5C18.5 19 11.5 21 6.5 16C1.5 11 5.5 5 11.1551 4.2001C12.026 -1.93323 14.284 3.71607 14.284 3.71607Z" fill="#E57373" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="11.5" cy="8.5" r="1.5" fill="white" stroke="currentColor"/>
    <path d="M16 15L18 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M13 17L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);


export const StartersVegIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10L12 3L20 10L12 21L4 10Z" fill="#F0E68C" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M12 21V12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

export const StartersNonVegIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="13" r="5" fill="#E57373" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 8V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 2H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const IndianMainCourseVegIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V11Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" fill="#FF9800" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const IndianMainCourseNonVegIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V11Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" fill="#E57373" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M13 14L10 11L10 9C10 8.44772 10.4477 8 11 8C11.5523 8 12 8.44772 12 9L12 11L13 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChefSpecialVegIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 17H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6 17V14C6 14 6.5 12 9 12C11.5 12 12.5 14 12.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 17V14C18 14 17.5 12 15 12C12.5 12 11.5 14 11.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12V3M12 3L15 6M12 3L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.5 14C12.5 14 13 15 12 16C11 17 11.5 14 11.5 14" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const ChefSpecialNonVegIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 17H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6 17V14C6 14 6.5 12 9 12C11.5 12 12.5 14 12.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 17V14C18 14 17.5 12 15 12C12.5 12 11.5 14 11.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12V3M12 3L15 6M12 3L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.2 14.5C14.7 15 15 16 14 17C13 18 12 16.5 12 15C12 13.5 12.5 13 13.2 12.5" fill="#E57373" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const RajasthaniMainCourseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="7.5" cy="7.5" r="1.5" fill="#FFC107"/>
    <circle cx="16.5" cy="7.5" r="1.5" fill="#4CAF50"/>
    <circle cx="7.5" cy="16.5" r="1.5" fill="#F44336"/>
    <circle cx="16.5" cy="16.5" r="1.5" fill="#9C27B0"/>
  </svg>
);

export const RaitaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 11C4 7.68629 6.68629 5 10 5H14C17.3137 5 20 7.68629 20 11V12H4V11Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 12H20V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V12Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 15C8.5 14 9.5 14 10 15C10.5 16 11.5 16 12 15C12.5 14 13.5 14 14 15C14.5 16 15.5 16 16 15" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const IndianBreadsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 18.5V10.7071C3 10.074 3.26339 9.46591 3.73223 9L9 3.73223C9.53409 3.26339 10.2659 3 11 3H13C13.7341 3 14.4659 3.26339 15 3.73223L20.2678 9C20.7366 9.46591 21 10.074 21 10.7071V18.5C21 19.8807 19.8807 21 18.5 21H5.5C4.11929 21 3 19.8807 3 18.5Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 13C9 13 10 12 12 12C14 12 15 13 15 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="9" cy="9" r="0.5" fill="currentColor"/>
    <circle cx="15" cy="9" r="0.5" fill="currentColor"/>
  </svg>
);

export const RiceVegIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 11C4 7.68629 6.68629 5 10 5H14C17.3137 5 20 7.68629 20 11V12H4V11Z" fill="#F5F5F5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 12H20V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V12Z" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="10" cy="15" r="1" fill="#4CAF50"/>
    <circle cx="14" cy="15" r="1" fill="#FF9800"/>
  </svg>
);

export const RiceNonVegIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 11C4 7.68629 6.68629 5 10 5H14C17.3137 5 20 7.68629 20 11V12H4V11Z" fill="#F5F5F5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 12H20V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V12Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M14 14C14 14 13 16 11 16C9 16 8 14 8 14" stroke="#A1887F" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 16C16 14.8954 15.1046 14 14 14H10C8.89543 14 8 14.8954 8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const DessertsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 16H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="9" cy="12" r="2" fill="#8D6E63" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="15" cy="12" r="2" fill="#8D6E63" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 5C12 5 13 2 15 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
