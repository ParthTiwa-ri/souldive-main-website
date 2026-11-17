"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Menu, X, Bell } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Attractions", href: "/attractions" },
    { name: "Location", href: "/location" },
    { name: "About", href: "/about" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
  ];

  // Header background states:
  // - Home: solid #082B45 over photo hero, adds soft shadow when scrolled.
  // - Inner pages at scroll <= 24: transparent, no border, no shadow (blends into PageHeader).
  // - Inner pages at scroll > 24 or mobile open: solid #082B45 at ~95% opacity with soft shadow.
  const isHeaderSolid = isHomePage || scrolled || isOpen;

  return (
    <>
      {/* Top Pre-Launch Announcement Bar (Hidden on Home page, visible on all inner pages) */}
      {!isHomePage && (
        <div className="bg-[#061F33] text-white text-[11px] sm:text-xs py-1.5 px-3 sm:px-4 text-center font-medium relative z-50 flex items-center justify-center gap-2 border-b border-white/10">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-brand-gold text-brand-navy uppercase tracking-wider shrink-0">
            Pre-Launch
          </span>
          <span className="truncate text-slate-200 max-w-[240px] sm:max-w-none">
            Soul Dive Water Park is taking shape in Auraiya.
          </span>
          <Link
            href="/opening-updates"
            className="hidden sm:inline-flex items-center text-brand-gold hover:text-amber-300 font-bold ml-1 transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C4D9] focus-visible:ring-offset-1 focus-visible:ring-offset-[#061F33] rounded min-h-[24px]"
          >
            Get VIP Updates &rarr;
          </Link>
        </div>
      )}

      {/* Main Sticky Header:
          - Height: 68px on mobile (h-[68px]), 80px on desktop (sm:h-20)
          - No texture at all in the nav
          - Sits flush at top: 0 on Home page with no border seam against the hero photo
          - Transparent at scroll 0 on inner pages, blending seamlessly with PageHeader
          - Solid #082B45 at ~95% opacity + soft shadow after scrolling 24px (200ms transition, no layout shift)
      */}
      <header
        className={`sticky top-0 z-40 text-white transition-[background-color,box-shadow,border-color] duration-200 ease-out motion-reduce:transition-none ${
          isHeaderSolid
            ? isHomePage
              ? scrolled
                ? "bg-[#082B45] shadow-md shadow-black/25 border-b border-white/10"
                : "bg-[#082B45] border-b border-transparent"
              : "bg-[#082B45]/95 shadow-md shadow-black/25 border-b border-white/10 backdrop-none"
            : "bg-transparent border-b border-transparent shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-[68px] sm:h-20">
            {/* Brand Logo & Name (44px min tap target) */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C4D9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#082B45] rounded-lg min-h-[44px]"
              aria-label="Soul Dive Water Park Home"
            >
              {/* Subtle rounded white pill container for logo icon to maximize readability on navy */}
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/95 p-1 shadow-xs border border-white/20 transition-transform group-hover:scale-102 flex items-center justify-center shrink-0">
                <Image
                  src="/images/soul-dive-logo.png"
                  alt="Soul Dive Water Park Auraiya Logo"
                  fill
                  sizes="44px"
                  className="object-contain p-0.5"
                  loading="eager"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none font-heading">
                  SOUL DIVE
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#00C4D9] tracking-wider uppercase mt-0.5">
                  WATER PARK • AURAIYA
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Spacious, Clean Active Underline, 88% White Text, 44px tap targets) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative min-h-[44px] px-3.5 inline-flex items-center text-[15px] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C4D9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#082B45] rounded-md ${
                      isActive
                        ? "text-white font-bold after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-0.5 after:bg-brand-coral after:rounded-full"
                        : "text-white/88 font-medium hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTA (Desktop, 44px min height) */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/opening-updates"
                className="inline-flex items-center gap-2 px-5 h-11 min-h-[44px] rounded-full text-sm font-bold bg-brand-coral hover:bg-brand-coral-dark text-white shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C4D9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#082B45]"
              >
                <Bell className="w-4 h-4 shrink-0" />
                <span>Opening Updates</span>
              </Link>
            </div>

            {/* Mobile Header Controls: Clean Hamburger Menu Button (44px min tap target) */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="min-w-[44px] min-h-[44px] p-2.5 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C4D9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#082B45] flex items-center justify-center"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer (Solid #082B45, Light Text, No Texture inside) */}
        {isOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#082B45] px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-1 duration-150 relative z-20">
            <nav className="space-y-1 mb-4" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center justify-between px-4 py-3 min-h-[44px] rounded-xl text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C4D9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#082B45] ${
                      isActive
                        ? "bg-white/10 text-white font-bold border-l-4 border-brand-coral pl-3"
                        : "text-white/88 font-medium hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-coral" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <Link
                href="/opening-updates"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 min-h-[44px] rounded-xl font-bold bg-brand-coral text-white text-center text-sm shadow-xs hover:bg-brand-coral-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C4D9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#082B45]"
              >
                <Bell className="w-4 h-4" />
                <span>Register for Opening Updates</span>
              </Link>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%20Soul%20Dive%20Water%20Park,%20I%20would%20like%20to%20know%20more%20about%20your%20upcoming%20park%20in%20Auraiya.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 min-h-[44px] rounded-xl font-bold bg-emerald-600 hover:bg-emerald-700 text-white text-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C4D9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#082B45]"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
