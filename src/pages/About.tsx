import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Clock,
} from 'lucide-react';
import { HOW_WE_WORK, TEAM_MEMBERS } from '../data/team';
import { IMPACT_TIMELINE } from '../data/impact';
import { IMAGES } from '../data/projects';
import { EditorialImage } from '../components/EditorialImage';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionHeading } from '../components/SectionHeading';
import { MissionProgramsShowcase } from '../components/MissionProgramsShowcase';
import { FivePrinciplesShowcase } from '../components/FivePrinciplesShowcase';
import { Button } from '../components/Button';
import { SupportTab } from '../components/SupportModal';

interface AboutProps {
  onOpenSupport: (tab?: SupportTab) => void;
}

interface ContactHub {
  id: string;
  name: string;
  address: string;
  hours: string;
  coordinates: string;
  role: string;
}

const HUBS: ContactHub[] = [
  {
    id: 'secunderabad',
    name: 'Secunderabad Flagship Community Kitchen',
    address: 'Plot 14, Clock Tower Corridor, Secunderabad, Hyderabad 500003',
    hours: 'Daily · 5:30 AM – 7:30 PM IST',
    coordinates: '17.4399° N, 78.4983° E',
    role: 'Central Culinary Operations & Volunteer Orientation',
  },
  {
    id: 'afzalgunj',
    name: 'Old City & Hospital Courtyard Hub',
    address: 'Near Osmania General Hospital Gate 2, Afzalgunj, Hyderabad 500012',
    hours: 'Daily · 11:30 AM – 2:30 PM IST',
    coordinates: '17.3753° N, 78.4744° E',
    role: 'Daily Midday Community Meal Distribution',
  },
  {
    id: 'sangareddy',
    name: 'Sangareddy Rural Grain Bank & Co-op Center',
    address: 'Panchayat Road, Sangareddy Cluster, Telangana 502001',
    hours: 'Mon–Sat · 8:00 AM – 5:00 PM IST',
    coordinates: '17.6140° N, 78.0816° E',
    role: 'Smallholder Procurement & Maternal Nutrition Baskets',
  },
];

const PHASE_CARD_STYLES = [
  'bg-[#49E619] text-[#122023]',
  'bg-[#4EDBE2] text-[#122023]',
  'bg-[#B9FF2C] text-[#122023]',
  'bg-[#188D44] text-white',
];

export const About: React.FC<AboutProps> = ({ onOpenSupport }) => {
  const { hash } = useLocation();

  // Contact Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Sponsor a Community Meal Drive');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedHub, setSelectedHub] = useState<ContactHub>(HUBS[0]);

  // Handle direct navigation to #contact
  useEffect(() => {
    if (hash === '#contact') {
      const timer = setTimeout(() => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [hash]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

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

      {/* 08 · GET IN TOUCH (FULL CONTACT SECTION INTEGRATED) */}
      <section
        id="contact"
        className="bg-[#080808] text-white pt-24 sm:pt-32 pb-24 sm:pb-32 border-b border-white/10"
      >
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal className="max-w-4xl mb-16 sm:mb-24">
            <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.22em] text-[#49E619] block mb-4">
              08 · GET IN TOUCH · HYDERABAD, INDIA
            </span>
            <h2 className="font-display-sans uppercase text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-black tracking-[-0.04em] leading-[0.92] text-white">
              LET&apos;S CREATE
              <br />
              <span className="text-[#49E619]">CHANGE</span> TOGETHER.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-white/80 max-w-xl leading-relaxed">
              Whether you are looking to partner on a school nutrition drive, volunteer in our morning kitchen, or inquire about institutional grants, our team responds within 24 hours.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT: CONTACT FORM */}
            <ScrollReveal className="lg:col-span-7 rounded-[20px] bg-[#F2F4F3] text-[#122023] p-7 sm:p-10 lg:p-12 shadow-2xl">
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center bg-[#49E619] text-[#122023]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.2em] text-[#188D44]">
                    MESSAGE RECEIVED
                  </span>
                  <h3 className="font-display-sans uppercase text-3xl font-black text-[#122023] mt-2">
                    Thank you for reaching out, {name}.
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#122023]/80 max-w-md mx-auto leading-relaxed">
                    We have logged your inquiry regarding <span className="text-[#080808] font-bold">“{subject}”</span> and sent a confirmation copy to {email}. Our Hyderabad coordination desk will reply shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="mt-8 px-6 py-3.5 rounded-[10px] bg-[#49E619] text-[#080808] text-xs font-mono-tabular font-bold uppercase tracking-wider hover:bg-[#B9FF2C] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-mono-tabular font-bold uppercase tracking-wider text-[#122023] mb-2"
                      >
                        Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Siddharth Verma"
                        className="w-full rounded-[10px] px-4 py-3.5 bg-white border border-[#122023]/20 text-sm text-[#080808] focus:outline-none focus:border-[#122023] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-mono-tabular font-bold uppercase tracking-wider text-[#122023] mb-2"
                      >
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="siddharth@example.org"
                        className="w-full rounded-[10px] px-4 py-3.5 bg-white border border-[#122023]/20 text-sm text-[#080808] focus:outline-none focus:border-[#122023] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-mono-tabular font-bold uppercase tracking-wider text-[#122023] mb-2"
                      >
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98480 XXXXX"
                        className="w-full rounded-[10px] px-4 py-3.5 bg-white border border-[#122023]/20 text-sm text-[#080808] focus:outline-none focus:border-[#122023] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-mono-tabular font-bold uppercase tracking-wider text-[#122023] mb-2"
                      >
                        Subject *
                      </label>
                      <select
                        id="contact-subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full h-[48px] rounded-[10px] px-4 bg-white border border-[#122023]/20 text-sm text-[#080808] focus:outline-none focus:border-[#122023] transition-colors"
                      >
                        <option value="Sponsor a Community Meal Drive">
                          Sponsor a Community Meal Drive
                        </option>
                        <option value="Volunteer With Field Operations">
                          Volunteer With Field Operations
                        </option>
                        <option value="Corporate CSR & Institutional Partnership">
                          Corporate CSR & Institutional Partnership
                        </option>
                        <option value="School Nutrition Program Inquiry">
                          School Nutrition Program Inquiry
                        </option>
                        <option value="Press & Documentary Media">
                          Press & Documentary Media
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono-tabular font-bold uppercase tracking-wider text-[#122023] mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us how you would like to collaborate or support our communities..."
                      className="w-full rounded-[10px] p-4 bg-white border border-[#122023]/20 text-sm text-[#080808] focus:outline-none focus:border-[#122023] transition-colors resize-y"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-[10px] bg-[#49E619] hover:bg-[#B9FF2C] text-[#080808] text-sm font-bold transition-colors cursor-pointer"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </ScrollReveal>

            {/* RIGHT: DIRECT CONTACT & SOCIAL CHANNELS */}
            <ScrollReveal delay={0.14} className="lg:col-span-5 space-y-8">
              <div className="rounded-[18px] bg-[#122023] p-7 border border-white/12">
                <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.2em] text-[#49E619] block mb-5">
                  DIRECT COORDINATION DESK
                </span>
                <div className="space-y-5">
                  <a
                    href="mailto:hello@zerohunger.org"
                    className="flex items-start gap-3.5 group"
                  >
                    <Mail className="w-5 h-5 text-[#49E619] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-mono-tabular uppercase tracking-wider text-white/60">
                        Email
                      </div>
                      <div className="font-display-sans text-xl font-black text-white group-hover:text-[#49E619] transition-colors">
                        hello@zerohunger.org
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+919848024190"
                    className="flex items-start gap-3.5 group"
                  >
                    <Phone className="w-5 h-5 text-[#4EDBE2] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-mono-tabular uppercase tracking-wider text-white/60">
                        Phone & Dispatch Helpline
                      </div>
                      <div className="font-mono-tabular text-lg font-bold text-white group-hover:text-[#4EDBE2] transition-colors">
                        +91 98480 24190
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-[#B9FF2C] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-mono-tabular uppercase tracking-wider text-white/60">
                        Headquarters & Flagship Kitchen
                      </div>
                      <div className="text-base font-bold text-white">
                        Hyderabad, Telangana, India
                      </div>
                      <p className="text-xs text-white/70 mt-0.5">
                        Plot 14, Clock Tower Corridor, Secunderabad 500003
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="rounded-[18px] bg-[#122023] p-7 border border-white/12">
                <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.2em] text-[#4EDBE2] block mb-4">
                  FIELD DISPATCHES & SOCIAL MEDIA
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 p-3.5 rounded-[10px] bg-[#080808] border border-white/12 hover:border-[#49E619] transition-colors text-sm font-bold text-white"
                  >
                    <Instagram className="w-4 h-4 text-[#49E619]" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 p-3.5 rounded-[10px] bg-[#080808] border border-white/12 hover:border-[#4EDBE2] transition-colors text-sm font-bold text-white"
                  >
                    <Facebook className="w-4 h-4 text-[#4EDBE2]" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 p-3.5 rounded-[10px] bg-[#080808] border border-white/12 hover:border-[#B9FF2C] transition-colors text-sm font-bold text-white"
                  >
                    <Linkedin className="w-4 h-4 text-[#B9FF2C]" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 p-3.5 rounded-[10px] bg-[#080808] border border-white/12 hover:border-[#49E619] transition-colors text-sm font-bold text-white"
                  >
                    <Youtube className="w-4 h-4 text-[#49E619]" />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>

              {/* Morning Kitchen Visitor Note */}
              <div className="p-6 rounded-[18px] bg-[#B9FF2C] text-[#122023]">
                <div className="flex items-center gap-2 text-xs font-mono-tabular font-bold uppercase tracking-wider text-[#122023]">
                  <Clock className="w-4 h-4" />
                  <span>OPEN KITCHEN POLICY</span>
                </div>
                <p className="mt-2 text-sm text-[#122023] font-medium leading-relaxed">
                  Donors, teachers, and citizens are welcome to visit our Secunderabad Community Kitchen any morning between 6:00 AM and 9:00 AM to witness meal preparation firsthand.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ARCHITECTURAL MAP & FIELD HUB SELECTOR */}
      <section className="bg-[#122023] py-20 sm:py-28 border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.2em] text-[#49E619] block mb-2">
                OPERATIONAL COORDINATES · TELANGANA
              </span>
              <h2 className="font-display-sans uppercase text-3xl sm:text-5xl font-black text-white">
                Our Field Hubs & Kitchens
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {HUBS.map((hub) => (
                <button
                  key={hub.id}
                  type="button"
                  onClick={() => setSelectedHub(hub)}
                  className={`px-4 py-2.5 rounded-[8px] text-xs font-mono-tabular font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    selectedHub.id === hub.id
                      ? 'bg-[#49E619] text-[#080808]'
                      : 'bg-[#080808] text-white border border-white/15 hover:border-[#49E619]'
                  }`}
                >
                  {hub.id}
                </button>
              ))}
            </div>
          </div>

          {/* Minimalist Architectural Cartographic Map Canvas */}
          <div className="relative rounded-[20px] bg-[#080808] text-white border border-white/15 overflow-hidden min-h-[380px] sm:min-h-[440px] grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
            {/* Cartographic SVG Grid Background */}
            <div className="lg:col-span-8 relative p-8 sm:p-12 flex flex-col justify-between min-h-[300px]">
              <svg
                className="pointer-events-none absolute inset-0 w-full h-full opacity-20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="map-grid"
                    width="48"
                    height="48"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 48 0 L 0 0 0 48"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid)" />
                {/* Stylized Musi River & Highway Corridors */}
                <path
                  d="M 0 220 Q 240 180 480 230 T 960 190"
                  fill="none"
                  stroke="#49E619"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                <circle cx="42%" cy="48%" r="48" fill="none" stroke="#49E619" strokeWidth="1" />
                <circle cx="42%" cy="48%" r="96" fill="none" stroke="#4EDBE2" strokeWidth="0.6" strokeDasharray="4 4" />
              </svg>

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-mono-tabular uppercase tracking-widest text-white/70">
                  CARTOGRAPHIC SECTOR · HYDERABAD METROPOLITAN & RURAL CORRIDOR
                </span>
                <span className="text-xs font-mono-tabular font-bold text-[#B9FF2C]">
                  {selectedHub.coordinates}
                </span>
              </div>

              {/* Interactive Pin Marker Visual */}
              <div className="relative z-10 my-auto py-8 flex items-center justify-center">
                <div className="flex items-center gap-4 rounded-[12px] bg-[#122023] border border-[#49E619]/40 px-5 py-3.5 shadow-2xl">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#49E619] opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#49E619]" />
                  </span>
                  <div>
                    <div className="text-xs font-mono-tabular text-white font-bold">
                      {selectedHub.name}
                    </div>
                    <div className="text-[11px] text-white/70">
                      {selectedHub.role}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono-tabular text-white/60">
                <span>28 ACTIVE COMMUNITIES MAPPED</span>
                <span>SCALE: 1 : 25,000 · TELANGANA</span>
              </div>
            </div>

            {/* Hub Details Panel */}
            <div className="lg:col-span-4 bg-[#122023] border-t lg:border-t-0 lg:border-l border-white/10 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono-tabular font-bold uppercase tracking-widest text-[#49E619]">
                  SELECTED DISPATCH HUB
                </span>
                <h3 className="mt-2 font-display-sans uppercase text-2xl font-black text-white">
                  {selectedHub.name}
                </h3>
                <p className="mt-4 text-sm text-white/80 leading-relaxed">
                  {selectedHub.address}
                </p>

                <div className="mt-6 pt-6 border-t border-white/10 space-y-3 text-xs">
                  <div>
                    <span className="text-white/60 font-mono-tabular uppercase block">
                      Operating Hours
                    </span>
                    <span className="font-mono-tabular text-[#B9FF2C] font-bold mt-0.5 block">
                      {selectedHub.hours}
                    </span>
                  </div>
                  <div>
                    <span className="text-white/60 font-mono-tabular uppercase block">
                      Primary Function
                    </span>
                    <span className="text-white font-medium mt-0.5 block">
                      {selectedHub.role}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono-tabular text-[#4EDBE2]">
                GPS: {selectedHub.coordinates}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
