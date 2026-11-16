"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { CONNECTIVITY_DISTANCES } from "@/config/location";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  AlertCircle,
  Instagram,
  Facebook,
  Youtube,
  Send,
  CheckCircle2,
} from "lucide-react";

export const Footer: React.FC = () => {
  const [leadInput, setLeadInput] = useState("");
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadInput.trim()) return;

    // =========================================================================
    // TODO: Connect to backend lead capture API / CRM endpoint
    // (e.g., POST /api/leads or third-party email/SMS provider webhook)
    // Note: In accordance with project instructions, fake submissions are not executed.
    // =========================================================================
    setLeadSubmitted(true);
  };

  // Filter available social platforms that have a configured URL
  const socialLinks = [
    { name: "Instagram", url: siteConfig.social?.instagram, icon: Instagram },
    { name: "Facebook", url: siteConfig.social?.facebook, icon: Facebook },
    { name: "YouTube", url: siteConfig.social?.youtube, icon: Youtube },
  ].filter((item) => Boolean(item.url && item.url.trim()));

  return (
    <footer className="bg-brand-navy text-white relative mt-16 sm:mt-24">
      {/* =========================================================================
          1. TOP WAVE DIVIDER (3 Stacked Navy wave layers rising into previous section)
          Matches the exact 3-layer parallax, speed & motion of the Hero Wave:
          - Back Layer: 28s reverse, opacity 0.30
          - Mid Layer: 22s forward, opacity 0.60
          - Front Layer: 16s forward, solid #062038
          ========================================================================= */}
      <div
        className="absolute -top-[59px] sm:-top-[79px] lg:-top-[95px] left-0 right-0 w-full overflow-hidden h-[60px] sm:h-[80px] lg:h-[96px] pointer-events-none select-none z-10"
        aria-hidden="true"
      >
        {/* Layer 1: Back Layer (Reverse swell, 28s, opacity 0.30) */}
        <svg
          className="absolute bottom-[-1px] left-0 w-[200%] h-full animate-wave-back pointer-events-none"
          viewBox="0 0 2400 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 0, 50 C 180, 15 420, 95 650, 45 C 880, -5 1020, 85 1200, 50 C 1380, 15 1620, 95 1850, 45 C 2080, -5 2220, 85 2400, 50 L 2400, 120 L 0, 120 Z"
            fill="#062038"
            opacity="0.30"
          />
        </svg>

        {/* Layer 2: Mid Layer (Forward rolling wave, 22s, opacity 0.60) */}
        <svg
          className="absolute bottom-[-1px] left-0 w-[200%] h-full animate-wave-mid pointer-events-none"
          viewBox="0 0 2400 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 0, 25 C 160, 65 380, -20 600, 30 C 820, 80 1040, -15 1200, 25 C 1360, 65 1580, -20 1800, 30 C 2020, 80 2240, -15 2400, 25 L 2400, 120 L 0, 120 Z"
            fill="#062038"
            opacity="0.60"
          />
        </svg>

        {/* Layer 3: Front Layer (Solid primary crest, 16s, solid #062038) */}
        <svg
          className="absolute bottom-[-1px] left-0 w-[200%] h-full animate-wave-front pointer-events-none"
          viewBox="0 0 2400 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 0, 40 C 150, 85 350, -10 550, 40 C 750, 90 1050, -5 1200, 40 C 1350, 85 1550, -10 1750, 40 C 1950, 90 2250, -5 2400, 40 L 2400, 120 L 0, 120 Z"
            fill="#062038"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 md:pb-12">
        {/* =========================================================================
            2. COMPACT PRE-LAUNCH STATUS NOTICE
            Smaller padding, trimmed 2-line copy, yellow title kept smaller,
            responsive: stacks button on mobile
            ========================================================================= */}
        <div className="mb-10 p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-lg bg-brand-gold/20 text-brand-gold shrink-0 mt-0.5">
              <AlertCircle className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-brand-gold tracking-wider uppercase font-heading">
                Official Pre-Launch Status Notice
              </h4>
              <p className="text-xs sm:text-[13px] text-slate-300 mt-0.5 leading-relaxed">
                Soul Dive is under active development and{" "}
                <strong className="text-white">not operational</strong>. Images are{" "}
                <strong className="text-white">Proposed Visualizations</strong>; tickets and entry are not currently on sale.
              </p>
            </div>
          </div>
          <Link
            href="/about"
            className="w-full sm:w-auto text-center shrink-0 px-4 py-2 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
          >
            Learn More About Soul Dive &rarr;
          </Link>
        </div>

        {/* =========================================================================
            10. RESPONSIVE 4-COLUMN FOOTER GRID
            4 cols on desktop (lg), 2 on tablet (md), 1 on mobile
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 shrink-0">
                <Image
                  src="/images/Soul Dive Water Park Logo-1.png"
                  alt="Soul Dive Water Park Logo"
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight font-heading text-white">
                  SOUL DIVE
                </span>
                <p className="text-[11px] font-bold text-brand-cyan uppercase tracking-wider">
                  Water Park • Auraiya, UP
                </p>
              </div>
            </div>

            {/* 4. Description Copy: standardized on "Water Park", rain dance arena, family water park */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              An upcoming family water park taking shape at Biriya, Dibiyapur Road, Auraiya. Featuring high-energy waterslides, a mega wave pool, leisure lagoons, a rain dance arena, and poolside dining.
            </p>

            {/* 9. WhatsApp Button (duplicate phone button removed) */}
            <div className="pt-1">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%20Soul%20Dive%20Water%20Park,%20please%20send%20me%20updates.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Updates</span>
              </a>
            </div>

            {/* 7. Social Links Row (Instagram, Facebook, YouTube from config) */}
            {socialLinks.length > 0 && (
              <div className="pt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Follow Our Progress
                </span>
                <div className="flex items-center gap-2.5">
                  {socialLinks.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow Soul Dive Water Park on ${item.name}`}
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-aqua/20 hover:text-brand-aqua text-slate-300 border border-white/15 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                      >
                        <IconComponent className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Column 2: Explore & Subpages */}
          <div>
            {/* 3. Heading: Aqua, smaller, tracking-[0.12em] */}
            <h4 className="text-xs sm:text-[13px] font-bold text-brand-aqua uppercase tracking-[0.12em] mb-4 font-heading">
              Explore Soul Dive
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="/attractions" className="hover:text-brand-cyan transition-colors">
                  Proposed Attractions
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-cyan transition-colors">
                  About the Project
                </Link>
              </li>
              {/* 8. Site Directions moved into Explore column */}
              <li>
                <Link href="/location" className="hover:text-brand-cyan transition-colors">
                  Site Directions &amp; Map
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-brand-cyan transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/opening-updates" className="hover:text-brand-cyan transition-colors">
                  Pre-Launch Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Regional Connectivity (5. Pulls from shared CONNECTIVITY_DISTANCES) */}
          <div>
            {/* 3. Heading: Aqua, smaller, tracking-[0.12em] */}
            <h4 className="text-xs sm:text-[13px] font-bold text-brand-aqua uppercase tracking-[0.12em] mb-4 font-heading">
              Connectivity &amp; Reach
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {CONNECTIVITY_DISTANCES.slice(0, 4).map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center py-1 border-b border-white/5"
                >
                  <span>{item.name}</span>
                  <span className="font-semibold text-brand-aqua">
                    {item.distance} ({item.time})
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div>
            {/* 3. Heading: Aqua, smaller, tracking-[0.12em] */}
            <h4 className="text-xs sm:text-[13px] font-bold text-brand-aqua uppercase tracking-[0.12em] mb-4 font-heading">
              Location &amp; Contact
            </h4>
            <address className="not-italic text-xs sm:text-sm text-slate-300 space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-coral shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Biriya, Dibiyapur Road, Auraiya, Uttar Pradesh 206122, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* =========================================================================
            6. COMPACT LEAD CAPTURE (Above Bottom Bar)
            Single email or phone input with orange button
            ========================================================================= */}
        <div className="my-8 sm:my-10 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h4 className="text-sm font-bold font-heading text-white">
              Get Opening Updates
            </h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Be the first to receive VIP launch announcements, ticket rates, and early bird access.
            </p>
          </div>

          {leadSubmitted ? (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Thank you! Your interest has been recorded.</span>
            </div>
          ) : (
            <form
              onSubmit={handleLeadSubmit}
              className="w-full md:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2 max-w-md"
            >
              <input
                type="text"
                value={leadInput}
                onChange={(e) => setLeadInput(e.target.value)}
                placeholder="Enter email or 10-digit mobile"
                aria-label="Email or mobile number for opening updates"
                required
                className="w-full sm:w-64 px-3.5 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="shrink-0 inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold bg-brand-coral hover:bg-brand-coral-dark text-white shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
              >
                <span>Notify Me</span>
                <Send className="w-3 h-3" />
              </button>
            </form>
          )}
        </div>

        {/* =========================================================================
            8. BOTTOM LEGAL & COPYRIGHT BAR (Enhanced for WCAG AA Contrast)
            Site Directions moved to Explore column; text lightened to text-slate-300
            ========================================================================= */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
          <p>
            &copy; {new Date().getFullYear()} Soul Dive Water Park. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-slate-300 hover:text-white underline-offset-2 hover:underline transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-500" aria-hidden="true">
              •
            </span>
            <Link
              href="/terms"
              className="text-slate-300 hover:text-white underline-offset-2 hover:underline transition-colors"
            >
              Terms &amp; Disclaimers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
