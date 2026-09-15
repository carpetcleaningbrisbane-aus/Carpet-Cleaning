'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CalendarCheck, Phone } from 'lucide-react';

export default function FloatingBookingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 transition-all duration-300">
      <div className="flex items-center gap-1 p-1.5 bg-[#082B59]/90 backdrop-blur-md rounded-full shadow-2xl border border-white/20">
        <a
          href="tel:0405849841"
          aria-label="Call Carpet Cleaner Brisbane"
          className="flex items-center gap-1 px-2.5 py-2 text-white/90 hover:text-white text-xs font-bold rounded-full hover:bg-white/10 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#00B8D9]" />
          <span className="hidden sm:inline">0405 849 841</span>
        </a>
        <Link
          href="/book-now"
          className="flex items-center gap-1.5 px-3.5 py-2 bg-[#00B8D9] text-[#082B59] hover:bg-white font-extrabold text-xs md:text-sm rounded-full shadow-lg transition-all duration-200 active:scale-95 shrink-0"
        >
          <CalendarCheck className="w-4 h-4 text-[#082B59]" />
          <span>Book Now</span>
        </Link>
      </div>
    </div>
  );
}
