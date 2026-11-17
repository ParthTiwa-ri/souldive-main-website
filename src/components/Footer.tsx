"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  AlertCircle,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

export const Footer: React.FC = () => {
  // Filter available social platforms that have a real, non-empty URL configured
  const socialLinks = [
    { name: "Instagram", url: siteConfig.social?.instagram, icon: Instagram },
    { name: "Facebook", url: siteConfig.social?.facebook, icon: Facebook },
    { name: "YouTube", url: siteConfig.social?.youtube, icon: Youtube },
  ].filter((item) => Boolean(item.url && item.url.trim()));

  return (
    <footer className="bg-brand-navy text-white relative mt-12 sm:mt-16">
      {/* =========================================================================
          TOP WAVE DIVIDER (3 Stacked Navy wave layers rising into previous section)
          Matches the exact 3-layer parallax, speed & motion of the Hero Wave
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-6 pb-6 sm:pb-8">
        {/* =========================================================================
            PRE-LAUNCH STATUS NOTICE (Slim, Clean, Button Removed)
            ========================================================================= */}
        <div className="mb-6 sm:mb-7 p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-2.5 sm:gap-3">
          <div className="p-1 rounded-md bg-brand-gold/20 text-brand-gold shrink-0">
            <AlertCircle className="w-3.5 h-3.5" />
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-brand-gold font-semibold uppercase tracking-wider text-[11px] mr-1.5 font-heading">
              Notice:
            </strong>
            Soul Dive is under development and not operational. Images are Proposed Visualizations; tickets and entry are not currently on sale.
          </p>
        </div>

        {/* =========================================================================
            CALM 3-COLUMN FOOTER GRID (3 cols on desktop, 2 on tablet, 1 on mobile)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 pb-6 sm:pb-8 border-b border-white/10">
          {/* Column 1: Brand Info + WhatsApp Button + Social Icons */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 shrink-0">
                <Image
                  src="/images/soul-dive-logo.png"
                  alt="Soul Dive Water Park Logo"
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-lg font-black tracking-tight font-heading text-white block leading-tight">
                  SOUL DIVE
                </span>
                <p className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">
                  Water Park • Auraiya, UP
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              A family water park coming soon to Auraiya.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-0.5">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%20Soul%20Dive%20Water%20Park,%20please%20send%20me%20updates.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Updates</span>
              </a>

              {/* Social Icons (only rendered if URL configured; "Follow our progress" label removed) */}
              {socialLinks.length > 0 && (
                <div className="flex items-center gap-2">
                  {socialLinks.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow Soul Dive Water Park on ${item.name}`}
                        className="w-7 h-7 rounded-full bg-white/10 hover:bg-brand-aqua/20 hover:text-brand-aqua text-slate-300 border border-white/15 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                      >
                        <IconComponent className="w-3.5 h-3.5" />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs sm:text-[13px] font-bold text-brand-aqua uppercase tracking-[0.12em] mb-3 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="/attractions" className="hover:text-brand-cyan transition-colors">
                  Attractions
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-cyan transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-brand-cyan transition-colors">
                  Location
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-brand-cyan transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-xs sm:text-[13px] font-bold text-brand-aqua uppercase tracking-[0.12em] mb-3 font-heading">
              Contact
            </h4>
            <address className="not-italic text-xs sm:text-sm text-slate-300 space-y-2.5">
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
            BOTTOM LEGAL & COPYRIGHT BAR (Preserved with AA Contrast)
            ========================================================================= */}
        <div className="pt-4 sm:pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
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
