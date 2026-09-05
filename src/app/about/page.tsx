import Link from 'next/link';
import NextImage from 'next/image';
import { Metadata } from 'next';
import {
  ShieldCheck, HeartHandshake, CheckCircle2, Droplets, Search,
  UserCheck, Quote, ArrowRight, Leaf, Award, Clock, ClipboardCheck
} from 'lucide-react';
import aboutBanner from '@/assets/about/about_banner.png';

export const metadata: Metadata = {
  title: 'About Us | Professional Carpet Cleaners in Brisbane',
  description: 'Learn about Carpet Cleaner Brisbane — a professional carpet cleaning team serving homes, rentals and businesses across Brisbane with eco-friendly steam cleaning.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us | Professional Carpet Cleaners in Brisbane',
    description: 'Professional carpet cleaning team serving homes, rentals and businesses across Brisbane. Eco-friendly solutions, fully insured, locally based.',
    url: '/about',
  },
};

const STATS = [
  { value: 'Eco', label: 'Friendly Solutions', icon: Leaf },
  { value: 'Local', label: 'Brisbane Based', icon: Clock },
  { value: 'Fully', label: 'Licensed & Insured', icon: ShieldCheck },
  { value: '100%', label: 'Satisfaction', icon: Award },
];

const PROCESS_STEPS = [
  { title: 'Carpet Inspection', desc: 'Assessing material, fibre type and condition.' },
  { title: 'Stain & Problem Identification', desc: 'Pinpointing traffic marks and specific stains.' },
  { title: 'Pre-Vacuuming', desc: 'Lifting dry surface soils and loose debris.' },
  { title: 'Pre-Treatment Application', desc: 'Eco-friendly solutions loosen embedded grime.' },
  { title: 'Professional Steam Cleaning', desc: 'Deep hot water agitation across carpet fibres.' },
  { title: 'Hot Water Extraction', desc: 'High-power suction removes moisture and dirt.' },
  { title: 'Stain & Odour Treatment', desc: 'Targeted spot neutralisation for residual marks.' },
  { title: 'Final Quality Inspection', desc: 'Ensuring pristine results and client satisfaction.' },
];

const FEATURES = [
  { icon: Droplets, title: 'Proper Equipment', desc: 'We use commercial-grade hot water extraction machines, not the supermarket hire ones. They heat the water properly and actually pull the dirt out rather than just pushing it around.' },
  { icon: ShieldCheck, title: 'Safe Products', desc: 'Everything we use is fine for kids and pets once the carpet is dry. We don\'t use anything overpowering or likely to irritate anyone in the house.' },
  { icon: Search, title: 'We Look Properly', desc: 'Before we start, we check the carpet, the fibre type, where the traffic marks are, what the stains might be. That way we\'re not guessing.' },
  { icon: UserCheck, title: 'No Hidden Charges', desc: 'The price we quote is the price you pay. No surprise fees, no unexpected costs, just clear, upfront pricing.' },
];

const TAGS = [
  'Professional Grade Inspection',
  'Pre-vacuuming & Pre-treatment',
  'Professional Steam Extraction',
  'Final Quality Inspection'
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      {/* Header Banner - Navy */}
      <section className="relative py-24 md:py-32 px-5 md:px-16 overflow-hidden">
        <NextImage 
          src={aboutBanner} 
          alt="Professional carpet cleaners serving Brisbane" 
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover object-center" 
        />
        {/* Subtle dark tint to ensure white text remains readable without hiding the image */}
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 max-w-[1280px] mx-auto text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight drop-shadow-lg">
            Professional Carpet Cleaners<br />
            <span className="text-[#F2F8FC]">Serving Brisbane</span>
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            A Brisbane carpet cleaning team that does the job properly. We work in homes, rentals and offices — and we show up when we say we will.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {[
              { label: 'Our Approach', href: '#our-approach' },
              { label: 'Why Choose Us', href: '#why-choose-us' },
              { label: 'Our Process', href: '#our-process' },
            ].map(({ label, href }) => (
              <a key={label} href={href} className="px-4 py-1.5 bg-white/10 hover:bg-[#00B8D9] hover:text-[#082B59] border border-white/20 text-white text-xs font-semibold rounded-full backdrop-blur-sm transition-all">
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* Floating Stats Strip - Light Background */}
      <section className="bg-[#F2F8FC] py-16 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-[#1261A0]/20 p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="group flex flex-col items-center p-4 rounded-xl hover:-translate-y-1 transition-transform duration-300 cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-[#082B59] flex items-center justify-center mb-3 text-white shadow-sm group-hover:bg-[#00B8D9] transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-display font-bold text-2xl md:text-3xl text-[#082B59]">{stat.value}</span>
                  <span className="text-xs font-semibold text-[#082B59] mt-2 uppercase tracking-wider text-center">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Intro Section - Solid Navy (heading + description left, 4 tags right) */}
      <section id="our-approach" className="bg-[#082B59] text-white py-28 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: heading + description */}
          <div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-8 leading-tight">
              A Structured Approach to Every Job
            </h2>
            <p className="text-base text-white/80 mb-6 leading-relaxed text-lg">
              We understand that customers want their carpets to look fresher and feel cleaner. That is why we take a structured approach. Before cleaning begins, we inspect the carpet to identify its condition, high-traffic areas, visible stains, and any specific concerns.
            </p>
            <p className="text-base text-white/80 leading-relaxed text-lg">
              Different carpets have different fibres and cleaning requirements. A heavily trafficked hallway needs different attention than a lightly used bedroom. Our technicians assess the carpet first, ensuring the right care is applied from the start.
            </p>
          </div>

          {/* Right: 4 tags beside the description (fills the desktop gap) */}
          <div className="grid grid-cols-1 gap-4 lg:border-l lg:border-white/10 lg:pl-12">
            {TAGS.map((item, i) => (
              <div
                key={i}
                className="group flex items-center gap-3 px-5 py-4 rounded-xl bg-[#1261A0] border border-white/10 shadow-sm hover:bg-[#1261A0]/80 hover:-translate-y-1 transition-all duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-[#00B8D9] shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm font-semibold text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps - 8-Step Navy Card (matches homepage design) */}
      <section id="our-process" className="bg-[#F2F8FC] py-28 px-5 md:px-16 relative overflow-hidden">
        {/* Scroll-driven reveal animations (pure CSS, graceful fallback) */}
        <style>{`
          @keyframes ac-rise { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes ac-slide { from { opacity: 0; transform: translateX(-24px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes ac-grow { from { transform: scaleY(0); } to { transform: scaleY(1); } }
          @media (prefers-reduced-motion: no-preference) {
            @supports (animation-timeline: view()) {
              .ac-reveal { animation: ac-rise both ease-out; animation-timeline: view(); animation-range: entry 5% entry 40%; }
              .ac-step { animation: ac-slide both ease-out; animation-timeline: view(); animation-range: entry 0% entry 50%; }
              .ac-spine { transform-origin: top; animation: ac-grow both ease-out; animation-timeline: view(); animation-range: entry 0% exit 55%; }
            }
          }
        `}</style>

        {/* Soft ambient accents */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#1261A0]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#00B8D9]/10 blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto relative">
          {/* Navy gradient card — same look as the homepage panel */}
          <div className="ac-reveal relative rounded-3xl overflow-hidden shadow-2xl border border-[#082B59]/40 bg-gradient-to-br from-[#082B59] via-[#0A3470] to-[#1261A0]">
            {/* Inner glow blobs */}
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#00B8D9]/10 blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#1261A0]/40 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 p-8 md:p-14 lg:p-16">
              {/* Left: heading */}
              <div className="lg:pr-10 lg:border-r border-white/10 flex flex-col justify-center">
                <span className="inline-flex self-start items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00B8D9] mb-5 px-4 py-2 rounded-full bg-[#00B8D9]/10 border border-[#00B8D9]/25">
                  How We Work
                </span>
                <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
                  Our 8-Step Cleaning Process
                </h2>
                <p className="text-white/75 text-lg leading-relaxed mb-6">
                  A meticulous, proven methodology to ensure your carpets are restored to their best condition.
                </p>
                <p className="text-white/60 text-base leading-relaxed mb-10">
                  Every job follows the same structured routine — from the first inspection to the final walkthrough — so the result is never left to chance.
                </p>

                <Link
                  href="/contact"
                  className="group inline-flex self-start items-center gap-3 px-8 py-3.5 bg-[#00B8D9] text-[#082B59] font-bold rounded-xl hover:bg-white transition-colors duration-300 shadow-lg"
                >
                  Book Online

                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right: 8-step timeline (homepage style) */}
              <div>
                <div className="flex items-center gap-3 mb-9">
                  <div className="w-10 h-10 rounded-lg bg-[#00B8D9]/15 border border-[#00B8D9]/30 flex items-center justify-center shrink-0">
                    <ClipboardCheck className="w-5 h-5 text-[#00B8D9]" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">Our 8-Step Cleaning Approach</h3>
                </div>

                <ol className="relative">
                  {/* Connector spine — grows top→bottom on scroll */}
                  <span
                    aria-hidden="true"
                    className="ac-spine absolute left-5 top-2 bottom-2 w-px -ml-px bg-gradient-to-b from-[#00B8D9]/70 via-white/15 to-[#00B8D9]/70"
                  />

                  {PROCESS_STEPS.map((item, i) => (
                    <li key={item.title} className="ac-step group relative flex gap-4 pb-7 last:pb-0">
                      {/* Numbered cyan circle */}
                      <span className="relative z-10 w-10 h-10 shrink-0 rounded-full bg-[#00B8D9] text-[#082B59] text-sm font-extrabold flex items-center justify-center shadow-[0_0_0_5px_rgba(0,184,217,0.12)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_0_8px_rgba(0,184,217,0.18),0_0_24px_rgba(0,184,217,0.55)]">
                        {i + 1}
                      </span>

                      <div className="pt-1">
                        <h4 className="text-white font-bold text-sm md:text-base transition-colors duration-300 group-hover:text-[#00B8D9]">
                          {item.title}
                        </h4>
                        <p className="text-white/60 text-xs md:text-sm mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Warm Amber Theme */}
      <section id="why-choose-us" className="bg-[#FFFBEB] py-28 px-5 md:px-16 border-y border-[#F59E0B]/20">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B45309] mb-4 px-4 py-2 rounded-full bg-[#FEF3C7] border border-[#F59E0B]/30">
              <Award className="w-4 h-4 text-[#D97706]" />
              Why Choose Us
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#78350F] mb-6">The FreshNest Difference</h2>
            <p className="text-base text-[#92400E] max-w-2xl mx-auto text-lg">Professional results driven by quality equipment, safe solutions, and genuine care for your property.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map((item, i) => (
              <div key={i} className="group bg-white p-8 rounded-2xl border border-[#F59E0B]/20 hover:border-[#D97706] transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-[#D97706] flex items-center justify-center text-white shadow-sm group-hover:bg-[#B45309] transition-colors duration-300">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl text-[#78350F] mb-3">{item.title}</h3>
                    <p className="text-sm text-[#92400E] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Quote Break - Emerald Green Theme */}
      <section className="bg-white px-5 md:px-16 py-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="relative bg-[#059669] border border-white/10 rounded-3xl p-12 md:p-20 overflow-hidden text-center shadow-2xl">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#34D399]/20 blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-[#34D399] flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Quote className="w-8 h-8 text-[#064E3B]" />
              </div>
              <blockquote className="font-display text-2xl md:text-4xl text-white font-medium leading-relaxed mb-10 italic">
                "Inviting a cleaner into your home requires trust. We aim to provide a professional, respectful service from the initial inspection right through to the final walkthrough."
              </blockquote>
              <div className="w-24 h-1.5 bg-[#34D399] mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Navy */}
      <section className="bg-[#082B59] px-5 md:px-16 py-16 text-center">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-[#1261A0] rounded-3xl p-12 md:p-20 border border-[#00B8D9]/30">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-[#00B8D9] flex items-center justify-center mx-auto mb-8 shadow-lg">
                <HeartHandshake className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6">
                Ready for Fresher, Cleaner Carpets?
              </h2>
              <p className="text-base text-white/90 mb-10 leading-relaxed text-lg">
                Experience the difference of a truly professional clean. Book your service today and let us restore the serenity of your home.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#00B8D9] text-[#082B59] font-bold rounded-xl hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-xl group">
                Book Online
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}