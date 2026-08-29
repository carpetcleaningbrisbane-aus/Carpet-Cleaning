import Link from 'next/link';
import { TEAM } from '@/data/siteData';
import { ShieldCheck, Award, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | FreshNest Premium Carpet Care',
  description: 'Learn about FreshNest story, our eco-friendly carpet cleaning methodology, certified team, and commitment to professional serenity.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24">
      {/* Header Banner */}
      <section className="bg-[#e9f6fd] py-16 px-5 md:px-16 border-b border-[#d7e4ec] mb-16">
        <div className="max-w-[1280px] mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2d6675] mb-2 block">
            Our Story & Heritage
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-[#001b31] mb-6">
            Elevating the Standard of Clean
          </h1>
          <p className="text-base md:text-lg text-[#43474d] max-w-2xl mx-auto leading-relaxed">
            FreshNest was founded on a simple philosophy: home should be a serene sanctuary. We combine cutting-edge textile science with eco-safe care.
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
              Established in Melbourne, FreshNest set out to replace harsh chemical carpet cleaning with refined, eco-friendly steam extraction techniques. We believe clean carpets are essential to healthy indoor living.
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
              alt="FreshNest Carpet Care Technician at work"
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
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((member) => (
            <div key={member.id} className="bg-white rounded-3xl overflow-hidden border border-[#d7e4ec] ambient-shadow">
              <div className="h-64 overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-[#2d6675] uppercase tracking-wider block mb-1">
                  {member.experience}
                </span>
                <h3 className="font-display font-bold text-xl text-[#001b31]">{member.name}</h3>
                <p className="text-xs font-semibold text-[#73777e] mb-3">{member.role}</p>
                <p className="text-sm text-[#43474d] leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
