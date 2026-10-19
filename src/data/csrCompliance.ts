export interface CSRComplianceDoc {
  id: string;
  title: string;
  category: 'TAX_EXEMPTION' | 'GOV_REGISTRATION' | 'AUDIT_FINANCIAL' | 'LEGAL_MOU';
  description: string;
  referenceNumber: string;
  validity: string;
  fileSize: string;
  badgeText: string;
}

export const CSR_STATUTORY_CREDENTIALS = {
  section80G: {
    regNumber: 'AAATZ1234F2180G1',
    authority: 'Principal Commissioner of Income Tax (Exemption), Hyderabad',
    benefit: '50% Income Tax Exemption under Section 80G(5)(vi) of the Income Tax Act, 1961',
    validity: 'Perpetual / Active under New IT Portal Re-validation',
  },
  section12A: {
    regNumber: 'AAATZ1234FE20221',
    authority: 'Directorate of Income Tax (Exemption)',
    benefit: 'Zero tax on trust operational funds; 100% corpus dedicated to charitable food relief',
    validity: 'Perpetual Lifetime Exemption',
  },
  mcaCSR1: {
    regNumber: 'CSR00048291',
    authority: 'Ministry of Corporate Affairs, Government of India',
    benefit: 'Legally certified implementing entity for mandatory Corporate CSR under Section 135 & Schedule VII of Companies Act, 2013',
    validity: 'Active on MCA V3 Portal',
  },
  darpanId: {
    regNumber: 'TS/2022/0319482',
    authority: 'NITI Aayog, Government of India',
    benefit: 'Recognized Voluntary Organization for CSR & Central/State Government public-private partnerships',
    validity: 'Verified & Active',
  },
  pan: 'AAATZ1234F',
  tan: 'HYDZ01928F',
  registeredAddress: 'Zero Hunger Initiative, Plot 14, Clock Tower Corridor, Secunderabad, Telangana 500003',
  fcraStatus: 'Compliant · Section 9(1) of FCRA 2010 Prior Intimation Protocol',
};

export const COMPLIANCE_DOCUMENTS: CSRComplianceDoc[] = [
  {
    id: 'doc-80g',
    title: 'Section 80G Approval Certificate & Order',
    category: 'TAX_EXEMPTION',
    description: 'Official IT Department order granting 50% deduction on all eligible charitable contributions under Section 80G(5)(vi).',
    referenceNumber: 'ITBA/EXM/S/80G/2023-24/1049281729(1)',
    validity: 'Permanent / Active',
    fileSize: '412 KB · PDF',
    badgeText: '50% TAX DEDUCTION',
  },
  {
    id: 'doc-12a',
    title: 'Section 12A Registration & Trust Deed',
    category: 'TAX_EXEMPTION',
    description: 'Statutory proof of registration as an unconditional charitable trust dedicated to eradication of child hunger & poverty.',
    referenceNumber: 'ITBA/EXM/12A/2022-23/8492019481(1)',
    validity: 'Lifetime Exemption',
    fileSize: '680 KB · PDF',
    badgeText: 'TAX EXEMPT TRUST',
  },
  {
    id: 'doc-csr1',
    title: 'MCA CSR-1 Registration Letter',
    category: 'GOV_REGISTRATION',
    description: 'Ministry of Corporate Affairs formal acknowledgment enabling public and private companies to route CSR funds directly.',
    referenceNumber: 'MCA-CSR1-HYD-00048291-2023',
    validity: 'Schedule VII Certified',
    fileSize: '320 KB · PDF',
    badgeText: 'COMPANIES ACT 135',
  },
  {
    id: 'doc-form10be',
    title: 'Form 10BE Annual Statement of Donations Sample',
    category: 'TAX_EXEMPTION',
    description: 'Digital certificate issued via IT Portal containing Unique Registration Number (URN) verifying that donor details are submitted directly to the IT Department.',
    referenceNumber: 'FORM-10BE-SAMPLE-2025-26',
    validity: 'Issued within 48h of year-end',
    fileSize: '290 KB · PDF',
    badgeText: 'AUTOMATIC AIS MATCH',
  },
  {
    id: 'doc-audit-24',
    title: 'Audited Financial Statements (FY 2024–2025)',
    category: 'AUDIT_FINANCIAL',
    description: 'Statutory balance sheet, income & expenditure account, and independent chartered accountant audit report with 96% program expenditure efficiency.',
    referenceNumber: 'CA-UDIN: 25048291AAAAAC9812',
    validity: 'Statutory Audited',
    fileSize: '1.4 MB · PDF',
    badgeText: 'CLEAN AUDIT REPORT',
  },
  {
    id: 'doc-csr-mou',
    title: 'Standard Corporate CSR Agreement & MoU Draft',
    category: 'LEGAL_MOU',
    description: 'Ready-to-execute bilateral Memorandum of Understanding detailing deliverables, milestones, photo/video evidence protocols, and quarterly audit cadences.',
    referenceNumber: 'ZH-MOU-CORPORATE-TEMPLATE-V4',
    validity: 'Customizable for Corporates',
    fileSize: '540 KB · PDF / Word',
    badgeText: 'LEGAL TEMPLATE',
  },
  {
    id: 'doc-utilization',
    title: 'Geotagged Utilization Certificate (UC) Format',
    category: 'AUDIT_FINANCIAL',
    description: 'Detailed Chartered Accountant certified Fund Utilization Certificate format with geotagged distribution timestamps and beneficiary acknowledgments.',
    referenceNumber: 'ZH-UC-FORMAT-ANNEXURE-B',
    validity: 'CAG / CSR Compliant',
    fileSize: '480 KB · PDF',
    badgeText: 'FULL AUDIT TRAIL',
  },
  {
    id: 'doc-pan-darpan',
    title: 'Trust PAN, TAN & NITI Aayog Darpan Proofs',
    category: 'GOV_REGISTRATION',
    description: 'Composite statutory identity sheet including PAN card copy, TAN allotment, NGO Darpan verification screenshot, and registered office certificate.',
    referenceNumber: 'ZH-KYC-COMPOSITE-2026',
    validity: 'Verified KYC Dossier',
    fileSize: '890 KB · PDF',
    badgeText: 'INSTITUTIONAL KYC',
  },
];

export interface CSRTierImpact {
  budgetInr: number;
  label: string;
  mealsServed: number;
  beneficiariesCount: number;
  taxSavings80GInr: number;
  effectiveCostInr: number;
  brandingDeliverables: string[];
}

export function calculateCSRImpact(budgetInr: number): CSRTierImpact {
  const safeBudget = Math.max(5000, budgetInr);
  // ₹25 per hot nutritious child meal
  const meals = Math.floor(safeBudget / 25);
  // Each child received 20 school days of meals or 1 family nourished for 10 days
  const beneficiaries = Math.floor(meals / 20);
  // 50% deduction of donation amount under 80G; corporate tax bracket ~25% or 30% individual
  const taxSavings = Math.round(safeBudget * 0.5 * 0.312); // assuming 30% base + surcharge/cess
  const effectiveCost = safeBudget - taxSavings;

  const branding: string[] = [
    'Immediate 80G tax receipt & Form 10BE certificate',
    'Customized corporate gratitude placards with company logo held during meal service',
    'High-resolution geotagged photo album & field video documentary',
  ];

  if (safeBudget >= 100000) {
    branding.push('Dedicated co-branded Community Kitchen Day with employee volunteering');
    branding.push('Statutory Chartered Accountant certified Utilization Certificate (UC)');
  }
  if (safeBudget >= 500000) {
    branding.push('Permanent plaque at Secunderabad / Old City Community Hub');
    branding.push('Quarterly ESG impact audit deck aligned with UN SDG 2 & SDG 12');
  }

  return {
    budgetInr: safeBudget,
    label: safeBudget >= 1000000 ? 'Mega CSR Cluster Partner' : safeBudget >= 250000 ? 'Regional Feeding Patron' : 'Community Nutrition Partner',
    mealsServed: meals,
    beneficiariesCount: beneficiaries,
    taxSavings80GInr: taxSavings,
    effectiveCostInr: effectiveCost,
    brandingDeliverables: branding,
  };
}
