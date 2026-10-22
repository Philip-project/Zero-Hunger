import React from 'react';
import { HOME_IMPACT_METRICS, ImpactMetric } from '../data/impact';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { ScrollReveal } from '../components/ScrollReveal';
import { SupportTab } from '../components/SupportModal';

export interface ImpactProps {
  metrics?: ImpactMetric[];
  compactFormat?: boolean;
  onOpenSupport?: (tab?: SupportTab, projectSlug?: string) => void;
}

export type ImpactStatsProps = ImpactProps;

const CARD_THEMES = [
  'bg-[#49E619] text-[#122023]',
  'bg-[#4EDBE2] text-[#122023]',
  'bg-[#B9FF2C] text-[#122023]',
];

export const Impact: React.FC<ImpactProps> = ({
  metrics = HOME_IMPACT_METRICS,
  compactFormat = true,
}) => {
  return (
    <section
      id="impact-section"
      className="bg-[#122023] text-white pt-5 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-12 border-b border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Centered Editorial Heading */}
        <div className="text-center max-w-2xl mx-auto pb-10 sm:pb-12">
          <ScrollReveal>
            <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.22em] text-[#49E619] block mb-3">
              VERIFIED HUMANITARIAN LEDGER
            </span>
            <h2 className="font-display-sans uppercase text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.04em] leading-[0.94] text-white">
              SMALL ACTIONS.
              <br />
              <span className="text-[#49E619]">REAL IMPACT.</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Three Color-Blocked Impact Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-[1200px] mx-auto">
          {metrics.map((metric, index) => {
            const cardTheme = CARD_THEMES[index % CARD_THEMES.length];
            return (
              <ScrollReveal key={metric.id} delay={index * 0.1}>
                <div
                  className={`${cardTheme} relative overflow-hidden rounded-[16px] p-5 sm:p-6 lg:p-7 h-full flex flex-col justify-between shadow-xl`}
                >
                  {/* Ripple Background Animation (Concentric Circles from Bottom-Left) */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
                    {/* xxlarge shade1 */}
                    <span className="absolute rounded-full bg-white opacity-20 w-[1000px] h-[1000px] -left-[500px] -bottom-[500px] animate-ripple shadow-[0px_0px_1px_0px_#508fb9]"></span>

                    {/* xlarge shade2 */}
                    <span className="absolute rounded-full bg-white opacity-40 w-[800px] h-[800px] -left-[400px] -bottom-[400px] animate-ripple shadow-[0px_0px_1px_0px_#508fb9]"></span>

                    {/* large shade3 */}
                    <span className="absolute rounded-full bg-white opacity-55 w-[600px] h-[600px] -left-[300px] -bottom-[300px] animate-ripple shadow-[0px_0px_1px_0px_#508fb9]"></span>

                    {/* medium shade4 */}
                    <span className="absolute rounded-full bg-white opacity-70 w-[400px] h-[400px] -left-[200px] -bottom-[200px] animate-ripple shadow-[0px_0px_1px_0px_#508fb9]"></span>

                    {/* small shade5 */}
                    <span className="absolute rounded-full bg-white opacity-85 w-[200px] h-[200px] -left-[100px] -bottom-[100px] animate-ripple shadow-[0px_0px_1px_0px_#508fb9]"></span>
                  </div>

                  <div className="relative z-10">
                    <span className="text-[11px] sm:text-xs font-mono-tabular font-bold uppercase tracking-widest opacity-80 block mb-2.5 sm:mb-3">
                      0{index + 1} · {metric.label.toUpperCase()}
                    </span>

                    <div className="font-display-sans text-5xl sm:text-6xl lg:text-[3.75rem] font-black tracking-[-0.05em] leading-none">
                      <AnimatedCounter
                        value={metric.value}
                        suffix={metric.suffix}
                        formatCompact={compactFormat && metric.id === 'meals'}
                      />
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#122023]/15 relative z-10">
                    <h3 className="font-display-sans uppercase text-lg sm:text-xl font-black tracking-tight">
                      {metric.label}
                    </h3>

                    <p className="mt-1 text-xs sm:text-sm font-medium opacity-85 leading-relaxed">
                      {metric.sublabel}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const ImpactStats = Impact;
