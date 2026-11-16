import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/ContactForm";
import { WaveDivider } from "@/components/WaveDivider";
import { Bell, Sparkles, CheckCircle2, ShieldCheck, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Get Opening Updates & VIP Access | Soul Dive Water Park Auraiya",
  description:
    "Register for official opening updates, launch announcements, and early-bird family ticket packages for Soul Dive Water Park in Auraiya, Uttar Pradesh.",
  alternates: {
    canonical: `${siteConfig.url}/opening-updates`,
  },
};

export default function OpeningUpdatesPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-brand-navy text-white pt-16 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 text-brand-gold border border-white/20 uppercase tracking-wider mb-4 animate-float">
            <Bell className="w-3.5 h-3.5 text-brand-coral animate-bounce" />
            <span>VIP Notification List</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight">
            Be the First to Experience Soul Dive
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto mt-4 leading-relaxed">
            Register your contact details to receive verified launch announcements, early-bird family passes, and ride testing invitations.
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <ContactForm
            title="Register for VIP Opening Updates"
            subtitle="Fill in your details below. We strictly avoid spam and only deliver verified project milestones."
            variant="opening-updates"
          />
        </div>
      </section>
    </div>
  );
}

