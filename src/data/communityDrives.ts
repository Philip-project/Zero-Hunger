export interface OccasionPackage {
  id: string;
  name: string;
  mealsCount: number;
  priceInr: number;
  popular?: boolean;
  description: string;
  suitableFor: string;
}

export const OCCASION_PACKAGES: OccasionPackage[] = [
  {
    id: 'mini-joy',
    name: 'Joy Share',
    mealsCount: 25,
    priceInr: 1875,
    description: 'Sponsors 25 piping-hot, nutritious meals with wholesome dal, seasonal vegetables & sona masoori rice.',
    suitableFor: 'Small birthdays & personal milestones',
  },
  {
    id: 'classroom-feast',
    name: 'Classroom Feast',
    mealsCount: 50,
    priceInr: 3750,
    popular: true,
    description: 'Feeds an entire school classroom or community veranda of children with a special festive sweet addition.',
    suitableFor: 'Kids birthdays & graduation milestones',
  },
  {
    id: 'community-dining',
    name: 'Community Table',
    mealsCount: 100,
    priceInr: 7500,
    description: 'A complete courtyard meal service serving patients, caregivers, and elders outside public hospitals.',
    suitableFor: 'Wedding anniversaries & family celebrations',
  },
  {
    id: 'grand-celebration',
    name: 'Grand Anniversary Feast',
    mealsCount: 250,
    priceInr: 18750,
    description: 'Large-scale feast across two community clusters with personalized printed placards and commemorative distribution.',
    suitableFor: 'Silver/Golden anniversaries & corporate celebrations',
  },
  {
    id: 'shelter-patron',
    name: 'Full Shelter Patron',
    mealsCount: 500,
    priceInr: 37500,
    description: 'Comprehensive day of nourishment providing breakfast, warm lunch, and fruits across 500 vulnerable individuals.',
    suitableFor: 'Memorial dedications & corporate leadership celebrations',
  },
];

export interface DistributionCenter {
  id: string;
  name: string;
  area: string;
  address: string;
  beneficiaryType: string;
  typicalServingTime: string;
  placardSupport: boolean;
}

export const DISTRIBUTION_CENTERS: DistributionCenter[] = [
  {
    id: 'osmania-courtyard',
    name: 'Osmania Hospital Caregivers Courtyard',
    area: 'Afzalgunj, Hyderabad',
    address: 'Gate 2 Courtyard, Osmania General Hospital, Afzalgunj 500012',
    beneficiaryType: 'Rural patient attendants, daily wage caregivers & destitute elders',
    typicalServingTime: '12:00 PM – 2:00 PM Daily',
    placardSupport: true,
  },
  {
    id: 'secunderabad-slum',
    name: 'Secunderabad Slum Children Nutrition Center',
    area: 'Secunderabad',
    address: 'Near Clock Tower Corridor, Station Road, Secunderabad 500003',
    beneficiaryType: 'Street-connected children, ragpicker families & after-school scholars',
    typicalServingTime: '1:00 PM – 3:30 PM Daily',
    placardSupport: true,
  },
  {
    id: 'blind-school-hostel',
    name: 'Telangana Special Care & Blind Youth Hostel',
    area: 'Malakpet, Hyderabad',
    address: 'Moosarambagh Road, Malakpet, Hyderabad 500036',
    beneficiaryType: 'Visually impaired students & differently-abled residents',
    typicalServingTime: '12:30 PM Lunch / 7:30 PM Dinner',
    placardSupport: true,
  },
  {
    id: 'ranga-reddy-rural',
    name: 'Ranga Reddy Rural Tribal School Veranda',
    area: 'Chevella Corridor, Ranga Reddy',
    address: 'Zilla Parishad High School Cluster, Shabad Road, Telangana 501504',
    beneficiaryType: 'Rural first-generation school students & kindergarten toddlers',
    typicalServingTime: '11:45 AM Midday Meal',
    placardSupport: true,
  },
  {
    id: 'sangareddy-elders',
    name: 'Sangareddy Destitute & Abandoned Elders Home',
    area: 'Sangareddy Cluster',
    address: 'Panchayat Bhavan Road, Near Old Bus Stand, Sangareddy 502001',
    beneficiaryType: 'Abandoned senior citizens, destitute widows & disabled individuals',
    typicalServingTime: '12:00 PM Daily',
    placardSupport: true,
  },
];

export interface OccasionSample {
  id: string;
  sponsorName: string;
  occasionType: string;
  placardText: string;
  beneficiaryQuote: string;
  date: string;
  mealsServed: number;
  centerName: string;
  image: string;
}

export const RECENT_OCCASIONS: OccasionSample[] = [
  {
    id: 'occ-01',
    sponsorName: 'Ananya & Vikram Malhotra',
    occasionType: '10th Birthday of Aarav',
    placardText: 'HAPPY 10TH BIRTHDAY AARAV! BLESSINGS FROM ZERO HUNGER KIDS',
    beneficiaryQuote: 'We sang the birthday song for little Aarav before our lunch! The hot vegetable pulao and kheer were delicious. Thank you Malhotra family!',
    date: '02 Oct 2026',
    mealsServed: 100,
    centerName: 'Secunderabad Slum Children Nutrition Center',
    image: '/src/assets/images/meal_protein_power_1790675891041.jpg',
  },
  {
    id: 'occ-02',
    sponsorName: 'Dr. Srinivas & Lakshmi Rao',
    occasionType: '25th Silver Wedding Anniversary',
    placardText: 'HAPPY 25TH ANNIVERSARY DR. SRINIVAS & LAKSHMI GARU',
    beneficiaryQuote: 'May God grant both of you long life and health. Sleeping with a full stomach outside the hospital ward is the greatest gift.',
    date: '28 Sep 2026',
    mealsServed: 250,
    centerName: 'Osmania Hospital Caregivers Courtyard',
    image: '/src/assets/images/meal_community_kitchen_1790675929837.jpg',
  },
  {
    id: 'occ-03',
    sponsorName: 'Rohit Khandelwal',
    occasionType: 'In Loving Memory of Late Smt. Sharda Devi',
    placardText: 'IN SACRED MEMORY OF SMT. SHARDA DEVI JI · FOREVER IN OUR HEARTS',
    beneficiaryQuote: 'Her soul rests in peace. Fifty elderly mothers and grandmothers received warm meals and fresh apples in her sacred memory.',
    date: '24 Sep 2026',
    mealsServed: 50,
    centerName: 'Sangareddy Destitute & Abandoned Elders Home',
    image: '/src/assets/images/meal_nutritious_veg_1790675909708.jpg',
  },
];

export interface ClothDropHub {
  id: string;
  name: string;
  address: string;
  landmark: string;
  hours: string;
  phone: string;
  accepts: string[];
}

export const CLOTH_DROP_HUBS: ClothDropHub[] = [
  {
    id: 'hub-secunderabad',
    name: 'Secunderabad Central Collection Depot',
    address: 'Plot 14, Clock Tower Corridor, Secunderabad 500003',
    landmark: 'Opposite Gandhi Medical Alumni Hall',
    hours: 'Open Daily · 7:00 AM – 8:30 PM',
    phone: '+91 98480 24190',
    accepts: ['Freshly washed wearable clothes', 'Blankets & woolens', 'Kids & infant garments', 'School shoes & bags'],
  },
  {
    id: 'hub-banjara',
    name: 'Banjara Hills Dignity Drop Box',
    address: 'Road No. 12, MLA Colony Main Junction, Banjara Hills 500034',
    landmark: 'Inside Community Park Entrance B',
    hours: '24/7 Monitored Steel Drop Bins',
    phone: '+91 98480 24191',
    accepts: ['Adult men & women wear', 'Winter jackets & sweaters', 'Bedsheets & blankets'],
  },
  {
    id: 'hub-hitec',
    name: 'Cyberabad Tech Corridor Drop Point',
    address: 'Mindspace Inorbit Road, Gate 3 Hub, Madhapur, Hitec City 500081',
    landmark: 'Next to Metro Pillar 1184',
    hours: 'Mon–Sat · 8:00 AM – 9:00 PM',
    phone: '+91 98480 24192',
    accepts: ['Formal shirts, pants & sarees', 'Warm clothing & socks', 'Baby clothing packs'],
  },
  {
    id: 'hub-afzalgunj',
    name: 'Old City & Hospital Relief Center',
    address: 'Near Nayab Hotel, High Court Road, Afzalgunj 500012',
    landmark: '200m from Osmania Hospital Gate 2',
    hours: 'Daily · 8:00 AM – 7:00 PM',
    phone: '+91 98480 24193',
    accepts: ['Dhotis, lungis, sarees & kurtas', 'Children clothing all sizes', 'Towels & clean beddings'],
  },
];

export interface LeftoverRescueCenter {
  id: string;
  name: string;
  distanceKm: string;
  address: string;
  acceptedVolume: string;
  contactNumber: string;
}

export const LEFTOVER_RESCUE_CENTERS: LeftoverRescueCenter[] = [
  {
    id: 'rescue-central',
    name: 'Secunderabad Central Culinary & Thermal Dispatch Hub',
    distanceKm: 'Central Base · Van dispatched within 35 mins',
    address: 'Clock Tower Corridor, Secunderabad 500003',
    acceptedVolume: '50 to 1,000+ meals (Equipped with 4 Insulated Vans)',
    contactNumber: '+91 98480 24190',
  },
  {
    id: 'rescue-afzalgunj',
    name: 'Afzalgunj & Hospital Night Shelter Distribution Station',
    distanceKm: 'Old City Hub · 15 mins response',
    address: 'Afzalgunj Hospital Grounds, Hyderabad 500012',
    acceptedVolume: '30 to 350 meals (Serves night attendants & homeless individuals)',
    contactNumber: '+91 98480 24194',
  },
  {
    id: 'rescue-hitec',
    name: 'Madhapur / Gachibowli Banquet & Corporate Rescue Unit',
    distanceKm: 'IT Corridor Base · 25 mins response',
    address: 'HITEX Exhibition Road, Izzat Nagar, Madhapur 500084',
    acceptedVolume: '40 to 600 meals (Direct tie-ups with wedding halls & convention centers)',
    contactNumber: '+91 98480 24195',
  },
];
