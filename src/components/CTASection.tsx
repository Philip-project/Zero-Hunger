import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, HeartHandshake } from 'lucide-react';
import { Button } from './Button';
import { ScrollReveal } from './ScrollReveal';
import { SupportTab } from './SupportModal';

interface CTASectionProps {
  onOpenSupport: (tab?: SupportTab) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenSupport }) => {
  return (
    <section className="relative bg-[#122023] text-white py-24 sm:py-32 overflow-hidden border-t border-white/10">
      {/* Animated Horizon Green Rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="origin-left h-[2px] w-full max-w-[1360px] mx-auto bg-gradient-to-r from-[#49E619] via-[#B9FF2C]/50 to-transparent mb-14 sm:mb-18"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="rounded-[20px] bg-[#49E619] text-[#122023] p-8 sm:p-12 lg:p-16 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <ScrollReveal>
              <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.22em] text-[#122023]/80 block mb-3">
                JOIN THE HUMANITARIAN MOVEMENT
              </span>

              <h2 className="font-display-sans uppercase text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[0.92] text-[#122023]">
                BE PART OF
                <br />
                THE CHANGE.
              </h2>

              <p className="mt-5 text-sm sm:text-base lg:text-lg text-[#122023]/85 font-medium max-w-xl leading-relaxed">
                Whether you sponsor a month of warm courtyard meals or join our
                dawn kitchen volunteers in Hyderabad, your presence turns
                compassion into daily nourishment.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5">
            <ScrollReveal delay={0.14} className="w-full">
              <button
                type="button"
                onClick={() => onOpenSupport('donate')}
                className="w-full py-4 px-7 rounded-[10px] bg-[#122023] hover:bg-[#080808] text-white font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Donate Now</span>
                <ArrowUpRight className="w-4 h-4 text-[#B9FF2C]" />
              </button>
            </ScrollReveal>

            <ScrollReveal delay={0.22} className="w-full">
              <button
                type="button"
                onClick={() => onOpenSupport('volunteer')}
                className="w-full py-4 px-7 rounded-[10px] bg-white hover:bg-[#F2F4F3] text-[#122023] font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <HeartHandshake className="w-4 h-4 text-[#188D44]" />
                <span>Volunteer With Us</span>
              </button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
