'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu, X, Home, Briefcase, Image as ImageIcon,
  Info, Mail, CalendarCheck,
} from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
            ? 'bg-[#0B253A] shadow-lg py-3'
            : 'bg-[#0B253A] shadow-md py-4 md:py-5'
        }`}
      >
        <div className="flex justify-between items-center px-5 md:px-16 max-w-[1280px] mx-auto">

          {/* Logo & mobile toggle */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Open menu"
              className="md:hidden text-white/80 hover:text-white focus:outline-none p-1"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <Link href="/" className="group">
              <Logo lightMode />
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-semibold text-sm tracking-wider uppercase transition-colors duration-200 ${
                    isActive
                      ? 'text-[#159A9C] border-b-2 border-[#159A9C] pb-1'
                      : 'text-white/75 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Book Now */}
          <div className="flex items-center">
            <Link
              href="/book-now"
              className="bg-[#159A9C] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-xs md:text-sm hover:bg-white hover:text-[#0B253A] transition-all duration-200 shadow-md active:scale-95 inline-block"
            >
              Book Now
            </Link>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[55]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-[60] flex flex-col p-6 h-full w-80 bg-[#0B253A] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Logo lightMode />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-white/60 hover:text-white p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 overflow-y-auto flex-grow">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-[#159A9C]/20 text-[#159A9C]'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.name === 'Home' && <Home className="w-5 h-5 shrink-0" />}
                {link.name === 'Services' && <Briefcase className="w-5 h-5 shrink-0" />}
                {link.name === 'Gallery' && <ImageIcon className="w-5 h-5 shrink-0" />}
                {link.name === 'About Us' && <Info className="w-5 h-5 shrink-0" />}
                {link.name === 'Contact' && <Mail className="w-5 h-5 shrink-0" />}
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-6 border-t border-white/10">
          <Link
            href="/book-now"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-[#159A9C] text-white px-6 py-3.5 rounded-lg font-semibold text-sm hover:bg-white hover:text-[#0B253A] transition-colors"
          >
            <CalendarCheck className="w-4 h-4" />
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}
