export type ProjectCategory =
  | 'ALL'
  | 'FOOD RELIEF'
  | 'COMMUNITY'
  | 'EDUCATION'
  | 'FAMILY SUPPORT';

export interface ProjectGalleryItem {
  src: string;
  caption: string;
  aspect?: '16:9' | '4:3' | '3:4';
}

export interface Project {
  id: string;
  momentLabel: string;
  archiveTitle: string;
  slug: string;
  title: string;
  category: Exclude<ProjectCategory, 'ALL'>;
  location: string;
  year: string;
  shortDescription: string;
  impactHighlight: string;
  heroImage: string;
  gridSpan: 'wide' | 'narrow';
  challenge: string[];
  approach: string[];
  impactNarrative: string[];
  pullQuote: {
    quote: string;
    author: string;
    role: string;
  };
  stats: {
    mealsServed: string;
    familiesReached: string;
    volunteers: string;
    communities: string;
  };
  supportPossibilities: {
    amount: string;
    title: string;
    description: string;
  }[];
  gallery: ProjectGalleryItem[];
}

export const IMAGES = {
  heroMeals: '/src/assets/images/hero_community_meals_1790672974684.jpg',
  zeroHungerHero: '/src/assets/images/zero_hunger_hero_1792133734450.jpg',
  schoolNutrition: '/src/assets/images/project_school_nutrition_1790672995041.jpg',
  emergencyRelief: '/src/assets/images/project_emergency_relief_1790673011442.jpg',
  communityKitchen: '/src/assets/images/project_community_kitchen_1790673027388.jpg',
  womenSupport: '/src/assets/images/about_women_family_support_1790673047027.jpg',
};

export const PROJECTS: Project[] = [
  {
    id: '01',
    momentLabel: 'MOMENT 01',
    archiveTitle: 'Smiles of Hope',
    slug: 'community-meal-program',
    title: 'Community Meal Program',
    category: 'COMMUNITY',
    location: 'Hyderabad, India',
    year: '2024 — Ongoing',
    shortDescription:
      'Daily freshly cooked, nutrient-dense warm meals served in open neighborhood courtyards with dignity and zero stigma.',
    impactHighlight: '1,850+ Meals Served Weekly',
    heroImage: IMAGES.heroMeals,
    gridSpan: 'wide',
    challenge: [
      'In rapidly growing peri-urban settlements across Hyderabad, daily-wage laborers, elderly residents, and migrant families frequently face an impossible choice between medical expenses, rent, and evening meals.',
      'While caloric staples are occasionally accessible, acute micronutrient deficiencies—particularly iron, protein, and essential vitamins—persist silently across multigenerational households, eroding immunity and childhood development.',
    ],
    approach: [
      'Rather than operating clinical distribution queues, the Community Meal Program transforms local neighborhood courtyards into shared dining spaces. Every morning at 5:30 AM, our culinary team prepares fresh dal, seasonal greens, fortified rice, and warm flatbreads sourced from regional farmer cooperatives.',
      'Meals are served on reusable stainless steel thalis by neighborhood volunteers who know families by name. By eliminating single-use plastics and standing lines, every meal restores social connection alongside physical nourishment.',
    ],
    impactNarrative: [
      'Over the past eighteen months, courtyard dining hubs in Secunderabad and Old City have served more than 1,850 freshly prepared meals every week without a single missed day of service.',
      'Local health workers report a marked decline in seasonal fatigue among participating elders and a 94% attendance retention rate among children whose families dine at the morning and evening kitchens.',
    ],
    pullQuote: {
      quote:
        'When we sit together in the courtyard, nobody feels like they are asking for charity. We are neighbors sharing a warm meal before the workday begins.',
      author: 'Lakshmi Devi',
      role: 'Community Coordinator, Musheerabad Hub',
    },
    stats: {
      mealsServed: '1,850+',
      familiesReached: '420',
      volunteers: '18',
      communities: '12',
    },
    supportPossibilities: [
      {
        amount: '₹1,200 / $15',
        title: '30 Warm Courtyard Meals',
        description:
          'Provides a full month of freshly cooked lentil, vegetable, and rice meals for an elderly resident or child.',
      },
      {
        amount: '₹4,800 / $58',
        title: 'Complete Family Nutrition Basket',
        description:
          'Sustains a family of four with daily hot meals and weekend dry-ration fortifications for an entire month.',
      },
      {
        amount: '₹18,500 / $220',
        title: 'Sponsor a Full Courtyard Service',
        description:
          'Underwrites an entire morning or evening community meal service for 350+ neighbors in Hyderabad.',
      },
    ],
    gallery: [
      {
        src: IMAGES.heroMeals,
        caption: 'Morning meal service at the Musheerabad courtyard hub, Hyderabad.',
        aspect: '4:3',
      },
      {
        src: IMAGES.communityKitchen,
        caption: 'Early dawn preparation of fortified lentil stew and fresh rotis.',
        aspect: '16:9',
      },
      {
        src: IMAGES.womenSupport,
        caption: 'Fresh leafy greens harvested from partner women-led cooperatives.',
        aspect: '4:3',
      },
    ],
  },
  {
    id: '02',
    momentLabel: 'MOMENT 02',
    archiveTitle: 'Bright Eyes, Future Goals',
    slug: 'school-nutrition-initiative',
    title: 'School Nutrition Initiative',
    category: 'EDUCATION',
    location: 'Ranga Reddy District, Telangana',
    year: '2023 — Ongoing',
    shortDescription:
      'Partnering with rural primary schools to serve hot midday lunches that keep children in classrooms and fuel cognitive growth.',
    impactHighlight: '3,400+ Students Nourished Daily',
    heroImage: IMAGES.schoolNutrition,
    gridSpan: 'narrow',
    challenge: [
      'For thousands of children in rural Ranga Reddy district, walking to school on an empty stomach meant afternoon concentration collapsed by midday. Many older siblings dropped out entirely to assist with seasonal agricultural labor.',
      'Standard dry rations often lacked the fresh vegetables, plant proteins, and micronutrients required during critical years of childhood cognitive and physical growth.',
    ],
    approach: [
      'We partner directly with village primary schools and parent-teacher committees to build clean, solar-assisted school veranda kitchens. Menus are designed by pediatric nutritionists using local millets (ragi and jowar), protein-rich pulses, jaggery, and seasonal organic produce.',
      'Every school day at 12:30 PM, students wash hands together and share a hot, freshly cooked meal on the veranda—turning lunchtime into a joyful ritual of equality and learning.',
    ],
    impactNarrative: [
      'Across 9 partner schools, classroom attendance has risen by 31% within the first two academic terms, with girl-child retention reaching 98.4%.',
      'Teachers consistently report sharper afternoon engagement, fewer sick days, and vibrant energy on the school playground.',
    ],
    pullQuote: {
      quote:
        'An empty stomach cannot memorize a lesson. The moment warm millet and dal arrived at noon, our classrooms came alive with questions.',
      author: 'Rameshwar Rao',
      role: 'Headmaster, Zilla Parishad Primary School',
    },
    stats: {
      mealsServed: '4,200+',
      familiesReached: '610',
      volunteers: '24',
      communities: '9',
    },
    supportPossibilities: [
      {
        amount: '₹1,500 / $18',
        title: 'One Term of School Lunches',
        description:
          'Guarantees hot, millet-rich midday meals for one primary school student across a full academic term.',
      },
      {
        amount: '₹6,000 / $72',
        title: 'Classroom Micronutrient Kit',
        description:
          'Supplies iron-rich greens, pulses, and jaggery snacks for an entire classroom of 35 students.',
      },
      {
        amount: '₹25,000 / $300',
        title: 'Adopt a Rural School Veranda',
        description:
          'Funds a full week of nutritious midday lunches for an entire rural primary school of 250 children.',
      },
    ],
    gallery: [
      {
        src: IMAGES.schoolNutrition,
        caption: 'Students sharing midday lunch on the sunlit school veranda in Ranga Reddy.',
        aspect: '4:3',
      },
      {
        src: IMAGES.heroMeals,
        caption: 'Volunteers serving second helpings of vegetable sambar and rice.',
        aspect: '4:3',
      },
      {
        src: IMAGES.womenSupport,
        caption: 'Parent-teacher cooperative inspecting fresh morning produce deliveries.',
        aspect: '4:3',
      },
    ],
  },
  {
    id: '03',
    momentLabel: 'MOMENT 03',
    archiveTitle: 'Joy of Pure Connection',
    slug: 'women-and-family-support',
    title: 'Women & Family Support',
    category: 'FAMILY SUPPORT',
    location: 'Medak & Sangareddy, Telangana',
    year: '2023 — Ongoing',
    shortDescription:
      'Equipping women-led agricultural collectives and mothers with kitchen gardens, seed banks, and maternal nutrition support.',
    impactHighlight: '320+ Women-Led Households Empowered',
    heroImage: IMAGES.womenSupport,
    gridSpan: 'narrow',
    challenge: [
      'In households experiencing food scarcity, mothers and grandmothers routinely eat last and least—resulting in widespread maternal anemia and intergenerational malnutrition.',
      'At the same time, women smallholder farmers perform over 70% of cultivation labor yet often lack access to heirloom seeds, organic compost, and direct local market linkages.',
    ],
    approach: [
      'Our Women & Family Support initiative pairs immediate maternal nutrition baskets (iron-rich dates, sesame, millets, and greens) with community-owned kitchen gardens and seed cooperatives.',
      'Women collectives cultivate high-yield perennial vegetables and supply surplus harvest directly back into Zero Hunger community kitchens at fair guaranteed prices—creating both household nutrition and independent income.',
    ],
    impactNarrative: [
      'Over 320 women-led households now harvest fresh organic produce year-round, reducing household food expenditure by 42% while supplying 1.4 tons of fresh greens to our city kitchens.',
      'Maternal health screenings across participating villages show a 64% reduction in severe iron deficiency within nine months.',
    ],
    pullQuote: {
      quote:
        'We used to wait for relief trucks during the dry months. Today our collective grows the spinach and lentils that feed both our children and the city kitchens.',
      author: 'Kavitha Goud',
      role: 'President, Sangareddy Women Seed Collective',
    },
    stats: {
      mealsServed: '1,640+',
      familiesReached: '320',
      volunteers: '16',
      communities: '7',
    },
    supportPossibilities: [
      {
        amount: '₹1,800 / $22',
        title: 'Maternal Nutrition & Iron Kit',
        description:
          'Provides a 60-day supply of iron-rich millets, dates, jaggery, and pulses for an expectant or nursing mother.',
      },
      {
        amount: '₹4,500 / $54',
        title: 'Heirloom Kitchen Garden Starter',
        description:
          'Equips a family plot with indigenous seeds, drip irrigation tubing, and organic vermicompost.',
      },
      {
        amount: '₹16,000 / $190',
        title: 'Fund a Women’s Harvest Cooperative',
        description:
          'Supports a 15-woman agricultural collective with shared weighing scales, storage crates, and transport.',
      },
    ],
    gallery: [
      {
        src: IMAGES.womenSupport,
        caption: 'Members of the Sangareddy Women Seed Collective with morning harvest.',
        aspect: '4:3',
      },
      {
        src: IMAGES.emergencyRelief,
        caption: 'Weighing and sorting fresh organic produce for community kitchens.',
        aspect: '4:3',
      },
      {
        src: IMAGES.communityKitchen,
        caption: 'Preparing harvest greens inside the central culinary hub.',
        aspect: '16:9',
      },
    ],
  },
  {
    id: '04',
    momentLabel: 'MOMENT 04',
    archiveTitle: 'Focusing on Tomorrow',
    slug: 'emergency-food-relief',
    title: 'Emergency Food Relief',
    category: 'FOOD RELIEF',
    location: 'Godavari Basin & Khammam',
    year: '2022 — Ongoing',
    shortDescription:
      'Rapid-response nutrition kits and mobile kitchens deployed within 24 hours of monsoon flooding, heatwaves, and livelihood crises.',
    impactHighlight: '2,900+ Crisis Parcels Deployed',
    heroImage: IMAGES.emergencyRelief,
    gridSpan: 'wide',
    challenge: [
      'Seasonal monsoon floods and extreme summer heatwaves regularly sever road access to low-lying riverine villages, destroying household grain reserves and halting daily wage work for weeks at a time.',
      'During the first 72 hours of a climate disruption, families with infants and elderly members are most vulnerable to contaminated water and acute hunger.',
    ],
    approach: [
      'Zero Hunger maintains pre-positioned dry ration reserves and mobile field kitchens capable of deploying within 24 hours of an emergency alert.',
      'Each weatherproof family relief parcel is calibrated to sustain a household of five for 21 days—containing unpolished rice, red lentils, cold-pressed cooking oil, iodized salt, roasted gram flour, and clean water purification tablets.',
    ],
    impactNarrative: [
      'During the most recent monsoon inundation across Khammam and the Godavari belt, our volunteer convoys reached 8 isolated settlements before main highway links were restored.',
      'Over 2,900 emergency food parcels and 14,000 hot mobile-kitchen meals were delivered with 100% last-mile verification.',
    ],
    pullQuote: {
      quote:
        'When the river rose past our doorstep, our clay grain bins were lost in an hour. The relief boat arrived the next morning with dry rations that kept my grandchildren fed for three weeks.',
      author: 'Narasimhaiah',
      role: 'Village Elder, Bhadrachalam Block',
    },
    stats: {
      mealsServed: '2,900+',
      familiesReached: '580',
      volunteers: '32',
      communities: '8',
    },
    supportPossibilities: [
      {
        amount: '₹2,100 / $25',
        title: '21-Day Emergency Family Parcel',
        description:
          'Delivers 25kg of fortified grains, pulses, cooking oil, and clean water tablets to a flood-impacted household.',
      },
      {
        amount: '₹8,400 / $100',
        title: 'Four-Family Rapid Relief Pod',
        description:
          'Equips four neighboring families with weatherproof dry food rations during monsoon displacement.',
      },
      {
        amount: '₹32,000 / $385',
        title: 'Deploy a Mobile Field Kitchen',
        description:
          'Operates an emergency high-capacity mobile kitchen serving 600 hot meals per day in crisis zones.',
      },
    ],
    gallery: [
      {
        src: IMAGES.emergencyRelief,
        caption: 'Last-mile distribution of 21-day dry ration parcels at golden hour.',
        aspect: '4:3',
      },
      {
        src: IMAGES.communityKitchen,
        caption: 'Packing bulk grain reserves and lentil rations prior to convoy dispatch.',
        aspect: '16:9',
      },
      {
        src: IMAGES.heroMeals,
        caption: 'Hot meal service at a temporary flood-relief shelter.',
        aspect: '4:3',
      },
    ],
  },
  {
    id: '05',
    momentLabel: 'MOMENT 05',
    archiveTitle: 'Harvest of Dignity',
    slug: 'rural-food-distribution',
    title: 'Rural Food Distribution',
    category: 'FOOD RELIEF',
    location: 'Mahabubnagar & Narayanpet',
    year: '2023 — Ongoing',
    shortDescription:
      'Monthly doorstep grain banks and fortified dry-ration pantries serving remote agricultural hamlets and homebound elders.',
    impactHighlight: '480+ Rural Households Reached Monthly',
    heroImage: IMAGES.emergencyRelief,
    gridSpan: 'wide',
    challenge: [
      'In arid pockets of southern Telangana, seasonal migration leaves behind elderly grandparents and differently-abled residents who cannot travel 12 kilometers to the nearest public ration depot.',
      'Physical immobility or missing documentation often excludes the most fragile citizens from formal food safety nets.',
    ],
    approach: [
      'Working alongside village panchayats and rural youth volunteers, we established decentralized community grain banks and first-day-of-the-month doorstep deliveries.',
      'Each parcel is tailored for easy preparation by elderly residents, featuring stone-ground millet flour, split yellow moong dal, groundnuts, jaggery, and cold-pressed oil.',
    ],
    impactNarrative: [
      'Every month, 480 rural households across 6 remote mandals receive uninterrupted doorstep nutrition support, accompanied by a friendly wellness check from trained local youth volunteers.',
      'Zero homebound seniors in our partner hamlets have gone a single night without a cooked meal since the grain banks opened.',
    ],
    pullQuote: {
      quote:
        'My knees no longer allow me to walk to the town market. Knowing the youth volunteers bring millet flour and dal on the first morning of every month gives me peace.',
      author: 'Satyamma',
      role: 'Resident, Narayanpet Hamlet',
    },
    stats: {
      mealsServed: '1,920+',
      familiesReached: '480',
      volunteers: '22',
      communities: '6',
    },
    supportPossibilities: [
      {
        amount: '₹1,100 / $13',
        title: 'Monthly Elder Doorstep Basket',
        description:
          'Provides a month of easy-to-cook millet flour, split lentils, jaggery, and oil for a homebound senior.',
      },
      {
        amount: '₹5,500 / $66',
        title: 'Five-Household Hamlet Delivery',
        description:
          'Sustains five neighboring elderly households in remote Mahabubnagar for a full month.',
      },
      {
        amount: '₹22,000 / $265',
        title: 'Replenish a Village Grain Bank',
        description:
          'Stocks a community-managed rural grain bank with 500kg of regional millets and pulses.',
      },
    ],
    gallery: [
      {
        src: IMAGES.emergencyRelief,
        caption: 'Volunteers delivering monthly grain sacks and fresh produce in Mahabubnagar.',
        aspect: '4:3',
      },
      {
        src: IMAGES.womenSupport,
        caption: 'Locally harvested millets and pulses sorted by village cooperative members.',
        aspect: '4:3',
      },
      {
        src: IMAGES.heroMeals,
        caption: 'Community elders gathering after morning ration distribution.',
        aspect: '4:3',
      },
    ],
  },
  {
    id: '06',
    momentLabel: 'MOMENT 06',
    archiveTitle: 'Warmth From the Hearth',
    slug: 'community-kitchen',
    title: 'Community Kitchen',
    category: 'COMMUNITY',
    location: 'Secunderabad, Hyderabad',
    year: '2022 — Ongoing',
    shortDescription:
      'Our flagship high-efficiency culinary hub where local cooks and volunteers prepare thousands of fresh meals daily using zero-waste practices.',
    impactHighlight: '12,480+ Cumulative Meals Prepared',
    heroImage: IMAGES.communityKitchen,
    gridSpan: 'narrow',
    challenge: [
      'Scaling humanitarian food relief in dense cities often fails because decentralized cooking is expensive and inconsistent, while commercial catering sacrifices nutritional quality.',
      'To serve thousands of meals near hospitals, transit hubs, and urban slums, we needed culinary infrastructure combining high volume with home-cooked warmth.',
    ],
    approach: [
      'The Secunderabad Community Kitchen is a sunlit, energy-efficient culinary commons staffed by paid women chefs from low-income neighborhoods alongside daily civic volunteers.',
      'Using steam-jacketed cauldrons, direct farm-to-kitchen vegetable procurement, and 100% organic composting of vegetable peelings, we keep per-meal preparation costs remarkably low while maximizing protein and micronutrient density.',
    ],
    impactNarrative: [
      'From this central hearth, insulated thermal vessels dispatch piping-hot meals within 45 minutes of cooking to hospital attendant shelters, night shelters, and neighborhood courtyards.',
      'The kitchen has also trained and employed 28 local women in commercial culinary hygiene and nutrition management.',
    ],
    pullQuote: {
      quote:
        'Every cauldron we stir here is cooked with the exact same care we give our own children at home. Dignity begins in the kitchen.',
      author: 'fatima Begum',
      role: 'Head Chef, Secunderabad Community Kitchen',
    },
    stats: {
      mealsServed: '3,800+',
      familiesReached: '510',
      volunteers: '45',
      communities: '10',
    },
    supportPossibilities: [
      {
        amount: '₹1,000 / $12',
        title: '25 Fresh Kitchen Meals',
        description:
          'Covers raw ingredients and clean fuel to prepare 25 hot, nutrient-rich meals in our central kitchen.',
      },
      {
        amount: '₹7,500 / $90',
        title: 'Daily Fresh Produce Crate',
        description:
          'Procures 180kg of fresh farm vegetables and leafy greens directly from rural women cooperatives.',
      },
      {
        amount: '₹28,000 / $335',
        title: 'Full Day Kitchen Operations',
        description:
          'Sponsors an entire day of culinary operations feeding hospital attendants and shelter residents.',
      },
    ],
    gallery: [
      {
        src: IMAGES.communityKitchen,
        caption: 'Morning sunlight inside the Secunderabad Community Kitchen during roti preparation.',
        aspect: '16:9',
      },
      {
        src: IMAGES.heroMeals,
        caption: 'Thermal vessels arriving at neighborhood distribution courtyards.',
        aspect: '4:3',
      },
      {
        src: IMAGES.womenSupport,
        caption: 'Fresh organic produce arriving from partner farms each dawn.',
        aspect: '4:3',
      },
    ],
  },
];

export const FEATURED_PROJECT = {
  eyebrow: 'FEATURED PROJECT',
  headlineLines: ['ONE MEAL.', 'ONE FAMILY.', 'ONE MORE DAY.'],
  slug: 'community-meal-program',
  title: 'Community Meal Program — Hyderabad Courtyard Hubs',
  description:
    'Every morning before dawn, our Secunderabad kitchen comes alive with the aroma of simmering lentils, fresh seasonal greens, and warm flatbreads. By serving freshly cooked meals in open neighborhood courtyards rather than clinical queues, we restore both physical strength and human dignity to families navigating daily hardship.',
  image: IMAGES.communityKitchen,
  stats: [
    { value: '1,850', label: 'Meals' },
    { value: '12', label: 'Volunteers' },
    { value: '6', label: 'Communities' },
  ],
};
