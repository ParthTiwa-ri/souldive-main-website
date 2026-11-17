import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { faqs } from "@/config/faqs";
import { PageHeader } from "@/components/PageHeader";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { HelpCircle, Sparkles, MessageCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to questions about Soul Dive Water Park: project status, location at Biriya on Dibiyapur Road, planned rides, opening season, and tickets.",
  alternates: {
    canonical: `${siteConfig.url}/faqs`,
  },
  openGraph: {
    title: "Frequently Asked Questions | Soul Dive Water Park Auraiya",
    description:
      "Find answers to questions about Soul Dive Water Park: project status, location at Biriya on Dibiyapur Road, planned rides, opening season, and tickets.",
    url: `${siteConfig.url}/faqs`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/soul-dive-hero-cinematic.jpg",
        width: 1200,
        height: 630,
        alt: "Soul Dive Water Park Auraiya FAQs",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Soul Dive Water Park Auraiya",
    description:
      "Find answers to questions about Soul Dive Water Park: project status, location at Biriya on Dibiyapur Road, planned rides, opening season, and tickets.",
    images: ["/images/soul-dive-hero-cinematic.jpg"],
  },
};

export default function FAQsPage() {
  const categories = ["General", "Location", "Attractions", "Timelines & Tickets"] as const;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="w-full">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "FAQs", url: `${siteConfig.url}/faqs` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Shared Page Header */}
      <PageHeader
        eyebrow="HELP & INFORMATION CENTER • अक्सर पूछे जाने वाले सवाल"
        title="Frequently Asked Questions"
        subtitle="Transparent, verified answers about Soul Dive Water Park’s plans, location at Biriya (Dibiyapur Road), planned attractions, and pre-launch VIP updates."
      />

      {/* Main Content */}
      <section className="bg-brand-foam py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Loop over categories */}
          <div className="space-y-12">
            {categories.map((cat) => {
              const categoryFaqs = faqs.filter((f) => f.category === cat);
              if (categoryFaqs.length === 0) return null;

              return (
                <div key={cat} className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-cyan-200 pb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-coral" />
                    <h2 className="text-xl sm:text-2xl font-black font-heading text-brand-navy">
                      {cat} Inquiries
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {categoryFaqs.map((faq, idx) => (
                      <details
                        key={idx}
                        className="group p-5 rounded-2xl bg-white border border-cyan-100 shadow-sm transition-all [&_summary::-webkit-details-marker]:hidden"
                      >
                        <summary className="flex items-center justify-between cursor-pointer list-none">
                          <div className="pr-4">
                            <h3 className="text-base sm:text-lg font-bold font-heading text-brand-navy">
                              {faq.question}
                            </h3>
                            {faq.hindiQuestion && (
                              <span className="text-xs text-brand-cyan font-medium block mt-0.5">
                                {faq.hindiQuestion}
                              </span>
                            )}
                          </div>
                          <div className="w-7 h-7 rounded-full bg-brand-foam text-brand-cyan group-open:rotate-180 transition-transform duration-200 flex items-center justify-center shadow-xs shrink-0 text-xs font-bold">
                            &darr;
                          </div>
                        </summary>
                        <div className="mt-4 pt-4 border-t border-cyan-50 text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Need further help box */}
          <div className="mt-16 p-8 rounded-3xl bg-white border border-cyan-100 shadow-water-card text-center space-y-4">
            <h3 className="text-2xl font-black font-heading text-brand-navy">
              Have a Question Not Listed Here?
            </h3>
            <p className="text-sm text-slate-600 max-w-lg mx-auto">
              Our team is happy to assist you directly with inquiries regarding location, road conditions, group pre-bookings, or development updates.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%20Soul%20Dive,%20I%20have%20a%20question%20not%20covered%20in%20your%20FAQs.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm bg-brand-navy hover:bg-brand-navy-light text-white shadow-md transition-all"
              >
                <span>Submit Website Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

