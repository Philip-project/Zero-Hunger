import React, { useEffect, useState } from 'react';
import { X, ArrowRight, CheckCircle2, HeartHandshake, Users, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/projects';

export type SupportTab = 'donate' | 'volunteer';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: SupportTab;
  preselectedProjectSlug?: string;
}

const PRESET_AMOUNTS = [
  { value: 750, meals: 30, label: '30 Warm Meals' },
  { value: 1500, meals: 60, label: '60 Warm Meals' },
  { value: 3000, meals: 120, label: '1 Family / Month' },
  { value: 12000, meals: 480, label: 'Full Community Drive' },
];

export const SupportModal: React.FC<SupportModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'donate',
  preselectedProjectSlug = 'all',
}) => {
  const [activeTab, setActiveTab] = useState<SupportTab>(initialTab);
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [amount, setAmount] = useState<number>(1500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<string>(preselectedProjectSlug);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [volunteerRole, setVolunteerRole] = useState('Morning Kitchen Prep (Secunderabad)');
  const [volunteerPhone, setVolunteerPhone] = useState('');
  const [volunteerCity, setVolunteerCity] = useState('Hyderabad');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    if (preselectedProjectSlug) {
      setSelectedProject(preselectedProjectSlug);
    }
  }, [preselectedProjectSlug]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const effectiveAmount = customAmount ? Math.max(100, Number(customAmount) || 0) : amount;
  const estimatedMeals = Math.max(1, Math.floor(effectiveAmount / 25));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="support-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#080808]/80 backdrop-blur-xs"
            onClick={handleResetAndClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-2xl rounded-[18px] bg-white border border-[#122023]/15 shadow-2xl overflow-hidden my-8"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 bg-[#122023] text-white border-b border-white/10">
              <div>
                <span className="text-[11px] font-mono-tabular font-bold uppercase tracking-[0.2em] text-[#49E619] block">
                  ZERO HUNGER INITIATIVE
                </span>
                <h2
                  id="support-modal-title"
                  className="font-display-sans uppercase text-xl sm:text-2xl font-black text-white mt-0.5"
                >
                  Support the Mission
                </h2>
              </div>
              <button
                type="button"
                onClick={handleResetAndClose}
                aria-label="Close support dialog"
                className="w-10 h-10 rounded-[8px] flex items-center justify-center text-white/70 hover:text-[#080808] hover:bg-[#49E619] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Interactive Mode Switcher */}
            {!submitted && (
              <div className="grid grid-cols-2 border-b border-[#122023]/10 bg-[#F2F4F3]">
                <button
                  type="button"
                  onClick={() => setActiveTab('donate')}
                  className={`py-3.5 px-4 text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                    activeTab === 'donate'
                      ? 'bg-white text-[#080808] border-b-2 border-[#49E619]'
                      : 'text-[#6F6F6F] hover:text-[#080808]'
                  }`}
                >
                  <HeartHandshake className="w-4 h-4 text-[#188D44]" />
                  <span>Sponsor Nutritious Meals</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('volunteer')}
                  className={`py-3.5 px-4 text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                    activeTab === 'volunteer'
                      ? 'bg-white text-[#080808] border-b-2 border-[#49E619]'
                      : 'text-[#6F6F6F] hover:text-[#080808]'
                  }`}
                >
                  <Users className="w-4 h-4 text-[#188D44]" />
                  <span>Join as Field Volunteer</span>
                </button>
              </div>
            )}

            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="py-6 text-center">
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center bg-[#49E619] text-[#122023]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.2em] text-[#188D44]">
                    {activeTab === 'donate' ? 'PLEDGE REGISTERED' : 'VOLUNTEER ROSTER UPDATED'}
                  </span>
                  <h3 className="font-display-sans uppercase text-2xl sm:text-3xl font-black text-[#080808] mt-2">
                    {activeTab === 'donate'
                      ? `Thank you, ${donorName || 'Friend of Zero Hunger'}.`
                      : `Welcome to the field team, ${donorName || 'Volunteer'}.`}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#6F6F6F] max-w-md mx-auto leading-relaxed">
                    {activeTab === 'donate'
                      ? `Your ${frequency === 'monthly' ? 'monthly' : 'one-time'} contribution of ₹${effectiveAmount.toLocaleString('en-IN')} will directly fund approximately ${estimatedMeals} freshly cooked, nutritious meals. We have sent your 80G tax-exempt receipt details to ${donorEmail}.`
                      : `Our Hyderabad field coordinator will reach out to ${donorEmail} within 24 hours with your orientation schedule for ${volunteerRole}.`}
                  </p>
                  <div className="mt-8 pt-6 border-t border-[#122023]/10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={handleResetAndClose}
                      className="px-8 py-3.5 rounded-[10px] bg-[#49E619] text-[#080808] text-sm font-bold hover:bg-[#B9FF2C] transition-colors cursor-pointer"
                    >
                      Return to Zero Hunger
                    </button>
                  </div>
                </div>
              ) : activeTab === 'donate' ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Frequency & Allocation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#6F6F6F] mb-2">
                        Contribution Frequency
                      </label>
                      <div className="grid grid-cols-2 p-1 rounded-[10px] bg-[#F2F4F3] border border-[#122023]/10">
                        <button
                          type="button"
                          onClick={() => setFrequency('once')}
                          className={`py-2 rounded-[8px] text-xs font-bold transition-colors cursor-pointer ${
                            frequency === 'once'
                              ? 'bg-[#122023] text-white'
                              : 'text-[#080808] hover:bg-white'
                          }`}
                        >
                          One-Time
                        </button>
                        <button
                          type="button"
                          onClick={() => setFrequency('monthly')}
                          className={`py-2 rounded-[8px] text-xs font-bold transition-colors cursor-pointer ${
                            frequency === 'monthly'
                              ? 'bg-[#49E619] text-[#080808]'
                              : 'text-[#080808] hover:bg-white'
                          }`}
                        >
                          Monthly Impact
                        </button>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="project-allocation"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#6F6F6F] mb-2"
                      >
                        Direct Toward Program
                      </label>
                      <select
                        id="project-allocation"
                        value={selectedProject}
                        onChange={(e) => setSelectedProject(e.target.value)}
                        className="w-full h-[42px] px-3 rounded-[10px] bg-white border border-[#122023]/20 text-sm text-[#080808] focus:outline-none focus:border-[#122023]"
                      >
                        <option value="all">Where Needed Most (All Programs)</option>
                        {PROJECTS.map((proj) => (
                          <option key={proj.slug} value={proj.slug}>
                            {proj.title} ({proj.location})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preset Amounts */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#6F6F6F] mb-2">
                      Select Meal Sponsorship Amount (INR)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {PRESET_AMOUNTS.map((preset) => {
                        const isSelected = !customAmount && amount === preset.value;
                        return (
                          <button
                            key={preset.value}
                            type="button"
                            onClick={() => {
                              setAmount(preset.value);
                              setCustomAmount('');
                            }}
                            className={`p-3 rounded-[10px] text-left border transition-all cursor-pointer ${
                              isSelected
                                ? 'border-[#122023] bg-[#B9FF2C]'
                                : 'border-[#122023]/15 hover:border-[#122023]/40 bg-white'
                            }`}
                          >
                            <div className="font-mono-tabular text-base font-bold text-[#080808]">
                              ₹{preset.value.toLocaleString('en-IN')}
                            </div>
                            <div className="text-[11px] font-medium text-[#122023]/80 mt-0.5">
                              {preset.label}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Custom Amount + Impact Callout */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center p-4 rounded-[12px] bg-[#F2F4F3] border border-[#122023]/10">
                    <div className="sm:col-span-5">
                      <label
                        htmlFor="custom-amount"
                        className="block text-[11px] font-semibold uppercase tracking-wider text-[#6F6F6F] mb-1"
                      >
                        Or Enter Custom Amount (₹)
                      </label>
                      <input
                        id="custom-amount"
                        type="number"
                        min={100}
                        placeholder="e.g. 2500"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full px-3 py-2 rounded-[8px] bg-white border border-[#122023]/20 text-sm font-mono-tabular text-[#080808] focus:outline-none focus:border-[#122023]"
                      />
                    </div>
                    <div className="sm:col-span-7 sm:pl-4 sm:border-l border-[#122023]/10">
                      <div className="text-xs uppercase tracking-wider text-[#6F6F6F]">
                        Direct Nutritional Equivalent
                      </div>
                      <div className="font-display-sans uppercase text-xl font-black text-[#080808] mt-0.5">
                        <span className="text-[#188D44] font-mono-tabular">{estimatedMeals}</span>{' '}
                        Freshly Cooked Meals
                      </div>
                      <p className="text-xs text-[#6F6F6F] mt-0.5">
                        88% goes directly to whole grains, pulses, and kitchen operations.
                      </p>
                    </div>
                  </div>

                  {/* Donor Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="donor-name"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#6F6F6F] mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="donor-name"
                        type="text"
                        required
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        placeholder="Ananya Sharma"
                        className="w-full px-3.5 py-2.5 rounded-[8px] bg-white border border-[#122023]/20 text-sm text-[#080808] focus:outline-none focus:border-[#122023]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="donor-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#6F6F6F] mb-1.5"
                      >
                        Email Address (for Receipt) *
                      </label>
                      <input
                        id="donor-email"
                        type="email"
                        required
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        placeholder="ananya@example.com"
                        className="w-full px-3.5 py-2.5 rounded-[8px] bg-white border border-[#122023]/20 text-sm text-[#080808] focus:outline-none focus:border-[#122023]"
                      />
                    </div>
                  </div>

                  {/* 80G Tax PAN & Dedication options */}
                  <div className="p-3.5 rounded-[10px] bg-[#B9FF2C]/30 border border-[#122023]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div>
                      <span className="font-bold text-[#080808] block">Celebrating a Birthday, Anniversary or Memorial?</span>
                      <span className="text-[#6F6F6F]">Have beneficiaries hold a personalized placard with your message.</span>
                    </div>
                    <a
                      href="/celebrate-and-give"
                      onClick={() => handleResetAndClose()}
                      className="px-3.5 py-1.5 rounded-[6px] bg-[#122023] text-white font-bold text-[11px] whitespace-nowrap hover:bg-[#080808] text-center"
                    >
                      Personalize Placard →
                    </a>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-2 text-xs text-[#6F6F6F]">
                      <ShieldCheck className="w-4 h-4 text-[#188D44] shrink-0" />
                      <span>50% 80G Tax Exemption · Form 10BE & MCA CSR-1 Compliant</span>
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[10px] bg-[#49E619] text-[#080808] text-sm font-bold hover:bg-[#B9FF2C] transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <span>
                        Complete ₹{effectiveAmount.toLocaleString('en-IN')}{' '}
                        {frequency === 'monthly' ? 'Monthly ' : ''}Sponsorship
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <p className="text-sm text-[#6F6F6F] leading-relaxed">
                    Every morning at 5:30 AM, citizens across Hyderabad and neighbouring districts join our culinary stewards and distribution teams. Choose how you would like to serve.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="vol-name"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#6F6F6F] mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="vol-name"
                        type="text"
                        required
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        placeholder="Karthik Rao"
                        className="w-full px-3.5 py-2.5 rounded-[8px] bg-white border border-[#122023]/20 text-sm text-[#080808] focus:outline-none focus:border-[#122023]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="vol-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#6F6F6F] mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="vol-email"
                        type="email"
                        required
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        placeholder="karthik@example.com"
                        className="w-full px-3.5 py-2.5 rounded-[8px] bg-white border border-[#122023]/20 text-sm text-[#080808] focus:outline-none focus:border-[#122023]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="vol-phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#6F6F6F] mb-1.5"
                      >
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="vol-phone"
                        type="tel"
                        required
                        value={volunteerPhone}
                        onChange={(e) => setVolunteerPhone(e.target.value)}
                        placeholder="+91 98480 XXXXX"
                        className="w-full px-3.5 py-2.5 rounded-[8px] bg-white border border-[#122023]/20 text-sm text-[#080808] focus:outline-none focus:border-[#122023]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="vol-city"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#6F6F6F] mb-1.5"
                      >
                        District / Base Location
                      </label>
                      <input
                        id="vol-city"
                        type="text"
                        value={volunteerCity}
                        onChange={(e) => setVolunteerCity(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-[8px] bg-white border border-[#122023]/20 text-sm text-[#080808] focus:outline-none focus:border-[#122023]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="vol-role"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#6F6F6F] mb-1.5"
                    >
                      Preferred Field Assignment
                    </label>
                    <select
                      id="vol-role"
                      value={volunteerRole}
                      onChange={(e) => setVolunteerRole(e.target.value)}
                      className="w-full h-[42px] px-3 rounded-[8px] bg-white border border-[#122023]/20 text-sm text-[#080808] focus:outline-none focus:border-[#122023]"
                    >
                      <option value="Morning Kitchen Prep (Secunderabad)">
                        Morning Kitchen Prep · Secunderabad Flagship (5:30 AM – 8:30 AM)
                      </option>
                      <option value="Hospital Courtyard Meal Service">
                        Hospital Courtyard Meal Service · Hyderabad (11:30 AM – 2:00 PM)
                      </option>
                      <option value="Rural School Nutrition Route">
                        Rural School Nutrition Route · Ranga Reddy Cluster
                      </option>
                      <option value="Emergency Flood Relief Standby Roster">
                        Emergency Monsoon & Flood Relief Standby Roster
                      </option>
                    </select>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[10px] bg-[#49E619] text-[#080808] text-sm font-bold hover:bg-[#B9FF2C] transition-colors cursor-pointer"
                    >
                      <span>Register for Field Orientation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
