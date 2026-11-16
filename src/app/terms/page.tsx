import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { WaveDivider } from "@/components/WaveDivider";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use & Disclaimers | Soul Dive Water Park Auraiya",
  description:
    "Terms of Use and conceptual rendering disclaimers for Soul Dive Water Park Auraiya website.",
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className="w-full">
      <section className="bg-brand-navy text-white pt-16 pb-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-brand-gold uppercase tracking-wider mb-4">
            <AlertCircle className="w-4 h-4 text-brand-coral" />
            <span>Official Disclaimers</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading">
            Terms & Disclaimers
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
                1. Non-Operational Pre-Launch Status
              </h2>
              <p>
                Soul Dive Water Park is currently under development at Land No. Biriya, Dibiyapur Road, Auraiya, Uttar Pradesh. The park is <strong>not operational</strong> and is not open to general public visitation at this time. Unauthorized entry into the construction site is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold font-heading text-brand-navy mb-2">
                2. Conceptual Visualization Disclaimers
              </h2>
              <p>
                All 3D models, site layouts, and artistic illustrations presented on this website are conceptual visualizations representing the planned attractions of Soul Dive Water Park. Final physical dimensions, slide models, surface materials, and landscape features are subject to engineering, safety approvals, and site execution adjustments.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold font-heading text-brand-navy mb-2">
                3. Absence of Commercial Booking / Financial Transactions
              </h2>
              <p>
                No ticket sales, commercial payments, or financial transactions are conducted on this website during the pre-launch phase. Any third-party claiming to sell unauthorized tickets or passes to Soul Dive Water Park is fraudulent. Official ticket booking channels will be announced exclusively on this domain (<code>https://souldive.in</code>) upon launch.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold font-heading text-brand-navy mb-2">
                4. Intellectual Property
              </h2>
              <p>
                The name &ldquo;Soul Dive Water Park&rdquo;, the official brand logo, and original 3D renders published on this website are the intellectual property of Soul Dive Water Park and its designated partners. Unauthorized commercial reproduction is prohibited.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

