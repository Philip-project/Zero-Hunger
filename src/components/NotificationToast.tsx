import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Heart, X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useMealProgram } from '../context/MealProgramContext';

export const NotificationToast: React.FC = () => {
  const { activeToast, dismissToast } = useMealProgram();
  const navigate = useNavigate();

  const handleViewDelivery = () => {
    if (!activeToast) return;
    const token = activeToast.tokenNumber;
    dismissToast();
    navigate(`/track-meal?token=${encodeURIComponent(token)}`);
  };

  return (
    <AnimatePresence>
      {activeToast && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 w-[calc(100vw-2.5rem)] max-w-md rounded-[16px] bg-[#122023] text-white border border-[#49E619]/40 shadow-2xl p-6"
        >
          <div className="flex items-start justify-between gap-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#49E619]" />
              <span className="font-mono-tabular text-xs font-bold uppercase tracking-[0.2em] text-[#49E619]">
                ZERO HUNGER · IMPACT ALERT
              </span>
            </div>
            <button
              type="button"
              onClick={dismissToast}
              aria-label="Close notification"
              className="text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-4">
            <h4 className="font-display-sans uppercase text-xl font-black text-white flex items-center gap-2">
              <span>{activeToast.title}</span>
              <Heart className="w-4 h-4 text-[#49E619] fill-[#49E619] shrink-0" />
            </h4>

            <div className="mt-2.5 inline-block rounded-[6px] bg-white/10 border border-white/15 px-3 py-1 font-mono-tabular text-xs text-white">
              Token: <span className="font-bold text-[#B9FF2C]">{activeToast.tokenNumber}</span>
            </div>

            <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed">
              {activeToast.message}
            </p>

            {/* Multi-channel dispatch confirmation */}
            <div className="mt-3 flex flex-wrap items-center gap-3 text-[10px] font-mono-tabular uppercase tracking-wider text-white/70">
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-[#49E619]" />
                Web Alert
              </span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-[#49E619]" />
                Email Dispatched
              </span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-[#49E619]" />
                SMS / WhatsApp Sent
              </span>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <button
                type="button"
                onClick={handleViewDelivery}
                className="flex-1 py-3 px-4 rounded-[10px] bg-[#49E619] hover:bg-[#B9FF2C] text-[#080808] font-mono-tabular text-xs font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>VIEW DELIVERY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
