import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Camera,
  BarChart3,
  MapPin,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ProjectGrid } from '../components/ProjectGrid';
import { EditorialImage } from '../components/EditorialImage';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import { IMAGES } from '../data/projects';
import {
  FULL_IMPACT_METRICS,
  IMPACT_TIMELINE,
  REGIONAL_LEDGER,
  FINANCIAL_STEWARDSHIP,
} from '../data/impact';
import { SupportTab } from '../components/SupportModal';

interface ProjectsAndImpactProps {
  onOpenSupport: (tab?: SupportTab, projectSlug?: string) => void;
}

const METRIC_CARD_THEMES = [
  { bg: 'bg-[#49E619]', text: 'text-[#122023]' },
  { bg: 'bg-[#4EDBE2]', text: 'text-[#122023]' },
  { bg: 'bg-[#B9FF2C]', text: 'text-[#122023]' },
  { bg: 'bg-[#188D44]', text: 'text-white' },
  { bg: 'bg-[#F2F4F3]', text: 'text-[#122023]' },
];

export const Projects: React.FC<ProjectsAndImpactProps> = ({ onOpenSupport }) => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(
    scrollY,
    [0, 600],
    [0, prefersReducedMotion ? 0 : 20]
  );

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');
  const [selectedMetricId, setSelectedMetricId] = useState<string>(
    FULL_IMPACT_METRICS[0].id
  );

  const activeMetric =
    FULL_IMPACT_METRICS.find((m) => m.id === selectedMetricId) ||
    FULL_IMPACT_METRICS[0];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
  };

  return (
    <div className="bg-[#080808] text-white">
      {/* =================================================================
          SECTION 1 — UNIFIED HERO: SMILES OF PROMISE & MEASURED IN DIGNITY
      ================================================================== */}
      <section className="relative bg-[#080808] pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 overflow-hidden border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* LEFT COLUMN: Editorial Headline & Navigation */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Eyebrow */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2.5 mb-6"
              >
                <span
                  className="w-2 h-2 rounded-full bg-[#49E619]"
                  aria-hidden="true"
                />
                <span className="font-mono-tabular text-xs font-bold uppercase tracking-[0.2em] text-[#49E619]">
                  ZERO HUNGER STUDIO · FIELD ARCHIVE & AUDITED IMPACT LEDGER
                </span>
              </motion.div>

              {/* Massive Two-Tone Display Headline */}
              <h1 className="font-display-sans text-[3.5rem] sm:text-[5.25rem] md:text-[6.25rem] lg:text-[6.5rem] xl:text-[7.25rem] font-black uppercase leading-[0.92] tracking-[-0.04em]">
                <span className="block overflow-hidden">
                  <motion.span
                    initial={
                      prefersReducedMotion ? false : { y: '100%', opacity: 0 }
                    }
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{
                      duration: 0.65,
                      delay: 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="block text-white"
                  >
                    SMILES OF
                  </motion.span>
                </span>
                <span className="block overflow-hidden mt-1">
                  <motion.span
                    initial={
                      prefersReducedMotion ? false : { y: '100%', opacity: 0 }
                    }
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{
                      duration: 0.65,
                      delay: 0.18,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="block text-[#49E619]"
                  >
                    PROMISE.
                  </motion.span>
                </span>
              </h1>

              {/* Editorial Body Copy */}
              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-8 text-base sm:text-lg lg:text-[1.15rem] text-white/80 leading-[1.65] max-w-[560px]"
              >
                A unified documentary record connecting pure photographic evidence with our verified humanitarian ledger. Every smiling portrait represents hot nutrition served, and every rupee is accounted for with radical transparency.
              </motion.p>

              {/* Quick Jump Section Anchors */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.42,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-9 flex flex-wrap items-center gap-2.5"
              >
                <button
                  type="button"
                  onClick={() => scrollToSection('photographic-archive')}
                  className="px-4 py-2.5 rounded-[8px] bg-[#49E619] hover:bg-[#B9FF2C] text-[#080808] font-mono-tabular text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Field Gallery</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('audited-metrics')}
                  className="px-4 py-2.5 rounded-[8px] bg-[#122023] hover:bg-[#1c3035] text-white border border-white/20 font-mono-tabular text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <BarChart3 className="w-3.5 h-3.5 text-[#4EDBE2]" />
                  <span>120K+ Verified Ledger</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('regional-ledger')}
                  className="px-4 py-2.5 rounded-[8px] bg-[#122023] hover:bg-[#1c3035] text-white border border-white/20 font-mono-tabular text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#B9FF2C]" />
                  <span>28 Communities</span>
                </button>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Tall Rounded Portrait Card with Dynamic Highlight */}
            <div className="lg:col-span-5">
              <motion.div
                style={{ y: imageY }}
                initial={
                  prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }
                }
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative mx-auto max-w-md lg:max-w-none"
              >
                <Link
                  to="/projects/school-nutrition-initiative"
                  className="group block relative rounded-[20px] overflow-hidden border border-white/15 shadow-2xl aspect-[4/5] bg-[#122023]"
                >
                  <EditorialImage
                    src={IMAGES.schoolNutrition}
                    alt="Joyful children sharing a warm nutritious midday meal"
                    priority
                    className="w-full h-full"
                    imgClassName="grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />

                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"
                    aria-hidden="true"
                  />

                  <div className="absolute bottom-7 left-7 right-7">
                    <span className="block font-mono-tabular text-[10px] font-bold uppercase tracking-[0.2em] text-[#49E619] mb-2">
                      FEATURED FIELD DOCUMENTATION
                    </span>
                    <p className="font-display-sans uppercase text-2xl sm:text-[1.7rem] font-black text-white group-hover:text-[#B9FF2C] transition-colors leading-tight">
                      Pure innocence, dignity and laughter in play
                    </p>
                    <div className="mt-3 flex items-center gap-2 font-mono-tabular text-xs text-white/80">
                      <span>48,200+ School Meals Served</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#49E619]">Secunderabad & Ranga Reddy</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 2 — PHOTOGRAPHIC ARCHIVE BENTO GRID (PROJECTS SHOWCASE)
      ================================================================== */}
      <ProjectGrid />

      {/* =================================================================
          SECTION 3 — VERIFIED HUMANITARIAN IMPACT METRICS & SPOTLIGHT AUDITOR
      ================================================================== */}
      <section id="audited-metrics" className="bg-[#122023] py-20 sm:py-28 border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.2em] text-[#49E619] block mb-1">
                VERIFIED HUMANITARIAN LEDGER · FY 2025–2026
              </span>
              <h2 className="font-display-sans uppercase text-3xl sm:text-4xl font-black text-white">
                Measured by Human Dignity
              </h2>
            </div>
            <span className="text-xs font-mono-tabular font-bold text-[#B9FF2C] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
              LAST AUDITED: MARCH 2026 · 100% VERIFIED
            </span>
          </div>

          {/* 5 Interactive Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {FULL_IMPACT_METRICS.map((metric, idx) => {
              const isSelected = metric.id === selectedMetricId;
              const theme = METRIC_CARD_THEMES[idx % METRIC_CARD_THEMES.length];
              return (
                <ScrollReveal key={metric.id} delay={idx * 0.08}>
                  <button
                    type="button"
                    onClick={() => setSelectedMetricId(metric.id)}
                    className={`w-full h-full text-left p-6 sm:p-7 rounded-[16px] border-2 transition-all duration-200 flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#49E619] ${
                      theme.bg
                    } ${theme.text} ${
                      isSelected
                        ? 'border-white scale-[1.02] shadow-2xl'
                        : 'border-transparent opacity-90 hover:opacity-100'
                    }`}
                  >
                    <div>
                      <div className="text-[11px] font-mono-tabular font-bold uppercase tracking-widest mb-4 opacity-80">
                        0{idx + 1} · {metric.category}
                      </div>

                      <div className="font-display-sans text-4xl sm:text-5xl font-black tracking-[-0.04em] leading-none">
                        <AnimatedCounter
                          value={metric.value}
                          suffix={metric.suffix}
                          formatCompact={false}
                        />
                      </div>

                      <h3 className="mt-4 font-display-sans uppercase text-lg font-black leading-tight">
                        {metric.label}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed font-medium opacity-85">
                        {metric.sublabel}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-current/15 text-[11px] font-mono-tabular font-bold opacity-80">
                      {metric.timeframe}
                    </div>
                  </button>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Active Metric Spotlight Callout */}
          <div className="mt-8 p-7 sm:p-9 rounded-[18px] bg-[#080808] text-white border border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-xl">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono-tabular font-bold uppercase tracking-widest text-[#49E619] block">
                ACTIVE METRIC AUDIT · {activeMetric.category.toUpperCase()}
              </span>
              <h4 className="font-display-sans uppercase text-2xl sm:text-3xl font-black text-white mt-1">
                {activeMetric.displayShort} {activeMetric.label}
              </h4>
            </div>
            <div className="lg:col-span-5 text-sm sm:text-base text-white/80 leading-relaxed">
              {activeMetric.sublabel} Verified through daily kitchen dispatch logs, partner school headmaster attendance registers, and village gram sabha countersignatures.
            </div>
            <div className="lg:col-span-3 lg:text-right flex flex-col items-start lg:items-end gap-2">
              <button
                type="button"
                onClick={() => onOpenSupport('donate')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[10px] bg-[#49E619] hover:bg-[#B9FF2C] text-[#080808] text-xs font-mono-tabular font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Support This Program</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <Link
                to="/csr-tax-benefits"
                className="text-xs font-mono-tabular text-white/60 hover:text-[#4EDBE2] transition-colors"
              >
                View 80G Tax Documents →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 4 — REGIONAL DISTRIBUTION LEDGER (28 COMMUNITIES)
      ================================================================== */}
      <section id="regional-ledger" className="bg-white text-[#080808] py-24 sm:py-32 border-b border-[#122023]/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="GEOGRAPHIC FOOTPRINT"
            title="Regional Distribution Ledger"
            description="A transparent breakdown of our 28 active partner communities across five districts in Telangana."
          />

          <div className="mt-14 overflow-x-auto border-t-2 border-[#122023]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#122023]/15 text-xs font-mono-tabular font-bold uppercase tracking-wider text-[#6F6F6F]">
                  <th className="py-4 pr-6">District / Corridor</th>
                  <th className="py-4 px-6">Communities</th>
                  <th className="py-4 px-6">Meals / Rations</th>
                  <th className="py-4 px-6">Primary Focus</th>
                  <th className="py-4 pl-6 text-right">Operational Cadence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#122023]/10 text-sm">
                {REGIONAL_LEDGER.map((row) => (
                  <tr
                    key={row.district}
                    className="hover:bg-[#F2F4F3] transition-colors"
                  >
                    <td className="py-5 pr-6 font-display-sans uppercase text-lg font-black text-[#080808] whitespace-nowrap">
                      {row.district}
                    </td>
                    <td className="py-5 px-6 font-mono-tabular font-bold text-[#080808]">
                      {row.communities} Communities
                    </td>
                    <td className="py-5 px-6 font-mono-tabular font-bold text-[#188D44]">
                      {row.mealsServed}
                    </td>
                    <td className="py-5 px-6 text-[#122023]/80">
                      {row.primaryProgram}
                    </td>
                    <td className="py-5 pl-6 text-right font-mono-tabular text-xs font-bold text-[#080808] whitespace-nowrap">
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 5 — FINANCIAL STEWARDSHIP & WHERE EVERY RUPEE GOES
      ================================================================== */}
      <section className="bg-[#080808] text-white py-24 sm:py-32 border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeading
            light
            eyebrow="RADICAL TRANSPARENCY"
            title="Where Every Rupee Goes."
            description="We keep administrative overhead below 4% through citizen volunteerism and direct farm-gate procurement."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {FINANCIAL_STEWARDSHIP.map((item, idx) => {
              const cardColors = [
                'bg-[#49E619] text-[#122023]',
                'bg-[#4EDBE2] text-[#122023]',
                'bg-[#B9FF2C] text-[#122023]',
              ];
              return (
                <ScrollReveal
                  key={item.title}
                  delay={idx * 0.1}
                  className={`p-8 sm:p-10 rounded-[18px] ${cardColors[idx % cardColors.length]} flex flex-col justify-between shadow-xl`}
                >
                  <div>
                    <div className="font-display-sans text-5xl sm:text-6xl font-black text-[#122023]">
                      {item.percentage}
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#122023]/15 mt-5 overflow-hidden">
                      <div
                        className={`h-full bg-[#122023] ${
                          item.percentage === '88%'
                            ? 'w-[88%]'
                            : item.percentage === '8%'
                            ? 'w-[8%]'
                            : 'w-[4%]'
                        }`}
                      />
                    </div>
                    <h3 className="mt-6 font-display-sans uppercase text-2xl font-black text-[#122023]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#122023]/85 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 6 — LONGITUDINAL VISUAL IMPACT TIMELINE (2022 — 2026)
      ================================================================== */}
      <section className="bg-[#F2F4F3] text-[#080808] py-24 sm:py-32 border-b border-[#122023]/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="LONGITUDINAL GROWTH · 2022 — 2026"
            title="Visual Impact Timeline"
            description="How a neighborhood response scaled into a regional humanitarian food network."
          />

          <div className="mt-16 relative border-l-2 border-[#122023]/20 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
            {IMPACT_TIMELINE.map((item, idx) => (
              <ScrollReveal
                key={item.year}
                delay={idx * 0.08}
                className="relative"
              >
                {/* Timeline Node */}
                <span
                  className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#49E619] border-2 border-[#122023]"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-baseline bg-white p-6 sm:p-8 rounded-[16px] border border-[#122023]/10 shadow-xs">
                  <div className="lg:col-span-3">
                    <span className="font-display-sans text-3xl sm:text-4xl font-black text-[#080808]">
                      {item.year}
                    </span>
                    <span className="block text-xs font-mono-tabular font-bold uppercase tracking-wider text-[#188D44] mt-1">
                      {item.quarter}
                    </span>
                  </div>

                  <div className="lg:col-span-6">
                    <h3 className="font-display-sans uppercase text-2xl font-black text-[#080808]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-[#122023]/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="lg:col-span-3 lg:text-right">
                    <span className="font-mono-tabular text-lg font-bold text-[#188D44]">
                      {item.metric}
                    </span>
                    <span className="block text-xs text-[#6F6F6F]">
                      {item.location}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 7 — JOURNAL OF SOLIDARITY SUBSCRIBE
      ================================================================== */}
      <section className="bg-[#080808] text-white py-20 sm:py-28 border-b border-white/10">
        <div className="max-w-[960px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <ScrollReveal>
            <span className="block font-mono-tabular text-[11px] font-bold uppercase tracking-[0.2em] text-[#49E619] mb-4">
              DOCUMENTARY JOURNAL OF SOLIDARITY
            </span>

            <h2 className="font-display-sans text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.04em] text-white leading-[0.95]">
              BE THE <span className="text-[#49E619]">CHANGE</span> TODAY
            </h2>

            <p className="mt-5 text-sm sm:text-base text-white/80 max-w-lg mx-auto leading-relaxed">
              Stay updated on our field dispatches, photographic documentation, and quarterly audited reports. Enter your email to receive our monthly journal.
            </p>

            {!subscribed ? (
              <form
                onSubmit={handleSubscribe}
                noValidate
                className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-md mx-auto"
              >
                <label htmlFor="projects-movement-email" className="sr-only">
                  Your Email Address
                </label>
                <input
                  id="projects-movement-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="YOUR EMAIL ADDRESS"
                  className="flex-1 rounded-[10px] bg-[#122023] border border-white/20 px-4 py-3.5 font-mono-tabular text-xs text-white placeholder:text-neutral-400 uppercase tracking-[0.14em] focus:outline-none focus:border-[#49E619]"
                />
                <button
                  type="submit"
                  className="rounded-[10px] bg-[#49E619] hover:bg-[#B9FF2C] text-[#080808] px-7 py-3.5 font-mono-tabular text-xs font-bold uppercase tracking-[0.16em] transition-colors duration-200 whitespace-nowrap cursor-pointer"
                >
                  SUBSCRIBE
                </button>
              </form>
            ) : (
              <div className="mt-9 inline-flex items-center gap-2.5 rounded-[10px] bg-[#49E619] px-6 py-3.5 text-xs font-mono-tabular font-bold uppercase tracking-[0.14em] text-[#122023]">
                <CheckCircle2 className="w-4 h-4 text-[#122023]" />
                <span>THANK YOU FOR JOINING OUR JOURNAL OF SOLIDARITY.</span>
              </div>
            )}

            {error && (
              <p className="mt-2.5 font-mono-tabular text-xs text-red-500 font-bold">
                {error}
              </p>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* =================================================================
          SECTION 8 — CALL TO ACTION
      ================================================================== */}
      <CTASection onOpenSupport={onOpenSupport} />
    </div>
  );
};
