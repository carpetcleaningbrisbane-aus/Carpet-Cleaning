import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get a Quote & Book Online | Carpet Cleaning Brisbane',
  description:
    'Get a quote & book professional carpet cleaning in Brisbane online. No upfront payment required. Instant scheduling for homes & offices!',
  alternates: { canonical: '/book-now' },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Get a Quote & Book Online | Carpet Cleaning Brisbane',
    description:
      'Get a quote & book professional carpet cleaning in Brisbane online. No upfront payment required. Instant scheduling for homes & offices!',
    url: '/book-now',
  },
};

export default function BookNowLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
