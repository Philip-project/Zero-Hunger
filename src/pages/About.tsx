import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HOW_WE_WORK, TEAM_MEMBERS } from '../data/team';
import { IMPACT_TIMELINE, HOME_IMPACT_METRICS } from '../data/impact';
import { IMAGES } from '../data/projects';
import { EditorialImage } from '../components/EditorialImage';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionHeading } from '../components/SectionHeading';
import { ImpactStats } from '../components/ImpactStats';
import { CTASection } from '../components/CTASection';
import { MissionProgramsShowcase } from '../components/MissionProgramsShowcase';
import { FivePrinciplesShowcase } from '../components/FivePrinciplesShowcase';
import { Button } from '../components/Button';
import { SupportTab } from '../components/SupportModal';

interface AboutProps {
  onOpenSupport: (tab?: SupportTab) => void;
}

const PHASE_CARD_STYLES = [
  'bg-[#49E619] text-[#122023]',
  'bg-[#4EDBE2] text-[#122023]',
  'bg-[#B9FF2C] text-[#122023]',
  'bg-[#188D44] text-white',
];

export const About: React.FC<AboutProps> = ({ onOpenSupport }) => {
  return (
    <div className="bg-[#080808] text-white">
      {/* HERO */}
      <section className="bg-[#080808] pt-32 sm:pt-40 pb-20 sm:pb-28 border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <ScrollReveal className="lg:col-span-8">
              <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.22em] text-[#49E619] block mb-4">
                ABOUT ZERO HUNGER INITIATIVE
              </span>
              <h1 className="font-display-sans uppercase text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-black tracking-[-0.04em] leading-[0.92] text-white">
                WE BELIEVE
                <br />
                EVERY PLATE
                <br />
                <span className="text-[#49E619]">MATTERS.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:col-span-4">
              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                Born in the courtyards of Hyderabad’s public hospitals in 2022, Zero Hunger is a humanitarian movement reimagining community food systems with dignity, proximity, and radical transparency.
              </p>
            </ScrollReveal>
          </div>

          {/* Large Documentary Panorama */}
          <ScrollReveal delay={0.22} scale className="mt-14 sm:mt-20">
            <div className="relative rounded-[18px] overflow-hidden border border-white/15 aspect-[16/9] sm:aspect-[21/9] shadow-2xl">
              <EditorialImage
                src={IMAGES.communityKitchen}
                alt="Inside the Zero Hunger flagship community kitchen in Secunderabad at dawn"
                priority
                className="w-full h-full"
              />
            </div>
            <p className="mt-3 text-xs font-mono-tabular text-white/60">
              Fig. 01 — Dawn preparation inside our Secunderabad flagship Community Kitchen, where 1,200+ fresh meals begin each morning at 5:30 AM.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 1. OUR STORY & 2. WHY ZERO HUNGER */}
      <section className="bg-white text-[#080808] py-24 sm:py-32">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Essay Column: Our Story */}
            <ScrollReveal className="lg:col-span-7">
              <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.2em] text-[#188D44] block mb-3">
                01 · OUR STORY
              </span>
              <h2 className="font-display-sans uppercase text-3xl sm:text-4xl lg:text-5xl font-black text-[#080808] tracking-[-0.04em] leading-[0.95]">
                From a Single Courtyard Stove to 28 Communities.
              </h2>

              <div className="mt-8 space-y-6 text-base sm:text-lg text-[#080808]/85 leading-relaxed max-w-2xl">
                <p className="first-letter:text-5xl first-letter:font-display-sans first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#188D44]">
                  During the winter of 2022, Dr. Arjun Vardhan Reddy noticed a quiet crisis unfolding outside the wards of Osmania General Hospital in Hyderabad. Families who had traveled from rural Telangana districts to care for critically ill relatives were sleeping on pavements and skipping meals for days so they could afford diagnostic tests and prescriptions.
                </p>
                <p className="text-[#122023]/80">
                  What began the following Sunday with three neighbors cooking fifty plates of warm sona masoori rice and tur dal in an Afzalgunj courtyard revealed a deeper truth: hunger in modern India is rarely a crisis of national food scarcity—it is a crisis of access, dignity, and last-mile infrastructure.
                </p>
                <p className="text-[#122023]/80">
                  Today, Zero Hunger operates solar-assisted community kitchens, rural school breakfast and lunch programs, women-led homestead vegetable cooperatives, and 24-hour flood relief units across five districts in Telangana.
                </p>
              </div>
            </ScrollReveal>

            {/* Right Column: Why Zero Hunger + Editorial Portrait */}
            <ScrollReveal delay={0.15} className="lg:col-span-5 flex flex-col justify-between">
              <div className="p-8 sm:p-10 rounded-[18px] bg-[#122023] text-white border border-[#122023]">
                <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.2em] text-[#49E619] block mb-3">
                  02 · WHY ZERO HUNGER
                </span>
                <h3 className="font-display-sans uppercase text-2xl sm:text-3xl font-black text-white leading-tight">
                  Because Charity Feeds for a Day; Sovereignty Nourishes for a Lifetime.
                </h3>
                <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed">
                  Conventional food relief often treats hungry families as passive statistics—handing out cold, plastic-wrapped rations in hurried queues. We reject that model.
                </p>
                <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed">
                  Every Zero Hunger initiative is co-governed by neighborhood stewards, sources directly from smallholder women farmers, and serves meals on reusable stainless steel plates with the warmth of a family kitchen.
                </p>
              </div>

              <div className="mt-8">
                <div className="aspect-[4/3] rounded-[18px] overflow-hidden border border-[#122023]/15">
                  <EditorialImage
                    src={IMAGES.womenSupport}
                    alt="Rural women cooperative members in Sangareddy holding fresh green harvest"
                    className="w-full h-full"
                  />
                </div>
                <p className="mt-2.5 text-xs font-mono-tabular text-[#6F6F6F]">
                  Fig. 02 — Sangareddy Women’s Growers Collective supplying fresh leafy greens to our urban kitchens.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. OUR MISSION & 4. OUR VISION */}
      <section className="bg-[#F2F4F3] text-[#122023] py-20 sm:py-28 border-y border-[#122023]/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            <ScrollReveal className="rounded-[18px] bg-[#49E619] text-[#122023] p-8 sm:p-12 shadow-sm">
              <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.2em] text-[#122023]/80 block mb-4">
                03 · OUR MISSION
              </span>
              <h2 className="font-display-sans uppercase text-2xl sm:text-4xl font-black text-[#122023] leading-[0.96] tracking-[-0.03em]">
                To guarantee daily, dignified access to freshly cooked, nutrient-dense food for every vulnerable child, caregiver, and elder we serve.
              </h2>
              <p className="mt-5 text-sm sm:text-base text-[#122023]/85 font-medium leading-relaxed">
                We mobilize community kitchens, school lunch partnerships, and rapid-response grain banks to eliminate acute hunger where it hurts most—outside public hospitals, inside rural classrooms, and across drought-prone villages.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="rounded-[18px] bg-[#4EDBE2] text-[#122023] p-8 sm:p-12 shadow-sm">
              <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.2em] text-[#122023]/80 block mb-4">
                04 · OUR VISION
              </span>
              <h2 className="font-display-sans uppercase text-2xl sm:text-4xl font-black text-[#122023] leading-[0.96] tracking-[-0.03em]">
                A resilient, circular food ecosystem where every neighborhood grows, cooks, and shares nourishment without anyone sleeping hungry.
              </h2>
              <p className="mt-5 text-sm sm:text-base text-[#122023]/85 font-medium leading-relaxed">
                We envision a future where emergency relief evolves into community-owned food sovereignty—linking rural women’s homestead gardens directly to urban community tables.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FIND THE PROGRAM BUILT FOR YOUR MISSION (BLACK SECTION) */}
      <MissionProgramsShowcase onOpenSupport={onOpenSupport} />

      {/* 5. OUR VALUES — FIVE PRINCIPLES THAT GOVERN EVERY PLATE */}
      <FivePrinciplesShowcase />

      {/* 6. HOW WE WORK */}
      <section className="bg-[#122023] text-white py-24 sm:py-32 border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeading
            light
            eyebrow="06 · HOW WE WORK"
            title="From Smallholder Harvest to the Community Table."
            description="Our four-stage operational protocol ensures nutritional integrity, zero single-use plastic waste, and complete community accountability."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_WE_WORK.map((item, idx) => {
              const cardStyle = PHASE_CARD_STYLES[idx % PHASE_CARD_STYLES.length];
              const isDarkCard = idx === 3;
              return (
                <ScrollReveal
                  key={item.step}
                  delay={idx * 0.1}
                  className={`p-7 rounded-[16px] ${cardStyle} flex flex-col justify-between shadow-lg`}
                >
                  <div>
                    <div
                      className={`flex items-center justify-between text-xs font-mono-tabular font-bold pb-4 border-b ${
                        isDarkCard ? 'border-white/20 text-white/80' : 'border-[#122023]/15 text-[#122023]/80'
                      }`}
                    >
                      <span>PHASE {item.step}</span>
                      <span>PROTOCOL</span>
                    </div>
                    <h3 className="mt-6 font-display-sans uppercase text-2xl font-black leading-tight">
                      {item.title}
                    </h3>
                    <p
                      className={`mt-3 text-sm leading-relaxed font-medium ${
                        isDarkCard ? 'text-white/85' : 'text-[#122023]/85'
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div
                    className={`mt-8 pt-4 border-t text-xs font-mono-tabular font-bold ${
                      isDarkCard ? 'border-white/20 text-[#B9FF2C]' : 'border-[#122023]/15 text-[#122023]'
                    }`}
                  >
                    {item.metric}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="bg-[#F2F4F3] text-[#080808] py-24 sm:py-32 border-b border-[#122023]/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="CHRONICLE · 2022 — 2026"
            title="Our Journey Toward Zero Hunger."
            description="Every milestone represents a neighborhood that refused to let its neighbors sleep hungry."
          />

          <div className="mt-16 space-y-6">
            {IMPACT_TIMELINE.map((event, idx) => (
              <ScrollReveal
                key={event.year}
                delay={idx * 0.08}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-7 sm:p-9 rounded-[16px] bg-white border border-[#122023]/12 items-center shadow-xs"
              >
                <div className="lg:col-span-3">
                  <div className="font-display-sans text-4xl sm:text-5xl font-black text-[#080808]">
                    {event.year}
                  </div>
                  <div className="mt-1 text-xs font-mono-tabular font-bold uppercase tracking-wider text-[#188D44]">
                    {event.quarter}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <h3 className="font-display-sans uppercase text-xl sm:text-2xl font-black text-[#080808]">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[#122023]/75 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="lg:col-span-3 lg:text-right border-t lg:border-t-0 lg:border-l border-[#122023]/10 pt-4 lg:pt-0 lg:pl-6">
                  <div className="font-mono-tabular text-xl font-bold text-[#188D44]">
                    {event.metric}
                  </div>
                  <div className="text-xs text-[#6F6F6F] mt-1">
                    {event.location}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR TEAM */}
      <section className="bg-white text-[#080808] py-24 sm:py-32 border-b border-[#122023]/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <SectionHeading
              eyebrow="07 · STEWARDSHIP & LEADERSHIP"
              title="The People Behind the Plates."
              description="Physicians, pediatric nutritionists, women cooperative leaders, and supply-chain engineers working side by side."
            />
            <Button
              type="button"
              variant="primary"
              onClick={() => onOpenSupport('volunteer')}
            >
              <span>Join Our Field Team</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <ScrollReveal key={member.id} delay={idx * 0.1} className="group flex flex-col">
                <div className="aspect-[4/3] rounded-[16px] overflow-hidden border border-[#122023]/12 mb-5 bg-[#080808]">
                  <EditorialImage
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    className="w-full h-full"
                    imgClassName="grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="flex items-center gap-2 text-xs text-[#6F6F6F] uppercase tracking-wider font-mono-tabular">
                  <span>{member.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{member.yearsWithOrg}</span>
                </div>
                <h3 className="mt-2 font-display-sans uppercase text-xl font-black text-[#080808]">
                  {member.name}
                </h3>
                <div className="text-xs font-mono-tabular font-bold text-[#188D44] uppercase tracking-wider mt-1">
                  {member.role}
                </div>
                <p className="mt-3 text-sm text-[#122023]/75 leading-relaxed">
                  {member.bio}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. IMPACT STATISTICS */}
      <ImpactStats metrics={HOME_IMPACT_METRICS} compactFormat={false} />

      {/* 9. CTA */}
      <CTASection onOpenSupport={onOpenSupport} />
    </div>
  );
};
