'use me';
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, Sparkles, Image as ImageIcon, Info, Mail, Star, MapPin, CalendarCheck, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#f4faff]/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-[#f4faff]/90 backdrop-blur-md shadow-[0_20px_40px_rgba(18,48,74,0.05)] py-4 md:py-6'
        }`}
      >
        <div className="flex justify-between items-center px-5 md:px-16 max-w-[1280px] mx-auto">
          {/* Logo & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Open menu"
              className="md:hidden text-[#001b31] focus:outline-none p-1"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-[#001b31] flex items-center justify-center text-white font-display font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
                C
              </div>
              <span className="font-display font-bold text-2xl md:text-3xl text-[#001b31] tracking-tight">
                Carpet Cleaner
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-semibold text-sm tracking-wider uppercase transition-colors duration-300 ${
                    isActive
                      ? 'text-[#001b31] border-b-2 border-[#001b31] pb-1 font-bold'
                      : 'text-[#43474d] hover:text-[#001b31]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/book-now"
              className="bg-[#001b31] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#12304a] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 inline-block"
            >
              Book Now
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[55] transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-[60] flex flex-col p-6 h-full w-80 bg-[#f4faff] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-8 border-b border-[#ddeaf2] pb-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#001b31] flex items-center justify-center text-white font-display font-bold text-lg">
              C
            </div>
            <span className="font-display font-bold text-2xl text-[#001b31]">Carpet Cleaner</span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-[#43474d] hover:text-[#001b31] p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-2 overflow-y-auto flex-grow">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 p-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-[#b1e8fa] text-[#316a79]'
                    : 'text-[#43474d] hover:bg-[#e9f6fd]'
                }`}
              >
                {link.name === 'Home' && <Home className="w-5 h-5" />}
                {link.name === 'Services' && <Sparkles className="w-5 h-5" />}
                {link.name === 'Gallery' && <ImageIcon className="w-5 h-5" />}
                {link.name === 'About Us' && <Info className="w-5 h-5" />}
                {link.name === 'Contact' && <Mail className="w-5 h-5" />}
                {link.name === 'Reviews' && <Star className="w-5 h-5" />}
                {link.name === 'Locations' && <MapPin className="w-5 h-5" />}
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-6 border-t border-[#ddeaf2]">
          <Link
            href="/book-now"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full text-center bg-[#001b31] text-white px-6 py-3.5 rounded-lg font-semibold text-sm hover:bg-[#12304a] transition-colors"
          >
            <CalendarCheck className="w-4 h-4" />
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}
