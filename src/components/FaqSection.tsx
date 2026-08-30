'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    q: 'How often should carpets be professionally cleaned?',
    a: 'For many households, professional carpet cleaning every 6 to 12 months can be a useful routine. Homes with children, pets, allergies or heavy foot traffic may benefit from more frequent cleaning. The ideal frequency depends on your household, carpet type and level of use.',
  },
  {
    q: 'How long does carpet cleaning take?',
    a: 'Cleaning time depends on the number of rooms, total carpeted area, carpet condition, level of soiling and number of stains requiring treatment. A small residential job can be completed relatively quickly, while larger homes and commercial properties require more time.',
  },
  {
    q: 'How long does carpet take to dry?',
    a: 'Drying time varies depending on carpet thickness, ventilation, humidity, weather conditions and the cleaning process used. Good ventilation and airflow can help speed up drying significantly.',
  },
  {
    q: 'Can you remove old stains?',
    a: 'Many common stains can be significantly improved or removed through professional treatment. Results vary depending on the stain, carpet fibre, age of the stain and previous treatments. Some permanent stains, dye damage or bleach marks may not be completely removable.',
  },
  {
    q: 'Can you remove pet urine stains and odours?',
    a: 'We provide targeted treatment for pet-related stains and odours. Results depend on how deeply the contamination has penetrated the carpet and underlying materials. Severe or long-standing contamination may require additional restoration work.',
  },
  {
    q: 'Is carpet cleaning safe for children and pets?',
    a: 'We use carefully selected cleaning solutions suitable for residential environments. Children and pets should remain away from the cleaning area while the service is being performed and until the carpet is appropriately dry.',
  },
  {
    q: 'Can you clean rental and end-of-lease properties?',
    a: 'Yes. We provide carpet cleaning for rental properties and end-of-lease cleaning requirements to help meet real estate inspection standards.',
  },
  {
    q: 'Can carpet cleaning remove bad smells?',
    a: 'Professional cleaning and odour treatment can address many common carpet odours caused by dirt, spills, pets and other contaminants. If the source of an odour is beneath the carpet or within the flooring, additional treatment may be necessary.',
  },
  {
    q: 'Do I need to vacuum before the cleaner arrives?',
    a: 'We carry out appropriate pre-vacuuming as part of the cleaning process. Removing personal items and loose objects beforehand helps the technician access carpeted areas more efficiently.',
  },
  {
    q: 'Why does a stain sometimes come back after cleaning?',
    a: 'Some stains reappear when residue from a deeper section of the carpet moves back toward the surface during drying. This is known as wicking, and certain stains may require additional treatment depending on their source and depth.',
  },
  {
    q: 'How do I know which service I need?',
    a: 'For general dirt and deep cleaning, steam carpet cleaning is usually the best option. For stubborn stains or odours, targeted stain and odour treatment may be required. Rental properties can benefit from end-of-lease cleaning, while businesses can use our commercial cleaning service. If your carpet has been affected by water, contact us about water extraction as soon as possible.',
  },
  {
    q: 'Is professional carpet cleaning worth it?',
    a: 'Professional cleaning provides a deeper clean than ordinary household maintenance. It can help remove accumulated dirt, refresh carpet appearance, address stains and odours, and maintain a cleaner indoor environment — often extending the life of your carpet.',
  },
];

// Show 6 by default, expand to all
const DEFAULT_VISIBLE = 6;

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? faqs : faqs.slice(0, DEFAULT_VISIBLE);

  return (
    <section className="px-5 md:px-16 max-w-[1280px] mx-auto mb-24 md:mb-32">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Left sticky heading */}
        <div className="lg:col-span-1 lg:sticky lg:top-32">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#e9f6fd] rounded-full mb-4">
            <MessageCircleQuestion className="w-4 h-4 text-[#2d6675]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2d6675]">FAQ</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#001b31] mb-4 leading-tight">
            Questions &<br />Answers
          </h2>
          <p className="text-sm text-[#43474d] leading-relaxed mb-6">
            Everything you need to know about our carpet cleaning services. Can't find your answer?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#001b31] text-white rounded-xl font-semibold text-sm hover:bg-[#12304a] transition-all"
          >
            Ask Us Directly →
          </Link>
        </div>

        {/* Right accordion */}
        <div className="lg:col-span-2 space-y-3">
          {visible.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#b1e8fa] bg-[#f4faff] shadow-md'
                    : 'border-[#d7e4ec] bg-white hover:border-[#b1e8fa]'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                >
                  <span className={`text-sm font-semibold leading-snug ${isOpen ? 'text-[#001b31]' : 'text-[#001b31]'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#2d6675] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-sm text-[#43474d] leading-relaxed border-t border-[#ddeaf2] pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Show more / less */}
          {faqs.length > DEFAULT_VISIBLE && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="w-full py-3.5 mt-2 rounded-2xl border border-dashed border-[#b1e8fa] text-sm font-semibold text-[#2d6675] hover:bg-[#e9f6fd] transition-colors"
            >
              {showAll ? '↑ Show fewer questions' : `↓ Show ${faqs.length - DEFAULT_VISIBLE} more questions`}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
