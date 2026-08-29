import Link from 'next/link';
import { LOCATIONS } from '@/data/siteData';
import { MapPin, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Locations & Coverage | FreshNest Carpet Care',
  description: 'View our carpet cleaning service areas across Melbourne CBD, Toorak, Brighton, Hawthorn, Richmond, and surrounding suburbs.',
};

export default function LocationsPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24">
      {/* Banner */}
      <section className="bg-[#e9f6fd] py-16 px-5 md:px-16 border-b border-[#d7e4ec] mb-16">
        <div className="max-w-[1280px] mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2d6675] mb-2 block">
            Local Coverage Directory
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-[#001b31] mb-6">
            Service Areas & Regions
          </h1>
          <p className="text-base md:text-lg text-[#43474d] max-w-2xl mx-auto leading-relaxed">
            FreshNest provides mobile steam carpet cleaning and upholstery care across Greater Melbourne.
          </p>
        </div>
      </section>

      <section className="px-5 md:px-16 max-w-[1280px] mx-auto space-y-16">
        {/* Visual Map Placeholder */}
        <div className="bg-[#f4faff] border border-[#d7e4ec] rounded-3xl p-8 md:p-12 text-center ambient-shadow relative overflow-hidden">
          <div className="max-w-xl mx-auto space-y-4 relative z-10">
            <div className="w-14 h-14 rounded-full bg-[#b4ebfd]/50 text-[#001b31] flex items-center justify-center mx-auto">
              <MapPin className="w-7 h-7 text-[#2d6675]" />
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-[#001b31]">
              Greater Melbourne Coverage Zone
            </h2>
            <p className="text-sm text-[#43474d] leading-relaxed">
              Our mobile units operate within a 35km radius of Melbourne CBD, offering rapid response times and same-day availability for urgent stain emergencies.
            </p>
          </div>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className="bg-white p-8 rounded-3xl border border-[#d7e4ec] ambient-shadow hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-[#b4ebfd]/30 text-[#001b31] rounded-xl font-semibold text-xs">
                    {loc.region}
                  </span>
                  <span className="text-xs text-[#73777e] font-semibold">Postcode {loc.postalCode}</span>
                </div>

                <h3 className="font-display font-bold text-2xl text-[#001b31] mb-2">
                  {loc.name}
                </h3>
                <p className="text-sm text-[#43474d] mb-6 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#2d6675] shrink-0 mt-0.5" />
                  <span>{loc.address}</span>
                </p>

                <div className="space-y-2 mb-6 text-xs text-[#43474d]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2d6675]" />
                    <span>Daily Mobile Service Vans</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2d6675]" />
                    <span>Same-day Emergency Stain Care</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#ddeaf2] flex items-center justify-between">
                <a
                  href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`}
                  className="text-xs font-bold text-[#001b31] flex items-center gap-1.5 hover:text-[#2d6675]"
                >
                  <Phone className="w-3.5 h-3.5" /> {loc.phone}
                </a>
                <Link
                  href={`/book-now?location=${loc.id}`}
                  className="px-4 py-2 bg-[#001b31] text-white rounded-lg font-semibold text-xs hover:bg-[#12304a] transition-all flex items-center gap-1"
                >
                  Book Area <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
