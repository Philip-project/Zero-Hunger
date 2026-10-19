import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Sparkles,
  Cake,
  Heart,
  Shirt,
  Truck,
  PhoneCall,
  Clock,
  MapPin,
  CheckCircle2,
  Calendar,
  Share2,
  Download,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Building,
  User,
  Package,
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { EditorialImage } from '../components/EditorialImage';
import {
  OCCASION_PACKAGES,
  DISTRIBUTION_CENTERS,
  RECENT_OCCASIONS,
  CLOTH_DROP_HUBS,
  LEFTOVER_RESCUE_CENTERS,
  OccasionPackage,
} from '../data/communityDrives';

type DriveTab = 'OCCASION_FOOD' | 'CLOTH_DONATION' | 'LEFTOVER_RESCUE';

export const CelebrateAndGive: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = (searchParams.get('tab') as DriveTab) || 'OCCASION_FOOD';
  const [activeTab, setActiveTab] = useState<DriveTab>(initialTab);

  // Tab 1: Occasion Sponsorship State
  const [occasionType, setOccasionType] = useState('Birthday');
  const [celebrantName, setCelebrantName] = useState('Aarav');
  const [celebrantAge, setCelebrantAge] = useState('10');
  const [customMessage, setCustomMessage] = useState('May God bless you with wisdom, joy & abundant health!');
  const [selectedPackage, setSelectedPackage] = useState<OccasionPackage>(OCCASION_PACKAGES[1]); // 50 meals
  const [selectedCenterId, setSelectedCenterId] = useState(DISTRIBUTION_CENTERS[1].id);
  const [celebrationDate, setCelebrationDate] = useState('2026-10-15');
  const [sponsorName, setSponsorName] = useState('Vikram & Ananya Malhotra');
  const [sponsorEmail, setSponsorEmail] = useState('vikram@example.com');
  const [sponsorPhone, setSponsorPhone] = useState('+91 98480 88210');
  const [isOccasionBooked, setIsOccasionBooked] = useState(false);
  const [bookingToken, setBookingToken] = useState('');

  // Tab 2: Cloth Donation State
  const [clothMode, setClothMode] = useState<'DROP_OFF' | 'REQUEST_PICKUP'>('REQUEST_PICKUP');
  const [clothBagsCount, setClothBagsCount] = useState(2);
  const [clothType, setClothType] = useState('Mix of Gently Used Adult & Children Wear');
  const [clothPickupDate, setClothPickupDate] = useState('2026-10-08');
  const [clothPickupAddress, setClothPickupAddress] = useState('Flat 402, Lotus Towers, Road 3, Banjara Hills, Hyderabad');
  const [clothContactName, setClothContactName] = useState('Siddharth Rao');
  const [clothContactPhone, setClothContactPhone] = useState('+91 98480 33419');
  const [isClothBooked, setIsClothBooked] = useState(false);
  const [clothRefNumber, setClothRefNumber] = useState('');

  // Tab 3: Leftover Food Rescue State
  const [foodServings, setFoodServings] = useState('80-100 People');
  const [eventType, setEventType] = useState('Wedding Reception / Banquet');
  const [cookedTimeAgo, setCookedTimeAgo] = useState('Cooked 2.5 hours ago (Fresh & Hot)');
  const [foodItems, setFoodItems] = useState('Pulao Rice, Dal Tadka, Paneer Butter Masala, Rotis, Gulab Jamun');
  const [venueAddress, setVenueAddress] = useState('Imperial Gardens Function Hall, Secunderabad');
  const [rescueContactName, setRescueContactName] = useState('Sunil Agarwal');
  const [rescueContactPhone, setRescueContactPhone] = useState('+91 98480 91823');
  const [isRescueRaised, setIsRescueRaised] = useState(false);
  const [rescueCode, setRescueCode] = useState('');

  const handleTabChange = (tab: DriveTab) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  // Placard text calculation
  const computedPlacardHeading =
    occasionType === 'Birthday'
      ? `HAPPY ${celebrantAge ? `${celebrantAge}TH ` : ''}BIRTHDAY ${celebrantName.toUpperCase()}!`
      : occasionType === 'Wedding Anniversary'
      ? `HAPPY ANNIVERSARY ${celebrantName.toUpperCase()}!`
      : occasionType === 'Memorial / In Remembrance'
      ? `IN SACRED MEMORY OF ${celebrantName.toUpperCase()}`
      : `CELEBRATING ${celebrantName.toUpperCase()}`;

  const selectedCenter =
    DISTRIBUTION_CENTERS.find((c) => c.id === selectedCenterId) ||
    DISTRIBUTION_CENTERS[0];

  const handleOccasionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const token = `OCC-2026-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    setBookingToken(token);
    setIsOccasionBooked(true);
  };

  const handleClothPickupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `CLOTH-${Math.floor(100000 + Math.random() * 900000)}`;
    setClothRefNumber(ref);
    setIsClothBooked(true);
  };

  const handleLeftoverSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `FOOD-RESCUE-${Math.floor(1000 + Math.random() * 9000)}`;
    setRescueCode(code);
    setIsRescueRaised(true);
  };

  return (
    <div className="bg-[#080808] text-white min-h-screen">
      {/* =====================================================================
          HERO SECTION — CELEBRATE LIFE · CLOTHE WITH DIGNITY · RESCUE FOOD
      ====================================================================== */}
      <section className="bg-[#080808] pt-28 sm:pt-36 pb-16 sm:pb-20 border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <ScrollReveal>
            <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.22em] text-[#49E619] block mb-3">
              COMMUNITY CELEBRATIONS & ZERO-WASTE DRIVES
            </span>

            <h1 className="font-display-sans uppercase text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[0.92] text-white">
              SHARE YOUR <span className="text-[#49E619]">JOY.</span>
              <br />
              FEED & CLOTHE WITH DIGNITY.
            </h1>

            <p className="mt-5 text-base sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Celebrate your birthdays and wedding anniversaries by sponsoring hot meals where children hold your personalized placards and send video gratitude. Donate clothes at local drop boxes, or call our 24/7 rescue vans for leftover party food.
            </p>

            {/* 3 Main Drive Switcher Tabs */}
            <div className="mt-10 inline-flex flex-wrap items-center justify-center p-1.5 rounded-[16px] bg-[#122023] border border-white/15 gap-1.5">
              <button
                type="button"
                onClick={() => handleTabChange('OCCASION_FOOD')}
                className={`flex items-center gap-2 px-5 py-3 rounded-[12px] font-mono-tabular text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'OCCASION_FOOD'
                    ? 'bg-[#49E619] text-[#080808] shadow-lg'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <Cake className="w-4 h-4 text-current" />
                <span>Celebrate Birthdays & Anniversaries</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('CLOTH_DONATION')}
                className={`flex items-center gap-2 px-5 py-3 rounded-[12px] font-mono-tabular text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'CLOTH_DONATION'
                    ? 'bg-[#4EDBE2] text-[#080808] shadow-lg'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <Shirt className="w-4 h-4 text-current" />
                <span>Donate Clothes (Drop-off & Pickup)</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('LEFTOVER_RESCUE')}
                className={`flex items-center gap-2 px-5 py-3 rounded-[12px] font-mono-tabular text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'LEFTOVER_RESCUE'
                    ? 'bg-[#B9FF2C] text-[#080808] shadow-lg'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <Truck className="w-4 h-4 text-current" />
                <span>Leftover Food Rescue (Fast Pickup)</span>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =====================================================================
          TAB 1: CELEBRATE OCCASIONS WITH CUSTOM PLACARDS
      ====================================================================== */}
      {activeTab === 'OCCASION_FOOD' && (
        <section className="py-16 sm:py-24">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Live Customizer Form */}
              <div className="lg:col-span-7">
                <ScrollReveal>
                  <div className="rounded-[20px] bg-[#122023] border border-white/15 p-6 sm:p-10 shadow-2xl">
                    <div className="pb-6 border-b border-white/12 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-mono-tabular font-bold uppercase tracking-widest text-[#49E619]">
                          STEP 01 · PERSONALIZE CELEBRATION
                        </span>
                        <h2 className="font-display-sans uppercase text-2xl sm:text-3xl font-black text-white mt-1">
                          Sponsor Meals & Send Placards
                        </h2>
                      </div>
                      <span className="px-3.5 py-1 rounded-[6px] bg-[#49E619] text-[#080808] font-mono-tabular text-xs font-bold uppercase">
                        Placard Guaranteed
                      </span>
                    </div>

                    {isOccasionBooked ? (
                      <div className="py-10 text-center">
                        <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center bg-[#49E619] text-[#080808]">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <span className="text-xs font-mono-tabular font-bold uppercase tracking-widest text-[#49E619]">
                          BOOKING CONFIRMED · CHARITY TOKEN GENERATED
                        </span>
                        <h3 className="font-display-sans uppercase text-3xl font-black text-white mt-2">
                          Thank You, {sponsorName}!
                        </h3>
                        <div className="mt-4 inline-block px-4 py-2 rounded-[8px] bg-white/10 border border-[#49E619]/40 font-mono-tabular text-sm text-[#B9FF2C]">
                          Token: <strong>{bookingToken}</strong>
                        </div>
                        <p className="mt-4 text-sm sm:text-base text-white/80 max-w-lg mx-auto leading-relaxed">
                          Your celebration meal drive for <strong className="text-white">{celebrantName}</strong> ({selectedPackage.mealsCount} Meals · ₹{selectedPackage.priceInr}) is scheduled for <strong className="text-[#49E619]">{celebrationDate}</strong> at <strong className="text-white">{selectedCenter.name}</strong>.
                        </p>
                        <p className="mt-3 text-xs text-white/70 max-w-md mx-auto">
                          Our field culinary team will prepare the feast, print your custom placard, and record the children singing blessings and holding your message. Photo & video album will be sent to <strong>{sponsorEmail}</strong> and WhatsApp within 24 hours of meal service.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                          <Link
                            to={`/track-meal?token=${bookingToken}`}
                            className="px-6 py-3.5 rounded-[10px] bg-[#49E619] hover:bg-[#B9FF2C] text-[#080808] font-mono-tabular text-xs font-bold uppercase tracking-widest transition-colors"
                          >
                            Track Meal & Proof Live →
                          </Link>
                          <button
                            type="button"
                            onClick={() => setIsOccasionBooked(false)}
                            className="px-6 py-3.5 rounded-[10px] bg-white/10 hover:bg-white/20 text-white font-mono-tabular text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                          >
                            Sponsor Another Occasion
                          </button>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleOccasionSubmit} className="mt-6 space-y-6">
                        {/* Occasion Type Pills */}
                        <div>
                          <label className="block text-xs font-mono-tabular font-bold uppercase text-white/70 mb-2">
                            What are you celebrating? *
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {['Birthday', 'Wedding Anniversary', 'Memorial / In Remembrance', 'Personal Milestone'].map(
                              (type) => (
                                <button
                                  key={type}
                                  type="button"
                                  onClick={() => setOccasionType(type)}
                                  className={`py-2.5 px-3 rounded-[8px] text-xs font-mono-tabular font-bold uppercase border transition-colors cursor-pointer text-center ${
                                    occasionType === type
                                      ? 'bg-[#49E619] text-[#080808] border-[#49E619]'
                                      : 'bg-[#080808] text-white/75 border-white/15 hover:border-white/40'
                                  }`}
                                >
                                  {type}
                                </button>
                              )
                            )}
                          </div>
                        </div>

                        {/* Celebrant Name & Age/Years */}
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                          <div className="sm:col-span-8">
                            <label className="block text-xs font-mono-tabular font-bold uppercase text-white/70 mb-1.5">
                              Celebrant / Couple / Dedication Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={celebrantName}
                              onChange={(e) => setCelebrantName(e.target.value)}
                              placeholder="e.g. Aarav, Ramesh & Sunita, Late Smt. Sharda Devi"
                              className="w-full rounded-[10px] bg-[#080808] border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#49E619]"
                            />
                          </div>

                          <div className="sm:col-span-4">
                            <label className="block text-xs font-mono-tabular font-bold uppercase text-white/70 mb-1.5">
                              {occasionType === 'Birthday'
                                ? 'Age Turning'
                                : occasionType === 'Wedding Anniversary'
                                ? 'Anniversary Years'
                                : 'Special Note'}
                            </label>
                            <input
                              type="text"
                              value={celebrantAge}
                              onChange={(e) => setCelebrantAge(e.target.value)}
                              placeholder="e.g. 10, 25, 50"
                              className="w-full rounded-[10px] bg-[#080808] border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#49E619]"
                            />
                          </div>
                        </div>

                        {/* Custom Message to Print on Placard */}
                        <div>
                          <label className="block text-xs font-mono-tabular font-bold uppercase text-white/70 mb-1.5">
                            Custom Blessing Message on Placard (Children & Elders will read this aloud) *
                          </label>
                          <textarea
                            rows={2}
                            required
                            value={customMessage}
                            onChange={(e) => setCustomMessage(e.target.value)}
                            placeholder="e.g. Wishing you good health, wisdom, and sunshine always!"
                            className="w-full rounded-[10px] bg-[#080808] border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#49E619] resize-none"
                          />
                        </div>

                        {/* Package Selection */}
                        <div>
                          <label className="block text-xs font-mono-tabular font-bold uppercase text-white/70 mb-2">
                            Select Sponsoring Feast Package *
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {OCCASION_PACKAGES.slice(0, 3).map((pkg) => {
                              const isSelected = selectedPackage.id === pkg.id;
                              return (
                                <button
                                  key={pkg.id}
                                  type="button"
                                  onClick={() => setSelectedPackage(pkg)}
                                  className={`p-3.5 rounded-[12px] text-left border transition-all cursor-pointer ${
                                    isSelected
                                      ? 'bg-[#49E619] text-[#080808] border-[#49E619]'
                                      : 'bg-[#080808] text-white border-white/15 hover:border-white/40'
                                  }`}
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="font-mono-tabular text-xs font-bold">
                                      {pkg.mealsCount} MEALS
                                    </span>
                                    <span className="font-mono-tabular text-sm font-black">
                                      ₹{pkg.priceInr}
                                    </span>
                                  </div>
                                  <div className="font-display-sans uppercase text-base font-black mt-1">
                                    {pkg.name}
                                  </div>
                                  <p className="text-[11px] mt-1 opacity-80 line-clamp-2">
                                    {pkg.suitableFor}
                                  </p>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Center & Date Selection */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-mono-tabular font-bold uppercase text-white/70 mb-1.5">
                              Distribution Center *
                            </label>
                            <select
                              value={selectedCenterId}
                              onChange={(e) => setSelectedCenterId(e.target.value)}
                              className="w-full rounded-[10px] bg-[#080808] border border-white/20 px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#49E619]"
                            >
                              {DISTRIBUTION_CENTERS.map((c) => (
                                <option key={c.id} value={c.id}>
                                  {c.name} ({c.area})
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-mono-tabular font-bold uppercase text-white/70 mb-1.5">
                              Celebration / Distribution Date *
                            </label>
                            <input
                              type="date"
                              required
                              value={celebrationDate}
                              onChange={(e) => setCelebrationDate(e.target.value)}
                              className="w-full rounded-[10px] bg-[#080808] border border-white/20 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#49E619]"
                            />
                          </div>
                        </div>

                        {/* Sponsor Contact Details */}
                        <div className="pt-4 border-t border-white/12 space-y-4">
                          <span className="text-xs font-mono-tabular font-bold uppercase tracking-widest text-[#B9FF2C] block">
                            YOUR CONTACT & 80G RECEIPT DETAILS
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <input
                              type="text"
                              required
                              value={sponsorName}
                              onChange={(e) => setSponsorName(e.target.value)}
                              placeholder="Your Full Name"
                              className="rounded-[8px] bg-[#080808] border border-white/20 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#49E619]"
                            />
                            <input
                              type="email"
                              required
                              value={sponsorEmail}
                              onChange={(e) => setSponsorEmail(e.target.value)}
                              placeholder="Email for Video & Receipt"
                              className="rounded-[8px] bg-[#080808] border border-white/20 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#49E619]"
                            />
                            <input
                              type="tel"
                              required
                              value={sponsorPhone}
                              onChange={(e) => setSponsorPhone(e.target.value)}
                              placeholder="WhatsApp for Live Photos"
                              className="rounded-[8px] bg-[#080808] border border-white/20 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#49E619]"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full py-4 px-6 rounded-[12px] bg-[#49E619] hover:bg-[#B9FF2C] text-[#080808] font-mono-tabular text-sm font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                        >
                          <Sparkles className="w-4 h-4 text-[#080808]" />
                          <span>
                            SPONSOR {selectedPackage.mealsCount} CELEBRATION MEALS (₹{selectedPackage.priceInr})
                          </span>
                        </button>
                      </form>
                    )}
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column: Live Interactive Placard Preview */}
              <div className="lg:col-span-5 space-y-6">
                <ScrollReveal delay={0.15}>
                  <div className="rounded-[20px] bg-[#080808] border-2 border-[#49E619]/40 p-6 shadow-2xl relative overflow-hidden">
                    <div className="flex items-center justify-between pb-3 border-b border-white/15">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#49E619] animate-pulse" />
                        <span className="font-mono-tabular text-xs font-bold uppercase tracking-widest text-[#49E619]">
                          LIVE PLACARD PREVIEW
                        </span>
                      </div>
                      <span className="font-mono-tabular text-[11px] text-white/60">
                        Physical Banner Held in Hands
                      </span>
                    </div>

                    {/* Simulated High-Visibility Physical Placard Card */}
                    <div className="mt-5 p-6 rounded-[16px] bg-[#F2F4F3] text-[#080808] border-4 border-[#122023] shadow-xl relative">
                      {/* Placard Hole Marks & Hanging String effect */}
                      <div className="flex justify-between items-center mb-3 px-2">
                        <span className="w-3 h-3 rounded-full bg-[#122023] inline-block" />
                        <span className="font-mono-tabular text-[10px] font-black uppercase tracking-widest text-[#188D44]">
                          ZERO HUNGER INITIATIVE · HYDERABAD
                        </span>
                        <span className="w-3 h-3 rounded-full bg-[#122023] inline-block" />
                      </div>

                      <div className="text-center py-4 border-y-2 border-dashed border-[#122023]/25">
                        <div className="font-display-sans uppercase text-2xl sm:text-3xl font-black text-[#122023] tracking-tight leading-none">
                          {computedPlacardHeading}
                        </div>

                        <p className="mt-3 font-serif-editorial italic text-sm sm:text-base text-[#122023]/90 leading-snug px-3">
                          “{customMessage}”
                        </p>

                        <div className="mt-3 inline-block px-3 py-1 rounded-full bg-[#49E619] text-[#122023] font-mono-tabular text-[11px] font-black uppercase tracking-wider">
                          {selectedPackage.mealsCount} WARM MEALS DEDICATED
                        </div>
                      </div>

                      <div className="mt-3 pt-2 flex items-center justify-between text-[10px] font-mono-tabular uppercase tracking-wider text-[#122023]/70">
                        <span>Center: {selectedCenter.name.substring(0, 22)}...</span>
                        <span>Date: {celebrationDate}</span>
                      </div>
                    </div>

                    <div className="mt-5 space-y-3 font-mono-tabular text-xs text-white/80">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#49E619] shrink-0 mt-0.5" />
                        <span>Children & beneficiaries will hold this exact printed placard in front of their hot lunch feast.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#49E619] shrink-0 mt-0.5" />
                        <span>High-resolution video clip of beneficiaries saying thank you sent via WhatsApp on the afternoon of delivery.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#49E619] shrink-0 mt-0.5" />
                        <span>Eligible for 50% Tax Exemption under Section 80G (Instant 80G receipt issued).</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Recent Celebrations Showcase */}
                <ScrollReveal delay={0.25}>
                  <div className="rounded-[18px] bg-[#122023] p-6 border border-white/12">
                    <span className="font-mono-tabular text-xs font-bold uppercase tracking-widest text-[#4EDBE2] block mb-3">
                      RECENT OCCASIONS CELEBRATED WITH US
                    </span>
                    <div className="space-y-4">
                      {RECENT_OCCASIONS.map((item) => (
                        <div key={item.id} className="p-3.5 rounded-[12px] bg-[#080808] border border-white/10 flex items-start gap-3">
                          <div className="w-16 h-16 rounded-[8px] overflow-hidden shrink-0 bg-white/10">
                            <EditorialImage src={item.image} alt={item.occasionType} className="w-full h-full" />
                          </div>
                          <div>
                            <div className="font-display-sans text-xs font-black text-white uppercase">
                              {item.occasionType}
                            </div>
                            <div className="font-mono-tabular text-[10px] text-[#49E619]">
                              By {item.sponsorName} · {item.mealsServed} Meals
                            </div>
                            <p className="mt-1 text-[11px] text-white/70 line-clamp-2 italic font-serif-editorial">
                              “{item.beneficiaryQuote}”
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================================
          TAB 2: CLOTH DONATION (DROP BINS & HOME PICKUP)
      ====================================================================== */}
      {activeTab === 'CLOTH_DONATION' && (
        <section className="py-16 sm:py-24">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.2em] text-[#4EDBE2] block mb-2">
                VASTRA DAAN · CLOTHES FOR DIGNITY
              </span>
              <h2 className="font-display-sans uppercase text-3xl sm:text-5xl font-black text-white">
                Give New Or Gently Used Clothes
              </h2>
              <p className="mt-3 text-white/75 text-sm sm:text-base leading-relaxed">
                Clean, wearable garments, blankets, school shoes, and children’s wear are collected, sorted by our volunteers, and distributed to pavement families and rural homesteads.
              </p>

              {/* Mode Toggle: Drop-off vs Doorstep Pickup */}
              <div className="mt-8 inline-flex p-1.5 rounded-[14px] bg-[#122023] border border-white/15 gap-2">
                <button
                  type="button"
                  onClick={() => setClothMode('REQUEST_PICKUP')}
                  className={`px-5 py-2.5 rounded-[10px] font-mono-tabular text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    clothMode === 'REQUEST_PICKUP'
                      ? 'bg-[#4EDBE2] text-[#080808]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <Truck className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />
                  Schedule Free Doorstep Pickup
                </button>
                <button
                  type="button"
                  onClick={() => setClothMode('DROP_OFF')}
                  className={`px-5 py-2.5 rounded-[10px] font-mono-tabular text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    clothMode === 'DROP_OFF'
                      ? 'bg-[#4EDBE2] text-[#080808]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <MapPin className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />
                  Drop at Nearest Collection Bin (4 Hubs)
                </button>
              </div>
            </div>

            {/* PICKUP REQUEST FORM */}
            {clothMode === 'REQUEST_PICKUP' ? (
              <div className="max-w-2xl mx-auto">
                <div className="rounded-[20px] bg-[#122023] border border-white/15 p-6 sm:p-10 shadow-2xl">
                  {isClothBooked ? (
                    <div className="py-8 text-center">
                      <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center bg-[#4EDBE2] text-[#080808]">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <span className="text-xs font-mono-tabular font-bold uppercase tracking-widest text-[#4EDBE2]">
                        PICKUP CONFIRMED · VAN DISPATCH SCHEDULED
                      </span>
                      <h3 className="font-display-sans uppercase text-3xl font-black text-white mt-2">
                        Thank You, {clothContactName}!
                      </h3>
                      <div className="mt-3 inline-block px-4 py-2 rounded-[8px] bg-white/10 font-mono-tabular text-sm text-[#4EDBE2] font-bold">
                        Reference Code: {clothRefNumber}
                      </div>
                      <p className="mt-4 text-sm text-white/80 leading-relaxed max-w-md mx-auto">
                        Our collection vehicle will arrive at your address on <strong className="text-white">{clothPickupDate}</strong> to collect your {clothBagsCount} bag(s) of garments.
                      </p>
                      <button
                        type="button"
                        onClick={() => setIsClothBooked(false)}
                        className="mt-6 px-6 py-3 rounded-[10px] bg-[#4EDBE2] text-[#080808] font-mono-tabular text-xs font-bold uppercase tracking-wider cursor-pointer"
                      >
                        Raise Another Collection Request
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleClothPickupSubmit} className="space-y-5">
                      <div className="pb-4 border-b border-white/10">
                        <span className="text-xs font-mono-tabular font-bold uppercase tracking-widest text-[#4EDBE2]">
                          DOORSTEP COLLECTION SERVICE · HYDERABAD & CYBERABAD
                        </span>
                        <h3 className="font-display-sans uppercase text-2xl font-black text-white mt-1">
                          Book a Free Volunteer Pickup
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono-tabular font-bold uppercase text-white/70 mb-1.5">
                            Estimated Bags of Clothes *
                          </label>
                          <select
                            value={clothBagsCount}
                            onChange={(e) => setClothBagsCount(Number(e.target.value))}
                            className="w-full rounded-[10px] bg-[#080808] border border-white/20 px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#4EDBE2]"
                          >
                            <option value={1}>1 Bag (Approx 10-15 garments)</option>
                            <option value={2}>2 Bags (Approx 25-35 garments)</option>
                            <option value={3}>3-5 Bags (Full Wardrobe / Community Collection)</option>
                            <option value={10}>6-10+ Bags (Apartment Society Collection Drive)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-mono-tabular font-bold uppercase text-white/70 mb-1.5">
                            Preferred Pickup Date *
                          </label>
                          <input
                            type="date"
                            required
                            value={clothPickupDate}
                            onChange={(e) => setClothPickupDate(e.target.value)}
                            className="w-full rounded-[10px] bg-[#080808] border border-white/20 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#4EDBE2]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono-tabular font-bold uppercase text-white/70 mb-1.5">
                          Type of Clothing & Items *
                        </label>
                        <input
                          type="text"
                          required
                          value={clothType}
                          onChange={(e) => setClothType(e.target.value)}
                          placeholder="e.g. Sarees, Men Shirts, Winter Blankets, Kids Shoes"
                          className="w-full rounded-[10px] bg-[#080808] border border-white/20 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#4EDBE2]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono-tabular font-bold uppercase text-white/70 mb-1.5">
                          Full Doorstep Address for Pickup *
                        </label>
                        <textarea
                          rows={2}
                          required
                          value={clothPickupAddress}
                          onChange={(e) => setClothPickupAddress(e.target.value)}
                          placeholder="Flat/House number, Apartment name, Street, Landmark, Pin code"
                          className="w-full rounded-[10px] bg-[#080808] border border-white/20 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#4EDBE2] resize-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono-tabular font-bold uppercase text-white/70 mb-1.5">
                            Contact Person Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={clothContactName}
                            onChange={(e) => setClothContactName(e.target.value)}
                            className="w-full rounded-[10px] bg-[#080808] border border-white/20 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#4EDBE2]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-mono-tabular font-bold uppercase text-white/70 mb-1.5">
                            Phone (for Van Driver Call) *
                          </label>
                          <input
                            type="tel"
                            required
                            value={clothContactPhone}
                            onChange={(e) => setClothContactPhone(e.target.value)}
                            className="w-full rounded-[10px] bg-[#080808] border border-white/20 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#4EDBE2]"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 px-6 rounded-[12px] bg-[#4EDBE2] hover:bg-[#3bc4cb] text-[#080808] font-mono-tabular text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <Package className="w-4 h-4" />
                        <span>Schedule Free Van Pickup</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            ) : (
              /* DROP-OFF HUBS DIRECTORY */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {CLOTH_DROP_HUBS.map((hub) => (
                  <div key={hub.id} className="rounded-[18px] bg-[#122023] p-6 border border-white/12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <span className="font-mono-tabular text-xs font-bold text-[#4EDBE2] uppercase">
                          DESIGNATED DROP BIN
                        </span>
                        <span className="font-mono-tabular text-[11px] text-white/60">
                          {hub.hours}
                        </span>
                      </div>
                      <h3 className="font-display-sans uppercase text-xl font-black text-white mt-3">
                        {hub.name}
                      </h3>
                      <p className="text-xs text-white/80 mt-1 leading-relaxed">
                        {hub.address}
                      </p>
                      <p className="text-xs font-mono-tabular text-[#B9FF2C] mt-1">
                        Landmark: {hub.landmark}
                      </p>

                      <div className="mt-4 pt-3 border-t border-white/10">
                        <span className="text-[10px] font-mono-tabular uppercase tracking-wider text-white/60 block mb-1.5">
                          Items Accepted Here:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {hub.accepts.map((item) => (
                            <span key={item} className="px-2 py-0.5 rounded-[4px] bg-white/10 font-mono-tabular text-[10px] text-white">
                              ✓ {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono-tabular">
                      <span className="text-white/60">Helpline:</span>
                      <a href={`tel:${hub.phone}`} className="text-[#4EDBE2] font-bold hover:underline">
                        {hub.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* =====================================================================
          TAB 3: LEFTOVER FOOD RESCUE (INSTANT HOTLINE & DISPATCH)
      ====================================================================== */}
      {activeTab === 'LEFTOVER_RESCUE' && (
        <section className="py-16 sm:py-24">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Urgent 24/7 Hotline Alert Banner */}
            <div className="rounded-[20px] bg-[#B9FF2C] text-[#122023] p-8 sm:p-12 mb-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#122023] text-white font-mono-tabular text-xs font-bold uppercase tracking-wider mb-3">
                  <PhoneCall className="w-3.5 h-3.5 text-[#B9FF2C]" />
                  24/7 RAPID FOOD RESCUE HELPLINE
                </span>
                <h2 className="font-display-sans uppercase text-3xl sm:text-5xl font-black text-[#122023] tracking-tight leading-none">
                  Have Leftover Cooked Food? Call Us Immediately!
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#122023]/85 font-medium max-w-2xl leading-relaxed">
                  Do not throw away good food. From weddings, banquets, tech parks, and birthday parties—our thermal-equipped vans collect freshly cooked food within 45 minutes and deliver it to night shelters & hospital courtyards.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <a
                  href="tel:+919848024190"
                  className="w-full sm:w-auto px-8 py-4 rounded-[12px] bg-[#122023] hover:bg-[#080808] text-white font-mono-tabular text-sm font-black uppercase tracking-wider inline-flex items-center justify-center gap-2.5 transition-colors shadow-lg"
                >
                  <PhoneCall className="w-4 h-4 text-[#B9FF2C]" />
                  <span>CALL +91 98480 24190</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Raise Leftover Food Request Online */}
              <div className="lg:col-span-7">
                <div className="rounded-[20px] bg-[#122023] border border-white/15 p-6 sm:p-10 shadow-2xl">
                  {isRescueRaised ? (
                    <div className="py-8 text-center">
                      <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center bg-[#B9FF2C] text-[#080808]">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <span className="text-xs font-mono-tabular font-bold uppercase tracking-widest text-[#B9FF2C]">
                        FOOD RESCUE REQUEST LOGGED · VEHICLE DISPATCHED
                      </span>
                      <h3 className="font-display-sans uppercase text-3xl font-black text-white mt-2">
                        Rescue Code: {rescueCode}
                      </h3>
                      <p className="mt-4 text-sm text-white/80 max-w-lg mx-auto leading-relaxed">
                        Our nearest food rescue team at <strong className="text-white">Secunderabad / Cyberabad Dispatch Hub</strong> has been assigned to <strong className="text-[#B9FF2C]">{venueAddress}</strong>.
                      </p>
                      <div className="mt-4 p-4 rounded-[12px] bg-[#080808] border border-white/15 text-left font-mono-tabular text-xs space-y-2 max-w-md mx-auto">
                        <div className="flex justify-between">
                          <span className="text-white/60">Estimated Van Arrival:</span>
                          <span className="text-[#49E619] font-bold">35 - 45 Minutes</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Servings Claimed:</span>
                          <span className="text-white font-bold">{foodServings}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Target Shelter:</span>
                          <span className="text-white">Afzalgunj Night Shelter & Hospital</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsRescueRaised(false)}
                        className="mt-6 px-6 py-3 rounded-[10px] bg-[#B9FF2C] text-[#080808] font-mono-tabular text-xs font-bold uppercase tracking-wider cursor-pointer"
                      >
                        Raise Another Food Pickup
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleLeftoverSubmit} className="space-y-5">
                      <div className="pb-4 border-b border-white/10">
                        <span className="text-xs font-mono-tabular font-bold uppercase tracking-widest text-[#B9FF2C]">
                          ONLINE RESCUE DISPATCH FORM
                        </span>
                        <h3 className="font-display-sans uppercase text-2xl font-black text-white mt-1">
                          Request Immediate Leftover Food Pickup
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono-tabular font-bold uppercase text-white/70 mb-1.5">
                            Estimated Servings Available *
                          </label>
                          <select
                            value={foodServings}
                            onChange={(e) => setFoodServings(e.target.value)}
                            className="w-full rounded-[10px] bg-[#080808] border border-white/20 px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#B9FF2C]"
                          >
                            <option value="25-50 People">25 – 50 Servings (Minimum)</option>
                            <option value="50-100 People">50 – 100 Servings</option>
                            <option value="100-250 People">100 – 250 Servings</option>
                            <option value="250-500+ People">250 – 500+ Servings (Large Wedding/Buffet)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-mono-tabular font-bold uppercase text-white/70 mb-1.5">
                            Event / Source Type *
                          </label>
                          <select
                            value={eventType}
                            onChange={(e) => setEventType(e.target.value)}
                            className="w-full rounded-[10px] bg-[#080808] border border-white/20 px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#B9FF2C]"
                          >
                            <option value="Wedding Reception / Banquet">Wedding Reception / Banquet</option>
                            <option value="Birthday Party / Celebration">Birthday Party / Celebration</option>
                            <option value="Corporate Tech Park Cafeteria">Corporate Tech Park Cafeteria</option>
                            <option value="Restaurant / Cloud Kitchen">Restaurant / Cloud Kitchen Excess</option>
                            <option value="Religious / Temple Feast">Religious / Temple Feast</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono-tabular font-bold uppercase text-white/70 mb-1.5">
                          When Was Food Prepared? (Food Safety Requirement) *
                        </label>
                        <select
                          value={cookedTimeAgo}
                          onChange={(e) => setCookedTimeAgo(e.target.value)}
                          className="w-full rounded-[10px] bg-[#080808] border border-white/20 px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#B9FF2C]"
                        >
                          <option value="Cooked 1-2 hours ago (Hot & Fresh)">Cooked 1 – 2 hours ago (Hot & Fresh)</option>
                          <option value="Cooked 2-4 hours ago (Stored in clean vessels)">Cooked 2 – 4 hours ago (Stored in clean vessels)</option>
                          <option value="Cooked 4-6 hours ago (Quality inspected)">Cooked 4 – 6 hours ago (Maximum safety cutoff)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono-tabular font-bold uppercase text-white/70 mb-1.5">
                          List Food Items Available *
                        </label>
                        <input
                          type="text"
                          required
                          value={foodItems}
                          onChange={(e) => setFoodItems(e.target.value)}
                          placeholder="e.g. Biryani, Sambar Rice, Dal, Chapati, Paneer, Veg Korma"
                          className="w-full rounded-[10px] bg-[#080808] border border-white/20 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#B9FF2C]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono-tabular font-bold uppercase text-white/70 mb-1.5">
                          Exact Pickup Location / Venue Address *
                        </label>
                        <textarea
                          rows={2}
                          required
                          value={venueAddress}
                          onChange={(e) => setVenueAddress(e.target.value)}
                          placeholder="Function hall name, Gate number, Street, Landmark"
                          className="w-full rounded-[10px] bg-[#080808] border border-white/20 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#B9FF2C] resize-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono-tabular font-bold uppercase text-white/70 mb-1.5">
                            Coordinator Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={rescueContactName}
                            onChange={(e) => setRescueContactName(e.target.value)}
                            className="w-full rounded-[10px] bg-[#080808] border border-white/20 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#B9FF2C]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-mono-tabular font-bold uppercase text-white/70 mb-1.5">
                            Direct Phone (Kept ON for driver) *
                          </label>
                          <input
                            type="tel"
                            required
                            value={rescueContactPhone}
                            onChange={(e) => setRescueContactPhone(e.target.value)}
                            className="w-full rounded-[10px] bg-[#080808] border border-white/20 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#B9FF2C]"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 px-6 rounded-[12px] bg-[#B9FF2C] hover:bg-[#aef425] text-[#080808] font-mono-tabular text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <Truck className="w-4 h-4 text-[#080808]" />
                        <span>DISPATCH RESCUE VAN NOW</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Right Column: Safety Protocol & Nearest Needy Centers */}
              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-[18px] bg-[#122023] p-6 border border-white/12">
                  <span className="font-mono-tabular text-xs font-bold uppercase tracking-widest text-[#B9FF2C] block mb-3">
                    FOOD HYGIENE & SAFETY PROTOCOL
                  </span>
                  <div className="space-y-3 text-xs text-white/80">
                    <div className="flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#49E619] shrink-0 mt-0.5" />
                      <span><strong>Freshly Cooked Only:</strong> Food must be cooked on the same day within 6 hours.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#49E619] shrink-0 mt-0.5" />
                      <span><strong>Clean Vessels:</strong> Covered in clean, sanitary food-grade containers or buffet chafers.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#49E619] shrink-0 mt-0.5" />
                      <span><strong>Thermal Transit:</strong> Our vans carry insulated thermal boxes maintaining food warmth during rapid transfer.</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-[18px] bg-[#122023] p-6 border border-white/12">
                  <span className="font-mono-tabular text-xs font-bold uppercase tracking-widest text-[#4EDBE2] block mb-4">
                    NEAREST DISTRIBUTION SHELTERS MAPPED
                  </span>
                  <div className="space-y-3.5">
                    {LEFTOVER_RESCUE_CENTERS.map((center) => (
                      <div key={center.id} className="p-3.5 rounded-[12px] bg-[#080808] border border-white/10">
                        <div className="font-display-sans uppercase text-sm font-black text-white">
                          {center.name}
                        </div>
                        <div className="font-mono-tabular text-[11px] text-[#49E619] mt-0.5">
                          {center.distanceKm}
                        </div>
                        <div className="text-[11px] text-white/70 mt-1">
                          Capacity: {center.acceptedVolume}
                        </div>
                        <div className="mt-2 text-[10px] font-mono-tabular text-white/60">
                          Direct Call: {center.contactNumber}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
