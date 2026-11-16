import React from "react";

interface WaveDividerProps {
  fillColor?: string;
  secondaryFillColor?: string;
  position?: "top" | "bottom";
  className?: string;
  variant?: "gentle" | "dynamic" | "deep";
  animateDrift?: boolean;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  fillColor = "#FFFFFF",
  secondaryFillColor,
  position = "bottom",
  className = "",
  variant = "dynamic",
  animateDrift = false,
}) => {
  const isTop = position === "top";

  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${
        isTop ? "rotate-180 -mb-1" : "-mt-1"
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        className={`relative block ${animateDrift ? "w-[106%] -ml-[3%] animate-wave-drift motion-reduce:animate-none motion-reduce:w-full motion-reduce:ml-0" : "w-full"} h-10 md:h-16 lg:h-20`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        {secondaryFillColor && (
          <path
            d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"
            fill={secondaryFillColor}
            opacity="0.35"
          />
        )}
        {variant === "dynamic" ? (
          <path
            d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"
            fill={fillColor}
          />
        ) : variant === "deep" ? (
          <path
            d="M0,20 C200,100 450,-30 700,70 C950,150 1100,30 1200,50 L1200,120 L0,120 Z"
            fill={fillColor}
          />
        ) : (
          <path
            d="M0,40 C300,90 600,10 900,60 C1050,85 1150,45 1200,30 L1200,120 L0,120 Z"
            fill={fillColor}
          />
        )}
      </svg>
    </div>
  );
};

