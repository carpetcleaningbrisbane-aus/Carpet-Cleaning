import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SERVICE_CATEGORIES } from '@/data/serviceCategories';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return SERVICE_CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = SERVICE_CATEGORIES.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `${cat.title} Brisbane | Expert Cleaning Services`,
    description: cat.description,
    alternates: { canonical: `/services/${cat.slug}` },
  };
}

export default async function ServiceCategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = SERVICE_CATEGORIES.find((c) => c.slug === category);
  if (!cat) notFound();

  const otherCategories = SERVICE_CATEGORIES.filter((c) => c.slug !== category);

  return (
    <div className="pt-24 md:pt-32 pb-24">

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 px-5 md:px-16 overflow-hidden mb-0">
        <img
          src={cat.heroImage}
          alt={cat.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0B253A]/70" />
        <div className="relative z-10 max-w-[1280px] mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-xs mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">{cat.title}</span>
          </div>
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 text-white"
            style={{ backgroundColor: `${cat.accentColor}30`, border: `1px solid ${cat.accentColor}60`, color: cat.accentColor === '#159A9C' ? '#5DD5D7' : '#fff' }}>
            {cat.title}
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-5 leading-tight max-w-3xl">
            {cat.title} in Brisbane
          </h1>
          <p className="text-base md:text-lg text-white/75 max-w-2xl mb-8 leading-relaxed">
            {cat.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/book-now" className="px-7 py-3.5 bg-white text-[#0B253A] rounded-xl font-bold text-sm hover:bg-[#F0FAFA] transition-all shadow-md">
              Book Now
            </Link>
            <Link href="/contact" className="px-7 py-3.5 bg-white/10 border border-white/20 text-white rounded-xl font-semibold text-sm hover:bg-white/20 transition-all">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── Our Services ── */}
      <section className="bg-white py-20 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: cat.accentColor }}>What We Offer</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#0B253A] mb-3">Our {cat.title} Services</h2>
            <p className="text-sm text-[#60727F] max-w-xl">Everything you need — handled properly, every time.</p>
          </div>
          {/* Use flex-wrap with justify-center so odd last items center naturally */}
          <div className="flex flex-wrap justify-center gap-6">
            {cat.services.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#D6E8E8] overflow-hidden hover:shadow-lg hover:border-[#159A9C]/40 transition-all group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base text-[#0B253A] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#60727F] leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="py-20 px-5 md:px-16" style={{ backgroundColor: '#F0FAFA' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: cat.accentColor }}>How It Works</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#0B253A] mb-3">Our Process</h2>
            <p className="text-sm text-[#60727F] max-w-lg mx-auto">A clear, step-by-step approach so you know exactly what to expect.</p>
          </div>

          {/* Steps — centered flex-wrap works for any count */}
          <div className="flex flex-wrap justify-center gap-8">
            {cat.process.map((p, i) => (
              <div key={i} className="flex flex-col items-center text-center w-40">
                {/* Number circle */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-base mb-4 shadow-md shrink-0"
                  style={{ backgroundColor: cat.accentColor }}
                >
                  {p.step}
                </div>
                {/* Connector dot on all but last */}
                <h3 className="font-bold text-sm text-[#0B253A] mb-2">{p.title}</h3>
                <p className="text-xs text-[#60727F] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Horizontal connector line between steps on desktop */}
          <div className="hidden md:flex justify-center mt-0 -mt-[4.5rem] mb-16 pointer-events-none">
            <div className="flex items-center gap-0">
              {cat.process.map((_, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-6 h-6 rounded-full border-2 shrink-0" style={{ borderColor: cat.accentColor, backgroundColor: `${cat.accentColor}20` }} />
                  {i < cat.process.length - 1 && (
                    <div className="w-28 h-px" style={{ backgroundColor: cat.accentColor, opacity: 0.3 }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="bg-white py-20 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: cat.accentColor }}>Results</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#0B253A] mb-3">Before & After</h2>
            <p className="text-sm text-[#60727F] max-w-xl">Real results from real Brisbane homes and businesses.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cat.gallery.map((g, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-[#D6E8E8] shadow-sm">
                <div className="grid grid-cols-2 h-56">
                  <div className="relative overflow-hidden">
                    <img src={g.before} alt={`${g.label} before`} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded-full">Before</span>
                  </div>
                  <div className="relative overflow-hidden border-l border-white">
                    <img src={g.after} alt={`${g.label} after`} className="w-full h-full object-cover" />
                    <span className="absolute top-3 right-3 text-white text-[10px] font-bold px-2 py-1 rounded-full" style={{ backgroundColor: cat.accentColor }}>After</span>
                  </div>
                </div>
                <div className="px-5 py-3 bg-[#F7FAFA]">
                  <p className="text-sm font-semibold text-[#0B253A]">{g.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/gallery" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline" style={{ color: cat.accentColor }}>
              View full gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-5 md:px-16 bg-[#0B253A]">
        <div className="max-w-[680px] mx-auto text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Ready to Book {cat.title}?</h2>
          <p className="text-white/65 text-base mb-8">No upfront payment. We'll confirm your booking within a few hours.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book-now" className="px-8 py-4 bg-white text-[#0B253A] rounded-xl font-bold text-sm hover:bg-[#F0FAFA] transition-all shadow-md">Book Now</Link>
            <Link href="/contact" className="px-8 py-4 border border-white/30 text-white rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* ── Other Services ── */}
      <section className="py-16 px-5 md:px-16 bg-[#F7FAFA]">
        <div className="max-w-[1280px] mx-auto">
          <h3 className="font-display font-bold text-xl text-[#0B253A] mb-6">Other Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherCategories.map((c) => (
              <Link key={c.slug} href={`/services/${c.slug}`}
                className="flex items-center justify-between p-4 bg-white rounded-xl border border-[#D6E8E8] hover:border-[#159A9C]/50 hover:shadow-sm transition-all group">
                <span className="font-semibold text-sm text-[#0B253A] group-hover:text-[#159A9C] transition-colors">{c.title}</span>
                <ArrowRight className="w-4 h-4 text-[#60727F] group-hover:text-[#159A9C] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
