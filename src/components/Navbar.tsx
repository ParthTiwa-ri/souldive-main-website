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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Attractions", href: "/attractions" },
    { name: "Master Plan", href: "/master-plan" },
    { name: "Location & Route", href: "/location" },
    { name: "Development", href: "/development" },
    { name: "About", href: "/about" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Pre-Launch Announcement Bar (Dark Navy) */}
      <div className="bg-brand-navy text-white text-xs md:text-sm py-2 px-4 text-center font-medium relative z-50 flex items-center justify-center gap-2 border-b border-white/10">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-gold text-brand-navy uppercase tracking-wider">
          Pre-Launch
        </span>
        <span className="truncate text-slate-200">
          Soul Dive Water Park is currently under active development at Biriya, Dibiyapur Road, Auraiya.
        </span>
        <Link
          href="/opening-updates"
          className="hidden sm:inline-flex items-center text-brand-gold hover:text-amber-300 font-bold ml-1 transition-colors"
        >
          Get VIP Updates &rarr;
        </Link>
      </div>

      {/* Main Sticky Header (Clean White Background) */}
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow duration-200 ${
          scrolled
            ? "shadow-sm border-b border-slate-200/80"
            : "border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand Logo & Name */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-cyan rounded-lg"
              aria-label="Soul Dive Water Park Home"
            >
              <div className="relative w-11 h-11 sm:w-13 sm:h-13 transition-transform group-hover:scale-102">
                <Image
                  src="/images/Soul Dive Water Park Logo-1.png"
                  alt="Soul Dive Water Park Auraiya Logo"
                  fill
                  sizes="52px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-brand-navy tracking-tight leading-none font-heading">
                  SOUL DIVE
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-brand-cyan tracking-wider uppercase mt-0.5">
                  Water Park • Auraiya
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-full text-sm transition-colors duration-150 ${
                      isActive
                        ? "bg-cyan-50 text-brand-navy font-bold border border-cyan-200/70"
                        : "text-slate-700 font-medium hover:text-brand-navy hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTA (Desktop) */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/opening-updates"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-brand-coral hover:bg-brand-coral-dark text-white shadow-xs hover:shadow-sm transition-colors duration-150"
              >
                <Bell className="w-4 h-4 shrink-0" />
                <span>Opening Updates</span>
              </Link>
            </div>

            {/* Mobile Header Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/opening-updates"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-brand-coral text-white shadow-xs"
              >
                <Bell className="w-3.5 h-3.5" />
                <span>Updates</span>
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-brand-navy hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-1 duration-150">
            <nav className="space-y-1 mb-4" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-4 py-2.5 rounded-xl text-base transition-colors ${
                      isActive
                        ? "bg-cyan-50 text-brand-navy font-bold border border-cyan-200/70"
                        : "text-slate-700 font-medium hover:bg-slate-50 hover:text-brand-navy"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <Link
                href="/opening-updates"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold bg-brand-coral text-white text-center text-sm shadow-xs hover:bg-brand-coral-dark transition-colors"
              >
                <Bell className="w-4 h-4" />
                <span>Register for Opening Updates</span>
              </Link>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%20Soul%20Dive%20Water%20Park,%20I%20would%20like%20to%20know%20more%20about%20your%20upcoming%20park%20in%20Auraiya.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-700 text-white text-center text-sm transition-colors"
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
