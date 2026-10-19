import { IMAGES } from './projects';

export const MEAL_IMAGES = {
  proteinPower: '/src/assets/images/meal_protein_power_1790675891041.jpg',
  nutritiousVeg: '/src/assets/images/meal_nutritious_veg_1790675909708.jpg',
  chickenProtein: '/src/assets/images/meal_chicken_protein_1790675922899.jpg',
  kidsNutrition: '/src/assets/images/meal_kids_nutrition_1790675937269.jpg',
  trackMealDelivery: '/src/assets/images/track_meal_delivery_1791400616620.jpg',
};

// ============================================================================
// BACKEND DATA STRUCTURES (11 Core Entities)
// ============================================================================

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'CUSTOMER' | 'ADMIN' | 'FIELD_COORDINATOR';
}

export type MealCategory =
  | 'ALL'
  | 'VEG'
  | 'NON-VEG'
  | 'PROTEIN'
  | 'KIDS MEALS'
  | 'FAMILY MEALS';

export interface MealProduct {
  id: string;
  slug: string;
  name: string;
  priceInr: number;
  categories: Exclude<MealCategory, 'ALL'>[];
  ingredients: string[];
  shortDescription: string;
  proteinGrams: number;
  calories: number;
  image: string;
  isEligibleBuyOneGiveOne: boolean;
}

export interface Order {
  id: string;
  userId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  deliveryAddress: string;
  totalAmountInr: number;
  sponsoredMealsCount: number;
  customerMealStatus: 'CONFIRMED' | 'PREPARING_IN_KITCHEN' | 'OUT_FOR_DELIVERY' | 'DELIVERED_TO_CUSTOMER';
  createdAt: string;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  productName: string;
  quantity: number;
  unitPriceInr: number;
  sponsoredChildMeals: number;
}

export interface Payment {
  id: string;
  orderId: string;
  amountInr: number;
  method: 'UPI' | 'CARD' | 'NET_BANKING';
  status: 'SUCCESS' | 'PENDING' | 'FAILED';
  transactionReference: string;
  paidAt: string;
}

export type CharityTokenStatus =
  | 'PURCHASED'
  | 'PREPARING'
  | 'ASSIGNED'
  | 'OUT_FOR_DELIVERY'
  | 'DELIVERED';

export interface CharityToken {
  id: string;
  tokenNumber: string;
  orderId: string;
  productId: string;
  productName: string;
  customerName: string;
  customerEmail?: string;
  customerPhone?: string;
  amountPaidInr: number;
  customerMealStatus: 'PREPARING_IN_KITCHEN' | 'OUT_FOR_DELIVERY' | 'DELIVERED_TO_CUSTOMER';
  beneficiaryId: string;
  deliveryLocation: string;
  status: CharityTokenStatus;
  purchasedAt: string;
  preparedAt?: string;
  assignedAt?: string;
  deliveredAt?: string;
  deliveryPhoto?: string;
  photoUploaded: boolean;
  notificationSent: boolean;
}

/**
 * Privacy-protected Beneficiary record:
 * Strictly omits child's full name, home address, phone number, or school details.
 */
export interface Beneficiary {
  id: string;
  beneficiaryCode: string; // e.g. "ZH-10482"
  ageGroup: string;
  communityCenter: string;
  region: string;
  safeguardingConsentVerified: boolean;
}

export interface MealAssignment {
  id: string;
  tokenId: string;
  tokenNumber: string;
  beneficiaryCode: string;
  communityCenter: string;
  assignedByAdmin: string;
  assignedAt: string;
}

export interface MealDelivery {
  id: string;
  tokenId: string;
  tokenNumber: string;
  beneficiaryCode: string;
  deliveryLocation: string;
  deliveredAt: string;
  verifiedByCoordinator: string;
}

export interface DeliveryPhoto {
  id: string;
  deliveryId: string;
  tokenNumber: string;
  photoUrl: string;
  caption: string;
  safeguardingCleared: boolean;
  uploadedAt: string;
}

export interface AppNotification {
  id: string;
  tokenNumber: string;
  recipientName: string;
  channels: ('WEBSITE' | 'EMAIL' | 'WHATSAPP')[];
  title: string;
  message: string;
  createdAt: string;
  read: boolean;
}

// ============================================================================
// GEOSPATIAL DATA: COMMUNITY KITCHENS, DISTRIBUTION HUBS & DELIVERY PATHS
// ============================================================================

export interface CommunityKitchenGeo {
  id: string;
  name: string;
  code: string;
  address: string;
  coords: [number, number]; // [lat, lng]
  dailyCapacity: string;
  operatingHours: string;
  headCoordinator: string;
}

export interface DeliveryHubRouteGeo {
  id: string;
  hubName: string;
  beneficiaryCode: string;
  region: string;
  kitchenId: string;
  coords: [number, number]; // [lat, lng]
  /** Multi-waypoint street corridor from Origin Kitchen to Community Distribution Hub */
  routeWaypoints: [number, number][];
  /** Intermediate checkpoint where thermal van is located when OUT_FOR_DELIVERY */
  transitMidpoint: [number, number];
  distanceKm: string;
  estimatedTransitMins: number;
  thermalBatchCode: string;
  thermalTempCelsius: string;
  childrenServedDaily: number;
}

export const COMMUNITY_KITCHENS: CommunityKitchenGeo[] = [
  {
    id: 'kitchen-secunderabad',
    name: 'Secunderabad Central Community Kitchen',
    code: 'ZH-KITCHEN-01',
    address: 'Station Road, Secunderabad, Hyderabad 500003',
    coords: [17.4399, 78.4983],
    dailyCapacity: '4,500 Warm Meals / Day',
    operatingHours: '04:30 AM – 07:30 PM IST',
    headCoordinator: 'Ananya Reddy (Kitchen Operations)',
  },
  {
    id: 'kitchen-banjara',
    name: 'Banjara Hills Dispatch Kitchen',
    code: 'ZH-KITCHEN-02',
    address: 'Road No. 12, Banjara Hills, Hyderabad 500034',
    coords: [17.4138, 78.4398],
    dailyCapacity: '2,800 Warm Meals / Day',
    operatingHours: '05:30 AM – 08:00 PM IST',
    headCoordinator: 'Mohammed Tariq (Logistics & Cold Chain)',
  },
];

export const CUSTOMER_DELIVERY_GEO = {
  label: 'Customer Doorstep (Banjara Hills, Rd No. 12)',
  coords: [17.4172, 78.4465] as [number, number],
  routeFromCentralKitchen: [
    [17.4399, 78.4983],
    [17.4345, 78.4840],
    [17.4285, 78.4695],
    [17.4220, 78.4565],
    [17.4172, 78.4465],
  ] as [number, number][],
  distanceKm: '6.4 km',
};

export const DELIVERY_HUBS_GEO: DeliveryHubRouteGeo[] = [
  {
    id: 'hub-hyderabad-central',
    hubName: 'Hyderabad Community Centre',
    beneficiaryCode: 'ZH-10482',
    region: 'Musheerabad & Central Corridor',
    kitchenId: 'kitchen-secunderabad',
    coords: [17.4168, 78.5012],
    routeWaypoints: [
      [17.4399, 78.4983], // Secunderabad Central Kitchen
      [17.4348, 78.4991], // Clock Tower Corridor
      [17.4292, 78.4998], // Boiguda Bridge
      [17.4231, 78.5006], // Musheerabad Crossroad
      [17.4168, 78.5012], // Hyderabad Community Centre
    ],
    transitMidpoint: [17.4262, 78.5002],
    distanceKm: '3.4 km',
    estimatedTransitMins: 14,
    thermalBatchCode: 'BATCH-HYD-084A',
    thermalTempCelsius: '68.4°C',
    childrenServedDaily: 420,
  },
  {
    id: 'hub-ranga-reddy',
    hubName: 'Ranga Reddy School Veranda Hub',
    beneficiaryCode: 'ZH-10819',
    region: 'Ranga Reddy West Education Zone',
    kitchenId: 'kitchen-secunderabad',
    coords: [17.3752, 78.4315],
    routeWaypoints: [
      [17.4399, 78.4983], // Secunderabad Central Kitchen
      [17.4240, 78.4810], // Tank Bund West
      [17.4065, 78.4650], // Mehdipatnam Corridor
      [17.3905, 78.4485], // Attapur Ring Road
      [17.3752, 78.4315], // Ranga Reddy School Veranda Hub
    ],
    transitMidpoint: [17.4065, 78.4650],
    distanceKm: '10.8 km',
    estimatedTransitMins: 26,
    thermalBatchCode: 'BATCH-RRD-112B',
    thermalTempCelsius: '67.1°C',
    childrenServedDaily: 610,
  },
  {
    id: 'hub-old-city',
    hubName: 'Old City Courtyard Kitchen',
    beneficiaryCode: 'ZH-11045',
    region: 'Charminar & South Heritage Ward',
    kitchenId: 'kitchen-secunderabad',
    coords: [17.3616, 78.4747],
    routeWaypoints: [
      [17.4399, 78.4983], // Secunderabad Central Kitchen
      [17.4195, 78.4925], // Chilkalguda South
      [17.3980, 78.4865], // Koti Women's College Road
      [17.3788, 78.4805], // Nayapul Musi Bridge
      [17.3616, 78.4747], // Old City Courtyard Hub
    ],
    transitMidpoint: [17.3980, 78.4865],
    distanceKm: '9.2 km',
    estimatedTransitMins: 22,
    thermalBatchCode: 'BATCH-OLD-049C',
    thermalTempCelsius: '67.8°C',
    childrenServedDaily: 530,
  },
];

export function getDeliveryRouteForLocation(
  locationName?: string,
  beneficiaryId?: string
): DeliveryHubRouteGeo {
  if (locationName) {
    const normalized = locationName.toLowerCase();
    const byName = DELIVERY_HUBS_GEO.find(
      (h) =>
        normalized.includes(h.hubName.toLowerCase()) ||
        h.hubName.toLowerCase().includes(normalized)
    );
    if (byName) return byName;
  }
  if (beneficiaryId) {
    const byBen = DELIVERY_HUBS_GEO.find(
      (h) => h.beneficiaryCode.toUpperCase() === beneficiaryId.toUpperCase()
    );
    if (byBen) return byBen;
  }
  return DELIVERY_HUBS_GEO[0];
}

// ============================================================================
// CATALOG: ELIGIBLE ₹150 BUY-1-GIVE-1 MEALS
// ============================================================================

export const MEAL_PRODUCTS: MealProduct[] = [
  {
    id: 'meal-01',
    slug: 'protein-power-meal',
    name: 'Protein Power Meal',
    priceInr: 150,
    categories: ['PROTEIN', 'NON-VEG'],
    ingredients: ['Rice', 'Dal', 'Vegetables', 'Egg'],
    shortDescription: 'High-protein nutritious meal crafted for sustained daily energy.',
    proteinGrams: 28,
    calories: 640,
    image: MEAL_IMAGES.proteinPower,
    isEligibleBuyOneGiveOne: true,
  },
  {
    id: 'meal-02',
    slug: 'nutritious-veg-meal',
    name: 'Nutritious Veg Meal',
    priceInr: 150,
    categories: ['VEG'],
    ingredients: ['Jeera Rice', 'Yellow Moong Dal', 'Seasonal Greens', 'Whole Wheat Roti'],
    shortDescription: 'Wholesome, farm-fresh vegetarian thali balanced with iron-rich greens.',
    proteinGrams: 19,
    calories: 590,
    image: MEAL_IMAGES.nutritiousVeg,
    isEligibleBuyOneGiveOne: true,
  },
  {
    id: 'meal-03',
    slug: 'egg-and-rice-meal',
    name: 'Egg & Rice Meal',
    priceInr: 150,
    categories: ['NON-VEG', 'PROTEIN'],
    ingredients: ['Steamed Basmati Rice', 'Spiced Two-Egg Curry', 'Dal Tadka', 'Salad'],
    shortDescription: 'Essential amino-acid rich egg curry paired with slow-simmered lentils.',
    proteinGrams: 26,
    calories: 620,
    image: MEAL_IMAGES.proteinPower,
    isEligibleBuyOneGiveOne: true,
  },
  {
    id: 'meal-04',
    slug: 'chicken-protein-meal',
    name: 'Chicken Protein Meal',
    priceInr: 150,
    categories: ['NON-VEG', 'PROTEIN'],
    ingredients: ['Homestyle Herb Chicken', 'Fragrant Rice', 'Black Lentils', 'Steamed Beans'],
    shortDescription: 'Lean homestyle simmered chicken curry with mineral-dense black dal.',
    proteinGrams: 34,
    calories: 680,
    image: MEAL_IMAGES.chickenProtein,
    isEligibleBuyOneGiveOne: true,
  },
  {
    id: 'meal-05',
    slug: 'dal-and-paneer-meal',
    name: 'Dal & Paneer Meal',
    priceInr: 150,
    categories: ['VEG', 'PROTEIN'],
    ingredients: ['Fresh Paneer', 'Spinach-Tomato Gravy', 'Dal Tadka', '2 Rotis & Rice'],
    shortDescription: 'Calcium-rich cottage cheese and golden lentils for complete vegetarian protein.',
    proteinGrams: 24,
    calories: 650,
    image: MEAL_IMAGES.nutritiousVeg,
    isEligibleBuyOneGiveOne: true,
  },
  {
    id: 'meal-06',
    slug: 'kids-nutrition-box',
    name: 'Kids Nutrition Box',
    priceInr: 150,
    categories: ['KIDS MEALS', 'VEG'],
    ingredients: ['Golden Millet Khichdi', 'Veg-Paneer Medallions', 'Fresh Fruit', 'Ragi Laddu'],
    shortDescription: 'Pediatrician-formulated warm meal box rich in iron, calcium, and natural energy.',
    proteinGrams: 18,
    calories: 520,
    image: MEAL_IMAGES.kidsNutrition,
    isEligibleBuyOneGiveOne: true,
  },
  {
    id: 'meal-07',
    slug: 'family-shared-tiffin',
    name: 'Family Nutrition Tiffin',
    priceInr: 150,
    categories: ['FAMILY MEALS', 'VEG'],
    ingredients: ['Generous Rice', 'Dual Lentil Dal', 'Seasonal Subzi', '4 Soft Rotis'],
    shortDescription: 'Hearty homestyle community tiffin box crafted with zero-waste kitchen practices.',
    proteinGrams: 22,
    calories: 670,
    image: MEAL_IMAGES.nutritiousVeg,
    isEligibleBuyOneGiveOne: true,
  },
];

// ============================================================================
// ANONYMIZED BENEFICIARIES & CONSENTED PROOF PHOTOS
// ============================================================================

export const BENEFICIARIES: Beneficiary[] = [
  {
    id: 'ben-01',
    beneficiaryCode: 'ZH-10482',
    ageGroup: 'Early Childhood (6–9 yrs)',
    communityCenter: 'Hyderabad Community Centre',
    region: 'Secunderabad & Musheerabad Hub',
    safeguardingConsentVerified: true,
  },
  {
    id: 'ben-02',
    beneficiaryCode: 'ZH-10819',
    ageGroup: 'Primary Student (8–11 yrs)',
    communityCenter: 'Ranga Reddy School Veranda Hub',
    region: 'Ranga Reddy District',
    safeguardingConsentVerified: true,
  },
  {
    id: 'ben-03',
    beneficiaryCode: 'ZH-11045',
    ageGroup: 'Early Childhood (5–8 yrs)',
    communityCenter: 'Old City Courtyard Kitchen',
    region: 'Hyderabad South',
    safeguardingConsentVerified: true,
  },
];

export const CONSENTED_DELIVERY_PHOTOS = [
  {
    id: 'proof-01',
    label: 'Hyderabad Community Centre — Midday Meal Service',
    url: IMAGES.heroMeals,
  },
  {
    id: 'proof-02',
    label: 'School Veranda Nutrition Hub — Fresh Lunch Distribution',
    url: IMAGES.schoolNutrition,
  },
  {
    id: 'proof-03',
    label: 'Secunderabad Community Kitchen — Fresh Thali Dispatch',
    url: IMAGES.communityKitchen,
  },
  {
    id: 'proof-04',
    label: 'Kitchen Dispatch Counter — Courier Meal Ready Handoff',
    url: '/src/assets/images/track_meal_delivery_1791400616620.jpg',
  },
];

// ============================================================================
// INITIAL SEEDED CHARITY TOKENS (So /track-meal & Admin Dashboard work immediately)
// ============================================================================

export const INITIAL_CHARITY_TOKENS: CharityToken[] = [
  {
    id: 'tok-seed-1',
    tokenNumber: 'ZH-2026-A8F42K',
    orderId: 'ORD-2026-9012',
    productId: 'meal-01',
    productName: 'Protein Power Meal',
    customerName: 'Philip',
    customerEmail: 'philip@zerohunger.org',
    customerPhone: '+91 98480 12345',
    amountPaidInr: 150,
    customerMealStatus: 'DELIVERED_TO_CUSTOMER',
    beneficiaryId: 'ZH-10482',
    deliveryLocation: 'Hyderabad Community Centre',
    status: 'DELIVERED',
    purchasedAt: '29 SEP 2026',
    preparedAt: '30 SEP 2026',
    assignedAt: '30 SEP 2026',
    deliveredAt: '01 OCT 2026',
    deliveryPhoto: IMAGES.heroMeals,
    photoUploaded: true,
    notificationSent: true,
  },
  {
    id: 'tok-seed-2',
    tokenNumber: 'ZH-2026-8F42K7',
    orderId: 'ORD-2026-9048',
    productId: 'meal-01',
    productName: 'Protein Power Meal',
    customerName: 'Philip',
    customerEmail: 'philip@zerohunger.org',
    customerPhone: '+91 98480 12345',
    amountPaidInr: 150,
    customerMealStatus: 'DELIVERED_TO_CUSTOMER',
    beneficiaryId: 'ZH-10482',
    deliveryLocation: 'Hyderabad Community Centre',
    status: 'OUT_FOR_DELIVERY',
    purchasedAt: '29 SEP 2026',
    preparedAt: '30 SEP 2026',
    assignedAt: '30 SEP 2026',
    deliveryPhoto: IMAGES.schoolNutrition,
    photoUploaded: false,
    notificationSent: false,
  },
];
