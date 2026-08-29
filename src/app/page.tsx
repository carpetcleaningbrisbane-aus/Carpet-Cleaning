import Link from 'next/link';
import { Star, ShieldCheck, CheckCircle2, Award, Clock, Check, Building2, Home as HomeIcon, ChevronRight } from 'lucide-react';
import TestimonialMarquee from '@/components/ui/marquee-01';
import imgSteam from '@/assets/services/steam-cleaning.png';
import imgStain from '@/assets/services/stain-removal.png';
import imgLease from '@/assets/services/end-of-lease.png';
import imgShampoo from '@/assets/services/carpet-shampooing.png';
import imgCommercial from '@/assets/services/commercial-cleaning.png';
import imgExtraction from '@/assets/services/water-extraction.png';

const CARPET_SERVICES = [
  {
    id: 'steam-cleaning',
    title: 'Steam Carpet Cleaning',
    description: 'Professional steam carpet cleaning that extracts embedded dirt, bacteria and allergens from within the fibres.',
    image: imgSteam,
  },
  {
    id: 'stain-removal',
    title: 'Stain and Odour Removal',
    description: 'Say goodbye to stubborn stains from pets, food, coffee, wine, and unpleasant carpet odours for a fresher quality of living.',
    image: imgStain,
  },
  {
    id: 'end-of-lease',
    title: 'End of Lease Carpet Cleaning',
    description: 'Moving out of a rental? Get professional carpet cleaning for real-estate approved inspections and get your bond back. We are approved to meet your requirements.',
    image: imgLease,
  },
  {
    id: 'carpet-shampooing',
    title: 'Carpet Shampooing',
    description: 'A powerful process that flushes out deeply embedded dirt, bacteria and allergens from carpet fibres. Our carpet shampoo cleaning services Brisbane deliver top results with eco-friendly solutions.',
    image: imgShampoo,
  },
  {
    id: 'commercial',
    title: 'Office/Commercial Carpet Cleaning',
    description: 'Professional carpet cleaning for offices and businesses with fast, flexible service.',
    image: imgCommercial,
  },
  {
    id: 'water-extraction',
    title: 'Carpet Water Extraction',
    description: 'Revive worn, stained, or water-damaged carpets with expert carpet restoration.',
    image: imgExtraction,
  },
];

export default function HomePage() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto mb-20 md:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[65vh]">
          <div className="order-2 lg:order-1 flex flex-col justify-center hero-pattern relative">
            <div className="relative z-10 py-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b4ebfd]/30 rounded-full mb-6 border border-[#b1e8fa]/40">
                <div className="flex text-[#D5A85A]">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="font-semibold text-xs text-[#001b31] uppercase tracking-widest ml-1">
                  Trusted Brisbane Carpet Cleaners
                </span>
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-[#001b31] mb-6 leading-[1.15] tracking-tight">
                Professional Carpet <br />
                <span className="text-[#2d6675]">Cleaning Brisbane</span>
              </h1>
              <p className="text-base md:text-lg text-[#43474d] mb-8 max-w-xl leading-relaxed">
                Clean carpets can completely change the look, comfort and feel of a home or workplace. Our professional steam cleaning & hot water extraction reach deep into carpet fibres to loosen accumulated dirt, tough stains and allergens.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book-now"
                  className="inline-flex justify-center items-center px-8 py-4 bg-[#001b31] text-white rounded-lg font-semibold text-base hover:bg-[#12304a] transition-all shadow-lg shadow-[#001b31]/20 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Book a Cleaning
                </Link>
                <Link
                  href="/services"
                  className="inline-flex justify-center items-center px-8 py-4 border border-[#73777e] bg-transparent text-[#001b31] rounded-lg font-semibold text-base hover:bg-[#e9f6fd] transition-colors"
                >
                  Explore Our Services
                </Link>
              </div>
              {/* Key Trust Highlights */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-[#ddeaf2]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#2d6675]" />
                  <span className="text-xs font-semibold text-[#111d23]">Deep Extraction</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#2d6675]" />
                  <span className="text-xs font-semibold text-[#111d23]">Fast Drying</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#2d6675]" />
                  <span className="text-xs font-semibold text-[#111d23]">End of Lease</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-[380px] sm:h-[480px] lg:h-[580px] rounded-2xl overflow-hidden ambient-shadow border border-[#d7e4ec]">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
              alt="Professional Steam Carpet Cleaning Brisbane"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001b31]/40 via-transparent to-transparent lg:hidden" />
          </div>
        </div>
      </section>

      {/* Our Carpet Cleaning Services — photo cards, lighter overlay, no icon boxes */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto mb-24 md:mb-32">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2d6675] mb-3 block">What We Offer</span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#001b31] mb-4">
            Our Carpet Cleaning Services
          </h2>
          <p className="text-base text-[#43474d] max-w-2xl mx-auto">
            Professional solutions for every carpet — homes, rentals, offices and businesses across Brisbane.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CARPET_SERVICES.map((service, i) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="group relative rounded-2xl overflow-hidden border border-[#d7e4ec] shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 min-h-[250px] flex"
            >
              {/* Background photo */}
              <img
                src={service.image.src}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Lighter navy overlay — photo stays visible, text stays readable */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#001b31]/90 via-[#001b31]/60 to-[#001b31]/15 transition-opacity duration-500 group-hover:opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001b31]/40 via-transparent to-transparent" />

              {/* Number watermark (replaces the icon box) */}
              <span className="absolute top-7 right-8 font-display font-bold text-4xl text-white/25 group-hover:text-[#b4ebfd]/60 transition-colors duration-300 select-none">
                0{i + 1}
              </span>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-9 w-full flex flex-col justify-center">
                <div className="w-10 h-[3px] bg-[#b4ebfd] rounded-full mb-4" />
                <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-2.5 leading-snug pr-14">
                  {service.title}
                </h3>
                <p className="text-sm text-white/85 leading-relaxed mb-4 max-w-lg">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[#b4ebfd] font-semibold text-sm w-max group-hover:gap-2.5 transition-all duration-300">
                  Learn More <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Deep Carpet Cleaning Overview */}
      <section className="bg-white py-20 px-5 md:px-16 border-y border-[#d7e4ec] mb-24 md:mb-32">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#2d6675] mb-2 block">
              Deep Clean Solutions
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#001b31] mb-6 leading-tight">
              Deep Carpet Cleaning for Homes and Businesses
            </h2>
            <p className="text-base text-[#43474d] mb-6 leading-relaxed">
              Carpets experience a lot of everyday wear. Foot traffic, children, pets, food and drink spills, dust and general household activity gradually build up inside the fibres. A professional carpet clean can help remove the dirt and buildup that everyday vacuuming leaves behind.
            </p>
            <p className="text-sm font-semibold text-[#001b31] mb-4">Our carpet cleaning service can help with:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Everyday dirt and dust',
                'Heavy foot-traffic areas',
                'Food and drink spills',
                'Coffee and wine stains',
                'Pet stains and odours',
                'Built-up grime',
                'Allergens and dust particles',
                'Unpleasant carpet odours',
                'Dull or tired-looking carpets',
                'Rental and end-of-lease carpets',
                'Office and commercial carpets',
                'Water-affected carpets'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2d6675] shrink-0" />
                  <span className="text-sm text-[#43474d]">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-[#c3c7ce]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
              alt="Deep Carpet Cleaning for Homes and Businesses"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Professional Steam Carpet Cleaning */}
      {/* Professional Steam Carpet Cleaning */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto mb-24 md:mb-32">
        {/* Section header — left aligned with accent + CTA on right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="w-10 h-[3px] bg-[#2d6675] rounded-full mb-5" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2d6675] mb-3 block">
              Advanced Technology
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#001b31] mb-4 leading-tight">
              Professional Steam Carpet Cleaning
            </h2>
            <p className="text-base text-[#43474d] leading-relaxed">
              Our primary process uses professional hot water extraction — heated water and a cleaning
              solution are injected deep into carpet fibres, then powerfully extracted along with
              loosened dirt, moisture and contaminants.
            </p>
          </div>
          <Link
            href="/book-now"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#001b31] text-white rounded-xl font-bold text-sm hover:bg-[#2d6675] transition-colors w-max shadow-md shrink-0"
          >
            Book a Steam Clean <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Banner — real photo, neutral overlay (no blue tint) */}
        {/* Banner — compact & professional */}
        <div className="group relative h-[320px] md:h-[400px] rounded-2xl overflow-hidden border border-[#d7e4ec] ambient-shadow mb-8">
          <img
            src="/steam-cleaning.jpg"
            alt="Professional steam carpet cleaning in a Brisbane home"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          {/* Neutral dark overlay — natural photo colors */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <div className="absolute inset-0 flex items-center px-7 md:px-12">
            <div className="max-w-md">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/25 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                Hot Water Extraction
              </span>
              <p className="text-white font-display font-bold text-2xl md:text-3xl lg:text-[34px] leading-tight mb-3">
                Reaches deeper than any vacuum can
              </p>
              <p className="hidden md:block text-white/85 text-sm leading-relaxed mb-5">
                Heated water and eco-safe solution loosen deep-set grime, then high-power suction
                pulls dirt, moisture and allergens straight out of the pile.
              </p>
              <Link
                href="/book-now"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#001b31] rounded-lg font-bold text-sm hover:bg-[#e9f6fd] transition-colors shadow-lg"
              >
                Book a Steam Clean <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Spec chips — small horizontal row, bottom right */}
          <div className="absolute bottom-5 right-5 hidden lg:flex gap-3">
            {[
              { val: '60°C', label: 'Heated clean' },
              { val: 'Eco-safe', label: 'Solutions' },
              { val: 'Kids & pets', label: 'Safe once dry' },
            ].map((c) => (
              <div key={c.label} className="bg-white/10 border border-white/20 backdrop-blur-md rounded-lg px-3.5 py-2 text-center">
                <p className="text-white font-display font-bold text-base leading-none">{c.val}</p>
                <p className="text-white/75 text-[10px] font-semibold uppercase tracking-wider mt-0.5">{c.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Three info cards — numbered, no icon boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 — What it treats */}
          <div className="relative overflow-hidden bg-white rounded-2xl border border-[#d7e4ec] ambient-shadow p-7 flex flex-col gap-5 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <span className="absolute top-6 right-7 font-display font-bold text-4xl text-[#001b31]/5 group-hover:text-[#2d6675]/15 transition-colors duration-300 select-none">01</span>
            <div>
              <div className="w-10 h-[3px] bg-[#2d6675] rounded-full mb-4" />
              <h3 className="font-display font-bold text-lg text-[#001b31]">What It Treats</h3>
            </div>
            <ul className="space-y-2.5">
              {[
                'Ground-in dirt & embedded sand',
                'Dust mites, pollen & allergens',
                'Coffee, tea & food spills',
                'Pet accidents & protein marks',
                'Heavy foot-traffic wear',
                'Persistent odours',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-[#43474d]">
                  <Check className="w-4 h-4 text-[#2d6675] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 — Tailored process */}
          <div className="relative overflow-hidden bg-[#f4faff] rounded-2xl border border-[#d7e4ec] ambient-shadow p-7 flex flex-col gap-5 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <span className="absolute top-6 right-7 font-display font-bold text-4xl text-[#001b31]/5 group-hover:text-[#2d6675]/15 transition-colors duration-300 select-none">02</span>
            <div>
              <div className="w-10 h-[3px] bg-[#2d6675] rounded-full mb-4" />
              <h3 className="font-display font-bold text-lg text-[#001b31]">Tailored Process</h3>
            </div>
            <p className="text-sm text-[#43474d] leading-relaxed">
              The cleaning process is adapted to carpet condition, fibre type, and soiling level —
              ensuring a thorough result without overwetting or damaging delicate pile.
            </p>
            <div className="mt-auto p-4 bg-white rounded-xl border border-[#ddeaf2]">
              <p className="text-xs text-[#43474d] leading-relaxed">
                Careful preparation ensures consistent results. Every job is assessed on-site before work begins.
              </p>
            </div>
          </div>

          {/* Card 3 — Why steam stats */}
          <div className="relative overflow-hidden bg-white rounded-2xl border border-[#d7e4ec] ambient-shadow p-7 flex flex-col gap-5 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <span className="absolute top-6 right-7 font-display font-bold text-4xl text-[#001b31]/5 group-hover:text-[#2d6675]/15 transition-colors duration-300 select-none">03</span>
            <div>
              <div className="w-10 h-[3px] bg-[#2d6675] rounded-full mb-4" />
              <h3 className="font-display font-bold text-lg text-[#001b31]">Why Steam?</h3>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Deeper than vacuuming', val: '5×' },
                { label: 'Allergen reduction', val: '99%' },
                { label: 'Average dry time', val: '2–4 hrs' },
                { label: 'Safe for kids & pets', val: '✓' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between py-3 border-b border-[#ddeaf2] last:border-0 last:pb-0">
                  <span className="text-sm text-[#43474d]">{stat.label}</span>
                  <span className="text-base font-bold text-[#001b31]">{stat.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Residential · Families & Pets */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto mb-24 md:mb-32">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2d6675] mb-2 block">Who We Serve</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#001b31]">
            Cleaning Built Around Your Life
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Residential */}
          <div className="group relative overflow-hidden rounded-3xl border border-[#d7e4ec] bg-white ambient-shadow flex flex-col">
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
                alt="Residential carpet cleaning"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 h-48 bg-gradient-to-b from-transparent to-white/60" />
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#e9f6fd] flex items-center justify-center text-[#2d6675]">
                  <HomeIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#2d6675]">Home</p>
                  <h3 className="font-display font-bold text-xl text-[#001b31] leading-tight">Residential Carpet Cleaning</h3>
                </div>
              </div>
              <p className="text-sm text-[#43474d] leading-relaxed mb-6">
                From living rooms to hallways and stairs, carpets gradually darken in high-traffic areas. Our residential service brings life back to every room in your home.
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
                {['Living rooms', 'Family rooms', 'Bedrooms', 'Apartment carpets', 'Hallways & Stairs', 'Dining areas', 'High-traffic areas', 'Rental properties'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-[#43474d]">
                    <Check className="w-3.5 h-3.5 text-[#2d6675] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-auto">
                <Link
                  href="/book-now"
                  className="w-full py-3.5 bg-[#001b31] text-white text-center rounded-xl font-semibold text-sm hover:bg-[#12304a] transition-all block"
                >
                  Book Residential Clean
                </Link>
              </div>
            </div>
          </div>

          {/* Families & Pets */}
          <div className="group relative overflow-hidden rounded-3xl border border-[#d7e4ec] bg-white ambient-shadow flex flex-col">
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=80"
                alt="Pet friendly carpet cleaning"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 h-48 bg-gradient-to-b from-transparent to-white/60" />
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#e9f6fd] flex items-center justify-center text-[#2d6675]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#2d6675]">Families & Pets</p>
                  <h3 className="font-display font-bold text-xl text-[#001b31] leading-tight">Carpet Cleaning for Families & Pets</h3>
                </div>
              </div>
              <p className="text-sm text-[#43474d] leading-relaxed mb-6">
                Homes with children and pets demand more from their carpets. We give extra attention to stubborn stains and odours — leaving carpets fresh and safe for the whole family.
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
                {['Pet accidents', 'Pet odours', 'Food & drink spills', 'Mud & outdoor soil', 'High-traffic marks', 'General household dirt'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-[#43474d]">
                    <Check className="w-3.5 h-3.5 text-[#2d6675] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-auto">
                <Link
                  href="/services"
                  className="w-full py-3.5 border border-[#001b31] text-[#001b31] text-center rounded-xl font-semibold text-sm hover:bg-[#e9f6fd] transition-colors block"
                >
                  View Pet & Stain Treatments
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial & Business Cleaning */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto mb-24 md:mb-32">
        <div className="relative overflow-hidden rounded-3xl bg-[#f4faff] border border-[#d7e4ec]">
          {/* accent stripe */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#001b31] via-[#0094B8] to-[#b4ebfd]" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left content */}
            <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 rounded-full bg-[#b4ebfd]/50 text-[#2d6675] text-xs font-bold uppercase tracking-widest mb-5 w-max">
                Commercial
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#001b31] mb-5 leading-tight">
                Carpet Cleaning for<br />Brisbane Businesses
              </h2>
              <p className="text-base text-[#43474d] leading-relaxed mb-8">
                Clean carpets make a noticeable difference in offices and commercial environments. Reception areas, hallways and meeting rooms quickly accumulate dirt — we restore them to a professional standard with minimal disruption.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {['Offices & Corporate Suites', 'Showrooms', 'Retail Businesses', 'Workplaces', 'Commercial Properties', 'Common Areas', 'Reception Areas', 'Meeting Rooms'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#43474d]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0094B8] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#73777e] mb-8 leading-relaxed">
                Appointments can be arranged around your business operating hours to minimise workplace downtime.
              </p>

              <Link
                href="/book-now"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#001b31] text-white rounded-xl font-bold text-sm hover:bg-[#12304a] transition-all w-max shadow-md"
              >
                Get a Commercial Quote <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right — 8-step process */}
            <div className="bg-white border-t lg:border-t-0 lg:border-l border-[#d7e4ec] p-8 md:p-12 lg:p-14">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#e9f6fd] flex items-center justify-center text-[#2d6675]">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl text-[#001b31]">Our 8-Step Cleaning Approach</h3>
              </div>

              <div className="space-y-4">
                {[
                  { step: '1', title: 'Carpet Inspection', desc: 'Assessing material, fibre type and condition.' },
                  { step: '2', title: 'Stain & Problem Identification', desc: 'Pinpointing traffic marks and specific stains.' },
                  { step: '3', title: 'Pre-Vacuuming', desc: 'Lifting dry surface soils and loose debris.' },
                  { step: '4', title: 'Pre-Treatment Application', desc: 'Eco-friendly solutions loosen embedded grime.' },
                  { step: '5', title: 'Professional Steam Cleaning', desc: 'Deep hot water agitation across carpet fibres.' },
                  { step: '6', title: 'Hot Water Extraction', desc: 'High-power suction removes moisture and dirt.' },
                  { step: '7', title: 'Stain & Odour Treatment', desc: 'Targeted spot neutralisation for residual marks.' },
                  { step: '8', title: 'Final Quality Inspection', desc: 'Ensuring pristine results and client satisfaction.' },
                ].map((s, i) => (
                  <div key={s.step} className="flex items-start gap-4">
                    <div className="relative shrink-0">
                      <span className="w-8 h-8 rounded-full bg-[#001b31] text-white text-xs font-bold flex items-center justify-center">
                        {s.step}
                      </span>
                      {i < 7 && <div className="absolute left-1/2 -translate-x-1/2 top-8 w-px h-4 bg-[#ddeaf2]" />}
                    </div>
                    <div className="pb-1">
                      <h4 className="text-sm font-bold text-[#001b31]">{s.title}</h4>
                      <p className="text-xs text-[#73777e] mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Highlights */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto mb-24 md:mb-32">
        <div className="text-center mb-12">
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#001b31] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base text-[#43474d] max-w-xl mx-auto">
            Real feedback from local Brisbane homeowners and businesses who trust us with their carpet & upholstery care.
          </p>
        </div>

        <TestimonialMarquee />
      </section>

      {/* Final Call to Action */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto mb-20">
        <div className="bg-[#001b31] text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6 leading-tight">
              Ready for Fresh, Pristine Carpets in Brisbane?
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed">
              Book your professional steam carpet cleaning today in under 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/book-now"
                className="px-8 py-4 bg-[#b4ebfd] text-[#001b31] rounded-lg font-semibold text-base hover:bg-white transition-all shadow-md"
              >
                Book Online Now
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-white/30 text-white rounded-lg font-semibold text-base hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}