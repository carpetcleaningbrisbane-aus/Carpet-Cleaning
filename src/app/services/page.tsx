import Link from 'next/link';
import type { Metadata } from 'next';
import { SERVICE_CATEGORIES } from '@/data/serviceCategories';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cleaning Services Brisbane | Carpet, Curtain, Couch & Repair',
  description: 'Professional carpet cleaning, curtain cleaning, couch cleaning and carpet repair services across Brisbane. Book online today.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24">

      {/* Hero */}
      <section className="bg-[#0B253A] py-20 px-5 md:px-16 mb-16">
        <div className="max-w-[1280px] mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#159A9C] mb-3 block">Professional Cleaning</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-5 leading-tight">
            Our Services
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            From carpet steam cleaning to couch restoration and carpet repair — we handle it all across Brisbane.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICE_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/services/${cat.slug}`}
              className="group relative rounded-3xl overflow-hidden border border-[#D6E8E8] bg-white hover:shadow-xl hover:border-[#159A9C]/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={cat.heroImage}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 h-52 bg-gradient-to-b from-transparent to-[#0B253A]/30" />
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ backgroundColor: `${cat.accentColor}15`, color: cat.accentColor }}>
                  {cat.services.length} Services
                </div>
                <h2 className="font-display font-bold text-2xl text-[#0B253A] mb-2">{cat.title}</h2>
                <p className="text-sm text-[#60727F] mb-5 leading-relaxed">{cat.tagline}</p>

                {/* Sub-services preview */}
                <ul className="space-y-1.5 mb-6">
                  {cat.services.slice(0, 3).map((s, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-[#102A3A]">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: cat.accentColor }} />
                      {s.title}
                    </li>
                  ))}
                  {cat.services.length > 3 && (
                    <li className="text-xs text-[#60727F] pl-5">+{cat.services.length - 3} more</li>
                  )}
                </ul>

                <div className="flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all"
                  style={{ color: cat.accentColor }}>
                  View Service <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="bg-[#0B253A] rounded-3xl p-10 md:p-14 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Not sure which service you need?</h2>
          <p className="text-white/65 text-sm mb-8 max-w-md mx-auto">Get in touch and we'll point you in the right direction.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book-now" className="px-8 py-4 bg-white text-[#0B253A] rounded-xl font-bold text-sm hover:bg-[#F0FAFA] transition-all shadow-md">Book Now</Link>
            <Link href="/contact" className="px-8 py-4 border border-white/30 text-white rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
