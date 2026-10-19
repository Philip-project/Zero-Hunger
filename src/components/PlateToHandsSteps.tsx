import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Heart,
  Ticket,
  ChefHat,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface Step {
  number: string;
  stepLabel: string;
  title: string;
  description: string;
  icon: React.ElementType;
  accentColor: string;
  tag: string;
  proofDetail: string;
}

const STEPS: Step[] = [
  {
    number: '01',
    stepLabel: 'STEP 01',
    title: 'Choose Your ₹150 Meal Box',
    description:
      'Select a freshly prepared Protein, Veg, or Kids nutrition box from our daily Hyderabad kitchen menu.',
    icon: ShoppingBag,
    accentColor: '#49E619',
    tag: 'Daily Fresh Prep',
    proofDetail: 'Menu rotated daily with local grains & vegetables',
  },
  {
    number: '02',
    stepLabel: 'STEP 02',
    title: '1-for-1 Dual Checkout',
    description:
      'Pay only ₹150 for your own meal. Our Buy 1, Give 1 model automatically funds a second hot meal for a child in need.',
    icon: Heart,
    accentColor: '#4EDBE2',
    tag: '₹150 Funds 2 Meals',
    proofDetail: 'Zero markup charity allocation built into pricing',
  },
  {
    number: '03',
    stepLabel: 'STEP 03',
    title: 'Receive Your Impact Token',
    description:
      'A unique Charity Token connects your purchase to the sponsored child meal for 100% verifiable tracking.',
    icon: Ticket,
    accentColor: '#B9FF2C',
    tag: 'Cryptographic Hash',
    proofDetail: 'Token stamped: ZH-2026-A8F42K format',
  },
  {
    number: '04',
    stepLabel: 'STEP 04',
    title: 'Cooked Fresh in Our Kitchen',
    description:
      "Your meal is prepared fresh while the sponsored child's balanced meal is prepared in hygienic, FSSAI-certified community batches.",
    icon: ChefHat,
    accentColor: '#25C862',
    tag: 'Hygienic Batches',
    proofDetail: 'Clean stainless steel kitchen · Zero single-use plastic',
  },
  {
    number: '05',
    stepLabel: 'STEP 05',
    title: 'Assigned to Community Hub',
    description:
      'The sponsored meal is routed to a Hyderabad community centre and paired with an anonymized Beneficiary ID.',
    icon: MapPin,
    accentColor: '#4EDBE2',
    tag: 'Geotagged Dispatch',
    proofDetail: 'Dispatched in insulated stainless steel tiffins',
  },
  {
    number: '06',
    stepLabel: 'STEP 06',
    title: 'Child Receives Meal & Proof',
    description:
      'Once served, our field team marks the token delivered and sends your instant digital impact notification.',
    icon: CheckCircle2,
    accentColor: '#49E619',
    tag: 'Verified Delivery',
    proofDetail: 'Delivery photo & timestamp uploaded to ledger',
  },
];

export const PlateToHandsSteps: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <ScrollReveal>
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#49E619] animate-pulse" />
            <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.22em] text-[#49E619]">
              HOW YOUR MEAL CREATES IMPACT · 6-STAGE TOKEN TRAIL
            </span>
          </div>

          <h2 className="font-display-sans uppercase text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.04em] leading-[0.96] text-white">
            FROM YOUR PLATE TO <br />
            <span className="text-[#49E619]">A CHILD'S HANDS</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl">
            Follow your meal’s journey from checkout to a child’s hands. Every step
            is connected, geotagged, and backed by a 100% verifiable impact token trail.
          </p>
        </div>
      </ScrollReveal>

      {/* 6 Bento Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {STEPS.map((step, idx) => {
          const Icon = step.icon;

          return (
            <ScrollReveal key={step.number} delay={0.06 * idx}>
              <div className="group relative rounded-[18px] bg-[#122023] border border-white/10 hover:border-white/25 p-6 sm:p-7 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60">
                <div>
                  {/* Top Bar: Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono-tabular text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-[6px] border border-white/15 bg-white/5 text-white/90">
                      {step.stepLabel}
                    </span>
                    <div
                      className="w-10 h-10 rounded-[10px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${step.accentColor}20`,
                        color: step.accentColor,
                      }}
                    >
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-display-sans uppercase text-xl sm:text-2xl font-black text-white tracking-tight leading-snug transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-white/75 leading-relaxed">
                    {step.description}
                  </p>

                  <p className="mt-2 text-[11px] text-white/50 leading-normal italic">
                    {step.proofDetail}
                  </p>
                </div>

                {/* Bottom Metadata Strip */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-2 text-xs">
                  <span
                    className="font-mono-tabular text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[4px]"
                    style={{
                      backgroundColor: `${step.accentColor}18`,
                      color: step.accentColor,
                    }}
                  >
                    {step.tag}
                  </span>
                  <span className="text-[11px] text-white/50 font-mono-tabular">
                    STAGE {step.number} / 06
                  </span>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Assurance / Tracking Strip */}
      <ScrollReveal delay={0.25}>
        <div className="mt-10 rounded-[16px] bg-[#122023]/80 border border-white/10 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#49E619]/15 border border-[#49E619]/30 flex items-center justify-center text-[#49E619] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                Complete Chain-of-Custody Guarantee
              </p>
              <p className="text-xs text-white/60">
                Every ₹150 meal is timestamped, audited, and viewable in the real-time public delivery ledger.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/track-meal"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[8px] bg-[#49E619] hover:bg-[#B9FF2C] text-[#080808] text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>Track Live Token</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default PlateToHandsSteps;
