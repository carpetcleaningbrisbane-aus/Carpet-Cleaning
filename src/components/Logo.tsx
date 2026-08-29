import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  lightMode?: boolean;
}

export default function Logo({ className = '', iconOnly = false, lightMode = false }: LogoProps) {
  const textColor = lightMode ? 'text-white' : 'text-[#001b31]';

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Bright & High Contrast Logo Graphic */}
      <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-[#00D2FF]/60 shadow-md transition-transform duration-300 group-hover:scale-105 bg-white">
        <img
          src="/logo.jpg"
          alt="Carpet Cleaner Logo"
          className="w-full h-full object-cover"
        />
      </div>

      {!iconOnly && (
        <span className={`font-display font-semibold text-xl tracking-tight ${textColor}`}>
          Carpet <span className="font-bold text-[#0094B8]">Cleaner</span>
        </span>
      )}
    </div>
  );
}

