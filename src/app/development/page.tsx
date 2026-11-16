import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { WaveDivider } from "@/components/WaveDivider";
import {
  Calendar,
  CheckCircle2,
  Clock,
  AlertCircle,
  Building,
  Layers,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Project Development & Milestones | Soul Dive Auraiya",
  description:
    "Follow the real-time physical development milestones of Soul Dive Water Park in Auraiya. Transparent tracking from concept planning to site excavation and launch.",
  alternates: {
    canonical: `${siteConfig.url}/development`,
  },
};

export default function DevelopmentPage() {
  const milestones = [
    {
      phase: "Phase 1",
      title: "Concept & Destination Planning",
      date: "November 2026",
      status: "Completed",
      description:
        "Comprehensive site zoning, structural dimensions, and attraction placement established. Defining the core blueprint for wave pool, slide complexes, and dining blocks.",
      deliverables: ["Destination proposal plan completed", "Site boundary coordinates verified", "3D conceptual visualizations rendered"],
    },
    {
      phase: "Phase 2",
      title: "Topographic Survey & Boundary Demarcation",
      date: "December 2026",
      status: "Completed",
      description:
        "On-ground topographical contour surveys, soil stability assessments, perimeter boundary demarcation, and arterial access road alignment along Dibiyapur Road at Biriya.",
      deliverables: ["Physical boundary demarcation", "Soil load-bearing tests", "Primary road access preparation"],
    },
    {
      phase: "Phase 3",
      title: "Site Grading & Excavation Preparation",
      date: "Current Active Stage",
      status: "In Progress",
      description:
        "Surface earthworks, land leveling, site clearing, stormwater drainage alignment, and foundational excavation planning for the Mega Wave Pool chamber and slide tower pilings.",
      deliverables: ["Ground excavation profiling", "Stormwater retention planning", "Underground utility conduits layout"],
    },
    {
      phase: "Phase 4",
      title: "Civil Pool Shells & Slide Tower Foundations",
      date: "Upcoming Milestone",
      status: "Scheduled",
      description:
        "Reinforced cement concrete (RCC) casting for the curvilinear leisure pool, kids shallow splash basin, and deep wave pool basin, alongside heavy steel foundation anchoring for the multi-level slide tower.",
      deliverables: ["RCC pool shells pouring", "Slide tower anchor bolt casting", "Waterproofing membrane installation"],
    },
    {
      phase: "Phase 5",
      title: "Slide Complex Fabrication & Pump Filtration",
      date: "Upcoming Milestone",
      status: "Scheduled",
      description:
        "Erection of structural steel slide launch tower, installation of fiberglass reinforced plastic (FRP) Pendulum and Family Raft flumes, and installation of multi-stage industrial sand filtration units.",
      deliverables: ["FRP flumes delivery & assembly", "Pumping & recirculation manifolds", "Wave machine equipment integration"],
    },
    {
      phase: "Phase 6",
      title: "Finishes, Landscaping & Safety Commissioning",
      date: "Pre-Launch Milestone",
      status: "Scheduled",
      description:
        "Tiling, anti-skid pool decks, turf planting on Green Grounds, restaurant fit-outs, lifeguard training, and hydrodynamic wet-testing of all waterslides prior to opening.",
      deliverables: ["Hydrodynamic water flow tests", "Lifeguard safety certifications", "Hospitality & ticketing setup"],
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-brand-navy text-white pt-16 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 text-brand-gold border border-white/20 uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Public Progress Transparency</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight">
            Project Development Status
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto mt-4 leading-relaxed">
            Track the real milestones and physical progress as Soul Dive Water Park transforms into Auraiya’s premier family aquatic destination.
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Transparency Callout */}
          <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3 shadow-sm">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <strong className="font-bold">Commitment to Honest Communication:</strong> We adhere to strict standards of transparency. We never publish speculative opening dates, simulated operational statistics, or fabricated reviews. All milestones below reflect verified project phases.
            </div>
          </div>

          {/* Timeline Vertical Stack */}
          <div className="relative border-l-2 border-cyan-200 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
            {milestones.map((milestone, idx) => {
              const isDone = milestone.status === "Completed";
              const isInProgress = milestone.status === "In Progress";

              return (
                <div key={idx} className="relative">
                  {/* Status Indicator Icon on the line */}
                  <div
                    className={`absolute -left-[35px] sm:-left-[43px] top-1 w-8 h-8 rounded-full flex items-center justify-center border-4 border-white ${
                      isDone
                        ? "bg-brand-green text-white"
                        : isInProgress
                        ? "bg-brand-coral text-white animate-pulse"
                        : "bg-slate-300 text-slate-600"
                    }`}
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : isInProgress ? (
                      <Clock className="w-4 h-4" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-slate-500" />
                    )}
                  </div>

                  {/* Milestone Card */}
                  <div className="p-6 sm:p-8 rounded-3xl bg-white border border-cyan-100 shadow-water-card space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                          {milestone.phase}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-xs font-semibold text-brand-cyan">
                          {milestone.date}
                        </span>
                      </div>
                      <span
                        className={`px-3 py-0.5 rounded-full text-xs font-bold ${
                          isDone
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : isInProgress
                            ? "bg-orange-50 text-orange-700 border border-orange-200 animate-pulse"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {milestone.status}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black font-heading text-brand-navy">
                      {milestone.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {milestone.description}
                    </p>

                    <div className="pt-3 border-t border-cyan-50">
                      <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                        Key Deliverables & Specifications:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {milestone.deliverables.map((item, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-center gap-1.5 text-xs text-slate-700 p-2 rounded-xl bg-brand-foam"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Updates Card */}
          <div className="mt-16 p-8 rounded-3xl bg-white border border-cyan-100 shadow-water-card text-center max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-black font-heading text-brand-navy">
              Want Progress Photo Updates Sent to You?
            </h3>
            <p className="text-sm text-slate-600">
              Subscribe to our VIP pre-launch announcement broadcast on WhatsApp to receive real site progress photos and verified milestones.
            </p>
            <div className="pt-2">
              <Link
                href="/opening-updates"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-brand-coral hover:bg-brand-coral-dark text-white shadow-md transition-all hover:-translate-y-0.5"
              >
                <span>Get VIP Notification Access</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

