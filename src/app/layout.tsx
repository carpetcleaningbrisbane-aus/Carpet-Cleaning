import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'Carpet Cleaner Brisbane | Professional Steam Carpet Cleaning',
    template: '%s | Carpet Cleaner Brisbane',
  },
  description: 'Professional carpet cleaning services in Brisbane. Steam cleaning, stain & odour removal, end of lease, commercial and water extraction. Fast drying, eco-friendly solutions.',
  authors: [{ name: 'Carpet Cleaner Brisbane' }],
  creator: 'Carpet Cleaner Brisbane',
  publisher: 'Carpet Cleaner Brisbane',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://[WEBSITE_URL]',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://[WEBSITE_URL]',
    siteName: 'Carpet Cleaner Brisbane',
    title: 'Carpet Cleaner Brisbane | Professional Steam Carpet Cleaning',
    description: 'Professional carpet cleaning services in Brisbane. Steam cleaning, stain & odour removal, end of lease, commercial and water extraction.',
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional carpet cleaning service in Brisbane',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carpet Cleaner Brisbane | Professional Steam Carpet Cleaning',
    description: 'Professional carpet cleaning in Brisbane. Steam cleaning, stain removal, end of lease & commercial services.',
    images: ['/hero.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#F7FAFA] text-[#102A3A] antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
