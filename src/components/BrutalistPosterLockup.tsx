import React from 'react';
import { motion } from 'motion/react';

export type PosterStyleVariant = 'all-red' | 'neon-punchline' | 'neon-dot';
export type PosterPalette = 'signature' | 'acid' | 'monochrome' | 'cyber' | 'solar';

export interface BrutalistPosterLockupProps {
  eyebrow?: string;
  lines?: string[];
  styleVariant?: PosterStyleVariant;
  palette?: PosterPalette;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero' | 'poster';
  showEyebrow?: boolean;
  className?: string;
  onOpenStudio?: () => void;
  animated?: boolean;
}

export const PALETTE_CONFIGS: Record<
  PosterPalette,
  {
    name: string;
    bg: string;
    eyebrowColor: string;
    blockBg: string;
    textColor: string;
    accentColor: string;
    badgeLabel: string;
  }
> = {
  signature: {
    name: 'Original Activist',
    bg: '#000000',
    eyebrowColor: '#39FF14', // Vibrant neon green
    blockBg: '#E21B23', // Punchy crimson red
    textColor: '#FFFFFF',
    accentColor: '#39FF14',
    badgeLabel: 'Red · Neon Green',
  },
  acid: {
    name: 'Acid Electric',
    bg: '#050505',
    eyebrowColor: '#4EDBE2',
    blockBg: '#B9FF2C',
    textColor: '#080808',
    accentColor: '#4EDBE2',
    badgeLabel: 'Acid Lime · Cyan',
  },
  monochrome: {
    name: 'Pure Brutalist',
    bg: '#000000',
    eyebrowColor: '#E21B23',
    blockBg: '#FFFFFF',
    textColor: '#000000',
    accentColor: '#E21B23',
    badgeLabel: 'Stark White · Red',
  },
  cyber: {
    name: 'Cyberpunk Neon',
    bg: '#040810',
    eyebrowColor: '#FF2A85',
    blockBg: '#00E5FF',
    textColor: '#040810',
    accentColor: '#FF2A85',
    badgeLabel: 'Electric Cyan · Pink',
  },
  solar: {
    name: 'Solar Flare',
    bg: '#0A0500',
    eyebrowColor: '#FF5E00',
    blockBg: '#FFB800',
    textColor: '#000000',
    accentColor: '#FF5E00',
    badgeLabel: 'Amber Gold · Orange',
  },
};

export const BrutalistPosterLockup: React.FC<BrutalistPosterLockupProps> = ({
  eyebrow = 'ZERO HUNGER INITIATIVE · HYDERABAD',
  lines = ['NO ONE', 'SHOULD', 'SLEEP'],
  styleVariant = 'all-red',
  palette = 'signature',
  size = 'hero',
  showEyebrow = true,
  className = '',
  onOpenStudio,
  animated = true,
}) => {
  const currentPalette = PALETTE_CONFIGS[palette] || PALETTE_CONFIGS.signature;

  // Responsive font size classes based on size prop
  const fontClasses = {
    sm: 'text-2xl sm:text-3xl tracking-[-0.04em]',
    md: 'text-4xl sm:text-5xl tracking-[-0.04em]',
    lg: 'text-5xl sm:text-6xl md:text-7xl tracking-[-0.045em]',
    xl: 'text-6xl sm:text-7xl md:text-8xl tracking-[-0.05em]',
    hero: 'text-[2.75rem] xs:text-[3.25rem] sm:text-[4.25rem] md:text-[5rem] lg:text-[5.75rem] xl:text-[6.25rem] tracking-[-0.045em]',
    poster: 'text-[3.25rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.25rem] tracking-[-0.05em]',
  }[size];

  const paddingClasses = {
    sm: 'px-2.5 py-0.5',
    md: 'px-3 py-1',
    lg: 'px-4 py-1 sm:py-1.5',
    xl: 'px-4 sm:px-5 py-1 sm:py-2',
    hero: 'px-3 sm:px-4 md:px-5 py-0.5 sm:py-1',
    poster: 'px-3 sm:px-5 md:px-6 py-1 sm:py-2',
  }[size];

  const eyebrowClasses = {
    sm: 'text-[10px] tracking-[0.16em] mb-2',
    md: 'text-xs tracking-[0.18em] mb-3',
    lg: 'text-xs sm:text-sm tracking-[0.2em] mb-4',
    xl: 'text-sm sm:text-base tracking-[0.22em] mb-5',
    hero: 'text-xs sm:text-sm tracking-[0.2em] mb-4 sm:mb-5',
    poster: 'text-xs sm:text-base tracking-[0.22em] mb-5 sm:mb-6',
  }[size];

  return (
    <div className={`flex flex-col items-start select-none ${className}`}>
      {/* Top Monospaced Eyebrow / Provenance */}
      {showEyebrow && eyebrow && (
        <motion.div
          initial={animated ? { opacity: 0, y: -6 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className={`font-mono-tabular font-bold uppercase ${eyebrowClasses}`}
          style={{ color: currentPalette.eyebrowColor }}
        >
          {eyebrow}
        </motion.div>
      )}

      {/* Main Bold Brutalist Stepped Block Lockup */}
      <div className="flex flex-col items-start leading-[0.88] font-display-sans uppercase font-black">
        {lines.map((lineText, idx) => {
          const isLastLine = idx === lines.length - 1;
          const isNeonPunchline = isLastLine && styleVariant === 'neon-punchline';
          const isNeonDot = isLastLine && styleVariant === 'neon-dot';

          return (
            <motion.div
              key={`${lineText}-${idx}`}
              initial={animated ? { opacity: 0, x: -14 } : false}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: animated ? 0.08 + idx * 0.09 : 0,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center"
            >
              {isNeonPunchline ? (
                // Terminal line rendered as raw punchline text without block background (like HUNGRY. in the original artwork)
                <span
                  className={`${fontClasses} font-black pt-1 sm:pt-2`}
                  style={{ color: currentPalette.accentColor }}
                >
                  {lineText}
                  <span style={{ color: currentPalette.accentColor }}>.</span>
                </span>
              ) : (
                // Solid block background with crisp sharp 90-degree corners hugging text width
                <span
                  className={`inline-block ${paddingClasses} ${fontClasses} shadow-sm transition-transform duration-200 hover:scale-[1.01]`}
                  style={{
                    backgroundColor: currentPalette.blockBg,
                    color: currentPalette.textColor,
                  }}
                >
                  {lineText}
                  {isNeonDot && (
                    <span
                      className="ml-0.5 inline-block"
                      style={{ color: currentPalette.accentColor }}
                    >
                      .
                    </span>
                  )}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
