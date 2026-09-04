import livingRoomBefore from '@/assets/gallery/01-living-room-before.png';
import livingRoomAfter from '@/assets/gallery/01-living-room-after.png';
import hallwayBefore from '@/assets/gallery/02-hallway-before.png';
import hallwayAfter from '@/assets/gallery/02-hallway-after.png';
import bedroomBefore from '@/assets/gallery/03-bedroom-before.png';
import bedroomAfter from '@/assets/gallery/03-bedroom-after.png';

const imgSrc = (img: { src: string } | string): string =>
  typeof img === 'string' ? img : img.src;

export interface FAQ {
  q: string;
  a: string;
}

export interface SubService {
  title: string;
  description: string;
  image: string;
  objectPosition?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface GalleryPreview {
  before: string;
  after: string;
  label: string;
  single?: string; // if set, renders as a single full image instead of slider
}

export interface ServiceCategory {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  accentColor: string;
  services: SubService[];
  process: ProcessStep[];
  gallery: GalleryPreview[];
  faqs: FAQ[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: 'carpet-cleaning',
    title: 'Carpet Cleaning',
    tagline: 'Deep clean for every carpet in your home or business.',
    description:
      "Brisbane's climate and everyday foot traffic leave carpets harbouring dirt, allergens and stains that regular vacuuming can't reach. Our professional carpet cleaning uses hot water extraction to restore your carpets to a fresh, clean condition.",
    heroImage: '/steam-cleaning.jpg',
    accentColor: '#159A9C',
    services: [
      {
        title: 'Steam Carpet Cleaning',
        description: 'Hot water extraction that gets deep into the fibres and pulls out embedded dirt, allergens and bacteria.',
        image: '/services/steam-carpet-cleaning.jpg',
      },
      {
        title: 'End of Lease Carpet Cleaning',
        description: 'Cleaning to real estate inspection standard so you can hand over the property and get your bond back.',
        image: '/services/end-of-lease-cleaning.jpg',
      },
      {
        title: 'Office & Commercial Carpet Cleaning',
        description: 'Flexible after-hours service for offices, retail spaces and commercial premises with heavy foot traffic.',
        image: '/services/commercial-carpet-cleaning.jpg',
      },
      {
        title: 'Stain & Odour Removal',
        description: 'Targeted treatment for pet accidents, coffee, wine, food spills and persistent carpet odours.',
        image: '/stain-odour-removal.jpg',
      },
      {
        title: 'Carpet Shampooing',
        description: 'Deep agitation cleaning for heavily soiled carpets that need more than a standard steam treatment.',
        image: '/carpet-shampooing.jpg',
      },
      {
        title: 'Carpet Water Extraction',
        description: 'Emergency extraction for water-damaged or flooded carpets to minimise lasting damage.',
        image: '/services/carpet-water-extraction.jpg',
      },
    ],
    process: [
      { step: '01', title: 'Carpet Inspection & Assessment', desc: 'We check the fibre type, traffic areas and specific stains before starting any work.' },
      { step: '02', title: 'Pre-Vacuum & Pre-Treatment', desc: 'Dry soil is vacuumed out first. Problem areas and stains get targeted pre-treatment.' },
      { step: '03', title: 'Steam Carpet Cleaning', desc: 'Hot water and cleaning agent go deep into the carpet, then get extracted along with dirt and moisture.' },
      { step: '04', title: 'Stain & Odour Removal', desc: 'Any remaining marks or odours are treated directly with enzyme or neutralising solutions.' },
      { step: '05', title: 'Final Walkthrough', desc: "We check the result with you before we leave. If something's not right, we fix it on the spot." },
    ],
    gallery: [
      { before: imgSrc(livingRoomBefore), after: imgSrc(livingRoomAfter), label: 'Living Room Carpet Deep Clean' },
      { before: imgSrc(hallwayBefore), after: imgSrc(hallwayAfter), label: 'High-Traffic Hallway Transformation' },
      { before: imgSrc(bedroomBefore), after: imgSrc(bedroomAfter), label: 'Bedroom Carpet Refresh' },
    ],
    faqs: [
      { q: 'How often should carpets be professionally cleaned?', a: 'Carpets should be professionally cleaned every 6–12 months, or more frequently for homes with pets, kids, or heavy foot traffic.' },
      { q: 'Is steam carpet cleaning safe?', a: 'Yes. Steam cleaning is manufacturer-recommended and safe for most carpet types when done by trained professionals.' },
      { q: 'How long does carpet drying take?', a: 'Most carpets dry within 3 to 4 hours, depending on the material and cleaning method used.' },
      { q: 'Do you remove pet stains and odours?', a: 'Yes. Our deep steam cleaning and targeted treatments effectively remove pet stains, bacteria, and odours.' },
      { q: 'What are your service areas?', a: 'We provide professional carpet cleaning across Brisbane, including Brisbane CBD, North Brisbane, South Brisbane, Eastern and Western suburbs, Moreton Bay, Logan, Redlands, Ipswich, and surrounding suburbs.' },
      { q: 'Is your carpet cleaning eco-friendly?', a: 'Absolutely. We use safe, eco-friendly cleaning solutions suitable for kids and pets.' },
    ],
  },
  {
    slug: 'curtain-cleaning',
    title: 'Curtain Cleaning',
    tagline: 'Fresh, clean curtains without the hassle of taking them down.',
    description:
      'Curtains trap dust, allergens, cooking odours and mould over time. Our on-site curtain cleaning service uses low-moisture techniques that are safe for all fabric types — including sheers, heavy drapes and blinds.',
    heroImage: '/curtain-cleaning.jpg',
    accentColor: '#7B5EA7',
    services: [
      {
        title: 'Sheer Curtain Cleaning',
        description: 'Gentle low-moisture cleaning for delicate sheer and voile curtains that maintains fabric integrity.',
        image: '/curtain/sheer-curtain-cleaning.jpg',
      },
      {
        title: 'Heavy Curtain Cleaning',
        description: 'Deep cleaning for thick drapes, blockout curtains and lined panels that collect more dust over time.',
        image: '/curtain/heavy-curtain-cleaning.jpg',
      },
      {
        title: 'Blind Cleaning',
        description: 'Thorough cleaning for venetian, roller and vertical blinds — removing dust, grime and stains.',
        image: '/curtain/blind-cleaning.jpg',
      },
      {
        title: 'Curtain Stain Removal',
        description: 'Targeted stain treatment for water marks, food stains and other fabric marks on curtain panels.',
        image: '/curtain/curtain-stain-removal.jpg',
      },
    ],
    process: [
      { step: '01', title: 'Initial Assessment', desc: 'We check the fabric type, condition and staining before selecting the right cleaning approach.' },
      { step: '02', title: 'Pre-Treatment', desc: 'Stains and problem areas are pre-treated with fabric-safe solutions before the main clean.' },
      { step: '03', title: 'Deep Cleaning', desc: 'Low-moisture cleaning removes accumulated dust, allergens, odours and staining from the fabric.' },
      { step: '04', title: 'Final Check', desc: 'We inspect the result and ensure curtains are left hanging fresh and looking their best.' },
    ],
    gallery: [
      { before: '', after: '', single: '/curtain/sheer-curtain-result.jpg', label: 'Sheer Curtain Clean' },
      { before: '', after: '', single: '/curtain/heavy-drape-result.jpg', label: 'Heavy Drape Refresh' },
    ],
    faqs: [
      { q: 'How often should I professionally clean my curtains?', a: 'For regular use, we recommend professional curtain cleaning every 6 to 12 months. Pet-filled or high-traffic households might require more frequent cleaning.' },
      { q: 'What\'s the best way to clean delicate curtains?', a: 'Delicate curtains are best handled with curtain dry cleaning to preserve fabric integrity.' },
      { q: 'How long does it take for curtains to dry?', a: 'Curtains typically dry within 4 to 6 hours using our fast-drying curtain washing process.' },
      { q: 'Do you offer onsite curtain cleaning services?', a: 'Yes, we offer onsite curtain cleaning with professional curtain cleaning techniques.' },
      { q: 'Can you remove mold from curtains?', a: 'Yes, we apply best solution to rectify the problem.' },
    ],
  },
  {
    slug: 'couch-cleaning',
    title: 'Couch Cleaning',
    tagline: 'Restore your sofa to a fresh, hygienic condition.',
    description:
      'Sofas and upholstered furniture absorb body oils, pet dander, food spills and everyday grime. Our upholstery cleaning service safely lifts this buildup from fabric, leather and microfibre surfaces.',
    heroImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#C07B40',
    services: [
      {
        title: 'Steam Couch Cleaning',
        description: 'Hot water extraction for fabric sofas and couches — removes deep-set dirt, allergens and odours.',
        image: '/couch/steam-couch-cleaning.jpg',
      },
      {
        title: 'Leather Couch Cleaning',
        description: 'Specialist cleaning and conditioning for leather surfaces to remove grime without drying the material.',
        image: '/couch/leather-couch-cleaning.jpg',
      },
      {
        title: 'Pet Stain & Odour Couch Cleaning',
        description: 'Enzyme-based treatment targeting pet urine, hair and biological odours in upholstered furniture.',
        image: '/couch/pet-stain-couch-cleaning.jpg',
      },
      {
        title: 'Fabric Upholstery Cleaning',
        description: 'Low-moisture cleaning suitable for microfibre, velvet, linen and other delicate upholstery fabrics.',
        image: '/couch/fabric-upholstery-cleaning.jpg',
      },
    ],
    process: [
      { step: '01', title: 'Inspection', desc: 'We assess fabric type, structure and areas requiring specific treatment before starting.' },
      { step: '02', title: 'Pre-Treatment', desc: 'Stains and heavily soiled areas receive targeted pre-treatment solutions appropriate for the fabric.' },
      { step: '03', title: 'Upholstery Cleaning', desc: 'The appropriate cleaning method is applied — steam, low-moisture or dry depending on the material.' },
      { step: '04', title: 'Final Inspection', desc: 'We review the cleaned upholstery with you and address any remaining marks before finishing.' },
    ],
    gallery: [
      { before: '', after: '', single: '/couch/fabric-couch-result.jpg', label: 'Fabric Couch Deep Clean' },
      { before: '', after: '', single: '/couch/pet-stain-couch-result.jpg', label: 'Pet Stain Treatment' },
    ],
    faqs: [
      { q: 'How often should I get my couch professionally cleaned?', a: 'We recommend upholstery cleaning every 6 to 12 months, or sooner if there are spills, heavy foot traffic, or pets.' },
      { q: 'Is the cleaning solution safe for pets and children?', a: 'Yes! Our sofa steam clean techniques neutralize pet odors and effectively remove stains.' },
      { q: 'How long does the cleaning process take?', a: 'Most couch cleaning sessions take 1 to 2 hours, with drying time depending on the fabric type.' },
      { q: 'What are your service areas?', a: 'We provide professional upholstery cleaning across Brisbane, including Brisbane CBD, North Brisbane, South Brisbane, Eastern and Western suburbs, Moreton Bay, Logan, Redlands, Ipswich, and surrounding suburbs.' },
      { q: 'Will my couch shrink or fade after cleaning?', a: 'No, our gentle fabric sofa cleaning process ensures your couch retains its original colour and size without damage.' },
    ],
  },
  {
    slug: 'carpet-repair',
    title: 'Carpet Repair',
    tagline: 'Repair and restore damaged carpet without replacing it.',
    description:
      "Carpet damage from burns, tears, pet clawing or loose edges doesn't always mean replacement. Our carpet repair specialists can patch, restretch and restore damaged areas so the carpet looks and functions like normal again.",
    heroImage: '/carpet-repair.jpg',
    accentColor: '#2A7A4B',
    services: [
      {
        title: 'Burn Carpet Repair',
        description: 'Precise patching for cigarette burns, heat marks and iron damage using matched carpet material.',
        image: '/carpet-repair/burn-carpet-repair.jpg',
      },
      {
        title: 'Carpet Hole Repair',
        description: 'Seamless repair for holes, tears and cuts in carpet using donor material and professional techniques.',
        image: '/carpet-repair/carpet-hole-repair.jpg',
      },
      {
        title: 'Fix Carpet Patch',
        description: 'Targeted patch repairs for isolated areas of damage that would otherwise require a full replacement.',
        image: '/carpet-repair/fix-carpet-patch.jpg',
      },
      {
        title: 'Carpet Restretching',
        description: 'Power-stretching to remove ripples, bubbles and loose edges — preventing trip hazards and extending carpet life.',
        image: '/carpet-repair/carpet-restretching.jpg',
      },
      {
        title: 'Pet Damage Carpet Repair',
        description: 'Repair for clawing, digging and fraying damage caused by pets, including edge and corner repairs.',
        image: '/carpet-repair/pet-damage-carpet-repair.jpg',
      },
    ],
    process: [
      { step: '01', title: 'Initial Inspection', desc: 'We assess the damage, carpet type and whether repair material needs to be sourced from a donor area.' },
      { step: '02', title: 'Damage Assessment', desc: 'The extent of the damage is measured and the most appropriate repair method is selected.' },
      { step: '03', title: 'Repair Execution', desc: 'The repair is carried out using professional techniques — patching, restretching or re-seaming as required.' },
      { step: '04', title: 'Final Review', desc: 'The completed repair is reviewed to ensure it blends with the surrounding carpet and the area is clean.' },
    ],
    gallery: [
      { before: '', after: '', single: '/carpet-repair/burn-mark-result.jpg', label: 'Burn Mark Repair' },
      { before: '', after: '', single: '/carpet-repair/carpet-restretch-result.jpg', label: 'Carpet Restretch' },
    ],
    faqs: [
      { q: 'Can damaged carpet be repaired instead of replaced?', a: 'Yes. Most burns, tears, pet damage, stains, wrinkles, ripples and lifted carpet can be professionally repaired, saving you the cost of replacing the entire carpet.' },
      { q: 'What types of carpet damage can you repair?', a: 'We specialise in carpet burn repair, rips & holes repair, pet damage, carpet patch repairs, carpet restretch, wrinkles, seams, loose carpet fixing, turn carpet, and water damaged carpet.' },
      { q: 'How much does carpet repair cost in Brisbane?', a: 'The cost depends on the type and size of the damage. Repairs are generally much cheaper than replacing the entire carpet. We provide a free quote online.' },
      { q: 'Can you repair pet-damaged carpet?', a: 'Yes. We repair carpet damaged by dogs and cats, including scratching, chewing, digging, torn carpet fibres and pet-related damage.' },
      { q: 'Will the repaired area be visible?', a: 'Our goal is to make repairs blend as closely as possible with the surrounding carpet. In many cases, repairs are difficult to notice once completed.' },
    ],
  },
  {
    slug: 'mattress-cleaning',
    title: 'Mattress Cleaning',
    tagline: 'A cleaner, healthier mattress for a better night\'s sleep.',
    description:
      'Mattresses accumulate dust mites, dead skin cells, sweat, allergens and stains over time. Our professional mattress cleaning uses targeted treatments and steam to sanitise and refresh your mattress without harsh chemicals.',
    heroImage: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#1261A0',
    services: [
      {
        title: 'Deep Mattress Cleaning',
        description: 'Thorough hot water extraction cleaning that removes deep-set dirt, dust mites and biological buildup from within the mattress layers.',
        image: '/mattress/deep-mattress-cleaning.jpg',
      },
      {
        title: 'Traditional Mattress Cleaning',
        description: 'A classic dry-clean method suitable for mattresses that require low-moisture treatment to avoid fabric damage.',
        image: '/mattress/traditional-mattress-cleaning.jpg',
      },
      {
        title: 'Mattress Stain Removal',
        description: 'Targeted treatment for urine, blood, sweat and other stubborn stains using enzyme-based cleaning solutions.',
        image: '/mattress/mattress-stain-removal.jpg',
      },
      {
        title: 'Mattress Sanitizing',
        description: 'UV and chemical sanitization to eliminate bacteria, dust mites and allergens — ideal for allergy sufferers and post-illness cleaning.',
        image: '/mattress/mattress-sanitizing.jpg',
        objectPosition: 'top',
      },
      {
        title: 'Mattress Steam Cleaning',
        description: 'High-temperature steam treatment that kills dust mites and bacteria while freshening the mattress fabric without chemical residue.',
        image: '/mattress/mattress-steam-cleaning.jpg',
      },
    ],
    process: [
      { step: '01', title: 'Initial Consultation', desc: 'We assess the mattress condition, fabric type, stains and specific concerns before selecting the right cleaning method.' },
      { step: '02', title: 'Pre-Treatment', desc: 'Stains and problem areas are pre-treated with appropriate solutions to break down soiling before the main clean.' },
      { step: '03', title: 'Deep Cleaning', desc: 'The mattress is cleaned using steam, hot water extraction or dry methods depending on the fabric and level of soiling.' },
      { step: '04', title: 'Final Inspection', desc: 'We inspect the completed clean with you and ensure the mattress is left fresh, sanitised and ready to use.' },
    ],
    gallery: [
      { before: '', after: '', single: '/mattress/mattress-stain-result.jpg', label: 'Mattress Stain Removal' },
      { before: '', after: '', single: '/mattress/deep-mattress-result.jpg', label: 'Deep Mattress Clean' },
    ],
    faqs: [
      { q: 'How often should I have my mattress cleaned?', a: 'We recommend professional cleaning every 6 to 12 months for optimal hygiene.' },
      { q: 'Does your cleaning remove dust mites and bacteria?', a: 'Yes! Our process effectively eliminates dust mites, bacteria, and allergens for a healthier sleep.' },
      { q: 'Can you remove urine stains and odours?', a: 'Absolutely! We specialise in removing pet and human urine stains and neutralising odours.' },
      { q: 'How long does it take for the mattress to dry?', a: 'Drying time varies, but most mattresses dry within 4 to 6 hours.' },
      { q: 'Is the cleaning safe for memory foam mattresses?', a: 'Yes! We use a gentle yet effective process designed specifically for memory foam and all other mattress types.' },
    ],
  },
];
