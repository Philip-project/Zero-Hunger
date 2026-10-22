import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface StepCardItem {
  number: string;
  titleLines: [string, string];
  description: string;
  bgClass: string;
  href: string;
}

const STEPS: StepCardItem[] = [
  {
    number: '1',
    titleLines: ['CHOOSE YOUR', '₹150 MEAL BOX'],
    description:
      'Select any freshly prepared ₹150 Protein, Veg, or Kids nutrition box from our daily Hyderabad kitchen menu.',
    bgClass: 'bg-[#49E619]',
    href: '/meal-box',
  },
  {
    number: '2',
    titleLines: ['1-FOR-1 DUAL', 'CHECKOUT'],
    description:
      'Pay only ₹150 for your own meal. Our Buy 1, Give 1 program automatically funds a second hot meal for a child at ₹0 extra cost.',
    bgClass: 'bg-[#4EDBE2]',
    href: '/meal-box',
  },
  {
    number: '3',
    titleLines: ['RECEIVE YOUR', 'IMPACT TOKEN'],
    description:
      'Our backend generates a unique Charity Token (e.g. ZH-2026-A8F42K) linking your purchase to a sponsored child meal.',
    bgClass: 'bg-[#B9FF2C]',
    href: '/track-meal?token=ZH-2026-A8F42K',
  },
  {
    number: '4',
    titleLines: ['COOKED FRESH', 'IN OUR KITCHEN'],
    description:
      'Your meal is dispatched hot to your doorstep while the child’s balanced meal is prepared in thermal-sealed community batches.',
    bgClass: 'bg-[#188D44]',
    href: '/track-meal?token=ZH-2026-A8F42K',
  },
  {
    number: '5',
    titleLines: ['ASSIGNED TO', 'COMMUNITY HUB'],
    description:
      'The sponsored meal is routed to a Hyderabad community center and paired with an anonymized Beneficiary ID (ZH-10482).',
    bgClass: 'bg-[#F2F4F3]',
    href: '/track-meal?token=ZH-2026-A8F42K',
  },
  {
    number: '6',
    titleLines: ['CHILD RECEIVES', 'MEAL & PROOF'],
    description:
      'Once served, our field team marks the token delivered, uploads a safeguarding-cleared photo, and sends your impact notification.',
    bgClass: 'bg-[#49E619]',
    href: '/track-meal?token=ZH-2026-A8F42K',
  },
];

/**
 * 18-Point Geometric Starburst SVG matching the reference header icon
 */
const StarburstBadge: React.FC<{ className?: string }> = ({ className }) => {
  const points = 18;
  const outerRadius = 24;
  const innerRadius = 17.5;
  const center = 24;
  const coords: string[] = [];

  for (let i = 0; i < points * 2; i++) {
    const angle = (i * Math.PI) / points - Math.PI / 2;
    const r = i % 2 === 0 ? outerRadius : innerRadius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    coords.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }

  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <polygon points={coords.join(' ')} />
    </svg>
  );
};

export const PlateToHandsSteps: React.FC = () => {
  return (
    <div className="bg-[#122023] text-white rounded-2xl sm:rounded-[24px] px-4 sm:px-10 lg:px-14 py-12 sm:py-20 lg:py-22 shadow-2xl overflow-hidden">
      {/* =====================================================================
          TOP HEADER ROW: LEFT CONDENSED DISPLAY TITLE + RIGHT STARBURST & COPY
      ====================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start mb-10 sm:mb-16">
        {/* Left 7 Columns: Eyebrow + Condensed Uppercase Headline */}
        <ScrollReveal className="lg:col-span-7">
          <span className="text-xs sm:text-sm font-medium text-[#49E619] tracking-tight block mb-3">
            From your plate to a child’s hands
          </span>

          <h3 className="font-display-sans uppercase text-white text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-black leading-[0.92] tracking-[-0.045em]">
            HOW YOUR MEAL
            <br />
            CREATES IMPACT
          </h3>
        </ScrollReveal>

        {/* Right 5 Columns: White Starburst Icon + Editorial Explanation */}
        <ScrollReveal
          delay={0.1}
          className="lg:col-span-5 lg:pl-6 flex flex-col items-start"
        >
          <StarburstBadge className="w-10 h-10 sm:w-12 sm:h-12 text-white mb-4 sm:mb-5 shrink-0" />

          <p className="text-xs sm:text-sm md:text-[15px] text-white/90 leading-relaxed max-w-md font-normal">
            Wherever you are in Hyderabad, every ₹150 meal box gives your
            purchase a clear path forward — nourishing you today while our
            community kitchen prepares, dispatches, and verifies a hot meal for
            a child in need.
          </p>

          <Link
            to="/track-meal?token=ZH-2026-A8F42K"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono-tabular uppercase tracking-widest text-[#49E619] hover:text-white transition-colors"
          >
            <span>Inspect Live Token (ZH-2026-A8F42K)</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
          </Link>
        </ScrollReveal>
      </div>

      {/* =====================================================================
          2×3 BENTO GRID OF OVERSIZED NUMBERED CARDS (1 TO 6)
      ====================================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
        {STEPS.map((step, index) => (
          <ScrollReveal key={step.number} delay={0.05 * index}>
            <Link
              to={step.href}
              className={`${step.bgClass} group relative rounded-[14px] sm:rounded-[16px] min-h-[190px] sm:min-h-[240px] lg:min-h-[265px] overflow-hidden grid grid-cols-12 items-center transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white`}
            >
              {/* Left Column: Oversized Cropped Numeral (1–6) */}
              <div className="col-span-4 sm:col-span-5 h-full flex items-end pl-2 sm:pl-5 lg:pl-6 pt-6 pointer-events-none select-none overflow-hidden">
                <span className="font-display-sans font-black text-[#122023] text-[120px] sm:text-[185px] md:text-[165px] lg:text-[225px] leading-[0.74] tracking-[-0.06em] -mb-2 sm:-mb-4 block">
                  {step.number}
                </span>
              </div>

              {/* Right Column: Bold Condensed Uppercase Heading + Description */}
              <div className="col-span-8 sm:col-span-7 pr-4 sm:pr-7 lg:pr-10 py-5 sm:py-8 flex flex-col justify-center">
                <h4 className="font-display-sans uppercase text-[#122023] text-lg sm:text-2xl md:text-xl lg:text-[28px] font-black leading-[0.94] tracking-[-0.035em]">
                  <span className="block">{step.titleLines[0]}</span>
                  <span className="block">{step.titleLines[1]}</span>
                </h4>

                <p className="mt-2.5 sm:mt-4 text-xs sm:text-[13px] text-[#122023]/85 font-medium leading-[1.45] max-w-[270px]">
                  {step.description}
                </p>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};
