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
    <div className="bg-[#080808] text-white">
      {/* SECTION 1 — HERO (DARK #080808 + VIBRANT GREEN & LIME ACCENTS) */}
      <Hero onOpenSupport={onOpenSupport} />

      {/* SECTION 2 — IMPACT (#122023 SLATE + COLOR-BLOCKED CARDS) */}
      <ImpactStats />

      {/* SECTION 2.5 — BUY A MEAL. GIVE A MEAL. (SIGNATURE 1-FOR-1 PROGRAM) */}
      <BuyOneGiveOneSection />

      {/* SECTION 3 — PROJECT GALLERY (BLACK #080808 + GRAYSCALE-TO-COLOR HOVER) */}
      <ProjectGallery />

      {/* SECTION 4 — FEATURED PROJECT (DEEP SLATE #122023 SHOWCASE) */}
      <section className="bg-[#122023] text-white py-20 sm:py-28 border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Large Documentary Image */}
            <ScrollReveal scale className="lg:col-span-7">
              <div className="relative rounded-[18px] overflow-hidden border border-white/15 aspect-[16/10] shadow-2xl">
                <EditorialImage
                  src={FEATURED_PROJECT.image}
                  alt={FEATURED_PROJECT.title}
                  className="w-full h-full"
                />
                <div className="absolute bottom-4 left-4 bg-[#080808]/90 backdrop-blur-xs px-3.5 py-1.5 rounded-[8px] text-[11px] font-mono-tabular font-bold uppercase tracking-widest text-[#B9FF2C]">
                  SECUNDERABAD & OLD CITY · DAILY DAWN SERVICE
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Editorial Story & Metrics */}
            <ScrollReveal delay={0.14} className="lg:col-span-5">
              <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.22em] text-[#49E619] block mb-3">
                {FEATURED_PROJECT.eyebrow}
              </span>

              <h2 className="font-display-sans uppercase text-4xl sm:text-5xl font-black tracking-[-0.04em] leading-[0.94] text-white">
                {FEATURED_PROJECT.headlineLines.map((line, idx) => (
                  <span
                    key={line}
                    className={`block ${idx === 1 ? 'text-[#49E619]' : ''}`}
                  >
                    {line}
                  </span>
                ))}
              </h2>

              <p className="mt-5 text-sm sm:text-base text-white/80 leading-relaxed">
                {FEATURED_PROJECT.description}
              </p>

              {/* Featured Project Stats */}
              <div className="mt-8 pt-6 pb-6 border-y border-white/15 grid grid-cols-3 gap-4">
                {FEATURED_PROJECT.stats.map((stat, idx) => (
                  <div key={stat.label}>
                    <div
                      className={`font-display-sans text-2xl sm:text-3xl font-black ${
                        idx === 0
                          ? 'text-[#49E619]'
                          : idx === 1
                          ? 'text-[#4EDBE2]'
                          : 'text-[#B9FF2C]'
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
      <section className="bg-[#F2F4F3] text-[#122023] py-24 sm:py-32 border-t border-[#122023]/10">
        <div className="max-w-[1120px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <ScrollReveal>
            <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.22em] text-[#188D44] block mb-4">
              OUR CONVICTION
            </span>
            <h2 className="font-display-sans uppercase text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[0.94] text-[#122023]">
              FOOD IS MORE THAN
              <br />
              <span className="text-[#188D44]">NOURISHMENT.</span>
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
                  className={`rounded-[14px] py-6 px-5 font-display-sans uppercase text-2xl sm:text-3xl font-black tracking-tight ${
                    index === 0
                      ? 'bg-[#49E619] text-[#122023]'
                      : index === 1
                      ? 'bg-[#4EDBE2] text-[#122023]'
                      : 'bg-[#B9FF2C] text-[#122023]'
                  }`}
                >
                  {line}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.35} className="mt-10">
            <p className="text-sm sm:text-base text-[#122023]/80 max-w-xl mx-auto leading-relaxed font-medium">
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
