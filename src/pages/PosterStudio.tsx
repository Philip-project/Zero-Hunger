import React, { useState, useRef, useEffect } from 'react';
import {
  Download,
  Copy,
  Check,
  Maximize2,
  Minimize2,
  RefreshCw,
  Share2,
  Sliders,
  Sparkles,
  ArrowLeft,
  FileCode,
  Eye,
  Layers,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  BrutalistPosterLockup,
  PosterPalette,
  PosterStyleVariant,
  PALETTE_CONFIGS,
} from '../components/BrutalistPosterLockup';
import {
  downloadPosterPNG,
  downloadPosterSVG,
  copyPosterImageToClipboard,
  AspectRatio,
} from '../utils/posterExport';
import { Button } from '../components/Button';

export const PosterStudio: React.FC = () => {
  // Poster State (Default strictly matches user request: "no one should sleep only")
  const [eyebrow, setEyebrow] = useState('ZERO HUNGER INITIATIVE · HYDERABAD');
  const [lines, setLines] = useState<string[]>(['NO ONE', 'SHOULD', 'SLEEP']);
  const [styleVariant, setStyleVariant] = useState<PosterStyleVariant>('all-red');
  const [palette, setPalette] = useState<PosterPalette>('signature');
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('1:1');

  // UI state
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showInspector, setShowInspector] = useState(false);
  const posterContainerRef = useRef<HTMLDivElement>(null);

  const handleCopy = async () => {
    setCopied(true);
    await copyPosterImageToClipboard({
      eyebrow,
      lines,
      styleVariant,
      palette,
      aspectRatio,
    });
    setTimeout(() => setCopied(false), 2400);
  };

  const handleDownloadPNG = async () => {
    try {
      setDownloading(true);
      await downloadPosterPNG(
        {
          eyebrow,
          lines,
          styleVariant,
          palette,
          aspectRatio,
          resolution: 2400, // Crisp print-quality
        },
        `no-one-should-sleep-${aspectRatio}-${Date.now()}.png`
      );
    } catch (e) {
      console.error(e);
    } finally {
      setDownloading(false);
    }
  };

  const handleDownloadSVG = () => {
    downloadPosterSVG(
      {
        eyebrow,
        lines,
        styleVariant,
        palette,
        aspectRatio,
      },
      `no-one-should-sleep-${aspectRatio}-${Date.now()}.svg`
    );
  };

  const handleResetToDefault = () => {
    setEyebrow('ZERO HUNGER INITIATIVE · HYDERABAD');
    setLines(['NO ONE', 'SHOULD', 'SLEEP']);
    setStyleVariant('all-red');
    setPalette('signature');
    setAspectRatio('1:1');
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      posterContainerRef.current?.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const currentColors = PALETTE_CONFIGS[palette];

  // Aspect ratio container styles
  const aspectClass = {
    '1:1': 'aspect-square max-w-[620px]',
    '4:5': 'aspect-[4/5] max-w-[540px]',
    '9:16': 'aspect-[9/16] max-w-[420px]',
    '16:9': 'aspect-[16/9] max-w-[820px]',
  }[aspectRatio];

  return (
    <div className="min-h-screen bg-[#080808] text-white pt-24 pb-20 selection:bg-[#E21B23] selection:text-white">
      {/* Top Bar / Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono-tabular uppercase tracking-wider text-white/60 hover:text-white transition-colors py-1 px-2.5 rounded bg-white/5 border border-white/10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <span className="text-white/30">/</span>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#E21B23] animate-pulse" />
            <span className="text-xs font-mono-tabular font-bold uppercase tracking-widest text-[#39FF14]">
              Activist Poster Studio
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleResetToDefault}
            className="inline-flex items-center gap-1.5 text-xs font-mono-tabular uppercase tracking-wider text-white/70 hover:text-white px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            title="Reset to 'NO ONE SHOULD SLEEP'"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Graphic</span>
          </button>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ================= LEFT / CENTER: POSTER PREVIEW CANVAS ================= */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-center">
            {/* The Poster Frame (Matches the uploaded artwork) */}
            <div
              ref={posterContainerRef}
              className={`relative w-full ${aspectClass} rounded-[4px] shadow-2xl flex flex-col justify-start p-7 sm:p-10 md:p-14 transition-all duration-300 border border-white/10`}
              style={{
                backgroundColor: currentColors.bg,
              }}
            >
              {/* Subtle film grain texture overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-screen"
                style={{
                  backgroundImage:
                    'radial-gradient(#ffffff 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }}
              />

              {/* Poster Lockup */}
              <div className="relative z-10 w-full h-full flex flex-col justify-start">
                <BrutalistPosterLockup
                  eyebrow={eyebrow}
                  lines={lines}
                  styleVariant={styleVariant}
                  palette={palette}
                  size={aspectRatio === '9:16' ? 'lg' : 'poster'}
                  animated={false}
                />
              </div>

              {/* Fullscreen Overlay Close Button */}
              {isFullscreen && (
                <button
                  onClick={toggleFullscreen}
                  className="absolute top-6 right-6 z-50 p-3 rounded-full bg-black/80 text-white border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <Minimize2 className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Poster Quick Action Bar */}
            <div className="w-full mt-6 flex flex-wrap items-center justify-between gap-3 bg-white/5 border border-white/10 p-3.5 rounded-[12px]">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownloadPNG}
                  disabled={downloading}
                  className="inline-flex items-center gap-2 bg-[#E21B23] hover:bg-[#c9141b] text-white px-4 py-2 rounded-[8px] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-md disabled:opacity-50"
                >
                  <Download className="w-4 h-4" />
                  <span>{downloading ? 'Exporting...' : 'Download 4K PNG'}</span>
                </button>

                <button
                  onClick={handleDownloadSVG}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-3.5 py-2 rounded-[8px] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border border-white/15"
                >
                  <FileCode className="w-4 h-4 text-[#39FF14]" />
                  <span>Vector SVG</span>
                </button>

                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3.5 py-2 rounded-[8px] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border border-white/15"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#39FF14]" />
                      <span className="text-[#39FF14]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleFullscreen}
                  className="p-2 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-[8px] transition-colors border border-white/10 cursor-pointer"
                  title="Fullscreen Exhibition Mode"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Note on user brief */}
            <div className="mt-4 text-center text-xs text-white/50 font-mono-tabular">
              Rendered to exact graphic specifications: <span className="text-white/80">NO ONE SHOULD SLEEP</span> with stepped crimson badge lockup.
            </div>
          </div>

          {/* ================= RIGHT: CONTROLS & CAMPAIGN CUSTOMIZER ================= */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6">
            {/* Quick Slogan Variations (Highlighting "No One Should Sleep") */}
            <div className="bg-[#121212] border border-white/10 rounded-[14px] p-5 shadow-lg">
              <div className="flex items-center justify-between mb-3.5">
                <h3 className="text-xs font-mono-tabular font-bold uppercase tracking-[0.18em] text-[#39FF14] flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Style Variant</span>
                </h3>
                <span className="text-[11px] text-white/50 font-mono-tabular">
                  Layout Treatment
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  onClick={() => setStyleVariant('all-red')}
                  className={`p-3 rounded-[10px] text-left transition-all border cursor-pointer ${
                    styleVariant === 'all-red'
                      ? 'bg-white/15 border-[#E21B23] shadow-md ring-1 ring-[#E21B23]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="text-xs font-bold text-white uppercase">
                    All Red Lockup
                  </div>
                  <div className="text-[10px] text-white/60 mt-1 leading-tight">
                    NO ONE, SHOULD, SLEEP in solid stepped red badges
                  </div>
                </button>

                <button
                  onClick={() => setStyleVariant('neon-punchline')}
                  className={`p-3 rounded-[10px] text-left transition-all border cursor-pointer ${
                    styleVariant === 'neon-punchline'
                      ? 'bg-white/15 border-[#39FF14] shadow-md ring-1 ring-[#39FF14]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="text-xs font-bold text-[#39FF14] uppercase">
                    Electric Accent
                  </div>
                  <div className="text-[10px] text-white/60 mt-1 leading-tight">
                    NO ONE SHOULD in red, SLEEP. in neon green
                  </div>
                </button>

                <button
                  onClick={() => setStyleVariant('neon-dot')}
                  className={`p-3 rounded-[10px] text-left transition-all border cursor-pointer ${
                    styleVariant === 'neon-dot'
                      ? 'bg-white/15 border-white/40 shadow-md ring-1 ring-white/40'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="text-xs font-bold text-white uppercase">
                    Neon Dot (.)
                  </div>
                  <div className="text-[10px] text-white/60 mt-1 leading-tight">
                    All red badges with an electric green period
                  </div>
                </button>
              </div>
            </div>

            {/* Typography Content Editor */}
            <div className="bg-[#121212] border border-white/10 rounded-[14px] p-5 shadow-lg space-y-4">
              <h3 className="text-xs font-mono-tabular font-bold uppercase tracking-[0.18em] text-[#39FF14]">
                Headline Lines & Text
              </h3>

              {/* Eyebrow / Provenance */}
              <div>
                <label className="block text-[11px] font-mono-tabular uppercase tracking-wider text-white/70 mb-1.5">
                  Top Subtitle / Chapter (Neon Monospace)
                </label>
                <input
                  type="text"
                  value={eyebrow}
                  onChange={(e) => setEyebrow(e.target.value.toUpperCase())}
                  className="w-full bg-black/60 border border-white/20 rounded-[8px] px-3.5 py-2 text-xs font-mono-tabular uppercase tracking-wider text-[#39FF14] focus:outline-none focus:border-[#39FF14]"
                />
              </div>

              {/* Headline Lines */}
              <div className="space-y-2">
                <label className="block text-[11px] font-mono-tabular uppercase tracking-wider text-white/70">
                  Headline Text Lines
                </label>
                {lines.map((line, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-[11px] font-mono-tabular text-white/40 w-4">
                      {idx + 1}
                    </span>
                    <input
                      type="text"
                      value={line}
                      onChange={(e) => {
                        const next = [...lines];
                        next[idx] = e.target.value.toUpperCase();
                        setLines(next);
                      }}
                      className="flex-1 bg-black/60 border border-white/20 rounded-[8px] px-3 py-1.5 text-sm font-bold uppercase tracking-tight text-white focus:outline-none focus:border-[#E21B23]"
                    />
                    {lines.length > 1 && (
                      <button
                        onClick={() => setLines(lines.filter((_, i) => i !== idx))}
                        className="text-xs text-white/40 hover:text-red-400 px-2 py-1"
                        title="Remove line"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}

                {lines.length < 5 && (
                  <button
                    onClick={() => setLines([...lines, 'NOW'])}
                    className="text-xs font-mono-tabular uppercase tracking-wider text-white/60 hover:text-[#39FF14] pt-1"
                  >
                    + Add Line
                  </button>
                )}
              </div>
            </div>

            {/* Colorway & Palettes */}
            <div className="bg-[#121212] border border-white/10 rounded-[14px] p-5 shadow-lg">
              <h3 className="text-xs font-mono-tabular font-bold uppercase tracking-[0.18em] text-[#39FF14] mb-3">
                Palette & Theme
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {(Object.keys(PALETTE_CONFIGS) as PosterPalette[]).map((palKey) => {
                  const cfg = PALETTE_CONFIGS[palKey];
                  const isSelected = palette === palKey;
                  return (
                    <button
                      key={palKey}
                      onClick={() => setPalette(palKey)}
                      className={`p-2.5 rounded-[10px] text-left border cursor-pointer transition-all ${
                        isSelected
                          ? 'border-white bg-white/15 ring-1 ring-white shadow-md'
                          : 'border-white/10 bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <span
                          className="w-3.5 h-3.5 rounded-[3px] border border-white/20"
                          style={{ backgroundColor: cfg.blockBg }}
                        />
                        <span
                          className="w-3.5 h-3.5 rounded-[3px] border border-white/20"
                          style={{ backgroundColor: cfg.eyebrowColor }}
                        />
                      </div>
                      <div className="text-xs font-bold text-white truncate">
                        {cfg.name}
                      </div>
                      <div className="text-[10px] text-white/50 truncate">
                        {cfg.badgeLabel}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Aspect Ratio Selector */}
            <div className="bg-[#121212] border border-white/10 rounded-[14px] p-5 shadow-lg">
              <h3 className="text-xs font-mono-tabular font-bold uppercase tracking-[0.18em] text-[#39FF14] mb-3">
                Aspect Ratio / Format
              </h3>

              <div className="grid grid-cols-4 gap-2">
                {[
                  { id: '1:1', label: '1:1 Square', sub: 'Social / Post' },
                  { id: '4:5', label: '4:5 Portrait', sub: 'Print Flyer' },
                  { id: '9:16', label: '9:16 Story', sub: 'Reel / Status' },
                  { id: '16:9', label: '16:9 Wide', sub: 'Screen' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setAspectRatio(item.id as AspectRatio)}
                    className={`p-2 rounded-[8px] text-center border cursor-pointer transition-all ${
                      aspectRatio === item.id
                        ? 'border-[#39FF14] bg-[#39FF14]/10 text-white font-bold'
                        : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-xs font-mono-tabular">{item.id}</div>
                    <div className="text-[9px] text-white/50">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
