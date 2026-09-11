import type { Metadata } from 'next';
import Script from 'next/script';
import { Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  ),
  title: {
    default: 'Carpet Cleaner Brisbane | Professional Steam Carpet Cleaning',
    template: '%s | Carpet Cleaner Brisbane',
  },
  description:
    'Professional carpet cleaning services in Brisbane. Steam cleaning, stain & odour removal, end of lease, commercial and water extraction. Fast drying, eco-friendly solutions.',
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
    description:
      'Professional carpet cleaning services in Brisbane. Steam cleaning, stain & odour removal, end of lease, commercial and water extraction.',
    images: [
      {
        url: '/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Professional carpet cleaning service in Brisbane',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carpet Cleaner Brisbane | Professional Steam Carpet Cleaning',
    description:
      'Professional carpet cleaning in Brisbane. Steam cleaning, stain removal, end of lease & commercial services.',
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
      lang="en"
      className={`scroll-smooth ${playfair.variable} ${montserrat.variable}`}
    >
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
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

        <Footer />
      </body>
    </html>
  );
}