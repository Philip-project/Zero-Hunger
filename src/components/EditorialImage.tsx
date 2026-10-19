import React, { useState } from 'react';
import { HeartHandshake } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  overlayGradient?: boolean;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  priority = false,
  overlayGradient = false,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#1A1A1A] ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${imgClassName}`}
        />
      ) : (
        <div className="w-full h-full min-h-[240px] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#F3EDE4] to-[#E8DED0] text-[#080808]">
          <HeartHandshake className="w-8 h-8 text-[#D7262F] mb-3 stroke-[1.5]" />
          <p className="font-serif-editorial text-lg font-medium text-[#080808] max-w-xs">
            {alt}
          </p>
          <span className="mt-1 text-xs uppercase tracking-widest text-[#6F6F6F]">
            Zero Hunger Documentary Archive
          </span>
        </div>
      )}
      {overlayGradient && (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
          aria-hidden="true"
        />
      )}
    </div>
  );
};
