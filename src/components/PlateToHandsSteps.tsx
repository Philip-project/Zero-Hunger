import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface StepCard {
  number: string;
  titleLines: string[];
  description: string;
  bgClass: string;
  textClass: string;
  numeralClass: string;
}

const STEPS: StepCard[] = [
  {
    number: '1',
    titleLines: ['CHOOSE YOUR', '₹150 MEAL BOX'],
    description:
      'Select any freshly prepared ₹150 Protein, Veg, or Kids nutrition box from our daily Hyderabad kitchen menu.',
    bgClass: 'bg-[#49E619]',
    textClass: 'text-[#122023]',
    numeralClass: 'text-[#122023]',
  },
  {
    number: '2',
    titleLines: ['1-FOR-1 DUAL', 'CHECKOUT'],
    description:
      'Pay only ₹150 for your own meal. Our Buy 1, Give 1 program automatically funds a second hot meal for a child at ₹0 extra cost.',
    bgClass: 'bg-[#4EDBE2]',
    textClass: 'text-[#122023]',
    numeralClass: 'text-[#122023]',
  },
  {
    number: '3',
    titleLines: ['RECEIVE YOUR', 'IMPACT TOKEN'],
    description:
      'Our backend generates a unique Charity Token (e.g. ZH-2026-A8F42K) linking your purchase to a sponsored child meal.',
    bgClass: 'bg-[#B9FF2C]',
    textClass: 'text-[#122023]',
    numeralClass: 'text-[#122023]',
  },
  {
    number: '4',
    titleLines: ['COOKED FRESH', 'IN OUR KITCHEN'],
    description:
      "Your meal is dispatched hot to your doorstep while the child's balanced meal is prepared in thermal-sealed community batches.",
    bgClass: 'bg-[#188D44]',
    textClass: 'text-[#122023]',
    numeralClass: 'text-[#122023]',
  },
  {
    number: '5',
    titleLines: ['ASSIGNED TO', 'COMMUNITY HUB'],
    description:
      'The sponsored meal is routed to a Hyderabad community center and paired with an anonymized Beneficiary ID (ZH-10482).',
    bgClass: 'bg-[#F2F4F3]',
    textClass: 'text-[#122023]',
    numeralClass: 'text-[#122023]',
  },
  {
    number: '6',
    titleLines: ['CHILD RECEIVES', 'MEAL & PROOF'],
    description:
      'Once served, our field team marks the token delivered, uploads a safeguarding-cleared photo, and sends your impact notification.',
    bgClass: 'bg-[#49E619]',
    textClass: 'text-[#122023]',
    numeralClass: 'text-[#122023]',
  },
];

export const PlateToHandsSteps: React.FC = () => {
  return (
    <div className="w-full">
      {/* Section Heading */}
      <ScrollReveal>
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#49E619] animate-pulse" />
            <span className="text-[11px] xs:text-xs font-mono-tabular font-bold uppercase tracking-[0.22em] text-[#49E619]">
              HOW YOUR MEAL CREATES IMPACT · 6-STAGE TOKEN TRAIL
            </span>
          </div>

          <h2 className="font-display-sans uppercase text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] leading-[0.94] text-white break-words">
            FROM YOUR PLATE TO <br />
            <span className="text-[#49E619]">A CHILD&apos;S HANDS</span>
          </h2>

          <p className="mt-4 text-xs xs:text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl font-medium">
            Follow your meal’s journey from checkout to a child’s hands. Every step
            is connected, geotagged, and backed by a 100% verifiable impact token trail.
          </p>
        </div>
      </ScrollReveal>

      {/* 2-Column Bold Numbered Cards Grid Matching Reference Design */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
        {STEPS.map((step, idx) => (
          <ScrollReveal key={step.number} delay={0.05 * idx}>
            <div
              className={`rounded-[20px] sm:rounded-[26px] ${step.bgClass} ${step.textClass} p-5 xs:p-6 sm:p-7 lg:p-8 h-full flex items-center gap-4 xs:gap-6 sm:gap-7 lg:gap-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5`}
            >
              {/* Giant Bold Numeral on the Left */}
              <div
                className={`font-display-sans font-black text-6xl xs:text-7xl sm:text-8xl lg:text-9xl leading-none shrink-0 select-none tracking-tight ${step.numeralClass}`}
              >
                {step.number}
              </div>

              {/* Title & Description Stack on the Right */}
              <div className="flex-1 flex flex-col justify-center min-w-0">
                <h3 className="font-display-sans uppercase font-black text-lg xs:text-xl sm:text-2xl lg:text-[26px] leading-[1.02] tracking-tight">
                  {step.titleLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h3>

                <p className="mt-2 sm:mt-2.5 text-xs sm:text-[13px] lg:text-sm leading-relaxed font-medium opacity-90">
                  {step.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default PlateToHandsSteps;
