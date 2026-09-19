import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Carpet Cleaning Brisbane | Get Expert Advice',
  description:
    'Contact Carpet Cleaning Brisbane for professional advice & service inquiries. Call 0405 849 841 or send us a message online today!',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Carpet Cleaning Brisbane | Get Expert Advice',
    description:
      'Contact Carpet Cleaning Brisbane for professional advice & service inquiries. Call 0405 849 841 or send us a message online today!',
    url: '/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
