import Link from 'next/link';
import { Waves, Sparkles, Building2, ShieldCheck, Droplets, ArrowRight, CheckCircle2, Sparkle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Carpet Cleaning Services Brisbane | Carpet Cleaner',
  description: 'Explore our steam carpet cleaning, end of lease cleaning, commercial office care, stain & odour removal, carpet shampooing, and water extraction services.',
};

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24">
      {/* Header Banner */}
      <section className="bg-[#e9f6fd] py-16 px-5 md:px-16 border-b border-[#d7e4ec] mb-16">
        <div className="max-w-[1280px] mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2d6675] mb-2 block">
            Brisbane Carpet Care Solutions
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-[#001b31] mb-6">
            Professional Carpet Cleaning Services
          </h1>
          <p className="text-base md:text-lg text-[#43474d] max-w-3xl mx-auto leading-relaxed">
            We provide a range of professional carpet cleaning services designed for residential properties, rental homes, offices and commercial spaces throughout Brisbane. From regular deep carpet cleaning to stubborn stain treatment and water extraction, our services address all carpet cleaning requirements.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto space-y-20">
        {/* 1. Steam Carpet Cleaning */}
        <div id="steam-carpet-cleaning" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-[#d7e4ec] ambient-shadow">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#b4ebfd]/40 flex items-center justify-center text-[#001b31]">
                <Waves className="w-6 h-6 text-[#2d6675]" />
              </div>
              <span className="px-3 py-1 bg-[#b4ebfd]/30 text-[#001b31] rounded-xl font-semibold text-xs">
                Deep Clean
              </span>
              <span className="ml-auto font-bold text-lg text-[#2d6675]">From $99</span>
            </div>

            <h2 className="font-display font-bold text-3xl text-[#001b31] mb-4">
              Steam Carpet Cleaning
            </h2>
            <p className="text-base text-[#43474d] mb-6 leading-relaxed">
              Carpets can hold a surprising amount of dirt beneath their surface. Dust, soil, allergens, food particles and other contaminants gradually become embedded in carpet fibres through everyday use. Professional steam carpet cleaning, also known as hot water extraction, reaches deep into those fibres to loosen and extract accumulated dirt.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-xs font-bold text-[#001b31] uppercase tracking-wider">Benefits & Process:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#43474d]">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2d6675] shrink-0" /><span>Detailed carpet inspection</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2d6675] shrink-0" /><span>Pre-vacuuming & pre-treatment</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2d6675] shrink-0" /><span>Hot water extraction technology</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2d6675] shrink-0" /><span>Reduces allergens & dust buildup</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2d6675] shrink-0" /><span>Treats heavy-traffic areas</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2d6675] shrink-0" /><span>Efficient carpet drying guidance</span></div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/book-now?service=steam-carpet-cleaning" className="px-6 py-3.5 bg-[#001b31] text-white rounded-lg font-semibold text-sm hover:bg-[#12304a] transition-all shadow-md inline-flex items-center gap-2">
                Book Steam Cleaning <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="relative h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-md border border-[#c3c7ce]">
            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80" alt="Steam Carpet Cleaning Brisbane" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* 2. End of Lease Carpet Cleaning */}
        <div id="end-of-lease-cleaning" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-[#d7e4ec] ambient-shadow lg:grid-flow-col-dense">
          <div className="lg:col-start-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#b4ebfd]/40 flex items-center justify-center text-[#001b31]">
                <ShieldCheck className="w-6 h-6 text-[#2d6675]" />
              </div>
              <span className="px-3 py-1 bg-[#b4ebfd]/30 text-[#001b31] rounded-xl font-semibold text-xs">
                Bond & Rental
              </span>
              <span className="ml-auto font-bold text-lg text-[#2d6675]">From $149</span>
            </div>

            <h2 className="font-display font-bold text-3xl text-[#001b31] mb-4">
              End of Lease Carpet Cleaning
            </h2>
            <p className="text-base text-[#43474d] mb-6 leading-relaxed">
              Moving out of a rental property can be stressful. Cleaning carpets thoroughly before final inspection is essential after months or years of everyday use. Our end-of-lease service targets dark traffic lanes, food spills, pet stains, and general dirt to present carpets in their cleanest condition before handover.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-xs font-bold text-[#001b31] uppercase tracking-wider">Suitable For:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#43474d]">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2d6675] shrink-0" /><span>Final rental inspection</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2d6675] shrink-0" /><span>Property handover</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2d6675] shrink-0" /><span>Bond preparation</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2d6675] shrink-0" /><span>Real estate inspection</span></div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/book-now?service=end-of-lease-cleaning" className="px-6 py-3.5 bg-[#001b31] text-white rounded-lg font-semibold text-sm hover:bg-[#12304a] transition-all shadow-md inline-flex items-center gap-2">
                Book End of Lease <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="relative h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-md border border-[#c3c7ce] lg:col-start-1">
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" alt="End of Lease Carpet Cleaning" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* 3. Office & Commercial Carpet Cleaning */}
        <div id="commercial-cleaning" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-[#d7e4ec] ambient-shadow">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#b4ebfd]/40 flex items-center justify-center text-[#001b31]">
                <Building2 className="w-6 h-6 text-[#2d6675]" />
              </div>
              <span className="px-3 py-1 bg-[#b4ebfd]/30 text-[#001b31] rounded-xl font-semibold text-xs">
                Commercial
              </span>
              <span className="ml-auto font-bold text-lg text-[#2d6675]">Custom Quote</span>
            </div>

            <h2 className="font-display font-bold text-3xl text-[#001b31] mb-4">
              Office & Commercial Carpet Cleaning
            </h2>
            <p className="text-base text-[#43474d] mb-6 leading-relaxed">
              A clean workplace creates a better environment for employees, customers and visitors. Commercial carpets receive heavy daily traffic. We clean office floors, reception areas, hallways, meeting rooms, retail spaces, showrooms and common areas with flexible scheduling to suit business hours.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-xs font-bold text-[#001b31] uppercase tracking-wider">Commercial Features:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#43474d]">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2d6675] shrink-0" /><span>High-traffic corridor treatment</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2d6675] shrink-0" /><span>Flexible after-hours appointments</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2d6675] shrink-0" /><span>Removes trapped dust & odours</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2d6675] shrink-0" /><span>Maintains professional presentation</span></div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/contact?subject=commercial" className="px-6 py-3.5 bg-[#001b31] text-white rounded-lg font-semibold text-sm hover:bg-[#12304a] transition-all shadow-md inline-flex items-center gap-2">
                Request Commercial Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="relative h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-md border border-[#c3c7ce]">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Commercial Carpet Cleaning" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* 4. Stain & Odour Removal */}
        <div id="stain-spot-removal" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-[#d7e4ec] ambient-shadow lg:grid-flow-col-dense">
          <div className="lg:col-start-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#b4ebfd]/40 flex items-center justify-center text-[#001b31]">
                <Sparkles className="w-6 h-6 text-[#2d6675]" />
              </div>
              <span className="px-3 py-1 bg-[#b4ebfd]/30 text-[#001b31] rounded-xl font-semibold text-xs">
                Targeted
              </span>
              <span className="ml-auto font-bold text-lg text-[#2d6675]">From $49</span>
            </div>

            <h2 className="font-display font-bold text-3xl text-[#001b31] mb-4">
              Stain & Odour Removal
            </h2>
            <p className="text-base text-[#43474d] mb-6 leading-relaxed">
              Specialised treatment for common carpet stains including coffee, tea, wine, food, juice, mud, pet accidents and unpleasant odours. We assess stain type, carpet fibre, and age before applying targeted neutralizing pre-treatments and professional extraction.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-xs font-bold text-[#001b31] uppercase tracking-wider">Treats Common Spills:</h3>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#43474d]">
                <span>• Coffee & Tea</span>
                <span>• Wine & Juice</span>
                <span>• Pet Urine & Odours</span>
                <span>• Food & Grease</span>
                <span>• Mud & Tracked Dirt</span>
                <span>• Biological Odours</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/book-now?service=stain-spot-removal" className="px-6 py-3.5 bg-[#001b31] text-white rounded-lg font-semibold text-sm hover:bg-[#12304a] transition-all shadow-md inline-flex items-center gap-2">
                Book Stain Treatment <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="relative h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-md border border-[#c3c7ce] lg:col-start-1">
            <img src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80" alt="Stain & Odour Removal" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* 5. Carpet Shampooing */}
        <div id="carpet-shampooing" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-[#d7e4ec] ambient-shadow">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#b4ebfd]/40 flex items-center justify-center text-[#001b31]">
                <Sparkle className="w-6 h-6 text-[#2d6675]" />
              </div>
              <span className="px-3 py-1 bg-[#b4ebfd]/30 text-[#001b31] rounded-xl font-semibold text-xs">
                Heavy Soil Care
              </span>
              <span className="ml-auto font-bold text-lg text-[#2d6675]">From $89</span>
            </div>

            <h2 className="font-display font-bold text-3xl text-[#001b31] mb-4">
              Carpet Shampooing
            </h2>
            <p className="text-base text-[#43474d] mb-6 leading-relaxed">
              A thorough cleaning process designed to loosen accumulated dirt, soil and grime from carpet fibres. Carpet shampooing combines specialized cleaning products with professional agitation equipment to break down heavily soiled areas and refresh tired-looking carpets.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-xs font-bold text-[#001b31] uppercase tracking-wider">Shampooing Steps:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#43474d]">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2d6675] shrink-0" /><span>Initial carpet inspection</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2d6675] shrink-0" /><span>Dry soil removal pre-vacuum</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2d6675] shrink-0" /><span>Deep shampoo solution agitation</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2d6675] shrink-0" /><span>Professional extraction & rinse</span></div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/book-now?service=carpet-shampooing" className="px-6 py-3.5 bg-[#001b31] text-white rounded-lg font-semibold text-sm hover:bg-[#12304a] transition-all shadow-md inline-flex items-center gap-2">
                Book Carpet Shampooing <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="relative h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-md border border-[#c3c7ce]">
            <img src="https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80" alt="Carpet Shampooing Brisbane" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* 6. Carpet Water Extraction */}
        <div id="water-extraction" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-[#d7e4ec] ambient-shadow lg:grid-flow-col-dense">
          <div className="lg:col-start-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#b4ebfd]/40 flex items-center justify-center text-[#001b31]">
                <Droplets className="w-6 h-6 text-[#2d6675]" />
              </div>
              <span className="px-3 py-1 bg-[#b4ebfd]/30 text-[#001b31] rounded-xl font-semibold text-xs">
                Emergency & Water Relief
              </span>
              <span className="ml-auto font-bold text-lg text-[#2d6675]">Emergency Service</span>
            </div>

            <h2 className="font-display font-bold text-3xl text-[#001b31] mb-4">
              Carpet Water Extraction
            </h2>
            <p className="text-base text-[#43474d] mb-6 leading-relaxed">
              Water damage can happen unexpectedly from washing machine overflows, plumbing leaks, burst pipes, accidental spills or water intrusion. Our professional water extraction service uses high-power extraction machinery to extract excess water rapidly from saturated carpet fibres and backing to assist the drying process.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-xs font-bold text-[#001b31] uppercase tracking-wider">Water Extraction Benefits:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#43474d]">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2d6675] shrink-0" /><span>Rapid moisture removal</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2d6675] shrink-0" /><span>Prevents lingering musty odours</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2d6675] shrink-0" /><span>Washing machine & pipe leak response</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2d6675] shrink-0" /><span>Drying & ventilation guidance</span></div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/contact?subject=water-extraction" className="px-6 py-3.5 bg-[#001b31] text-white rounded-lg font-semibold text-sm hover:bg-[#12304a] transition-all shadow-md inline-flex items-center gap-2">
                Request Water Extraction <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="relative h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-md border border-[#c3c7ce] lg:col-start-1">
            <img src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80" alt="Carpet Water Extraction" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
