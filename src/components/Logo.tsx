import React from 'react';

interface LogoProps {
  className?: string;
  lightMode?: boolean;
}

export default function Logo({ className = '', lightMode = false }: LogoProps) {
  return (
    <div className={`inline-flex items-center shrink-0 ${className}`}>
      <img
        src="/logo.png"
        alt="Carpet Cleaning Brisbane"
        className={`h-14 w-auto transition-transform duration-300 group-hover:scale-105 ${
          lightMode ? 'brightness-0 invert' : ''
        }`}
      />
    </div>
  );
}
