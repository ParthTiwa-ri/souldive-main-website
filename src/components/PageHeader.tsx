import React from "react";
import { SectionEyebrow } from "@/components/SectionEyebrow";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  backgroundImage?: string;
  waveFillColor?: string;
  className?: string;
}

/**
 * Shared Inner-Page Header Component
 *
 * Continuous Navy Surface:
 * - Negative top margin (-mt-[68px] sm:-mt-20) pulls PageHeader behind the transparent sticky nav.
 * - Single navy family: base #082B45 at the top with a very soft vertical gradient to #0A3552 (~3% lightness difference).
 * - Single abstract ripple/caustic SVG (<3KB, #42C8E8, 2.5-3.5% opacity, irregular, non-repeating, aria-hidden, static) behind content.
 *
 * Subtitle & Wave Clearance:
 * - Content container has bottom padding calculated as:
 *   padding-bottom: calc(var(--wave-height) + 24px)
 * - Guarantees the subtitle never touches the wave crest at any breakpoint (1440px, 1024px, 768px, 390px).
 *
 * Wave Divider:
 * - Sits at bottom: -1px with fill matching the page background below (#F0FBFD).
 * - Exactly 2 stacked seamless SVG layers at 200% width, translateX(0) to translateX(-50%).
 * - Transform-only linear infinite animations: 32s (back layer) and 24s (front layer).
 * - Disabled under prefers-reduced-motion.
 */
export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  backgroundImage,
  waveFillColor = "#F0FBFD",
  className = "",
}) => {
  return (
    <section
      className={`relative overflow-hidden text-white bg-gradient-to-b from-[#082B45] via-[#092F4C] to-[#0A3552] -mt-[68px] sm:-mt-20 pt-[calc(68px+2.25rem)] sm:pt-[calc(80px+2.5rem)] lg:pt-[calc(80px+3rem)] flex flex-col justify-center [--wave-height:56px] sm:[--wave-height:75px] lg:[--wave-height:90px] ${className}`}
    >
      {/* Optional Tinted Background Image */}
      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 z-0 bg-gradient-to-b from-[#082B45]/85 via-[#082B45]/90 to-[#0A3552]/95"
            aria-hidden="true"
          />
        </>
      ) : (
        /* Single Abstract Ripple / Caustic SVG Texture (<3KB, #42C8E8, 2.5-3.5% opacity, static, non-repeating) */
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
          viewBox="0 0 1440 380"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M-20 60 C 180 30, 340 90, 520 50 C 700 10, 860 70, 1060 40 C 1260 10, 1380 60, 1460 30"
            stroke="#42C8E8"
            strokeWidth="1.2"
            strokeOpacity="0.035"
          />
          <path
            d="M60 140 C 220 180, 420 110, 640 150 C 860 190, 1080 120, 1280 160 C 1380 180, 1440 150, 1480 140"
            stroke="#42C8E8"
            strokeWidth="1.2"
            strokeOpacity="0.03"
          />
          <path
            d="M-40 220 C 140 260, 360 190, 580 230 C 800 270, 980 200, 1200 240 C 1340 265, 1420 235, 1460 220"
            stroke="#42C8E8"
            strokeWidth="1.2"
            strokeOpacity="0.025"
          />
          <path
            d="M200 30 C 350 120, 480 80, 600 200 C 720 130, 880 260, 1020 180 C 1140 100, 1300 220, 1420 120"
            stroke="#42C8E8"
            strokeWidth="1.0"
            strokeOpacity="0.025"
          />
        </svg>
      )}

      {/* Content Container (Server-rendered HTML, z-10 above wave z-5)
          padding-bottom: calc(var(--wave-height) + 24px) guarantees 24px minimum clearance above wave */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        style={{
          paddingBottom: "calc(var(--wave-height) + 24px)",
        }}
      >
        {/* Plain Uppercase Eyebrow (Shared SectionEyebrow Component) */}
        <SectionEyebrow className="text-center mb-2 sm:mb-2.5">
          {eyebrow}
        </SectionEyebrow>

        {/* Primary Page Heading: Single H1 per page, font-weight 700, letter-spacing -0.01em, text-wrap: balance */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold font-heading tracking-[-0.01em] [text-wrap:balance] text-white leading-[1.18]">
          {title}
        </h1>

        {/* Keyword-Rich Subtitle Paragraph */}
        {subtitle && (
          <p className="text-xs sm:text-sm md:text-base text-slate-200 max-w-2xl mx-auto mt-2 sm:mt-3 leading-relaxed [text-wrap:balance]">
            {subtitle}
          </p>
        )}
      </div>

      {/* =========================================================================
          WAVE WRAPPER: Sits at absolute bottom: -1px, overflow: hidden, z-5 below text
          Exactly 2 stacked seamlessly tiling SVG layers at 200% width
          (Back 32s forward, Front 24s forward, transform only)
          ========================================================================= */}
      <div
        className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] pointer-events-none select-none z-[5]"
        style={{ height: "var(--wave-height)" }}
        aria-hidden="true"
      >
        {/* Layer 1: Back Layer (Forward rolling wave, 32s, opacity 0.40) */}
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-full animate-header-wave-back pointer-events-none"
          viewBox="0 0 2400 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 0, 50 C 180, 15 420, 95 650, 45 C 880, -5 1020, 85 1200, 50 C 1380, 15 1620, 95 1850, 45 C 2080, -5 2220, 85 2400, 50 L 2400, 120 L 0, 120 Z"
            fill={waveFillColor}
            opacity="0.40"
          />
        </svg>

        {/* Layer 2: Front Layer (Forward primary crest, 24s, solid fill) */}
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-full animate-header-wave-front pointer-events-none"
          viewBox="0 0 2400 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 0, 40 C 150, 85 350, -10 550, 40 C 750, 90 1050, -5 1200, 40 C 1350, 85 1550, -10 1750, 40 C 1950, 90 2250, -5 2400, 40 L 2400, 120 L 0, 120 Z"
            fill={waveFillColor}
          />
        </svg>
      </div>
    </section>
  );
};
