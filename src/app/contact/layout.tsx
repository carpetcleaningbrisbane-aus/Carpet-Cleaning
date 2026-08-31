import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Carpet Cleaner Brisbane',
  description: 'Get in touch with Carpet Cleaner Brisbane. Call 0435 071 625, email us or send a message. We respond within 2 business hours.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us | Carpet Cleaner Brisbane',
    description: 'Get in touch with our Brisbane carpet cleaning team. Call, email or send a message — we respond within 2 business hours.',
    url: '/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
