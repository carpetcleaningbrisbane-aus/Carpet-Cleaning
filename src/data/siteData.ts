// src/data/siteData.ts
// ── Gallery images (stored in src/assets/gallery) ──
import livingRoomBefore from '@/assets/gallery/01-living-room-before.webp';
import livingRoomAfter from '@/assets/gallery/01-living-room-after.webp';
import hallwayBefore from '@/assets/gallery/02-hallway-before.webp';
import hallwayAfter from '@/assets/gallery/02-hallway-after.webp';
import bedroomBefore from '@/assets/gallery/03-bedroom-before.webp';
import bedroomAfter from '@/assets/gallery/03-bedroom-after.webp';
import familyRoomBefore from '@/assets/gallery/04-family-room-before.webp';
import familyRoomAfter from '@/assets/gallery/04-family-room-after.webp';
import coffeeBefore from '@/assets/gallery/05-coffee-stain-before.webp';
import coffeeAfter from '@/assets/gallery/05-coffee-stain-after.webp';
import foodDrinkBefore from '@/assets/gallery/06-food-drink-before.webp';
import foodDrinkAfter from '@/assets/gallery/06-food-drink-after.webp';
import petStainBefore from '@/assets/gallery/07-pet-stain-before.webp';
import petStainAfter from '@/assets/gallery/07-pet-stain-after.webp';
import carpetCleaningBefore from '@/assets/gallery/08-carpet-cleaning-before.webp';
import carpetCleaningAfter from '@/assets/gallery/08-carpet-cleaning-after.webp';
import officeCarpetBefore from '@/assets/gallery/09-office-carpet-before.webp';
import officeCarpetAfter from '@/assets/gallery/09-office-carpet-after.webp';
import waterExtractionBefore from '@/assets/gallery/10-water-extraction-before.webp';
import waterExtractionAfter from '@/assets/gallery/10-water-extraction-after.webp';
import deepCleaningBefore from '@/assets/gallery/11-deep-cleaning-before.webp';
import deepCleaningAfter from '@/assets/gallery/11-deep-cleaning-after.webp';
import stairBefore from '@/assets/gallery/12-stair-before.webp';
import stairAfter from '@/assets/gallery/12-stair-after.webp';

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
  category: 'carpet' | 'stain' | 'curtain' | 'couch' | 'repair' | 'mattress';
  beforeImage: string;
  afterImage: string;
  /** If set, renders as a single full image instead of a before/after slider */
  singleImage?: string;
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
    id: 'carpet-cleaning',
    title: 'Carpet Cleaning',
    tag: 'Deep Clean',
    description: 'Professional hot water extraction to remove dirt, allergens and stains from all carpet types in homes and businesses.',
    longDescription: 'Our carpet cleaning uses hot water extraction to restore your carpets to a fresh, clean condition.',
    iconName: 'Waves',
    price: '',
    features: ['Steam cleaning', 'End of lease', 'Stain removal', 'Commercial cleaning'],
    image: '/steam-carpet-service.jpg'
  },
  {
    id: 'curtain-cleaning',
    title: 'Curtain Cleaning',
    tag: 'Fabric Care',
    description: 'On-site curtain cleaning using low-moisture techniques safe for all fabric types including sheers, drapes and blinds.',
    longDescription: 'Curtains trap dust, allergens and odours. We clean them on-site without taking them down.',
    iconName: 'Sparkles',
    price: '',
    features: ['Sheer & heavy curtains', 'Blind cleaning', 'Stain removal', 'On-site service'],
    image: '/curtain-cleaning.jpg'
  },
  {
    id: 'couch-cleaning',
    title: 'Couch Cleaning',
    tag: 'Upholstery',
    description: 'Professional sofa and upholstery cleaning for fabric, leather and microfibre surfaces - removes stains, odours and allergens.',
    longDescription: 'We safely lift body oils, pet dander, food spills and grime from all upholstery types.',
    iconName: 'Armchair',
    price: '',
    features: ['Fabric & leather', 'Pet stain treatment', 'Odour removal', 'Steam cleaning'],
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'carpet-repair',
    title: 'Carpet Repair',
    tag: 'Restoration',
    description: 'Repair burns, holes, tears, pet damage and loose edges - often for much less than the cost of replacement.',
    longDescription: 'Our carpet repair specialists can patch, restretch and restore damaged areas so carpet looks normal again.',
    iconName: 'CheckCircle2',
    price: '',
    features: ['Burn & hole repair', 'Restretching', 'Pet damage', 'Patch repairs'],
    image: '/carpet-repair.jpg'
  },
  {
    id: 'mattress-cleaning',
    title: 'Mattress Cleaning',
    tag: 'Sanitise',
    description: 'Deep cleaning and sanitisation to eliminate dust mites, allergens, stains and odours for a healthier sleep environment.',
    longDescription: 'Mattresses accumulate dust mites, stains and bacteria. We clean and sanitise for a healthier sleep.',
    iconName: 'ShieldCheck',
    price: '',
    features: ['Deep steam cleaning', 'Stain removal', 'Sanitising', 'Odour treatment'],
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80'
  },
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
    category: 'carpet',
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
    category: 'carpet',
    beforeImage: imgSrc(waterExtractionBefore),
    afterImage: imgSrc(waterExtractionAfter),
    description: 'A water-affected carpet was treated with professional extraction equipment to remove excess moisture. The affected area was carefully assessed and extracted to assist the carpet drying and recovery process.'
  },

  // ── Curtain Cleaning ──
  {
    id: 'curtain-1',
    title: 'Sheer Curtain Clean',
    category: 'curtain',
    beforeImage: '',
    afterImage: '',
    singleImage: '/curtain/sheer-curtain-result.jpg',
    description: 'Delicate sheer curtains cleaned on-site using low-moisture techniques to remove dust, allergens and accumulated grime while maintaining fabric integrity.'
  },
  {
    id: 'curtain-2',
    title: 'Heavy Drape Refresh',
    category: 'curtain',
    beforeImage: '',
    afterImage: '',
    singleImage: '/curtain/heavy-drape-result.jpg',
    description: 'Thick blockout and heavy lined drapes professionally cleaned to remove embedded dust, odours and staining — restored fresh and hanging in place.'
  },

  // ── Couch Cleaning ──
  {
    id: 'couch-1',
    title: 'Fabric Couch Deep Clean',
    category: 'couch',
    beforeImage: '',
    afterImage: '',
    singleImage: '/couch/fabric-couch-result.jpg',
    description: 'A fabric sofa professionally steam cleaned to remove body oils, food spills and accumulated grime — leaving the upholstery fresh and revitalised.'
  },
  {
    id: 'couch-2',
    title: 'Pet Stain Couch Treatment',
    category: 'couch',
    beforeImage: '',
    afterImage: '',
    singleImage: '/couch/pet-stain-couch-result.jpg',
    description: 'Enzyme-based stain and odour treatment for a couch affected by pet accidents — targeting biological contaminants and persistent odours at the source.'
  },

  // ── Carpet Repair ──
  {
    id: 'repair-1',
    title: 'Burn Mark Repair',
    category: 'repair',
    beforeImage: '',
    afterImage: '',
    singleImage: '/carpet-repair/burn-mark-result.jpg',
    description: 'A cigarette burn patch repaired using matched donor carpet material — blended seamlessly into the surrounding carpet for a near-invisible result.'
  },
  {
    id: 'repair-2',
    title: 'Carpet Restretch',
    category: 'repair',
    beforeImage: '',
    afterImage: '',
    singleImage: '/carpet-repair/carpet-restretch-result.jpg',
    description: 'Rippled and loose carpet power-stretched back to a flat, taut surface — eliminating trip hazards and restoring the carpet\'s original appearance.'
  },

  // ── Mattress Cleaning ──
  {
    id: 'mattress-1',
    title: 'Mattress Stain Removal',
    category: 'mattress',
    beforeImage: '',
    afterImage: '',
    singleImage: '/mattress/mattress-stain-result.jpg',
    description: 'Stubborn stains treated with enzyme-based solutions and professional extraction — restoring a clean, hygienic surface for a healthier sleep environment.'
  },
  {
    id: 'mattress-2',
    title: 'Deep Mattress Clean',
    category: 'mattress',
    beforeImage: '',
    afterImage: '',
    singleImage: '/mattress/deep-mattress-result.jpg',
    description: 'A full deep clean with hot water extraction and sanitisation — removing dust mites, allergens and accumulated grime from within the mattress layers.'
  },
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
