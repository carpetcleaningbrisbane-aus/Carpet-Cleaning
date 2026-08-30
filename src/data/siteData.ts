// src/data/siteData.ts
// ── Gallery images (stored in src/assets/gallery) ──
import livingRoomBefore from '@/assets/gallery/01-living-room-before.png';
import livingRoomAfter from '@/assets/gallery/01-living-room-after.png';
import hallwayBefore from '@/assets/gallery/02-hallway-before.png';
import hallwayAfter from '@/assets/gallery/02-hallway-after.png';
import bedroomBefore from '@/assets/gallery/03-bedroom-before.png';
import bedroomAfter from '@/assets/gallery/03-bedroom-after.png';
import familyRoomBefore from '@/assets/gallery/04-family-room-before.png';
import familyRoomAfter from '@/assets/gallery/04-family-room-after.png';
import coffeeBefore from '@/assets/gallery/05-coffee-stain-before.png';
import coffeeAfter from '@/assets/gallery/05-coffee-stain-after.png';
import foodDrinkBefore from '@/assets/gallery/06-food-drink-before.png';
import foodDrinkAfter from '@/assets/gallery/06-food-drink-after.png';
import petStainBefore from '@/assets/gallery/07-pet-stain-before.png';
import petStainAfter from '@/assets/gallery/07-pet-stain-after.png';
import carpetCleaningBefore from '@/assets/gallery/08-carpet-cleaning-before.png';
import carpetCleaningAfter from '@/assets/gallery/08-carpet-cleaning-after.png';
import officeCarpetBefore from '@/assets/gallery/09-office-carpet-before.png';
import officeCarpetAfter from '@/assets/gallery/09-office-carpet-after.png';
import waterExtractionBefore from '@/assets/gallery/10-water-extraction-before.png';
import waterExtractionAfter from '@/assets/gallery/10-water-extraction-after.png';
import deepCleaningBefore from '@/assets/gallery/11-deep-cleaning-before.png';
import deepCleaningAfter from '@/assets/gallery/11-deep-cleaning-after.png';
import stairBefore from '@/assets/gallery/12-stair-before.png';
import stairAfter from '@/assets/gallery/12-stair-after.png';

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
    description: 'Professional hot water extraction reaches deep into carpet fibres to loosen and extract accumulated dust, allergens, food particles and contaminants that everyday vacuuming leaves behind.',
    longDescription: 'Our primary carpet cleaning process uses professional hot water extraction. Heated water and a cleaning solution are injected deep into carpet fibres, then powerfully extracted along with loosened dirt, moisture and contaminants.',
    iconName: 'Waves',
    price: '',
    features: [
      'Detailed carpet inspection',
      'Pre-vacuuming & pre-treatment',
      'Hot water extraction technology',
      'Reduces allergens & dust buildup',
      'Treats heavy-traffic areas',
      'Efficient drying guidance',
    ],
    image: '/steam-carpet-service.jpg'
  },
  {
    id: 'end-of-lease-cleaning',
    title: 'End of Lease Cleaning',
    tag: 'Bond & Rental',
    description: 'Our end-of-lease service targets dark traffic lanes, food spills, pet stains and general dirt to present carpets in their best condition before final inspection and property handover.',
    longDescription: 'Moving out of a rental property is stressful. We provide thorough carpet cleaning tailored to meet real estate inspection standards and help with bond return.',
    iconName: 'ShieldCheck',
    price: '',
    features: [
      'Final rental inspection ready',
      'Property handover standard',
      'Bond preparation clean',
      'Real estate inspection grade',
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'commercial-cleaning',
    title: 'Office & Commercial Cleaning',
    tag: 'Commercial',
    description: 'We clean offices, reception areas, hallways, meeting rooms, retail spaces and showrooms with flexible scheduling to suit your business hours.',
    longDescription: 'A clean workplace creates a better environment for everyone. Commercial carpets receive heavy daily traffic and require professional treatment to maintain a professional appearance.',
    iconName: 'Building2',
    price: '',
    features: [
      'High-traffic corridor treatment',
      'Flexible after-hours bookings',
      'Removes trapped dust & odours',
      'Maintains professional presentation',
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'stain-spot-removal',
    title: 'Stain & Odour Removal',
    tag: 'Targeted',
    description: 'Specialised treatment for common carpet stains including coffee, wine, pet accidents and persistent odours using targeted neutralising pre-treatments.',
    longDescription: 'We assess stain type, carpet fibre and age before applying targeted neutralising pre-treatments and professional extraction to address common carpet stains and odours.',
    iconName: 'Eraser',
    price: '',
    features: [
      'Coffee & tea stain treatment',
      'Wine & juice mark removal',
      'Pet urine & odour treatment',
      'Food & grease spill removal',
      'Mud & tracked dirt treatment',
      'Biological odour neutralisation',
    ],
    image: '/stain-odour-removal.jpg'
  },
  {
    id: 'carpet-shampooing',
    title: 'Carpet Shampooing',
    tag: 'Heavy Soil Care',
    description: 'Combines specialised cleaning products with professional agitation equipment to break down heavily soiled areas and refresh tired-looking carpets.',
    longDescription: 'A thorough cleaning process designed to loosen accumulated dirt, soil and grime from carpet fibres through specialised shampoo solutions and professional agitation equipment.',
    iconName: 'Brush',
    price: '',
    features: [
      'Initial carpet inspection',
      'Dry soil removal pre-vacuum',
      'Deep shampoo solution agitation',
      'Professional extraction & rinse',
    ],
    image: '/carpet-shampooing.jpg'
  },
  {
    id: 'water-extraction',
    title: 'Carpet Water Extraction',
    tag: 'Emergency & Water Relief',
    description: 'High-power extraction machinery rapidly removes excess water from saturated carpet fibres and backing following leaks, overflows or water damage.',
    longDescription: 'Water damage can happen unexpectedly. Our professional water extraction service uses high-power machinery to rapidly remove excess water from saturated carpet fibres and backing to assist the drying process.',
    iconName: 'Droplets',
    price: '',
    features: [
      'Rapid moisture removal',
      'Prevents musty odours',
      'Leak & overflow response',
      'Drying & ventilation guidance',
    ],
    image: '/water-extraction.jpg'
  }
];

const imgSrc = (img: any): string => (typeof img === 'string' ? img : img.src);

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Living Room Carpet Deep Clean',
    category: 'carpet',
    beforeImage: imgSrc(livingRoomBefore),
    afterImage: imgSrc(livingRoomAfter),
    description:
      'A tired and heavily used living room carpet refreshed with professional steam cleaning and hot water extraction. Built-up dirt, everyday grime and high-traffic marks were treated to restore a cleaner and fresher appearance.'
  },
  {
    id: '2',
    title: 'High-Traffic Hallway Transformation',
    category: 'carpet',
    beforeImage: imgSrc(hallwayBefore),
    afterImage: imgSrc(hallwayAfter),
    description:
      'Hallways receive constant foot traffic and can quickly develop darker, dirtier areas. This carpet received a thorough professional clean focused on embedded dirt and visible traffic marks.'
  },
  {
    id: '3',
    title: 'Bedroom Carpet Refresh',
    category: 'carpet',
    beforeImage: imgSrc(bedroomBefore),
    afterImage: imgSrc(bedroomAfter),
    description:
      'A residential bedroom carpet cleaned to remove accumulated dust, everyday dirt and general soiling. Professional steam cleaning helped leave the carpet looking fresher and cleaner.'
  },
  {
    id: '4',
    title: 'Family Room Deep Carpet Clean',
    category: 'carpet',
    beforeImage: imgSrc(familyRoomBefore),
    afterImage: imgSrc(familyRoomAfter),
    description:
      'A frequently used family room carpet treated with professional hot water extraction to remove accumulated dirt, dust and everyday household grime from the carpet fibres.'
  },
  {
    id: '5',
    title: 'Coffee Spill Stain Treatment',
    category: 'stain',
    beforeImage: imgSrc(coffeeBefore),
    afterImage: imgSrc(coffeeAfter),
    description:
      'A noticeable coffee spill treated with professional stain-removal techniques. The affected area was pre-treated and professionally extracted to significantly improve the appearance of the carpet.'
  },

  {
    id: '6',
    title: 'Food and Drink Stain Removal',
    category: 'stain',
    beforeImage: imgSrc(foodDrinkBefore),
    afterImage: imgSrc(foodDrinkAfter),
    description:
      'Multiple food and drink marks were treated to refresh a heavily used carpet area. Professional pre-treatment and extraction helped reduce visible staining and restore a cleaner appearance.'
  },
  {
    id: '7',
    title: 'Pet Stain and Odour Treatment',
    category: 'stain',
    beforeImage: imgSrc(petStainBefore),
    afterImage: imgSrc(petStainAfter),
    description: 'A carpet affected by pet accidents received targeted stain and odour treatment followed by professional extraction. The process focused on removing the contaminants contributing to visible marks and unpleasant smells.'
  },
  {
    id: '8',
    title: 'Professional Carpet Extraction Clean',
    category: 'carpet',
    beforeImage: imgSrc(carpetCleaningBefore),
    afterImage: imgSrc(carpetCleaningAfter),
    description: 'A full room carpet cleaning demonstration showing the dramatic difference between dull, traffic-worn carpet and freshly extracted, bright carpet fibers.'
  },
  {
    id: '9',
    title: 'Office Carpet Cleaning',
    category: 'upholstery',
    beforeImage: imgSrc(officeCarpetBefore),
    afterImage: imgSrc(officeCarpetAfter),
    description: 'A busy office carpet cleaned to remove accumulated dirt from daily foot traffic. Professional steam cleaning refreshed the carpet and improved the overall appearance of the workplace.'
  },
  {
    id: '10',
    title: 'Staircase Carpet Cleaning',
    category: 'carpet',
    beforeImage: imgSrc(stairBefore),
    afterImage: imgSrc(stairAfter),
    description: 'A carpeted staircase treated with professional steam cleaning to remove built-up dirt, scuff marks and everyday grime from each step. High-traffic staircases benefit from targeted pre-treatment and thorough extraction.'
  },
  {
    id: '11',
    title: 'Deep Carpet Shampooing',
    category: 'carpet',
    beforeImage: imgSrc(deepCleaningBefore),
    afterImage: imgSrc(deepCleaningAfter),
    description: 'A heavily soiled carpet received professional shampoo treatment to help loosen accumulated dirt, soil and grime before thorough extraction. The result was a noticeably cleaner and refreshed carpet surface.'
  },
  {
    id: '12',
    title: 'Carpet Water Extraction',
    category: 'rug',
    beforeImage: imgSrc(waterExtractionBefore),
    afterImage: imgSrc(waterExtractionAfter),
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