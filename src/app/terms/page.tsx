import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Carpet Cleaner Brisbane',
  description: 'Read the Terms of Service for Carpet Cleaner Brisbane. Understand our service terms, conditions and customer responsibilities.',
  alternates: { canonical: '/terms' },
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 px-5 md:px-16 max-w-[960px] mx-auto">
      <h1 className="font-display font-bold text-4xl text-[#0B253A] mb-6">Terms of Service</h1>
      <p className="text-sm text-[#60727F] mb-8">Last Updated: August 29, 2026</p>

      <div className="space-y-6 text-sm text-[#102A3A] leading-relaxed">
        <p>
          Welcome to Carpet Cleaner. By accessing our website or booking our services, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <h2 className="font-display font-bold text-xl text-[#0B253A] pt-4">1. Service Quotations & On-Site Scope</h2>
        <p>
          Initial online quotes are estimates based on standard room sizes and normal wear. Our technicians perform a pre-clean inspection on-site to verify room count, fabric condition, and specific stain requirements prior to starting work.
        </p>

        <h2 className="font-display font-bold text-xl text-[#0B253A] pt-4">2. Satisfaction Guarantee & Re-Cleans</h2>
        <p>
          We offer a 100% Satisfaction Guarantee. If you are unsatisfied with a cleaned area or if a property manager flags carpet issues within 72 hours, we will re-clean the affected areas free of charge.
        </p>

        <h2 className="font-display font-bold text-xl text-[#0B253A] pt-4">3. Cancellations & Rescheduling</h2>
        <p>
          Appointments can be rescheduled or cancelled free of charge up to 24 hours prior to the scheduled service time.
        </p>

        <div className="pt-8 border-t border-[#D6E8E8]">
          <Link href="/" className="text-[#0B253A] font-semibold underline text-sm">
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
