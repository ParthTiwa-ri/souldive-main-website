"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { amenities, Amenity } from "@/config/amenities";
import { WaveDivider } from "@/components/WaveDivider";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import {
  UtensilsCrossed,
  Music,
  Car,
  ShowerHead,
  ShieldAlert,
  Sparkles,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  UtensilsCrossed,
  Music,
  Car,
  ShowerHead,
  ShieldAlert,
  Sparkles,
};

export const AmenitiesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="amenities"
      ref={sectionRef}
      className="relative pt-20 sm:pt-28 pb-20 sm:pb-28 bg-gradient-to-b from-[#EBF9FB] via-cyan-50/30 to-white overflow-hidden"
      aria-labelledby="amenities-heading"
    >
      {/* Subtle Top Wave Divider Transition */}
      <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none -mt-0.5">
        <WaveDivider
          fillColor="#FFFFFF"
          secondaryFillColor="#00C4D9"
          position="top"
          variant="gentle"
          animateDrift={true}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* 1. Heading Block: Consistent plain aqua uppercase eyebrow and fluid balanced heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <SectionEyebrow>VISITOR AMENITIES</SectionEyebrow>
          <h2
            id="amenities-heading"
            className="text-[clamp(1.85rem,4.5vw,3.75rem)] font-bold font-heading text-brand-navy tracking-[-0.01em] leading-[1.14] [text-wrap:balance]"
          >
            Comfort, Food &amp; Fun
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed [text-wrap:balance]">
            Complete water park amenities in Auraiya, from poolside dining and a rain dance arena to secure lockers and parking.
          </p>
        </div>

        {/* 2. Responsive Bento Grid:
            - Scaled to 95% max-width container to match signature attractions bento layout
            - Desktop: 2 large feature cards (top) + 2 slimmer utility cards (bottom)
            - Tablet: 2 columns
            - Mobile: 1 column
        */}
        <div className="w-full max-w-[95%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-7 items-stretch">
            {amenities.map((item: Amenity, index: number) => {
              const Icon = iconMap[item.iconName] || Sparkles;
              const isFeature = item.type === "feature";

              return (
                <div
                  key={item.id}
                  style={{
                    transitionDelay: isInView ? `${index * 90}ms` : "0ms",
                  }}
                  className={`transition-all duration-700 ease-out ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  } motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none motion-reduce:duration-0 motion-reduce:delay-0 flex ${
                    isFeature
                      ? "col-span-1 md:col-span-1 lg:col-span-6"
                      : "col-span-1 md:col-span-1 lg:col-span-6"
                  }`}
                >
                  {isFeature ? (
                    /* ==============================================================
                       FEATURE CARD: Immersive image background with bottom navy gradient
                       ============================================================== */
                    <article
                      tabIndex={0}
                      role="region"
                      aria-label={`${item.title} - ${item.category}`}
                      className="group relative w-full overflow-hidden rounded-[24px] bg-brand-navy text-white border border-white/20 shadow-water-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-navy/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2 focus-visible:ring-offset-brand-foam motion-reduce:hover:translate-y-0 motion-reduce:transition-none min-h-[342px] sm:min-h-[370px] lg:min-h-[398px] flex flex-col justify-between p-5 sm:p-6 lg:p-7 select-none"
                    >
                      {/* Background Image with 700ms 1.05 Scale on Hover */}
                      <div className="absolute inset-0 z-0 overflow-hidden">
                        {item.image && (
                          <Image
                            src={item.image}
                            alt={item.imageAlt || item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100 will-change-transform"
                          />
                        )}
                        {/* Directional Contrast Scrim: Rich navy base directly behind text for crisp contrast, feathering smoothly to leave the upper scene bright & sunny */}
                        <div className="absolute inset-x-0 bottom-0 h-64 sm:h-72 bg-[linear-gradient(to_top,rgba(6,32,56,0.96)_0%,rgba(6,32,56,0.85)_32%,rgba(6,32,56,0.45)_60%,transparent_100%)] pointer-events-none" />
                      </div>

                      {/* Top Row: Optional Badge & Soft Circular Aqua-to-Orange Icon */}
                      <div
                        className={`relative z-10 flex items-center gap-3 pointer-events-none ${
                          item.badge ? "justify-between" : "justify-end"
                        }`}
                      >
                        {item.badge && (
                          <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-white/90 bg-brand-navy/60 backdrop-blur-md border border-white/20">
                            {item.badge}
                          </span>
                        )}

                        <div className="w-11 h-11 rounded-full bg-brand-navy/60 backdrop-blur-md text-brand-aqua border border-white/20 flex items-center justify-center transition-colors duration-300 group-hover:bg-brand-coral/20 group-hover:text-brand-coral group-hover:border-brand-coral/40 shadow-sm">
                          <Icon className="w-5 h-5 transition-colors duration-300" strokeWidth={2} />
                        </div>
                      </div>

                      {/* Bottom Content: Category Tag & Title (Clean, uncluttered, with high-contrast text backing) */}
                      <div className="relative z-10 mt-auto pt-20">
                        <span className="text-xs font-bold text-brand-aqua uppercase tracking-[0.12em] block mb-1 drop-shadow-[0_1px_3px_rgba(6,32,56,0.8)]">
                          {item.category}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight leading-snug drop-shadow-[0_2px_8px_rgba(6,32,56,0.7)]">
                          {item.title}
                        </h3>
                      </div>
                    </article>
                  ) : (
                    /* ==============================================================
                       UTILITY CARD: Soft gradient background, 24px radius, soft circle icon,
                       horizontal & slimmer proportions, layered shadow
                       ============================================================== */
                    <article
                      tabIndex={0}
                      role="region"
                      aria-label={`${item.title} - ${item.category}`}
                      className="group relative w-full rounded-[24px] bg-gradient-to-br from-white via-cyan-50/25 to-brand-foam/80 border border-cyan-200/50 p-5 sm:p-6 shadow-[0_4px_20px_-4px_rgba(6,32,56,0.06),0_2px_8px_-2px_rgba(0,196,217,0.06)] hover:shadow-[0_16px_32px_-6px_rgba(6,32,56,0.12),0_6px_16px_-4px_rgba(0,196,217,0.14)] transition-all duration-300 hover:-translate-y-1 motion-reduce:hover:translate-y-0 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2 focus-visible:ring-offset-brand-foam flex flex-col justify-center min-h-[142px] sm:min-h-[156px]"
                    >
                      <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                        {/* Soft circle icon: Aqua by default, shifting to orange on hover */}
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cyan-50 border border-cyan-200/60 text-brand-cyan flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-orange-50 group-hover:border-brand-coral/30 group-hover:text-brand-coral shadow-xs">
                          <Icon
                            className="w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-300"
                            strokeWidth={2}
                          />
                        </div>

                        {/* Content: Category tag, semantic title, readable copy */}
                        <div className="flex-1 min-w-0">
                          <span className="text-[11px] sm:text-xs font-bold text-cyan-700 uppercase tracking-[0.12em] block mb-1">
                            {item.category}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold font-heading text-brand-navy group-hover:text-brand-navy-light transition-colors leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

