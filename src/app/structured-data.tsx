// Reusable JSON-LD structured data components

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': '${SITE_URL}/#business',
    name: 'Carpet Cleaner Brisbane',
    url: '${SITE_URL}',
    telephone: '0405849841',
    email: 'info.carpetcleaninginbrisbane@gmail.com',
    image: '${SITE_URL}/hero.webp',
    description: 'Professional carpet cleaning services in Brisbane including steam cleaning, stain and odour removal, end of lease cleaning, commercial carpet cleaning and water extraction.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Brisbane',
      addressRegion: 'QLD',
      addressCountry: 'AU',
    },
    areaServed: {
      '@type': 'City',
      name: 'Brisbane',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Carpet Cleaning Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Steam Carpet Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'End of Lease Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Office & Commercial Carpet Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Stain & Odour Removal' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Carpet Shampooing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Carpet Water Extraction' } },
      ],
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '17:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com',
      'https://www.instagram.com',
      'https://www.linkedin.com',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': '${SITE_URL}/#website',
    name: 'Carpet Cleaner Brisbane',
    url: '${SITE_URL}',
    description: 'Professional carpet cleaning services in Brisbane',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: '${SITE_URL}/services',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ name, description, serviceId }: { name: string; description: string; serviceId: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}/services#${serviceId}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Carpet Cleaner Brisbane',
      url: '${SITE_URL}',
    },
    areaServed: {
      '@type': 'City',
      name: 'Brisbane',
    },
    serviceType: 'Carpet Cleaning',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const faqs = [
    { q: 'How often should carpets be professionally cleaned?', a: 'For many households, professional carpet cleaning every 6 to 12 months is recommended. Homes with children, pets or heavy foot traffic may benefit from more frequent cleaning.' },
    { q: 'How long does carpet cleaning take?', a: 'Cleaning time depends on the number of rooms, carpet condition and level of soiling. A small residential job can be completed relatively quickly, while larger homes require more time.' },
    { q: 'How long does carpet take to dry?', a: 'Drying time varies depending on carpet thickness, ventilation and humidity. Good airflow can help speed up drying significantly.' },
    { q: 'Can you remove old stains?', a: 'Many common stains can be significantly improved or removed through professional treatment. Results vary depending on stain type, carpet fibre, age and previous treatments.' },
    { q: 'Is carpet cleaning safe for children and pets?', a: 'We use carefully selected cleaning solutions suitable for residential environments. Children and pets should stay away from the cleaning area until the carpet is dry.' },
    { q: 'Do you clean rental and end-of-lease properties?', a: 'Yes. We provide carpet cleaning for rental properties and end-of-lease requirements to help meet real estate inspection standards.' },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
