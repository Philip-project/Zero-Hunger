import { ArrowUpRight } from 'lucide-react';
import { Hero } from '../components/Hero';
import { ImpactStats } from '../components/ImpactStats';
import { BuyOneGiveOneSection } from '../components/BuyOneGiveOneSection';
import { ProjectGallery } from '../components/ProjectGallery';
import { MissionProgramsShowcase } from '../components/MissionProgramsShowcase';
import { CommunityDrivesShowcase } from '../components/CommunityDrivesShowcase';
import { CTASection } from '../components/CTASection';
import { ScrollReveal } from '../components/ScrollReveal';
import { EditorialImage } from '../components/EditorialImage';
import { Button } from '../components/Button';
import { FEATURED_PROJECT } from '../data/projects';
import { SupportTab } from '../components/SupportModal';

interface HomeProps {
  onOpenSupport: (tab?: SupportTab, projectSlug?: string) => void;
}

const MISSION_SUBLINES = [
  'IT IS DIGNITY.',
  'IT IS OPPORTUNITY.',
  'IT IS HOPE.',
];

export const Home: React.FC<HomeProps> = ({ onOpenSupport }) => {
  return (
    <div className="bg-brand-black text-white">
      {/* SECTION 1 — HERO (DARK #080808 + VIBRANT GREEN & LIME ACCENTS) */}
      <Hero onOpenSupport={onOpenSupport} />

      {/* SECTION 2 — IMPACT (#122023 SLATE + COLOR-BLOCKED CARDS) */}
      <ImpactStats />

      {/* SECTION 2.5 — BUY A MEAL. GIVE A MEAL. (SIGNATURE 1-FOR-1 PROGRAM) */}
      <BuyOneGiveOneSection />

      {/* SECTION 3 — PROJECT GALLERY (BLACK #080808 + GRAYSCALE-TO-COLOR HOVER) */}
      <ProjectGallery />

      {/* SECTION 4 — FEATURED PROJECT (DEEP SLATE #122023 SHOWCASE) */}
      <section className="bg-brand-slate text-white py-14 sm:py-20 border-t border-white/10 overflow-hidden">
        <div className="max-w-340 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Large Documentary Image — bleeds to left edge */}
            <ScrollReveal scale className="lg:col-span-6 px-5 sm:px-8 lg:pl-8 xl:pl-12 lg:pr-0 -mt-6 lg:-mt-12">
              <div className="relative rounded-[14px] overflow-hidden border border-white/15 aspect-[16/10] max-w-[480px] lg:max-w-none shadow-2xl">
                <EditorialImage
                  src={FEATURED_PROJECT.image}
                  alt={FEATURED_PROJECT.title}
                  className="w-full h-full"
                />
                <div className="absolute bottom-3 left-3 bg-brand-black/90 backdrop-blur-xs px-3 py-1.5 rounded-md text-[10px] font-mono-tabular font-bold uppercase tracking-widest text-brand-lime">
                  SECUNDERABAD & OLD CITY · DAILY DAWN SERVICE
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Editorial Story & Metrics */}
            <ScrollReveal delay={0.14} className="lg:col-span-6 px-5 sm:px-8 lg:px-0 lg:pr-12 -mt-6 lg:-mt-12">
              <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.22em] text-brand-green block mb-3">
                {FEATURED_PROJECT.eyebrow}
              </span>

              <h2 className="font-display-sans uppercase text-3xl sm:text-4xl font-black tracking-[-0.04em] leading-[0.94] text-white">
                {FEATURED_PROJECT.headlineLines.map((line, idx) => (
                  <span
                    key={line}
                    className={`block ${idx === 1 ? 'text-brand-green' : ''}`}
                  >
                    {line}
                  </span>
                ))}
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed">
                {FEATURED_PROJECT.description}
              </p>

              {/* Featured Project Stats */}
              <div className="mt-5 pt-4 pb-4 border-y border-white/15 grid grid-cols-3 gap-4">
                {FEATURED_PROJECT.stats.map((stat, idx) => (
                  <div key={stat.label}>
                    <div
                      className={`font-display-sans text-xl sm:text-2xl font-black ${idx === 0
                        ? 'text-brand-green'
                        : idx === 1
                          ? 'text-brand-cyan'
                          : 'text-brand-lime'
                        }`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-mono-tabular uppercase tracking-wider text-white/70 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  to={`/projects/${FEATURED_PROJECT.slug}`}
                  variant="primary"
                  size="lg"
                >
                  <span>Explore Featured Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 5 — OUR MISSION (CRISP ALABASTER / WHITE HIGH-CONTRAST BREAK) */}
      <section className="bg-brand-alabaster text-brand-slate py-24 sm:py-32 border-t border-brand-slate/10">        <div className="max-w-280 mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <ScrollReveal>
          <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.22em] text-brand-emerald block mb-4">
            OUR CONVICTION
          </span>
          <h2 className="font-display-sans uppercase text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[0.94] text-brand-slate">
            FOOD IS MORE THAN
            <br />
            <span className="text-brand-emerald">NOURISHMENT.</span>
          </h2>
        </ScrollReveal>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {MISSION_SUBLINES.map((line, index) => (
            <ScrollReveal
              key={line}
              delay={0.08 + index * 0.1}
              yOffset={16}
            >
              <div
                className={`rounded-[14px] py-6 px-5 font-display-sans uppercase text-2xl sm:text-3xl font-black tracking-tight ${index === 0
                  ? 'bg-brand-green text-brand-slate'
                  : index === 1
                    ? 'bg-brand-cyan text-brand-slate'
                    : 'bg-brand-lime text-brand-slate'
                  }`}
              >
                {line}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.35} className="mt-10">
          <p className="text-sm sm:text-base text-brand-slate/80 max-w-xl mx-auto leading-relaxed font-medium">
            When a child sits down to a warm midday meal at school, or a family receives dry grain reserves before the monsoon floods, an entire trajectory shifts from survival toward human possibility.
          </p>
        </ScrollReveal>
      </div>
      </section>

      {/* SECTION 5.5 — FIND THE PROGRAM BUILT FOR YOUR MISSION (BLACK BACKGROUND) */}
      <MissionProgramsShowcase onOpenSupport={onOpenSupport} />

      {/* SECTION 5.8 — COMMUNITY DRIVES: CELEBRATE OCCASIONS, CLOTH DONATIONS, FOOD RESCUE & CSR */}
      <CommunityDrivesShowcase />


      {/* SECTION 6 — CALL TO ACTION */}
      <CTASection onOpenSupport={onOpenSupport} />
    </div>
  );
};
