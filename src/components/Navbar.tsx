'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu, X, Home, Briefcase, Image as ImageIcon,
  Info, Mail, CalendarCheck, ChevronDown,
} from 'lucide-react';
import Logo from './Logo';

const NAV_BG = '#1261A0';
const NAV_BG_SCROLLED = 'rgba(18, 97, 160, 0.9)';

const SERVICE_CATEGORIES = [
  { name: 'Carpet Cleaning', href: '/services/carpet-cleaning', color: '#159A9C' },
  { name: 'Curtain Cleaning', href: '/services/curtain-cleaning', color: '#7B5EA7' },
  { name: 'Couch Cleaning', href: '/services/couch-cleaning', color: '#C07B40' },
  { name: 'Carpet Repair', href: '/services/carpet-repair', color: '#2A7A4B' },
  { name: 'Mattress Cleaning', href: '/services/mattress-cleaning', color: '#1261A0' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isServicesActive = pathname.startsWith('/services');

  return (
    <>
      <header
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-lg py-3 border-b border-white/20 backdrop-blur-lg' : 'backdrop-blur-md shadow-md py-4 md:py-5'
        }`}
        style={{ backgroundColor: isScrolled ? NAV_BG_SCROLLED : `${NAV_BG}F2` }}
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
            <Link
              href="/"
              className={`font-semibold text-sm tracking-wider uppercase transition-colors duration-200 ${
                pathname === '/' ? 'text-[#00B8D9] border-b-2 border-[#00B8D9] pb-1' : 'text-white/75 hover:text-white'
              }`}
            >
              Home
            </Link>

            {/* Services — hover to open dropdown, click goes to hub */}
            <div className="relative group">
              <Link
                href="/services"
                className={`flex items-center gap-1 font-semibold text-sm tracking-wider uppercase transition-colors duration-200 ${
                  isServicesActive ? 'text-[#00B8D9] border-b-2 border-[#00B8D9] pb-1' : 'text-white/75 hover:text-white'
                }`}
              >
                Services
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              {/* Dropdown — shows on hover via group-hover */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-2xl shadow-xl border border-[#E0ECEC] overflow-hidden w-52 py-1">
                  {SERVICE_CATEGORIES.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-5 py-2.5 text-sm text-[#0B253A] hover:bg-[#F0FAFA] hover:text-[#159A9C] transition-colors font-medium"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {[
              { name: 'Gallery', href: '/gallery' },
              { name: 'About Us', href: '/about' },
              { name: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-semibold text-sm tracking-wider uppercase transition-colors duration-200 ${
                  pathname === link.href ? 'text-[#00B8D9] border-b-2 border-[#00B8D9] pb-1' : 'text-white/75 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Book Now */}
          <div className="flex items-center">
            <Link
              href="/book-now"
              className="bg-white text-[#1261A0] px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-xs md:text-sm hover:bg-[#082B59] hover:text-white transition-all duration-200 shadow-md active:scale-95 inline-block"
            >
              Book Now
            </Link>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-[55]" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-[60] flex flex-col p-6 h-full w-80 bg-[#082B59] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Logo lightMode />
          </Link>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu" className="text-white/60 hover:text-white p-1">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 overflow-y-auto flex-grow">
          <Link href="/" onClick={() => setIsOpen(false)}
            className={`flex items-center gap-3 p-3 rounded-lg font-semibold text-sm transition-all ${
              pathname === '/' ? 'bg-[#00B8D9]/20 text-[#00B8D9]' : 'text-white/70 hover:bg-white/10 hover:text-white'
            }`}>
            <Home className="w-5 h-5 shrink-0" /><span>Home</span>
          </Link>

          {/* Mobile services accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen((o) => !o)}
              className={`w-full flex items-center justify-between gap-3 p-3 rounded-lg font-semibold text-sm transition-all ${
                isServicesActive ? 'bg-[#00B8D9]/20 text-[#00B8D9]' : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-3"><Briefcase className="w-5 h-5 shrink-0" />Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="ml-8 mt-1 flex flex-col gap-1">
                <Link href="/services" onClick={() => setIsOpen(false)}
                  className="p-2.5 rounded-lg text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white hover:bg-white/10 transition-all">
                  All Services
                </Link>
                {SERVICE_CATEGORIES.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { name: 'Gallery', href: '/gallery', icon: <ImageIcon className="w-5 h-5 shrink-0" /> },
            { name: 'About Us', href: '/about', icon: <Info className="w-5 h-5 shrink-0" /> },
            { name: 'Contact', href: '/contact', icon: <Mail className="w-5 h-5 shrink-0" /> },
          ].map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 p-3 rounded-lg font-semibold text-sm transition-all ${
                pathname === link.href ? 'bg-[#00B8D9]/20 text-[#00B8D9]' : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}>
              {link.icon}<span>{link.name}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-white/10">
          <Link href="/book-now" onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-[#00B8D9] text-white px-6 py-3.5 rounded-lg font-semibold text-sm hover:bg-white hover:text-[#082B59] transition-colors">
            <CalendarCheck className="w-4 h-4" />
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}
