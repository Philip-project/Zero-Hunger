import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'motion/react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  formatCompact?: boolean;
  durationMs?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value = 0,
  suffix = '',
  prefix = '',
  formatCompact = false,
  durationMs = 1400,
  className = '',
}) => {
  const safeValue =
    typeof value === 'number' && !Number.isNaN(value) ? value : 0;
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const prefersReducedMotion = useReducedMotion();
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setCount(safeValue);
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);
      // Cubic ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * safeValue));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(safeValue);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [isInView, safeValue, durationMs, prefersReducedMotion]);

  const safeCount =
    typeof count === 'number' && !Number.isNaN(count) ? count : 0;

  const formattedNumber = formatCompact
    ? safeCount >= 1000
      ? `${Math.floor(safeCount / 1000)}K`
      : safeCount.toLocaleString('en-IN')
    : safeCount.toLocaleString('en-IN');

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
};
