<<<<<<< Updated upstream
import { ArrowUpRight, Download, Sliders, Sparkles } from 'lucide-react';
=======
import { ArrowUpRight } from 'lucide-react';
>>>>>>> Stashed changes
import { Link } from 'react-router-dom';
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
import { BrutalistPosterLockup } from '../components/BrutalistPosterLockup';

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

<<<<<<< Updated upstream
      {/* SECTION 5.9 — THE ACTIVIST VISUAL IDENTITY: NO ONE SHOULD SLEEP */}
      <section className="bg-black text-white py-20 sm:py-28 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: 1:1 Live Poster Render matching user's graphic */}
            <div className="lg:col-span-6 flex justify-center lg:justify-start">
              <div className="w-full max-w-[480px] aspect-square bg-black border border-white/15 rounded-[8px] p-6 sm:p-10 shadow-2xl flex flex-col justify-start relative group">
                <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-screen bg-repeat bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 w-full">
                  <BrutalistPosterLockup
                    eyebrow="ZERO HUNGER INITIATIVE · HYDERABAD"
                    lines={['NO ONE', 'SHOULD', 'SLEEP']}
                    styleVariant="all-red"
                    palette="signature"
                    size="lg"
                    animated={false}
                  />
                </div>
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/10 relative z-10">
                  <span className="text-[10px] font-mono-tabular uppercase tracking-widest text-white/50">
                    FIG. 00 · CAMPAIGN POSTER
                  </span>
                  <Link
                    to="/poster-studio"
                    className="text-[11px] font-mono-tabular uppercase tracking-wider font-bold text-[#39FF14] hover:underline"
                  >
                    Open Studio ↗
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Activist Story & Export CTA */}
            <div className="lg:col-span-6">
              <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.22em] text-[#39FF14] block mb-3">
                HUMANITARIAN IDENTITY · HYDERABAD
              </span>
              <h2 className="font-display-sans uppercase text-3xl sm:text-5xl font-black tracking-[-0.04em] leading-[0.95] text-white">
                A VISUAL MANIFESTO:
                <br />
                <span className="text-[#E21B23]">NO ONE SHOULD SLEEP.</span>
              </h2>
              <p className="mt-5 text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
                Designed with brutalist clarity, high-contrast red badge blocks, and an uncompromising message. Spread the word across community centers, university campuses, food banks, and social media.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button to="/poster-studio" variant="primary" size="lg">
                  <Sliders className="w-4 h-4" />
                  <span>Customize in Poster Studio</span>
                </Button>
                <Link
                  to="/poster-studio"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white px-5 py-3 rounded-[10px] text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <Download className="w-4 h-4 text-[#39FF14]" />
                  <span>Download Print & Vector Assets</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

=======
>>>>>>> Stashed changes
      {/* SECTION 6 — CALL TO ACTION */}
      <CTASection onOpenSupport={onOpenSupport} />
    </div>
  );
};
