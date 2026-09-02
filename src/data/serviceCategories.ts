export interface SubService {
  title: string;
  description: string;
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
        description:
          'Hot water extraction that gets deep into the fibres and pulls out embedded dirt, allergens and bacteria.',
      },
      {
        title: 'End of Lease Carpet Cleaning',
        description:
          'Cleaning to real estate inspection standard so you can hand over the property and get your bond back.',
      },
      {
        title: 'Office & Commercial Carpet Cleaning',
        description:
          'Flexible after-hours service for offices, retail spaces and commercial premises with heavy foot traffic.',
      },
      {
        title: 'Stain & Odour Removal',
        description:
          'Targeted treatment for pet accidents, coffee, wine, food spills and persistent carpet odours.',
      },
      {
        title: 'Carpet Shampooing',
        description:
          'Deep agitation cleaning for heavily soiled carpets that need more than a standard steam treatment.',
      },
      {
        title: 'Carpet Water Extraction',
        description:
          'Emergency extraction for water-damaged or flooded carpets to minimise lasting damage.',
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
      { before: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', label: 'Living Room Restoration' },
      { before: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80', after: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80', label: 'Red Wine Stain Removal' },
      { before: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80', after: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80', label: 'Deep Carpet Shampoo' },
    ],
  },
  {
    slug: 'curtain-cleaning',
    title: 'Curtain Cleaning',
    tagline: 'Fresh, clean curtains without the hassle of taking them down.',
    description:
      'Curtains trap dust, allergens, cooking odours and mould over time. Our on-site curtain cleaning service uses low-moisture techniques that are safe for all fabric types — including sheers, heavy drapes and blinds.',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#7B5EA7',
    services: [
      {
        title: 'Sheer Curtain Cleaning',
        description:
          'Gentle low-moisture cleaning for delicate sheer and voile curtains that maintains fabric integrity.',
      },
      {
        title: 'Heavy Curtain Cleaning',
        description:
          'Deep cleaning for thick drapes, blockout curtains and lined panels that collect more dust over time.',
      },
      {
        title: 'Blind Cleaning',
        description:
          'Thorough cleaning for venetian, roller and vertical blinds — removing dust, grime and stains.',
      },
      {
        title: 'Curtain Stain Removal',
        description:
          'Targeted stain treatment for water marks, food stains and other fabric marks on curtain panels.',
      },
    ],
    process: [
      { step: '01', title: 'Initial Assessment', desc: 'We check the fabric type, condition and staining before selecting the right cleaning approach.' },
      { step: '02', title: 'Pre-Treatment', desc: 'Stains and problem areas are pre-treated with fabric-safe solutions before the main clean.' },
      { step: '03', title: 'Deep Cleaning', desc: 'Low-moisture cleaning removes accumulated dust, allergens, odours and staining from the fabric.' },
      { step: '04', title: 'Final Check', desc: 'We inspect the result and ensure curtains are left hanging fresh and looking their best.' },
    ],
    gallery: [
      { before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80', after: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=800&q=80', label: 'Sheer Curtain Clean' },
      { before: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80', after: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80', label: 'Heavy Drape Refresh' },
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
        description:
          'Hot water extraction for fabric sofas and couches — removes deep-set dirt, allergens and odours.',
      },
      {
        title: 'Leather Couch Cleaning',
        description:
          'Specialist cleaning and conditioning for leather surfaces to remove grime without drying the material.',
      },
      {
        title: 'Pet Stain & Odour Couch Cleaning',
        description:
          'Enzyme-based treatment targeting pet urine, hair and biological odours in upholstered furniture.',
      },
      {
        title: 'Fabric Upholstery Cleaning',
        description:
          'Low-moisture cleaning suitable for microfibre, velvet, linen and other delicate upholstery fabrics.',
      },
    ],
    process: [
      { step: '01', title: 'Inspection', desc: 'We assess fabric type, structure and areas requiring specific treatment before starting.' },
      { step: '02', title: 'Pre-Treatment', desc: 'Stains and heavily soiled areas receive targeted pre-treatment solutions appropriate for the fabric.' },
      { step: '03', title: 'Upholstery Cleaning', desc: 'The appropriate cleaning method is applied — steam, low-moisture or dry depending on the material.' },
      { step: '04', title: 'Final Inspection', desc: 'We review the cleaned upholstery with you and address any remaining marks before finishing.' },
    ],
    gallery: [
      { before: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80', after: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80', label: 'Fabric Couch Deep Clean' },
      { before: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80', after: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80', label: 'Pet Stain Treatment' },
    ],
  },
  {
    slug: 'carpet-repair',
    title: 'Carpet Repair',
    tagline: 'Repair and restore damaged carpet without replacing it.',
    description:
      "Carpet damage from burns, tears, pet clawing or loose edges doesn't always mean replacement. Our carpet repair specialists can patch, restretch and restore damaged areas so the carpet looks and functions like normal again.",
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#2A7A4B',
    services: [
      {
        title: 'Burn Carpet Repair',
        description:
          'Precise patching for cigarette burns, heat marks and iron damage using matched carpet material.',
      },
      {
        title: 'Carpet Hole Repair',
        description:
          'Seamless repair for holes, tears and cuts in carpet using donor material and professional techniques.',
      },
      {
        title: 'Fix Carpet Patch',
        description:
          'Targeted patch repairs for isolated areas of damage that would otherwise require a full replacement.',
      },
      {
        title: 'Carpet Restretching',
        description:
          'Power-stretching to remove ripples, bubbles and loose edges — preventing trip hazards and extending carpet life.',
      },
      {
        title: 'Pet Damage Carpet Repair',
        description:
          'Repair for clawing, digging and fraying damage caused by pets, including edge and corner repairs.',
      },
    ],
    process: [
      { step: '01', title: 'Initial Inspection', desc: 'We assess the damage, carpet type and whether repair material needs to be sourced from a donor area.' },
      { step: '02', title: 'Damage Assessment', desc: 'The extent of the damage is measured and the most appropriate repair method is selected.' },
      { step: '03', title: 'Repair Execution', desc: 'The repair is carried out using professional techniques — patching, restretching or re-seaming as required.' },
      { step: '04', title: 'Final Review', desc: 'The completed repair is reviewed to ensure it blends with the surrounding carpet and the area is clean.' },
    ],
    gallery: [
      { before: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80', after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', label: 'Burn Mark Repair' },
      { before: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', after: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80', label: 'Carpet Restretch' },
    ],
  },
];
