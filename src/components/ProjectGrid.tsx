import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { PROJECTS, ProjectCategory } from '../data/projects';
import { EditorialImage } from './EditorialImage';

const CATEGORIES: ProjectCategory[] = [
  'ALL',
  'FOOD RELIEF',
  'COMMUNITY',
  'EDUCATION',
  'FAMILY SUPPORT',
];

export const ProjectGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');

  const filteredProjects =
    activeCategory === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const getColSpanClass = (index: number) => {
    const row = Math.floor(index / 2);
    const isFirstInRow = index % 2 === 0;
    if (row % 2 === 0) {
      return isFirstInRow ? 'lg:col-span-8' : 'lg:col-span-4';
    }
    return isFirstInRow ? 'lg:col-span-4' : 'lg:col-span-8';
  };

  return (
    <section
      id="photographic-archive"
      className="bg-[#122023] text-white py-20 sm:py-28 border-t border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <span className="block font-mono-tabular text-[11px] font-bold uppercase tracking-[0.2em] text-[#49E619] mb-3">
              PHOTOGRAPHIC ARCHIVE
            </span>
            <h2 className="font-display-sans text-4xl sm:text-5xl lg:text-[3.5rem] font-black uppercase tracking-[-0.04em] text-white leading-none">
              GLIMPSES OF <span className="text-[#49E619]">HOPE</span>
            </h2>
          </div>

          <p className="font-mono-tabular text-xs text-white/75 leading-relaxed max-w-sm">
            Documenting resilience, warm smiles, and structural support efforts
            across impacted regions. Capturing pure beauty and joy.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-white/10">
          <div
            role="tablist"
            aria-label="Filter projects by category"
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
                  className={`px-4 py-2 rounded-[8px] font-mono-tabular text-[11px] font-bold uppercase tracking-[0.16em] whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#49E619] text-[#080808]'
                      : 'bg-[#080808] text-white/75 border border-white/15 hover:border-[#49E619] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="font-mono-tabular text-[11px] uppercase tracking-[0.16em] text-[#B9FF2C]">
            Showing {filteredProjects.length}{' '}
            {filteredProjects.length === 1 ? 'Moment' : 'Moments'}
          </div>
        </div>

        {/* Alternating Asymmetric Bento Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={getColSpanClass(index)}
              >
                <Link
                  to={`/projects/${project.slug}`}
                  aria-label={`Explore ${project.archiveTitle} — ${project.title}`}
                  className="group relative block rounded-[18px] overflow-hidden bg-[#080808] border border-white/12 shadow-2xl h-[340px] sm:h-[400px] lg:h-[430px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[#49E619] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#49E619]"
                >
                  {/* Background Documentary Photograph */}
                  <EditorialImage
                    src={project.heroImage}
                    alt={`${project.archiveTitle} — ${project.title} in ${project.location}`}
                    className="w-full h-full"
                    imgClassName="grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />

                  {/* Dark Bottom Scrim Overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5 transition-opacity duration-300 group-hover:from-black/95"
                    aria-hidden="true"
                  />

                  {/* Bottom Content Bar */}
                  <div className="absolute bottom-6 left-6 right-6 sm:bottom-7 sm:left-7 sm:right-7 flex items-end justify-between gap-4">
                    <div>
                      <span className="block font-mono-tabular text-[10px] font-bold uppercase tracking-[0.2em] text-[#49E619] mb-1.5">
                        {project.momentLabel}
                      </span>
                      <h3 className="font-display-sans uppercase text-xl sm:text-2xl lg:text-[1.65rem] font-black text-white group-hover:text-[#B9FF2C] transition-colors leading-tight">
                        {project.archiveTitle}
                      </h3>
                      <p className="text-xs text-white/80 mt-1 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-10 transition-all duration-300 overflow-hidden">
                        {project.title} — {project.location}
                      </p>
                    </div>

                    {/* Circular Right Arrow Button */}
                    <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/45 bg-white/10 backdrop-blur-xs flex items-center justify-center text-white shrink-0 transition-all duration-300 group-hover:bg-[#49E619] group-hover:text-[#080808] group-hover:border-[#49E619]">
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
