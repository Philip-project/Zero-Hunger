import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * The Contact page has been merged into the About Us page (/about#contact).
 * This component preserves backwards-compatibility by redirecting to /about#contact.
 */
export const Contact: React.FC = () => {
  return <Navigate to="/about#contact" replace />;
};
