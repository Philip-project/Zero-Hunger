import React from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Button } from './Button';
import { EditorialImage } from './EditorialImage';
import { IMAGES } from '../data/projects';
import { SupportTab } from './SupportModal';

interface HeroProps {
  onOpenSupport: (tab?: SupportTab) => void;
}


const FLOATING_CARDS = [
  {
    metric: '12,480+',
    label: 'Meals Served',
    bgClass: 'bg-brand-lime text-brand-slate',
    position: 'top-2 -left-2 sm:-left-4 lg:-left-5',
    delay: 0.45,
  },
  {
    metric: '28',
    label: 'Communities Reached',
    bgClass: 'bg-brand-cyan text-brand-slate',
    position: 'top-1/2 -translate-y-1/2 -right-2 sm:-right-3 lg:-right-4',
    delay: 0.55,
  },
  {
    metric: '640+',
    label: 'Families Supported',
    bgClass: 'bg-brand-green text-brand-slate',
    position: '-bottom-2.5 -left-2 sm:-left-4 lg:-left-5',
    delay: 0.65,
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenSupport }) => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, prefersReducedMotion ? 0 : 28]);

  const scrollToImpact = () => {
    const el = document.getElementById('impact-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-brand-black text-white pt-24 sm:pt-24 md:pt-20 lg:pt-20 pb-3 sm:pb-4 overflow-hidden border-b border-white/10">
      <div className="max-w-340 mx-auto px-4 xs:px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 lg:gap-10 items-start">
          {/* LEFT COLUMN: Condensed Display Headline & CTAs */}
          <div className="col-span-1 md:col-span-6 lg:col-span-6 xl:col-span-6 flex flex-col items-start pt-0 sm:pt-1 md:pt-2 lg:pt-4">
            <motion.span
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10px] xs:text-xs font-mono-tabular font-bold uppercase tracking-[0.18em] xs:tracking-[0.22em] text-brand-green mb-2 sm:mb-2.5 block"
            >
              ZERO HUNGER INITIATIVE · HYDERABAD
            </motion.span>

            <h1 className="font-display-sans uppercase text-[1.85rem] xs:text-[2.15rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-black tracking-[-0.04em] leading-[0.92] text-white flex flex-col items-start gap-1 sm:gap-1.5 w-full">
              {/* Line 1: NO ONE with typing highlight wipe */}
              <span className="block overflow-hidden pb-0.5">
                <span className="type-word-1 inline-block bg-[#D7262F] text-white px-2 py-0.5 xs:px-2.5 sm:px-3.5 md:px-4 sm:py-1">
                  NO ONE
                </span>
              </span>

              {/* Line 2: SHOULD with typing highlight wipe */}
              <span className="block overflow-hidden pb-0.5">
                <span className="type-word-2 inline-block bg-[#D7262F] text-white px-2 py-0.5 xs:px-2.5 sm:px-3.5 md:px-4 sm:py-1">
                  SHOULD
                </span>
              </span>

              {/* Line 3: SLEEP with typing highlight wipe */}
              <span className="block overflow-hidden pb-0.5">
                <span className="type-word-3 inline-block bg-[#D7262F] text-white px-2 py-0.5 xs:px-2.5 sm:px-3.5 md:px-4 sm:py-1">
                  SLEEP
                </span>
              </span>

              {/* Line 4: HUNGRY. in neon green */}
              <span className="block overflow-hidden pb-0.5">
                <span className="type-word-4 inline-block text-brand-green">
                  HUNGRY.
                </span>
              </span>
            </h1>

            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed max-w-xl"
            >
              We believe access to nutritious food is not a privilege.
              <br className="hidden sm:inline" /> It is a fundamental human need.
            </motion.p>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto"
            >
              <Button
                to="/meal-box"
                variant="primary"
                size="md"
                fullWidthMobile
                className="text-sm sm:text-[15px] font-extrabold"
              >
                <span>Buy 1 · Give 1 Meal Box</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
              <Button
                type="button"
                variant="outline-light"
                size="md"
                fullWidthMobile
                onClick={() => onOpenSupport('donate')}
                className="text-sm sm:text-[15px] font-extrabold"
              >
                <span>Support the Mission</span>
              </Button>
            </motion.div>

            {/* Subtle Regional & Operational Provenance */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.52 }}
              className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-white/10 flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-1 text-[11px] sm:text-xs text-white/65"
            >
              <span className="font-bold text-brand-green">Hyderabad, India</span>
              <span aria-hidden="true">·</span>
              <span>Daily Freshly Cooked Meals</span>
              <span aria-hidden="true">·</span>
              <span>Zero Single-Use Plastic</span>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Large Humanitarian Photograph + Vibrant Floating Ledger Cards */}
          <div className="col-span-1 md:col-span-6 lg:col-span-6 xl:col-span-6 relative md:pl-4 lg:pl-6 pt-5 md:pt-8 lg:pt-12 xl:pt-14 w-full">
            <motion.div
              style={{ y: imageY }}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-md xs:max-w-lg md:max-w-none lg:max-w-122.5 xl:max-w-132.5"
            >
              {/* Main Image Frame */}
              <div className="relative rounded-[14px] sm:rounded-2xl overflow-hidden border border-white/15 shadow-2xl aspect-4/3 w-full">
                <EditorialImage
                  src={IMAGES.heroMeals}
                  alt="Compassionate volunteers serving fresh steaming nutritious meals to children and families in Hyderabad"
                  priority
                  className="w-full h-full"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute bottom-2.5 right-2.5 text-right pointer-events-none">
                  <span className="text-[9px] font-mono-tabular font-bold uppercase tracking-wider text-brand-slate bg-brand-lime px-2 py-0.5 rounded-sm">
                    FIG. 01 · HYDERABAD SERVICE
                  </span>
                </div>
              </div>

              {/* Color-Blocked Floating Information Cards (Desktop & Tablet) */}
              {FLOATING_CARDS.map((card) => (
                <motion.div
                  key={card.label}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: card.delay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`hidden md:flex flex-col ${card.bgClass} rounded-md sm:rounded-lg px-2 py-1 sm:px-2.5 sm:py-1.5 shadow-md ${card.position} absolute z-10 select-none`}
                >
                  <span className="font-display-sans text-xs sm:text-sm lg:text-base font-black tracking-tight leading-none">
                    {card.metric}
                  </span>
                  <span className="text-[8px] sm:text-[9px] font-bold opacity-85 whitespace-nowrap mt-0.5">
                    {card.label}
                  </span>
                </motion.div>
              ))}

              {/* Mobile-friendly compact stat strip below image on phones (< md breakpoint) */}
              <div className="grid grid-cols-3 gap-2 mt-3.5 md:hidden">
                {FLOATING_CARDS.map((card) => (
                  <div
                    key={card.label}
                    className={`${card.bgClass} rounded-lg p-2 xs:p-2.5 text-left flex flex-col justify-between min-h-13`}
                  >
                    <div className="font-display-sans text-xs xs:text-sm font-black leading-none">
                      {card.metric}
                    </div>
                    <div className="text-[9px] xs:text-[10px] font-bold leading-tight mt-1 opacity-90">
                      {card.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-2 sm:mt-2.5 flex justify-center md:justify-start"
        >
          <button
            type="button"
            onClick={scrollToImpact}
            className="group inline-flex items-center gap-2 text-xs font-mono-tabular font-bold uppercase tracking-[0.22em] text-white/70 hover:text-brand-green transition-colors cursor-pointer py-1"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 text-brand-green transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
