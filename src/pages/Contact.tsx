import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * The Contact page has been merged into the "About Us" page at /about#contact.
 * This component handles seamless automatic redirection.
 */
export const Contact: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/about#contact', { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center text-white p-6">
      <div className="text-center">
        <div className="animate-spin w-8 h-8 border-2 border-[#49E619] border-t-transparent rounded-full mx-auto mb-4" />
        <p className="text-sm font-mono-tabular uppercase tracking-widest text-white/70">
          Redirecting to About Us & Contact...
        </p>
      </div>
    </div>
  );
};
