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
          <p className="font-body text-sm text-white/80 leading-relaxed max-w-xs">
            Brisbane's trusted carpet cleaners for homes, rentals and offices. We show up on time, do the job properly, and leave your carpets looking the way they should.
          </p>
        </div>

        {/* Services Column */}
        <div className="col-span-1">
          <h4 className="font-semibold text-xs text-[#F2F8FC] uppercase tracking-widest mb-6">
            Services
          </h4>
          <ul className="flex flex-col gap-3 text-sm font-body">
            <li>
              <Link href="/services/carpet-cleaning" className="text-white/80 hover:text-white transition-colors">
                Carpet Cleaning
              </Link>
            </li>
            <li>
              <Link href="/services/curtain-cleaning" className="text-white/80 hover:text-white transition-colors">
                Curtain Cleaning
              </Link>
            </li>
            <li>
              <Link href="/services/couch-cleaning" className="text-white/80 hover:text-white transition-colors">
                Couch Cleaning
              </Link>
            </li>
            <li>
              <Link href="/services/carpet-repair" className="text-white/80 hover:text-white transition-colors">
                Carpet Repair
              </Link>
            </li>
            <li>
              <Link href="/services/mattress-cleaning" className="text-white/80 hover:text-white transition-colors">
                Mattress Cleaning
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
              <span>Brisbane City, Australia</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/70">
        <p>© 2026 Carpet Cleaning Brisbane. All rights reserved.</p>
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
