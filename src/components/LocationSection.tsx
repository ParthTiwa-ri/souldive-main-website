"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Car,
  Compass,
  Train,
  ArrowRight,
  ChevronDown,
  Waves,
  Navigation,
  ExternalLink,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";
import {
  SOUL_DIVE_COORDINATES,
  PRIMARY_DISTANCES,
  SECONDARY_DISTANCES,
  LOCATION_CONFIG,
  PrimaryDistanceStat,
  SecondaryDistanceItem,
} from "@/config/location";

const iconMap: Record<string, LucideIcon> = {
  car: Car,
  compass: Compass,
  train: Train,
};

export const LocationSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion preference
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
        threshold: 0.12,
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
      id="location"
      ref={sectionRef}
      className="scroll-mt-20 py-16 sm:py-24 bg-white relative overflow-hidden"
      aria-labelledby="location-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* =========================================================================
              LEFT COLUMN: HEADINGS, STAT TILES, ACCORDION, CTA & TRIP NOTE
              ========================================================================= */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            {/* 1. Heading Block: Consistent plain aqua uppercase eyebrow and fluid balanced heading */}
            <div
              style={{
                transitionDelay: isInView ? "0ms" : "0ms",
              }}
              className={`transition-all duration-700 ease-out ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              } motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none`}
            >
              <span className="text-xs sm:text-sm font-bold text-brand-aqua uppercase tracking-[0.12em] block mb-2.5">
                {LOCATION_CONFIG.eyebrow}
              </span>
              <h2
                id="location-heading"
                className="text-[clamp(2rem,3.8vw,3.25rem)] font-bold font-heading text-brand-navy tracking-[-0.01em] leading-[1.12] [text-wrap:balance]"
              >
                {LOCATION_CONFIG.heading}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed [text-wrap:balance]">
                {LOCATION_CONFIG.subtext}
              </p>
            </div>

            {/* 2. Top 3 Distance Stat Tiles */}
            <div
              style={{
                transitionDelay: isInView ? "90ms" : "0ms",
              }}
              className={`transition-all duration-700 ease-out ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              } motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none`}
            >
              <div
                className="grid grid-cols-3 gap-2.5 sm:gap-4 items-stretch"
                role="region"
                aria-label="Key Travel Distances to Soul Dive"
              >
                {PRIMARY_DISTANCES.map((stat: PrimaryDistanceStat) => {
                  const Icon = iconMap[stat.iconName] || Car;
                  return (
                    <div
                      key={stat.id}
                      className={`relative flex flex-col justify-between p-3 sm:p-4 rounded-2xl transition-all duration-300 border ${
                        stat.highlight
                          ? "bg-gradient-to-br from-brand-foam via-white to-white border-brand-aqua/40 shadow-[0_4px_16px_rgba(0,196,217,0.12)] ring-1 ring-brand-aqua/20"
                          : "bg-white border-cyan-100/80 shadow-xs hover:border-cyan-200 hover:shadow-sm"
                      }`}
                    >
                      {stat.highlight && (
                        <span className="absolute -top-2.5 right-2 sm:right-3 px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider bg-brand-coral text-white shadow-xs">
                          Fastest
                        </span>
                      )}

                      {/* Header Row: Icon + km label */}
                      <div className="flex items-center justify-between mb-2">
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center ${
                            stat.highlight
                              ? "bg-brand-coral/10 text-brand-coral"
                              : "bg-brand-foam text-brand-cyan"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <span className="text-[11px] sm:text-xs font-bold text-slate-500 font-mono">
                          {stat.distance}
                        </span>
                      </div>

                      {/* Primary Stat: Minutes */}
                      <div className="flex items-baseline gap-1 my-0.5">
                        <span className="text-2xl sm:text-4xl font-black font-heading text-brand-navy tracking-tight leading-none">
                          {stat.minutes}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-brand-coral uppercase tracking-wide">
                          {stat.unit}
                        </span>
                      </div>

                      {/* Destination Label */}
                      <div className="mt-1">
                        <span className="text-xs sm:text-sm font-bold text-brand-navy leading-tight block line-clamp-2">
                          {stat.name}
                        </span>
                        {stat.stationNote && (
                          <span className="hidden sm:block text-[10px] text-slate-400 mt-0.5 leading-tight truncate" title={stat.stationNote}>
                            Phaphund (PHD)
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Secondary Distances Accordion */}
            <div
              style={{
                transitionDelay: isInView ? "180ms" : "0ms",
              }}
              className={`transition-all duration-700 ease-out ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              } motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none`}
            >
              <div className="border border-cyan-100/90 rounded-2xl bg-brand-foam/40 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                  aria-expanded={isAccordionOpen}
                  aria-controls="more-distances-panel"
                  className="w-full flex items-center justify-between px-3.5 sm:px-4 py-3 text-left text-xs sm:text-sm font-bold text-brand-navy hover:text-brand-coral transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-inset"
                >
                  <span className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span>
                      {isAccordionOpen
                        ? "Hide additional regional distances"
                        : "More distances (Bidhuna, Etawah, Kanpur Dehat)"}
                    </span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                      isAccordionOpen ? "rotate-180 text-brand-coral" : ""
                    }`}
                  />
                </button>

                {isAccordionOpen && (
                  <div
                    id="more-distances-panel"
                    className="px-3.5 sm:px-4 pb-3.5 pt-1 border-t border-cyan-100/70 space-y-2"
                  >
                    {SECONDARY_DISTANCES.map((item: SecondaryDistanceItem) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-cyan-50/80 text-xs sm:text-sm"
                      >
                        <div>
                          <span className="font-bold text-brand-navy block">
                            {item.name}
                          </span>
                          {item.routeDetail && (
                            <span className="text-[11px] text-slate-500 hidden sm:block">
                              {item.routeDetail}
                            </span>
                          )}
                        </div>
                        <div className="text-right">
                          <span className="font-extrabold text-brand-coral font-heading">
                            {item.time}
                          </span>
                          <span className="text-[11px] text-slate-500 block font-mono">
                            {item.distance}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 4. Single Orange Primary CTA Button & "Plan your trip" note */}
            <div
              style={{
                transitionDelay: isInView ? "270ms" : "0ms",
              }}
              className={`transition-all duration-700 ease-out space-y-3 pt-1 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              } motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none`}
            >
              <div>
                <a
                  href={LOCATION_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm sm:text-base bg-brand-coral hover:bg-brand-coral-dark text-white shadow-md hover:shadow-lg hover:shadow-brand-coral/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2 motion-reduce:hover:translate-y-0"
                >
                  <span>{LOCATION_CONFIG.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" />
                </a>
              </div>

              {/* Editable "Plan your trip" note */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                <span className="font-medium">
                  {LOCATION_CONFIG.planYourTripNote}
                </span>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: PREMIUM BESPOKE MAP WITH BRANDED MARKER & SOFT STYLING
              ========================================================================= */}
          <div
            style={{
              transitionDelay: isInView ? "360ms" : "0ms",
            }}
            className={`lg:col-span-6 transition-all duration-700 ease-out ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            } motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none`}
          >
            {/* Map Frame Wrapper:
                - Rounded corners 24-28px (rounded-[26px])
                - Soft layered shadow (shadow-2xl layered)
                - No pale border (border-0, subtle ring-1 ring-black/5 for crisp edge definition)
                - Height: 340-380px on mobile/tablet, 480px on desktop
            */}
            <div className="relative w-full h-[340px] sm:h-[380px] lg:h-[480px] rounded-[26px] overflow-hidden shadow-[0_20px_50px_rgba(6,32,56,0.10),0_6px_18px_rgba(0,163,224,0.06),0_1px_3px_rgba(6,32,56,0.04)] ring-1 ring-black/5 bg-slate-100">
              {/* Iframe with Muted Custom Styling (Soft blue/grey filter, suppresses harsh default glare) */}
              <iframe
                title="Soul Dive Water Park Auraiya Location Map"
                aria-label="Soul Dive Water Park interactive location map"
                src={LOCATION_CONFIG.embedUrl}
                className="w-full h-full border-0 select-none filter contrast-[1.02] brightness-[0.98] saturate-[0.8] grayscale-[25%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Soft Brand Tone Overlay (pointer-events-none so users can pan/zoom if desired) */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-brand-navy/[0.04] via-transparent to-brand-cyan/[0.05] mix-blend-multiply" />

              {/* Custom Branded Marker (Centered on Soul Dive Site Coordinates) */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none flex flex-col items-center select-none"
                aria-hidden="true"
              >
                {/* Floating Branded Badge Label */}
                <div className="mb-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(6,32,56,0.18)] border border-cyan-100/90 flex items-center gap-2 transform transition-transform hover:scale-105">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-coral opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-coral" />
                  </span>
                  <span className="text-xs font-bold font-heading text-brand-navy tracking-tight">
                    {SOUL_DIVE_COORDINATES.name}
                  </span>
                  <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider bg-brand-foam px-1.5 py-0.5 rounded-md border border-cyan-100">
                    Biriya
                  </span>
                </div>

                {/* Branded Pin Marker: Orange water-wave icon with pulsing ripple rings */}
                <div className="relative flex items-center justify-center">
                  {/* Outer pulse wave */}
                  <div className="absolute -inset-3 rounded-full bg-brand-coral/20 animate-ping" />
                  <div className="absolute -inset-1.5 rounded-full bg-brand-coral/30" />

                  {/* Solid orange circular marker */}
                  <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-brand-coral to-brand-coral-dark text-white flex items-center justify-center shadow-[0_8px_20px_rgba(255,87,34,0.45)] border-2 border-white ring-2 ring-brand-coral/40">
                    <Waves className="w-5 h-5 text-white stroke-[2.5]" />
                  </div>
                </div>

                {/* Downward Pointer Tip */}
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-brand-coral-dark -mt-0.5 shadow-sm" />
              </div>

              {/* Floating "Open in Google Maps" Corner Micro-Pill */}
              <a
                href={LOCATION_CONFIG.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3.5 right-3.5 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-brand-navy hover:text-brand-coral shadow-md hover:shadow-lg border border-slate-200/80 transition-all hover:scale-105 focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:outline-none"
                aria-label="Open Soul Dive location in Google Maps"
              >
                <Navigation className="w-3.5 h-3.5 text-brand-coral" />
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
