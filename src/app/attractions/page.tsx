import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { attractions } from "@/config/attractions";
import { AttractionCard } from "@/components/AttractionCard";
import { WaveDivider } from "@/components/WaveDivider";
import { Waves, Sparkles, Compass, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Proposed Attractions & Slides | Mega Wave Pool, Pendulum Ride",
  description:
    "Preview the proposed aquatic attractions planned for Soul Dive Water Park in Auraiya: Mega Wave Pool, Pendulum & Family Raft Slides, Rain Dance Disk, Kids Splash Lagoon, and Leisure Pools.",
  alternates: {
    canonical: `${siteConfig.url}/attractions`,
  },
};

export default function AttractionsPage() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-brand-navy text-white pt-16 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 text-brand-gold border border-white/20 uppercase tracking-wider mb-4">
            <Waves className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Proposed Aquatic Attractions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight">
            Proposed Attractions & Rides
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto mt-4 leading-relaxed">
            From the roaring wave crests to gravity-defying slides and gentle toddler splash zones, preview what is planned for Soul Dive Water Park in Auraiya.
          </p>
        </div>

        <WaveDivider
          fillColor="#F0FBFD"
          secondaryFillColor="#00A3E0"
          position="bottom"
          variant="dynamic"
        />
      </section>

      {/* Main Content Area */}
      <section className="bg-brand-foam py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Transparency Disclaimer Banner */}
          <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3 shadow-sm">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <strong className="font-bold">Pre-Launch Notice:</strong> All rides, pools, and amenities displayed below represent proposed attractions planned for Soul Dive Water Park at Biriya, Dibiyapur Road, Auraiya. The park is currently under active development and non-operational.
            </div>
          </div>

          {/* Attraction Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, idx) => (
              <AttractionCard
                key={attraction.id}
                attraction={attraction}
                priority={idx < 3}
                className="min-h-[380px]"
              />
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 p-8 rounded-3xl bg-white border border-cyan-100 shadow-water-card text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-gold/20 text-brand-navy uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              Stay Informed
            </span>
            <h3 className="text-2xl font-black font-heading text-brand-navy">
              Want First Access When Ticket Bookings Open?
            </h3>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              Join our VIP list to receive official announcements on launch dates, exclusive early-bird family passes, and ride testing previews.
            </p>
            <div className="pt-2">
              <Link
                href="/opening-updates"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-brand-coral hover:bg-brand-coral-dark text-white shadow-md transition-all hover:-translate-y-0.5"
              >
                <span>Register for Opening Updates</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

