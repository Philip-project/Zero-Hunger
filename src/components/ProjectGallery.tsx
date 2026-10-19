import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ScrollReveal } from './ScrollReveal';

export const ProjectGallery: React.FC = () => {
  return (
    <section className="bg-[#080808] text-white py-20 sm:py-28 lg:py-32 border-t border-white/10">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-18">
          <ScrollReveal className="flex flex-col text-left items-start">
            <span className="text-xs font-mono-tabular font-semibold uppercase tracking-[0.2em] mb-4 text-[#49E619]">
              FIELD INITIATIVES · 2022–2026
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.08] text-white max-w-3xl">
              OUR WORK,{' '}
              <span className="italic font-normal text-[#49E619]">
                IN ACTION.
              </span>
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-2xl text-white/70">
              From daily courtyard meal services in Hyderabad to women-led rural
              grain banks across Telangana, explore our six active humanitarian
              programs.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="shrink-0">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-medium tracking-tight border border-white/25 text-white hover:bg-[#49E619] hover:text-[#080808] hover:border-[#49E619] transition-colors duration-300"
            >
              <span>View All 6 Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Asymmetric Editorial Masonry-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-7 lg:gap-9 items-start">
          {PROJECTS.map((project, index) => {
            // Create an asymmetric 7/5 and 5/7 editorial rhythm on desktop
            const isEvenRow = Math.floor(index / 2) % 2 === 0;
            const isLeftCol = index % 2 === 0;

            let colSpanClass = 'md:col-span-6';
            let aspectClass = 'aspect-[4/3]';
            let offsetClass = '';

            if (isEvenRow) {
              colSpanClass = isLeftCol ? 'md:col-span-7' : 'md:col-span-5';
              aspectClass = isLeftCol ? 'aspect-[16/10]' : 'aspect-[4/3]';
              offsetClass = !isLeftCol ? 'md:mt-10' : '';
            } else {
              colSpanClass = isLeftCol ? 'md:col-span-5' : 'md:col-span-7';
              aspectClass = isLeftCol ? 'aspect-[4/3]' : 'aspect-[16/10]';
              offsetClass = isLeftCol ? 'md:mt-6' : '';
            }

            return (
              <ScrollReveal
                key={project.id}
                delay={(index % 2) * 0.12}
                className={`${colSpanClass} ${offsetClass}`}
              >
                <ProjectCard project={project} aspectClass={aspectClass} />
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
