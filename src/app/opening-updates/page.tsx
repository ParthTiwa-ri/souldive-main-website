import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { Bell, Sparkles, CheckCircle2, ShieldCheck, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Opening Updates & VIP Access",
  description:
    "Register for official opening updates, launch announcements, and early-bird family ticket packages for Soul Dive Water Park in Auraiya, Uttar Pradesh.",
  alternates: {
    canonical: `${siteConfig.url}/opening-updates`,
  },
  openGraph: {
    title: "Opening Updates & VIP Access | Soul Dive Water Park Auraiya",
    description:
      "Register for official opening updates, launch announcements, and early-bird family ticket packages for Soul Dive Water Park in Auraiya, Uttar Pradesh.",
    url: `${siteConfig.url}/opening-updates`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/soul-dive-hero-cinematic.jpg",
        width: 1200,
        height: 630,
        alt: "Soul Dive Water Park Auraiya VIP Opening Updates",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Opening Updates & VIP Access | Soul Dive Water Park Auraiya",
    description:
      "Register for official opening updates, launch announcements, and early-bird family ticket packages for Soul Dive Water Park in Auraiya, Uttar Pradesh.",
    images: ["/images/soul-dive-hero-cinematic.jpg"],
  },
};

export default function OpeningUpdatesPage() {
  return (
    <div className="w-full">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Opening Updates", url: `${siteConfig.url}/opening-updates` },
        ]}
      />
      {/* Shared Page Header */}
      <PageHeader
        eyebrow="VIP NOTIFICATION LIST • उद्घाटन सूचना"
        title="Be the First to Experience Soul Dive"
        subtitle="Register your contact details to receive verified launch announcements, early-bird family passes, and ride testing invitations for Auraiya's upcoming water park."
      />

      {/* Main Content */}
      <section className="bg-brand-foam py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy">
              VIP Member Benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-5 rounded-2xl bg-white border border-cyan-100 shadow-sm text-center space-y-2">
              <span className="text-2xl font-black font-heading text-brand-coral">01</span>
              <h3 className="text-sm font-bold text-brand-navy">Opening Day Alert</h3>
              <p className="text-xs text-slate-600">
                Receive instant notification the moment official opening dates are declared.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-cyan-100 shadow-sm text-center space-y-2">
              <span className="text-2xl font-black font-heading text-brand-gold">02</span>
              <h3 className="text-sm font-bold text-brand-navy">Early-Bird Packages</h3>
              <p className="text-xs text-slate-600">
                Exclusive inaugural pricing passes for registered families and groups.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-cyan-100 shadow-sm text-center space-y-2">
              <span className="text-2xl font-black font-heading text-brand-cyan">03</span>
              <h3 className="text-sm font-bold text-brand-navy">Testing Day Invitations</h3>
              <p className="text-xs text-slate-600">
                Selected registrants will be invited to our pre-launch community preview day.
              </p>
            </div>
          </div>

          {/* Form */}
          <ContactForm variant="opening-updates" />
        </div>
      </section>
    </div>
  );
}

