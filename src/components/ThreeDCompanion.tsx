/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  RotateCw,
  Maximize2,
  Minimize2,
  Heart,
  Sparkles,
  Hand,
  PartyPopper,
  UtensilsCrossed,
  Music,
  MessageCircle,
} from 'lucide-react';
import { ThreeDCharacterCanvas, CharacterAction } from './ThreeDCharacterCanvas';

interface ThreeDCompanionProps {
  onOpenDonate?: () => void;
}

const MESSAGES = [
  'Hi there! I am Pip, your 3D nutrition companion! 👋',
  'Every ₹25 cooks a warm, wholesome meal in Hyderabad! 🍲',
  'You can drag on me to spin me 360° in 3D! 🔄',
  'All donations receive a 50% tax exemption under Section 80G! 📜',
  'Click the action buttons below to see me dance or celebrate! ✨',
];

export const ThreeDCompanion: React.FC<ThreeDCompanionProps> = ({ onOpenDonate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState<CharacterAction>('wave');
  const [msgIndex, setMsgIndex] = useState(0);
  const [isBigStage, setIsBigStage] = useState(false);
  const [autoRotate, setAutoRotate] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Auto rotate messages periodically
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isOpen]);

  // Allow triggering 3D character from anywhere (e.g. Hero banner or nav)
  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setAction('celebrate');
      setHasInteracted(true);
    };
    window.addEventListener('toggle-3d-companion', handleOpen);
    return () => window.removeEventListener('toggle-3d-companion', handleOpen);
  }, []);

  // Trigger celebration or wave when opened
  const handleToggleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      setAction('wave');
      setHasInteracted(true);
    } else {
      setIsOpen(false);
      setIsBigStage(false);
    }
  };

  const handleActionChange = (newAction: CharacterAction) => {
    setAction(newAction);
    setHasInteracted(true);
    // If wave or celebrate, auto return to idle after 4 seconds
    if (newAction !== 'idle') {
      setTimeout(() => {
        setAction((current) => (current === newAction ? 'idle' : current));
      }, 4200);
    }
  };

  const handleCharacterClick = () => {
    // Alternate between celebrate and wave
    const nextAction = action === 'celebrate' ? 'wave' : 'celebrate';
    handleActionChange(nextAction);
  };

  return (
    <>
      {/* 3D Big Stage Modal */}
      <AnimatePresence>
        {isBigStage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsBigStage(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0e1719] border border-white/15 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#49E619] animate-pulse" />
                  <span className="font-display-sans font-bold text-white text-lg">
                    Pip · 3D Interactive Mascot
                  </span>
                  <span className="text-xs bg-[#49E619]/15 text-[#49E619] px-2.5 py-0.5 rounded-full font-mono font-medium">
                    WebGL 3D
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsBigStage(false)}
                  className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close stage"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 3D Stage Canvas */}
              <div className="w-full h-80 sm:h-96 relative flex items-center justify-center">
                <ThreeDCharacterCanvas
                  action={action}
                  autoRotate={autoRotate}
                  onCharacterClick={handleCharacterClick}
                  className="w-full h-full"
                />
                <div className="absolute bottom-2 text-center text-xs text-white/50 pointer-events-none">
                  Click Pip to animate · Drag horizontally to spin 360°
                </div>
              </div>

              {/* Action Controls in Stage */}
              <div className="w-full mt-4 flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => handleActionChange('wave')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    action === 'wave'
                      ? 'bg-[#D7262F] text-white'
                      : 'bg-white/10 text-white hover:bg-white/15'
                  }`}
                >
                  <Hand className="w-3.5 h-3.5" /> Wave
                </button>
                <button
                  type="button"
                  onClick={() => handleActionChange('celebrate')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    action === 'celebrate'
                      ? 'bg-[#B9FF2C] text-[#080808]'
                      : 'bg-white/10 text-white hover:bg-white/15'
                  }`}
                >
                  <PartyPopper className="w-3.5 h-3.5" /> Celebrate
                </button>
                <button
                  type="button"
                  onClick={() => handleActionChange('serve')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    action === 'serve'
                      ? 'bg-[#4EDBE2] text-[#080808]'
                      : 'bg-white/10 text-white hover:bg-white/15'
                  }`}
                >
                  <UtensilsCrossed className="w-3.5 h-3.5" /> Serve Meal
                </button>
                <button
                  type="button"
                  onClick={() => handleActionChange('dance')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    action === 'dance'
                      ? 'bg-[#49E619] text-[#080808]'
                      : 'bg-white/10 text-white hover:bg-white/15'
                  }`}
                >
                  <Music className="w-3.5 h-3.5" /> Dance
                </button>
                <button
                  type="button"
                  onClick={() => setAutoRotate(!autoRotate)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    autoRotate
                      ? 'bg-white text-[#080808]'
                      : 'bg-white/10 text-white hover:bg-white/15'
                  }`}
                >
                  <RotateCw className="w-3.5 h-3.5" /> Auto-Spin
                </button>
              </div>

              {onOpenDonate && (
                <button
                  type="button"
                  onClick={() => {
                    setIsBigStage(false);
                    onOpenDonate();
                  }}
                  className="mt-5 w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#D7262F] hover:bg-[#b51c24] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#D7262F]/30 transition-all"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  Sponsor a Warm Meal (₹25)
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Corner Companion */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end pointer-events-none">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto mb-3 w-[290px] sm:w-[320px] bg-[#122023] text-white rounded-2xl border border-white/15 shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header Bar */}
              <div className="px-3.5 py-2.5 bg-black/40 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#49E619] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Pip · 3D Mascot
                  </span>
                  <span className="text-[10px] bg-[#49E619]/20 text-[#49E619] px-1.5 py-0.5 rounded font-mono">
                    3D
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setIsBigStage(true)}
                    className="p-1 text-white/60 hover:text-white rounded hover:bg-white/10 transition-colors"
                    title="Expand 3D Stage"
                    aria-label="Expand 3D Stage"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="p-1 text-white/60 hover:text-white rounded hover:bg-white/10 transition-colors"
                    title="Minimize"
                    aria-label="Minimize"
                  >
                    <Minimize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 3D Character Canvas */}
              <div className="relative w-full h-52 bg-gradient-to-b from-[#16272b] to-[#0c1517] overflow-hidden flex items-center justify-center">
                <ThreeDCharacterCanvas
                  action={action}
                  autoRotate={autoRotate}
                  onCharacterClick={handleCharacterClick}
                  className="w-full h-full"
                />

                {/* Speech Bubble */}
                <motion.div
                  key={msgIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-2.5 left-2.5 right-2.5 bg-white/95 text-[#080808] text-[11px] leading-snug font-medium px-2.5 py-1.5 rounded-lg shadow-md border border-black/10 flex items-start gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D7262F] shrink-0 mt-0.5" />
                  <span className="flex-1">{MESSAGES[msgIndex]}</span>
                </motion.div>

                {/* Tip on canvas */}
                <div className="absolute bottom-1 right-2 text-[10px] text-white/40 pointer-events-none font-mono">
                  Drag to rotate 3D
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-3 bg-[#0d1618] border-t border-white/10 flex flex-col gap-2">
                <div className="flex items-center justify-between text-[11px] text-white/60">
                  <span className="font-semibold uppercase tracking-wider text-[10px]">
                    Pose & Actions
                  </span>
                  <button
                    type="button"
                    onClick={() => setAutoRotate(!autoRotate)}
                    className={`flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded transition-colors ${
                      autoRotate ? 'bg-[#49E619] text-[#080808] font-bold' : 'hover:text-white'
                    }`}
                  >
                    <RotateCw className="w-2.5 h-2.5" /> Auto-spin
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleActionChange('wave')}
                    className={`py-1.5 px-1 rounded-md text-[11px] font-semibold flex flex-col items-center gap-1 transition-all ${
                      action === 'wave'
                        ? 'bg-[#D7262F] text-white shadow-sm'
                        : 'bg-white/5 hover:bg-white/10 text-white/80'
                    }`}
                  >
                    <Hand className="w-3.5 h-3.5" />
                    <span>Wave</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleActionChange('celebrate')}
                    className={`py-1.5 px-1 rounded-md text-[11px] font-semibold flex flex-col items-center gap-1 transition-all ${
                      action === 'celebrate'
                        ? 'bg-[#B9FF2C] text-[#080808] shadow-sm'
                        : 'bg-white/5 hover:bg-white/10 text-white/80'
                    }`}
                  >
                    <PartyPopper className="w-3.5 h-3.5" />
                    <span>Cheer</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleActionChange('serve')}
                    className={`py-1.5 px-1 rounded-md text-[11px] font-semibold flex flex-col items-center gap-1 transition-all ${
                      action === 'serve'
                        ? 'bg-[#4EDBE2] text-[#080808] shadow-sm'
                        : 'bg-white/5 hover:bg-white/10 text-white/80'
                    }`}
                  >
                    <UtensilsCrossed className="w-3.5 h-3.5" />
                    <span>Serve</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleActionChange('dance')}
                    className={`py-1.5 px-1 rounded-md text-[11px] font-semibold flex flex-col items-center gap-1 transition-all ${
                      action === 'dance'
                        ? 'bg-[#49E619] text-[#080808] shadow-sm'
                        : 'bg-white/5 hover:bg-white/10 text-white/80'
                    }`}
                  >
                    <Music className="w-3.5 h-3.5" />
                    <span>Dance</span>
                  </button>
                </div>

                {onOpenDonate && (
                  <button
                    type="button"
                    onClick={onOpenDonate}
                    className="mt-1 w-full py-2 rounded-lg bg-[#D7262F] hover:bg-[#b51c24] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-[#D7262F]/25 transition-all"
                  >
                    <Heart className="w-3.5 h-3.5 fill-current" />
                    Feed Someone Today (₹25)
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Toggle Orb Button */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={handleToggleOpen}
          className={`pointer-events-auto relative group flex items-center gap-2.5 px-3.5 py-2.5 rounded-full shadow-2xl transition-all duration-300 border ${
            isOpen
              ? 'bg-[#122023] text-white border-white/20'
              : 'bg-[#D7262F] hover:bg-[#b51c24] text-white border-white/30 shadow-[#D7262F]/40'
          }`}
          aria-label={isOpen ? 'Close 3D character' : 'Open 3D character'}
        >
          {/* Mini 3D Preview Orb or Icon */}
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center overflow-hidden shrink-0 border border-white/30">
            <span className="text-sm">🍲</span>
          </div>

          <div className="flex flex-col text-left">
            <span className="text-xs font-black tracking-tight leading-none uppercase">
              {isOpen ? 'Close Pip' : '3D Character'}
            </span>
            <span className="text-[10px] text-white/80 font-medium leading-tight">
              {isOpen ? 'Interactive 3D' : 'Tap to meet Pip!'}
            </span>
          </div>

          {/* Unseen prompt dot */}
          {!hasInteracted && !isOpen && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#49E619] rounded-full border-2 border-[#080808] animate-ping" />
          )}
        </motion.button>
      </div>
    </>
  );
};
