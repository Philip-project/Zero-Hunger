import React from 'react';
import { HOME_IMPACT_METRICS, ImpactMetric } from '../data/impact';
import { AnimatedCounter } from './AnimatedCounter';
import { ScrollReveal } from './ScrollReveal';

interface ImpactStatsProps {
  metrics?: ImpactMetric[];
  compactFormat?: boolean;
}

const CARD_THEMES = [
  'bg-[#49E619] text-[#122023]',
  'bg-[#4EDBE2] text-[#122023]',
  'bg-[#B9FF2C] text-[#122023]',
];

export const ImpactStats: React.FC<ImpactStatsProps> = ({
  metrics = HOME_IMPACT_METRICS,
  compactFormat = true,
}) => {
  return (
    <section
      id="impact-section"
      className="bg-[#122023] text-white py-20 sm:py-28 lg:py-32 border-b border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Editorial Heading & Supporting Prose */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-12 sm:pb-16">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.22em] text-[#49E619] block mb-3">
                VERIFIED HUMANITARIAN LEDGER
              </span>
              <h2 className="font-display-sans uppercase text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] leading-[0.94] text-white">
                SMALL ACTIONS.
                <br />
                <span className="text-[#49E619]">REAL IMPACT.</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5">
            <ScrollReveal delay={0.12}>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                Every meal creates more than nourishment.
                <br className="hidden sm:inline" /> It creates dignity, hope and possibility.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Three Color-Blocked Impact Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {metrics.map((metric, index) => {
            const cardTheme = CARD_THEMES[index % CARD_THEMES.length];
            return (
              <ScrollReveal key={metric.id} delay={index * 0.1}>
                <div
                  className={`${cardTheme} rounded-[16px] p-7 sm:p-9 h-full flex flex-col justify-between shadow-xl`}
                >
                  <div>
                    <span className="text-xs font-mono-tabular font-bold uppercase tracking-widest opacity-80 block mb-4">
                      0{index + 1} · {metric.label.toUpperCase()}
                    </span>

                    <div className="font-display-sans text-6xl sm:text-7xl lg:text-[5rem] font-black tracking-[-0.05em] leading-none">
                      <AnimatedCounter
                        value={metric.value}
                        suffix={metric.suffix}
                        formatCompact={compactFormat && metric.id === 'meals'}
                      />
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-[#122023]/15">
                    <h3 className="font-display-sans uppercase text-xl font-black tracking-tight">
                      {metric.label}
                    </h3>

                    <p className="mt-1.5 text-xs sm:text-sm font-medium opacity-85 leading-relaxed">
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
