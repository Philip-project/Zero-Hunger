import React from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Heart,
  Ticket,
  ChefHat,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

/**
 * Custom High-Fidelity SVG Branded Delivery Scooter
 * Replaces generic emojis with a custom-engineered NGO food courier scooter.
 */
const BrandedDeliveryScooter: React.FC<{ className?: string }> = ({
  className = 'w-12 h-12',
}) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Zero Hunger Delivery Scooter"
  >
    {/* Headlight beam */}
    <path
      d="M60 42 L80 34 L80 50 Z"
      fill="url(#scooterHeadlightGlow)"
      opacity="0.85"
    />

    {/* Insulated Delivery Box (Thermal Hot-Meals Box with Zero Hunger Branding) */}
    <rect
      x="8"
      y="22"
      width="24"
      height="24"
      rx="4"
      fill="#080808"
      stroke="#49E619"
      strokeWidth="2"
    />
    <rect x="11" y="25" width="18" height="18" rx="2" fill="#122023" />
    {/* Hot Food Badge / Starburst */}
    <circle cx="20" cy="34" r="5.5" fill="#49E619" />
    <path
      d="M20 30.5 L21.2 33.2 L24 34 L21.2 34.8 L20 37.5 L18.8 34.8 L16 34 L18.8 33.2 Z"
      fill="#080808"
    />

    {/* Scooter Body / Fairing */}
    <path
      d="M28 42 H42 L48 35 H54 L52 48 H36 L28 48 Z"
      fill="#080808"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M40 37 L47 24 L52 24"
      stroke="#FFFFFF"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {/* Handlebar & Brake Lever */}
    <path
      d="M49 22 L56 22"
      stroke="#49E619"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Windshield */}
    <path
      d="M48 23 L52 14 L57 23"
      stroke="#4EDBE2"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.9"
    />

    {/* Front Headlamp */}
    <circle cx="55" cy="30" r="3" fill="#49E619" />
    <circle cx="55" cy="30" r="1.5" fill="#FFFFFF" />

    {/* Rider Silhouette (Helmet & Jacket) */}
    <circle cx="37" cy="16" r="6" fill="#49E619" />
    <path
      d="M39 15 L43 17"
      stroke="#080808"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M32 23 C32 20 42 20 42 23 L43 34 H31 Z"
      fill="#122023"
      stroke="#FFFFFF"
      strokeWidth="1.5"
    />

    {/* Rear Wheel & Rim */}
    <circle cx="18" cy="54" r="10" fill="#080808" stroke="#FFFFFF" strokeWidth="2.5" />
    <circle cx="18" cy="54" r="5" fill="#122023" stroke="#49E619" strokeWidth="2" />
    <circle cx="18" cy="54" r="2" fill="#FFFFFF" />

    {/* Front Wheel & Rim */}
    <circle cx="58" cy="54" r="10" fill="#080808" stroke="#FFFFFF" strokeWidth="2.5" />
    <circle cx="58" cy="54" r="5" fill="#122023" stroke="#49E619" strokeWidth="2" />
    <circle cx="58" cy="54" r="2" fill="#FFFFFF" />

    {/* Mudguards */}
    <path
      d="M48 51 C48 45 64 45 66 53"
      stroke="#49E619"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M9 53 C9 45 25 45 28 51"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Headlight Glow Gradient */}
    <defs>
      <linearGradient
        id="scooterHeadlightGlow"
        x1="60"
        y1="42"
        x2="80"
        y2="42"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#49E619" stopOpacity="0.8" />
        <stop offset="1" stopColor="#4EDBE2" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

interface JourneyStep {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  accentHex: string;
  position: 'left' | 'right';
}

const STEPS: JourneyStep[] = [
  {
    number: '01',
    title: 'Choose Your ₹150 Meal Box',
    description:
      'Select a freshly prepared Protein, Veg, or Kids nutrition box from our daily Hyderabad kitchen menu.',
    icon: ShoppingBag,
    gradient: 'from-[#188D44] via-emerald-600 to-[#49E619]',
    accentHex: '#49E619',
    position: 'left',
  },
  {
    number: '02',
    title: '1-for-1 Dual Checkout',
    description:
      'Pay only ₹150 for your own meal. Our Buy 1, Give 1 model automatically funds a second hot meal.',
    icon: Heart,
    gradient: 'from-[#0E7490] via-cyan-600 to-[#4EDBE2]',
    accentHex: '#4EDBE2',
    position: 'right',
  },
  {
    number: '03',
    title: 'Receive Your Impact Token',
    description:
      'A unique Charity Token connects your purchase to the sponsored child meal.',
    icon: Ticket,
    gradient: 'from-[#15803D] via-lime-600 to-[#B9FF2C]',
    accentHex: '#B9FF2C',
    position: 'left',
  },
  {
    number: '04',
    title: 'Cooked Fresh',
    description:
      "Your meal is prepared fresh while the sponsored child's balanced meal is prepared in hygienic community batches.",
    icon: ChefHat,
    gradient: 'from-[#122023] via-emerald-800 to-[#49E619]',
    accentHex: '#49E619',
    position: 'right',
  },
  {
    number: '05',
    title: 'Assigned to Community Hub',
    description:
      'The sponsored meal is routed to a Hyderabad community centre and paired with an anonymized Beneficiary ID.',
    icon: MapPin,
    gradient: 'from-[#122023] via-cyan-800 to-[#4EDBE2]',
    accentHex: '#4EDBE2',
    position: 'left',
  },
  {
    number: '06',
    title: 'Child Receives Meal & Proof',
    description:
      'Once served, our field team marks the token delivered and sends your impact notification.',
    icon: CheckCircle2,
    gradient: 'from-[#188D44] via-emerald-600 to-[#B9FF2C]',
    accentHex: '#B9FF2C',
    position: 'right',
  },
];

export const ImpactJourney: React.FC = () => {
  const scrollToCatalog = () => {
    const catalog = document.getElementById('meal-box-catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/meal-box';
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32 border-t border-[#122023]/10">
      {/* Background ambient decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[20%] h-[500px] w-[500px] rounded-full bg-[#49E619]/5 blur-3xl" />
        <div className="absolute right-[-180px] bottom-[10%] h-[500px] w-[500px] rounded-full bg-[#4EDBE2]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ===================================================================
            HEADER: CONDENSED EDITORIAL HERO
        ==================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 sm:mb-28 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#188D44]/20 bg-[#F2F4F3] px-4 py-2 text-xs font-mono-tabular font-bold uppercase tracking-[0.2em] text-[#188D44]">
            <Sparkles size={14} className="text-[#49E619]" />
            Transparent Impact · Live Delivery Route
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-display-sans tracking-tight text-[#080808] leading-[0.94]">
            How Your Meal
            <span className="block text-[#188D44] mt-1">
              Creates Impact
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-[#122023]/75 font-medium">
            Follow your meal's journey from checkout to a child's hands. Every
            step is connected, geotagged, and designed for radical transparency.
          </p>
        </motion.div>

        {/* ===================================================================
            JOURNEY TIMELINE WITH MOVING SCOOTER
        ==================================================================== */}
        <div className="relative">
          {/* DESKTOP ROUTE (CENTER TRACK) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[4px] -translate-x-1/2 md:block">
            {/* Base route */}
            <div className="absolute inset-0 rounded-full bg-neutral-200/80" />

            {/* Animated glowing route */}
            <motion.div
              className="absolute left-0 top-0 w-full rounded-full bg-gradient-to-b from-[#49E619] via-[#4EDBE2] to-[#B9FF2C]"
              initial={{ height: '0%' }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: 'easeInOut' }}
            />

            {/* Moving glow beam */}
            <motion.div
              className="absolute left-1/2 h-28 w-12 -translate-x-1/2 rounded-full bg-[#49E619]/40 blur-xl"
              animate={{
                top: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          {/* MOBILE ROUTE (LEFT TRACK) */}
          <div className="absolute left-[20px] top-0 block h-full w-[3px] bg-neutral-200 md:hidden">
            <motion.div
              className="h-full w-full bg-gradient-to-b from-[#49E619] via-[#4EDBE2] to-[#B9FF2C]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              style={{ transformOrigin: 'top' }}
            />
          </div>

          {/* CONTINUOUS TRAVELING BRANDED SCOOTER (DESKTOP) */}
          <motion.div
            className="pointer-events-none absolute left-1/2 z-30 hidden -translate-x-1/2 md:block"
            animate={{
              top: [
                '1%',
                '18%',
                '36%',
                '54%',
                '72%',
                '92%',
                '72%',
                '54%',
                '36%',
                '18%',
                '1%',
              ],
              x: [0, 12, -10, 12, -8, 0, -8, 12, -10, 12, 0],
              scaleX: [1, 1, 1, 1, 1, -1, -1, -1, -1, -1, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="relative">
              {/* Scooter Ambient Glow */}
              <motion.div
                className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#49E619]/40 blur-xl"
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [0.6, 0.95, 0.6],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                }}
              />

              {/* Scooter Frame Badge */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#080808] shadow-2xl ring-4 ring-[#49E619]/35">
                <BrandedDeliveryScooter className="w-12 h-12" />
              </div>

              {/* Dynamic Speed Streaks */}
              <motion.div
                className="absolute right-full top-1/2 mr-2 h-[2.5px] w-9 bg-[#49E619] rounded-full"
                animate={{
                  width: [12, 34, 12],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 0.7,
                  repeat: Infinity,
                }}
              />

              <motion.div
                className="absolute right-full top-[68%] mr-4 h-[2px] w-6 bg-[#4EDBE2] rounded-full"
                animate={{
                  width: [6, 22, 6],
                  opacity: [0, 0.85, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: 0.2,
                }}
              />
            </div>
          </motion.div>

          {/* 6 JOURNEY STEPS */}
          <div className="space-y-16 sm:space-y-24 md:space-y-32">
            {STEPS.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative grid items-center md:grid-cols-2"
                >
                  {/* STEP CONTENT (LEFT OR RIGHT COLUMN) */}
                  <div
                    className={`${
                      step.position === 'left'
                        ? 'md:pr-20 lg:pr-28 pl-12 md:pl-0'
                        : 'md:col-start-2 md:pl-20 lg:pl-28 pl-12'
                    } ${step.position === 'right' ? 'md:row-start-1' : ''}`}
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: step.position === 'left' ? -50 : 50,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.35,
                      }}
                      transition={{
                        duration: 0.65,
                        ease: 'easeOut',
                      }}
                      className="group p-6 sm:p-7 rounded-[20px] bg-[#F2F4F3]/80 hover:bg-white border border-[#122023]/10 hover:border-[#188D44]/40 hover:shadow-xl transition-all duration-300"
                    >
                      {/* Number & Progress Line */}
                      <div className="mb-4 flex items-center gap-3">
                        <span className="font-mono-tabular text-xs sm:text-sm font-black tracking-[0.25em] text-[#188D44]">
                          MILESTONE {step.number}
                        </span>
                        <div className="h-[2px] w-10 bg-[#122023]/15 transition-all duration-500 group-hover:w-20 group-hover:bg-[#188D44]" />
                      </div>

                      {/* Icon */}
                      <div className="mb-5">
                        <motion.div
                          whileHover={{
                            scale: 1.08,
                            rotate: -3,
                          }}
                          className={`flex h-15 w-15 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} text-[#080808] shadow-lg`}
                        >
                          <Icon size={26} strokeWidth={2.2} />
                        </motion.div>
                      </div>

                      <h3 className="font-display-sans uppercase text-2xl sm:text-3xl font-black tracking-tight text-[#080808]">
                        {step.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-xs sm:text-sm leading-relaxed text-[#122023]/75 font-medium">
                        {step.description}
                      </p>

                      {/* Hover Indicator Bar */}
                      <div className="mt-6 h-[2.5px] w-0 bg-[#188D44] transition-all duration-500 group-hover:w-24 rounded-full" />
                    </motion.div>
                  </div>

                  {/* CENTER NODE MILESTONE CHECKPOINT */}
                  <div className="absolute left-[20px] top-6 z-20 -translate-x-1/2 md:left-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.15,
                        type: 'spring',
                        stiffness: 220,
                      }}
                      className="relative flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#080808] shadow-xl"
                    >
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: step.accentHex }}
                      />

                      {/* Continuous Radar Pulse */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2"
                        style={{ borderColor: step.accentHex }}
                        animate={{
                          scale: [1, 1.8, 1],
                          opacity: [0.8, 0, 0.8],
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* DIRECTIONAL CONNECTING ARROW (DESKTOP) */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 }}
                    className={`absolute hidden md:block ${
                      step.position === 'left' ? 'right-[47.5%]' : 'left-[47.5%]'
                    } top-10`}
                  >
                    <ArrowRight
                      className={`text-[#188D44]/60 ${
                        step.position === 'right' ? 'rotate-180' : ''
                      }`}
                      size={20}
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===================================================================
            BOTTOM PREMIUM HIGH-CONTRAST CALL TO ACTION
        ==================================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 sm:mt-32"
        >
          <div className="relative overflow-hidden rounded-[24px] bg-[#080808] px-6 sm:px-12 py-12 sm:py-16 text-center text-white border border-white/12 shadow-2xl">
            {/* Ambient Electric Green Glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-44 w-[480px] -translate-x-1/2 rounded-full bg-[#49E619]/20 blur-3xl" />

            <div className="relative z-10">
              <p className="mb-3 font-mono-tabular text-xs font-bold uppercase tracking-[0.28em] text-[#49E619]">
                Your ₹150 Can Go Further
              </p>

              <h3 className="mx-auto max-w-3xl font-display-sans uppercase text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                One meal for you.{' '}
                <span className="text-[#49E619]">One meal for a child.</span>
              </h3>

              <p className="mx-auto mt-4 max-w-xl text-xs sm:text-base text-white/70 font-medium">
                Eat well. Give well. Follow the journey through verified
                geotags and child nutrition milestones.
              </p>

              <button
                type="button"
                onClick={scrollToCatalog}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#49E619] hover:bg-[#B9FF2C] px-8 py-4 text-xs sm:text-sm font-black font-mono-tabular uppercase tracking-wider text-[#080808] shadow-xl shadow-[#49E619]/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
              >
                <span>Choose Your ₹150 Meal</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactJourney;
