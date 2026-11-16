import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { attractions } from "@/config/attractions";
import { faqs } from "@/config/faqs";
import { WaveDivider } from "@/components/WaveDivider";
import { AttractionCard } from "@/components/AttractionCard";
import { ContactForm } from "@/components/ContactForm";
import {
  Waves,
  Sparkles,
  MapPin,
  Calendar,
  ArrowRight,
  ShieldAlert,
  CheckCircle,
  HelpCircle,
  Car,
  UtensilsCrossed,
  Music,
  HeartHandshake,
} from "lucide-react";

export default function HomePage() {
  const featuredAttractions = attractions.slice(0, 6);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* =========================================================================
          SECTION 1: HERO (REDESIGNED)
          ========================================================================= */}
      <section className="relative min-h-[92vh] md:min-h-[88vh] flex items-center justify-center bg-brand-navy overflow-hidden">
        {/* Background Image: Cinematic Commercial Waterpark Photograph */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/soul-dive-hero-cinematic.jpg"
            alt="Soul Dive Water Park Auraiya - Premier Tropical Waterpark Destination"
            fill
            sizes="100vw"
            className="object-cover object-center animate-subtle-zoom will-change-transform"
            priority
            quality={90}
          />
          {/* Subtle multi-stop gradient overlay: light at center, subtle darkening only behind text and at boundaries */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-black/25 to-brand-navy/70 pointer-events-none" />
          {/* Soft radial scrim to ensure razor-sharp text contrast without dimming sunny water & slides */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28 text-center text-white">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/35 text-xs sm:text-sm font-black tracking-widest text-white uppercase mb-6 shadow-lg animate-float">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-ping shrink-0" />
            <span className="w-2.5 h-2.5 rounded-full bg-brand-gold -ml-5 shrink-0" />
            <span className="text-white drop-shadow">COMING SOON • A NEW WATER DESTINATION IN AURAIYA</span>
          </div>

          {/* Main H1 Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight leading-[1.06] mb-6 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
            A New Wave of Fun Is Coming to{" "}
            <span className="text-gradient-sun inline-block">Auraiya!</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-3xl mx-auto font-medium leading-relaxed mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Get ready for an exciting new destination for family entertainment, thrilling water slides, rolling ocean waves and tropical poolside experiences. Coming soon to Biriya, Dibiyapur Road, Auraiya.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <Link
              href="#attractions"
              className="w-full sm:w-auto px-9 py-4 rounded-full font-black text-base bg-brand-coral hover:bg-brand-coral-dark text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 group"
            >
              <Waves className="w-5 h-5 transition-transform group-hover:rotate-12" />
              <span>Explore Attractions</span>
            </Link>
            <Link
              href="#updates"
              className="w-full sm:w-auto px-9 py-4 rounded-full font-bold text-base bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 group"
            >
              <Sparkles className="w-5 h-5 text-brand-gold transition-transform group-hover:scale-125" />
              <span>Get Opening Updates</span>
            </Link>
          </div>

          {/* Subtle Conceptual Visualization Tag (unobtrusive, placed below CTAs) */}
          <div className="mt-12 inline-flex items-center gap-2 text-[11px] sm:text-xs text-white/80 bg-black/35 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
            <span>Conceptual Destination Visualization • Project Under Active Development</span>
          </div>
        </div>

        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <WaveDivider
            fillColor="#F0FBFD"
            secondaryFillColor="#00C4D9"
            variant="dynamic"
          />
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT SOUL DIVE / PROJECT VISION (STREAMLINED & TROPICAL)
          ========================================================================= */}
      <section className="bg-brand-foam py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Left Column: Tropical Family Waterpark Paradise */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-md border border-cyan-100/60 aspect-[4/3] bg-slate-100">
                <Image
                  src="/images/soul-dive-vision-tropical.jpg"
                  alt="Soul Dive Water Park Auraiya - Proposed Tropical Family Leisure Oasis"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                {/* Clear Proposed Visualization Notice */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-brand-navy/85 text-white backdrop-blur-sm border border-white/20">
                    Proposed Tropical Oasis
                  </span>
                </div>
              </div>
            </div>

            {/* Content Right Column: Concise, Scannable & Punchy */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest block">
                About the Project
              </span>

              {/* Required H2 Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-brand-navy leading-tight tracking-tight">
                A New Waterpark Destination for Auraiya
              </h2>

              {/* Bite-Sized Vision Paragraph (Fast to consume, SEO-rich) */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Coming soon to Biriya on Dibiyapur Road, Soul Dive brings thrilling waterslides, rolling wave pools, and tropical poolside relaxation to families across Auraiya, Dibiyapur, and Etawah.
              </p>

              {/* Two Crisp, Fast-to-Scan Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="p-4 rounded-2xl bg-white border border-cyan-100/80 shadow-xs space-y-1">
                  <h3 className="text-sm font-bold font-heading text-brand-navy flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-coral shrink-0" />
                    <span>Fun for Every Generation</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Gentle splash pools for kids to high-thrill slides for youth.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-cyan-100/80 shadow-xs space-y-1">
                  <h3 className="text-sm font-bold font-heading text-brand-navy flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-cyan shrink-0" />
                    <span>A Complete Day Out</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Wave pools, rain dance arena, green lawns &amp; poolside dining.
                  </p>
                </div>
              </div>

              {/* Direct Story Link */}
              <div className="pt-1">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-cyan hover:text-brand-cyan-dark hover:underline group"
                >
                  <span>Learn more about Soul Dive&apos;s story</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: EXPLORE PROPOSED ATTRACTIONS (CLEAN & SPACIOUS)
          ========================================================================= */}
      <section id="attractions" className="py-20 sm:py-28 bg-slate-50/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header (Clean, Premium, SEO-friendly H2) */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest block mb-2">
              Featured Water Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-brand-navy tracking-tight">
              Proposed Attractions at Soul Dive
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Explore the signature aquatic attractions and family leisure pools planned for Auraiya, designed for all ages to enjoy.
            </p>
          </div>

          {/* Attraction Cards Grid: 3 columns desktop, 2 columns tablet, 1 column mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {featuredAttractions.map((attraction, idx) => (
              <AttractionCard
                key={attraction.id}
                attraction={attraction}
                priority={idx < 3}
              />
            ))}
          </div>

          {/* Bottom Action */}
          <div className="mt-14 sm:mt-16 text-center">
            <Link
              href="/attractions"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-brand-navy hover:bg-brand-navy-light text-white shadow-sm hover:shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <span>View All Planned Rides & Detailed Specs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: PLANNED GUEST FACILITIES
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-gold/20 text-brand-navy uppercase tracking-wider mb-2">
              <UtensilsCrossed className="w-3.5 h-3.5 text-brand-gold" />
              Visitor Amenities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-brand-navy tracking-tight">
              Planned Hospitality & Comfort
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Every facility is being designed for guest hygiene, family comfort, and seamless operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-brand-foam border border-cyan-100 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-navy">
                Restaurant & Outdoor Café
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A multi-cuisine dining hall plus poolside shaded tables with umbrellas serving fresh snacks, refreshments, and family meals.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-brand-foam border border-cyan-100 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-coral/10 text-brand-coral flex items-center justify-center">
                <Music className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-navy">
                Rain Dance Music Arena
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Circular paved dance arena with overhead misting rain jets and party audio systems for high-energy celebrations.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-brand-foam border border-cyan-100 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-navy">
                Dedicated Parking
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Expansive four-wheeler and two-wheeler parking bays directly outside the main entrance concourse along Dibiyapur Road.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-brand-foam border border-cyan-100 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 text-brand-navy flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-navy">
                Lockers & Costume Counters
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Gender-separated changing rooms, clean showers, costume issue & return counters, and secure electronic lockers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: PROJECT DEVELOPMENT STATUS
          ========================================================================= */}
      <section className="py-20 bg-brand-foam relative border-y border-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 uppercase tracking-wider mb-2">
                <Calendar className="w-3.5 h-3.5" />
                Transparent Milestones
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-heading text-brand-navy">
                Project Development Status
              </h2>
            </div>
            <Link
              href="/development"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-cyan hover:underline"
            >
              <span>View Verified Milestone Log</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-cyan-100 shadow-sm space-y-2">
              <span className="text-xs font-bold text-brand-green uppercase tracking-wider">
                ✓ Milestone Completed
              </span>
              <h3 className="text-lg font-bold font-heading text-brand-navy">
                Concept & Destination Planning
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comprehensive zoning, attraction layout planning, and guest experience design for Auraiya&apos;s upcoming park.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-cyan-100 shadow-sm space-y-2">
              <span className="text-xs font-bold text-brand-green uppercase tracking-wider">
                ✓ Milestone Completed
              </span>
              <h3 className="text-lg font-bold font-heading text-brand-navy">
                Site Survey & Boundary Demarcation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Land topography survey, boundary perimeter marking, and access road alignment at Biriya, Dibiyapur Road.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-brand-cyan/5 border border-brand-cyan/30 shadow-sm space-y-2">
              <span className="text-xs font-bold text-brand-coral uppercase tracking-wider animate-pulse">
                ⚙ Active Current Phase
              </span>
              <h3 className="text-lg font-bold font-heading text-brand-navy">
                Civil Works & Pool Excavation Prep
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Site grading, ground preparation, and structural engineering validations for Wave Pool and slide tower foundations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: LOCATION & REGIONAL CONNECTIVITY
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-coral/10 text-brand-coral border border-brand-coral/20 uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Prime Highway Location</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-heading text-brand-navy tracking-tight leading-tight">
                Easily Accessible Across Auraiya & Nearby Districts
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Soul Dive is strategically located on <strong>Dibiyapur Road at Biriya</strong>, offering smooth dual-lane connectivity from both Auraiya town center and Dibiyapur railway hub.
              </p>

              {/* Distance Matrix */}
              <div className="space-y-2 pt-2">
                {siteConfig.nearbyAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-2xl bg-brand-foam border border-cyan-100 text-xs sm:text-sm"
                  >
                    <span className="font-semibold text-brand-navy">{area.name}</span>
                    <span className="font-bold text-brand-coral">
                      {area.distance} • {area.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/location"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm bg-brand-cyan hover:bg-brand-cyan-dark text-white shadow-md transition-all"
                >
                  <span>Interactive Map & Driving Directions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Map Preview Container */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden shadow-water-card border-2 border-cyan-100 aspect-[16/11] bg-slate-100 p-2">
                <iframe
                  title="Soul Dive Water Park Auraiya Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14300.000000000000!2d79.5100000!3d26.5050000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399de94c8e762c2f%3A0x6b7b203c94505717!2sAuraiya%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full rounded-2xl border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: PRE-LAUNCH REGISTRATION & OPENING UPDATES
          ========================================================================= */}
      <section id="updates" className="py-20 sm:py-28 bg-gradient-waterpark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            title="Register for VIP Opening Updates"
            subtitle="Be the first in Auraiya to know when ticket booking opens. Receive official milestone announcements and early-access family packages."
            variant="opening-updates"
          />
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-brand-navy">
              Everything You Need to Know
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Transparent answers regarding our location, construction status, proposed rides, and future ticket sales.
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

