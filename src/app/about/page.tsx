import Link from 'next/link';
import { Metadata } from 'next';
import {
  ShieldCheck, HeartHandshake, CheckCircle2, Droplets, Search,
  UserCheck, Quote, ArrowRight, Leaf, Award, Clock
} from 'lucide-react';
import aboutBanner from '@/assets/about/about_banner.png';
import structuredApproach from '@/assets/about/structured_approach.png';

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
  { step: '01', title: 'Check the Carpet', desc: 'We look at the fibre type, worn areas and any specific stains before touching anything.' },
  { step: '02', title: 'Pre-vacuum & Pre-treat', desc: 'Dry soil gets vacuumed out first. Stains get a targeted treatment before the main clean.' },
  { step: '03', title: 'Steam Extraction', desc: 'Hot water goes in, dirt and moisture come straight back out. That\'s the whole process.' },
  { step: '04', title: 'Check the Result', desc: 'We walk through with you at the end. If something\'s not right, we sort it before we leave.' },
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
        <img src={aboutBanner.src} alt="Professional carpet cleaners serving Brisbane" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-[#082B59]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#082B59]/30 via-transparent to-[#082B59]/40" />

        <div className="relative z-10 max-w-[1280px] mx-auto text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight drop-shadow-lg">
            Professional Carpet Cleaners<br />
            <span className="text-[#F2F8FC]">Serving Brisbane</span>
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
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

      {/* Intro Section - Solid Navy Section */}
      <section id="our-approach" className="bg-[#082B59] text-white py-28 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00B8D9] mb-4 px-4 py-2 rounded-full bg-[#00B8D9]/10 border border-[#00B8D9]/20">
              Our Approach
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-8 leading-tight">
              A Structured Approach to Every Job
            </h2>
            <p className="text-base text-white/80 mb-6 leading-relaxed text-lg">
              We understand that customers want their carpets to look fresher and feel cleaner. That is why we take a structured approach. Before cleaning begins, we inspect the carpet to identify its condition, high-traffic areas, visible stains, and any specific concerns.
            </p>
            <p className="text-base text-white/80 mb-10 leading-relaxed text-lg">
              Different carpets have different fibres and cleaning requirements. A heavily trafficked hallway needs different attention than a lightly used bedroom. Our technicians assess the carpet first, ensuring the right care is applied from the start.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TAGS.map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-[#1261A0] border border-white/10 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#00B8D9] shrink-0" />
                  <span className="text-sm font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="lg:hidden mb-4">
              <div className="bg-[#1261A0] rounded-xl p-4 shadow-md border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00B8D9] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#082B59]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#00B8D9] uppercase tracking-wider">Professional Grade</p>
                  <p className="text-sm font-semibold text-white">Inspection & Assessment</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="relative h-[400px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#1261A0]">
                <img src={structuredApproach.src} alt="Professional carpet cleaning equipment and inspection process" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                <div className="hidden lg:flex absolute bottom-6 left-6 right-6 bg-[#082B59]/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00B8D9] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-[#082B59]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#00B8D9] uppercase tracking-wider">Professional Grade</p>
                    <p className="text-sm font-semibold text-white">Inspection & Assessment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps - Light Blue */}
      <section id="our-process" className="bg-[#F2F8FC] py-28 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1261A0] mb-4 px-4 py-2 rounded-full bg-[#1261A0]/10 border border-[#1261A0]/20">How We Work</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#082B59] mb-6">Our 4-Step Cleaning Process</h2>
            <p className="text-base text-[#082B59]/80 max-w-2xl mx-auto text-lg">A meticulous, proven methodology to ensure your carpets are restored to their best condition.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((item, i) => (
              <div key={i} className="group relative bg-white p-8 rounded-2xl border border-[#1261A0]/10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <span className="font-display font-bold text-6xl text-[#1261A0]/5 absolute top-4 right-6 select-none group-hover:scale-110 group-hover:text-[#1261A0]/10 transition-all duration-500">
                  {item.step}
                </span>

                <div className="w-14 h-14 rounded-xl bg-[#1261A0] flex items-center justify-center mb-6 text-white shadow-sm group-hover:bg-[#00B8D9] transition-colors duration-300 relative z-10">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <h3 className="font-display font-bold text-xl text-[#082B59] mb-3 relative z-10">{item.title}</h3>
                <p className="text-sm text-[#082B59]/70 leading-relaxed relative z-10">{item.desc}</p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#00B8D9] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
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
                Book Your Clean Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}