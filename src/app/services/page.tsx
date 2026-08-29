import Link from 'next/link';
import { SERVICES } from '@/data/siteData';
import { Waves, Sparkles, Armchair, Layers, ShieldCheck, CheckCircle2, ArrowRight, Check } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Carpet & Upholstery Services | FreshNest',
  description: 'Explore our premium steam carpet cleaning, stain removal, upholstery care, pet odor elimination, and bond cleaning services.',
};

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24">
      {/* Header Banner */}
      <section className="bg-[#e9f6fd] py-16 px-5 md:px-16 border-b border-[#d7e4ec] mb-16">
        <div className="max-w-[1280px] mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2d6675] mb-2 block">
            Professional Serenity
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-[#001b31] mb-6">
            Our Cleaning Services
          </h1>
          <p className="text-base md:text-lg text-[#43474d] max-w-2xl mx-auto leading-relaxed">
            From everyday dirt to stubborn stains, we have your carpets and upholstery covered. Experience the pristine touch of a deeply sanitized home.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto space-y-16">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-[#d7e4ec] ambient-shadow ${
                isEven ? '' : 'lg:grid-flow-col-dense'
              }`}
            >
              <div className={isEven ? '' : 'lg:col-start-2'}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#b4ebfd]/40 flex items-center justify-center text-[#001b31]">
                    {service.iconName === 'Waves' && <Waves className="w-6 h-6 text-[#2d6675]" />}
                    {service.iconName === 'Sparkles' && <Sparkles className="w-6 h-6 text-[#2d6675]" />}
                    {service.iconName === 'Armchair' && <Armchair className="w-6 h-6 text-[#2d6675]" />}
                    {service.iconName === 'Layers' && <Layers className="w-6 h-6 text-[#2d6675]" />}
                    {service.iconName === 'ShieldCheck' && <ShieldCheck className="w-6 h-6 text-[#2d6675]" />}
                    {service.iconName === 'CheckCircle2' && <CheckCircle2 className="w-6 h-6 text-[#2d6675]" />}
                  </div>
                  <span className="px-3 py-1 bg-[#b4ebfd]/30 text-[#001b31] rounded-xl font-semibold text-xs">
                    {service.tag}
                  </span>
                  <span className="ml-auto font-bold text-lg text-[#2d6675]">
                    {service.price}
                  </span>
                </div>

                <h2 className="font-display font-bold text-3xl text-[#001b31] mb-4">
                  {service.title}
                </h2>
                <p className="text-base text-[#43474d] mb-6 leading-relaxed">
                  {service.longDescription}
                </p>

                <div className="space-y-2.5 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#e9f6fd] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#2d6675]" />
                      </div>
                      <span className="text-sm font-semibold text-[#111d23]">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <Link
                    href={`/book-now?service=${service.id}`}
                    className="px-6 py-3.5 bg-[#001b31] text-white rounded-lg font-semibold text-sm hover:bg-[#12304a] transition-all shadow-md inline-flex items-center gap-2"
                  >
                    Book This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 py-3.5 border border-[#73777e] text-[#001b31] rounded-lg font-semibold text-sm hover:bg-[#e9f6fd] transition-colors"
                  >
                    Inquire First
                  </Link>
                </div>
              </div>

              <div className={`relative h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-md border border-[#c3c7ce] ${isEven ? '' : 'lg:col-start-1'}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
