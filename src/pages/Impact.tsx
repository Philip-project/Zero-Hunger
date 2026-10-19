import React from 'react';
import { Projects } from './Projects';
import { SupportTab } from '../components/SupportModal';

interface ImpactProps {
  onOpenSupport: (tab?: SupportTab, projectSlug?: string) => void;
}

/**
 * Merged Projects & Impact experience.
 * Re-exports the unified Projects page so existing routes and bookmarks work seamlessly.
 */
export const Impact: React.FC<ImpactProps> = (props) => {
  return <Projects {...props} />;
};
