import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  lightMode?: boolean;
}

export default function Logo({ className = '', iconOnly = false, lightMode = false }: LogoProps) {
  const textColor = lightMode ? 'text-white' : 'text-[#0B253A]';

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Bright & High Contrast Logo Graphic */}
      <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105 bg-white -my-3">
        <img
          src="/logo.jpg"
          alt="Carpet Cleaner Logo"
          className="w-full h-full object-cover"
        />
      </div>

      {!iconOnly && (
        <span className={`font-display font-semibold text-xl tracking-tight ${textColor}`}>
          Carpet <span className="font-bold text-[#159A9C]">Cleaner</span>
        </span>
      )}
    </div>
  );
}

