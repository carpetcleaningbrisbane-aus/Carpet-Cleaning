import Link from 'next/link';
import { Waves, Sparkles, Building2, ShieldCheck, Droplets, ArrowRight, CheckCircle2, Sparkle, Star } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Carpet Cleaning Services Brisbane | Carpet Cleaner',
  description: 'Explore our steam carpet cleaning, end of lease cleaning, commercial office care, stain & odour removal, carpet shampooing, and water extraction services.',
};

const services = [
  {
    id: 'steam-carpet-cleaning',
    tag: 'Deep Clean',
    title: 'Steam Carpet Cleaning',
    description:
      'Carpets hold a surprising amount of dirt beneath their surface. Professional hot water extraction reaches deep into fibres to loosen and extract accumulated dust, allergens, food particles and contaminants that everyday vacuuming leaves behind.',
    features: [
      'Detailed carpet inspection',
      'Pre-vacuuming & pre-treatment',
      'Hot water extraction technology',
      'Reduces allergens & dust buildup',
      'Treats heavy-traffic areas',
      'Efficient drying guidance',
    ],
    cta: 'Book Steam Cleaning',
    href: '/book-now?service=steam-carpet-cleaning',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
    icon: 'waves',
    accent: '#e9f6fd',
  },
  {
    id: 'end-of-lease-cleaning',
    tag: 'Bond & Rental',
    title: 'End of Lease Carpet Cleaning',
    description:
      'Moving out of a rental property is stressful. Our end-of-lease service targets dark traffic lanes, food spills, pet stains and general dirt to present carpets in their best condition before final inspection and property handover.',
    features: [
      'Final rental inspection ready',
      'Property handover standard',
      'Bond preparation clean',
      'Real estate inspection grade',
    ],
    cta: 'Book End of Lease',
    href: '/book-now?service=end-of-lease-cleaning',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80',
    icon: 'shield',
    accent: '#f4faff',
  },
  {
    id: 'commercial-cleaning',
    tag: 'Commercial',
    title: 'Office & Commercial Carpet Cleaning',
    description:
      'A clean workplace creates a better environment for everyone. Commercial carpets receive heavy daily traffic. We clean offices, reception areas, hallways, meeting rooms, retail spaces and showrooms with flexible scheduling to suit your business hours.',
    features: [
      'High-traffic corridor treatment',
      'Flexible after-hours bookings',
      'Removes trapped dust & odours',
      'Maintains professional presentation',
    ],
    cta: 'Request Commercial Quote',
    href: '/contact?subject=commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
    icon: 'building',
    accent: '#e9f6fd',
  },
  {
    id: 'stain-spot-removal',
    tag: 'Targeted',
    title: 'Stain & Odour Removal',
    description:
      'Specialised treatment for common carpet stains including coffee, wine, pet accidents and persistent odours. We assess stain type, carpet fibre and age before applying targeted neutralising pre-treatments and professional extraction.',
    features: [
      'Coffee & tea stains',
      'Wine & juice marks',
      'Pet urine & odours',
      'Food & grease spills',
      'Mud & tracked dirt',
      'Biological odour treatment',
    ],
    cta: 'Book Stain Treatment',
    href: '/book-now?service=stain-spot-removal',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=80',
    icon: 'sparkles',
    accent: '#f4faff',
  },
  {
    id: 'carpet-shampooing',
    tag: 'Heavy Soil Care',
    title: 'Carpet Shampooing',
    description:
      'A thorough cleaning process designed to loosen accumulated dirt, soil and grime from carpet fibres. Combines specialised cleaning products with professional agitation equipment to break down heavily soiled areas and refresh tired-looking carpets.',
    features: [
      'Initial carpet inspection',
      'Dry soil removal pre-vacuum',
      'Deep shampoo solution agitation',
      'Professional extraction & rinse',
    ],
    cta: 'Book Carpet Shampooing',
    href: '/book-now?service=carpet-shampooing',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=900&q=80',
    icon: 'sparkle',
    accent: '#e9f6fd',
  },
  {
    id: 'water-extraction',
    tag: 'Emergency & Water Relief',
    title: 'Carpet Water Extraction',
    description:
      'Water damage can happen unexpectedly from leaks, overflows or burst pipes. Our professional water extraction service uses high-power machinery to rapidly remove excess water from saturated carpet fibres and backing to assist the drying process.',
    features: [
      'Rapid moisture removal',
      'Prevents musty odours',
      'Leak & overflow response',
      'Drying & ventilation guidance',
    ],
    cta: 'Request Water Extraction',
    href: '/contact?subject=water-extraction',
    image: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=900&q=80',
    icon: 'droplets',
    accent: '#f4faff',
  },
];

function ServiceIcon({ name }: { name: string }) {
  const cls = 'w-5 h-5 text-[#2d6675]';
  if (name === 'waves') return <Waves className={cls} />;
  if (name === 'shield') return <ShieldCheck className={cls} />;
  if (name === 'building') return <Building2 className={cls} />;
  if (name === 'sparkles') return <Sparkles className={cls} />;
  if (name === 'sparkle') return <Sparkle className={cls} />;
  if (name === 'droplets') return <Droplets className={cls} />;
  return null;
}

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24">

      {/* Header Banner — real photo background */}
      <section className="relative py-24 md:py-32 px-5 md:px-16 mb-20 overflow-hidden">
        {/* Background photo */}
        <img
          src="/services-banner.png"
          alt="Professional carpet cleaning services in Brisbane"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Neutral dark overlay — readable text, no blue tint */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

        <div className="relative z-10 max-w-[1280px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-sm">
            <div className="flex text-[#D5A85A]">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
            </div>
            <span className="text-white/80 text-xs font-semibold uppercase tracking-widest">Brisbane Carpet Care Solutions</span>
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight drop-shadow-lg">
            Professional Carpet<br />
            <span className="text-[#b4ebfd]">Cleaning Services</span>
          </h1>

          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            A full range of professional carpet cleaning services for homes, rentals, offices and commercial spaces throughout Brisbane — from deep steam cleaning to emergency water extraction.
          </p>

          {/* Quick-jump pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-4 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold rounded-full transition-all backdrop-blur-sm"
              >
                {s.tag}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto space-y-12">
        {services.map((service, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={service.id}
              id={service.id}
              className="group grid grid-cols-1 lg:grid-cols-2 rounded-3xl border border-[#d7e4ec] overflow-hidden ambient-shadow bg-white transition-all duration-300 hover:shadow-xl hover:border-[#b1e8fa]"
            >
              {/* Image — alternates left/right */}
              <div className={`relative h-64 md:h-80 lg:h-auto min-h-[320px] overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* gradient overlay */}
                <div className={`absolute inset-0 ${isEven
                  ? 'bg-gradient-to-r from-transparent to-[#001b31]/10'
                  : 'bg-gradient-to-l from-transparent to-[#001b31]/10'
                  }`} />
                {/* tag badge on image */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#001b31] rounded-full font-bold text-xs shadow-sm">
                    {service.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`p-8 md:p-12 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                style={{ backgroundColor: service.accent }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#d7e4ec] flex items-center justify-center shadow-sm">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <div className="h-px flex-grow bg-[#ddeaf2]" />
                </div>

                <h2 className="font-display font-bold text-2xl md:text-3xl text-[#001b31] mb-4 leading-tight">
                  {service.title}
                </h2>
                <p className="text-sm md:text-base text-[#43474d] mb-7 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2d6675] shrink-0" />
                      <span className="text-xs text-[#43474d]">{f}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#001b31] text-white rounded-xl font-semibold text-sm hover:bg-[#12304a] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {service.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto mt-24">
        <div className="bg-[#001b31] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#0094B8]/20 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
              Not sure which service you need?
            </h2>
            <p className="text-white/70 text-base mb-8 leading-relaxed">
              Get in touch and we'll recommend the right solution for your carpet type, condition and budget.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/book-now"
                className="px-8 py-4 bg-[#b4ebfd] text-[#001b31] rounded-xl font-bold text-sm hover:bg-white transition-all shadow-md"
              >
                Book Online Now
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-white/30 text-white rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors"
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