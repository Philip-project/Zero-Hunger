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
      'Select any freshly prepared ₹150 Protein, Veg, or Kids nutrition box from our daily hygienic kitchen menu.',
    bgClass: 'bg-[#49E619]',
    textClass: 'text-[#122023]',
    numeralClass: 'text-[#122023]',
  },
  {
    number: '2',
    titleLines: ['1-FOR-1 DUAL', 'CHECKOUT'],
    description:
      'Pay only ₹150 for your own meal. Our Buy 1 Give 1 program automatically funds a second hot meal for a child at no extra cost.',
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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 mb-6 sm:mb-8">
          {/* Left: Eyebrow + Main Heading */}
          <div className="max-w-2xl">
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
          </div>

          {/* Right: Supporting Description beside the heading */}
          <div className="max-w-md lg:pb-1">
            <p className="text-xs xs:text-sm sm:text-base text-white/75 leading-relaxed font-medium">
              Follow your meal’s journey from checkout to a child’s hands. Every step
              is connected, geotagged, and backed by a 100% verifiable impact token trail.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* 2-Column Bold Numbered Cards Grid Matching Reference Design */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 pt-16 sm:pt-20 lg:pt-24">
        {STEPS.map((step, idx) => {
          const isFirst = idx === 0;
          const isSecond = idx === 1;
          return (
            <ScrollReveal key={step.number} delay={0.05 * idx} className="relative">
              <div
                className={`relative rounded-[20px] sm:rounded-[26px] ${step.bgClass} ${step.textClass} p-5 xs:p-6 sm:p-7 lg:p-8 h-full flex items-center gap-4 xs:gap-6 sm:gap-7 lg:gap-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5`}
              >
                {/* 3D Mascot sitting on top ledge of Step 1 card */}
                {isFirst && (
                  <div className="absolute top-0 left-3 xs:left-5 sm:left-6 lg:left-8 pointer-events-none z-20 select-none">
                    <div className="relative -translate-y-[61.5%] w-32 xs:w-36 sm:w-44 lg:w-52">
                      {/* Doodles from reference screenshot */}
                      <svg
                        className="absolute -top-3 -left-3 sm:-left-4 w-7 h-7 text-[#49E619] opacity-90 animate-pulse"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M4 14l3-3m-1-4l3 3" />
                      </svg>
                      <svg
                        className="absolute -top-6 left-1/2 -translate-x-1/2 w-7 h-7 text-[#B9FF2C] opacity-90"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M12 3v4m6 1l-3 3" />
                      </svg>
                      <svg
                        className="absolute -top-2 -right-3 sm:-right-4 w-8 h-8 text-[#49E619] opacity-90"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M6 18l5-5m-1-7l4 4m3 2l3 1" />
                      </svg>

                      <img
                        src="/images/stage1.png"
                        alt="Zero Hunger Mascot pointing to step 1"
                        className="w-full h-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.45)]"
                      />
                    </div>
                  </div>
                )}

                {/* 3D Mascot lounging on top ledge of Step 2 card */}
                {isSecond && (
                  <div className="absolute top-0 left-2 xs:left-4 sm:left-6 lg:left-8 pointer-events-none z-20 select-none">
                    <div className="relative -translate-y-[67.5%] w-36 xs:w-40 sm:w-48 lg:w-56">
                      {/* Cyan Doodles from reference screenshot */}
                      <svg
                        className="absolute -top-3 -left-3 sm:-left-4 w-7 h-7 text-[#4EDBE2] opacity-90 animate-pulse"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M4 14l3-3m-1-4l3 3" />
                      </svg>
                      <svg
                        className="absolute -top-5 left-12 w-6 h-6 text-[#4EDBE2] opacity-90"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M12 3v4m5 1l-3 3" />
                      </svg>
                      <svg
                        className="absolute -top-1 right-2 sm:right-3 w-6 h-6 text-[#4EDBE2] opacity-90"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M5 12h3m2 3l2-2" />
                      </svg>

                      <img
                        src="/images/stage2.png"
                        alt="Zero Hunger Mascot relaxing on step 2"
                        className="w-full h-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.45)]"
                      />
                    </div>
                  </div>
                )}

                {/* Giant Bold Numeral on the Left */}
                <div
                  className={`font-display-sans font-black text-6xl xs:text-7xl sm:text-8xl lg:text-9xl leading-none shrink-0 select-none tracking-tight ${step.numeralClass} relative z-10`}
                >
                  {step.number}
                </div>

                {/* Title & Description Stack on the Right */}
                <div
                  className={`flex-1 flex flex-col justify-center min-w-0 relative z-10 ${
                    isFirst || isSecond ? 'pl-16 xs:pl-20 sm:pl-28 lg:pl-32' : ''
                  }`}
                >
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
          );
        })}
      </div>
    </div>
  );
};

export default PlateToHandsSteps;
