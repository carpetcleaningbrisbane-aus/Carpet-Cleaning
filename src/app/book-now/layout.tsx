import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Carpet Cleaning Brisbane | Online Booking',
  description: 'Book your professional carpet cleaning in Brisbane online in minutes. Choose your service, date and time. No upfront payment required.',
  alternates: { canonical: '/book-now' },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Book Carpet Cleaning Brisbane | Online Booking',
    description: 'Book professional carpet cleaning in Brisbane online. Choose your service, preferred date and time. Fast, easy and no upfront payment.',
    url: '/book-now',
  },
};

export default function BookNowLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
