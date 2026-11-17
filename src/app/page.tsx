import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { attractions } from "@/config/attractions";
import { faqs } from "@/config/faqs";
import { WaveDivider } from "@/components/WaveDivider";
import { AnimatedHeroWave } from "@/components/AnimatedHeroWave";
import { AttractionCard } from "@/components/AttractionCard";
import { ContactForm } from "@/components/ContactForm";
import { AboutSection } from "@/components/AboutSection";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { LocationSection } from "@/components/LocationSection";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import {
  Waves,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  CheckCircle,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* =========================================================================
          SECTION 1: HERO (RESORT-GRADE REDESIGN)
          ========================================================================= */}
      <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center bg-brand-navy overflow-hidden">
        {/* Background Image: High-resolution water park photo with Ken Burns effect */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/soul-dive-hero-cinematic.jpg"
            alt="Soul Dive Water Park Auraiya - Premier Aquatic Resort Destination"
            fill
            sizes="100vw"
            className="object-cover object-[center_right] md:object-center animate-ken-burns motion-reduce:animate-none will-change-transform"
            priority
            quality={92}
          />
          {/* Directional Gradient Scrim: Deep navy contrast behind left text, crystal clear sunny water on right */}
          <div className="absolute inset-0 bg-gradient-hero-scrim pointer-events-none" />

          {/* Soft Top Seam Gradient: navy #082B45 at ~60% opacity fading to transparent over ~120px so the nav blends into the photo */}
          <div
            className="absolute top-0 left-0 right-0 h-[120px] bg-gradient-to-b from-[#082B45]/60 to-transparent pointer-events-none z-10"
            aria-hidden="true"
          />
        </div>

        {/* Content Container (Left-Aligned, Max-Width Container) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-28 md:pt-28 md:pb-32">
          <div className="max-w-3xl lg:max-w-4xl text-left flex flex-col items-start">
            {/* 1. Small Eyebrow Label with Optional Opening Season Badge */}
            <div className="animate-hero-fade-1 inline-flex items-center gap-2.5 mb-5 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-gold shrink-0 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-brand-gold">
                COMING SOON · AURAIYA
              </span>
              {siteConfig.targetOpening && (
                <>
                  <span className="text-white/30 text-xs font-light select-none">|</span>
                  <span className="text-xs sm:text-sm font-semibold tracking-normal text-white/90">
                    {siteConfig.targetOpening}
                  </span>
                </>
              )}
            </div>

            {/* 2. Headline (Max 2 lines, text-wrap: balance, semibold, fluid clamp, tighter letter spacing, orange accent on one word, no exclamation mark) */}
            <h1 className="animate-hero-fade-2 font-heading font-semibold sm:font-bold text-[clamp(2.15rem,4.4vw,4.25rem)] leading-[1.06] tracking-tight text-white mb-6 [text-wrap:balance]">
              Auraiya’s First Water Park Is{" "}
              <span className="text-brand-coral inline-block">Almost</span> Here.
            </h1>

            {/* 3. Subtext (Regular weight, 1.1-1.25rem, 75-80% white opacity, max-width 520px) */}
            <p className="animate-hero-fade-3 text-base sm:text-lg md:text-[1.2rem] font-normal text-white/80 max-w-[520px] leading-relaxed mb-8 sm:mb-9 [text-wrap:pretty]">
              Slides, a mega wave pool and tropical cabanas. Soul Dive Water Park is taking shape at Biriya, Dibiyapur Road, Auraiya.
            </p>

            {/* 4. Action CTAs */}
            <div className="animate-hero-fade-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              {/* Primary CTA ("Explore Attractions"): solid orange, soft orange glow, arrow shifts right on hover, hover lift */}
              <Link
                href="#attractions"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base bg-brand-coral hover:bg-brand-coral-dark text-white shadow-[0_10px_25px_-5px_rgba(255,87,34,0.45)] hover:shadow-[0_15px_30px_-5px_rgba(255,87,34,0.6)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
              >
                <span>Explore Attractions</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1.5" />
              </Link>

              {/* Secondary CTA ("Get Opening Updates"): outlined with white text, 1.5px border at 60% opacity, no frosted glass, WCAG AA contrast, fills lightly on hover */}
              <Link
                href="/opening-updates"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-base text-white border-[1.5px] border-white/60 hover:border-white hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
              >
                <Sparkles className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Get Opening Updates</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Gently Animated 3-Layer Wave Divider into Section 2 */}
        <AnimatedHeroWave fillColor="#F0FBFD" />
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT SOUL DIVE (BESPOKE RESORT-GRADE REDESIGN)
          ========================================================================= */}
      <AboutSection />

      {/* =========================================================================
          SECTION 3: SIGNATURE ATTRACTIONS (PREMIUM BENTO SHOWCASE)
          ========================================================================= */}
      <section
        id="attractions"
        className="pt-20 sm:pt-28 pb-16 sm:pb-24 bg-gradient-to-b from-brand-foam via-cyan-50/25 to-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header (Premium, Balanced H2 with Fluid Size) */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <SectionEyebrow>Featured Water Experiences • औरैया वाटर पार्क</SectionEyebrow>
            <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold font-heading text-brand-navy tracking-[-0.01em] leading-[1.1] [text-wrap:balance]">
              Signature Attractions
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3.5 leading-relaxed [text-wrap:balance]">
              Experience thrilling water slides, a mega wave pool, and relaxing lagoons at Auraiya’s premier water park (औरैया का वाटर पार्क).
            </p>
          </div>

          {/* Bento Grid Showcase - Sized to 95% container width & height */}
          <div className="w-full max-w-[95%] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 items-stretch">
              {/* 1. Large Hero Bento Card: Mega Wave Pool (Spans 2 columns & 2 rows on desktop) */}
              {attractions[0] && (
                <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 flex">
                  <AttractionCard
                    attraction={attractions[0]}
                    isLarge={true}
                    className="w-full min-h-[418px] sm:min-h-[456px] lg:min-h-[580px]"
                  />
                </div>
              )}

              {/* 2. Bento Card: Pendulum & Family Raft Slides */}
              {attractions[1] && (
                <div className="md:col-span-1 lg:col-span-1 flex">
                  <AttractionCard
                    attraction={attractions[1]}
                    isLarge={false}
                    className="w-full min-h-[295px] sm:min-h-[304px] lg:min-h-[276px]"
                  />
                </div>
              )}

              {/* 3. Bento Card: Curvilinear Leisure Pool */}
              {attractions[2] && (
                <div className="md:col-span-1 lg:col-span-1 flex">
                  <AttractionCard
                    attraction={attractions[2]}
                    isLarge={false}
                    className="w-full min-h-[295px] sm:min-h-[304px] lg:min-h-[276px]"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Bottom Action CTA */}
          <div className="mt-12 sm:mt-16 text-center">
            <Link
              href="/attractions"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm bg-brand-navy hover:bg-brand-navy-light text-white shadow-sm hover:shadow-md transition-all hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:outline-none"
            >
              <span>View All Rides & Detailed Specs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: VISITOR AMENITIES (PREMIUM BENTO SHOWCASE)
          ========================================================================= */}
      <AmenitiesSection />

      {/* =========================================================================
          SECTION 5: LOCATION & ROUTE (PREMIUM BESPOKE REDESIGN)
          ========================================================================= */}
      <LocationSection />

      {/* =========================================================================
          SECTION 8: PRE-LAUNCH REGISTRATION & OPENING UPDATES
          ========================================================================= */}
      <section id="updates" className="py-16 sm:py-24 bg-gradient-waterpark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm variant="opening-updates" />
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionEyebrow>Frequently Asked Questions • अक्सर पूछे जाने वाले सवाल</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-brand-navy">
              Everything You Need to Know About Soul Dive
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl mx-auto">
              Find clear answers about Auraiya’s upcoming water park (औरैया में वाटर पार्क), including our water slides, mega wave pool, site location at Biriya, and opening updates.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group p-5 sm:p-6 rounded-2xl bg-brand-foam border border-cyan-100 transition-all [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="pr-4">
                    <span className="text-xs font-bold text-brand-coral uppercase tracking-wider block mb-1">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-brand-navy">
                      {faq.question}
                    </h3>
                    {faq.hindiQuestion && (
                      <span className="text-xs text-brand-cyan font-medium block mt-0.5">
                        {faq.hindiQuestion}
                      </span>
                    )}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white text-brand-cyan group-open:rotate-180 transition-transform duration-200 flex items-center justify-center shadow-sm shrink-0">
                    &darr;
                  </div>
                </summary>
                <div className="mt-4 pt-4 border-t border-cyan-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/faqs"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-cyan hover:underline"
            >
              <span>Have more questions? Read our full FAQ directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

