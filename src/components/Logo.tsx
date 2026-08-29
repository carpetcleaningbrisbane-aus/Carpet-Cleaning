import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  lightMode?: boolean;
}

export default function Logo({ className = '', iconOnly = false, lightMode = false }: LogoProps) {
  const primaryColor = lightMode ? '#ffffff' : '#001b31';
  const tealAccent = lightMode ? '#b4ebfd' : '#2d6675';
  const goldAccent = '#D5A85A';

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Aesthetic SVG Emblem Logo */}
      <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Rounded Shield Background */}
          <rect width="100" height="100" rx="28" fill={primaryColor} />
          
          {/* Water Wave Steam Arcs */}
          <path
            d="M25 65 C40 55, 60 75, 75 65"
            stroke={tealAccent}
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M30 45 C45 35, 55 55, 70 45"
            stroke={tealAccent}
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.5"
          />

          {/* Elegant Monogram 'C' */}
          <text
            x="50%"
            y="56%"
            dominantBaseline="central"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="46"
            fontWeight="bold"
            fontFamily="Playfair Display, Georgia, serif"
          >
            C
          </text>

          {/* Sparkle Clean Indicator */}
          <path
            d="M72 26 L75 32 L81 35 L75 38 L72 44 L69 38 L63 35 L69 32 Z"
            fill={goldAccent}
          />
        </svg>
      </div>

      {!iconOnly && (
        <span
          className={`font-display font-bold text-2xl tracking-tight ${
            lightMode ? 'text-white' : 'text-[#001b31]'
          }`}
        >
          Carpet Cleaner
        </span>
      )}
    </div>
  );
}
