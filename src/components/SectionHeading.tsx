import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  subtitle,
  align = 'left',
  light = false,
  className = '',
}) => {
  const alignClasses =
    align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';
  const bodyText = description || subtitle;

  return (
    <ScrollReveal className={`flex flex-col ${alignClasses} ${className}`}>
      {eyebrow && (
        <span
          className={`text-xs font-mono-tabular font-bold uppercase tracking-[0.2em] mb-3 ${
            light ? 'text-[#49E619]' : 'text-[#188D44]'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display-sans uppercase text-3xl sm:text-5xl lg:text-[56px] font-black tracking-[-0.04em] leading-[0.94] max-w-3xl ${
          light ? 'text-white' : 'text-[#080808]'
        }`}
      >
        {title}
      </h2>
      {bodyText && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed max-w-2xl ${
            light ? 'text-white/80' : 'text-[#122023]/75'
          }`}
        >
          {bodyText}
        </p>
      )}
    </ScrollReveal>
  );
};
