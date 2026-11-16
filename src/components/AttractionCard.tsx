"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Attraction } from "@/config/attractions";
import { ImageModal } from "@/components/ImageModal";
import { ArrowUpRight } from "lucide-react";

interface AttractionCardProps {
  attraction: Attraction;
  priority?: boolean;
  isLarge?: boolean;
  className?: string;
  showChips?: boolean;
}

export const AttractionCard: React.FC<AttractionCardProps> = ({
  attraction,
  priority = false,
  isLarge = false,
  className = "",
  showChips = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <article
        onClick={() => setIsModalOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsModalOpen(true);
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`Explore details for ${attraction.name}`}
        className={`group relative overflow-hidden rounded-[26px] bg-brand-navy text-white shadow-lg shadow-brand-navy/10 border border-white/20 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-navy/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2 focus-visible:ring-offset-white select-none motion-reduce:hover:translate-y-0 motion-reduce:transition-none flex flex-col justify-between ${className}`}
      >
        {/* Full Card Background Image with Smooth Ken Burns / Scale Hover */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={attraction.image}
            alt={`${attraction.name} - Proposed Waterpark Attraction at Soul Dive Auraiya`}
            fill
            sizes={
              isLarge
                ? "(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 60vw"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100 will-change-transform"
            priority={priority}
          />

          {/* Directional Gradient Scrim: Deep navy base for sharp text readability, transparent top */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/65 via-50% to-black/25 pointer-events-none" />
        </div>

        {/* Top Floating Badge (Optional Badge for Hero Card, no Concept Render tag) */}
        {attraction.badge && isLarge ? (
          <div className="relative z-10 p-4 sm:p-5 flex items-center justify-end pointer-events-none">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-brand-gold bg-brand-navy/70 backdrop-blur-md border border-brand-gold/30">
              {attraction.badge}
            </span>
          </div>
        ) : (
          <div className="pointer-events-none" />
        )}

        {/* Bottom Overlaid Content */}
        <div className="relative z-10 p-5 sm:p-6 lg:p-7 flex flex-col justify-end mt-auto pt-6">
          {/* Glass-Style Info Chips (Data-Driven & Editable, shown only if explicitly enabled) */}
          {showChips && attraction.chips && attraction.chips.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2.5 sm:mb-3">
              {attraction.chips.map((chip) => (
                <span
                  key={chip}
                  className="px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-white/15 backdrop-blur-md text-white/95 border border-white/20 shadow-xs"
                >
                  {chip}
                </span>
              ))}
            </div>
          )}

          {/* Category Label */}
          {attraction.categoryLabel && (
            <span className="text-[11px] font-bold text-brand-aqua uppercase tracking-[0.12em] block mb-1">
              {attraction.categoryLabel}
            </span>
          )}

          {/* Content Row: Title & Description on Left, Circular Arrow Button on Right */}
          <div className="flex items-end justify-between gap-3 sm:gap-4">
            <div className="space-y-1 sm:space-y-1.5 max-w-xl">
              {/* Attraction Name (H3) */}
              <h3
                className={`font-bold font-heading text-white tracking-tight leading-snug [text-wrap:balance] ${
                  isLarge
                    ? "text-2xl sm:text-3xl lg:text-4xl"
                    : "text-lg sm:text-xl lg:text-2xl"
                }`}
              >
                {attraction.name}
              </h3>

              {/* One-Line Engaging Description */}
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed line-clamp-2">
                {attraction.shortDescription}
              </p>
            </div>

            {/* Circular Arrow Button (Bottom-Right Corner) */}
            <div
              className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shrink-0 shadow-md group-hover:bg-brand-coral group-hover:border-brand-coral group-hover:scale-105 transition-all duration-300 motion-reduce:transition-none"
              aria-hidden="true"
            >
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:group-hover:translate-x-0" />
            </div>
          </div>
        </div>
      </article>

      {/* Accessible Detail Lightbox Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={attraction.image}
        title={attraction.name}
        subtitle={attraction.description}
        badge={attraction.categoryLabel || "Proposed Facility"}
        features={attraction.features}
        zone={attraction.masterPlanZone}
      />
    </>
  );
};
