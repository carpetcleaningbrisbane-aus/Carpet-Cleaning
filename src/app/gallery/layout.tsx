import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carpet Cleaning Brisbane Results | Before & After Gallery',
  description:
    'Explore our photo gallery of carpet, upholstery, & curtain cleaning transformations across Brisbane. High-quality work, proven results!',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Carpet Cleaning Brisbane Results | Before & After Gallery',
    description:
      'Explore our photo gallery of carpet, upholstery, & curtain cleaning transformations across Brisbane. High-quality work, proven results!',
    url: '/gallery',
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
