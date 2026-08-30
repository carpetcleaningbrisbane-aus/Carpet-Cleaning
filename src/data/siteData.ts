// src/data/siteData.ts

export interface Service {
  id: string;
  title: string;
  tag: string;
  description: string;
  longDescription: string;
  iconName: string;
  price: string;
  features: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'carpet' | 'stain' | 'upholstery' | 'rug';
  beforeImage: string;
  afterImage: string;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  verified: boolean;
}

export interface Location {
  id: string;
  name: string;
  region: string;
  postalCode: string;
  phone: string;
  address: string;
  popular: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  experience: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: 'steam-carpet-cleaning',
    title: 'Steam Carpet Cleaning',
    tag: 'Deep Clean',
    description: 'Hot water extraction method to penetrate deep into fibers, removing embedded dirt and allergens without leaving residue.',
    longDescription: 'Our signature hot-water extraction process flushes out toxins, dust mites, pollen, and deeply set grime. Using non-toxic eco-friendly detergents, we preserve carpet pile soft texture while restoring pure indoor air quality.',
    iconName: 'Waves',
    price: 'From $99',
    features: [
      'Hot water extraction technology',
      'Non-toxic eco-friendly solutions',
      'Fast 2 to 4 hour drying time',
      'Stain-resistant protective coating'
    ],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'stain-spot-removal',
    title: 'Stain & Spot Removal',
    tag: 'Targeted',
    description: 'Specialized treatments for tough stains like wine, pet accidents, and coffee, restoring your carpet\'s original beauty safely.',
    longDescription: 'Stubborn spots require tailored chemistry. Our certified stain technicians utilize enzyme breakdown solutions targeted specifically for tannin, oil, pet protein, and dye marks.',
    iconName: 'Sparkles',
    price: 'From $49',
    features: [
      'Targeted enzyme breakdown formula',
      'Red wine, coffee & ink treatment',
      'Pet accident stain neutralization',
      'Color-safe fiber restoration'
    ],
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'upholstery-care',
    title: 'Upholstery Care',
    tag: 'Refresh',
    description: 'Gentle yet effective cleaning for sofas, chairs, and fabrics to prolong the life of your furniture and improve air quality.',
    longDescription: 'Fine furniture demands precise moisture control. We lift oils, skin dander, and odors from velvet, linen, cotton blends, and leather without oversaturating cushioning.',
    iconName: 'Armchair',
    price: 'From $120',
    features: [
      'Fabric-safe low-moisture cleaning',
      'Sofa, armchair & ottoman care',
      'Deodorization & hygiene treatment',
      'Leather condition & sealant'
    ],
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'area-rug-cleaning',
    title: 'Area Rug & Specialty Care',
    tag: 'Delicate',
    description: 'Specialized care for delicate area rugs, oriental rugs, and natural fibers to preserve color and texture.',
    longDescription: 'Hand-knotted, wool, silk, and Persian rugs require gentle pH-balanced immersion or low-moisture care to avoid color bleeding or fiber distortion.',
    iconName: 'Layers',
    price: 'From $85',
    features: [
      'Hand-woven & wool rug care',
      'Color bleed prevention inspection',
      'Fringe cleaning & fluffing',
      'Off-site pickup option available'
    ],
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pet-odor-elimination',
    title: 'Pet Odor Elimination',
    tag: 'Sanitize',
    description: 'Advanced enzymatic treatments to neutralize odors and permanently remove biological stains at the underlay level.',
    longDescription: 'Surface spraying only masks odor. Our sub-surface extraction reaches the underlayment and subfloor to eliminate uric acid crystals completely.',
    iconName: 'ShieldCheck',
    price: 'From $79',
    features: [
      'Sub-surface pad extraction',
      'Uric acid crystal destruction',
      '100% pet and child safe',
      'Long-lasting fresh aroma'
    ],
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'end-of-lease-cleaning',
    title: 'End of Lease Cleaning',
    tag: 'Guaranteed',
    description: 'Comprehensive carpet cleaning solutions tailored to meet stringent real estate and property management bond return standards.',
    longDescription: 'Get 100% of your rental bond back with our official real estate receipt and bond back guarantee clean tailored for property handovers.',
    iconName: 'CheckCircle2',
    price: 'From $149',
    features: [
      '100% Bond Back Guarantee receipt',
      'Detailed inspection checklist',
      'Free re-clean if property manager flags',
      'Flexible move-out scheduling'
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Living Room Carpet Deep Clean',
    category: 'carpet',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'A tired and heavily used living room carpet refreshed with professional steam cleaning and hot water extraction. Built-up dirt, everyday grime and high-traffic marks were treated to restore a cleaner and fresher appearance.'
  },
  {
    id: '2',
    title: 'High-Traffic Hallway Transformation',
    category: 'carpet',
    beforeImage: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    description: 'Hallways receive constant foot traffic and can quickly develop darker, dirtier areas. This carpet received a thorough professional clean focused on embedded dirt and visible traffic marks.'
  },
  {
    id: '3',
    title: 'Bedroom Carpet Refresh',
    category: 'carpet',
    beforeImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80',
    description: 'A residential bedroom carpet cleaned to remove accumulated dust, everyday dirt and general soiling. Professional steam cleaning helped leave the carpet looking fresher and cleaner.'
  },
  {
    id: '4',
    title: 'Family Room Deep Carpet Clean',
    category: 'carpet',
    beforeImage: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?auto=format&fit=crop&w=800&q=80',
    description: 'A frequently used family room carpet treated with professional hot water extraction to remove accumulated dirt, dust and everyday household grime from the carpet fibres.'
  },
  {
    id: '5',
    title: 'Coffee Spill Stain Treatment',
    category: 'stain',
    beforeImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    description: 'A noticeable coffee spill treated with professional stain-removal techniques. The affected area was pre-treated and professionally extracted to significantly improve the appearance of the carpet.'
  },
  {
    id: '6',
    title: 'Food and Drink Stain Removal',
    category: 'stain',
    beforeImage: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    description: 'Multiple food and drink marks were treated to refresh a heavily used carpet area. Professional pre-treatment and extraction helped reduce visible staining and restore a cleaner appearance.'
  },
  {
    id: '7',
    title: 'Pet Stain and Odour Treatment',
    category: 'stain',
    beforeImage: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    description: 'A carpet affected by pet accidents received targeted stain and odour treatment followed by professional extraction. The process focused on removing the contaminants contributing to visible marks and unpleasant smells.'
  },
  {
    id: '8',
    title: 'Fresh Carpet After Odour Treatment',
    category: 'stain',
    beforeImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'A carpet with persistent household and pet-related odours was professionally treated and cleaned. The cleaning process helped remove accumulated contaminants and leave the carpet feeling noticeably fresher.'
  },
  {
    id: '9',
    title: 'Office Carpet Cleaning',
    category: 'upholstery',
    beforeImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
    description: 'A busy office carpet cleaned to remove accumulated dirt from daily foot traffic. Professional steam cleaning refreshed the carpet and improved the overall appearance of the workplace.'
  },
  {
    id: '10',
    title: 'Commercial Reception Carpet Clean',
    category: 'upholstery',
    beforeImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6i72?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80',
    description: 'A high-traffic reception area received professional carpet cleaning to address visible dirt, traffic marks and general commercial soiling, creating a cleaner and more presentable entrance.'
  },
  {
    id: '11',
    title: 'Deep Carpet Shampooing',
    category: 'carpet',
    beforeImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    description: 'A heavily soiled carpet received professional shampoo treatment to help loosen accumulated dirt, soil and grime before thorough extraction. The result was a noticeably cleaner and refreshed carpet surface.'
  },
  {
    id: '12',
    title: 'Carpet Water Extraction',
    category: 'rug',
    beforeImage: 'https://images.unsplash.com/photo-1584622965147-af3548e0b757?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80',
    description: 'A water-affected carpet was treated with professional extraction equipment to remove excess moisture. The affected area was carefully assessed and extracted to assist the carpet drying and recovery process.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Sarah Jenkins',
    location: 'Toorak',
    rating: 5,
    date: 'August 14, 2026',
    service: 'Steam Carpet Cleaning',
    comment: 'Carpet Cleaner transformed our living room carpet! We were considering replacing it, but after their steam clean, it looks brand new. Punctual and extremely professional.',
    verified: true
  },
  {
    id: 'r2',
    author: 'Marcus Vance',
    location: 'Brighton',
    rating: 5,
    date: 'August 02, 2026',
    service: 'Pet Odor Elimination',
    comment: 'Our new puppy had a few accidents on our wool rug. Carpet Cleaner used their enzyme treatment and the smell is 100% gone. Highly recommended!',
    verified: true
  },
  {
    id: 'r3',
    author: 'Elena Rostova',
    location: 'South Yarra',
    rating: 5,
    date: 'July 28, 2026',
    service: 'Upholstery Care',
    comment: 'Impeccable service. The team took extra care with our custom velvet armchairs. Soft, fragrant, and meticulously cleaned.',
    verified: true
  },
  {
    id: 'r4',
    author: 'David Chen',
    location: 'Hawthorn',
    rating: 5,
    date: 'July 19, 2026',
    service: 'End of Lease Cleaning',
    comment: 'Real estate passed our inspection with flying colors and returned the full bond immediately. Thank you Carpet Cleaner!',
    verified: true
  }
];

export const LOCATIONS: Location[] = [
  {
    id: 'melbourne-cbd',
    name: 'Melbourne CBD',
    region: 'Central',
    postalCode: '3000',
    phone: '(03) 9123 4567',
    address: '120 Collins Street, Melbourne VIC 3000',
    popular: true
  },
  {
    id: 'toorak',
    name: 'Toorak & South Yarra',
    region: 'Inner South',
    postalCode: '3142',
    phone: '(03) 9123 4568',
    address: '450 Toorak Road, Toorak VIC 3142',
    popular: true
  },
  {
    id: 'brighton',
    name: 'Brighton & Bayside',
    region: 'Bayside',
    postalCode: '3186',
    phone: '(03) 9123 4569',
    address: '88 Church St, Brighton VIC 3186',
    popular: true
  },
  {
    id: 'hawthorn',
    name: 'Hawthorn & Kew',
    region: 'Inner East',
    postalCode: '3122',
    phone: '(03) 9123 4570',
    address: '210 Glenferrie Rd, Hawthorn VIC 3122',
    popular: true
  },
  {
    id: 'richmond',
    name: 'Richmond & Abbotsford',
    region: 'Inner East',
    postalCode: '3121',
    phone: '(03) 9123 4571',
    address: '150 Bridge Rd, Richmond VIC 3121',
    popular: false
  },
  {
    id: 'docklands',
    name: 'Docklands & Southbank',
    region: 'Central',
    postalCode: '3008',
    phone: '(03) 9123 4572',
    address: '700 Bourke St, Docklands VIC 3008',
    popular: false
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 't1',
    name: 'Julian Hayes',
    role: 'Founder & Master Cleaner',
    bio: 'Over 14 years of expertise in fabric restoration and high-end residential carpet care.',
    experience: '14+ Years Experience',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 't2',
    name: 'Clara Thorne',
    role: 'Senior Stain Specialist',
    bio: 'Certified IICRC Wool & Textile Master Technician specializing in organic stain lifting.',
    experience: '9 Years Experience',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 't3',
    name: 'Liam Vance',
    role: 'Operations Lead',
    bio: 'Ensures seamless booking, punctual on-site execution, and meticulous quality control.',
    experience: '7 Years Experience',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
  }
];