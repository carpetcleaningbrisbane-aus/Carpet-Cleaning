import crypto from 'crypto';

export interface BlogPost {
  id: string;
  slug: string;
  signature?: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: {
    heading: string;
    paragraph: string;
    bullets?: string[];
  }[];
  conclusion: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'how-often-should-you-clean-carpets-brisbane',
    signature: '87b62f02593ea5e6fcbed5a768196aebda6f29f49b03c7b0af1edab2c406f74c',
    title: 'How Often Should You Professional Steam Clean Your Carpets in Brisbane?',
    excerpt: 'Brisbane warm climate and high humidity mean carpets trap dust, dirt, and moisture fast. Learn the recommended cleaning schedule for your home.',
    date: 'September 12, 2026',
    author: 'Carpet Cleaner Brisbane',
    image: '/steam-carpet-service.webp',
    imageAlt: 'Professional carpet steam cleaning machine in Brisbane home',
    intro: 'Carpets make any home feel comfortable and warm. But with Brisbane humid summer weather, pets, and foot traffic, carpets collect dust, dirt, and allergens deep inside the fibers. So how often should you actually steam clean your carpets?',
    sections: [
      {
        heading: '1. Standard Homes: Once Every 12 Months',
        paragraph: 'If you have a normal house with low foot traffic, getting your carpets steam cleaned once a year is perfect. Vacuuming twice a week removes surface dust, but professional steam cleaning reaches deep down into carpet fibers to pull out trapped dirt.'
      },
      {
        heading: '2. Homes with Pets & Kids: Every 6 to 9 Months',
        paragraph: 'Pets and children bring in extra dirt, hair, and accidental spills. Steam cleaning every 6 to 9 months keeps carpets fresh, eliminates pet odors, and stops allergens from building up.',
        bullets: [
          'Clean spills immediately so they do not stain.',
          'Use pet-safe enzyme treatments for accidental pet stains.',
          'Schedule mid-year steam cleaning to lift pet dander.'
        ]
      },
      {
        heading: '3. Brisbane Humidity & Mould Prevention',
        paragraph: 'Queensland summer humidity can cause moisture to settle inside carpet fibers. Professional steam cleaning uses hot water extraction and high-power vacuum suction to remove dirt while drying quickly, preventing mould growth.'
      },
      {
        heading: '4. End of Lease Requirements',
        paragraph: 'If you are moving out of a rental property in Brisbane, real estate agents usually require professional carpet cleaning receipts. Getting a certified steam clean ensures your rental bond is returned quickly.'
      }
    ],
    conclusion: 'Regular carpet steam cleaning keeps your house healthy, smelling fresh, and extends your carpet life. Call us today for a quick quote!'
  },
  {
    id: '2',
    slug: 'why-brisbane-humidity-demands-carpet-steam-cleaning',
    signature: '75f3b8cd63c7ec0a462363a71b98a9772c2ab221133fbe09902630fad749f4f8',
    title: 'Why Brisbane Humidity Demands Professional Carpet Steam Cleaning',
    excerpt: 'High humidity in Brisbane creates the perfect environment for dust mites and mould. Here is why steam cleaning is essential for your carpets.',
    date: 'September 10, 2026',
    author: 'Carpet Cleaner Brisbane',
    image: '/steam-cleaning.webp',
    imageAlt: 'Steam cleaner wand cleaning carpet floor in Brisbane',
    intro: 'Brisbane weather is known for hot, humid summer days. While great for outdoor activities, humidity inside homes can cause dust mites, bacteria, and hidden moisture to get trapped inside your carpets.',
    sections: [
      {
        heading: 'Why Moisture Gets Trapped in Carpets',
        paragraph: 'High air moisture combined with foot traffic presses dirt and humidity deep into carpet underlay. Over time, this creates musty odors that normal vacuuming cannot fix.'
      },
      {
        heading: 'How Hot Water Extraction Helps',
        paragraph: 'Hot water extraction (steam cleaning) heats water to high temperatures to sanitize carpet fibers. The commercial machine extracts dirt and up to 95% of moisture, leaving your carpet fresh and clean.',
        bullets: [
          'Eliminates trapped moisture and humidity odors.',
          'Kills dust mites and bacteria deep inside fibers.',
          'Safe for kids, pets, and asthma sufferers.'
        ]
      }
    ],
    conclusion: 'Protect your family and carpet investments from humidity damage with regular steam cleaning. Contact our local team today!'
  }
];

export function getAuthorizedBlogPosts(): BlogPost[] {
  const secretKey = process.env.BLOG_SECRET_KEY || 'carpet_cleaning_brisbane_secret_key_8923749823';

  return BLOG_POSTS.filter((post) => {
    if (!post.signature) return false;
    const expectedSignature = crypto
      .createHash('sha256')
      .update(post.slug + secretKey)
      .digest('hex');
    return post.signature === expectedSignature;
  });
}

