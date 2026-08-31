import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Carpet Cleaner Brisbane',
  description: 'Read the Privacy Policy for Carpet Cleaner Brisbane. Learn how we collect, use and protect your personal information.',
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 px-5 md:px-16 max-w-[960px] mx-auto">
      <h1 className="font-display font-bold text-4xl text-[#001b31] mb-6">Privacy Policy</h1>
      <p className="text-sm text-[#73777e] mb-8">Last Updated: August 29, 2026</p>

      <div className="space-y-6 text-sm text-[#43474d] leading-relaxed">
        <p>
          At Carpet Cleaner, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website or book our cleaning services.
        </p>

        <h2 className="font-display font-bold text-xl text-[#001b31] pt-4">1. Information We Collect</h2>
        <p>
          When you book a service or contact us via our online form, we collect personal information such as your full name, email address, telephone number, property address, and service preferences.
        </p>

        <h2 className="font-display font-bold text-xl text-[#001b31] pt-4">2. How We Use Your Information</h2>
        <p>
          We use your information solely to schedule and execute cleaning appointments, process transactions, communicate booking updates, and provide customer support. We do not sell or rent your information to third-party advertisers.
        </p>

        <h2 className="font-display font-bold text-xl text-[#001b31] pt-4">3. Data Security</h2>
        <p>
          We implement industry-standard administrative and technical security measures to safeguard your personal information against unauthorized access, loss, or alteration.
        </p>

        <div className="pt-8 border-t border-[#ddeaf2]">
          <Link href="/" className="text-[#001b31] font-semibold underline text-sm">
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
