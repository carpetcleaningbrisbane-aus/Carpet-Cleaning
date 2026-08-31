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
  { step: '01', title: 'Inspect & Assess', desc: 'We evaluate carpet fibres, traffic areas, and specific stains before starting.' },
  { step: '02', title: 'Pre-Treat & Vacuum', desc: 'Targeted pre-treatment breaks down deep-set grime and allergens.' },
  { step: '03', title: 'Deep Steam Extraction', desc: 'Professional heated extraction removes dirt, moisture, and residues.' },
  { step: '04', title: 'Final Walkthrough', desc: 'We inspect every corner with you to ensure complete satisfaction.' },
];

const FEATURES = [
  { icon: Droplets, title: 'Professional Equipment', desc: 'Heated water and cleaning solutions are deeply injected and extracted, removing embedded dirt, allergens, grime, and odours rather than just moving them around.' },
  { icon: ShieldCheck, title: 'Careful Solutions', desc: 'Products are selected for both effectiveness and household safety. Safe for children, pets, and those with allergies or specific sensitivities.' },
  { icon: Search, title: 'Attention to Detail', desc: 'High-traffic areas, corners, entrances, and spaces around furniture receive targeted pre-treatment and additional focus before the main clean.' },
  { icon: UserCheck, title: 'Customer-Focused', desc: 'We respect your space. From clear communication about the process to a careful final walkthrough, we ensure you are completely satisfied.' },
];

const TAGS = [
  'Professional Grade Inspection',
  'Pre-vacuuming & Pre-treatment',
  'Professional Steam Extraction',
  'Final Quality Inspection'
];

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 bg-white">

      {/* Header Banner */}
      <section className="relative py-24 md:py-32 px-5 md:px-16 mb-20 overflow-hidden">
        <img
          src={aboutBanner.src}
          alt="Professional carpet cleaners serving Brisbane"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

        <div className="relative z-10 max-w-[1280px] mx-auto text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight drop-shadow-lg">
            Professional Carpet Cleaners<br />
            <span className="text-[#b4ebfd]">Serving Brisbane</span>
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Providing thorough, reliable carpet cleaning services for homes, rental properties, offices and businesses throughout Brisbane. We go beyond a quick surface clean to properly address accumulated dirt and stains.
          </p>

          {/* Quick-nav pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {['Our Approach', 'Why Choose Us', 'Our Process', 'Service Areas'].map((label) => (
              <span
                key={label}
                className="px-4 py-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold rounded-full backdrop-blur-sm"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* Floating Stats Strip */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-[#d7e4ec] p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="group flex flex-col items-center p-4 rounded-xl hover:-translate-y-1 transition-transform duration-300 cursor-default">
                <div className="w-12 h-12 rounded-xl bg-[#001b31] flex items-center justify-center mb-3 text-white shadow-sm group-hover:bg-[#2d6675] transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-display font-bold text-2xl md:text-3xl text-[#001b31]">{stat.value}</span>
                <span className="text-xs font-semibold text-[#43474d] mt-2 uppercase tracking-wider text-center">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Intro Section */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d97706] mb-4 px-4 py-2 rounded-full bg-[#d97706]/10">
              Our Approach
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#001b31] mb-8 leading-tight">
              A Structured Approach to Every Job
            </h2>
            <p className="text-base text-[#43474d] mb-6 leading-relaxed text-lg">
              We understand that customers want their carpets to look fresher and feel cleaner. That is why we take a structured approach. Before cleaning begins, we inspect the carpet to identify its condition, high-traffic areas, visible stains, and any specific concerns.
            </p>
            <p className="text-base text-[#43474d] mb-10 leading-relaxed text-lg">
              Different carpets have different fibres and cleaning requirements. A heavily trafficked hallway needs different attention than a lightly used bedroom. Our technicians assess the carpet first, ensuring the right care is applied from the start.
            </p>

            {/* Tags Grid - Changed to 2x2 layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TAGS.map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-[#f4faff] border border-[#d7e4ec] shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#d97706] shrink-0" />
                  <span className="text-sm font-semibold text-[#001b31]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            {/* Mobile: Badge as separate card ABOVE image */}
            <div className="lg:hidden mb-4">
              <div className="bg-white rounded-xl p-4 shadow-md border border-[#d7e4ec] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#d97706] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#001b31] uppercase tracking-wider">Professional Grade</p>
                  <p className="text-sm font-semibold text-[#43474d]">Inspection & Assessment</p>
                </div>
              </div>
            </div>

            {/* Image Container */}
            <div className="relative group">
              <div className="relative h-[400px] md:h-[550px] rounded-2xl overflow-hidden shadow-xl border border-[#d7e4ec] bg-white">
                <img
                  src={structuredApproach.src}
                  alt="Professional carpet cleaning equipment and inspection process"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Desktop: Badge overlaid on image */}
                <div className="hidden lg:flex absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-[#d7e4ec] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#d97706] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#001b31] uppercase tracking-wider">Professional Grade</p>
                    <p className="text-sm font-semibold text-[#43474d]">Inspection & Assessment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-[#fafaf9] py-28 px-5 md:px-16 border-y border-[#e5e7eb]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d97706] mb-4 px-4 py-2 rounded-full bg-[#d97706]/10">
              How We Work
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#001b31] mb-6">
              Our 4-Step Cleaning Process
            </h2>
            <p className="text-base text-[#43474d] max-w-2xl mx-auto text-lg">
              A meticulous, proven methodology to ensure your carpets are restored to their best condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((item, i) => (
              <div key={i} className="group relative bg-white p-8 rounded-2xl border border-[#d7e4ec] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Background Number with Scale Animation */}
                <span className="font-display font-bold text-6xl text-[#e9f6fd] absolute top-4 right-6 select-none group-hover:scale-110 group-hover:text-[#d7e4ec] transition-all duration-500">
                  {item.step}
                </span>

                <div className="w-14 h-14 rounded-xl bg-[#2d6675] flex items-center justify-center mb-6 text-white shadow-sm group-hover:bg-[#001b31] transition-colors duration-300 relative z-10">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <h3 className="font-display font-bold text-xl text-[#001b31] mb-3 relative z-10">{item.title}</h3>
                <p className="text-sm text-[#43474d] leading-relaxed relative z-10">{item.desc}</p>

                {/* Gold Bottom Bar Animation */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#d97706] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-28 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d97706] mb-4 px-4 py-2 rounded-full bg-[#d97706]/10">
              <Award className="w-4 h-4" />
              Why Choose Us
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#001b31] mb-6">
              The FreshNest Difference
            </h2>
            <p className="text-base text-[#43474d] max-w-2xl mx-auto text-lg">
              Professional results driven by quality equipment, safe solutions, and genuine care for your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map((item, i) => (
              <div key={i} className="group bg-[#fafaf9] p-8 rounded-2xl border border-[#e5e7eb] hover:border-[#2d6675]/30 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-[#001b31] flex items-center justify-center text-white shadow-sm group-hover:bg-[#2d6675] transition-colors duration-300">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl text-[#001b31] mb-3">{item.title}</h3>
                    <p className="text-sm text-[#43474d] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Quote Break */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto py-20">
        <div className="relative bg-[#001b31] rounded-3xl p-12 md:p-20 overflow-hidden text-center shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Changed icon color from Orange to Teal to match theme */}
            <div className="w-16 h-16 rounded-2xl bg-[#2d6675] flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Quote className="w-8 h-8 text-white" />
            </div>
            <blockquote className="font-display text-2xl md:text-4xl text-white font-medium leading-relaxed mb-10 italic">
              "Inviting a cleaner into your home requires trust. We aim to provide a professional, respectful service from the initial inspection right through to the final walkthrough."
            </blockquote>
            <div className="w-24 h-1.5 bg-[#d97706] mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto py-16 text-center">
        <div className="bg-[#fafaf9] rounded-3xl p-12 md:p-20 border border-[#e5e7eb]">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[#001b31] flex items-center justify-center mx-auto mb-8 shadow-lg">
              <HeartHandshake className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#001b31] mb-6">
              Ready for Fresher, Cleaner Carpets?
            </h2>
            <p className="text-base text-[#43474d] mb-10 leading-relaxed text-lg">
              Experience the difference of a truly professional clean. Book your service today and let us restore the serenity of your home.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#001b31] text-white font-bold rounded-xl hover:bg-[#2d6675] transition-colors duration-300 shadow-lg hover:shadow-xl group"
            >
              Book Your Clean Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}