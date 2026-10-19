import React from 'react';
import { Link } from 'react-router-dom';
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';

const EXPLORE_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Buy 1 Give 1 Meal Box', path: '/meal-box' },
  { label: 'Celebrate Birthdays & Anniversaries', path: '/celebrate-and-give' },
  { label: 'Donate Clothes & Rescue Food', path: '/celebrate-and-give?tab=CLOTH_DONATION' },
  { label: 'CSR & 80G Tax Benefits', path: '/csr-tax-benefits' },
  { label: 'Track Sponsored Meal', path: '/track-meal' },
  { label: 'Projects & Impact', path: '/projects' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/about#contact' },
];

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'YouTube', href: 'https://youtube.com', icon: Youtube },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080808] text-white border-t border-white/10 pt-20 pb-12">
      <div className="w-full max-w-[1360px] 2xl:max-w-[1560px] mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Left Brand Column */}
          <div className="lg:col-span-5 pr-0 lg:pr-12">
            <Link
              to="/"
              className="font-display-sans uppercase text-2xl sm:text-3xl font-black tracking-[-0.04em] text-white inline-block"
            >
              ZERO <span className="text-[#49E619]">HUNGER</span>
            </Link>
            <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed max-w-sm">
              Working toward a world where every person has access to nutritious food.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Zero Hunger on ${social.label}`}
                    className="w-10 h-10 rounded-[8px] border border-white/15 flex items-center justify-center text-white/75 hover:text-[#080808] hover:border-[#49E619] hover:bg-[#49E619] transition-colors duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* EXPLORE Column */}
          <div className="lg:col-span-2">
            <h3 className="font-mono-tabular text-xs font-bold uppercase tracking-[0.2em] text-[#49E619] mb-5">
              EXPLORE
            </h3>
            <ul className="space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-[#49E619] transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONNECT Column */}
          <div className="lg:col-span-2">
            <h3 className="font-mono-tabular text-xs font-bold uppercase tracking-[0.2em] text-[#49E619] mb-5">
              CONNECT
            </h3>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:text-[#49E619] transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT Column */}
          <div className="lg:col-span-3">
            <h3 className="font-mono-tabular text-xs font-bold uppercase tracking-[0.2em] text-[#49E619] mb-5">
              CONTACT
            </h3>
            <ul className="space-y-3.5 text-sm text-white/70">
              <li>
                <a
                  href="mailto:hello@zerohunger.org"
                  className="hover:text-white transition-colors inline-flex items-center gap-2.5"
                >
                  <Mail className="w-4 h-4 text-[#49E619] shrink-0" />
                  <span>hello@zerohunger.org</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919848024190"
                  className="hover:text-white transition-colors inline-flex items-center gap-2.5 font-mono-tabular"
                >
                  <Phone className="w-4 h-4 text-[#49E619] shrink-0" />
                  <span>+91 98480 24190</span>
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#49E619] shrink-0 mt-0.5" />
                <span>Secunderabad & Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2026 Zero Hunger Initiative</p>
          <p className="font-mono-tabular uppercase tracking-widest text-xs text-[#49E619]">
            MADE WITH PURPOSE · HYDERABAD
          </p>
        </div>
      </div>
    </footer>
  );
};
