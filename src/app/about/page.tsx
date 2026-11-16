import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { WaveDivider } from "@/components/WaveDivider";
import {
  Sparkles,
  Waves,
  ShieldCheck,
  HeartHandshake,
  Users,
  Compass,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Soul Dive Water Park | Our Story & Vision for Auraiya",
  description:
    "Learn about Soul Dive Water Park, Auraiya's upcoming premier family aquatic destination. Discover our master-planned vision, architectural collaboration, and commitment to family safety.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-brand-navy text-white pt-16 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 text-brand-gold border border-white/20 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Project Vision & Story</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight">
            About Soul Dive Water Park
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto mt-4 leading-relaxed">
            Creating a modern, safe, and joyful aquatic wonderland for families, students, and youth in Auraiya and surrounding regions.
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
          {/* Section: The Story & Motivation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <Image
                  src="/images/soul-dive-aerial-master-view.jpg"
                  alt="Soul Dive Water Park Aerial Perspective"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">
                Why Soul Dive?
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-brand-navy leading-tight">
                Bringing Premier Summer Fun Closer to Home
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Historically, families residing in Auraiya, Dibiyapur, Etawah, and Kanpur Dehat had limited nearby recreation during the sweltering North Indian summer months. Experiencing world-class waterslides or wave pools meant traveling 60–100 km to major metropolitan hubs.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>Soul Dive Water Park</strong> was conceptualized to fill this void. Strategically situated at Biriya along the prime Dibiyapur Road corridor, Soul Dive is designed to be a local sanctuary of aquatic joy, combining exhilarating rides, pristine water hygiene, and serene landscaped picnic grounds.
              </p>
            </div>
          </div>

          {/* Section: Architectural Collaboration */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-cyan-100 shadow-water-card mb-20">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-gold/20 text-brand-navy uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-brand-gold" />
                Master Engineering
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-brand-navy">
                Designed by Arch-Ikon Architects
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                The waterpark&apos;s master proposal was engineered by <strong>Arch-Ikon Architects</strong>, Kanpur (Drawn by Abhishek Kumar, Checked by Ar. Shubham Katiyar, B.Arch., M.Arch.). The plan prioritizes three foundational pillars:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-brand-foam border border-cyan-100 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center font-bold text-lg font-heading">
                  01
                </div>
                <h3 className="text-lg font-bold font-heading text-brand-navy">
                  Guest Safety & Zoning
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Clear physical separation between high-energy slide splash zones and shallow toddler wading areas, ensuring safe leisure for all age groups.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-foam border border-cyan-100 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-brand-coral/10 text-brand-coral flex items-center justify-center font-bold text-lg font-heading">
                  02
                </div>
                <h3 className="text-lg font-bold font-heading text-brand-navy">
                  Hydrodynamic Filtration
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Continuous multi-chamber industrial sand filtration and automated chlorination to maintain crystal-clear, hygienic water quality.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-foam border border-cyan-100 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center font-bold text-lg font-heading">
                  03
                </div>
                <h3 className="text-lg font-bold font-heading text-brand-navy">
                  Tropical Atmosphere
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Lush shade palms, landscaped &ldquo;Green Grounds&rdquo; for family picnics, and poolside café terraces inspired by tropical day-resorts.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Community & Family Commitment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-brand-coral uppercase tracking-wider">
                Our Promise
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-heading text-brand-navy">
                Transparent Pre-Launch Commitment
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                As Soul Dive Water Park takes shape on Dibiyapur Road, we believe in building an authentic relationship with our future visitors. We make no exaggerated promises or artificial claims. Our physical site progress will be documented transparently as each pool basin, slide tower, and landscape feature is cast.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Affordable, family-friendly future ticket pricing structures</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Special student, school picnic, and birthday packages</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Strict water recycling and environmental stewardship</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-brand-navy text-white space-y-5 text-center">
              <h3 className="text-2xl font-black font-heading text-brand-gold">
                Be Part of Our Journey
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Follow our construction updates or register your contact details to receive opening announcements and VIP invitation packages.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Link
                  href="/opening-updates"
                  className="w-full sm:w-auto px-6 py-3 rounded-full font-bold text-xs bg-brand-coral hover:bg-brand-coral-dark text-white shadow-md transition-all"
                >
                  Register for Updates
                </Link>
                <Link
                  href="/development"
                  className="w-full sm:w-auto px-6 py-3 rounded-full font-bold text-xs bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
                >
                  View Development Log
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

