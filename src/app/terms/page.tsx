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
    <div className="py-16 md:py-20 px-5 md:px-16 max-w-[960px] mx-auto">
      <h1 className="font-display font-bold text-4xl text-[#082B59] mb-6">Terms of Service</h1>
      <p className="text-sm text-[#082B59]/60 mb-8">Last Updated: August 29, 2026</p>

      <div className="space-y-6 text-sm text-[#082B59]/80 leading-relaxed">
        <p>
          Welcome to Carpet Cleaning Brisbane. By accessing our website or booking our services, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <h2 className="font-display font-bold text-xl text-[#082B59] pt-4">1. Service Quotations & On-Site Scope</h2>
        <p>
          Initial online quotes are estimates based on standard room sizes and normal wear. Our technicians perform a pre-clean inspection on-site to verify room count, fabric condition, and specific stain requirements prior to starting work.
        </p>

        <h2 className="font-display font-bold text-xl text-[#082B59] pt-4">2. Satisfaction Guarantee & Re-Cleans</h2>
        <p>
          We offer guaranteed Satisfaction for all our services, except if operator inform there is no guarantee for particular situation after inspection to the site.
        </p>

        <h2 className="font-display font-bold text-xl text-[#082B59] pt-4">3. Cancellations & Rescheduling</h2>
        <p>
          Less than 24 hr notice for cancellation apply $99 cancellation charge and after operator visit on site and cancel the service apply $120 call out fee.
        </p>

        <div className="pt-8 border-t border-[#1261A0]/20">
          <Link href="/" className="text-[#1261A0] font-semibold underline text-sm">
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
