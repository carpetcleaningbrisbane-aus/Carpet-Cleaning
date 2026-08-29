import Link from 'next/link';
import { Camera, Globe, Phone, Mail, MapPin, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#001b31] text-white w-full pt-20 pb-12 px-5 md:px-16 border-t border-[#12304a]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1 flex flex-col">
          <Link href="/" className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#b4ebfd] flex items-center justify-center text-[#001b31] font-display font-bold text-xl">
              C
            </div>
            <span className="font-display font-bold text-2xl text-white">Carpet Cleaner</span>
          </Link>
          <p className="font-body text-sm text-white/80 mb-6 leading-relaxed max-w-xs">
            Elevating the standard of clean for homes that value professional serenity, meticulous care, and eco-friendly solutions.
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all"
            >
              <Camera className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Website"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div className="col-span-1">
          <h4 className="font-semibold text-xs text-[#b4ebfd] uppercase tracking-widest mb-6">
            Services
          </h4>
          <ul className="flex flex-col gap-3 text-sm font-body">
            <li>
              <Link href="/services#steam-carpet-cleaning" className="text-white/80 hover:text-white transition-colors">
                Steam Carpet Cleaning
              </Link>
            </li>
            <li>
              <Link href="/services#stain-spot-removal" className="text-white/80 hover:text-white transition-colors">
                Stain & Spot Removal
              </Link>
            </li>
            <li>
              <Link href="/services#upholstery-care" className="text-white/80 hover:text-white transition-colors">
                Upholstery Care
              </Link>
            </li>
            <li>
              <Link href="/services#pet-odor-elimination" className="text-white/80 hover:text-white transition-colors">
                Pet Odor Elimination
              </Link>
            </li>
            <li>
              <Link href="/services#end-of-lease-cleaning" className="text-white/80 hover:text-white transition-colors">
                End of Lease Cleaning
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="col-span-1">
          <h4 className="font-semibold text-xs text-[#b4ebfd] uppercase tracking-widest mb-6">
            Company
          </h4>
          <ul className="flex flex-col gap-3 text-sm font-body">
            <li>
              <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-white/80 hover:text-white transition-colors">
                Results Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="col-span-1">
          <h4 className="font-semibold text-xs text-[#b4ebfd] uppercase tracking-widest mb-6">
            Contact & Support
          </h4>
          <ul className="flex flex-col gap-3 text-sm font-body text-white/80 mb-6">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#b4ebfd]" />
              <span>(03) 9123 4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#b4ebfd]" />
              <span>hello@freshnestclean.com.au</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#b4ebfd] mt-1 shrink-0" />
              <span>120 Collins Street, Melbourne VIC 3000</span>
            </li>
          </ul>
          <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#D5A85A] shrink-0" />
            <span className="text-xs text-white/90 leading-tight">
              100% Satisfaction & Bond Back Guarantee Included
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/70">
        <p>© 2026 Carpet Cleaner. Professional Serenity. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
