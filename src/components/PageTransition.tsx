import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const { pathname, hash } = useLocation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname, hash]);

  if (prefersReducedMotion) {
    return <main>{children}</main>;
  }

  return (
    <motion.main
      key={pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.main>
  );
};
