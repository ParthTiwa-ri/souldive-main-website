import React from "react";

interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "div" | "p";
}

/**
 * Standardized Section Eyebrow Component
 * Style: Plain brand-aqua uppercase text with 0.12em tracking (no pill), matching Signature Attractions.
 */
export const SectionEyebrow: React.FC<SectionEyebrowProps> = ({
  children,
  className = "",
  as: Component = "span",
}) => {
  return (
    <Component
      className={`text-xs sm:text-sm font-bold text-brand-aqua uppercase tracking-[0.12em] block mb-2.5 ${className}`}
    >
      {children}
    </Component>
  );
};
