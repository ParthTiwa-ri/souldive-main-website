import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { WaveDivider } from "@/components/WaveDivider";
import { MapPin, Phone, Mail, MessageCircle, AlertCircle, Sparkles } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white relative mt-16">
      {/* Top Wave Divider */}
      <WaveDivider
        position="top"
        fillColor="#062038"
        secondaryFillColor="#00A3E0"
        variant="dynamic"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 md:pb-12">
        {/* Important Pre-Launch Notice Box */}
        <div className="mb-12 p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-brand-gold/20 text-brand-gold shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-gold tracking-wide uppercase">
                Official Pre-Launch Status Notice
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Soul Dive Water Park is currently under active physical development and is{" "}
                <strong className="text-white">not operational</strong>. All pool, slide, and concourse images presented on this website are{" "}
                <strong className="text-white">Proposed Visualizations</strong> illustrating upcoming attractions. Tickets and entry are not currently on sale.
              </p>
            </div>
          </div>
          <Link
            href="/about"
            className="shrink-0 px-4 py-2 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
          >
            Learn More About Soul Dive &rarr;
          </Link>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/Soul Dive Water Park Logo-1.png"
                  alt="Soul Dive Water Park Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight font-heading text-white">
                  SOUL DIVE
                </span>
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider">
                  Water Park • Auraiya, UP
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              An upcoming aquatic entertainment resort taking shape at Biriya, Dibiyapur Road, Auraiya. Featuring high-energy waterslides, a mega wave pool, leisure lagoons, a rain dance disk, and family dining.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%20Soul%20Dive%20Water%20Park,%20please%20send%20me%20updates.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Updates</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Explore & Subpages */}
          <div>
            <h4 className="text-sm font-bold text-brand-gold uppercase tracking-wider mb-4 font-heading">
              Explore Soul Dive
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/attractions" className="hover:text-brand-cyan transition-colors">
                  Proposed Attractions
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-cyan transition-colors">
                  About the Project
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-brand-cyan transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/opening-updates" className="hover:text-brand-cyan transition-colors">
                  Pre-Launch Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Regional Connectivity */}
          <div>
            <h4 className="text-sm font-bold text-brand-gold uppercase tracking-wider mb-4 font-heading">
              Connectivity & Reach
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li className="flex justify-between items-center py-0.5 border-b border-white/5">
                <span>Auraiya City</span>
                <span className="font-semibold text-brand-aqua">4 km (8m)</span>
              </li>
              <li className="flex justify-between items-center py-0.5 border-b border-white/5">
                <span>Dibiyapur</span>
                <span className="font-semibold text-brand-aqua">12 km (18m)</span>
              </li>
              <li className="flex justify-between items-center py-0.5 border-b border-white/5">
                <span>Phaphund Station</span>
                <span className="font-semibold text-brand-aqua">14 km (22m)</span>
              </li>
              <li className="flex justify-between items-center py-0.5 border-b border-white/5">
                <span>Etawah (NH-19)</span>
                <span className="font-semibold text-brand-aqua">52 km (55m)</span>
              </li>
              <li className="flex justify-between items-center py-0.5">
                <span>Kanpur Dehat</span>
                <span className="font-semibold text-brand-aqua">58 km (65m)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div>
            <h4 className="text-sm font-bold text-brand-gold uppercase tracking-wider mb-4 font-heading">
              Location & Contact
            </h4>
            <address className="not-italic text-sm text-slate-300 space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-coral shrink-0 mt-1" />
                <span>
                  Biriya, Dibiyapur Road, Auraiya, Uttar Pradesh 206122, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Soul Dive Water Park. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Disclaimers
            </Link>
            <span>•</span>
            <Link href="/location" className="hover:text-white transition-colors">
              Site Directions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

