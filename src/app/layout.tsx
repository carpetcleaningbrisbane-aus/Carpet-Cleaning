import type { Metadata } from 'next';
import Script from 'next/script';
import { Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';
const FloatingBookingCTA = dynamic(() => import('@/components/FloatingBookingCTA'));

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.carpetcleaningbrisbane.com.au';


const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Carpet Cleaning Brisbane | Steam & Stain Removal From $99',
    template: '%s',
  },
  description:
    'We offer residential and commercial carpet cleaning across Brisbane from $99. Safe, fast-drying steam cleaning for homes & offices. Book now!',
  authors: [{ name: 'Carpet Cleaning Brisbane' }],
  creator: 'Carpet Cleaning Brisbane',
  publisher: 'Carpet Cleaning Brisbane',
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
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: SITE_URL,
    siteName: 'Carpet Cleaning Brisbane',
    title: 'Carpet Cleaning Brisbane | Steam & Stain Removal From $99',
    description:
      'We offer residential and commercial carpet cleaning across Brisbane from $99. Safe, fast-drying steam cleaning for homes & offices. Book now!',
    images: [
      {
        url: '/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Professional steam carpet cleaning technician treating high-traffic living room carpet in Brisbane',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carpet Cleaning Brisbane | Steam & Stain Removal From $99',
    description:
      'We offer residential and commercial carpet cleaning across Brisbane from $99. Safe, fast-drying steam cleaning for homes & offices. Book now!',
    images: ['/hero.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`scroll-smooth ${playfair.variable} ${montserrat.variable}`}
    >
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="lazyOnload"
        >
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KFNGKCC5');`}
        </Script>

        <link
          rel="preload"
          href="/hero.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
      </head>

      <body className="bg-[#F2F8FC] text-[#082B59] antialiased flex flex-col min-h-screen">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KFNGKCC5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Navbar />

        <main className="flex-grow">{children}</main>

        <FloatingBookingCTA />
        <Footer />
      </body>
    </html>
  );
}