"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ShieldCheck, CheckCircle2, MapPin } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  subtitle?: string;
  badge?: string;
  features?: string[];
  zone?: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  subtitle,
  badge = "Proposed Attraction",
  features,
  zone,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-brand-navy/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative max-w-4xl w-full max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 bg-white border-b border-slate-100 sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-cyan/10 text-brand-cyan uppercase tracking-wider">
                {badge}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy mt-1">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-cyan"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* High-Resolution Attraction Image */}
        <div className="relative w-full aspect-[16/10] bg-slate-100">
          <Image
            src={imageSrc}
            alt={`${title} - Soul Dive Water Park Auraiya`}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            priority
          />
        </div>

        {/* Detailed Content & Features (Accessible and SEO Preserved) */}
        <div className="p-6 sm:p-8 space-y-5 bg-white">
          {subtitle && (
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Overview & Planned Experience
              </h4>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {subtitle}
              </p>
            </div>
          )}

          {features && features.length > 0 && (
            <div className="pt-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                Planned Features & Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 p-2.5 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {zone && (
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
              <MapPin className="w-4 h-4 text-brand-coral shrink-0" />
              <span>Park Location: {zone}</span>
            </div>
          )}
        </div>

        {/* Bottom Transparency Notice */}
        <div className="p-4 bg-slate-50 text-slate-500 text-xs flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
            <span>Proposed Visualization • Soul Dive Water Park Auraiya</span>
          </div>
          <button
            onClick={onClose}
            className="text-brand-navy hover:text-brand-coral font-bold text-xs"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
