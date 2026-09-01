'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    q: 'How often should I get my carpets cleaned?',
    a: 'Once or twice a year works for most households. If you have kids, pets, or a lot of foot traffic, every 6 months makes more sense. If it\'s just you or a couple, once a year is usually fine.',
  },
  {
    q: 'How long does carpet cleaning take?',
    a: 'A standard 3-bedroom house usually takes around 2 to 3 hours. It depends on room size, how many stains need treatment, and the state of the carpet.',
  },
  {
    q: 'How long until the carpet is dry?',
    a: 'Usually 4 to 6 hours. Open windows, run a fan, or turn on the aircon and it dries faster. Thick carpet and humid days take longer.',
  },
  {
    q: 'Can you get out old stains?',
    a: 'Often yes, sometimes partially, occasionally not at all — it depends on the stain type, the carpet fibre, and how long it\'s been there. We\'ll always give you an honest assessment before we start.',
  },
  {
    q: 'Can you get rid of pet urine smell?',
    a: 'Yes. We use enzyme treatment that breaks down the urine at a molecular level. If it\'s soaked through to the underlay, that needs treating too — otherwise the smell comes back.',
  },
  {
    q: 'Is it safe for my kids and pets after cleaning?',
    a: 'Yes, We use eco-friendly solutions, these are safe for pets and kids.',
  },
  {
    q: 'Do you do end-of-lease carpet cleaning?',
    a: 'Yes. We clean to the standard property managers expect. We\'ve done plenty of them.',
  },
  {
    q: 'Why Choose Steam Carpet Cleaning Over Dry Cleaning?',
    a: 'Steam carpet cleaning provides a deeper clean by using hot water extraction to reach deep into carpet fibres and remove embedded dirt, stains, allergens and odours. It is particularly effective for heavily soiled carpets and high-traffic areas, leaving carpets thoroughly cleaned and refreshed.',
  },
  {
    q: 'How do I know which service I need?',
    a: 'If it\'s general dirt and grime, steam cleaning is the go. Got a specific stain or smell? That\'s targeted treatment. Moving out of a rental? End-of-lease clean. Flooded? Water extraction. Not sure — just call and describe what\'s going on.',
  },
  {
    q: 'Is it actually worth paying for professional cleaning?',
    a: 'If you\'ve got a carpet that vacuuming isn\'t fixing, or stains that have been there a while, yes. A professional clean gets out what a vacuum can\'t and often makes a noticeable difference to how the room looks and smells.',
  },
  {
    q: 'Do you clean office and commercial carpets?',
    a: 'Yes. We can work after hours or on weekends to avoid disrupting the business. Just let us know what works.',
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F2F8FC] rounded-full mb-4">
            <MessageCircleQuestion className="w-4 h-4 text-[#00B8D9]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#00B8D9]">FAQ</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#082B59] mb-4 leading-tight">
            Common<br />Questions
          </h2>
          <p className="text-sm text-[#082B59]/80 leading-relaxed mb-6">
            Things people usually ask before booking. Can't find what you need?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#082B59] text-white rounded-xl font-semibold text-sm hover:bg-[#00B8D9] transition-all"
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
                    ? 'border-[#00B8D9]/30 bg-[#F2F8FC] shadow-md'
                    : 'border-[#1261A0]/20 bg-white hover:border-[#00B8D9]/30'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                >
                  <span className={`text-sm font-semibold leading-snug ${isOpen ? 'text-[#082B59]' : 'text-[#082B59]'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#00B8D9] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-sm text-[#082B59]/80 leading-relaxed border-t border-[#1261A0]/15 pt-4">
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
              className="w-full py-3.5 mt-2 rounded-2xl border border-dashed border-[#00B8D9]/30 text-sm font-semibold text-[#00B8D9] hover:bg-[#F2F8FC] transition-colors"
            >
              {showAll ? '↑ Show fewer questions' : `↓ Show ${faqs.length - DEFAULT_VISIBLE} more questions`}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
