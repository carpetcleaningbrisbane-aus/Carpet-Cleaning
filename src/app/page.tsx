import Link from 'next/link';
import { Star, Waves, Sparkles, Armchair, ShieldCheck, CheckCircle2, Award, Clock, Check, Building2, Home as HomeIcon, Sparkle } from 'lucide-react';
import { SERVICES } from '@/data/siteData';
import TestimonialMarquee from '@/components/ui/marquee-01';

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

      {/* Core Services Section */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto mb-24 md:mb-32">
        <div className="text-center mb-16">
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#001b31] mb-4">
            Our Core Services
          </h2>
          <p className="text-base text-[#43474d] max-w-2xl mx-auto">
            Meticulous attention to detail for every fiber of your home and business across Brisbane.
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
                Learn More →
              </Link>
            </div>
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
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto mb-24 md:mb-32">
        <div className="bg-[#e9f6fd] p-8 md:p-14 rounded-3xl border border-[#b1e8fa]">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2d6675] mb-2 block">
              Advanced Technology
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#001b31] mb-4">
              Professional Steam Carpet Cleaning
            </h2>
            <p className="text-base text-[#43474d] leading-relaxed">
              Our primary carpet cleaning process uses professional hot water extraction, commonly referred to as steam carpet cleaning. During the process, heated water and an appropriate cleaning solution are applied into the carpet fibres. The powerful extraction system then removes the loosened dirt, moisture and contaminants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#d7e4ec]">
              <h3 className="font-display font-bold text-xl text-[#001b31] mb-4">
                Particularly Useful for Carpets Affected By:
              </h3>
              <ul className="space-y-3">
                {[
                  'Ground-in dirt & embedded sand',
                  'Heavy foot traffic wear',
                  'Dust mites, pollen and allergens',
                  'Food spills & liquid spots',
                  'Coffee and tea stains',
                  'Pet accidents and protein marks',
                  'General grime & discolouration',
                  'Unpleasant persistent odours'
                ].map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-[#43474d]">
                    <Sparkle className="w-4 h-4 text-[#D5A85A] shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#d7e4ec] flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-xl text-[#001b31] mb-4">
                  Tailored Cleaning Process
                </h3>
                <p className="text-sm text-[#43474d] leading-relaxed mb-6">
                  This deep-cleaning process can reach areas of the carpet that ordinary vacuuming cannot. The cleaning process is adapted according to the carpet condition, fibre type, level of soiling and areas requiring additional treatment.
                </p>
              </div>
              <div className="p-4 bg-[#f4faff] rounded-xl border border-[#ddeaf2]">
                <p className="text-xs font-semibold text-[#001b31]">
                  Careful preparation ensures consistent cleaning results without overwetting or damaging delicate carpet pile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential vs Commercial Sections */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Residential */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#d7e4ec] ambient-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#b4ebfd]/30 flex items-center justify-center text-[#2d6675] mb-6">
                <HomeIcon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl text-[#001b31] mb-4">
                Residential Carpet Cleaning
              </h3>
              <p className="text-sm text-[#43474d] leading-relaxed mb-6">
                Your home carpet sees everyday use. From living rooms and bedrooms to hallways and stairs, carpets can gradually become darker in areas that receive frequent foot traffic. Our residential service refreshes carpets throughout your home.
              </p>
              <h4 className="text-xs font-bold text-[#001b31] uppercase tracking-wider mb-3">We Clean:</h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#43474d] mb-8">
                <span>• Living rooms</span>
                <span>• Family rooms</span>
                <span>• Bedrooms</span>
                <span>• Apartment carpets</span>
                <span>• Hallways & Stairs</span>
                <span>• High-traffic areas</span>
                <span>• Dining areas</span>
                <span>• Rental properties</span>
              </div>
            </div>
            <Link
              href="/book-now"
              className="w-full py-3.5 bg-[#001b31] text-white text-center rounded-xl font-semibold text-sm hover:bg-[#12304a] transition-all"
            >
              Book Residential Clean
            </Link>
          </div>

          {/* Families & Pets */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#d7e4ec] ambient-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#b4ebfd]/30 flex items-center justify-center text-[#2d6675] mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl text-[#001b31] mb-4">
                Carpet Cleaning for Families & Pets
              </h3>
              <p className="text-sm text-[#43474d] leading-relaxed mb-6">
                Homes with children and pets place additional demands on carpets. Food spills, muddy footprints, pet hair and accidents quickly leave carpets looking tired. We give particular attention to areas affected by stubborn stains and odours.
              </p>
              <h4 className="text-xs font-bold text-[#001b31] uppercase tracking-wider mb-3">Common Problems We Treat:</h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#43474d] mb-8">
                <span>• Pet accidents</span>
                <span>• Pet odours</span>
                <span>• Food & drink spills</span>
                <span>• Mud & outdoor soil</span>
                <span>• High-traffic marks</span>
                <span>• General household dirt</span>
              </div>
            </div>
            <Link
              href="/services"
              className="w-full py-3.5 border border-[#73777e] text-[#001b31] text-center rounded-xl font-semibold text-sm hover:bg-[#e9f6fd] transition-colors"
            >
              View Pet & Stain Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* Commercial & Business Cleaning */}
      <section className="bg-[#f4faff] py-20 px-5 md:px-16 border-y border-[#d7e4ec] mb-24 md:mb-32">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#b4ebfd]/40 flex items-center justify-center text-[#2d6675] mb-6">
              <Building2 className="w-6 h-6" />
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#001b31] mb-6">
              Carpet Cleaning for Brisbane Businesses
            </h2>
            <p className="text-base text-[#43474d] mb-6 leading-relaxed">
              Clean carpets make a noticeable difference in offices and commercial environments. Reception areas, hallways, meeting rooms and other high-traffic spaces quickly accumulate dirt and develop visible traffic marks.
            </p>
            <p className="text-sm font-semibold text-[#001b31] mb-4">We provide carpet cleaning for:</p>
            <div className="grid grid-cols-2 gap-3 text-sm text-[#43474d] mb-8">
              <span>• Offices & Corporate Suites</span>
              <span>• Showrooms</span>
              <span>• Retail Businesses</span>
              <span>• Workplaces</span>
              <span>• Commercial Properties</span>
              <span>• Common Areas</span>
              <span>• Reception Areas</span>
              <span>• Meeting Rooms</span>
            </div>
            <p className="text-xs text-[#73777e]">
              Appointments can be arranged around your business operating requirements where possible to minimize workplace downtime.
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#d7e4ec] ambient-shadow">
            <h3 className="font-display font-bold text-2xl text-[#001b31] mb-6">
              Our 8-Step Cleaning Approach
            </h3>
            <div className="space-y-3.5">
              {[
                { step: '1', title: 'Carpet Inspection', desc: 'Detailed assessment of carpet material and fiber type.' },
                { step: '2', title: 'Stain & Problem Identification', desc: 'Pinpointing high-traffic marks and specific stains.' },
                { step: '3', title: 'Pre-Vacuuming', desc: 'Lifting dry surface soils and loose particle debris.' },
                { step: '4', title: 'Pre-Treatment Application', desc: 'Applying eco-friendly solutions to loosen embedded grime.' },
                { step: '5', title: 'Professional Steam Cleaning', desc: 'Deep hot water agitation across carpet fibers.' },
                { step: '6', title: 'Hot Water Extraction', desc: 'High-power suction extracting moisture and dirt.' },
                { step: '7', title: 'Stain & Odour Treatment', desc: 'Targeted spot neutralization for residual marks.' },
                { step: '8', title: 'Final Quality Inspection', desc: 'Ensuring pristine results and client satisfaction.' },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#001b31] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {s.step}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#001b31]">{s.title}</h4>
                    <p className="text-xs text-[#43474d]">{s.desc}</p>
                  </div>
                </div>
              ))}
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
