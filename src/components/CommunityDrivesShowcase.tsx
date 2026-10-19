import React from 'react';
import { Link } from 'react-router-dom';
import {
  Cake,
  Shirt,
  Truck,
  Building2,
  ArrowRight,
  PhoneCall,
  Sparkles,
  ShieldCheck,
  FileText,
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const CommunityDrivesShowcase: React.FC = () => {
  return (
    <section className="bg-[#080808] text-white py-20 sm:py-28 border-t border-white/10">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.22em] text-[#49E619] block mb-3">
            COMMUNITY GIVING & DIGNITY DRIVES
          </span>
          <h2 className="font-display-sans uppercase text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] leading-[0.94] text-white">
            MORE WAYS TO <span className="text-[#49E619]">SERVE.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed">
            Turn your personal birthdays and wedding anniversaries into hot feasts where beneficiaries hold your custom placards, donate clean clothes at drop boxes, or call our rescue vans for leftover event food.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Occasion Sponsorship with Placards */}
          <ScrollReveal delay={0.08} className="h-full">
            <div className="rounded-[18px] bg-[#122023] border border-white/15 p-7 flex flex-col justify-between h-full hover:border-[#49E619] transition-all group">
              <div>
                <div className="w-12 h-12 rounded-[12px] bg-[#49E619] text-[#122023] flex items-center justify-center mb-5 font-black">
                  <Cake className="w-6 h-6" />
                </div>
                <span className="font-mono-tabular text-[10px] font-bold uppercase tracking-widest text-[#49E619] block mb-1">
                  CUSTOM PLACARDS & GRATITUDE
                </span>
                <h3 className="font-display-sans uppercase text-2xl font-black text-white group-hover:text-[#49E619] transition-colors leading-tight">
                  Celebrate Birthdays & Anniversaries
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-white/75 leading-relaxed">
                  Sponsor 25 to 500 meals on your special day. Children and elders hold personalized physical placards with your message and record thank-you videos sent to your WhatsApp.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <Link
                  to="/celebrate-and-give"
                  className="font-mono-tabular text-xs font-bold uppercase tracking-wider text-[#49E619] hover:text-[#B9FF2C] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Design Placard & Sponsor</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Cloth Donation */}
          <ScrollReveal delay={0.16} className="h-full">
            <div className="rounded-[18px] bg-[#122023] border border-white/15 p-7 flex flex-col justify-between h-full hover:border-[#4EDBE2] transition-all group">
              <div>
                <div className="w-12 h-12 rounded-[12px] bg-[#4EDBE2] text-[#122023] flex items-center justify-center mb-5 font-black">
                  <Shirt className="w-6 h-6" />
                </div>
                <span className="font-mono-tabular text-[10px] font-bold uppercase tracking-widest text-[#4EDBE2] block mb-1">
                  VASTRA DAAN · DROP BOXES & PICKUP
                </span>
                <h3 className="font-display-sans uppercase text-2xl font-black text-white group-hover:text-[#4EDBE2] transition-colors leading-tight">
                  Donate New or Gently Used Clothes
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-white/75 leading-relaxed">
                  Drop wearable clothes and blankets at our 4 monitored steel bins in Secunderabad, Banjara Hills, Hitec City, and Afzalgunj—or schedule a free doorstep van pickup.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <Link
                  to="/celebrate-and-give?tab=CLOTH_DONATION"
                  className="font-mono-tabular text-xs font-bold uppercase tracking-wider text-[#4EDBE2] hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Drop-Off Bins & Free Pickup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Leftover Food Rescue */}
          <ScrollReveal delay={0.24} className="h-full">
            <div className="rounded-[18px] bg-[#122023] border border-white/15 p-7 flex flex-col justify-between h-full hover:border-[#B9FF2C] transition-all group">
              <div>
                <div className="w-12 h-12 rounded-[12px] bg-[#B9FF2C] text-[#122023] flex items-center justify-center mb-5 font-black">
                  <Truck className="w-6 h-6" />
                </div>
                <span className="font-mono-tabular text-[10px] font-bold uppercase tracking-widest text-[#B9FF2C] block mb-1">
                  24/7 RAPID VEHICLE DISPATCH
                </span>
                <h3 className="font-display-sans uppercase text-2xl font-black text-white group-hover:text-[#B9FF2C] transition-colors leading-tight">
                  Leftover Food Fast Rescue
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-white/75 leading-relaxed">
                  Have excess cooked food from weddings, parties, or corporate cafeterias? Raise a rescue request or call our hotline. Our thermal vans pick it up within 45 minutes.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <Link
                  to="/celebrate-and-give?tab=LEFTOVER_RESCUE"
                  className="font-mono-tabular text-xs font-bold uppercase tracking-wider text-[#B9FF2C] hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Request Emergency Pickup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4: Corporate CSR & 80G Tax Benefits */}
          <ScrollReveal delay={0.32} className="h-full">
            <div className="rounded-[18px] bg-[#122023] border border-white/15 p-7 flex flex-col justify-between h-full hover:border-[#49E619] transition-all group">
              <div>
                <div className="w-12 h-12 rounded-[12px] bg-white text-[#122023] flex items-center justify-center mb-5 font-black">
                  <Building2 className="w-6 h-6 text-[#188D44]" />
                </div>
                <span className="font-mono-tabular text-[10px] font-bold uppercase tracking-widest text-[#49E619] block mb-1">
                  MCA CSR-1 & SECTION 80G(5)
                </span>
                <h3 className="font-display-sans uppercase text-2xl font-black text-white group-hover:text-[#49E619] transition-colors leading-tight">
                  CSR & Corporate Tax Benefits
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-white/75 leading-relaxed">
                  50% tax deduction on donations. We provide 80G certificate, 12A exemption, MCA CSR-1 registration, Form 10BE, CA-audited statements, and bilateral MoUs.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <Link
                  to="/csr-tax-benefits"
                  className="font-mono-tabular text-xs font-bold uppercase tracking-wider text-white hover:text-[#49E619] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Download Document Kit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
