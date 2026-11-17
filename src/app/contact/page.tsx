import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Inquiries",
  description:
    "Contact Soul Dive Water Park Auraiya at Biriya, Dibiyapur Road. Inquire via WhatsApp, phone, or online message for project updates and launch details.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact & Inquiries | Soul Dive Water Park Auraiya",
    description:
      "Contact Soul Dive Water Park Auraiya at Biriya, Dibiyapur Road. Inquire via WhatsApp, phone, or online message for project updates and launch details.",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/soul-dive-hero-cinematic.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Soul Dive Water Park Auraiya",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Inquiries | Soul Dive Water Park Auraiya",
    description:
      "Contact Soul Dive Water Park Auraiya at Biriya, Dibiyapur Road. Inquire via WhatsApp, phone, or online message for project updates and launch details.",
    images: ["/images/soul-dive-hero-cinematic.jpg"],
  },
};

export default function ContactPage() {
  const googleMapsDirectionsUrl =
    siteConfig.maps?.url ||
    `https://www.google.com/maps/dir/?api=1&destination=${siteConfig.geo.latitude},${siteConfig.geo.longitude}`;

  return (
    <div className="w-full">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Contact", url: `${siteConfig.url}/contact` },
        ]}
      />
      {/* Shared Page Header */}
      <PageHeader
        eyebrow="OFFICIAL COMMUNICATIONS • संपर्क सूत्र"
        title="Talk to Our Team"
        subtitle="Have questions regarding our Auraiya site location, group bookings, or pre-launch VIP announcements? We are here to help."
      />

      {/* Main Content */}
      <section className="bg-brand-foam py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Contact Info & Address */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-cyan-100 shadow-water-card space-y-5">
                <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">
                  Direct Inquiries
                </span>
                <h2 className="text-2xl font-black font-heading text-brand-navy">
                  Soul Dive Water Park Office
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our project coordination desk is available for location guidance, milestone briefings, and vendor or community inquiries.
                </p>

                {/* Quick-Action Buttons (Call, WhatsApp, Email reading from config) */}
                <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-cyan-50">
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                    className="flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl font-bold text-xs bg-brand-cyan hover:bg-brand-cyan-dark text-white shadow-xs transition-colors focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                    aria-label={`Call ${siteConfig.contact.phoneDisplay}`}
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>Call</span>
                  </a>

                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%20Soul%20Dive%20Water%20Park,%20I%20have%20an%20inquiry.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    aria-label="Chat on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl font-bold text-xs bg-brand-navy hover:bg-brand-navy-light text-white shadow-xs transition-colors focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                    aria-label={`Email ${siteConfig.contact.email}`}
                  >
                    <Mail className="w-4 h-4 shrink-0" />
                    <span>Email</span>
                  </a>
                </div>

                <div className="space-y-4 pt-2 border-t border-cyan-50 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-brand-coral/10 text-brand-coral shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-brand-navy font-bold">Physical Site Location:</strong>
                      <span className="text-xs sm:text-sm text-slate-600">
                        Biriya, Dibiyapur Road, Auraiya, Uttar Pradesh 206122, India
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-brand-cyan/10 text-brand-cyan shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-brand-navy font-bold">Phone Number:</strong>
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                        className="text-xs sm:text-sm text-brand-cyan hover:underline font-semibold"
                      >
                        {siteConfig.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-brand-navy font-bold">Official WhatsApp:</strong>
                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%20Soul%20Dive,%20I%20have%20an%20inquiry.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm text-emerald-700 hover:underline font-semibold"
                      >
                        {siteConfig.contact.phoneDisplay} (Instant Chat)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-brand-gold/20 text-brand-navy shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-brand-navy font-bold">Email Address:</strong>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-xs sm:text-sm text-slate-700 hover:underline"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs bg-brand-foam text-brand-navy hover:bg-brand-cyan hover:text-white border border-cyan-200 transition-all"
                  >
                    <span>Open in Google Maps App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-5 rounded-2xl bg-brand-navy text-white text-xs space-y-2">
                <div className="font-bold text-brand-gold uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Pre-Launch Inquiries Only</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Please note that tickets and entry passes are not currently on sale. Operating hours will commence upon official public launch.
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm
                title="Send Us a Message"
                subtitle="Fill out the form below and our project team will get back to you promptly."
                variant="general-contact"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

