import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Radio } from 'lucide-react';
import { motion } from 'motion/react';

export interface VideoFrameData {
  id: string;
  cameraTag: string;
  title: string;
  location: string;
  time: string;
  videoSrc: string;
  posterSrc: string;
  badgeText: string;
  accentColor: string;
  description: string;
  metric: {
    value: string;
    label: string;
  };
}

interface HeroVideoCardProps {
  data: VideoFrameData;
  index: number;
  onExpand?: (data: VideoFrameData) => void;
  onSponsor?: () => void;
}

export const HeroVideoCard: React.FC<HeroVideoCardProps> = ({
  data,
  index,
  onExpand,
  onSponsor,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTimeFormatted, setCurrentTimeFormatted] = useState('00:00');
  const [durationFormatted, setDurationFormatted] = useState('00:06');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure autoplay works
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay may be restricted by browser until user interaction
        setIsPlaying(false);
      });
    }

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
        const curM = Math.floor(video.currentTime / 60);
        const curS = Math.floor(video.currentTime % 60);
        setCurrentTimeFormatted(
          `${curM.toString().padStart(2, '0')}:${curS.toString().padStart(2, '0')}`
        );
      }
    };

    const handleLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration)) {
        const durM = Math.floor(video.duration / 60);
        const durS = Math.floor(video.duration % 60);
        setDurationFormatted(
          `${durM.toString().padStart(2, '0')}:${durS.toString().padStart(2, '0')}`
        );
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleCardClick = () => {
    if (onExpand) {
      onExpand(data);
    } else {
      // Toggle play if no expand handler
      const video = videoRef.current;
      if (video) {
        if (isPlaying) {
          video.pause();
          setIsPlaying(false);
        } else {
          video.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      className="group relative flex flex-col rounded-[18px] bg-[#111618] border border-white/15 overflow-hidden transition-all duration-300 hover:border-white/35 hover:shadow-2xl hover:shadow-[#49E619]/10 cursor-pointer"
    >
      {/* VIDEO CONTAINER FRAME */}
      <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={data.videoSrc}
          poster={data.posterSrc}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Cinematic Scrims */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080808] via-black/30 to-black/60"
          aria-hidden="true"
        />

        {/* TOP STATUS BAR: Live indicator, camera tag, and time */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs z-10 pointer-events-none">
          <div className="flex items-center gap-2 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#49E619] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#49E619]" />
            </span>
            <span className="font-mono-tabular font-bold tracking-wider text-[11px] text-white">
              {data.cameraTag}
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-white/80 font-mono-tabular text-[11px]">
            <Radio className="w-3 h-3 text-[#49E619]" />
            <span>{data.time}</span>
          </div>
        </div>

        {/* CENTER PLAY/PAUSE OVERLAY INDICATOR (when paused or hovered) */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="w-13 h-13 rounded-full bg-black/80 backdrop-blur-md border border-white/25 flex items-center justify-center text-white shadow-xl">
              <Play className="w-6 h-6 fill-white ml-0.5 text-white" />
            </div>
          </div>
        )}

        {/* BOTTOM VIDEO OVERLAY BAR & CONTROLS */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between z-10">
          {/* Active Metric Badge */}
          <span className="text-[10px] font-mono-tabular font-bold uppercase tracking-wider text-[#080808] bg-[#B9FF2C] px-2.5 py-0.5 rounded-[5px]">
            {data.badgeText}
          </span>

          {/* Interactive controls (Play/Pause, Sound, Fullscreen) */}
          <div
            className={`flex items-center gap-1.5 transition-opacity duration-200 ${
              isHovered ? 'opacity-100' : 'opacity-85 sm:opacity-0 group-hover:opacity-100'
            }`}
          >
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              className="p-1.5 rounded-md bg-black/70 hover:bg-white/20 text-white backdrop-blur-sm transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              className="p-1.5 rounded-md bg-black/70 hover:bg-white/20 text-white backdrop-blur-sm transition-colors cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#49E619]" />}
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (onExpand) onExpand(data);
              }}
              aria-label="Expand video frame"
              className="p-1.5 rounded-md bg-black/70 hover:bg-white/20 text-white backdrop-blur-sm transition-colors cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* PROGRESS SCRUBBER BAR */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/15">
          <div
            className="h-full bg-[#49E619] transition-all duration-150 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* METADATA & CONTENT CARD BODY */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-[#0e1416]">
        <div>
          <div className="flex items-center justify-between text-xs text-white/60 mb-1.5 font-mono-tabular">
            <span>{data.location}</span>
            <span>
              {currentTimeFormatted} / {durationFormatted}
            </span>
          </div>

          <h3 className="font-display-sans uppercase text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#49E619] transition-colors leading-snug">
            {data.title}
          </h3>

          <p className="mt-1.5 text-xs sm:text-sm text-white/75 line-clamp-2 leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* METRIC PILL & QUICK ACTION */}
        <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between">
          <div>
            <div className="font-display-sans text-base sm:text-lg font-black text-[#4EDBE2]">
              {data.metric.value}
            </div>
            <div className="text-[10px] font-mono-tabular uppercase tracking-wider text-white/60">
              {data.metric.label}
            </div>
          </div>

          <span className="text-xs font-mono-tabular font-bold tracking-wider text-[#49E619] group-hover:underline flex items-center gap-1">
            <span>INSPECT FEED</span>
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};
