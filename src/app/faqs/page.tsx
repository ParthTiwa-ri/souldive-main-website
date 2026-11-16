import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { faqs } from "@/config/faqs";
import { WaveDivider } from "@/components/WaveDivider";
import { HelpCircle, Sparkles, MessageCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Soul Dive Water Park Auraiya",
  description:
    "Find honest answers to questions about Soul Dive Water Park: development status, location at Biriya on Dibiyapur Road, proposed rides, opening timeline, and future tickets.",
  alternates: {
    canonical: `${siteConfig.url}/faqs`,
  },
};

export default function FAQsPage() {
  const categories = ["General", "Location", "Attractions", "Timelines & Tickets"] as const;

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-brand-navy text-white pt-16 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 text-brand-gold border border-white/20 uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Help & Information Center</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto mt-4 leading-relaxed">
            Transparent, verified answers about Soul Dive Water Park&apos;s development status, location in Auraiya, planned rides, and future ticket policies.
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

