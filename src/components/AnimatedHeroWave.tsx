import React from "react";

interface AnimatedHeroWaveProps {
  fillColor?: string;
  className?: string;
}

export const AnimatedHeroWave: React.FC<AnimatedHeroWaveProps> = ({
  fillColor = "#F0FBFD",
  className = "",
}) => {
  return (
    <div
      className={`absolute bottom-[-1px] left-0 right-0 w-full overflow-hidden h-[70px] sm:h-[85px] lg:h-[100px] pointer-events-none select-none z-20 ${className}`}
      aria-hidden="true"
    >
      {/* =========================================================================
          LAYER 1: BACK LAYER (DEEP SWELL)
          Runs in reverse, 28s duration, opacity 0.35, seamlessly tiling 2400x120 viewBox
          ========================================================================= */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-full animate-wave-back pointer-events-none"
        viewBox="0 0 2400 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 0, 50 C 180, 15 420, 95 650, 45 C 880, -5 1020, 85 1200, 50 C 1380, 15 1620, 95 1850, 45 C 2080, -5 2220, 85 2400, 50 L 2400, 120 L 0, 120 Z"
          fill={fillColor}
          opacity="0.35"
        />
      </svg>

      {/* =========================================================================
          LAYER 2: MID LAYER (SECONDARY SWELL)
          Runs forward, 22s duration, opacity 0.65, seamlessly tiling 2400x120 viewBox
          ========================================================================= */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-full animate-wave-mid pointer-events-none"
        viewBox="0 0 2400 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 0, 25 C 160, 65 380, -20 600, 30 C 820, 80 1040, -15 1200, 25 C 1360, 65 1580, -20 1800, 30 C 2020, 80 2240, -15 2400, 25 L 2400, 120 L 0, 120 Z"
          fill={fillColor}
          opacity="0.65"
        />
      </svg>

      {/* =========================================================================
          LAYER 3: FRONT LAYER (PRIMARY CREST)
          Runs forward, 16s duration, solid opacity 1, seamlessly tiling 2400x120 viewBox
          ========================================================================= */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-full animate-wave-front pointer-events-none"
        viewBox="0 0 2400 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 0, 40 C 150, 85 350, -10 550, 40 C 750, 90 1050, -5 1200, 40 C 1350, 85 1550, -10 1750, 40 C 1950, 90 2250, -5 2400, 40 L 2400, 120 L 0, 120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};
