export interface ImpactMetric {
  id: string;
  value: number;
  suffix: string;
  displayShort: string;
  label: string;
  sublabel: string;
  timeframe: string;
  category: string;
}

export interface TimelineEvent {
  year: string;
  quarter: string;
  title: string;
  location: string;
  metric: string;
  description: string;
}

export interface RegionalBreakdown {
  district: string;
  communities: number;
  mealsServed: string;
  primaryProgram: string;
  status: string;
}

export const HOME_IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'meals',
    value: 12480,
    suffix: '+',
    displayShort: '12K+',
    label: 'Meals Served',
    sublabel: 'Freshly cooked, nutrient-balanced plates prepared without single-use plastics.',
    timeframe: 'FY 2025–2026 Verified Ledger',
    category: 'Direct Nourishment'
  },
  {
    id: 'communities',
    value: 28,
    suffix: '',
    displayShort: '28',
    label: 'Communities Reached',
    sublabel: 'Urban hospital corridors, peri-urban settlements, and rural agrarian villages.',
    timeframe: 'Across 5 Telangana Districts',
    category: 'Geographic Footprint'
  },
  {
    id: 'families',
    value: 640,
    suffix: '+',
    displayShort: '640+',
    label: 'Families Supported',
    sublabel: 'Sustained through monthly grain banks, maternal baskets, and kitchen gardens.',
    timeframe: '94% Year-Over-Year Retention',
    category: 'Household Resilience'
  }
];

export const FULL_IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'meals-served',
    value: 12480,
    suffix: '+',
    displayShort: '12,480+',
    label: 'Meals Served',
    sublabel: 'Hot, balanced meals cooked daily in our community kitchens and served with dignity.',
    timeframe: 'Cumulative Verified Count',
    category: 'Nutrition'
  },
  {
    id: 'families-supported',
    value: 640,
    suffix: '+',
    displayShort: '640+',
    label: 'Families Supported',
    sublabel: 'Households receiving monthly dry-ration resilience crates and maternal nutrition.',
    timeframe: 'Active Multi-Month Enrollment',
    category: 'Resilience'
  },
  {
    id: 'communities-reached',
    value: 28,
    suffix: '',
    displayShort: '28',
    label: 'Communities Reached',
    sublabel: 'Partner villages, school clusters, and urban transit corridors across Telangana.',
    timeframe: 'Urban & Rural Hubs',
    category: 'Reach'
  },
  {
    id: 'active-volunteers',
    value: 185,
    suffix: '+',
    displayShort: '185+',
    label: 'Volunteers',
    sublabel: 'Culinary stewards, pediatric nutritionists, logistics drivers, and neighborhood coordinators.',
    timeframe: '82% Monthly Recurring',
    category: 'Human Capital'
  },
  {
    id: 'distribution-drives',
    value: 312,
    suffix: '',
    displayShort: '312',
    label: 'Food Distribution Drives',
    sublabel: 'Zero-waste morning and midday field deployments completed without a single missed day.',
    timeframe: '100% On-Schedule Delivery',
    category: 'Operations'
  }
];

export const IMPACT_TIMELINE: TimelineEvent[] = [
  {
    year: '2022',
    quarter: 'Q4 · THE FIRST VESSEL',
    title: 'Fifty Plates Outside Osmania General Hospital',
    location: 'Afzalgunj, Hyderabad',
    metric: '50 Meals / Day',
    description:
      'Started by three neighbors cooking rice and dal in a home courtyard for rural caregivers sleeping outside public hospital wards.'
  },
  {
    year: '2023',
    quarter: 'Q2 · CULINARY INFRASTRUCTURE',
    title: 'Secunderabad Flagship Community Kitchen Opens',
    location: 'Secunderabad, Hyderabad',
    metric: '450 Meals / Day',
    description:
      'Transitioned into a dedicated solar-assisted, zero-waste kitchen employing 14 women cooks from low-income neighborhoods at living wages.'
  },
  {
    year: '2024',
    quarter: 'Q1 · CLASSROOM NUTRITION',
    title: 'Launch of the Rural School Nutrition Initiative',
    location: 'Ranga Reddy District',
    metric: '14 Partner Schools',
    description:
      'Introduced warm morning millet porridge and fortified midday lunches across rural primary schools, lifting attendance to 96.4%.'
  },
  {
    year: '2025',
    quarter: 'Q3 · CLIMATE RAPID RESPONSE',
    title: 'Monsoon Flood Relief & Village Grain Banks',
    location: 'Khammam & Mahabubnagar',
    metric: '2,900+ Relief Kits',
    description:
      'Mobilized 24-hour rapid-response survival rations during riverine floods and established permanent community-governed grain banks.'
  },
  {
    year: '2026',
    quarter: 'Q1 · CIRCULAR SOVEREIGNTY',
    title: '12,480+ Meals & Women’s Agricultural Cooperatives',
    location: '28 Communities Across Telangana',
    metric: '640+ Families',
    description:
      'Connected 640 rural homestead gardens directly to our urban kitchens, turning food relief recipients into fair-trade produce suppliers.'
  }
];

export const REGIONAL_LEDGER: RegionalBreakdown[] = [
  {
    district: 'Hyderabad Urban Core',
    communities: 9,
    mealsServed: '5,420+',
    primaryProgram: 'Community Meal Program & Hospital Courtyards',
    status: 'Daily Active Service'
  },
  {
    district: 'Ranga Reddy Cluster',
    communities: 6,
    mealsServed: '3,420+',
    primaryProgram: 'School Nutrition Initiative (14 Schools)',
    status: 'Academic Calendar Daily'
  },
  {
    district: 'Mahabubnagar & Narayanpet',
    communities: 5,
    mealsServed: '1,640+',
    primaryProgram: 'Village Grain Banks & Senior Doorstep Crates',
    status: 'Monthly & Lean-Season'
  },
  {
    district: 'Sangareddy & Medak',
    communities: 4,
    mealsServed: '1,120+',
    primaryProgram: 'Maternal Baskets & Women’s Kitchen Gardens',
    status: 'Weekly Cooperative Harvest'
  },
  {
    district: 'Khammam Flood Corridor',
    communities: 4,
    mealsServed: '880+',
    primaryProgram: 'Emergency Food Relief & Resilience Kits',
    status: 'Rapid Response Standby'
  }
];

export const FINANCIAL_STEWARDSHIP = [
  {
    percentage: '88%',
    title: 'Direct Food Procurement & Kitchen Operations',
    description:
      'Every rupee is prioritized for whole grains, pulses, fresh seasonal produce from local farmers, clean cooking fuel, and living wages for community cooks.'
  },
  {
    percentage: '8%',
    title: 'Last-Mile Logistics & Cold/Thermal Chain',
    description:
      'Surgical-grade insulated stainless steel vessels, route fuel, and rural grain bank storage facilities that prevent post-harvest spoilage.'
  },
  {
    percentage: '4%',
    title: 'Audit, Nutrition Monitoring & Administration',
    description:
      'Independent third-party financial audits, pediatric hemoglobin/growth tracking in partner schools, and transparent public reporting.'
  }
];
