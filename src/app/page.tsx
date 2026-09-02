import Link from "next/link";
import type { Metadata } from "next";
import {
  Star, ShieldCheck, CheckCircle2, Award, Clock, Check, Building2,
  Home as HomeIcon, ChevronRight,
} from "lucide-react";
import TestimonialMarquee from "@/components/ui/marquee-01";
import FaqSection from "@/components/FaqSection";
import {
  LocalBusinessSchema, WebSiteSchema, FAQSchema,
} from "@/app/structured-data";
import { SERVICE_CATEGORIES } from "@/data/serviceCategories";

export const metadata: Metadata = {
  title: "Professional Carpet Cleaning Brisbane | Steam & Stain Removal",
  description:
    "Expert carpet cleaning in Brisbane. Steam cleaning, stain removal, end of lease, pet odour & commercial services. Fast drying, eco-friendly. Book online today.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Professional Carpet Cleaning Brisbane | Steam & Stain Removal",
    description:
      "Expert carpet cleaning in Brisbane. Steam cleaning, stain removal, end of lease, pet odour & commercial services. Book online today.",
    url: "/",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Professional carpet cleaning service in Brisbane",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema /> <WebSiteSchema /> <FAQSchema />
      <div className="min-h-screen">

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background image */}
          <img
            src="/hero.jpg"
            alt="Professional carpet cleaning Brisbane"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Left-to-right gradient — content on left, image visible on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/5" />

          <div className="relative z-10 px-5 md:px-16 max-w-[1280px] mx-auto w-full pt-28 pb-20 md:pt-36 md:pb-28">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full mb-6 border border-[#1261A0]/20 backdrop-blur-sm">
                <div className="flex text-[#FFB020]">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="font-semibold text-xs text-[#082B59] uppercase tracking-widest ml-1">Trusted Brisbane Carpet Cleaners</span>
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-[#082B59] mb-6 leading-[1.15] tracking-tight">
                Professional Carpet <br />
                <span className="text-[#1261A0]">Cleaning Brisbane</span>
              </h1>
              <p className="text-base md:text-lg text-[#082B59]/80 mb-8 leading-relaxed">
                Dirty carpets are more than just an eyesore. We use professional hot water extraction to pull out the dirt, stains and allergens that vacuuming leaves behind — leaving your carpets clean, fresh and fast-drying.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/book-now" className="inline-flex justify-center items-center px-8 py-4 bg-[#1261A0] text-white rounded-lg font-semibold text-base hover:bg-[#00B8D9] transition-all shadow-lg shadow-[#1261A0]/20 hover:shadow-xl hover:-translate-y-0.5">
                  Book a Cleaning
                </Link>
                <Link href="/services" className="inline-flex justify-center items-center px-8 py-4 border border-[#1261A0]/30 bg-white/70 backdrop-blur-sm text-[#082B59] rounded-lg font-semibold text-base hover:bg-white transition-colors">
                  Explore Our Services
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#1261A0]/20">
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
        </section>

        {/* Why Professional Section */}
        <section className="bg-[#082B59]">
          <div className="px-5 md:px-16 max-w-[1280px] mx-auto py-24 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#0A3670] backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#1261A0]/30 shadow-2xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#00B8D9] mb-2 block">Brisbane Carpet Cleaning</span>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6 leading-tight">Why Professional Carpet Cleaning in Brisbane?</h2>
                <p className="text-base text-white/80 mb-6 leading-relaxed">
                  Brisbane's busy lifestyle, warm climate and everyday foot traffic can quickly leave carpets looking tired and worn. Professional carpet cleaning goes beyond regular vacuuming to remove dirt, stains and allergens trapped deep in the fibres.
                </p>
                <p className="text-sm font-semibold text-white mb-4">Professional cleaning helps remove:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B8D9] shrink-0" />
                    <span className="text-sm text-white">Everyday dirt & dust</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B8D9] shrink-0" />
                    <span className="text-sm text-white">Stubborn stains</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B8D9] shrink-0" />
                    <span className="text-sm text-white">Pet stains & odours</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B8D9] shrink-0" />
                    <span className="text-sm text-white">Coffee & wine spills</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B8D9] shrink-0" />
                    <span className="text-sm text-white">Built-up grime</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B8D9] shrink-0" />
                    <span className="text-sm text-white">Allergens & dust</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B8D9] shrink-0" />
                    <span className="text-sm text-white">Unpleasant odours</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B8D9] shrink-0" />
                    <span className="text-sm text-white">Heavy traffic marks</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B8D9] shrink-0" />
                    <span className="text-sm text-white">Dull, tired-looking carpets</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B8D9] shrink-0" />
                    <span className="text-sm text-white">Water-affected areas</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B8D9] shrink-0" />
                    <span className="text-sm text-white">Rental & end-of-lease dirt</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B8D9] shrink-0" />
                    <span className="text-sm text-white">Office & commercial grime</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[480px] rounded-2xl overflow-hidden shadow-xl border-2 border-[#1261A0]/40">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80" alt="Deep Carpet Cleaning for Homes and Businesses" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Removed blue overlay, added animations */}
        <section className="bg-[#DCE6F1] text-[#082B59] py-24 md:py-32">
          <div className="px-5 md:px-16 max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1261A0] mb-3 block">What We Do</span>
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#082B59] mb-4">Our Services</h2>
              <p className="text-base text-[#082B59]/80 max-w-2xl mx-auto">From a single room to a full commercial fit-out — we clean carpets the right way, every time.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICE_CATEGORIES.map((service, i) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 min-h-[280px] flex bg-white"
                >
                  {/* Image with scale animation */}
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Minimal dark overlay for text readability - removed blue tint */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500" />

                  {/* Animated number */}
                  <span className="absolute top-7 right-8 font-display font-bold text-5xl text-white/20 group-hover:text-white/40 transition-all duration-500 select-none group-hover:scale-110 transform">
                    0{i + 1}
                  </span>

                  {/* Content with animation */}
                  <div className="relative z-10 p-8 md:p-9 w-full flex flex-col justify-center transform transition-all duration-500 group-hover:translate-y-0">
                    {/* Animated line */}
                    <div className="w-12 h-[3px] bg-[#00B8D9] rounded-full mb-4 transform transition-all duration-500 group-hover:w-20" />

                    <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3 leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-sm text-white/90 leading-relaxed mb-5 max-w-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {service.tagline}
                    </p>

                    {/* Animated Learn More button */}
                    <span className="inline-flex items-center gap-2 text-[#00B8D9] font-semibold text-base w-max group-hover:gap-3 transition-all duration-300 transform group-hover:translate-x-2">
                      Learn More
                      <ChevronRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 border-2 border-[#00B8D9]/0 group-hover:border-[#00B8D9]/30 rounded-2xl transition-all duration-500 pointer-events-none" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Process Section */}
        <section className="bg-[#FFFBEB] border-y border-[#F59E0B]/20">
          <div className="px-5 md:px-16 max-w-[1280px] mx-auto py-24 md:py-32">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-[#FEF3C7] text-[#B45309] text-xs font-bold uppercase tracking-widest rounded-full mb-5 border border-[#F59E0B]/30 shadow-sm">Simple Process</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#78350F] mb-4">From Booking To Fresh Carpets</h2>
              <p className="text-base text-[#92400E] max-w-lg mx-auto">A straightforward process designed to make your cleaning appointment easy.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white rounded-2xl p-6 border border-[#F59E0B]/20 hover:border-[#D97706] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-9 h-9 rounded-full bg-[#D97706] text-white text-sm font-bold flex items-center justify-center mb-5">1</div>
                <h3 className="font-display font-bold text-lg text-[#78350F] mb-2">Book</h3>
                <p className="text-sm text-[#92400E] leading-relaxed">Choose your service and request your preferred appointment.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-[#F59E0B]/20 hover:border-[#D97706] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-9 h-9 rounded-full bg-[#D97706] text-white text-sm font-bold flex items-center justify-center mb-5">2</div>
                <h3 className="font-display font-bold text-lg text-[#78350F] mb-2">We Confirm</h3>
                <p className="text-sm text-[#92400E] leading-relaxed">We confirm the booking details and answer any questions.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-[#F59E0B]/20 hover:border-[#D97706] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-9 h-9 rounded-full bg-[#D97706] text-white text-sm font-bold flex items-center justify-center mb-5">3</div>
                <h3 className="font-display font-bold text-lg text-[#78350F] mb-2">We Clean</h3>
                <p className="text-sm text-[#92400E] leading-relaxed">Our cleaner arrives with professional equipment and gets to work.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-[#F59E0B]/20 hover:border-[#D97706] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-9 h-9 rounded-full bg-[#D97706] text-white text-sm font-bold flex items-center justify-center mb-5">4</div>
                <h3 className="font-display font-bold text-lg text-[#78350F] mb-2">Enjoy</h3>
                <p className="text-sm text-[#92400E] leading-relaxed">Inspect the finished result and enjoy a fresher-looking space.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Steam Cleaning Section */}
        <section className="bg-[#ECFDF5] border-y border-[#10B981]/20">
          <div className="px-5 md:px-16 max-w-[1280px] mx-auto py-24 md:py-32">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
              <div className="max-w-2xl">
                <div className="w-10 h-[3px] bg-[#059669] rounded-full mb-5" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#059669] mb-3 block">Eco-Friendly Technology</span>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-[#064E3B] mb-4 leading-tight">Professional Steam Carpet Cleaning</h2>
                <p className="text-base text-[#065F46] leading-relaxed">We use hot water extraction — the industry standard for a reason. Heated water and non-toxic cleaning agents go deep into the carpet, then get pulled straight back out along with whatever was in there. Safe for children and pets.</p>
              </div>
              <Link href="/book-now" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#059669] text-white rounded-xl font-bold text-sm hover:bg-[#047857] transition-colors w-max shadow-md shrink-0">
                Book a Steam Clean <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="group relative h-[320px] md:h-[400px] rounded-2xl overflow-hidden border border-[#A7F3D0] ambient-shadow mb-8">
              <img src="/steam-cleaning.jpg" alt="Professional steam carpet cleaning in a Brisbane home" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />

              {/* Dark neutral overlay instead of green */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute inset-0 flex items-center px-7 md:px-12">
                <div className="max-w-md">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest mb-4">Hot Water Extraction</span>
                  <p className="text-white font-display font-bold text-2xl md:text-3xl lg:text-[34px] leading-tight mb-3">Reaches deeper than any vacuum can</p>
                  <p className="hidden md:block text-white/90 text-sm leading-relaxed mb-5">Heated water and eco-safe solution loosen deep-set grime, then high-power suction pulls dirt, moisture and allergens straight out of the pile.</p>
                  <Link href="/book-now" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#059669] text-white rounded-lg font-bold text-sm hover:bg-[#047857] transition-colors shadow-lg">
                    Book a Steam Clean <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Bottom badges with white background */}
              <div className="absolute bottom-5 right-5 hidden lg:flex gap-3">
                <div className="bg-white border border-gray-200 backdrop-blur-md rounded-lg px-3.5 py-2 text-center">
                  <p className="text-[#064E3B] font-display font-bold text-base leading-none">60°C</p>
                  <p className="text-gray-600 text-[10px] font-semibold uppercase tracking-wider mt-0.5">Heated clean</p>
                </div>
                <div className="bg-white border border-gray-200 backdrop-blur-md rounded-lg px-3.5 py-2 text-center">
                  <p className="text-[#064E3B] font-display font-bold text-base leading-none">Eco-safe</p>
                  <p className="text-gray-600 text-[10px] font-semibold uppercase tracking-wider mt-0.5">Solutions</p>
                </div>
                <div className="bg-white border border-gray-200 backdrop-blur-md rounded-lg px-3.5 py-2 text-center">
                  <p className="text-[#064E3B] font-display font-bold text-base leading-none">Kids & pets</p>
                  <p className="text-gray-600 text-[10px] font-semibold uppercase tracking-wider mt-0.5">Safe once dry</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative overflow-hidden bg-white rounded-2xl border border-[#A7F3D0] ambient-shadow p-7 flex flex-col gap-5 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <span className="absolute top-6 right-7 font-display font-bold text-4xl text-[#059669]/10 group-hover:text-[#059669]/20 transition-colors duration-300 select-none">01</span>
                <div>
                  <div className="w-10 h-[3px] bg-[#059669] rounded-full mb-4" />
                  <h3 className="font-display font-bold text-lg text-[#064E3B]">What It Treats</h3>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-2.5 text-sm text-[#064E3B]">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" /> Ground-in dirt & embedded sand
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-[#064E3B]">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" /> Dust mites, pollen & allergens
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-[#064E3B]">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" /> Coffee, tea & food spills
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-[#064E3B]">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" /> Pet accidents & protein marks
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-[#064E3B]">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" /> Heavy foot-traffic wear
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-[#064E3B]">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" /> Persistent odours
                  </li>
                </ul>
              </div>

              <div className="relative overflow-hidden bg-white rounded-2xl border border-[#A7F3D0] ambient-shadow p-7 flex flex-col gap-5 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <span className="absolute top-6 right-7 font-display font-bold text-4xl text-[#059669]/10 group-hover:text-[#059669]/20 transition-colors duration-300 select-none">02</span>
                <div>
                  <div className="w-10 h-[3px] bg-[#059669] rounded-full mb-4" />
                  <h3 className="font-display font-bold text-lg text-[#064E3B]">Tailored Process</h3>
                </div>
                <p className="text-sm text-[#065F46] leading-relaxed">The cleaning process is adapted to carpet condition, fibre type, and soiling level — ensuring a thorough result without overwetting or damaging delicate pile.</p>
                <div className="mt-auto p-4 bg-[#ECFDF5] rounded-xl border border-[#A7F3D0]">
                  <p className="text-xs text-[#065F46] leading-relaxed">Careful preparation ensures consistent results. Every job is assessed on-site before work begins.</p>
                </div>
              </div>

              <div className="relative overflow-hidden bg-white rounded-2xl border border-[#A7F3D0] ambient-shadow p-7 flex flex-col gap-5 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <span className="absolute top-6 right-7 font-display font-bold text-4xl text-[#059669]/10 group-hover:text-[#059669]/20 transition-colors duration-300 select-none">03</span>
                <div>
                  <div className="w-10 h-[3px] bg-[#059669] rounded-full mb-4" />
                  <h3 className="font-display font-bold text-lg text-[#064E3B]">Why Steam?</h3>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between py-3 border-b border-[#A7F3D0]">
                    <span className="text-sm text-[#065F46]">Deeper than vacuuming</span>
                    <span className="text-base font-bold text-[#064E3B]">5×</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-[#A7F3D0]">
                    <span className="text-sm text-[#065F46]">Allergen reduction</span>
                    <span className="text-base font-bold text-[#064E3B]">99%</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-[#A7F3D0]">
                    <span className="text-sm text-[#065F46]">Hot water extraction</span>
                    <span className="text-base font-bold text-[#064E3B]">✓</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-sm text-[#065F46]">Safe for kids & pets</span>
                    <span className="text-base font-bold text-[#064E3B]">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Residential Section */}
        <section className="bg-white">
          <div className="px-5 md:px-16 max-w-[1280px] mx-auto py-24 md:py-32">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1261A0] mb-2 block">Who We Clean For</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#082B59]">Homes, Families & Everything in Between</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden rounded-3xl border border-[#1261A0]/10 bg-[#F2F8FC] shadow-sm hover:shadow-xl hover:border-[#00B8D9]/30 transition-all duration-300 flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80" alt="Residential carpet cleaning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 h-48 bg-gradient-to-b from-transparent to-[#F2F8FC]/90" />
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#1261A0]/20 flex items-center justify-center text-[#1261A0] shadow-sm">
                      <HomeIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#00B8D9]">Home</p>
                      <h3 className="font-display font-bold text-xl text-[#082B59] leading-tight">Residential Carpet Cleaning</h3>
                    </div>
                  </div>
                  <p className="text-sm text-[#082B59]/70 leading-relaxed mb-6">From living rooms to hallways and stairs, carpets gradually darken in high-traffic areas. Our residential service brings life back to every room in your home.</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
                    <div className="flex items-center gap-2 text-xs text-[#082B59]/80">
                      <Check className="w-3.5 h-3.5 text-[#00B8D9] shrink-0" /> Living rooms
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#082B59]/80">
                      <Check className="w-3.5 h-3.5 text-[#00B8D9] shrink-0" /> Family rooms
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#082B59]/80">
                      <Check className="w-3.5 h-3.5 text-[#00B8D9] shrink-0" /> Bedrooms
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#082B59]/80">
                      <Check className="w-3.5 h-3.5 text-[#00B8D9] shrink-0" /> Apartment carpets
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#082B59]/80">
                      <Check className="w-3.5 h-3.5 text-[#00B8D9] shrink-0" /> Hallways & Stairs
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#082B59]/80">
                      <Check className="w-3.5 h-3.5 text-[#00B8D9] shrink-0" /> Dining areas
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#082B59]/80">
                      <Check className="w-3.5 h-3.5 text-[#00B8D9] shrink-0" /> High-traffic areas
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#082B59]/80">
                      <Check className="w-3.5 h-3.5 text-[#00B8D9] shrink-0" /> Rental properties
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Link href="/book-now" className="w-full py-3.5 bg-[#00B8D9] text-[#082B59] text-center rounded-xl font-semibold text-sm hover:bg-white transition-all block">Book Residential Clean</Link>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A3670] shadow-xl flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=80" alt="Pet friendly carpet cleaning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 h-48 bg-gradient-to-b from-transparent to-[#0A3670]/70" />
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#00B8D9]/20 flex items-center justify-center text-[#00B8D9]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#00B8D9]">Families & Pets</p>
                      <h3 className="font-display font-bold text-xl text-white leading-tight">Carpet Cleaning for Families & Pets</h3>
                    </div>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed mb-6">Homes with children and pets demand more from their carpets. We give extra attention to stubborn stains and odours — leaving carpets fresh and safe for the whole family.</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
                    <div className="flex items-center gap-2 text-xs text-white/80">
                      <Check className="w-3.5 h-3.5 text-[#00B8D9] shrink-0" /> Pet accidents
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/80">
                      <Check className="w-3.5 h-3.5 text-[#00B8D9] shrink-0" /> Pet odours
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/80">
                      <Check className="w-3.5 h-3.5 text-[#00B8D9] shrink-0" /> Food & drink spills
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/80">
                      <Check className="w-3.5 h-3.5 text-[#00B8D9] shrink-0" /> Mud & outdoor soil
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/80">
                      <Check className="w-3.5 h-3.5 text-[#00B8D9] shrink-0" /> High-traffic marks
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/80">
                      <Check className="w-3.5 h-3.5 text-[#00B8D9] shrink-0" /> General household dirt
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Link href="/services" className="w-full py-3.5 border border-[#00B8D9]/40 text-[#00B8D9] text-center rounded-xl font-semibold text-sm hover:bg-[#00B8D9]/10 transition-colors block">View Pet & Stain Treatments</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Section */}
        <section className="bg-[#1261A0] text-white py-24 md:py-32">
          <div className="px-5 md:px-16 max-w-[1280px] mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-[#082B59] border border-white/10 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                  <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#00B8D9]/20 text-[#00B8D9] border border-[#00B8D9]/30 text-xs font-bold uppercase tracking-widest mb-5 w-max">Commercial</span>
                  <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-5 leading-tight">Carpet Cleaning for<br />Brisbane Businesses</h2>
                  <p className="text-base text-white/80 leading-relaxed mb-8">Clean carpets make a noticeable difference in offices and commercial environments. Reception areas, hallways and meeting rooms quickly accumulate dirt — we restore them to a professional standard with minimal disruption.</p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    <div className="flex items-center gap-2 text-sm text-white/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00B8D9] shrink-0" /> Offices & Corporate Suites
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00B8D9] shrink-0" /> Showrooms
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00B8D9] shrink-0" /> Retail Businesses
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00B8D9] shrink-0" /> Workplaces
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00B8D9] shrink-0" /> Commercial Properties
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00B8D9] shrink-0" /> Common Areas
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00B8D9] shrink-0" /> Reception Areas
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00B8D9] shrink-0" /> Meeting Rooms
                    </div>
                  </div>
                  <p className="text-xs text-white/70 mb-8 leading-relaxed">Appointments can be arranged around your business operating hours to minimise workplace downtime.</p>
                  <Link href="/book-now" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00B8D9] text-[#082B59] rounded-xl font-bold text-sm hover:bg-white transition-all w-max shadow-md">
                    Get a Commercial Quote <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="bg-[#0A3670] border-t lg:border-t-0 lg:border-l border-white/10 p-8 md:p-12 lg:p-14">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-[#00B8D9]/20 flex items-center justify-center text-[#00B8D9] border border-[#00B8D9]/30">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-white">Our 8-Step Cleaning Approach</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="relative shrink-0">
                        <span className="w-8 h-8 rounded-full bg-[#00B8D9] text-[#082B59] text-xs font-bold flex items-center justify-center">1</span>
                        <div className="absolute left-1/2 -translate-x-1/2 top-8 w-px h-4 bg-white/10" />
                      </div>
                      <div className="pb-1">
                        <h4 className="text-sm font-bold text-white">Carpet Inspection</h4>
                        <p className="text-xs text-white/70 mt-0.5">Assessing material, fibre type and condition.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="relative shrink-0">
                        <span className="w-8 h-8 rounded-full bg-[#00B8D9] text-[#082B59] text-xs font-bold flex items-center justify-center">2</span>
                        <div className="absolute left-1/2 -translate-x-1/2 top-8 w-px h-4 bg-white/10" />
                      </div>
                      <div className="pb-1">
                        <h4 className="text-sm font-bold text-white">Stain & Problem Identification</h4>
                        <p className="text-xs text-white/70 mt-0.5">Pinpointing traffic marks and specific stains.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="relative shrink-0">
                        <span className="w-8 h-8 rounded-full bg-[#00B8D9] text-[#082B59] text-xs font-bold flex items-center justify-center">3</span>
                        <div className="absolute left-1/2 -translate-x-1/2 top-8 w-px h-4 bg-white/10" />
                      </div>
                      <div className="pb-1">
                        <h4 className="text-sm font-bold text-white">Pre-Vacuuming</h4>
                        <p className="text-xs text-white/70 mt-0.5">Lifting dry surface soils and loose debris.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="relative shrink-0">
                        <span className="w-8 h-8 rounded-full bg-[#00B8D9] text-[#082B59] text-xs font-bold flex items-center justify-center">4</span>
                        <div className="absolute left-1/2 -translate-x-1/2 top-8 w-px h-4 bg-white/10" />
                      </div>
                      <div className="pb-1">
                        <h4 className="text-sm font-bold text-white">Pre-Treatment Application</h4>
                        <p className="text-xs text-white/70 mt-0.5">Eco-friendly solutions loosen embedded grime.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="relative shrink-0">
                        <span className="w-8 h-8 rounded-full bg-[#00B8D9] text-[#082B59] text-xs font-bold flex items-center justify-center">5</span>
                        <div className="absolute left-1/2 -translate-x-1/2 top-8 w-px h-4 bg-white/10" />
                      </div>
                      <div className="pb-1">
                        <h4 className="text-sm font-bold text-white">Professional Steam Cleaning</h4>
                        <p className="text-xs text-white/70 mt-0.5">Deep hot water agitation across carpet fibres.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="relative shrink-0">
                        <span className="w-8 h-8 rounded-full bg-[#00B8D9] text-[#082B59] text-xs font-bold flex items-center justify-center">6</span>
                        <div className="absolute left-1/2 -translate-x-1/2 top-8 w-px h-4 bg-white/10" />
                      </div>
                      <div className="pb-1">
                        <h4 className="text-sm font-bold text-white">Hot Water Extraction</h4>
                        <p className="text-xs text-white/70 mt-0.5">High-power suction removes moisture and dirt.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="relative shrink-0">
                        <span className="w-8 h-8 rounded-full bg-[#00B8D9] text-[#082B59] text-xs font-bold flex items-center justify-center">7</span>
                        <div className="absolute left-1/2 -translate-x-1/2 top-8 w-px h-4 bg-white/10" />
                      </div>
                      <div className="pb-1">
                        <h4 className="text-sm font-bold text-white">Stain & Odour Treatment</h4>
                        <p className="text-xs text-white/70 mt-0.5">Targeted spot neutralisation for residual marks.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="relative shrink-0">
                        <span className="w-8 h-8 rounded-full bg-[#00B8D9] text-[#082B59] text-xs font-bold flex items-center justify-center">8</span>
                      </div>
                      <div className="pb-1">
                        <h4 className="text-sm font-bold text-white">Final Quality Inspection</h4>
                        <p className="text-xs text-white/70 mt-0.5">Ensuring pristine results and client satisfaction.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-[#F2F8FC]">
          <div className="px-5 md:px-16 max-w-[1280px] mx-auto py-24 md:py-32">
            <div className="text-center mb-12">
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#082B59] mb-4">What Our Clients Say</h2>
              <p className="text-base text-[#082B59]/70 max-w-xl mx-auto">Real feedback from local Brisbane homeowners and businesses who trust us with their carpet & upholstery care.</p>
            </div>
            <TestimonialMarquee />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white">
          <div className="px-5 md:px-16 max-w-[1280px] mx-auto py-24 md:py-32">
            <FaqSection />
          </div>
        </section>

        {/* Service Area Section */}
        <section className="bg-[#F2F8FC]">
          <div className="px-5 md:px-16 max-w-[1280px] mx-auto py-24 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#1261A0] mb-3 block">Where We Work</span>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-[#082B59] mb-4 leading-tight">Serving Brisbane & Surrounds</h2>
                <p className="text-sm text-[#082B59]/70 leading-relaxed mb-6">We cover Brisbane City and surrounding suburbs. Not sure if we service your area? Send us a message and we'll get back to you.</p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2.5 text-sm text-[#082B59]/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00B8D9] shrink-0" /> Brisbane City
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-[#082B59]/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00B8D9] shrink-0" /> Northside & Southside
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-[#082B59]/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00B8D9] shrink-0" /> Inner West & East
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-[#082B59]/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00B8D9] shrink-0" /> Bayside Suburbs
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-[#082B59]/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00B8D9] shrink-0" /> Logan & Redlands
                  </div>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1261A0] text-white rounded-xl font-bold text-sm hover:bg-[#082B59] transition-all w-max">Contact Us</Link>
              </div>
            </div>

            {/* Full-width map */}
            <div className="rounded-2xl overflow-hidden border border-[#E2EDF6] shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56571.233!2d153.0127565!3d-27.4703947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a045cf620bb%3A0x502a35af3de84c0!2sBrisbane+City+QLD!5e0!3m2!1sen!2sau!4v1"
                width="100%"
                height="460"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carpet Cleaner Brisbane service area"
              />
            </div>

          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-[#0F172A] text-white">
          <div className="px-5 md:px-16 max-w-[1280px] mx-auto py-24 md:py-32">
            <div className="bg-gradient-to-r from-[#1E293B] to-[#0F172A] border border-white/10 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#059669]/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#D97706]/20 blur-3xl pointer-events-none" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#F59E0B] bg-[#F59E0B]/20 border border-[#F59E0B]/30 mb-6">Book Online</span>
                <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">Ready for Clean Carpets in Brisbane?</h2>
                <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed font-medium">Book online in a couple of minutes. No upfront payment, no fuss.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/book-now" className="px-8 py-4 bg-[#F59E0B] text-[#78350F] rounded-lg font-bold text-base hover:bg-white transition-all shadow-lg hover:-translate-y-0.5">Book Online Now</Link>
                  <Link href="/contact" className="px-8 py-4 border border-white/30 text-white rounded-lg font-semibold text-base hover:bg-white/10 transition-colors">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}