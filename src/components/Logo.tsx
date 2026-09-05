import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  lightMode?: boolean; // kept for compatibility, no longer changes appearance
}

export default function Logo({ className = '', lightMode = false }: LogoProps) {
  return (
    <div className={`inline-flex items-center shrink-0 ${className}`}>
      <Image
        src="/logo.webp"
        alt="Carpet Cleaning Brisbane"
        width={160}
        height={80}
        priority
        className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}
