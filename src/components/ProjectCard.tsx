import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../data/projects';
import { EditorialImage } from './EditorialImage';

interface ProjectCardProps {
  project: Project;
  aspectClass?: string;
}

interface TileTheme {
  categoryText: string;
  hoverTitleText: string;
  hoverExploreText: string;
  hoverBadgeBg: string;
  hoverBorder: string;
  impactBadgeText: string;
}

/**
 * Maps each project tile (01–06) to the exact palette from the
 * "HOW YOUR MEAL CREATES IMPACT" (PlateToHandsSteps) cards:
 * - Tile 01 (Community Meal Program): #49E619 (Choose Your ₹150 Meal Box color)
 * - Tile 02 (School Nutrition Support): #4EDBE2 (1-for-1 Dual Checkout color)
 * - Tile 03 (Emergency Food Relief): #B9FF2C (Receive Your Impact Token color)
 * - Tile 04 (Community Kitchen): #25C862 / #188D44 (Cooked Fresh in Our Kitchen color)
 * - Tile 05 (Women & Family Support): #4EDBE2 / #F2F4F3 (Assigned to Community Hub accent)
 * - Tile 06 (Clean Water & Nutrition): #49E619 (Child Receives Meal & Proof color)
 */
const TILE_COLOR_THEMES: Record<string, TileTheme> = {
  '01': {
    categoryText: 'text-[#49E619]',
    hoverTitleText: 'group-hover:text-[#49E619]',
    hoverExploreText: 'group-hover:text-[#49E619]',
    hoverBadgeBg: 'group-hover:bg-[#49E619] group-hover:text-[#080808]',
    hoverBorder: 'hover:border-[#49E619]/60',
    impactBadgeText: 'group-hover:text-[#49E619]',
  },
  '02': {
    categoryText: 'text-[#4EDBE2]',
    hoverTitleText: 'group-hover:text-[#4EDBE2]',
    hoverExploreText: 'group-hover:text-[#4EDBE2]',
    hoverBadgeBg: 'group-hover:bg-[#4EDBE2] group-hover:text-[#080808]',
    hoverBorder: 'hover:border-[#4EDBE2]/60',
    impactBadgeText: 'group-hover:text-[#4EDBE2]',
  },
  '03': {
    categoryText: 'text-[#B9FF2C]',
    hoverTitleText: 'group-hover:text-[#B9FF2C]',
    hoverExploreText: 'group-hover:text-[#B9FF2C]',
    hoverBadgeBg: 'group-hover:bg-[#B9FF2C] group-hover:text-[#080808]',
    hoverBorder: 'hover:border-[#B9FF2C]/60',
    impactBadgeText: 'group-hover:text-[#B9FF2C]',
  },
  '04': {
    categoryText: 'text-[#25C862]',
    hoverTitleText: 'group-hover:text-[#25C862]',
    hoverExploreText: 'group-hover:text-[#25C862]',
    hoverBadgeBg: 'group-hover:bg-[#188D44] group-hover:text-white',
    hoverBorder: 'hover:border-[#25C862]/60',
    impactBadgeText: 'group-hover:text-[#25C862]',
  },
  '05': {
    categoryText: 'text-[#F2F4F3]',
    hoverTitleText: 'group-hover:text-[#4EDBE2]',
    hoverExploreText: 'group-hover:text-[#4EDBE2]',
    hoverBadgeBg: 'group-hover:bg-[#F2F4F3] group-hover:text-[#080808]',
    hoverBorder: 'hover:border-[#F2F4F3]/60',
    impactBadgeText: 'group-hover:text-[#F2F4F3]',
  },
  '06': {
    categoryText: 'text-[#49E619]',
    hoverTitleText: 'group-hover:text-[#49E619]',
    hoverExploreText: 'group-hover:text-[#49E619]',
    hoverBadgeBg: 'group-hover:bg-[#49E619] group-hover:text-[#080808]',
    hoverBorder: 'hover:border-[#49E619]/60',
    impactBadgeText: 'group-hover:text-[#49E619]',
  },
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  aspectClass = 'aspect-[4/3]',
}) => {
  const theme = TILE_COLOR_THEMES[project.id] || TILE_COLOR_THEMES['01'];

  return (
    <Link
      to={`/projects/${project.slug}`}
      aria-label={`View ${project.title} in ${project.location}`}
      className={`group block bg-[#121212] hover:bg-[#171717] border border-white/12 ${theme.hoverBorder} transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#49E619]`}
    >
      {/* Image Container: Black & White by default, Full Color on Hover */}
      <div className={`relative overflow-hidden ${aspectClass}`}>
        <EditorialImage
          src={project.heroImage}
          alt={`${project.title} — ${project.location}`}
          className="w-full h-full"
          imgClassName="grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105"
        />

        {/* Subtle Dark Scrim that lifts on hover to reveal full color vibrancy */}
        <div
          className="pointer-events-none absolute inset-0 bg-black/25 group-hover:bg-black/0 transition-colors duration-500"
          aria-hidden="true"
        />

        {/* Top-Right Arrow Affordance */}
        <div
          className={`absolute top-4 right-4 w-10 h-10 bg-[#080808]/85 backdrop-blur-xs text-white border border-white/15 flex items-center justify-center transition-all duration-300 ${theme.hoverBadgeBg} group-hover:border-transparent`}
        >
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Editorial Content */}
      <div className="p-6 sm:p-7 flex flex-col justify-between">
        <div>
          {/* Clean Unboxed Metadata with Typographic Separators */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-white/55 font-medium">
            <span className="font-mono-tabular text-white font-bold">
              {project.id}
            </span>
            <span aria-hidden="true">·</span>
            <span
              className={`uppercase tracking-wider font-mono-tabular font-semibold ${theme.categoryText}`}
            >
              {project.category}
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-white/65">{project.location}</span>
          </div>

          <h3
            className={`mt-2.5 font-serif-editorial text-2xl sm:text-[1.65rem] font-bold text-white tracking-tight leading-snug ${theme.hoverTitleText} transition-colors duration-300`}
          >
            {project.title}
          </h3>

          <p className="mt-2.5 text-sm sm:text-base text-white/65 leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
          <span
            className={`font-mono-tabular font-semibold text-white/85 transition-colors duration-300 ${theme.impactBadgeText}`}
          >
            {project.impactHighlight}
          </span>
          <span
            className={`inline-flex items-center gap-1 font-mono-tabular uppercase tracking-wider font-semibold text-white/80 ${theme.hoverExploreText} transition-colors duration-300`}
          >
            <span>Explore</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
};
