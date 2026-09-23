'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SERVICES } from '@/data/siteData';
import BookingForm from '@/components/BookingForm';

function BookNowInner() {
  const searchParams = useSearchParams();
  const [defaultService, setDefaultService] = useState('carpet-cleaning');

  useEffect(() => {
    const param = searchParams.get('service');
    if (param && SERVICES.find((s) => s.id === param)) {
      setDefaultService(param);
    }
  }, [searchParams]);

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-[#082B59] py-14 px-5 md:px-16 mb-10">
        <div className="max-w-[1280px] mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00B8D9] mb-3 block">
            Online Booking
          </span>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">
            Book Your Cleaning
          </h1>
          <p className="text-sm text-white/70 max-w-md mx-auto">
            No upfront payment required. We&apos;ll confirm within a few hours.
          </p>
        </div>
      </section>

      <section className="px-5 md:px-16">
        <BookingForm
          defaultService={defaultService}
          heading=""
          subheading=""
        />
      </section>
    </div>
  );
}

export default function BookNowPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-[#082B59]/80">Loading...</div>}>
      <BookNowInner />
    </Suspense>
  );
}
