import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { WaveDivider } from "@/components/WaveDivider";
import {
  Compass,
  AlertCircle,
  CheckCircle2,
  MapPin,
  Waves,
  Building,
  Car,
  UtensilsCrossed,
  Music,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resort Layout & Master Plan | 3D Aerial Zoning",
  description:
    "Explore the proposed spatial layout, attraction zoning, visitor pathways, and amenities taking shape at Soul Dive Water Park in Auraiya.",
  alternates: {
    canonical: `${siteConfig.url}/master-plan`,
  },
};

export default function MasterPlanPage() {
  const masterZones = [
    {
      step: "01",
      title: "Main Entrance & Secure Parking",
      category: "Perimeter & Reception",
      icon: Car,
      description:
        "Front vehicular access along Dibiyapur Road featuring dedicated four-wheeler and two-wheeler parking bays, security guard room, ticket booths, and grand welcome turnstiles.",
      details: ["Dedicated 4-wheeler parking bays", "Guard room & security gate", "Multiple ticketing windows", "Waiting concourse"],
    },
    {
      step: "02",
      title: "Guest Services & Costume Concourse",
      category: "Sanitation & Lockers",
      icon: Building,
      description:
        "Positioned along the eastern perimeter, housing gender-separated private changing suites, clean showers, costume issue & return counters, and secure electronic lockers.",
      details: ["Costume issue & return desks", "Spacious changing suites", "Hygienic shower stalls", "Secure locker room"],
    },
    {
      step: "03",
      title: "Junior Splash Pool & Toddler Lawns",
      category: "Kids Aquatic Zone",
      icon: Waves,
      description:
        "South-west designated aquatic zone exclusively for younger children with safe shallow depths (0.3m–0.6m), mushroom spray fountains, mini-flume slides, and dedicated shade cabanas.",
      details: ["0.3m–0.6m safe shallow depth", "Mushroom water fountains", "Dual mini water slides", "Green Ground for kids"],
    },
    {
      step: "04",
      title: "Curvilinear Adult Leisure Pool",
      category: "Central Recreation",
      icon: Waves,
      description:
        "A freeform leisure swimming pool situated in the western central zone with stone deck coping, timber relaxation sundecks, and sun loungers shaded by tropical palms.",
      details: ["Curvilinear pool shape", "Continuous sand filtration", "Wooden sundeck & loungers", "Direct cafe access"],
    },
    {
      step: "05",
      title: "Central Waterslide Launch Tower",
      category: "High-Thrill Complex",
      icon: Waves,
      description:
        "A multi-story engineered steel tower serving two primary slides: the gravity-defying Pendulum Boomerang slide and the multi-passenger Family Raft chute.",
      details: ["Multi-story steel launch tower", "Pendulum boomerang half-pipe", "Multi-rider family raft slide", "Deceleration splash runout"],
    },
    {
      step: "06",
      title: "Rain Dance Disk Plaza",
      category: "Music & Rain Party",
      icon: Music,
      description:
        "Central circular paved amphitheater with overhead rain canopies, choreographed high-pressure mist nozzles, anti-skid mosaic flooring, and sound truss for DJ parties.",
      details: ["Circular paved spray canopy", "Choreographed mist nozzles", "Anti-skid mosaic floor", "Integrated party audio"],
    },
    {
      step: "07",
      title: "The Palm Grill & Outdoor Café",
      category: "Dining & Hospitality",
      icon: UtensilsCrossed,
      description:
        "Multi-cuisine indoor restaurant with commercial kitchen, outdoor shaded café terrace with umbrella tables, and fast-service snack kiosks overlooking the central pools.",
      details: ["Indoor air-conditioned hall", "Al-fresco umbrella patio", "Poolside reflection fountain", "Ready food snack kiosks"],
    },
    {
      step: "08",
      title: "Mega Wave Pool & Deep Apex",
      category: "Signature Main Pool",
      icon: Waves,
      description:
        "The northern anchor of Soul Dive Water Park: a massive beach-entry wave pool with simulated ocean swells, sunlounger shores, and rear wave-generation machinery.",
      details: ["Zero beach gradual slope", "Automated pneumatic waves", "Expansive chaise lounge shore", "Rear Soul Dive branding wall"],
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-brand-navy text-white pt-16 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 text-brand-gold border border-white/20 uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Resort Layout &amp; Zoning</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight">
            Park Master Plan &amp; Layout
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto mt-4 leading-relaxed">
            Explore the proposed spatial layout, attraction zoning, visitor safety pathways, and amenities taking shape in Auraiya.
          </p>
        </div>

        <WaveDivider
          fillColor="#F0FBFD"
          secondaryFillColor="#00A3E0"
          position="bottom"
          variant="dynamic"
        />
      </section>

      {/* Main Content */}
      <section className="bg-brand-foam py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Status Banner */}
          <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3 shadow-sm">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <strong className="font-bold">Proposed Layout Notice:</strong> Soul Dive Water Park is currently under active physical development at Biriya, Dibiyapur Road, Auraiya. All visuals below depict the proposed layout and spatial zoning.
            </div>
          </div>

          {/* Master View Featured Visual */}
          <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-water-card border border-cyan-100 mb-16">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-cyan-100 gap-4">
              <div>
                <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">
                  Bird&apos;s-Eye Perspective
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-heading text-brand-navy">
                  3D Aerial Resort Visualization
                </h2>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-gold/20 text-brand-navy border border-brand-gold/30">
                Proposed Resort Visualization
              </span>
            </div>

            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden mt-6 bg-slate-900">
              <Image
                src="/images/soul-dive-aerial-master-view.jpg"
                alt="Soul Dive Water Park Complete 3D Aerial Resort Layout"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
                priority
              />
            </div>

            <p className="text-xs text-slate-500 mt-4 text-center">
              * Aerial visualization depicts complete proposed master layout: South entrance &amp; parking $\to$ central slide &amp; leisure pools $\to$ North wave pool.
            </p>
          </div>

          {/* Master Zoning Breakdown */}
          <div className="mb-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-brand-coral uppercase tracking-wider">
                Comprehensive Spatial Walkthrough
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-brand-navy mt-1">
                8 Planned Resort Zones
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {masterZones.map((zone) => {
                const Icon = zone.icon;
                return (
                  <div
                    key={zone.step}
                    className="p-6 rounded-3xl bg-white border border-cyan-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-black font-heading text-brand-cyan">
                          {zone.step}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-brand-foam text-brand-navy border border-cyan-100">
                          {zone.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold font-heading text-brand-navy flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-brand-coral shrink-0" />
                        <span>{zone.title}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                        {zone.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-3 border-t border-cyan-50">
                      {zone.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                          <span className="truncate">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="text-center pt-8">
            <Link
              href="/attractions"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-brand-coral hover:bg-brand-coral-dark text-white shadow-lg transition-all"
            >
              <span>Explore Individual Attraction Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
