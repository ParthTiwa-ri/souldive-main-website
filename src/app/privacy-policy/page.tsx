import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { WaveDivider } from "@/components/WaveDivider";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Soul Dive Water Park Auraiya",
  description:
    "Privacy Policy for Soul Dive Water Park Auraiya. Learn how we handle visitor inquiries and pre-launch opening registration data.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      <section className="bg-brand-navy text-white pt-16 pb-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-brand-gold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-brand-cyan" />
            <span>Legal Disclosures</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-300 mt-2">
            Last Updated: November 2026 • Soul Dive Water Park, Auraiya
          </p>
        </div>

        <WaveDivider
          fillColor="#F0FBFD"
          secondaryFillColor="#00A3E0"
          position="bottom"
          variant="dynamic"
        />
      </section>

      <section className="bg-brand-foam py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cyan-100 shadow-water-card space-y-6 text-sm text-slate-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold font-heading text-brand-navy mb-2">
                1. Information We Collect
              </h2>
              <p>
                During our pre-launch phase, Soul Dive Water Park collects information voluntarily provided by visitors through our website forms and WhatsApp channels. This includes your name, mobile/WhatsApp number, email address, city, and interest category. We do not collect payment details, credit card numbers, or government IDs during this phase.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold font-heading text-brand-navy mb-2">
                2. How We Use Your Information
              </h2>
              <p>
                Your contact details are used strictly for:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Delivering verified construction updates and milestone announcements.</li>
                <li>Notifying you when official launch dates and ticket sales open.</li>
                <li>Responding directly to your route or project inquiries.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold font-heading text-brand-navy mb-2">
                3. Data Sharing & Third Parties
              </h2>
              <p>
                We do not sell, rent, or trade your personal information to third-party marketing brokers. Your information is stored securely and handled strictly by our internal management team.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold font-heading text-brand-navy mb-2">
                4. Cookies & Analytics
              </h2>
              <p>
                We use standard, privacy-conscious performance analytics to monitor website load speeds, page visits, and technical Core Web Vitals to deliver a fast, lightweight user experience.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold font-heading text-brand-navy mb-2">
                5. Contact Regarding Your Data
              </h2>
              <p>
                If you wish to remove your number from our VIP broadcast list, simply contact us at{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-cyan underline font-semibold">
                  {siteConfig.contact.email}
                </a>{" "}
                or reply &ldquo;STOP&rdquo; on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

