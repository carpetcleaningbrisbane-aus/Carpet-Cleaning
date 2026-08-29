import Link from 'next/link';
import Image from 'next/image';
import { Star, Waves, Sparkles, Armchair, ArrowRight, ShieldCheck, CheckCircle2, Award, Clock } from 'lucide-react';
import { SERVICES, REVIEWS } from '@/data/siteData';

export default function HomePage() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
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
                  Trusted by Local Homeowners
                </span>
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-[#001b31] mb-6 leading-[1.15] tracking-tight">
                Bring Your Carpets <br />
                <span className="text-[#2d6675]">Back to Life.</span>
              </h1>
              <p className="text-base md:text-lg text-[#43474d] mb-10 max-w-xl leading-relaxed">
                Professional carpet cleaning that removes deep dirt, stains and odors — leaving your home fresher, healthier and beautifully clean.
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
              <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-[#ddeaf2]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#2d6675]" />
                  <span className="text-xs font-semibold text-[#111d23]">Eco-Friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#2d6675]" />
                  <span className="text-xs font-semibold text-[#111d23]">Fast 2h Dry</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#2d6675]" />
                  <span className="text-xs font-semibold text-[#111d23]">Bond Back</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-[380px] sm:h-[480px] lg:h-[600px] rounded-2xl overflow-hidden ambient-shadow border border-[#d7e4ec]">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
              alt="Pristine light-colored carpet in modern sunlit living room"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001b31]/40 via-transparent to-transparent lg:hidden" />
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto mb-24 md:mb-32">
        <div className="text-center mb-16">
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#001b31] mb-4">
            Our Core Services
          </h2>
          <p className="text-base text-[#43474d] max-w-2xl mx-auto">
            Meticulous attention to detail for every fiber of your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-2xl border border-[#d7e4ec] ambient-shadow hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              <div className="w-16 h-16 rounded-xl bg-[#b4ebfd]/30 flex items-center justify-center mb-6 text-[#001b31]">
                {service.iconName === 'Waves' && <Waves className="w-8 h-8 text-[#2d6675]" />}
                {service.iconName === 'Sparkles' && <Sparkles className="w-8 h-8 text-[#2d6675]" />}
                {service.iconName === 'Armchair' && <Armchair className="w-8 h-8 text-[#2d6675]" />}
              </div>
              <div className="inline-block px-3 py-1 bg-[#b4ebfd]/40 text-[#001b31] rounded-xl font-semibold text-xs mb-4 w-max">
                {service.tag}
              </div>
              <h3 className="font-display font-semibold text-2xl text-[#001b31] mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-[#43474d] flex-grow mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link
                href={`/services#${service.id}`}
                className="inline-flex items-center text-[#001b31] font-semibold text-sm group-hover:text-[#2d6675] transition-colors"
              >
                Learn More{' '}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Banner */}
      <section className="bg-[#e9f6fd] py-20 px-5 md:px-16 mb-24 md:mb-32 border-y border-[#d7e4ec]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#2d6675] mb-2 block">
              The FreshNest Difference
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#001b31] mb-6">
              Why Discerning Homeowners Choose Us
            </h2>
            <p className="text-base text-[#43474d] mb-8 leading-relaxed">
              We go far beyond surface cleaning. Our state-of-the-art steam extraction and proprietary non-toxic formulas protect your family and pets while restoring carpets to pristine condition.
            </p>
            <div className="space-y-4">
              {[
                'Non-toxic, bio-degradable cleaning formulas safe for babies and pets',
                'Advanced low-moisture extraction for rapid 2–4 hour drying times',
                'Certified master technicians with over 10+ years of textile care experience',
                '100% Satisfaction Guarantee — free re-cleaning if not satisfied'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2d6675] shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-[#111d23]">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[360px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl border border-[#c3c7ce]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
              alt="Clean residential interior carpet"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Highlights */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto mb-24 md:mb-32">
        <div className="text-center mb-16">
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#001b31] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base text-[#43474d] max-w-xl mx-auto">
            Real feedback from local homeowners who trust us with their carpet & upholstery care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-2xl border border-[#d7e4ec] ambient-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex text-[#D5A85A] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-[#43474d] italic mb-6 leading-relaxed">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>
              <div className="border-t border-[#ddeaf2] pt-4 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-sm text-[#001b31]">{review.author}</h4>
                  <span className="text-xs text-[#73777e]">{review.location}</span>
                </div>
                <span className="text-xs bg-[#e9f6fd] text-[#316a79] px-2.5 py-1 rounded-md font-semibold">
                  Verified Client
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/feedback"
            className="inline-flex items-center gap-2 text-[#001b31] font-semibold text-sm hover:text-[#2d6675] transition-colors"
          >
            Read All Customer Reviews <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto mb-20">
        <div className="bg-[#001b31] text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6 leading-tight">
              Ready for Fresh, Pristine Carpets?
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed">
              Book your professional cleaning today in under 2 minutes or get a quick free quote online.
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
