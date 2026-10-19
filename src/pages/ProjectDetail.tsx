import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { EditorialImage } from '../components/EditorialImage';
import { ScrollReveal } from '../components/ScrollReveal';
import { Button } from '../components/Button';
import { SupportTab } from '../components/SupportModal';

interface ProjectDetailProps {
  onOpenSupport: (tab?: SupportTab, projectSlug?: string) => void;
}

const STAT_CARD_COLORS = [
  'bg-[#49E619] text-[#122023]',
  'bg-[#4EDBE2] text-[#122023]',
  'bg-[#B9FF2C] text-[#122023]',
  'bg-[#F2F4F3] text-[#122023]',
];

const TIER_CARD_COLORS = [
  'bg-[#49E619] text-[#122023]',
  'bg-[#4EDBE2] text-[#122023]',
  'bg-[#B9FF2C] text-[#122023]',
];

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ onOpenSupport }) => {
  const { slug } = useParams<{ slug: string }>();
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    return <Navigate to="/projects" replace />;
  }

  const project = PROJECTS[projectIndex];
  const prevProject =
    PROJECTS[(projectIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  const statList = [
    { value: project.stats.mealsServed, label: 'Meals Served' },
    { value: project.stats.familiesReached, label: 'Families Reached' },
    { value: project.stats.volunteers, label: 'Volunteers' },
    { value: project.stats.communities, label: 'Communities' },
  ];

  return (
    <div className="bg-[#080808] text-white">
      {/* FULL-SCREEN EDITORIAL HERO WITH OVERLAY */}
      <section className="relative min-h-[72vh] sm:min-h-[80vh] flex items-end bg-[#080808] text-white overflow-hidden">
        <div className="absolute inset-0">
          <EditorialImage
            src={project.heroImage}
            alt={project.title}
            priority
            className="w-full h-full"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-[#080808]/35"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-[1360px] w-full mx-auto px-5 sm:px-8 lg:px-12 pt-36 pb-16 sm:pb-24">
          <ScrollReveal>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono-tabular font-bold uppercase tracking-[0.2em] text-white/80 hover:text-[#49E619] transition-colors mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#49E619]" />
              <span>Back to All Projects</span>
            </Link>

            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono-tabular uppercase tracking-[0.2em] text-white/80 mb-4">
              <span className="text-[#49E619] font-bold">
                {project.category}
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B9FF2C]" />
                {project.location}
              </span>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
            </div>

            <h1 className="font-display-sans uppercase text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[0.94] text-white max-w-4xl">
              {project.title}
            </h1>

            <p className="mt-6 text-base sm:text-xl text-white/85 max-w-2xl leading-relaxed">
              {project.shortDescription}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* PROJECT STATISTICS LEDGER BAR */}
      <section className="bg-[#122023] border-y border-white/10 py-12 sm:py-16">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {statList.map((stat, idx) => (
              <ScrollReveal
                key={stat.label}
                delay={idx * 0.08}
                className={`rounded-[16px] p-6 ${STAT_CARD_COLORS[idx % STAT_CARD_COLORS.length]}`}
              >
                <div className="font-display-sans text-3xl sm:text-5xl font-black tracking-[-0.04em] leading-none">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs font-mono-tabular font-bold uppercase tracking-wider opacity-80">
                  {stat.label}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL NARRATIVE: THE CHALLENGE / THE APPROACH / THE IMPACT */}
      <section className="bg-white text-[#080808] py-20 sm:py-28">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="space-y-20 sm:space-y-24">
            {/* THE CHALLENGE */}
            <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pt-8 border-t border-[#122023]/12">
              <div className="lg:col-span-4">
                <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.2em] text-[#188D44] block mb-2">
                  01 / CONTEXT
                </span>
                <h2 className="font-display-sans uppercase text-2xl sm:text-4xl font-black text-[#080808] tracking-tight">
                  THE CHALLENGE
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-5 text-base sm:text-lg text-[#080808]/85 leading-relaxed max-w-2xl">
                {project.challenge.map((paragraph, index) => (
                  <p
                    key={index}
                    className={
                      index === 0
                        ? 'first-letter:text-5xl first-letter:font-display-sans first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#188D44]'
                        : 'text-[#122023]/80'
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            {/* THE APPROACH */}
            <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pt-12 border-t border-[#122023]/12">
              <div className="lg:col-span-4">
                <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.2em] text-[#188D44] block mb-2">
                  02 / METHODOLOGY
                </span>
                <h2 className="font-display-sans uppercase text-2xl sm:text-4xl font-black text-[#080808] tracking-tight">
                  THE APPROACH
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-5 text-base sm:text-lg text-[#122023]/80 leading-relaxed max-w-2xl">
                {project.approach.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>

            {/* PULL QUOTE */}
            <ScrollReveal className="my-12 p-8 sm:p-14 rounded-[18px] bg-[#122023] text-white border-l-4 border-[#49E619]">
              <blockquote className="font-display-sans uppercase text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight max-w-4xl">
                “{project.pullQuote.quote}”
              </blockquote>
              <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm font-mono-tabular uppercase tracking-wider text-white/75">
                <span className="font-bold text-[#49E619]">
                  {project.pullQuote.author}
                </span>
                <span aria-hidden="true">·</span>
                <span>{project.pullQuote.role}</span>
              </div>
            </ScrollReveal>

            {/* THE IMPACT */}
            <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pt-12 border-t border-[#122023]/12">
              <div className="lg:col-span-4">
                <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.2em] text-[#188D44] block mb-2">
                  03 / VERIFIED OUTCOMES
                </span>
                <h2 className="font-display-sans uppercase text-2xl sm:text-4xl font-black text-[#080808] tracking-tight">
                  THE IMPACT
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-5 text-base sm:text-lg text-[#122023]/80 leading-relaxed max-w-2xl">
                {project.impactNarrative.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* DOCUMENTARY IMAGE GALLERY */}
      <section className="bg-[#080808] text-white py-20 sm:py-28 border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal className="mb-12">
            <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.2em] text-[#49E619] block mb-2">
              DOCUMENTARY PLATES
            </span>
            <h2 className="font-display-sans uppercase text-3xl sm:text-5xl font-black text-white">
              Field Documentation
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {project.gallery.map((item, idx) => (
              <ScrollReveal
                key={idx}
                delay={idx * 0.1}
                className={idx === 0 ? 'md:col-span-12' : 'md:col-span-6'}
              >
                <div
                  className={`group rounded-[18px] overflow-hidden border border-white/15 ${
                    idx === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <EditorialImage
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full"
                    imgClassName="grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <p className="mt-2.5 text-xs font-mono-tabular text-white/70">
                  {item.caption}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOUR SUPPORT MAKES POSSIBLE */}
      <section className="bg-[#F2F4F3] text-[#122023] py-20 sm:py-28 border-t border-[#122023]/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono-tabular font-bold uppercase tracking-[0.2em] text-[#188D44] block mb-3">
              DIRECT STEWARDSHIP
            </span>
            <h2 className="font-display-sans uppercase text-3xl sm:text-5xl font-black text-[#122023] tracking-[-0.04em] leading-[0.95]">
              WHAT YOUR SUPPORT MAKES POSSIBLE
            </h2>
            <p className="mt-4 text-base text-[#122023]/75 leading-relaxed">
              Every contribution to the {project.title} is ring-fenced for direct food procurement, local kitchen operations, and last-mile community distribution.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.supportPossibilities.map((tier, idx) => (
              <ScrollReveal
                key={tier.title}
                delay={idx * 0.1}
                className={`p-8 rounded-[18px] ${TIER_CARD_COLORS[idx % TIER_CARD_COLORS.length]} flex flex-col justify-between shadow-md`}
              >
                <div>
                  <span className="font-display-sans text-4xl font-black text-[#122023]">
                    {tier.amount}
                  </span>
                  <h3 className="mt-4 font-display-sans uppercase text-2xl font-black text-[#122023]">
                    {tier.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#122023]/85 font-medium leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#122023]/15">
                  <button
                    type="button"
                    onClick={() => onOpenSupport('donate', project.slug)}
                    className="inline-flex items-center gap-2 text-xs font-mono-tabular font-bold uppercase tracking-wider text-[#122023] hover:opacity-75 transition-opacity cursor-pointer"
                  >
                    <span>Sponsor This Tier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-14 pt-10 border-t border-[#122023]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-display-sans uppercase text-2xl font-black text-[#122023]">
                Ready to stand behind {project.title}?
              </h3>
              <p className="text-sm text-[#122023]/75 mt-1">
                100% transparent community ledger · 80G tax-exempt receipt issued immediately.
              </p>
            </div>
            <Button
              type="button"
              variant="primary"
              size="lg"
              fullWidthMobile
              onClick={() => onOpenSupport('donate', project.slug)}
            >
              <span>Support This Project</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* PREVIOUS / NEXT PROJECT NAVIGATION */}
      <section className="bg-[#080808] text-white border-t border-white/10">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <Link
            to={`/projects/${prevProject.slug}`}
            className="group p-8 sm:p-12 lg:p-16 flex flex-col justify-between hover:bg-white/5 transition-colors"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono-tabular uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 text-[#49E619] transition-transform duration-200 group-hover:-translate-x-1" />
              <span>Previous Project</span>
            </div>
            <div className="mt-6">
              <h3 className="font-display-sans uppercase text-2xl sm:text-3xl font-black text-white group-hover:text-[#49E619] transition-colors">
                {prevProject.title}
              </h3>
              <p className="text-xs text-white/60 mt-1">{prevProject.location}</p>
            </div>
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="group p-8 sm:p-12 lg:p-16 flex flex-col justify-between md:items-end md:text-right hover:bg-white/5 transition-colors"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono-tabular uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
              <span>Next Project</span>
              <ArrowRight className="w-4 h-4 text-[#49E619] transition-transform duration-200 group-hover:translate-x-1" />
            </div>
            <div className="mt-6">
              <h3 className="font-display-sans uppercase text-2xl sm:text-3xl font-black text-white group-hover:text-[#49E619] transition-colors">
                {nextProject.title}
              </h3>
              <p className="text-xs text-white/60 mt-1">{nextProject.location}</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};
