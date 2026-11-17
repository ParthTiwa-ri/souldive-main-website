import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Terms of Use & Disclaimers",
  description:
    "Terms of Use, visitor guidelines, and conceptual rendering disclaimers for the official Soul Dive Water Park Auraiya website.",
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
  openGraph: {
    title: "Terms of Use & Disclaimers | Soul Dive Water Park Auraiya",
    description:
      "Terms of Use, visitor guidelines, and conceptual rendering disclaimers for the official Soul Dive Water Park Auraiya website.",
    url: `${siteConfig.url}/terms`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/soul-dive-hero-cinematic.jpg",
        width: 1200,
        height: 630,
        alt: "Soul Dive Water Park Auraiya Terms",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use & Disclaimers | Soul Dive Water Park Auraiya",
    description:
      "Terms of Use, visitor guidelines, and conceptual rendering disclaimers for the official Soul Dive Water Park Auraiya website.",
    images: ["/images/soul-dive-hero-cinematic.jpg"],
  },
};

export default function TermsPage() {
  return (
    <div className="w-full">
      <PageHeader
        eyebrow="OFFICIAL DISCLAIMERS"
        title="Terms & Disclaimers"
        subtitle="Last Updated: November 2026 • Official terms of use, visitor guidelines, and conceptual rendering disclaimers."
      />

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

