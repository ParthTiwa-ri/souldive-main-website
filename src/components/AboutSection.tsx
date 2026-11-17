"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { aboutConfig } from "@/config/about";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { Sparkles, Waves, Heart, ArrowRight, Calendar, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Waves,
  Heart,
};

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
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
      id="about"
      ref={sectionRef}
      className="bg-brand-foam py-16 sm:py-24 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* =========================================================================
              LEFT COLUMN: Visual Anchor with Depth Frame, Floating Badge & Smooth Scale
              ========================================================================= */}
          <div className="lg:col-span-6 w-full">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Subtle Aqua Offset Frame / Depth Glow Behind Image */}
              <div
                className="absolute -inset-2.5 sm:-inset-3.5 rounded-[34px] sm:rounded-[38px] bg-gradient-to-tr from-brand-aqua/25 via-cyan-100/40 to-transparent -rotate-1 sm:-rotate-1.5 pointer-events-none -z-10"
                aria-hidden="true"
              />
              <div
                className="absolute -inset-1.5 rounded-[32px] sm:rounded-[36px] border border-brand-aqua/20 bg-brand-foam pointer-events-none -z-10"
                aria-hidden="true"
              />

              {/* Main Image Container */}
              <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-[0_20px_50px_-12px_rgba(6,32,56,0.18),0_8px_24px_-8px_rgba(0,196,217,0.15)] border border-cyan-100/70 aspect-[4/3] bg-slate-100">
                <Image
                  src={aboutConfig.image}
                  alt={aboutConfig.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`object-cover transition-transform duration-1000 ease-out will-change-transform ${
                    isInView ? "scale-100" : "scale-[1.04]"
                  } motion-reduce:scale-100 motion-reduce:transition-none`}
                />

                {/* Subtle bottom-edge gradient scrim inside image */}
                <div
                  className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/25 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Floating Glass-Style Launch Badge Overlapping Bottom-Right */}
              <div className="absolute bottom-3 right-3 sm:-bottom-4 sm:-right-4 z-20 bg-white/95 backdrop-blur-md border border-cyan-100/90 rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-[0_12px_28px_-6px_rgba(6,32,56,0.16)] flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-aqua/10 text-brand-aqua border border-brand-aqua/20 flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-brand-aqua" strokeWidth={2} />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block leading-tight">
                    Target Launch
                  </span>
                  <span className="text-xs sm:text-sm font-bold font-heading text-brand-navy leading-tight">
                    {aboutConfig.openingYearBadge}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Standardized Eyebrow, Fluid H2, Dark Slate Copy, Dividers & CTA
              ========================================================================= */}
          <div className="lg:col-span-6 space-y-6">
            {/* 1. Heading Block with Staggered Entrance */}
            <div
              style={{ transitionDelay: isInView ? "0ms" : "0ms" }}
              className={`transition-all duration-700 ease-out ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              } motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none`}
            >
              <SectionEyebrow>{aboutConfig.eyebrow}</SectionEyebrow>
              <h2
                id="about-heading"
                className="text-[clamp(2.15rem,4.2vw,3.5rem)] font-bold font-heading text-brand-navy tracking-[-0.01em] leading-[1.12] [text-wrap:balance]"
              >
                {aboutConfig.heading}
              </h2>
            </div>

            {/* 2. Primary Vision Paragraph with Darker Slate Color for AA Contrast */}
            <p
              style={{ transitionDelay: isInView ? "90ms" : "0ms" }}
              className={`text-slate-800 text-[1.05rem] sm:text-[1.125rem] leading-relaxed max-w-[540px] transition-all duration-700 ease-out ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              } motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none`}
            >
              {aboutConfig.paragraph}
            </p>

            {/* 3. Three Compact Highlights with Thin Aqua Dividers */}
            <div
              style={{ transitionDelay: isInView ? "180ms" : "0ms" }}
              className={`divide-y divide-cyan-100/80 border-y border-cyan-100/80 py-1 transition-all duration-700 ease-out ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              } motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none`}
            >
              {aboutConfig.highlights.map((item) => {
                const Icon = iconMap[item.iconName] || Sparkles;
                return (
                  <div
                    key={item.id}
                    className="py-3.5 flex items-start gap-3.5 first:pt-2.5 last:pb-2.5"
                  >
                    <div className="w-8 h-8 rounded-full bg-cyan-50 border border-brand-aqua/25 text-brand-aqua flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Icon className="w-4 h-4 text-brand-aqua" strokeWidth={2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-bold font-heading text-brand-navy leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 4. Optional Vision / Founder Quote Slot */}
            {aboutConfig.founderQuote && (
              <div
                style={{ transitionDelay: isInView ? "240ms" : "0ms" }}
                className={`p-4 rounded-2xl bg-cyan-50/60 border border-cyan-100 flex items-center gap-3.5 transition-all duration-700 ease-out ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                } motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none`}
              >
                {aboutConfig.founderQuote.avatar && (
                  <Image
                    src={aboutConfig.founderQuote.avatar}
                    alt={aboutConfig.founderQuote.author}
                    width={40}
                    height={40}
                    className="rounded-full object-cover shrink-0"
                  />
                )}
                <div className="text-xs text-slate-700 leading-relaxed italic">
                  &ldquo;{aboutConfig.founderQuote.quote}&rdquo;
                  <span className="block not-italic font-bold text-brand-navy text-[11px] mt-0.5">
                    — {aboutConfig.founderQuote.author}, {aboutConfig.founderQuote.role}
                  </span>
                </div>
              </div>
            )}

            {/* 5. Solid Orange Primary Button CTA: "Our Story" */}
            <div
              style={{ transitionDelay: isInView ? "270ms" : "0ms" }}
              className={`pt-1 transition-all duration-700 ease-out ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              } motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none`}
            >
              <Link
                href={aboutConfig.ctaHref}
                className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-bold text-sm sm:text-base bg-brand-coral hover:bg-brand-coral-dark text-white shadow-[0_10px_25px_-5px_rgba(255,87,34,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(255,87,34,0.55)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-brand-foam"
              >
                <span>{aboutConfig.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
