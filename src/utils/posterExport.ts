/**
 * Poster Export Engine
 * Generates crisp high-resolution PNG (up to 4K) and SVG vector files
 * matching the brutalist activist poster design.
 */

import { PALETTE_CONFIGS, PosterPalette, PosterStyleVariant } from '../components/BrutalistPosterLockup';

export type AspectRatio = '1:1' | '4:5' | '9:16' | '16:9';

export interface PosterExportOptions {
  eyebrow?: string;
  lines?: string[];
  styleVariant?: PosterStyleVariant;
  palette?: PosterPalette;
  aspectRatio?: AspectRatio;
  resolution?: number; // Base width in pixels (e.g., 2048)
}

export function getDimensions(aspectRatio: AspectRatio, baseWidth: number = 2048) {
  switch (aspectRatio) {
    case '1:1':
      return { width: baseWidth, height: baseWidth };
    case '4:5':
      return { width: baseWidth, height: Math.round(baseWidth * 1.25) };
    case '9:16':
      return { width: baseWidth, height: Math.round(baseWidth * (16 / 9)) };
    case '16:9':
      return { width: baseWidth, height: Math.round(baseWidth * (9 / 16)) };
    default:
      return { width: baseWidth, height: baseWidth };
  }
}

export async function renderPosterToCanvas(options: PosterExportOptions): Promise<HTMLCanvasElement> {
  const {
    eyebrow = 'ZERO HUNGER INITIATIVE · HYDERABAD',
    lines = ['NO ONE', 'SHOULD', 'SLEEP'],
    styleVariant = 'all-red',
    palette = 'signature',
    aspectRatio = '1:1',
    resolution = 2048,
  } = options;

  const { width, height } = getDimensions(aspectRatio, resolution);
  const colors = PALETTE_CONFIGS[palette] || PALETTE_CONFIGS.signature;

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Canvas 2D context not supported');
  }

  // Ensure fonts are loaded
  try {
    await document.fonts.ready;
  } catch (e) {
    console.warn('Font readiness wait skipped', e);
  }

  // 1. Draw solid background
  ctx.fillStyle = colors.bg;
  ctx.fillRect(0, 0, width, height);

  // 2. Proportions & Spatial Layout
  // Layout baseline matching the uploaded image:
  // Margin left is about 7% of width
  // Margin top is about 8% of height
  const marginLeft = Math.round(width * 0.08);
  const marginTop = Math.round(height * 0.1);

  // Eyebrow font size: ~2.4% of width
  const eyebrowFontSize = Math.round(width * 0.024);
  const eyebrowY = marginTop + eyebrowFontSize;

  // Draw Eyebrow
  ctx.fillStyle = colors.eyebrowColor;
  ctx.font = `700 ${eyebrowFontSize}px 'JetBrains Mono', monospace`;
  ctx.textBaseline = 'top';

  // Letter spacing for eyebrow (draw character by character for wide tracking)
  const letterSpacing = eyebrowFontSize * 0.22;
  let currentEyebrowX = marginLeft;
  for (let i = 0; i < eyebrow.length; i++) {
    const char = eyebrow[i];
    ctx.fillText(char, currentEyebrowX, eyebrowY);
    currentEyebrowX += ctx.measureText(char).width + letterSpacing;
  }

  // 3. Main Headline Sizing & Line Geometry
  // Font size for headline: dynamically scale so it fits nicely
  // In the 1:1 image, each line is huge and occupies substantial height
  const headlineFontSize = Math.round(width * 0.145);
  const lineBoxPaddingX = Math.round(headlineFontSize * 0.22);
  const lineBoxPaddingY = Math.round(headlineFontSize * 0.12);
  const lineHeight = Math.round(headlineFontSize * 0.94);

  const headlineStartY = eyebrowY + Math.round(eyebrowFontSize * 3.2);

  ctx.font = `900 ${headlineFontSize}px 'Inter', -apple-system, BlinkMacSystemFont, sans-serif`;

  lines.forEach((lineText, idx) => {
    const isLastLine = idx === lines.length - 1;
    const isNeonPunchline = isLastLine && styleVariant === 'neon-punchline';
    const isNeonDot = isLastLine && styleVariant === 'neon-dot';

    const lineY = headlineStartY + idx * (lineHeight + lineBoxPaddingY * 0.6);
    const textWidth = ctx.measureText(lineText).width;

    if (isNeonPunchline) {
      // Terminal line without red block (like HUNGRY. in green)
      ctx.fillStyle = colors.accentColor;
      ctx.textBaseline = 'top';
      const fullText = lineText + '.';
      ctx.fillText(fullText, marginLeft, lineY + lineBoxPaddingY);
    } else {
      // Red solid background block hugging the text
      const boxWidth = textWidth + lineBoxPaddingX * 2;
      const boxHeight = headlineFontSize + lineBoxPaddingY * 2;

      ctx.fillStyle = colors.blockBg;
      ctx.fillRect(marginLeft, lineY, boxWidth, boxHeight);

      // White text inside the block
      ctx.fillStyle = colors.textColor;
      ctx.textBaseline = 'alphabetic';
      ctx.fillText(
        lineText,
        marginLeft + lineBoxPaddingX,
        lineY + lineBoxPaddingY + headlineFontSize * 0.85
      );

      // Optional neon dot
      if (isNeonDot) {
        ctx.fillStyle = colors.accentColor;
        ctx.fillText(
          '.',
          marginLeft + lineBoxPaddingX + textWidth,
          lineY + lineBoxPaddingY + headlineFontSize * 0.85
        );
      }
    }
  });

  return canvas;
}

export async function downloadPosterPNG(options: PosterExportOptions, filename?: string) {
  const canvas = await renderPosterToCanvas(options);
  const url = canvas.toDataURL('image/png');
  const safeName =
    filename ||
    `no-one-should-sleep-${options.aspectRatio || '1x1'}-${Date.now()}.png`;

  const link = document.createElement('a');
  link.download = safeName;
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function generatePosterSVG(options: PosterExportOptions): string {
  const {
    eyebrow = 'ZERO HUNGER INITIATIVE · HYDERABAD',
    lines = ['NO ONE', 'SHOULD', 'SLEEP'],
    styleVariant = 'all-red',
    palette = 'signature',
    aspectRatio = '1:1',
  } = options;

  const { width, height } = getDimensions(aspectRatio, 1200);
  const colors = PALETTE_CONFIGS[palette] || PALETTE_CONFIGS.signature;

  const marginLeft = Math.round(width * 0.08);
  const marginTop = Math.round(height * 0.1);
  const eyebrowFontSize = Math.round(width * 0.024);
  const headlineFontSize = Math.round(width * 0.145);
  const paddingX = Math.round(headlineFontSize * 0.22);
  const paddingY = Math.round(headlineFontSize * 0.12);
  const lineHeight = Math.round(headlineFontSize * 0.94);
  const headlineStartY = marginTop + eyebrowFontSize * 3.5;

  let svgElements = '';

  // Background
  svgElements += `<rect width="${width}" height="${height}" fill="${colors.bg}"/>`;

  // Eyebrow
  svgElements += `<text x="${marginLeft}" y="${marginTop + eyebrowFontSize}" fill="${
    colors.eyebrowColor
  }" font-family="'JetBrains Mono', monospace" font-size="${eyebrowFontSize}" font-weight="700" letter-spacing="0.22em">${eyebrow}</text>`;

  // Lines
  lines.forEach((lineText, idx) => {
    const isLastLine = idx === lines.length - 1;
    const isNeonPunchline = isLastLine && styleVariant === 'neon-punchline';
    const isNeonDot = isLastLine && styleVariant === 'neon-dot';
    const lineY = headlineStartY + idx * (lineHeight + paddingY * 0.6);

    // Approximate character width in Inter Black (~0.62 of font-size)
    const approxWidth = lineText.length * headlineFontSize * 0.62;
    const boxWidth = approxWidth + paddingX * 2;
    const boxHeight = headlineFontSize + paddingY * 2;

    if (isNeonPunchline) {
      svgElements += `<text x="${marginLeft}" y="${
        lineY + paddingY + headlineFontSize * 0.85
      }" fill="${colors.accentColor}" font-family="'Inter', sans-serif" font-size="${headlineFontSize}" font-weight="900" letter-spacing="-0.045em">${lineText}.</text>`;
    } else {
      svgElements += `<rect x="${marginLeft}" y="${lineY}" width="${boxWidth}" height="${boxHeight}" fill="${colors.blockBg}"/>`;
      svgElements += `<text x="${marginLeft + paddingX}" y="${
        lineY + paddingY + headlineFontSize * 0.85
      }" fill="${colors.textColor}" font-family="'Inter', sans-serif" font-size="${headlineFontSize}" font-weight="900" letter-spacing="-0.045em">${lineText}${
        isNeonDot ? `<tspan fill="${colors.accentColor}">.</tspan>` : ''
      }</text>`;
    }
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">${svgElements}</svg>`;
}

export function downloadPosterSVG(options: PosterExportOptions, filename?: string) {
  const svgContent = generatePosterSVG(options);
  const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const safeName =
    filename ||
    `no-one-should-sleep-${options.aspectRatio || '1x1'}-${Date.now()}.svg`;

  const link = document.createElement('a');
  link.download = safeName;
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export async function copyPosterImageToClipboard(options: PosterExportOptions): Promise<boolean> {
  try {
    const canvas = await renderPosterToCanvas(options);
    return new Promise((resolve) => {
      canvas.toBlob(async (blob) => {
        if (!blob) {
          resolve(false);
          return;
        }
        try {
          await navigator.clipboard.write([
            new ClipboardItem({
              'image/png': blob,
            }),
          ]);
          resolve(true);
        } catch (err) {
          console.warn('Clipboard write failed', err);
          resolve(false);
        }
      });
    });
  } catch (err) {
    console.error('Error copying to clipboard', err);
    return false;
  }
}
