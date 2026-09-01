import Link from 'next/link';
import type { Metadata } from 'next';
import { Star, ShieldCheck, CheckCircle2, Award, Clock, Check, Building2, Home as HomeIcon, ChevronRight } from 'lucide-react';
import TestimonialMarquee from '@/components/ui/marquee-01';
import FaqSection from '@/components/FaqSection';
import { LocalBusinessSchema, WebSiteSchema, FAQSchema } from '@/app/structured-data';
import imgSteam from '@/assets/services/steam-cleaning.png';
import imgStain from '@/assets/services/stain-removal.png';
import imgLease from '@/assets/services/end-of-lease.png';
import imgShampoo from '@/assets/services/carpet-shampooing.png';
import imgCommercial from '@/assets/services/commercial-cleaning.png';
import imgExtraction from '@/assets/services/water-extraction.png';

export const metadata: Metadata = {
  title: 'Professional Carpet Cleaning Brisbane | Steam & Stain Removal',
  description: 'Expert carpet cleaning in Brisbane. Steam cleaning, stain removal, end of lease, pet odour & commercial services. Fast drying, eco-friendly. Book online today.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Professional Carpet Cleaning Brisbane | Steam & Stain Removal',
    description: 'Expert carpet cleaning in Brisbane. Steam cleaning, stain removal, end of lease, pet odour & commercial services. Book online today.',
    url: '/',
    images: [{ url: '/hero.jpg', width: 1200, height: 630, alt: 'Professional carpet cleaning service in Brisbane' }],
  },
};

const CARPET_SERVICES = [
  {
    id: 'steam-cleaning',
    title: 'Steam Carpet Cleaning',
    description: 'Hot water extraction that gets into the fibres and pulls out the dirt, dust and allergens your vacuum can\'t reach.',
    image: imgSteam,
  },
  {
    id: 'stain-removal',
    title: 'Stain & Odour Removal',
    description: 'Pet accidents, wine, coffee, mud — we treat the stain and the smell, not just the surface.',
    image: imgStain,
  },
  {
    id: 'end-of-lease',
    title: 'End of Lease Cleaning',
    description: 'Moving out? We clean to real estate inspection standard so you get your bond back without a fight.',
    image: imgLease,
  },
  {
    id: 'carpet-shampooing',
    title: 'Carpet Shampooing',
    description: 'For heavily soiled carpets that need more than a standard steam — deep agitation followed by full extraction.',
    image: imgShampoo,
  },
  {
    id: 'commercial',
    title: 'Commercial Carpet Cleaning',
    description: 'Office, retail or reception — we work around your hours and leave the place looking sharp.',
    image: imgCommercial,
  },
  {
    id: 'water-extraction',
    title: 'Carpet Water Extraction',
    description: 'Flooded or water-damaged carpet? We extract the moisture fast to prevent lasting damage and mould.',
    image: imgExtraction,
  },
];

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <WebSiteSchema />
      <FAQSchema />
      <div className="min-h-screen">

        {/* 1. Hero Section - Light Blue */}
        <section className="bg-[#F2F8FC] pt-24 md:pt-32">
          <div className="px-5 md:px-16 max-w-[1280px] mx-auto pb-20 md:pb-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[65vh]">
              <div className="order-2 lg:order-1 flex flex-col justify-center hero-pattern relative">
                <div className="relative z-10 py-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full mb-6 border border-[#1261A0]/20 backdrop-blur-sm">
                    <div className="flex text-[#FFB020]">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <span className="font-semibold text-xs text-[#082B59] uppercase tracking-widest ml-1">
                      Trusted Brisbane Carpet Cleaners
                    </span>
                  </div>
                  <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-[#082B59] mb-6 leading-[1.15] tracking-tight">
                    Professional Carpet <br />
                    <span className="text-[#1261A0]">Cleaning Brisbane</span>
                  </h1>
                  <p className="text-base md:text-lg text-[#082B59]/80 mb-8 max-w-xl leading-relaxed">
                    Dirty carpets are more than just an eyesore. We use professional hot water extraction to pull out the dirt, stains and allergens that vacuuming leaves behind — leaving your carpets clean, fresh and fast-drying.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/book-now"
                      className="inline-flex justify-center items-center px-8 py-4 bg-[#1261A0] text-white rounded-lg font-semibold text-base hover:bg-[#00B8D9] transition-all shadow-lg shadow-[#1261A0]/20 hover:shadow-xl hover:-translate-y-0.5"
                    >
                      Book a Cleaning
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex justify-center items-center px-8 py-4 border border-[#1261A0]/30 bg-white/50 backdrop-blur-sm text-[#082B59] rounded-lg font-semibold text-base hover:bg-white transition-colors"
                    >
                      Explore Our Services
                    </Link>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-[#1261A0]/20">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-[#00B8D9]" />
                      <span className="text-xs font-semibold text-[#082B59]">Deep Extraction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-[#00B8D9]" />
                      <span className="text-xs font-semibold text-[#082B59]">Fast Drying</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#00B8D9]" />
                      <span className="text-xs font-semibold text-[#082B59]">End of Lease</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 relative h-[380px] sm:h-[480px] lg:h-[580px] rounded-2xl overflow-hidden ambient-shadow border border-[#E2EDF6]">
                <img
                  src="/hero.jpg"
                  alt="Professional Steam Carpet Cleaning Brisbane"
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082B59]/40 via-transparent to-transparent lg:hidden" />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Our Carpet Cleaning Services - White */}
        <section className="bg-[#FFFFFF]">
          <div className="px-5 md:px-16 max-w-[1280px] mx-auto py-24 md:py-32">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1261A0] mb-3 block">What We Do</span>
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#082B59] mb-4">
                Our Services
              </h2>
              <p className="text-base text-[#082B59]/70 max-w-2xl mx-auto">
                From a single room to a full commercial fit-out — we clean carpets the right way, every time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CARPET_SERVICES.map((service, i) => (
                <Link
                  key={service.id}
                  href={`/services#${service.id}`}
                  className="group relative rounded-2xl overflow-hidden border border-[#E2EDF6] shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 min-h-[250px] flex bg-white"
                >
                  <img
                    src={service.image.src}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#082B59]/90 via-[#082B59]/60 to-[#082B59]/15 transition-opacity duration-500 group-hover:opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082B59]/40 via-transparent to-transparent" />

                  <span className="absolute top-7 right-8 font-display font-bold text-4xl text-white/25 group-hover:text-[#00B8D9]/60 transition-colors duration-300 select-none">
                    0{i + 1}
                  </span>

                  <div className="relative z-10 p-8 md:p-9 w-full flex flex-col justify-center">
                    <div className="w-10 h-[3px] bg-[#00B8D9] rounded-full mb-4" />
                    <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-2.5 leading-snug pr-14">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/85 leading-relaxed mb-4 max-w-lg">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[#00B8D9] font-semibold text-sm w-max group-hover:gap-2.5 transition-all duration-300">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Deep Carpet Cleaning - Navy Break */}
        <section className="bg-[#082B59]">
          <div className="px-5 md:px-16 max-w-[1280px] mx-auto py-24 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#0A3670] backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#1261A0]/30 shadow-2xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#00B8D9] mb-2 block">
                  Deep Clean Solutions
                </span>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6 leading-tight">
                  What a Professional Clean Actually Does
                </h2>
                <p className="text-base text-white/80 mb-6 leading-relaxed">
                  Regular vacuuming removes surface dirt, but it doesn't reach what's deep in the pile — the ground-in grit, dried spills, pet dander and allergens that build up over time. A proper carpet clean gets all of that out.
                </p>
                <p className="text-sm font-semibold text-white mb-4">We deal with:</p>
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
                      <CheckCircle2 className="w-4 h-4 text-[#00B8D9] shrink-0" />
                      <span className="text-sm text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[480px] rounded-2xl overflow-hidden shadow-xl border-2 border-[#1261A0]/40">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Deep Carpet Cleaning for Homes and Businesses"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Professional Steam Carpet Cleaning - Light Blue */}
        <section className="bg-[#F2F8FC]">
          <div className="px-5 md:px-16 max-w-[1280px] mx-auto py-24 md:py-32">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
              <div className="max-w-2xl">
                <div className="w-10 h-[3px] bg-[#1261A0] rounded-full mb-5" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#1261A0] mb-3 block">
                  Advanced Technology
                </span>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-[#082B59] mb-4 leading-tight">
                  Professional Steam Carpet Cleaning
                </h2>
                <p className="text-base text-[#082B59]/80 leading-relaxed">
                  We use hot water extraction — the industry standard for a reason. Heated water and a cleaning agent go deep into the carpet, then get pulled straight back out along with whatever was in there. No residue, no wet carpet smell, dries in a few hours.
                </p>
              </div>
              <Link
                href="/book-now"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#082B59] text-white rounded-xl font-bold text-sm hover:bg-[#1261A0] transition-colors w-max shadow-md shrink-0"
              >
                Book a Steam Clean <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="group relative h-[320px] md:h-[400px] rounded-2xl overflow-hidden border border-[#E2EDF6] ambient-shadow mb-8">
              <img
                src="/steam-cleaning.jpg"
                alt="Professional steam carpet cleaning in a Brisbane home"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#082B59]/80 via-[#082B59]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082B59]/60 via-transparent to-transparent" />

              <div className="absolute inset-0 flex items-center px-7 md:px-12">
                <div className="max-w-md">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#00B8D9]/20 border border-[#00B8D9]/40 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest mb-4">
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#082B59] rounded-lg font-bold text-sm hover:bg-[#00B8D9] hover:text-white transition-colors shadow-lg"
                  >
                    Book a Steam Clean <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="absolute bottom-5 right-5 hidden lg:flex gap-3">
                {[
                  { val: '60°C', label: 'Heated clean' },
                  { val: 'Eco-safe', label: 'Solutions' },
                  { val: 'Kids & pets', label: 'Safe once dry' },
                ].map((c) => (
                  <div key={c.label} className="bg-[#082B59]/60 border border-[#00B8D9]/30 backdrop-blur-md rounded-lg px-3.5 py-2 text-center">
                    <p className="text-white font-display font-bold text-base leading-none">{c.val}</p>
                    <p className="text-white/75 text-[10px] font-semibold uppercase tracking-wider mt-0.5">{c.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative overflow-hidden bg-white rounded-2xl border border-[#E2EDF6] ambient-shadow p-7 flex flex-col gap-5 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <span className="absolute top-6 right-7 font-display font-bold text-4xl text-[#082B59]/5 group-hover:text-[#1261A0]/15 transition-colors duration-300 select-none">01</span>
                <div>
                  <div className="w-10 h-[3px] bg-[#1261A0] rounded-full mb-4" />
                  <h3 className="font-display font-bold text-lg text-[#082B59]">What It Treats</h3>
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
                    <li key={i} className="flex items-center gap-2.5 text-sm text-[#082B59]">
                      <Check className="w-4 h-4 text-[#00B8D9] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative overflow-hidden bg-white rounded-2xl border border-[#E2EDF6] ambient-shadow p-7 flex flex-col gap-5 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <span className="absolute top-6 right-7 font-display font-bold text-4xl text-[#082B59]/5 group-hover:text-[#1261A0]/15 transition-colors duration-300 select-none">02</span>
                <div>
                  <div className="w-10 h-[3px] bg-[#1261A0] rounded-full mb-4" />
                  <h3 className="font-display font-bold text-lg text-[#082B59]">Tailored Process</h3>
                </div>
                <p className="text-sm text-[#082B59]/80 leading-relaxed">
                  The cleaning process is adapted to carpet condition, fibre type, and soiling level —
                  ensuring a thorough result without overwetting or damaging delicate pile.
                </p>
                <div className="mt-auto p-4 bg-[#F2F8FC] rounded-xl border border-[#E2EDF6]">
                  <p className="text-xs text-[#082B59]/70 leading-relaxed">
                    Careful preparation ensures consistent results. Every job is assessed on-site before work begins.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden bg-white rounded-2xl border border-[#E2EDF6] ambient-shadow p-7 flex flex-col gap-5 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <span className="absolute top-6 right-7 font-display font-bold text-4xl text-[#082B59]/5 group-hover:text-[#1261A0]/15 transition-colors duration-300 select-none">03</span>
                <div>
                  <div className="w-10 h-[3px] bg-[#1261A0] rounded-full mb-4" />
                  <h3 className="font-display font-bold text-lg text-[#082B59]">Why Steam?</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { label: 'Deeper than vacuuming', val: '5×' },
                    { label: 'Allergen reduction', val: '99%' },
                    { label: 'Average dry time', val: '2–4 hrs' },
                    { label: 'Safe for kids & pets', val: '✓' },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between py-3 border-b border-[#E2EDF6] last:border-0 last:pb-0">
                      <span className="text-sm text-[#082B59]/80">{stat.label}</span>
                      <span className="text-base font-bold text-[#082B59]">{stat.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Residential · Families & Pets - White */}
        <section className="bg-[#FFFFFF]">
          <div className="px-5 md:px-16 max-w-[1280px] mx-auto py-24 md:py-32">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1261A0] mb-2 block">Who We Clean For</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#082B59]">
                Homes, Families & Everything in Between
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden rounded-3xl border border-[#E2EDF6] bg-[#F2F8FC] ambient-shadow flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
                    alt="Residential carpet cleaning"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 h-48 bg-gradient-to-b from-transparent to-[#F2F8FC]/60" />
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#E0F4F8] flex items-center justify-center text-[#1261A0]">
                      <HomeIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#1261A0]">Home</p>
                      <h3 className="font-display font-bold text-xl text-[#082B59] leading-tight">Residential Carpet Cleaning</h3>
                    </div>
                  </div>
                  <p className="text-sm text-[#082B59]/80 leading-relaxed mb-6">
                    From living rooms to hallways and stairs, carpets gradually darken in high-traffic areas. Our residential service brings life back to every room in your home.
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
                    {['Living rooms', 'Family rooms', 'Bedrooms', 'Apartment carpets', 'Hallways & Stairs', 'Dining areas', 'High-traffic areas', 'Rental properties'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-[#082B59]">
                        <Check className="w-3.5 h-3.5 text-[#00B8D9] shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Link
                      href="/book-now"
                      className="w-full py-3.5 bg-[#082B59] text-white text-center rounded-xl font-semibold text-sm hover:bg-[#1261A0] transition-all block"
                    >
                      Book Residential Clean
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-[#E2EDF6] bg-[#F2F8FC] ambient-shadow flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=80"
                    alt="Pet friendly carpet cleaning"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 h-48 bg-gradient-to-b from-transparent to-[#F2F8FC]/60" />
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#E0F4F8] flex items-center justify-center text-[#1261A0]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#1261A0]">Families & Pets</p>
                      <h3 className="font-display font-bold text-xl text-[#082B59] leading-tight">Carpet Cleaning for Families & Pets</h3>
                    </div>
                  </div>
                  <p className="text-sm text-[#082B59]/80 leading-relaxed mb-6">
                    Homes with children and pets demand more from their carpets. We give extra attention to stubborn stains and odours — leaving carpets fresh and safe for the whole family.
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
                    {['Pet accidents', 'Pet odours', 'Food & drink spills', 'Mud & outdoor soil', 'High-traffic marks', 'General household dirt'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-[#082B59]">
                        <Check className="w-3.5 h-3.5 text-[#00B8D9] shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Link
                      href="/services"
                      className="w-full py-3.5 border border-[#082B59] text-[#082B59] text-center rounded-xl font-semibold text-sm hover:bg-[#F2F8FC] transition-colors block"
                    >
                      View Pet & Stain Treatments
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Commercial & Business Cleaning - Light Blue */}
        <section className="bg-[#F2F8FC]">
          <div className="px-5 md:px-16 max-w-[1280px] mx-auto py-24 md:py-32">
            <div className="relative overflow-hidden rounded-3xl bg-white border border-[#E2EDF6] shadow-sm">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#082B59] via-[#1261A0] to-[#00B8D9]" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#E0F4F8] text-[#1261A0] text-xs font-bold uppercase tracking-widest mb-5 w-max">
                    Commercial
                  </span>
                  <h2 className="font-display font-bold text-3xl md:text-4xl text-[#082B59] mb-5 leading-tight">
                    Carpet Cleaning for<br />Brisbane Businesses
                  </h2>
                  <p className="text-base text-[#082B59]/80 leading-relaxed mb-8">
                    Clean carpets make a noticeable difference in offices and commercial environments. Reception areas, hallways and meeting rooms quickly accumulate dirt — we restore them to a professional standard with minimal disruption.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {['Offices & Corporate Suites', 'Showrooms', 'Retail Businesses', 'Workplaces', 'Commercial Properties', 'Common Areas', 'Reception Areas', 'Meeting Rooms'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-[#082B59]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00B8D9] shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-[#082B59]/60 mb-8 leading-relaxed">
                    Appointments can be arranged around your business operating hours to minimise workplace downtime.
                  </p>

                  <Link
                    href="/book-now"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#082B59] text-white rounded-xl font-bold text-sm hover:bg-[#1261A0] transition-all w-max shadow-md"
                  >
                    Get a Commercial Quote <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="bg-[#F2F8FC] border-t lg:border-t-0 lg:border-l border-[#E2EDF6] p-8 md:p-12 lg:p-14">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#1261A0] border border-[#E2EDF6]">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#082B59]">Our 8-Step Cleaning Approach</h3>
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
                          <span className="w-8 h-8 rounded-full bg-[#082B59] text-white text-xs font-bold flex items-center justify-center">
                            {s.step}
                          </span>
                          {i < 7 && <div className="absolute left-1/2 -translate-x-1/2 top-8 w-px h-4 bg-[#E2EDF6]" />}
                        </div>
                        <div className="pb-1">
                          <h4 className="text-sm font-bold text-[#082B59]">{s.title}</h4>
                          <p className="text-xs text-[#082B59]/60 mt-0.5">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Testimonial Highlights - White */}
        <section className="bg-[#FFFFFF]">
          <div className="px-5 md:px-16 max-w-[1280px] mx-auto py-24 md:py-32">
            <div className="text-center mb-12">
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#082B59] mb-4">
                What Our Clients Say
              </h2>
              <p className="text-base text-[#082B59]/70 max-w-xl mx-auto">
                Real feedback from local Brisbane homeowners and businesses who trust us with their carpet & upholstery care.
              </p>
            </div>

            <TestimonialMarquee />
          </div>
        </section>

        {/* 8. FAQ Section - Light Blue */}
        <section className="bg-[#F2F8FC]">
          <div className="px-5 md:px-16 max-w-[1280px] mx-auto py-24 md:py-32">
            <FaqSection />
          </div>
        </section>

        {/* 9. Final Call to Action - Navy */}
        <section className="bg-[#082B59]">
          <div className="px-5 md:px-16 max-w-[1280px] mx-auto py-24 md:py-32">
            <div className="bg-[#1261A0] text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl border border-[#00B8D9]/30">
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-display font-bold text-3xl md:text-5xl mb-6 leading-tight">
                  Ready for Clean Carpets in Brisbane?
                </h2>
                <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
                  Book online in a couple of minutes. No upfront payment, no fuss.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/book-now"
                    className="px-8 py-4 bg-[#00B8D9] text-[#082B59] rounded-lg font-semibold text-base hover:bg-white transition-all shadow-md"
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
          </div>
        </section>
      </div>
    </>
  );
}