import { IMAGES } from './projects';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  location: string;
  bio: string;
  yearsWithOrg: string;
  image: string;
}

export interface CoreValue {
  index: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
}

export const CORE_VALUES: CoreValue[] = [
  {
    index: '01',
    title: 'Dignity',
    subtitle: 'Guests at a shared table, never recipients of charity.',
    description:
      'How a meal is served matters as much as what is on the plate. We serve hot, freshly prepared meals on stainless steel plates in shaded seating areas—never through hurried queues or disposable plastic packets.'
  },
  {
    index: '02',
    title: 'Compassion',
    subtitle: 'Rooted in proximity and lived empathy.',
    description:
      'Our kitchens are staffed and led by women from the very neighborhoods we serve. We listen to families without bureaucracy, ensuring no elder, child, or hospital caregiver is ever turned away.'
  },
  {
    index: '03',
    title: 'Transparency',
    subtitle: 'Every grain accounted for, every rupee traceable.',
    description:
      '88% of all contributions go directly into food procurement and kitchen operations. We publish quarterly community ledgers detailing meal counts, farmer payouts, and district-level outcomes.'
  },
  {
    index: '04',
    title: 'Community',
    subtitle: 'Built with neighborhoods, not parachuted into them.',
    description:
      'From village panchayat grain banks to parent-led school lunch committees, local residents co-design menus, manage rosters, and hold ultimate stewardship over every project.'
  },
  {
    index: '05',
    title: 'Sustainability',
    subtitle: 'From immediate relief to circular food sovereignty.',
    description:
      'We pair emergency hunger relief with women-led kitchen gardens and direct smallholder farmer procurement—building local food systems that eventually outgrow the need for aid.'
  }
];

export const HOW_WE_WORK: WorkflowStep[] = [
  {
    step: '01',
    title: 'Hyper-Local Assessment',
    subtitle: 'Mapping nutritional gaps with village and ward stewards',
    description:
      'Before lighting a single stove, we partner with primary school teachers, public hospital social workers, and rural gram sabhas to identify households facing acute or seasonal hunger.',
    metric: '100% Community-Verified Rosters'
  },
  {
    step: '02',
    title: 'Direct Farmer & Co-op Sourcing',
    subtitle: 'Procuring millets, pulses, and greens within 60 kilometers',
    description:
      'We bypass middlemen to purchase unpolished rice, jowar, tur dal, and seasonal leafy vegetables directly from women’s agricultural collectives in Sangareddy and Medak.',
    metric: '640+ Smallholder Suppliers'
  },
  {
    step: '03',
    title: 'Zero-Waste Dawn Preparation',
    subtitle: 'Cooking nutrient-dense meals at 5:30 AM daily',
    description:
      'Our culinary teams prepare regionally familiar, pediatrician-approved recipes using steam vessels and traditional iron tawas, sealing meals in surgical-grade thermal containers.',
    metric: '90-Minute Stove-to-Plate Window'
  },
  {
    step: '04',
    title: 'Dignified Service & Longitudinal Tracking',
    subtitle: 'Measuring attendance, health, and household resilience',
    description:
      'Meals are served with warmth and respect while our field coordinators track school attendance, maternal hemoglobin recovery, and household debt reduction over time.',
    metric: '96.4% Partner School Attendance'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'arjun-reddy',
    name: 'Dr. Arjun Vardhan Reddy',
    role: 'Founder & Executive Director',
    location: 'Hyderabad',
    bio: 'Former public-health physician at Osmania General Hospital who witnessed firsthand how caregiver hunger derailed patient recovery. Founded Zero Hunger in late 2022 with a single courtyard stove.',
    yearsWithOrg: 'Since 2022',
    image: IMAGES.heroMeals
  },
  {
    id: 'meera-krishnan',
    name: 'Meera Krishnan',
    role: 'Director of Culinary Operations & Nutrition',
    location: 'Secunderabad',
    bio: 'Pediatric nutritionist and community food systems architect. Designed our fortified millet-and-lentil school lunch protocols and oversees our flagship Secunderabad Community Kitchen.',
    yearsWithOrg: 'Since 2023',
    image: IMAGES.communityKitchen
  },
  {
    id: 'zarina-begum',
    name: 'Zarina Begum',
    role: 'Head of Rural Cooperatives & Grain Banks',
    location: 'Sangareddy & Mahabubnagar',
    bio: 'Two-decade veteran of Telangana women’s self-help collectives. Leads our 640-family homestead kitchen-garden network and drought-season village grain banks.',
    yearsWithOrg: 'Since 2023',
    image: IMAGES.womenSupport
  },
  {
    id: 'vikramaditya-rao',
    name: 'Vikramaditya Rao',
    role: 'Lead — Rapid Response & Field Logistics',
    location: 'Khammam & Ranga Reddy',
    bio: 'Supply-chain engineer specializing in last-mile rural distribution and 24-hour monsoon flood deployment across Telangana’s riverine corridors.',
    yearsWithOrg: 'Since 2024',
    image: IMAGES.emergencyRelief
  }
];
