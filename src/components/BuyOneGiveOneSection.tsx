import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Ticket, Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { EditorialImage } from './EditorialImage';
import { PlateToHandsSteps } from './PlateToHandsSteps';
import { MEAL_IMAGES } from '../data/mealProgram';
import { IMAGES } from '../data/projects';

export const BuyOneGiveOneSection: React.FC = () => {
  return (
    <>
      <section className="bg-[#080808] text-white pt-7 sm:pt-9 lg:pt-11 pb-10 sm:pb-14 relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Top Split: Editorial Proposition Left + ₹150 Dual-Meal Ledger Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-2 sm:pt-3">
            {/* Left Column: Narrative & CTAs */}
            <ScrollReveal className="lg:col-span-6 pt-1 lg:pt-2">
              <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.22em] text-[#49E619] block mb-2.5">
                SIGNATURE INITIATIVE · BUY 1, GIVE 1
              </span>

              <h2 className="font-display-sans uppercase text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.04em] leading-[0.94] text-white">
                BUY A MEAL.
                <br />
                <span className="text-[#49E619]">GIVE A MEAL.</span>
              </h2>

              <p className="mt-4 sm:mt-5 font-display-sans uppercase text-xl sm:text-2xl font-black text-[#B9FF2C] tracking-tight">
                One meal for you. One meal for a child in need.
              </p>

              <p className="mt-3.5 text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
                Choose a nutritious meal from our kitchen. Your ₹150 purchase
                prepares a fresh homestyle meal for you and automatically funds an
                additional hot meal for a child through our Zero Hunger community
                program—tracked from kitchen to community center with a unique
                impact token.
              </p>

              <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  to="/meal-box"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-[9px] bg-[#49E619] hover:bg-[#B9FF2C] text-[#080808] text-xs sm:text-[13px] font-extrabold tracking-wider transition-colors whitespace-nowrap"
                >
                  <span>EXPLORE MEAL BOXES</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/track-meal"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-[9px] bg-white hover:bg-[#4EDBE2] text-[#080808] text-xs sm:text-[13px] font-extrabold tracking-wider transition-colors whitespace-nowrap"
                >
                  <Ticket className="w-3.5 h-3.5 text-[#188D44]" />
                  <span>TRACK SPONSORED MEAL</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Right Column: Visual Equation Card (₹150 = 1 Meal for You + 1 Meal for a Child) */}
            <ScrollReveal delay={0.14} className="lg:col-span-6 flex justify-center lg:justify-end w-full mt-2 sm:mt-3 lg:mt-4">
              <div className="w-full max-w-[530px] bg-[#122023] border border-white/12 rounded-[18px] px-5 py-4 sm:px-6 sm:py-5 shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/12">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-mono-tabular uppercase tracking-widest text-[#49E619] font-bold block">
                      TRANSPARENT DUAL-MEAL LEDGER
                    </span>
                    <h3 className="font-display-sans uppercase text-base sm:text-lg font-black text-white mt-0.5 tracking-tight leading-tight">
                      Single Purchase. Double Nourishment.
                    </h3>
                  </div>
                  <div className="text-right shrink-0 pl-3">
                    <span className="font-mono-tabular text-2xl sm:text-3xl font-bold text-[#B9FF2C] block leading-none">
                      ₹150
                    </span>
                    <span className="text-[9px] font-mono-tabular uppercase tracking-widest text-white/60">
                      ALL-INCLUSIVE
                    </span>
                  </div>
                </div>

                {/* Dual Cards: Customer Meal vs Sponsored Child Meal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3.5">
                  {/* Card A: Customer Meal */}
                  <div className="rounded-[12px] bg-[#F2F4F3] text-[#122023] p-3 flex flex-col justify-between">
                    <div>
                      <div className="aspect-[16/9] rounded-[7px] overflow-hidden mb-2">
                        <EditorialImage
                          src={MEAL_IMAGES.proteinPower}
                          alt="Customer's freshly prepared Protein Power Meal"
                          className="w-full h-full"
                        />
                      </div>
                      <span className="text-[9px] font-mono-tabular font-bold uppercase tracking-widest text-[#188D44] block">
                        01 · YOUR PURCHASED MEAL
                      </span>
                      <h4 className="font-display-sans uppercase text-sm sm:text-base font-black text-[#122023] mt-0.5 leading-snug">
                        One Meal For You
                      </h4>
                      <p className="text-[11px] text-[#122023]/80 mt-0.5 leading-relaxed">
                        Freshly cooked Protein, Veg, or Dal-Paneer thali delivered warm.
                      </p>
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-[#122023]/15 flex items-center justify-between text-[11px] font-mono-tabular">
                      <span className="font-semibold text-[#122023]/70">
                        YOUR MEAL
                      </span>
                      <span className="font-bold text-[#122023]">₹150</span>
                    </div>
                  </div>

                  {/* Card B: Sponsored Child Meal */}
                  <div className="rounded-[12px] bg-[#49E619] text-[#122023] p-3 flex flex-col justify-between relative">
                    <div>
                      <div className="aspect-[16/9] rounded-[7px] overflow-hidden mb-2 relative">
                        <EditorialImage
                          src={IMAGES.schoolNutrition}
                          alt="Child receiving a warm nutritious meal at community center"
                          className="w-full h-full"
                        />
                        <span className="absolute bottom-1 left-1 bg-[#122023] text-[#B9FF2C] font-mono-tabular font-bold text-[8.5px] px-1.5 py-0.5 rounded-[3px] uppercase tracking-wider">
                          TOKEN: ZH-2026-A8F42K
                        </span>
                      </div>
                      <span className="text-[9px] font-mono-tabular font-bold uppercase tracking-widest text-[#122023] block">
                        02 · LINKED CHARITY MEAL
                      </span>
                      <h4 className="font-display-sans uppercase text-sm sm:text-base font-black text-[#122023] mt-0.5 leading-snug">
                        + One Meal For a Child
                      </h4>
                      <p className="text-[11px] text-[#122023]/85 mt-0.5 leading-relaxed font-medium">
                        Automatically funded by purchase and tracked live to a child.
                      </p>
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-[#122023]/20 flex items-center justify-between text-[11px] font-mono-tabular">
                      <span className="text-[#122023] font-bold">
                        SPONSORED BY PURCHASE
                      </span>
                      <span className="font-bold bg-[#122023] text-[#B9FF2C] px-1.5 py-0.5 rounded-[3px] text-[9.5px]">
                        INCLUDED
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Assurance Strip */}
                <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[10.5px] sm:text-[11px] text-white/75">
                  <span className="inline-flex items-center gap-1.5 text-white font-semibold">
                    <Check className="w-3.5 h-3.5 text-[#49E619]" />
                    Total charged at checkout: ₹150
                  </span>
                  <span className="font-mono-tabular text-[10px] text-[#B9FF2C]">
                    100% Verifiable Token Trail
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6-Step Token Trail */}
      <section className="bg-[#080808] text-white pt-8 sm:pt-10 lg:pt-12 pb-14 sm:pb-18 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
          <PlateToHandsSteps />
        </div>
      </section>
    </>
  );
};
