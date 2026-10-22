import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../data/projects';
import { MEAL_IMAGES } from '../data/mealProgram';
import { EditorialImage } from './EditorialImage';
import { ScrollReveal } from './ScrollReveal';
import { SupportTab } from './SupportModal';

interface MissionProgramsShowcaseProps {
  onOpenSupport?: (tab?: SupportTab, projectSlug?: string) => void;
}

interface MissionProgramCard {
  id: string;
  title: string;
  description: string;
  image: string;
  exploreHref: string;
  learnHref: string;
  projectSlug: string;
}

const MISSION_PROGRAMS: MissionProgramCard[] = [
  {
    id: 'camp-meal-box',
    title: 'BUY 1 · GIVE 1 MEAL BOX',
    description:
      'Part daily kitchen, part child nutrition engine — every ₹150 meal you order funds and tracks a hot meal for a child in need.',
    image: MEAL_IMAGES.proteinPower,
    exploreHref: '/meal-box',
    learnHref: '/track-meal?token=ZH-2026-A8F42K',
    projectSlug: 'community-meal-program',
  },
  {
    id: 'youth-school-nutrition',
    title: 'SCHOOL NUTRITION FELLOWSHIP',
    description:
      'A daily midday meal initiative giving 3,800+ rural students the iron-rich nourishment, energy, and dignity to thrive in school.',
    image: IMAGES.schoolNutrition,
    exploreHref: '/projects/school-nutrition-initiative',
    learnHref: '/impact',
    projectSlug: 'school-nutrition-initiative',
  },
  {
    id: 'launch-dawn-kitchen',
    title: 'DAWN KITCHEN CORPS',
    description:
      'A high-impact morning culinary operation in Secunderabad where volunteers and chefs prepare 4,500+ fresh zero-waste meals daily.',
    image: IMAGES.communityKitchen,
    exploreHref: '/projects/central-community-kitchen',
    learnHref: '/about',
    projectSlug: 'central-community-kitchen',
  },
  {
    id: 'emergency-reliefcorps',
    title: 'RAPID FLOOD & GRAIN RELIEF',
    description:
      'A 24-hour emergency mobilization unit dispatching dry-ration kits and clean water to families impacted by seasonal crises.',
    image: IMAGES.emergencyRelief,
    exploreHref: '/projects/emergency-food-relief-corps',
    learnHref: '/impact',
    projectSlug: 'emergency-food-relief-corps',
  },
  {
    id: 'women-growers-coop',
    title: 'WOMEN GROWERS COLLECTIVE',
    description:
      'Partnering with smallholder women farmers across Telangana to supply organic greens directly to our urban community tables.',
    image: IMAGES.womenSupport,
    exploreHref: '/projects/women-and-family-food-sovereignty',
    learnHref: '/projects',
    projectSlug: 'women-and-family-food-sovereignty',
  },
  {
    id: 'courtyard-meal-drive',
    title: 'COURTYARD MEAL SERVICE',
    description:
      'Serving hot, freshly steamed rice and dal outside public hospitals so caregivers never have to sleep hungry.',
    image: IMAGES.heroMeals,
    exploreHref: '/projects/community-meal-program',
    learnHref: '/track-meal',
    projectSlug: 'community-meal-program',
  },
];

/**
 * Large multi-pointed geometric starburst SVG for the bottom lime community banner
 */
const LargeStarburstGraphic: React.FC<{ className?: string }> = ({
  className,
}) => {
  const points = 16;
  const outerRadius = 120;
  const innerRadius = 68;
  const center = 120;
  const coords: string[] = [];

  for (let i = 0; i < points * 2; i++) {
    const angle = (i * Math.PI) / points - Math.PI / 2;
    const r = i % 2 === 0 ? outerRadius : innerRadius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    coords.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }

  return (
    <svg
      viewBox="0 0 240 240"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <polygon points={coords.join(' ')} />
    </svg>
  );
};

export const MissionProgramsShowcase: React.FC<
  MissionProgramsShowcaseProps
> = ({ onOpenSupport }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const totalPages = 2; // 2 sets of 3 cards (6 total programs)

  const visiblePrograms = MISSION_PROGRAMS.slice(
    pageIndex * 3,
    pageIndex * 3 + 3
  );

  const handlePrev = () => {
    setPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setPageIndex((prev) => (prev + 1) % totalPages);
  };

  return (
    <section className="bg-[#080808] text-white py-20 sm:py-28 border-y border-white/10 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* ===================================================================
            TOP HEADER: CONDENSED TWO-TONE HEADLINE + DESCRIPTION + ARROWS
        ==================================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-14">
          <ScrollReveal>
            <h2 className="font-display-sans uppercase font-black text-3xl sm:text-5xl md:text-6xl lg:text-[62px] leading-[0.92] tracking-[-0.04em]">
              <span className="block text-white">FIND THE PROGRAM BUILT</span>
              <span className="block text-[#49E619] mt-1">
                FOR YOUR MISSION
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal
            delay={0.1}
            className="flex flex-col sm:flex-row sm:items-center justify-between lg:justify-end gap-6 lg:gap-10"
          >
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-xs font-medium">
              Explore field experiences, community kitchens, and nutrition
              initiatives that turn bold compassion into measurable impact.
            </p>

            {/* Circular Left / Right Carousel Arrows */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous mission programs"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/25 hover:border-[#49E619] hover:bg-[#49E619] text-white hover:text-[#080808] flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next mission programs"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/25 hover:border-[#49E619] hover:bg-[#49E619] text-white hover:text-[#080808] flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* ===================================================================
            3-COLUMN TALL IMAGE PROGRAM CARDS
        ==================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {visiblePrograms.map((program, idx) => (
            <ScrollReveal key={program.id} delay={idx * 0.08}>
              <div className="group relative rounded-[18px] overflow-hidden bg-[#141414] border border-white/12 min-h-[430px] sm:min-h-[470px] lg:min-h-[490px] flex flex-col justify-end p-6 sm:p-7">
                {/* Full-Bleed Documentary Background Image */}
                <div className="absolute inset-0">
                  <EditorialImage
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full"
                    imgClassName="group-hover:scale-105"
                  />
                  {/* Rich Dark Scrim for High-Contrast Typography & Buttons */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/15"
                    aria-hidden="true"
                  />
                </div>

                {/* Foreground Card Copy & Dual Action Buttons */}
                <div className="relative z-10">
                  <h3 className="font-display-sans uppercase text-white text-2xl sm:text-3xl font-black tracking-[-0.035em] leading-[0.96]">
                    {program.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-[13px] text-white/85 leading-relaxed line-clamp-3">
                    {program.description}
                  </p>

                  {/* Dual Pill/Rounded Buttons: Green "Explore programs ↗" + White "Learn more ↗" */}
                  <div className="mt-6 grid grid-cols-2 gap-2.5">
                    <Link
                      to={program.exploreHref}
                      className="rounded-[10px] bg-[#49E619] hover:bg-[#3cd110] text-[#080808] py-3 px-3 text-xs font-semibold inline-flex items-center justify-center gap-1 transition-colors whitespace-nowrap"
                    >
                      <span>Explore programs</span>
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                    </Link>

                    <Link
                      to={program.learnHref}
                      className="rounded-[10px] bg-white hover:bg-[#F2F4F3] text-[#080808] py-3 px-3 text-xs font-semibold inline-flex items-center justify-center gap-1 transition-colors whitespace-nowrap"
                    >
                      <span>Learn more</span>
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ===================================================================
            BOTTOM FULL-WIDTH CHARTREUSE-LIME DIGITAL & FIELD COMMUNITY BANNER
        ==================================================================== */}
        <ScrollReveal delay={0.18} className="mt-5 sm:mt-6">
          <div className="relative rounded-[18px] bg-[#B9FF2C] text-[#122023] px-6 sm:px-10 lg:px-12 py-7 sm:py-9 overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Oversized White Starburst Graphic on Right */}
            <LargeStarburstGraphic className="pointer-events-none absolute -bottom-28 right-8 sm:right-24 lg:right-40 w-64 h-64 sm:w-80 sm:h-80 text-white/95 select-none" />

            {/* Left: Condensed Uppercase Title */}
            <div className="relative z-10">
              <h3 className="font-display-sans uppercase font-black text-2xl sm:text-3xl lg:text-[36px] tracking-[-0.04em] text-[#122023] leading-none">
                DIGITAL COMMUNITY
              </h3>
            </div>

            {/* Center: Concise Mission Description */}
            <p className="relative z-10 text-xs sm:text-sm text-[#122023]/90 font-medium max-w-md leading-relaxed lg:mx-auto">
              Part rapid-response network, part neighborhood kitchen — one
              shared mission to collaborate, cook, and launch real solutions
              against hunger.
            </p>

            {/* Right: Dark Circular Arrow Button + "Join the community" Label */}
            <div className="relative z-10 shrink-0">
              {onOpenSupport ? (
                <button
                  type="button"
                  onClick={() => onOpenSupport('volunteer')}
                  className="group inline-flex items-center gap-3.5 text-left cursor-pointer"
                >
                  <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#122023] text-white flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#122023] tracking-tight group-hover:underline">
                    Join the community
                  </span>
                </button>
              ) : (
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3.5"
                >
                  <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#122023] text-white flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#122023] tracking-tight group-hover:underline">
                    Join the community
                  </span>
                </Link>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
