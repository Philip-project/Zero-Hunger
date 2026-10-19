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

const HEADLINE_LINES = [
  { text: 'NO ONE', accent: false },
  { text: 'SHOULD', accent: false },
  { text: 'SLEEP HUNGRY.', accent: true },
];

const FLOATING_CARDS = [
  {
    metric: '12,480+',
    label: 'Meals Served',
    bgClass: 'bg-[#B9FF2C] text-[#122023]',
    position: 'top-5 -left-4 sm:-left-6 lg:-left-8',
    delay: 0.45,
  },
  {
    metric: '28',
    label: 'Communities Reached',
    bgClass: 'bg-[#4EDBE2] text-[#122023]',
    position: 'top-1/2 -translate-y-1/2 -right-3 sm:-right-5 lg:-right-6',
    delay: 0.55,
  },
  {
    metric: '640+',
    label: 'Families Supported',
    bgClass: 'bg-[#49E619] text-[#122023]',
    position: 'bottom-6 left-4 sm:left-6 lg:-left-6',
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
    <section className="relative bg-[#080808] text-white pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-white/10">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* LEFT COLUMN: Condensed Display Headline & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start">
            <motion.span
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs font-mono-tabular font-bold uppercase tracking-[0.22em] text-[#49E619] mb-4 block"
            >
              ZERO HUNGER INITIATIVE · HYDERABAD
            </motion.span>

            <h1 className="font-display-sans uppercase text-[3.2rem] sm:text-6xl lg:text-[4.5rem] xl:text-[5.25rem] font-black tracking-[-0.04em] leading-[0.92] text-white">
              {HEADLINE_LINES.map((line, index) => (
                <span key={line.text} className="block overflow-hidden pb-1">
                  <motion.span
                    initial={prefersReducedMotion ? false : { y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.08 + index * 0.11,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="block"
                  >
                    {line.accent ? (
                      <>
                        SLEEP <span className="text-[#49E619]">HUNGRY.</span>
                      </>
                    ) : (
                      line.text
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-xl"
            >
              We believe access to nutritious food is not a privilege.
              <br className="hidden sm:inline" /> It is a fundamental human need.
            </motion.p>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <Button to="/meal-box" variant="primary" size="lg" fullWidthMobile>
                <span>Buy 1 · Give 1 Meal Box</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant="outline-light"
                size="lg"
                fullWidthMobile
                onClick={() => onOpenSupport('donate')}
              >
                <span>Support the Mission</span>
              </Button>
            </motion.div>

            {/* Subtle Regional & Operational Provenance */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/65"
            >
              <span className="font-bold text-[#49E619]">Hyderabad, India</span>
              <span aria-hidden="true">·</span>
              <span>Daily Freshly Cooked Meals</span>
              <span aria-hidden="true">·</span>
              <span>Zero Single-Use Plastic</span>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Large Humanitarian Photograph + Vibrant Floating Ledger Cards */}
          <div className="lg:col-span-6 xl:col-span-6 relative lg:pl-6">
            <motion.div
              style={{ y: imageY }}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-xl lg:max-w-none"
            >
              {/* Main Image Frame */}
              <div className="relative rounded-[18px] overflow-hidden border border-white/15 shadow-2xl aspect-[4/3] sm:aspect-[5/4]">
                <EditorialImage
                  src={IMAGES.heroMeals}
                  alt="Compassionate volunteers serving fresh steaming nutritious meals to children and families in Hyderabad"
                  priority
                  className="w-full h-full"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute bottom-4 right-4 left-4 sm:left-auto text-right">
                  <span className="text-[10px] font-mono-tabular font-bold uppercase tracking-widest text-[#122023] bg-[#B9FF2C] px-3 py-1 rounded-[6px]">
                    FIG. 01 · MORNING COURTYARD SERVICE, HYDERABAD
                  </span>
                </div>
              </div>

              {/* Color-Blocked Floating Information Cards */}
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
                  className={`hidden sm:flex flex-col ${card.bgClass} rounded-[12px] px-4 py-3 shadow-xl ${card.position} absolute z-10`}
                >
                  <span className="font-display-sans text-xl lg:text-2xl font-black tracking-tight leading-none">
                    {card.metric}
                  </span>
                  <span className="text-[11px] font-bold opacity-85 whitespace-nowrap mt-0.5">
                    {card.label}
                  </span>
                </motion.div>
              ))}

              {/* Mobile-friendly compact stat strip below image on small screens */}
              <div className="grid grid-cols-3 gap-2 mt-3 sm:hidden">
                {FLOATING_CARDS.map((card) => (
                  <div
                    key={card.label}
                    className={`${card.bgClass} rounded-[10px] p-3 text-left`}
                  >
                    <div className="font-display-sans text-base font-black leading-none">
                      {card.metric}
                    </div>
                    <div className="text-[11px] font-semibold leading-tight mt-1">
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
          className="mt-14 sm:mt-20 flex justify-center lg:justify-start"
        >
          <button
            type="button"
            onClick={scrollToImpact}
            className="group inline-flex items-center gap-2.5 text-xs font-mono-tabular font-bold uppercase tracking-[0.22em] text-white/70 hover:text-[#49E619] transition-colors cursor-pointer py-2"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#49E619] transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
