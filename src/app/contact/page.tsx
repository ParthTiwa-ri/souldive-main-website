import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/ContactForm";
import { WaveDivider } from "@/components/WaveDivider";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Car,
  Compass,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Soul Dive Water Park | Phone, Email & Location",
  description:
    "Get in touch with Soul Dive Water Park Auraiya. Located at Biriya on Dibiyapur Road. Inquire via WhatsApp, phone, or online message for project updates and pre-launch inquiries.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${siteConfig.geo.latitude},${siteConfig.geo.longitude}`;

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-brand-navy text-white pt-16 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 text-brand-gold border border-white/20 uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Official Communications</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight">
            Contact Us & Inquire
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto mt-4 leading-relaxed">
            Have questions regarding our Auraiya location, site progress, group bookings, or pre-launch announcements? We are here to help.
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
                        +91 94505 71761 (Instant Chat)
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

