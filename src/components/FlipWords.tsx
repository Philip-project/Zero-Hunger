import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
  textClassName?: string;
}

export const FlipWords: React.FC<FlipWordsProps> = ({
  words,
  duration = 2600,
  className = '',
  textClassName = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (words.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [words, duration]);

  const currentWord = words[currentIndex] || '';

  if (prefersReducedMotion) {
    return (
      <span className={`inline-block font-black ${className} ${textClassName}`}>
        {currentWord}
      </span>
    );
  }

  return (
    <span
      className={`relative inline-flex items-center perspective-[1000px] overflow-hidden align-baseline ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          initial={{
            opacity: 0,
            y: 22,
            rotateX: -85,
            filter: 'blur(6px)',
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: 'blur(0px)',
          }}
          exit={{
            opacity: 0,
            y: -22,
            rotateX: 85,
            filter: 'blur(6px)',
          }}
          transition={{
            duration: 0.52,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`inline-block transform-gpu will-change-transform ${textClassName}`}
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
