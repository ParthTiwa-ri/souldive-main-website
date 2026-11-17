import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { attractions } from "@/config/attractions";
import { AttractionCard } from "@/components/AttractionCard";
import { PageHeader } from "@/components/PageHeader";
import { Waves, Sparkles, Compass, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Attractions & Water Slides",
  description:
    "Preview proposed attractions for Soul Dive Water Park in Auraiya: Mega Wave Pool, Pendulum & Raft Slides, Rain Dance Arena, and Kids Splash Lagoon.",
  alternates: {
    canonical: `${siteConfig.url}/attractions`,
  },
  openGraph: {
    title: "Attractions & Water Slides | Soul Dive Water Park Auraiya",
    description:
      "Preview proposed attractions for Soul Dive Water Park in Auraiya: Mega Wave Pool, Pendulum & Raft Slides, Rain Dance Arena, and Kids Splash Lagoon.",
    url: `${siteConfig.url}/attractions`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/soul-dive-hero-cinematic.jpg",
        width: 1200,
        height: 630,
        alt: "Soul Dive Water Park Auraiya Attractions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Attractions & Water Slides | Soul Dive Water Park Auraiya",
    description:
      "Preview proposed attractions for Soul Dive Water Park in Auraiya: Mega Wave Pool, Pendulum & Raft Slides, Rain Dance Arena, and Kids Splash Lagoon.",
    images: ["/images/soul-dive-hero-cinematic.jpg"],
  },
};

export default function AttractionsPage() {
  const ridesAndPools = attractions.slice(0, 5);
  const facilities = attractions.slice(5);

  return (
    <div className="w-full">
      {/* Shared Page Header */}
      <PageHeader
        eyebrow="SOUL DIVE ATTRACTIONS"
        title="Attractions & Experiences"
        subtitle="From the roaring wave crests to gravity-defying slides and gentle toddler splash zones, preview what is planned for Soul Dive Water Park in Auraiya."
      />

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

          {/* Group 1: Rides & Pools (3-Column Grid) */}
          <div className="mb-14 sm:mb-16">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy">
                Rides & Pools
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ridesAndPools.map((attraction, idx) => (
                <div
                  key={attraction.id}
                  className={idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}
                >
                  <AttractionCard
                    attraction={attraction}
                    priority={idx < 3}
                    className="min-h-[380px] w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Group 2: Facilities (2-Column Grid) */}
          <div className="mb-14 sm:mb-16">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy">
                Facilities
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facilities.map((attraction) => (
                <AttractionCard
                  key={attraction.id}
                  attraction={attraction}
                  className="min-h-[380px]"
                />
              ))}
            </div>
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

