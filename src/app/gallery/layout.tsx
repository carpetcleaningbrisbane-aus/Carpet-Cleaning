import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Before & After Gallery | Carpet Cleaning Results Brisbane',
  description: 'See real before and after results from our Brisbane carpet cleaning jobs. Carpet restoration, stain removal, upholstery and rug cleaning transformations.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Before & After Gallery | Carpet Cleaning Results Brisbane',
    description: 'Real before and after carpet cleaning results from Brisbane homes and businesses. Drag the slider to see the transformation.',
    url: '/gallery',
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
