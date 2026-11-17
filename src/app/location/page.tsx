import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { LOCATION_CONFIG, SOUL_DIVE_COORDINATES } from "@/config/location";
import { PageHeader } from "@/components/PageHeader";
import { CopyCoordinatesButton } from "@/components/CopyCoordinatesButton";
import {
  MapPin,
  Car,
  Compass,
  Navigation,
  Clock,
  Phone,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Waves,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Location & Directions",
  description:
    "Find directions to Soul Dive Water Park at Biriya, Dibiyapur Road, Auraiya. Just 4 km from Auraiya town, 12 km from Dibiyapur, and 52 km from Etawah via NH-19.",
  alternates: {
    canonical: `${siteConfig.url}/location`,
  },
  openGraph: {
    title: "Location & Directions | Soul Dive Water Park Auraiya",
    description:
      "Find directions to Soul Dive Water Park at Biriya, Dibiyapur Road, Auraiya. Just 4 km from Auraiya town, 12 km from Dibiyapur, and 52 km from Etawah via NH-19.",
    url: `${siteConfig.url}/location`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/soul-dive-hero-cinematic.jpg",
        width: 1200,
        height: 630,
        alt: "Soul Dive Water Park Auraiya Location Map",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Location & Directions | Soul Dive Water Park Auraiya",
    description:
      "Find directions to Soul Dive Water Park at Biriya, Dibiyapur Road, Auraiya. Just 4 km from Auraiya town, 12 km from Dibiyapur, and 52 km from Etawah via NH-19.",
    images: ["/images/soul-dive-hero-cinematic.jpg"],
  },
};

export default function LocationPage() {
  const routes = [
    {
      origin: "Auraiya City Center",
      distance: "4 km",
      time: "8–10 mins",
      route: "Via Dibiyapur Main Road directly north towards Biriya.",
      notes: "Smooth, paved two-lane corridor with direct park concourse frontage.",
    },
    {
      origin: "Dibiyapur Town & NTPC Hub",
      distance: "12 km",
      time: "15–18 mins",
      route: "Head south along the Auraiya-Dibiyapur Road towards Biriya.",
      notes: "Direct, straight route with minimal traffic congestion.",
    },
    {
      origin: "Phaphund Railway Station",
      distance: "14 km",
      time: "20–22 mins",
      route: "From Phaphund, take the station approach towards Dibiyapur-Auraiya Highway.",
      notes: "Convenient rail passenger link with local auto/taxi connectivity.",
    },
    {
      origin: "Etawah (District Headquarters)",
      distance: "52 km",
      time: "50–55 mins",
      route: "Take NH-19 east towards Auraiya exit, then take Dibiyapur Road north 4 km.",
      notes: "High-speed 4-lane highway route via National Highway 19.",
    },
    {
      origin: "Bidhuna",
      distance: "38 km",
      time: "45–50 mins",
      route: "Take State Highway / Bidhuna-Auraiya link connecting to Dibiyapur corridor.",
      notes: "Scenic rural-urban highway link.",
    },
    {
      origin: "Kanpur Dehat (Akbarpur / Rania)",
      distance: "58 km",
      time: "60–65 mins",
      route: "Take NH-19 west towards Auraiya interchange, then head 4 km onto Dibiyapur Road.",
      notes: "Straightforward highway drive suitable for family day excursions.",
    },
  ];

  const googleMapsDirectionsUrl =
    siteConfig.maps?.url ||
    `https://www.google.com/maps/dir/?api=1&destination=${siteConfig.geo.latitude},${siteConfig.geo.longitude}`;

  return (
    <div className="w-full">
      {/* Shared Page Header */}
      <PageHeader
        eyebrow="FIND US"
        title="Find Soul Dive"
        subtitle="Conveniently situated at Biriya along the bustling Dibiyapur Road corridor, connecting Auraiya, Dibiyapur, and neighboring districts."
      />

      {/* Main Content */}
      <section className="bg-brand-foam py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two-Column Layout: Details + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
            {/* Left: Address & Travel Highlights */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-3xl bg-white border border-cyan-100 shadow-water-card space-y-4">
                <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">
                  Site Physical Address
                </span>
                <h2 className="text-2xl font-black font-heading text-brand-navy">
                  Soul Dive Water Park
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  <strong>Address:</strong> Biriya, Dibiyapur Road, Auraiya, Uttar Pradesh 206122, India.
                </p>

                <div className="pt-2 border-t border-cyan-50 space-y-2.5 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">GPS Coordinates:</span>
                    <CopyCoordinatesButton coordinates={`${SOUL_DIVE_COORDINATES.lat}, ${SOUL_DIVE_COORDINATES.lng}`} />
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-brand-green shrink-0" />
                    <span>Dedicated Four-Wheeler & Two-Wheeler Guest Parking on site</span>
                  </div>
                </div>

                <div className="pt-3">
                  <a
                    href={googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-2xl font-bold text-sm bg-brand-coral hover:bg-brand-coral-dark text-white shadow-md transition-all"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get GPS Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="p-6 rounded-3xl bg-brand-navy text-white space-y-3">
                <h3 className="text-lg font-bold font-heading text-white">
                  Route Assistance & Inquiries
                </h3>
                <p className="text-xs text-slate-300">
                  Need help identifying the site or planning group transport? Connect directly with our on-ground coordination team:
                </p>
                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%20Soul%20Dive,%20I%20need%20route%20assistance%20for%20your%20Auraiya%20location.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Route Help</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{siteConfig.contact.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Embedded Interactive Map with Official Google Maps Pin */}
            <div className="lg:col-span-7">
              <div className="relative w-full h-[380px] sm:h-[420px] lg:h-[480px] rounded-[26px] overflow-hidden shadow-water-card border border-cyan-100 bg-slate-100 ring-1 ring-black/5">
                {/* Clean Google Map Embed with Native Marker */}
                <iframe
                  title="Soul Dive Water Park Auraiya Location Map"
                  aria-label="Soul Dive Water Park interactive location map"
                  src={LOCATION_CONFIG.embedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating "Open in Google Maps" Corner Micro-Pill */}
                <a
                  href={LOCATION_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3.5 right-3.5 z-10 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-brand-navy hover:text-brand-coral shadow-md hover:shadow-lg border border-slate-200/80 transition-all hover:scale-105 focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:outline-none"
                  aria-label="Open Soul Dive location in Google Maps"
                >
                  <Navigation className="w-3.5 h-3.5 text-brand-coral" />
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* District Driving Times & Routes Table */}
          <div className="mb-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-brand-coral uppercase tracking-wider">
                Travel Durations
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-heading text-brand-navy mt-1">
                Directions from Surrounding Towns
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {routes.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-3xl bg-white border border-cyan-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-base font-bold font-heading text-brand-navy">
                        {item.origin}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-brand-coral/10 text-brand-coral">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-brand-cyan mb-2">
                      Distance: {item.distance}
                    </p>
                    <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                      {item.route}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-cyan-50 text-[11px] text-slate-500">
                    💡 {item.notes}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="text-center pt-4">
            <Link
              href="/opening-updates"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-brand-navy hover:bg-brand-navy-light text-white shadow-lg transition-all"
            >
              <span>Get Notified on Opening Date & Routes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

