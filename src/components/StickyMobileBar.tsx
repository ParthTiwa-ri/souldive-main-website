"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MapPin, MessageCircle, Bell } from "lucide-react";

export const StickyMobileBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-cyan-100 shadow-2xl py-2 px-3">
      <div className="grid grid-cols-3 gap-2">
        {/* Directions */}
        <Link
          href="/location"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-brand-navy hover:bg-brand-foam active:scale-95 transition-all"
        >
          <MapPin className="w-5 h-5 text-brand-cyan mb-0.5" />
          <span className="text-[11px] font-bold">Directions</span>
        </Link>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%20Soul%20Dive%20Water%20Park,%20I%20would%20like%20to%20get%20updates%20on%20your%20upcoming%20park%20in%20Auraiya.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 active:scale-95 transition-all border border-emerald-200"
        >
          <MessageCircle className="w-5 h-5 text-emerald-600 mb-0.5" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

        {/* Updates */}
        <Link
          href="/opening-updates"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-brand-coral text-white active:scale-95 transition-all shadow-sm"
        >
          <Bell className="w-5 h-5 mb-0.5 animate-bounce" />
          <span className="text-[11px] font-bold">VIP Updates</span>
        </Link>
      </div>
    </div>
  );
};

