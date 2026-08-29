import Link from 'next/link';
import { Metadata } from 'next';
import {
  ShieldCheck, HeartHandshake, CheckCircle2, Droplets, Search,
  UserCheck, Quote, ArrowRight, Sparkles, Leaf, Award, Clock
} from 'lucide-react';
import aboutBanner from '@/assets/about/about_banner.png';
import structuredApproach from '@/assets/about/structured_approach.png';

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'About Us | Professional Carpet Cleaning Brisbane',
  description: 'Expert carpet cleaning services for homes, rentals, and offices in Brisbane. Deep steam cleaning, eco-friendly solutions, and meticulous attention to detail.',
=======
  title: 'About Us | Carpet Cleaner',
  description: 'Learn about Carpet Cleaner story, our eco-friendly carpet cleaning methodology, certified team, and commitment to professional serenity.',
>>>>>>> b64c80ff9e7053c6206f6f4a932e49ca9a15680f
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
      {/* Header Banner */}
      <section
        className="relative py-32 md:py-40 px-5 md:px-16 overflow-hidden"
        style={{
          backgroundImage: `url(${aboutBanner.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Reduced opacity overlay - more natural look */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/40"></div>

        <div className="relative z-10 max-w-[1280px] mx-auto text-center pt-8">
          {/* Removed Sparkles icon as requested */}
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-white mb-6 px-6 py-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-md">
            About Our Company
          </span>
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight">
            Professional Carpet Cleaners<br className="hidden md:block" /> Serving Brisbane
          </h1>
<<<<<<< HEAD
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Providing thorough, reliable carpet cleaning services for homes, rental properties,
            offices, and businesses throughout Brisbane. We go beyond a quick surface clean
            to properly address accumulated dirt and stains.
=======
          <p className="text-base md:text-lg text-[#43474d] max-w-2xl mx-auto leading-relaxed">
            Carpet Cleaner was founded on a simple philosophy: home should be a serene sanctuary. We combine cutting-edge textile science with eco-safe care.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#001b31] mb-6">
              Meticulous Care for Every Fiber
            </h2>
            <p className="text-base text-[#43474d] mb-6 leading-relaxed">
              Established in Melbourne, Carpet Cleaner set out to replace harsh chemical carpet cleaning with refined, eco-friendly steam extraction techniques. We believe clean carpets are essential to healthy indoor living.
            </p>
            <p className="text-base text-[#43474d] mb-8 leading-relaxed">
              Our technicians undergo rigorous IICRC training, mastering color-fastness inspection, fiber chemistry, and underlayment sanitization.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#ddeaf2]">
              <div>
                <span className="font-display font-bold text-3xl text-[#001b31]">12,500+</span>
                <p className="text-xs font-semibold text-[#43474d] mt-1">Homes Restored</p>
              </div>
              <div>
                <span className="font-display font-bold text-3xl text-[#001b31]">99.8%</span>
                <p className="text-xs font-semibold text-[#43474d] mt-1">Satisfaction Rate</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl border border-[#d7e4ec]">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
              alt="Carpet Cleaner Technician at work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="bg-[#f4faff] py-20 px-5 md:px-16 border-y border-[#d7e4ec] mb-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#001b31] mb-4">
              Our Core Principles
            </h2>
            <p className="text-base text-[#43474d] max-w-xl mx-auto">
              Guiding every home visit with integrity, precision, and environmental care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#d7e4ec] ambient-shadow">
              <div className="w-14 h-14 rounded-xl bg-[#b4ebfd]/30 flex items-center justify-center mb-6 text-[#2d6675]">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#001b31] mb-3">100% Non-Toxic</h3>
              <p className="text-sm text-[#43474d] leading-relaxed">
                All solutions are 100% biodegradable and free of harsh synthetic fumes, protecting children and pets.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#d7e4ec] ambient-shadow">
              <div className="w-14 h-14 rounded-xl bg-[#b4ebfd]/30 flex items-center justify-center mb-6 text-[#2d6675]">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#001b31] mb-3">Certified Expertise</h3>
              <p className="text-sm text-[#43474d] leading-relaxed">
                Our technicians are fully licensed, insured, and certified in textile stain removal and fiber restoration.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#d7e4ec] ambient-shadow">
              <div className="w-14 h-14 rounded-xl bg-[#b4ebfd]/30 flex items-center justify-center mb-6 text-[#2d6675]">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#001b31] mb-3">Absolute Integrity</h3>
              <p className="text-sm text-[#43474d] leading-relaxed">
                Upfront pricing with no hidden fees. If a stain cannot be removed without damaging your carpet, we inform you honestly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto mb-24">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#001b31] mb-4">
            Meet Our Senior Specialists
          </h2>
          <p className="text-base text-[#43474d] max-w-xl mx-auto">
            Dedicated professionals committed to bringing serene cleanliness into your home.
>>>>>>> b64c80ff9e7053c6206f6f4a932e49ca9a15680f
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>


      {/* Floating Stats Strip */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-16 -mt-16 relative z-20">
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
              <Sparkles className="w-4 h-4" />
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
              <Sparkles className="w-4 h-4" />
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