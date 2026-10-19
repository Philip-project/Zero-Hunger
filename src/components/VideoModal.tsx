import React, { useRef, useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Radio, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { VideoFrameData } from './HeroVideoCard';
import { Button } from './Button';

interface VideoModalProps {
  video: VideoFrameData | null;
  onClose: () => void;
  onSponsorBatch: (batchName: string) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  video,
  onClose,
  onSponsorBatch,
}) => {
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (!video) return;

    // ESC key listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [video, onClose]);

  if (!video) return null;

  const togglePlay = () => {
    const v = modalVideoRef.current;
    if (!v) return;
    if (isPlaying) {
      v.pause();
      setIsPlaying(false);
    } else {
      v.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    const v = modalVideoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#0e1416] border border-white/20 rounded-[22px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-black/50">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 bg-[#49E619]/15 text-[#49E619] border border-[#49E619]/30 text-xs font-mono-tabular font-bold px-2.5 py-1 rounded-md">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>{video.cameraTag}</span>
            </span>
            <span className="text-white/70 text-xs font-mono-tabular hidden sm:inline">
              {video.location} · {video.time}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close video player"
            className="p-1.5 rounded-full hover:bg-white/15 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          <video
            ref={modalVideoRef}
            src={video.videoSrc}
            poster={video.posterSrc}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            controls
            className="w-full h-full object-contain"
          />
        </div>

        {/* Bottom Details & CTAs */}
        <div className="p-5 sm:p-6 bg-[#080808] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 border-t border-white/10 overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-mono-tabular font-bold uppercase tracking-widest text-[#122023] bg-[#B9FF2C] px-2.5 py-0.5 rounded-[4px]">
                {video.badgeText}
              </span>
              <span className="text-xs font-mono-tabular text-white/60">
                VERIFIED OPERATIONAL LOG
              </span>
            </div>
            <h3 className="font-display-sans uppercase text-2xl font-black text-white">
              {video.title}
            </h3>
            <p className="text-sm text-white/80 mt-1 max-w-xl leading-relaxed">
              {video.description}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              type="button"
              variant="primary"
              size="md"
              onClick={() => {
                onClose();
                onSponsorBatch(video.title);
              }}
            >
              <span>Support This Batch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
