import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#082B59] text-white w-full pt-20 pb-12 px-5 md:px-16 border-t border-[#00B8D9]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1 flex flex-col">
          <Link href="/" className="mb-6">
            <Logo lightMode />
          </Link>
          <p className="font-body text-sm text-white/80 mb-6 leading-relaxed max-w-xs">
            Brisbane's trusted carpet cleaners for homes, rentals and offices. We show up on time, do the job properly, and leave your carpets looking the way they should.
          </p>
          <div className="flex gap-3">
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#1877F2] transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#dc2743] transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608C4.516 2.497 5.783 2.225 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.856.601 3.698 1.942 5.038 1.341 1.341 3.182 1.857 5.038 1.942C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.856-.085 3.698-.601 5.038-1.942 1.341-1.34 1.857-3.182 1.942-5.038C23.986 15.668 24 15.259 24 12s-.014-3.667-.072-4.947c-.085-1.856-.601-3.698-1.942-5.038C20.645.673 18.804.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#0A66C2] transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div className="col-span-1">
          <h4 className="font-semibold text-xs text-[#F2F8FC] uppercase tracking-widest mb-6">
            Services
          </h4>
          <ul className="flex flex-col gap-3 text-sm font-body">
            <li>
              <Link href="/services#steam-carpet-cleaning" className="text-white/80 hover:text-white transition-colors">
                Steam Carpet Cleaning
              </Link>
            </li>
            <li>
              <Link href="/services#end-of-lease-cleaning" className="text-white/80 hover:text-white transition-colors">
                End of Lease Cleaning
              </Link>
            </li>
            <li>
              <Link href="/services#commercial-cleaning" className="text-white/80 hover:text-white transition-colors">
                Commercial Cleaning
              </Link>
            </li>
            <li>
              <Link href="/services#stain-spot-removal" className="text-white/80 hover:text-white transition-colors">
                Stain & Odour Removal
              </Link>
            </li>
            <li>
              <Link href="/services#carpet-shampooing" className="text-white/80 hover:text-white transition-colors">
                Carpet Shampooing
              </Link>
            </li>
            <li>
              <Link href="/services#water-extraction" className="text-white/80 hover:text-white transition-colors">
                Carpet Water Extraction
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="col-span-1">
          <h4 className="font-semibold text-xs text-[#F2F8FC] uppercase tracking-widest mb-6">
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
          <h4 className="font-semibold text-xs text-[#F2F8FC] uppercase tracking-widest mb-6">
            Contact & Support
          </h4>
          <ul className="flex flex-col gap-4 text-sm font-body text-white/80">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#00B8D9] shrink-0" />
              <span>0435 071 625</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#00B8D9] shrink-0" />
              <span>info.theexpertcleaner@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#00B8D9] mt-0.5 shrink-0" />
              <span>Brisbane City, QLD, Australia</span>
            </li>
          </ul>
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
