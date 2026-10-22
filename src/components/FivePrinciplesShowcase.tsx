import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../data/projects';
import { MEAL_IMAGES } from '../data/mealProgram';
import { EditorialImage } from './EditorialImage';
import { ScrollReveal } from './ScrollReveal';

interface PrincipleBannerItem {
  index: string;
  principle: string;
  quote: string;
  attribution: string;
  bgClass: string;
  loopStrokeColor: string;
  image: string;
  imageAlt: string;
  href: string;
}

const PRINCIPLE_BANNERS: PrincipleBannerItem[] = [
  {
    index: '01',
    principle: 'Dignity',
    quote:
      '“WE SERVE HOT MEALS ON STAINLESS STEEL PLATES AT SHARED TABLES — NEVER AS HURRIED CHARITY IN PLASTIC PACKETS.”',
    attribution:
      'Principle 01 · Dignity  |  Guests at a shared table, never recipients of charity',
    bgClass: 'bg-[#B9FF2C]',
    loopStrokeColor: 'text-white/90',
    image: IMAGES.heroMeals,
    imageAlt: 'Volunteer serving warm meals with dignity in Hyderabad',
    href: '/projects/community-meal-program',
  },
  {
    index: '02',
    principle: 'Compassion',
    quote:
      '“OUR KITCHENS ARE LED BY WOMEN FROM THE VERY NEIGHBORHOODS WE SERVE — NO CHILD OR CAREGIVER IS EVER TURNED AWAY.”',
    attribution:
      'Principle 02 · Compassion  |  Rooted in proximity, warmth, and lived empathy',
    bgClass: 'bg-[#49E619]',
    loopStrokeColor: 'text-[#B9FF2C]/85',
    image: IMAGES.schoolNutrition,
    imageAlt: 'Joyful school children receiving nutritious midday meals',
    href: '/projects/school-nutrition-initiative',
  },
  {
    index: '03',
    principle: 'Transparency',
    quote:
      '“88% OF EVERY RUPEE GOES DIRECTLY INTO FOOD AND KITCHENS — TRACKED LIVE WITH VERIFIABLE CHARITY TOKENS.”',
    attribution:
      'Principle 03 · Transparency  |  Every grain accounted for, every meal traceable',
    bgClass: 'bg-[#F2F4F3]',
    loopStrokeColor: 'text-[#122023]/15',
    image: MEAL_IMAGES.proteinPower,
    imageAlt: 'Nutritious freshly prepared Protein Power Meal Box',
    href: '/track-meal?token=ZH-2026-A8F42K',
  },
  {
    index: '04',
    principle: 'Community',
    quote:
      '“BUILT WITH NEIGHBORHOODS, NOT PARACHUTED INTO THEM — LOCAL STEWARDS CO-DESIGN EVERY MENU AND GRAIN BANK.”',
    attribution:
      'Principle 04 · Community  |  Co-governed by parents, teachers, and ward elders',
    bgClass: 'bg-[#4EDBE2]',
    loopStrokeColor: 'text-white/85',
    image: IMAGES.communityKitchen,
    imageAlt: 'Community chefs and volunteers inside Secunderabad kitchen',
    href: '/projects/central-community-kitchen',
  },
  {
    index: '05',
    principle: 'Sustainability',
    quote:
      '“WE PAIR IMMEDIATE HUNGER RELIEF WITH WOMEN-LED COOPERATIVES AND 640+ SMALLHOLDER FARMERS ACROSS TELANGANA.”',
    attribution:
      'Principle 05 · Sustainability  |  From emergency relief to circular food sovereignty',
    bgClass: 'bg-[#B9FF2C]',
    loopStrokeColor: 'text-white/90',
    image: IMAGES.womenSupport,
    imageAlt: 'Women agricultural cooperative members holding fresh greens',
    href: '/projects/women-and-family-food-sovereignty',
  },
];

/**
 * 18-Point Geometric Starburst SVG matching the top-right header badge
 */
const StarburstIcon: React.FC<{ className?: string }> = ({ className }) => {
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

/**
 * Expressive hand-drawn cursive loop SVG behind the right-side portrait
 * matching the sweeping brushstroke graphic in the reference design
 */
const BrushstrokeLoopSvg: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    viewBox="0 0 500 320"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M 20 305 C 150 295, 340 270, 355 155 C 365 70, 245 40, 225 130 C 205 220, 345 295, 485 280"
      stroke="currentColor"
      strokeWidth="18"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FivePrinciplesShowcase: React.FC = () => {
  return (
    <section className="w-full bg-[#122023] text-white py-16 xs:py-20 sm:py-28 border-b border-white/10 overflow-hidden">
      <div className="w-full max-w-[1360px] 2xl:max-w-[1560px] mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* ===================================================================
            TOP HEADER: TWO-TONE CONDENSED DISPLAY HEADLINE + STARBURST & COPY
        ==================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-12 sm:mb-16">
          {/* Left 7 Columns */}
          <ScrollReveal className="lg:col-span-7">
            <span className="text-xs sm:text-sm font-medium text-[#49E619] tracking-tight block mb-3">
              05 · Our Core Values
            </span>

            <h2 className="font-display-sans uppercase text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-black leading-[0.92] tracking-[-0.04em]">
              <span className="text-white">FIVE PRINCIPLES </span>
              <span className="text-[#49E619]">THAT GOVERN</span>
              <br />
              <span className="text-[#49E619]">EVERY PLATE</span>
            </h2>
          </ScrollReveal>

          {/* Right 5 Columns: White Starburst Badge + Supporting Paragraph */}
          <ScrollReveal
            delay={0.1}
            className="lg:col-span-5 lg:pl-8 flex flex-col items-start"
          >
            <StarburstIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white mb-4 sm:mb-5 shrink-0" />

            <p className="text-xs sm:text-sm text-white/85 leading-relaxed max-w-sm font-normal">
              Every meal prepared through Zero Hunger’s 12,480+ plate ledger is
              guided by five non-negotiable standards across every kitchen,
              school veranda, and village grain bank.
            </p>
          </ScrollReveal>
        </div>

        {/* ===================================================================
            STACKED FULL-WIDTH HORIZONTAL QUOTE & PORTRAIT CARDS (01 TO 05)
        ==================================================================== */}
        <div className="space-y-4 sm:space-y-5">
          {PRINCIPLE_BANNERS.map((item, idx) => (
            <ScrollReveal key={item.index} delay={idx * 0.06}>
              <div
                className={`${item.bgClass} relative rounded-[16px] sm:rounded-[20px] overflow-hidden min-h-[260px] sm:min-h-[300px] lg:min-h-[320px] grid grid-cols-1 md:grid-cols-12 items-stretch shadow-xl`}
              >
                {/* Sweeping Hand-Drawn Loop Graphic in Background */}
                <BrushstrokeLoopSvg
                  className={`pointer-events-none absolute right-4 sm:right-20 md:right-32 bottom-0 w-[340px] sm:w-[440px] lg:w-[500px] h-auto select-none ${item.loopStrokeColor}`}
                />

                {/* Left 7–8 Columns: Bold Condensed Quote + Attribution + White Learn More Button */}
                <div className="md:col-span-7 lg:col-span-8 p-6 sm:p-9 lg:p-11 flex flex-col justify-between relative z-10">
                  <div>
                    <h3 className="font-display-sans uppercase text-[#122023] text-xl sm:text-2xl md:text-[26px] lg:text-[32px] font-black leading-[0.96] tracking-[-0.035em] max-w-2xl">
                      {item.quote}
                    </h3>

                    <p className="mt-3 sm:mt-4 text-[11px] sm:text-xs font-bold text-[#122023]/80 tracking-tight">
                      {item.attribution}
                    </p>
                  </div>

                  <div className="mt-6 sm:mt-8">
                    <Link
                      to={item.href}
                      className="inline-flex items-center gap-2 bg-white hover:bg-[#122023] text-[#122023] hover:text-white px-5 py-2.5 sm:py-3 rounded-[8px] text-xs font-bold tracking-tight shadow-xs transition-colors duration-200"
                    >
                      <span>Learn more</span>
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                    </Link>
                  </div>
                </div>

                {/* Right 5–4 Columns: Documentary Portrait Cutout Frame */}
                <div className="md:col-span-5 lg:col-span-4 relative flex items-end justify-center md:justify-end px-6 pt-2 md:pt-6 md:pr-8 lg:pr-12 z-10">
                  <div className="w-52 sm:w-60 md:w-64 lg:w-72 aspect-[4/4.3] rounded-t-[140px] overflow-hidden border-4 border-white/60 shadow-2xl bg-[#122023]">
                    <EditorialImage
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
