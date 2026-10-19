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
    <section className="bg-[#080808] text-white py-20 sm:py-28 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Split: Editorial Proposition Left + ₹150 Dual-Meal Ledger Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Narrative & CTAs */}
          <ScrollReveal className="lg:col-span-6">
            <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.22em] text-[#49E619] block mb-3">
              SIGNATURE INITIATIVE · BUY 1, GIVE 1
            </span>

            <h2 className="font-display-sans uppercase text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] leading-[0.94] text-white">
              BUY A MEAL.
              <br />
              <span className="text-[#49E619]">GIVE A MEAL.</span>
            </h2>

            <p className="mt-6 font-display-sans uppercase text-xl sm:text-2xl font-black text-[#B9FF2C] tracking-tight">
              One meal for you. One meal for a child in need.
            </p>

            <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
              Choose a nutritious meal from our kitchen. Your ₹150 purchase
              prepares a fresh homestyle meal for you and automatically funds an
              additional hot meal for a child through our Zero Hunger community
              program—tracked from kitchen to community center with a unique
              impact token.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                to="/meal-box"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-[10px] bg-[#49E619] hover:bg-[#B9FF2C] text-[#080808] text-sm font-bold tracking-tight transition-colors whitespace-nowrap"
              >
                <span>EXPLORE MEAL BOXES</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                to="/track-meal"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-[10px] bg-white hover:bg-[#4EDBE2] text-[#080808] text-sm font-bold tracking-tight transition-colors whitespace-nowrap"
              >
                <Ticket className="w-4 h-4 text-[#188D44]" />
                <span>TRACK SPONSORED MEAL</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Right Column: Visual Equation Card (₹150 = 1 Meal for You + 1 Meal for a Child) */}
          <ScrollReveal delay={0.14} className="lg:col-span-6">
            <div className="bg-[#122023] border border-white/12 rounded-[20px] p-6 sm:p-8 lg:p-10 shadow-2xl">
              <div className="flex items-center justify-between pb-6 border-b border-white/12">
                <div>
                  <span className="text-[11px] font-mono-tabular uppercase tracking-widest text-[#49E619] font-bold block">
                    TRANSPARENT DUAL-MEAL LEDGER
                  </span>
                  <h3 className="font-display-sans uppercase text-2xl font-black text-white mt-1 tracking-tight">
                    Single Purchase. Double Nourishment.
                  </h3>
                </div>
                <div className="text-right">
                  <span className="font-mono-tabular text-3xl sm:text-4xl font-bold text-[#B9FF2C] block leading-none">
                    ₹150
                  </span>
                  <span className="text-[10px] font-mono-tabular uppercase tracking-widest text-white/60">
                    ALL-INCLUSIVE
                  </span>
                </div>
              </div>

              {/* Dual Cards: Customer Meal vs Sponsored Child Meal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {/* Card A: Customer Meal */}
                <div className="rounded-[14px] bg-[#F2F4F3] text-[#122023] p-4 flex flex-col justify-between">
                  <div>
                    <div className="aspect-[4/3] rounded-[10px] overflow-hidden mb-3.5">
                      <EditorialImage
                        src={MEAL_IMAGES.proteinPower}
                        alt="Customer's freshly prepared Protein Power Meal"
                        className="w-full h-full"
                      />
                    </div>
                    <span className="text-[10px] font-mono-tabular font-bold uppercase tracking-widest text-[#188D44] block">
                      01 · YOUR PURCHASED MEAL
                    </span>
                    <h4 className="font-display-sans uppercase text-xl font-black text-[#122023] mt-1">
                      One Meal For You
                    </h4>
                    <p className="text-xs text-[#122023]/80 mt-1 leading-relaxed">
                      Freshly cooked Protein, Veg, or Dal-Paneer thali delivered
                      warm to your doorstep.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#122023]/15 flex items-center justify-between text-xs font-mono-tabular">
                    <span className="font-semibold text-[#122023]/70">
                      YOUR MEAL
                    </span>
                    <span className="font-bold text-[#122023]">₹150</span>
                  </div>
                </div>

                {/* Card B: Sponsored Child Meal */}
                <div className="rounded-[14px] bg-[#49E619] text-[#122023] p-4 flex flex-col justify-between relative">
                  <div>
                    <div className="aspect-[4/3] rounded-[10px] overflow-hidden mb-3.5 relative">
                      <EditorialImage
                        src={IMAGES.schoolNutrition}
                        alt="Child receiving a warm nutritious meal at community center"
                        className="w-full h-full"
                      />
                      <span className="absolute bottom-2 left-2 bg-[#122023] text-[#B9FF2C] font-mono-tabular font-bold text-[10px] px-2 py-0.5 rounded-[4px] uppercase tracking-wider">
                        TOKEN: ZH-2026-A8F42K
                      </span>
                    </div>
                    <span className="text-[10px] font-mono-tabular font-bold uppercase tracking-widest text-[#122023] block">
                      02 · LINKED CHARITY MEAL
                    </span>
                    <h4 className="font-display-sans uppercase text-xl font-black text-[#122023] mt-1">
                      + One Meal For a Child
                    </h4>
                    <p className="text-xs text-[#122023]/85 mt-1 leading-relaxed font-medium">
                      Automatically funded by your purchase and tracked live to
                      a child at our community center.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#122023]/20 flex items-center justify-between text-xs font-mono-tabular">
                    <span className="text-[#122023] font-bold">
                      SPONSORED BY PURCHASE
                    </span>
                    <span className="font-bold bg-[#122023] text-[#B9FF2C] px-2 py-0.5 rounded-[4px]">
                      INCLUDED
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Assurance Strip */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-white/75">
                <span className="inline-flex items-center gap-1.5 text-white font-semibold">
                  <Check className="w-3.5 h-3.5 text-[#49E619]" />
                  Total charged at checkout: ₹150
                </span>
                <span className="font-mono-tabular text-[11px] text-[#B9FF2C]">
                  100% Verifiable Token Trail
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 6-Step Dark Bento Section: From Your Plate to a Child's Hands */}
        <div className="mt-20">
          <PlateToHandsSteps />
        </div>
      </div>
    </section>
  );
};
