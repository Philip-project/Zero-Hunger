import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  ArrowDown,
  Camera,
  Check,
  CheckCircle2,
  Clock,
  Lock,
  Search,
  Send,
  Ticket,
  Upload,
} from 'lucide-react';
import {
  BENEFICIARIES,
  CONSENTED_DELIVERY_PHOTOS,
  CharityToken,
} from '../data/mealProgram';
import { useMealProgram } from '../context/MealProgramContext';
import { EditorialImage } from '../components/EditorialImage';
import { ScrollReveal } from '../components/ScrollReveal';
import { DeliveryRouteMap } from '../components/DeliveryRouteMap';

export const TrackMeal: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    tokens,
    findToken,
    markTokenDelivered,
    uploadDeliveryPhoto,
    sendCustomerNotification,
  } = useMealProgram();

  const initialQueryToken = searchParams.get('token') || 'ZH-2026-A8F42K';
  const [tokenInput, setTokenInput] = useState(initialQueryToken);
  const [activeTokenCode, setActiveTokenCode] = useState(initialQueryToken);
  const [viewMode, setViewMode] = useState<'CUSTOMER_TRACKER' | 'ADMIN_DASHBOARD'>(
    'CUSTOMER_TRACKER'
  );

  // Admin Dashboard customization state
  const [selectedBeneficiary, setSelectedBeneficiary] = useState('ZH-10482');
  const [selectedLocation, setSelectedLocation] = useState(
    'Hyderabad Community Centre'
  );
  const [selectedPhotoUrl, setSelectedPhotoUrl] = useState(
    CONSENTED_DELIVERY_PHOTOS[0].url
  );
  const [showPhotoSelector, setShowPhotoSelector] = useState(false);

  useEffect(() => {
    const paramToken = searchParams.get('token');
    if (paramToken) {
      setTokenInput(paramToken.toUpperCase());
      setActiveTokenCode(paramToken.toUpperCase());
    }
  }, [searchParams]);

  const activeToken: CharityToken | undefined =
    findToken(activeTokenCode) || tokens[0];

  useEffect(() => {
    if (activeToken) {
      setSelectedBeneficiary(activeToken.beneficiaryId || 'ZH-10482');
      setSelectedLocation(
        activeToken.deliveryLocation || 'Hyderabad Community Centre'
      );
      if (activeToken.deliveryPhoto) {
        setSelectedPhotoUrl(activeToken.deliveryPhoto);
      }
    }
  }, [activeToken]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tokenInput.trim()) return;
    const formatted = tokenInput.trim().toUpperCase();
    setActiveTokenCode(formatted);
    setSearchParams({ token: formatted });
  };

  const handleSelectToken = (code: string) => {
    setTokenInput(code);
    setActiveTokenCode(code);
    setSearchParams({ token: code });
  };

  const isDelivered = activeToken?.status === 'DELIVERED';

  const timelineSteps = [
    {
      id: 'purchased',
      label: 'PURCHASED',
      date: activeToken?.purchasedAt || '29 SEP 2026',
      description: `Order ${activeToken?.orderId || 'ORD-2026-9012'} confirmed. ₹150 payment allocated to dual-meal program.`,
      completed: true,
      isHeart: false,
      bgClass: 'bg-[#49E619] text-[#122023]',
    },
    {
      id: 'prepared',
      label: 'MEAL PREPARED',
      date: activeToken?.preparedAt || '30 SEP 2026',
      description:
        'Freshly cooked in our Secunderabad Community Kitchen under pediatric nutrition standards.',
      completed: true,
      isHeart: false,
      bgClass: 'bg-[#4EDBE2] text-[#122023]',
    },
    {
      id: 'assigned',
      label: 'ASSIGNED TO COMMUNITY',
      date: activeToken?.assignedAt || '30 SEP 2026',
      description: `Linked to anonymized Beneficiary ID ${
        activeToken?.beneficiaryId || 'ZH-10482'
      } at ${activeToken?.deliveryLocation || 'Hyderabad Community Centre'}.`,
      completed:
        activeToken?.status === 'ASSIGNED' ||
        activeToken?.status === 'OUT_FOR_DELIVERY' ||
        activeToken?.status === 'DELIVERED',
      isHeart: false,
      bgClass: 'bg-[#B9FF2C] text-[#122023]',
    },
    {
      id: 'delivered',
      label: 'DELIVERED',
      date: isDelivered ? activeToken?.deliveredAt || '01 OCT 2026' : 'PENDING DISPATCH',
      description:
        'Insulated thermal containers arrived at community distribution hub and verified by field coordinator.',
      completed: isDelivered,
      isHeart: false,
      bgClass: 'bg-[#F2F4F3] text-[#122023]',
    },
    {
      id: 'received',
      label: 'CHILD RECEIVED MEAL',
      date: isDelivered ? activeToken?.deliveredAt || '01 OCT 2026' : 'AWAITING CONFIRMATION',
      description:
        'Warm, balanced meal served with dignity. Safeguarding-verified proof uploaded.',
      completed: isDelivered,
      isHeart: true,
      bgClass: 'bg-[#49E619] text-[#122023]',
    },
  ];

  return (
    <div className="bg-[#080808] text-white min-h-screen">
      {/* =====================================================================
          HERO SECTION — FOLLOW YOUR IMPACT
      ====================================================================== */}
      <section className="bg-[#080808] pt-28 sm:pt-36 pb-16 sm:pb-20 border-b border-white/10">
        <div className="max-w-[1160px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <ScrollReveal>
            <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.22em] text-[#49E619] block mb-3">
              VERIFIABLE HUMANITARIAN LEDGER
            </span>

            <h1 className="font-display-sans uppercase text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[0.92] text-white">
              FOLLOW YOUR <span className="text-[#49E619]">IMPACT.</span>
            </h1>

            <p className="mt-4 font-display-sans uppercase text-lg sm:text-2xl text-[#B9FF2C] tracking-tight">
              “Your meal didn&apos;t end at checkout.”
            </p>

            {/* Token Search Form */}
            <form
              onSubmit={handleSearchSubmit}
              className="mt-8 max-w-xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <label htmlFor="charity-token-input" className="sr-only">
                Enter your token
              </label>
              <div className="relative flex-1">
                <Ticket className="w-4 h-4 text-[#49E619] absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  id="charity-token-input"
                  type="text"
                  value={tokenInput}
                  onChange={(e) => setTokenInput(e.target.value)}
                  placeholder="ZH-2026-A8F42K"
                  className="w-full rounded-[10px] bg-[#122023] border border-white/20 pl-11 pr-4 py-4 font-mono-tabular text-sm font-bold uppercase tracking-widest text-white focus:outline-none focus:border-[#49E619]"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 rounded-[10px] bg-[#49E619] hover:bg-[#B9FF2C] text-[#080808] font-mono-tabular text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer whitespace-nowrap inline-flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>TRACK MEAL</span>
              </button>
            </form>

            {/* Quick Token Selector Bar */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="font-mono-tabular uppercase tracking-wider text-white/60 mr-1">
                Available Tokens:
              </span>
              {tokens.map((tok) => {
                const isSelected =
                  tok.tokenNumber.toUpperCase() ===
                  activeToken?.tokenNumber.toUpperCase();
                return (
                  <button
                    key={tok.id}
                    type="button"
                    onClick={() => handleSelectToken(tok.tokenNumber)}
                    className={`px-3.5 py-1.5 rounded-[8px] font-mono-tabular text-xs font-bold border transition-colors cursor-pointer inline-flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#49E619] text-[#080808] border-[#49E619]'
                        : 'bg-[#122023] text-white border-white/15 hover:border-[#49E619]'
                    }`}
                  >
                    <span>{tok.tokenNumber}</span>
                    <span
                      className={`text-[10px] uppercase ${
                        isSelected
                          ? 'text-[#080808]'
                          : tok.status === 'DELIVERED'
                          ? 'text-[#49E619]'
                          : 'text-[#B9FF2C]'
                      }`}
                    >
                      · {tok.status === 'DELIVERED' ? 'DELIVERED ✓' : 'READY'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Mode Switcher: Customer Impact Tracker vs NGO Admin Delivery Dashboard */}
            <div className="mt-9 pt-6 border-t border-white/10 inline-flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setViewMode('CUSTOMER_TRACKER')}
                className={`px-5 py-2.5 rounded-[10px] font-mono-tabular text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer ${
                  viewMode === 'CUSTOMER_TRACKER'
                    ? 'bg-[#49E619] text-[#080808]'
                    : 'bg-[#122023] text-white/80 hover:text-white border border-white/15'
                }`}
              >
                1. Customer Impact Tracker
              </button>
              <button
                type="button"
                onClick={() => setViewMode('ADMIN_DASHBOARD')}
                className={`px-5 py-2.5 rounded-[10px] font-mono-tabular text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer ${
                  viewMode === 'ADMIN_DASHBOARD'
                    ? 'bg-[#B9FF2C] text-[#080808]'
                    : 'bg-[#122023] text-white/80 hover:text-white border border-white/15'
                }`}
              >
                2. NGO Admin Delivery Confirmation ({isDelivered ? 'Delivered ✓' : 'Action Ready'})
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =====================================================================
          MAIN CONTENT AREA
      ====================================================================== */}
      <section className="bg-[#122023] py-16 sm:py-24">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          {!activeToken ? (
            <div className="rounded-[18px] bg-[#080808] border border-white/15 p-12 text-center max-w-lg mx-auto">
              <p className="font-display-sans uppercase text-2xl font-black text-white">
                Token not found
              </p>
              <p className="text-sm text-white/70 mt-2">
                Please verify your token code (for example, ZH-2026-A8F42K) or
                purchase a ₹150 meal box to generate a new charity token.
              </p>
            </div>
          ) : viewMode === 'CUSTOMER_TRACKER' ? (
            /* ===============================================================
                VIEW 1: CUSTOMER IMPACT TRACKER (TIMELINE + MAP + IMPACT + SAFEGUARDING)
            ================================================================ */
            <div className="space-y-12">
              {/* Dual-Stream Distinction Banner: Customer's Purchased Meal vs Sponsored Child Meal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Box 1: Customer's Own Meal */}
                <div className="rounded-[16px] bg-[#F2F4F3] text-[#122023] p-6 flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono-tabular text-[10px] font-bold uppercase tracking-widest text-[#188D44] block">
                      ORDER {activeToken.orderId} · YOUR PURCHASED MEAL
                    </span>
                    <h2 className="font-display-sans uppercase text-2xl font-black text-[#122023] mt-1">
                      {activeToken.productName} (For {activeToken.customerName})
                    </h2>
                    <p className="text-xs text-[#122023]/75 mt-1">
                      Paid: ₹{activeToken.amountPaidInr} · Prepared fresh for
                      your personal meal order.
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-[6px] bg-[#122023] text-[#4EDBE2] font-mono-tabular text-[11px] font-bold uppercase shrink-0">
                    {activeToken.customerMealStatus === 'DELIVERED_TO_CUSTOMER'
                      ? 'Delivered ✓'
                      : 'Kitchen Preparing'}
                  </span>
                </div>

                {/* Box 2: Linked Sponsored Child Meal */}
                <div className="rounded-[16px] bg-[#49E619] text-[#122023] p-6 flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono-tabular text-[10px] font-bold uppercase tracking-widest text-[#122023]/80 block">
                      TOKEN {activeToken.tokenNumber} · SPONSORED CHILD MEAL
                    </span>
                    <h2 className="font-display-sans uppercase text-2xl font-black text-[#122023] mt-1">
                      1 Nutritious Child Meal
                    </h2>
                    <p className="text-xs text-[#122023]/85 font-medium mt-1">
                      Funded by your ₹150 purchase · Recipient Beneficiary ID:{' '}
                      <strong className="font-mono-tabular text-[#122023]">
                        {activeToken.beneficiaryId}
                      </strong>
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-[6px] bg-[#122023] text-[#B9FF2C] font-mono-tabular text-[11px] font-bold uppercase shrink-0">
                    {isDelivered ? 'CHILD RECEIVED ❤️' : activeToken.status}
                  </span>
                </div>
              </div>

              {/* LIVE KITCHEN DISPATCH & PACKAGING SHOWCASE */}
              <div className="rounded-[20px] bg-[#080808] border border-white/15 overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[360px] lg:min-h-[400px] bg-[#122023]">
                    <img
                      src="/src/assets/images/track_meal_delivery_1791400616620.jpg"
                      alt="Zero Hunger live kitchen counter dispatch with delivery volunteer picking up fresh meal boxes"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080808]/85 backdrop-blur-md border border-white/20 text-xs font-mono-tabular font-bold text-[#49E619]">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#49E619] animate-pulse" />
                      <span>LIVE DISPATCH · MEAL READY</span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 rounded-[10px] bg-[#080808]/90 backdrop-blur-md border border-white/10 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono-tabular text-white/90">
                      <span>ZERO HUNGER CORPS · SECUNDERABAD HUB</span>
                      <span className="text-[#49E619] font-bold">100% FRESHLY PREPARED</span>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-br from-[#0c1618] to-[#080808]">
                    <div>
                      <span className="font-mono-tabular text-xs font-bold uppercase tracking-[0.22em] text-[#49E619] block mb-2">
                        LIVE KITCHEN OPERATIONS
                      </span>
                      <h3 className="font-display-sans uppercase text-2xl sm:text-3xl font-black text-white leading-tight">
                        Kitchen Dispatch & Packaging Counter
                      </h3>
                      <p className="mt-3 text-sm text-white/75 leading-relaxed">
                        Every ₹150 meal box triggers real-time preparation in our community kitchen. Our dedicated volunteer field couriers pack fresh, balanced meals into insulated carriers and dispatch them directly to verified beneficiary distribution hubs across Hyderabad.
                      </p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono-tabular">
                        <span className="text-white/60">DISPATCH BATCH</span>
                        <span className="text-white font-bold">{activeToken.tokenNumber}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs font-mono-tabular">
                        <span className="text-white/60">DESTINATION HUB</span>
                        <span className="text-[#49E619] font-bold truncate max-w-[200px] text-right">{activeToken.deliveryLocation}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs font-mono-tabular">
                        <span className="text-white/60">THERMAL PACKAGING</span>
                        <span className="text-[#B9FF2C] font-bold">INSULATED & ECO-SAFE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* INTERACTIVE LEAFLET GEOSPATIAL MAP: COMMUNITY KITCHENS & DELIVERY PATHS */}
              <DeliveryRouteMap token={activeToken} />

              {/* Main Two-Column Grid: Vertical Step-by-Step Timeline Left + Impact & Delivery Photo Right */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* LEFT 5 COLUMNS: Vertical Timeline */}
                <div className="lg:col-span-5 rounded-[18px] bg-[#080808] border border-white/12 p-6 sm:p-8 shadow-xl">
                  <div className="pb-4 mb-6 border-b border-white/10 flex items-center justify-between">
                    <span className="font-mono-tabular text-xs font-bold uppercase tracking-widest text-white">
                      SPONSORED MEAL TIMELINE
                    </span>
                    <span className="font-mono-tabular text-xs font-bold text-[#49E619]">
                      {activeToken.tokenNumber}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {timelineSteps.map((step, index) => (
                      <React.Fragment key={step.id}>
                        <div
                          className={`rounded-[12px] p-4 transition-colors ${
                            step.completed
                              ? step.bgClass
                              : 'bg-white/5 border border-white/10 text-white/50'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2.5">
                              {step.completed ? (
                                <span className="w-6 h-6 rounded-full bg-[#122023] text-white flex items-center justify-center text-xs shrink-0">
                                  {step.isHeart ? '❤️' : <Check className="w-3.5 h-3.5 text-[#49E619]" />}
                                </span>
                              ) : (
                                <span className="w-6 h-6 rounded-full border border-white/30 text-white/60 flex items-center justify-center shrink-0">
                                  <Clock className="w-3.5 h-3.5" />
                                </span>
                              )}
                              <span className="font-display-sans uppercase text-sm font-black tracking-tight">
                                {step.completed && !step.isHeart ? '✓ ' : ''}
                                {step.label}
                              </span>
                            </div>

                            <span className="font-mono-tabular text-[10px] font-bold opacity-80">
                              {step.date}
                            </span>
                          </div>

                          <p className="mt-2 pl-8 text-xs font-medium opacity-85 leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {index < timelineSteps.length - 1 && (
                          <div
                            className="flex justify-center py-0.5 text-[#49E619]"
                            aria-hidden="true"
                          >
                            <ArrowDown className="w-4 h-4" />
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* RIGHT 7 COLUMNS: YOUR IMPACT + DELIVERY PHOTO + PRIVACY PROTECTION */}
                <div className="lg:col-span-7 space-y-6">
                  {isDelivered ? (
                    <div className="rounded-[18px] bg-[#080808] border border-white/15 p-6 sm:p-9 shadow-2xl">
                      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/12">
                        <div>
                          <span className="font-mono-tabular text-xs font-bold uppercase tracking-[0.2em] text-[#49E619] block">
                            YOUR IMPACT
                          </span>
                          <h3 className="font-display-sans uppercase text-3xl sm:text-4xl font-black text-white mt-1">
                            Meal delivered successfully ❤️
                          </h3>
                        </div>
                        <span className="px-3.5 py-1.5 rounded-[8px] bg-[#49E619] text-[#080808] font-mono-tabular text-xs font-bold uppercase tracking-widest">
                          VERIFIED DELIVERY ✓
                        </span>
                      </div>

                      {/* Recipient & Location Metadata Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-b border-white/12">
                        <div className="rounded-[10px] bg-[#122023] p-3.5">
                          <span className="font-mono-tabular text-[10px] uppercase tracking-widest text-[#49E619] block">
                            RECIPIENT (ANONYMIZED)
                          </span>
                          <span className="font-mono-tabular text-sm font-bold text-white mt-1 block">
                            Beneficiary ID: {activeToken.beneficiaryId}
                          </span>
                        </div>

                        <div className="rounded-[10px] bg-[#122023] p-3.5">
                          <span className="font-mono-tabular text-[10px] uppercase tracking-widest text-[#4EDBE2] block">
                            LOCATION
                          </span>
                          <span className="text-sm font-bold text-white mt-1 block">
                            {activeToken.deliveryLocation}
                          </span>
                        </div>

                        <div className="rounded-[10px] bg-[#122023] p-3.5">
                          <span className="font-mono-tabular text-[10px] uppercase tracking-widest text-[#B9FF2C] block">
                            DELIVERED
                          </span>
                          <span className="font-mono-tabular text-sm font-bold text-white mt-1 block">
                            01 October 2026
                          </span>
                        </div>
                      </div>

                      {/* Photo of Meal Delivery */}
                      <div className="mt-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono-tabular text-xs font-bold uppercase tracking-widest text-white inline-flex items-center gap-2">
                            <Camera className="w-4 h-4 text-[#49E619]" />
                            <span>PHOTO OF MEAL DELIVERY</span>
                          </span>
                          <span className="font-mono-tabular text-[11px] text-[#49E619] font-bold">
                            Safeguarding Consent Verified ✓
                          </span>
                        </div>

                        <div className="relative rounded-[14px] aspect-[16/10] overflow-hidden border border-white/15 bg-[#122023]">
                          <EditorialImage
                            src={
                              activeToken.deliveryPhoto ||
                              CONSENTED_DELIVERY_PHOTOS[0].url
                            }
                            alt={`Verified meal delivery for token ${activeToken.tokenNumber} at ${activeToken.deliveryLocation}`}
                            className="w-full h-full"
                          />
                          <div className="absolute bottom-3 left-3 right-3 rounded-[8px] bg-[#080808]/90 backdrop-blur-xs text-white px-3.5 py-2 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono-tabular">
                            <span>
                              TOKEN: {activeToken.tokenNumber} · BENEFICIARY:{' '}
                              {activeToken.beneficiaryId}
                            </span>
                            <span className="text-[#49E619] font-bold">
                              {activeToken.deliveryLocation.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Customer Notification Receipt Card */}
                      <div className="mt-6 rounded-[14px] bg-[#B9FF2C] text-[#122023] p-5">
                        <span className="font-mono-tabular text-[10px] font-bold uppercase tracking-widest text-[#122023]/80 block">
                          CUSTOMER DISPATCH MESSAGE
                        </span>
                        <p className="font-display-sans uppercase text-xl font-black text-[#122023] mt-1">
                          Your meal has reached a child in need ❤️
                        </p>
                        <p className="font-mono-tabular text-xs text-[#122023] mt-1">
                          Token: <strong>{activeToken.tokenNumber}</strong>
                        </p>
                        <p className="text-xs text-[#122023]/80 font-medium mt-1">
                          Thank you for helping provide a nutritious meal through
                          our community distribution program.
                        </p>
                      </div>
                    </div>
                  ) : (
                    /* Pending Delivery Card with shortcut to Admin Confirmation */
                    <div className="rounded-[18px] bg-[#080808] border border-white/15 p-8 shadow-xl">
                      <span className="px-3 py-1 rounded-[6px] bg-[#B9FF2C] font-mono-tabular text-xs font-bold uppercase tracking-wider text-[#122023]">
                        STATUS: READY FOR FIELD DELIVERY
                      </span>
                      <h3 className="font-display-sans uppercase text-3xl font-black text-white mt-4">
                        Your sponsored meal is assigned and ready for community
                        distribution.
                      </h3>
                      <p className="mt-3 text-sm text-white/75 leading-relaxed">
                        Token{' '}
                        <strong className="font-mono-tabular text-[#49E619]">
                          {activeToken.tokenNumber}
                        </strong>{' '}
                        has been linked to Beneficiary ID{' '}
                        <strong className="font-mono-tabular text-[#4EDBE2]">
                          {activeToken.beneficiaryId}
                        </strong>{' '}
                        at{' '}
                        <strong className="text-white">
                          {activeToken.deliveryLocation}
                        </strong>
                        . Once our field team confirms handoff and uploads the
                        delivery photo, your impact proof will appear here.
                      </p>

                      <div className="mt-5 rounded-[12px] overflow-hidden border border-white/15 aspect-[16/9] relative">
                        <img
                          src="/src/assets/images/track_meal_delivery_1791400616620.jpg"
                          alt="Meal ready at kitchen counter for field courier dispatch"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#080808]/85 text-xs font-mono-tabular font-bold text-[#49E619] border border-white/15 backdrop-blur-xs">
                          KITCHEN COUNTER · READY FOR DISPATCH
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                        <button
                          type="button"
                          onClick={() => setViewMode('ADMIN_DASHBOARD')}
                          className="px-6 py-3.5 rounded-[10px] bg-[#49E619] hover:bg-[#B9FF2C] text-[#080808] font-mono-tabular text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                        >
                          OPEN ADMIN DASHBOARD TO CONFIRM DELIVERY →
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Strict Child Privacy & Safeguarding Policy Box */}
                  <div className="rounded-[18px] bg-[#080808] text-white p-6 sm:p-7 border border-[#49E619]/30">
                    <div className="flex items-center gap-2.5 mb-3">
                      <Lock className="w-4 h-4 text-[#49E619]" />
                      <h4 className="font-mono-tabular text-xs font-bold uppercase tracking-[0.18em] text-[#49E619]">
                        CHILD PRIVACY & SAFEGUARDING PROTECTION
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                      To protect the dignity and safety of every child we serve,
                      Zero Hunger strictly prohibits exposing a child’s{' '}
                      <strong className="text-white">
                        full name, home address, phone number, school details, or
                        personally identifying information
                      </strong>
                      . All impact records use an anonymized{' '}
                      <span className="font-mono-tabular text-[#B9FF2C]">
                        Beneficiary ID ({activeToken.beneficiaryId})
                      </span>{' '}
                      and community-level photography published only when
                      verified guardian consent and safeguarding requirements are
                      met.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ===============================================================
                VIEW 2: NGO ADMIN DELIVERY CONFIRMATION DASHBOARD
            ================================================================ */
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="rounded-[20px] bg-[#080808] border border-white/20 shadow-2xl p-6 sm:p-10">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/12">
                  <div>
                    <span className="font-mono-tabular text-xs font-bold uppercase tracking-[0.2em] text-[#49E619] block">
                      NGO FIELD OPERATIONS
                    </span>
                    <h2 className="font-display-sans uppercase text-3xl sm:text-4xl font-black text-white mt-1">
                      ADMIN DASHBOARD
                    </h2>
                  </div>

                  <span
                    className={`px-4 py-1.5 rounded-[8px] font-mono-tabular text-xs font-bold uppercase tracking-widest ${
                      isDelivered
                        ? 'bg-[#49E619] text-[#080808]'
                        : 'bg-[#B9FF2C] text-[#122023]'
                    }`}
                  >
                    {isDelivered ? 'DELIVERED ✓' : 'READY FOR DELIVERY'}
                  </span>
                </div>

                {/* Exact Requested Admin Record Fields */}
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-b border-white/12 text-sm">
                  <div>
                    <dt className="font-mono-tabular text-[11px] uppercase tracking-widest text-white/60">
                      Token:
                    </dt>
                    <dd className="font-mono-tabular text-lg font-bold text-[#49E619] mt-1">
                      {activeToken.tokenNumber}
                    </dd>
                  </div>

                  <div>
                    <dt className="font-mono-tabular text-[11px] uppercase tracking-widest text-white/60">
                      Customer:
                    </dt>
                    <dd className="text-lg font-bold text-white mt-1">
                      {activeToken.customerName}
                    </dd>
                  </div>

                  <div>
                    <dt className="font-mono-tabular text-[11px] uppercase tracking-widest text-white/60">
                      Meal:
                    </dt>
                    <dd className="font-display-sans uppercase text-lg font-black text-white mt-1">
                      {activeToken.productName}
                    </dd>
                  </div>

                  <div>
                    <dt className="font-mono-tabular text-[11px] uppercase tracking-widest text-white/60">
                      Amount:
                    </dt>
                    <dd className="font-mono-tabular text-lg font-bold text-[#B9FF2C] mt-1">
                      ₹{activeToken.amountPaidInr}
                    </dd>
                  </div>

                  <div>
                    <dt className="font-mono-tabular text-[11px] uppercase tracking-widest text-white/60">
                      Sponsored Meal:
                    </dt>
                    <dd className="font-mono-tabular text-lg font-bold text-[#49E619] mt-1">
                      YES
                    </dd>
                  </div>

                  <div>
                    <dt className="font-mono-tabular text-[11px] uppercase tracking-widest text-white/60">
                      Status:
                    </dt>
                    <dd className="font-mono-tabular text-lg font-bold text-white mt-1">
                      {isDelivered ? 'DELIVERED ✓' : 'READY FOR DELIVERY'}
                    </dd>
                  </div>

                  <div>
                    <dt className="font-mono-tabular text-[11px] uppercase tracking-widest text-white/60 mb-1">
                      Beneficiary (Anonymized ID):
                    </dt>
                    <dd>
                      <select
                        value={selectedBeneficiary}
                        onChange={(e) => {
                          const benCode = e.target.value;
                          setSelectedBeneficiary(benCode);
                          const found = BENEFICIARIES.find(
                            (b) => b.beneficiaryCode === benCode
                          );
                          if (found) {
                            setSelectedLocation(found.communityCenter);
                          }
                        }}
                        className="w-full rounded-[8px] border border-white/20 bg-[#122023] px-3 py-2.5 font-mono-tabular text-xs font-bold text-white"
                      >
                        {BENEFICIARIES.map((b) => (
                          <option key={b.id} value={b.beneficiaryCode}>
                            {b.beneficiaryCode} — {b.ageGroup}
                          </option>
                        ))}
                      </select>
                    </dd>
                  </div>

                  <div>
                    <dt className="font-mono-tabular text-[11px] uppercase tracking-widest text-white/60 mb-1">
                      Delivery Location:
                    </dt>
                    <dd>
                      <input
                        type="text"
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        className="w-full rounded-[8px] border border-white/20 bg-[#122023] px-3 py-2.5 text-xs font-semibold text-white"
                      />
                    </dd>
                  </div>
                </dl>

                {/* Live Admin Status Checkmarks */}
                <div className="py-5 border-b border-white/12 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div
                    className={`p-3.5 rounded-[10px] font-mono-tabular text-xs font-bold flex items-center justify-between ${
                      isDelivered
                        ? 'bg-[#49E619] text-[#080808]'
                        : 'bg-[#122023] text-white/60'
                    }`}
                  >
                    <span>DELIVERED</span>
                    <span>{isDelivered ? '✓' : '—'}</span>
                  </div>

                  <div
                    className={`p-3.5 rounded-[10px] font-mono-tabular text-xs font-bold flex items-center justify-between ${
                      activeToken.photoUploaded
                        ? 'bg-[#4EDBE2] text-[#080808]'
                        : 'bg-[#122023] text-white/60'
                    }`}
                  >
                    <span>Photo uploaded</span>
                    <span>{activeToken.photoUploaded ? '✓' : '—'}</span>
                  </div>

                  <div
                    className={`p-3.5 rounded-[10px] font-mono-tabular text-xs font-bold flex items-center justify-between ${
                      activeToken.notificationSent
                        ? 'bg-[#B9FF2C] text-[#080808]'
                        : 'bg-[#122023] text-white/60'
                    }`}
                  >
                    <span>Notification sent</span>
                    <span>{activeToken.notificationSent ? '✓' : '—'}</span>
                  </div>
                </div>

                {/* Consented Photo Picker Drawer */}
                {showPhotoSelector && (
                  <div className="my-5 p-4 rounded-[12px] bg-[#122023] border border-white/15">
                    <span className="font-mono-tabular text-[11px] font-bold uppercase tracking-wider text-[#49E619] block mb-3">
                      Select Safeguarding-Cleared Community Delivery Photo:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {CONSENTED_DELIVERY_PHOTOS.map((photo) => (
                        <button
                          key={photo.id}
                          type="button"
                          onClick={() => {
                            setSelectedPhotoUrl(photo.url);
                            uploadDeliveryPhoto(
                              activeToken.tokenNumber,
                              photo.url
                            );
                            setShowPhotoSelector(false);
                          }}
                          className={`rounded-[10px] text-left border p-2 transition-all cursor-pointer ${
                            selectedPhotoUrl === photo.url
                              ? 'border-[#49E619] bg-[#080808]'
                              : 'border-white/15 bg-[#080808]/60 hover:bg-[#080808]'
                          }`}
                        >
                          <div className="aspect-[4/3] rounded-[6px] overflow-hidden mb-2">
                            <EditorialImage
                              src={photo.url}
                              alt={photo.label}
                              className="w-full h-full"
                            />
                          </div>
                          <span className="text-[11px] font-medium text-white line-clamp-2">
                            {photo.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3 Primary Admin Action Buttons */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      markTokenDelivered(
                        activeToken.tokenNumber,
                        selectedBeneficiary,
                        selectedLocation
                      )
                    }
                    className="py-4 px-4 rounded-[10px] bg-[#49E619] hover:bg-[#B9FF2C] text-[#080808] font-mono-tabular text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>MARK AS DELIVERED</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      uploadDeliveryPhoto(
                        activeToken.tokenNumber,
                        selectedPhotoUrl
                      );
                      setShowPhotoSelector((prev) => !prev);
                    }}
                    className="py-4 px-4 rounded-[10px] bg-white hover:bg-[#4EDBE2] text-[#080808] font-mono-tabular text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Upload className="w-4 h-4 text-[#188D44]" />
                    <span>UPLOAD PHOTO</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      markTokenDelivered(
                        activeToken.tokenNumber,
                        selectedBeneficiary,
                        selectedLocation
                      );
                      sendCustomerNotification(activeToken.tokenNumber);
                    }}
                    className="py-4 px-4 rounded-[10px] bg-[#B9FF2C] hover:bg-[#49E619] text-[#080808] font-mono-tabular text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND CUSTOMER NOTIFICATION</span>
                  </button>
                </div>

                {/* Preview of Dispatched Customer Message */}
                {activeToken.notificationSent && (
                  <div className="mt-6 rounded-[14px] bg-[#122023] text-white p-5 border-l-4 border-l-[#49E619]">
                    <span className="font-mono-tabular text-[10px] uppercase tracking-widest text-[#49E619] font-bold block">
                      DISPATCHED TO CUSTOMER (WEB + EMAIL + SMS/WHATSAPP)
                    </span>
                    <p className="font-display-sans uppercase text-lg font-black mt-1">
                      Your meal has reached a child in need ❤️
                    </p>
                    <p className="font-mono-tabular text-xs text-[#B9FF2C] mt-1">
                      Token: {activeToken.tokenNumber}
                    </p>
                    <p className="text-xs text-white/75 mt-1">
                      Thank you for helping provide a nutritious meal.
                    </p>
                    <button
                      type="button"
                      onClick={() => setViewMode('CUSTOMER_TRACKER')}
                      className="mt-4 px-4 py-2 rounded-[8px] bg-[#49E619] text-[#080808] font-mono-tabular text-[11px] font-bold uppercase tracking-widest cursor-pointer"
                    >
                      VIEW CUSTOMER IMPACT SCREEN →
                    </button>
                  </div>
                )}
              </div>

              {/* Admin Dispatch Route Map Preview (syncs with selected Beneficiary & Hub) */}
              <DeliveryRouteMap
                token={activeToken}
                overrideLocation={selectedLocation}
                overrideBeneficiaryId={selectedBeneficiary}
                onSelectHubLocation={(hubName, beneficiaryCode) => {
                  setSelectedLocation(hubName);
                  setSelectedBeneficiary(beneficiaryCode);
                }}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
