import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  Check,
  CheckCircle2,
  Copy,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  ShieldCheck,
  Sparkles,
  Ticket,
  Trash2,
  Utensils,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import {
  MEAL_PRODUCTS,
  MealCategory,
  CharityToken,
  Order,
} from '../data/mealProgram';
import { useMealProgram } from '../context/MealProgramContext';
import { EditorialImage } from '../components/EditorialImage';
import { ScrollReveal } from '../components/ScrollReveal';
import { PlateToHandsSteps } from '../components/PlateToHandsSteps';

const CATEGORIES: MealCategory[] = [
  'ALL',
  'VEG',
  'NON-VEG',
  'PROTEIN',
  'KIDS MEALS',
  'FAMILY MEALS',
];

export const MealBox: React.FC = () => {
  const navigate = useNavigate();
  const {
    cart,
    cartCount,
    cartTotalInr,
    sponsoredMealsCount,
    addToCart,
    updateQuantity,
    removeFromCart,
    placeOrder,
  } = useMealProgram();

  const [activeCategory, setActiveCategory] = useState<MealCategory>('ALL');
  const [checkoutStep, setCheckoutStep] = useState<'CART' | 'CHECKOUT' | 'CONFIRMED'>('CART');

  // Customer checkout fields
  const [customerName, setCustomerName] = useState('Philip');
  const [customerEmail, setCustomerEmail] = useState('philip@zerohunger.org');
  const [customerPhone, setCustomerPhone] = useState('+91 98480 12345');
  const [deliveryAddress, setDeliveryAddress] = useState(
    'Plot 42, Road No. 12, Banjara Hills, Hyderabad'
  );
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'CARD' | 'NET_BANKING'>('UPI');
  const [formError, setFormError] = useState('');

  // Confirmed Order & Token state
  const [confirmedOrder, setConfirmedOrder] = useState<Order | null>(null);
  const [confirmedTokens, setConfirmedTokens] = useState<CharityToken[]>([]);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const filteredProducts =
    activeCategory === 'ALL'
      ? MEAL_PRODUCTS
      : MEAL_PRODUCTS.filter((p) => p.categories.includes(activeCategory));

  const scrollToMeals = () => {
    const el = document.getElementById('meal-box-catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCart = () => {
    const el = document.getElementById('your-cart-module');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCompletePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerEmail.trim() || !deliveryAddress.trim()) {
      setFormError('Please provide your name, email, and delivery address for your meal.');
      return;
    }
    setFormError('');
    const result = placeOrder({
      customerName,
      customerEmail,
      customerPhone,
      deliveryAddress,
      paymentMethod,
    });
    setConfirmedOrder(result.order);
    setConfirmedTokens(result.tokens);
    setCheckoutStep('CONFIRMED');
  };

  const handleCopyToken = (tokenStr: string) => {
    navigator.clipboard?.writeText(tokenStr);
    setCopiedToken(tokenStr);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <div className="bg-[#080808] text-white min-h-screen">
      {/* =====================================================================
          HERO SECTION — NOURISH ONE. HELP ANOTHER.
      ====================================================================== */}
      <section className="relative bg-[#080808] pt-28 sm:pt-36 pb-18 sm:pb-24 border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.22em] text-[#49E619] block mb-3">
                  BUY 1 · GIVE 1 MEAL PROGRAM
                </span>

                <h1 className="font-display-sans uppercase text-5xl sm:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[0.92] text-white">
                  NOURISH ONE.
                  <br />
                  <span className="text-[#49E619]">HELP ANOTHER.</span>
                </h1>

                <p className="mt-6 text-lg sm:text-xl text-white font-semibold leading-relaxed max-w-xl">
                  Buy a nutritious meal for yourself.
                  <br />
                  Every eligible <span className="font-mono-tabular font-bold text-[#B9FF2C]">₹150</span> meal purchase funds a nutritious meal for a child in need.
                </p>

                <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed max-w-xl">
                  Your meal is freshly cooked and dispatched to your address, while your linked sponsored meal is assigned a unique Charity Token so you can follow its journey to a child at our Hyderabad community centers.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={scrollToMeals}
                    className="inline-flex items-center gap-2.5 px-7 py-4 rounded-[10px] bg-[#49E619] hover:bg-[#B9FF2C] text-[#080808] text-sm font-bold tracking-tight transition-colors cursor-pointer"
                  >
                    <span>EXPLORE MEALS</span>
                    <ArrowDown className="w-4 h-4" />
                  </button>

                  <Link
                    to="/track-meal"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-[10px] bg-white hover:bg-[#4EDBE2] text-[#080808] text-sm font-bold tracking-tight transition-colors"
                  >
                    <Ticket className="w-4 h-4 text-[#188D44]" />
                    <span>TRACK A MEAL TOKEN</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Dual-Meal Distinction Card */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={0.14}>
                <div className="bg-[#122023] rounded-[20px] border border-white/15 p-6 sm:p-8 shadow-2xl">
                  <div className="flex items-center justify-between pb-4 border-b border-white/12">
                    <span className="text-xs font-mono-tabular uppercase tracking-widest text-white font-bold">
                      HOW YOUR ₹150 WORKS
                    </span>
                    <span className="text-xs font-mono-tabular font-bold text-[#49E619]">
                      1 PURCHASE = 2 MEALS
                    </span>
                  </div>

                  <div className="mt-6 space-y-4">
                    {/* Stream 1: Customer's Purchased Meal */}
                    <div className="rounded-[16px] bg-[#F2F4F3] text-[#122023] p-4 sm:p-5 border border-[#122023]/15 overflow-hidden group hover:border-[#188D44] transition-all shadow-sm">
                      <div className="flex flex-col sm:flex-row items-center gap-4">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-[14px] bg-white border border-[#122023]/10 overflow-hidden p-1 shadow-xs flex items-center justify-center">
                          <img
                            src="/src/assets/images/courier_delivery_1791145501426.jpg"
                            alt="Zero Hunger ₹150 Meal Box Electric Scooter Delivery Courier"
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="flex-1 text-left w-full">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[10px] font-mono-tabular font-bold uppercase tracking-widest text-[#188D44] block">
                              MEAL 01 · FOR YOU
                            </span>
                            <span className="font-mono-tabular text-xl font-black text-[#122023] shrink-0">
                              ₹150
                            </span>
                          </div>
                          <h3 className="font-display-sans uppercase text-lg sm:text-xl font-black text-[#122023] mt-0.5">
                            Choose Your ₹150 Meal Box
                          </h3>
                          <p className="text-xs text-[#122023]/80 mt-1 leading-relaxed">
                            Freshly prepared in our Secunderabad kitchen and delivered hot via electric scooter directly to your doorstep.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Stream 2: Sponsored Child Meal */}
                    <div className="rounded-[12px] bg-[#49E619] text-[#122023] p-4 flex items-start justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-mono-tabular uppercase tracking-widest text-[#122023] font-bold block">
                          MEAL 02 · FOR A CHILD IN NEED
                        </span>
                        <h3 className="font-display-sans uppercase text-lg font-black text-[#122023] mt-0.5">
                          Linked Sponsored Child Meal
                        </h3>
                        <p className="text-xs text-[#122023]/85 font-medium mt-1">
                          Funded by our Buy 1, Give 1 program at zero extra cost to you. Includes a verifiable Charity Token.
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-mono-tabular text-sm line-through text-[#122023]/60 block">
                          ₹150
                        </span>
                        <span className="font-mono-tabular text-[11px] font-bold bg-[#122023] text-[#B9FF2C] px-2 py-0.5 rounded-[4px] uppercase">
                          SPONSORED
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/12 flex items-center justify-between">
                    <span className="text-xs font-mono-tabular uppercase tracking-wider text-white/80 font-bold">
                      YOU PAY ONLY
                    </span>
                    <span className="font-mono-tabular text-2xl font-bold text-[#B9FF2C]">
                      ₹150
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          MAIN SHOPPING & CART EXPERIENCE
      ====================================================================== */}
      <section id="meal-box-catalog" className="bg-[#122023] py-18 sm:py-24">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Category Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 mb-8 border-b border-white/12">
            <div>
              <span className="text-xs font-mono-tabular font-bold uppercase tracking-widest text-[#49E619] block mb-1">
                DAILY KITCHEN MENU · ALL MEALS ₹150
              </span>
              <h2 className="font-display-sans uppercase text-3xl sm:text-4xl font-black text-white">
                Choose Your ₹150 Meal Box
              </h2>
            </div>

            <div
              role="tablist"
              aria-label="Meal Box Categories"
              className="flex flex-wrap items-center gap-2"
            >
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    role="tab"
                    aria-selected={isActive}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-[8px] text-xs font-mono-tabular font-bold uppercase tracking-widest transition-colors cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#49E619] text-[#080808]'
                        : 'bg-[#080808]/60 text-white/75 border border-white/15 hover:border-[#49E619] hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Featured Spotlight: Choose Your ₹150 Meal Box Delivery Tile */}
          <div className="mb-10 rounded-[20px] bg-gradient-to-r from-[#080808] via-[#122023] to-[#080808] border border-[#49E619]/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden group">
            <div className="flex flex-col sm:flex-row items-center gap-6 z-10 text-center sm:text-left">
              <div className="w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-[18px] bg-white border-2 border-[#49E619] overflow-hidden p-2 shadow-xl flex items-center justify-center">
                <img
                  src="/src/assets/images/courier_delivery_1791145501426.jpg"
                  alt="Zero Hunger Delivery Courier on Electric Scooter"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-[4px] bg-[#49E619] text-[#080808] font-mono-tabular text-[10px] font-bold uppercase tracking-widest mb-2">
                  <Sparkles className="w-3 h-3" />
                  <span>ELECTRIC SCOOTER DISPATCH · ZERO HUNGER FLEET</span>
                </div>
                <h3 className="font-display-sans uppercase text-2xl sm:text-3xl font-black text-white leading-tight">
                  Choose Your ₹150 Meal Box
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed">
                  Every order is freshly prepared in Secunderabad and dispatched directly to your doorstep on our electric courier fleet. Every ₹150 meal ordered automatically funds and dispatches a second hot meal for a child in need.
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs font-mono-tabular text-[#4EDBE2]">
                  <span>⚡ 45-Min Hot Delivery</span>
                  <span>•</span>
                  <span>🌱 100% Eco-Thermal Packaging</span>
                  <span>•</span>
                  <span className="text-[#B9FF2C] font-bold">❤️ 1 Purchase = 2 Meals</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 z-10 text-center md:text-right">
              <span className="font-mono-tabular text-3xl sm:text-4xl font-black text-[#B9FF2C] block">
                ₹150
              </span>
              <span className="text-[11px] font-mono-tabular text-white/70 block uppercase tracking-wider mt-0.5">
                All Inclusive · Buy 1 Give 1
              </span>
              <div className="mt-2 text-[10px] font-mono-tabular font-bold text-[#49E619] uppercase tracking-wider">
                ✓ Free Doorstep Delivery
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* LEFT 8 COLUMNS: Meal Box Product Grid */}
            <div className="lg:col-span-8">
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((meal) => {
                    const inCartItem = cart.find(
                      (item) => item.product.id === meal.id
                    );
                    return (
                      <motion.div
                        key={meal.id}
                        layout
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-[18px] bg-[#080808] border border-white/12 flex flex-col justify-between group hover:border-[#49E619]/60 transition-all duration-300 overflow-hidden shadow-xl"
                      >
                        <div>
                          {/* Food Image */}
                          <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10 bg-[#141414]">
                            <EditorialImage
                              src={meal.image}
                              alt={meal.name}
                              className="w-full h-full"
                              imgClassName="group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-3 left-3 rounded-[6px] bg-[#080808]/90 backdrop-blur-xs text-[#49E619] px-2.5 py-1 text-[10px] font-mono-tabular font-bold uppercase tracking-widest">
                              {meal.categories.join(' · ')}
                            </div>
                            <div className="absolute bottom-3 right-3 rounded-[6px] bg-[#B9FF2C] text-[#122023] px-2.5 py-1 text-[11px] font-mono-tabular font-bold">
                              {meal.proteinGrams}g Protein · {meal.calories} kcal
                            </div>
                          </div>

                          {/* Product Body */}
                          <div className="p-6">
                            <div className="flex items-start justify-between gap-3">
                              <h3 className="font-display-sans uppercase text-2xl font-black text-white group-hover:text-[#49E619] transition-colors">
                                {meal.name}
                              </h3>
                              <span className="font-mono-tabular text-xl font-bold text-[#49E619] shrink-0">
                                ₹{meal.priceInr}
                              </span>
                            </div>

                            {/* Ingredients with middle dot separators */}
                            <p className="mt-2 text-xs font-mono-tabular text-[#4EDBE2] font-semibold">
                              {meal.ingredients.join(' • ')}
                            </p>

                            <p className="mt-2 text-sm text-white/70 leading-relaxed">
                              {meal.shortDescription}
                            </p>

                            {/* 3 Verification Checkmarks */}
                            <ul className="mt-5 pt-4 border-t border-white/10 space-y-2 text-xs text-white/85">
                              <li className="flex items-center gap-2">
                                <Check className="w-3.5 h-3.5 text-[#49E619] shrink-0" />
                                <span>Freshly prepared</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Check className="w-3.5 h-3.5 text-[#49E619] shrink-0" />
                                <span>Nutritionally balanced</span>
                              </li>
                              <li className="flex items-center gap-2 font-bold text-[#B9FF2C]">
                                <Check className="w-3.5 h-3.5 text-[#49E619] shrink-0" />
                                <span>Supports a child in need (1-for-1)</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* Add to Cart Button */}
                        <div className="px-6 pb-6">
                          {inCartItem ? (
                            <div className="flex items-center justify-between rounded-[10px] bg-[#122023] border border-[#49E619]/40 px-4 py-2.5">
                              <span className="text-xs font-mono-tabular font-bold uppercase text-[#49E619]">
                                In Cart ({inCartItem.quantity})
                              </span>
                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(
                                      meal.id,
                                      inCartItem.quantity - 1
                                    )
                                  }
                                  aria-label="Decrease quantity"
                                  className="w-7 h-7 rounded-[6px] bg-[#080808] border border-white/20 text-white flex items-center justify-center hover:bg-[#49E619] hover:text-[#080808] transition-colors cursor-pointer"
                                >
                                  <Minus className="w-3.5 h-3.5" />
                                </button>
                                <span className="font-mono-tabular text-sm font-bold w-5 text-center text-white">
                                  {inCartItem.quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(
                                      meal.id,
                                      inCartItem.quantity + 1
                                    )
                                  }
                                  aria-label="Increase quantity"
                                  className="w-7 h-7 rounded-[6px] bg-[#080808] border border-white/20 text-white flex items-center justify-center hover:bg-[#49E619] hover:text-[#080808] transition-colors cursor-pointer"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={() => {
                                addToCart(meal);
                                if (checkoutStep === 'CONFIRMED') {
                                  setCheckoutStep('CART');
                                }
                              }}
                              className="w-full py-3.5 px-5 rounded-[10px] bg-[#49E619] hover:bg-[#B9FF2C] text-[#080808] font-mono-tabular text-xs font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                            >
                              <span>ADD TO CART</span>
                              <Plus className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* RIGHT 4 COLUMNS: Sticky Cart, Transparent Dual Breakdown, Checkout & Token Confirmation */}
            <div
              id="your-cart-module"
              className="lg:col-span-4 lg:sticky lg:top-24"
            >
              <div className="rounded-[18px] bg-[#F2F4F3] text-[#122023] border border-white/20 shadow-2xl p-6 sm:p-7">
                {/* =========================================================
                    STATE 3: ORDER CONFIRMED & UNIQUE TOKEN GENERATED
                ========================================================== */}
                {checkoutStep === 'CONFIRMED' && confirmedOrder ? (
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#49E619] text-[#122023] text-xs font-mono-tabular font-bold uppercase tracking-widest mb-4">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>ORDER CONFIRMED ✓</span>
                    </div>

                    <h3 className="font-display-sans uppercase text-2xl font-black text-[#122023]">
                      Thank you for helping us nourish another child.
                    </h3>

                    {/* Prominent Token Box */}
                    <div className="mt-5 rounded-[12px] bg-[#122023] text-white p-5">
                      <span className="text-[10px] font-mono-tabular uppercase tracking-[0.2em] text-white/60 block">
                        YOUR MEAL TOKEN
                      </span>

                      {confirmedTokens.map((tok) => (
                        <div
                          key={tok.id}
                          className="mt-2 flex items-center justify-between gap-2 pt-2 border-t border-white/10 first:border-t-0 first:pt-0"
                        >
                          <span className="font-mono-tabular text-xl sm:text-2xl font-bold text-[#49E619] tracking-wider">
                            {tok.tokenNumber}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCopyToken(tok.tokenNumber)}
                            className="inline-flex items-center gap-1 rounded-[6px] text-[11px] font-mono-tabular uppercase tracking-wider bg-white/10 hover:bg-[#49E619] hover:text-[#080808] px-2.5 py-1.5 text-white transition-colors cursor-pointer"
                          >
                            <Copy className="w-3 h-3" />
                            <span>
                              {copiedToken === tok.tokenNumber ? 'Copied' : 'Copy'}
                            </span>
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Clear Dual-Stream Summary: Customer Meal vs Sponsored Child Meal */}
                    <div className="mt-5 space-y-3 text-xs border-y border-[#122023]/12 py-4">
                      <div className="rounded-[10px] bg-white p-3 border border-[#122023]/10">
                        <span className="font-mono-tabular text-[10px] uppercase tracking-wider text-[#6F6F6F] block">
                          1. YOUR PURCHASED MEAL (FOR YOU)
                        </span>
                        <div className="font-bold text-[#122023] text-sm mt-0.5 flex items-center justify-between">
                          <span>
                            {confirmedTokens[0]?.productName || 'Protein Power Meal'}
                          </span>
                          <span className="font-mono-tabular">
                            ₹{confirmedOrder.totalAmountInr}
                          </span>
                        </div>
                        <div className="mt-2 pt-2 border-t border-[#122023]/10 flex items-center gap-2.5">
                          <div className="w-10 h-10 rounded-[8px] bg-[#F2F4F3] p-0.5 shrink-0 overflow-hidden border border-[#122023]/10">
                            <img
                              src="/src/assets/images/courier_delivery_1791145501426.jpg"
                              alt="Zero Hunger Courier"
                              className="w-full h-full object-contain"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono-tabular font-bold uppercase text-[#188D44] block">
                              ELECTRIC SCOOTER DISPATCH EN ROUTE
                            </span>
                            <span className="text-[11px] text-[#122023]/80">
                              Dispatched hot from Secunderabad Hub to {confirmedOrder.deliveryAddress}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-[10px] bg-[#B9FF2C] p-3 border border-[#122023]/15">
                        <span className="font-mono-tabular text-[10px] uppercase tracking-wider text-[#122023] font-bold block">
                          2. SPONSORED MEAL (FOR A CHILD IN NEED)
                        </span>
                        <div className="font-bold text-[#122023] text-sm mt-0.5">
                          {confirmedOrder.sponsoredMealsCount} nutritious{' '}
                          {confirmedOrder.sponsoredMealsCount === 1 ? 'meal' : 'meals'}{' '}
                          for a child
                        </div>
                        <span className="mt-1 inline-block text-[11px] text-[#122023]/85">
                          Assigned Beneficiary ID:{' '}
                          <strong className="font-mono-tabular text-[#122023]">
                            {confirmedTokens[0]?.beneficiaryId || 'ZH-10482'}
                          </strong>{' '}
                          ({confirmedTokens[0]?.deliveryLocation})
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      <button
                        type="button"
                        onClick={() =>
                          navigate(
                            `/track-meal?token=${encodeURIComponent(
                              confirmedTokens[0]?.tokenNumber || 'ZH-2026-A8F42K'
                            )}`
                          )
                        }
                        className="w-full py-4 px-5 rounded-[10px] bg-[#49E619] hover:bg-[#3cd110] text-[#080808] font-mono-tabular text-xs font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <span>TRACK YOUR IMPACT</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setCheckoutStep('CART')}
                        className="w-full py-3 px-4 rounded-[10px] bg-white hover:bg-[#122023] text-[#122023] hover:text-white border border-[#122023]/20 font-mono-tabular text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                      >
                        ORDER ANOTHER MEAL BOX
                      </button>
                    </div>
                  </div>
                ) : (
                  /* =========================================================
                      STATE 1 & 2: YOUR CART & CHECKOUT
                  ========================================================== */
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-[#122023]/15">
                      <div className="flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4 text-[#188D44]" />
                        <h3 className="font-mono-tabular text-xs font-bold uppercase tracking-[0.2em] text-[#122023]">
                          YOUR CART
                        </h3>
                      </div>
                      <span className="font-mono-tabular text-xs font-bold text-[#122023]/70">
                        {cartCount} {cartCount === 1 ? 'Meal' : 'Meals'}
                      </span>
                    </div>

                    {cart.length === 0 ? (
                      <div className="py-8 text-center">
                        <div className="w-24 h-24 mx-auto mb-3 rounded-[14px] bg-white border border-[#122023]/10 overflow-hidden p-1.5 shadow-sm flex items-center justify-center">
                          <img
                            src="/src/assets/images/courier_delivery_1791145501426.jpg"
                            alt="Zero Hunger Delivery Courier"
                            className="w-full h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <p className="font-display-sans uppercase text-xl font-black text-[#122023]">
                          Choose Your ₹150 Meal Box
                        </p>
                        <p className="text-xs text-[#122023]/70 mt-1 max-w-xs mx-auto leading-relaxed">
                          Add any ₹150 meal box from the menu. Our courier will dispatch it hot while your linked meal feeds a child.
                        </p>
                        <button
                          type="button"
                          onClick={() => addToCart(MEAL_PRODUCTS[0])}
                          className="mt-4 px-5 py-3 rounded-[10px] bg-[#49E619] hover:bg-[#B9FF2C] text-[#080808] font-mono-tabular text-[11px] font-bold uppercase tracking-widest transition-colors cursor-pointer"
                        >
                          + Quick Add Protein Power Meal (₹150)
                        </button>
                      </div>
                    ) : (
                      <>
                        {/* Itemized Cart List */}
                        <div className="divide-y divide-[#122023]/10 my-4 max-h-64 overflow-y-auto pr-1">
                          {cart.map((item) => (
                            <div key={item.product.id} className="py-3.5">
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <h4 className="font-display-sans uppercase text-lg font-black text-[#122023]">
                                    {item.product.name}
                                  </h4>
                                  <span className="font-mono-tabular text-sm font-bold text-[#188D44] block">
                                    ₹{item.product.priceInr}
                                  </span>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removeFromCart(item.product.id)}
                                  aria-label={`Remove ${item.product.name}`}
                                  className="text-[#122023]/50 hover:text-[#122023] transition-colors p-1 cursor-pointer"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              <div className="mt-2.5 flex items-center justify-between text-xs">
                                <span className="text-[#122023]/70 font-mono-tabular">
                                  Quantity: {item.quantity}
                                </span>
                                <div className="flex items-center gap-1.5">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      updateQuantity(
                                        item.product.id,
                                        item.quantity - 1
                                      )
                                    }
                                    aria-label="Decrease quantity"
                                    className="w-6 h-6 rounded-[4px] bg-white border border-[#122023]/20 flex items-center justify-center hover:bg-[#122023] hover:text-white cursor-pointer"
                                  >
                                    <Minus className="w-3 h-3" />
                                  </button>
                                  <span className="font-mono-tabular text-xs font-bold w-5 text-center">
                                    {item.quantity}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      updateQuantity(
                                        item.product.id,
                                        item.quantity + 1
                                      )
                                    }
                                    aria-label="Increase quantity"
                                    className="w-6 h-6 rounded-[4px] bg-white border border-[#122023]/20 flex items-center justify-center hover:bg-[#122023] hover:text-white cursor-pointer"
                                  >
                                    <Plus className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Exact Requested Breakdown: YOUR MEAL vs CHILD MEAL vs TOTAL */}
                        <div className="border-t border-b border-[#122023]/15 py-4 space-y-3.5">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="font-mono-tabular text-xs font-bold uppercase tracking-wider text-[#122023] block">
                                YOUR MEAL
                              </span>
                              <span className="text-[11px] text-[#122023]/70">
                                Prepared fresh for your delivery
                              </span>
                            </div>
                            <span className="font-mono-tabular text-base font-bold text-[#122023]">
                              ₹{cartTotalInr}
                            </span>
                          </div>

                          <div className="flex items-center justify-between rounded-[10px] bg-[#B9FF2C] p-3">
                            <div>
                              <span className="font-mono-tabular text-xs font-bold uppercase tracking-wider text-[#122023] block">
                                CHILD MEAL ({sponsoredMealsCount}×)
                              </span>
                              <span className="text-[11px] text-[#122023] font-semibold">
                                Sponsored by your purchase
                              </span>
                            </div>
                            <div className="text-right">
                              <span className="font-mono-tabular text-xs text-[#122023]/60 line-through block">
                                ₹{cartTotalInr}
                              </span>
                              <span className="font-mono-tabular text-xs font-bold text-[#188D44]">
                                ₹0 EXTRA
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Total Row */}
                        <div className="py-4 flex items-center justify-between">
                          <span className="font-mono-tabular text-sm font-bold uppercase tracking-widest text-[#122023]">
                            TOTAL
                          </span>
                          <span className="font-mono-tabular text-2xl font-bold text-[#122023]">
                            ₹{cartTotalInr}
                          </span>
                        </div>

                        {/* Prominent Message */}
                        <div className="rounded-[10px] bg-[#122023] text-white p-3.5 text-xs leading-relaxed flex items-start gap-2.5">
                          <Heart className="w-4 h-4 text-[#49E619] fill-[#49E619] shrink-0 mt-0.5" />
                          <p>
                            “Your purchase helps us provide a nutritious meal to a
                            child in need.”
                          </p>
                        </div>

                        {/* Checkout Step Toggle or Form */}
                        {checkoutStep === 'CART' ? (
                          <button
                            type="button"
                            onClick={() => setCheckoutStep('CHECKOUT')}
                            className="mt-5 w-full py-4 px-5 rounded-[10px] bg-[#49E619] hover:bg-[#3cd110] text-[#080808] font-mono-tabular text-xs font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                          >
                            <span>PROCEED TO ₹{cartTotalInr} CHECKOUT</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        ) : (
                          <form
                            onSubmit={handleCompletePayment}
                            className="mt-5 pt-5 border-t border-[#122023]/15 space-y-3.5"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-mono-tabular text-[11px] font-bold uppercase tracking-wider text-[#122023]">
                                DELIVERY & PAYMENT DETAILS
                              </span>
                              <button
                                type="button"
                                onClick={() => setCheckoutStep('CART')}
                                className="text-[11px] font-mono-tabular text-[#122023]/70 hover:text-[#122023] cursor-pointer"
                              >
                                ← Back
                              </button>
                            </div>

                            <div>
                              <label className="block text-[11px] font-mono-tabular uppercase text-[#122023]/70 mb-1">
                                Your Name
                              </label>
                              <input
                                type="text"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                className="w-full rounded-[8px] bg-white border border-[#122023]/20 px-3 py-2 text-xs text-[#122023] focus:outline-none focus:border-[#122023]"
                                required
                              />
                            </div>

                            <div className="grid grid-cols-2 gap-2.5">
                              <div>
                                <label className="block text-[11px] font-mono-tabular uppercase text-[#122023]/70 mb-1">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  value={customerEmail}
                                  onChange={(e) => setCustomerEmail(e.target.value)}
                                  className="w-full rounded-[8px] bg-white border border-[#122023]/20 px-3 py-2 text-xs text-[#122023] focus:outline-none focus:border-[#122023]"
                                  required
                                />
                              </div>
                              <div>
                                <label className="block text-[11px] font-mono-tabular uppercase text-[#122023]/70 mb-1">
                                  Phone (SMS/WhatsApp)
                                </label>
                                <input
                                  type="tel"
                                  value={customerPhone}
                                  onChange={(e) => setCustomerPhone(e.target.value)}
                                  className="w-full rounded-[8px] bg-white border border-[#122023]/20 px-3 py-2 text-xs text-[#122023] focus:outline-none focus:border-[#122023]"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-[11px] font-mono-tabular uppercase text-[#122023]/70 mb-1">
                                Your Meal Delivery Address
                              </label>
                              <input
                                type="text"
                                value={deliveryAddress}
                                onChange={(e) =>
                                  setDeliveryAddress(e.target.value)
                                }
                                className="w-full rounded-[8px] bg-white border border-[#122023]/20 px-3 py-2 text-xs text-[#122023] focus:outline-none focus:border-[#122023]"
                                required
                              />
                            </div>

                            <div>
                              <label className="block text-[11px] font-mono-tabular uppercase text-[#122023]/70 mb-1">
                                Payment Method
                              </label>
                              <div className="grid grid-cols-3 gap-2">
                                {(['UPI', 'CARD', 'NET_BANKING'] as const).map(
                                  (method) => (
                                    <button
                                      key={method}
                                      type="button"
                                      onClick={() => setPaymentMethod(method)}
                                      className={`py-2 rounded-[6px] text-[11px] font-mono-tabular font-bold border cursor-pointer ${
                                        paymentMethod === method
                                          ? 'bg-[#122023] text-white border-[#122023]'
                                          : 'bg-white text-[#122023]/70 border-[#122023]/20'
                                      }`}
                                    >
                                      {method.replace('_', ' ')}
                                    </button>
                                  )
                                )}
                              </div>
                            </div>

                            {formError && (
                              <p className="text-xs text-red-600 font-semibold">{formError}</p>
                            )}

                            <button
                              type="submit"
                              className="w-full py-4 px-5 rounded-[10px] bg-[#49E619] hover:bg-[#3cd110] text-[#080808] font-mono-tabular text-xs font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                            >
                              <ShieldCheck className="w-4 h-4" />
                              <span>PAY ₹{cartTotalInr} & GENERATE TOKEN</span>
                            </button>
                          </form>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6-STEP PIPELINE: FROM YOUR PLATE TO A CHILD'S HANDS
      ====================================================================== */}
      <section className="bg-[#080808] py-16 sm:py-24 border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <PlateToHandsSteps />
        </div>
      </section>

      {/* Mobile Floating Cart Pill */}
      {cartCount > 0 && checkoutStep !== 'CONFIRMED' && (
        <div className="fixed bottom-4 left-4 right-4 z-30 lg:hidden">
          <button
            type="button"
            onClick={scrollToCart}
            className="w-full rounded-[12px] bg-[#49E619] text-[#080808] py-4 px-5 shadow-2xl flex items-center justify-between font-mono-tabular text-xs font-bold uppercase tracking-widest cursor-pointer"
          >
            <span>
              {cartCount} {cartCount === 1 ? 'Meal' : 'Meals'} (+{sponsoredMealsCount} Child Meal)
            </span>
            <span>
              VIEW CART · ₹{cartTotalInr} →
            </span>
          </button>
        </div>
      )}
    </div>
  );
};
