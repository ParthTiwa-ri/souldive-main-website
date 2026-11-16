"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Attraction } from "@/config/attractions";
import { ImageModal } from "@/components/ImageModal";
import { ArrowRight } from "lucide-react";

interface AttractionCardProps {
  attraction: Attraction;
  priority?: boolean;
}

export const AttractionCard: React.FC<AttractionCardProps> = ({
  attraction,
  priority = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 flex flex-col h-full">
        {/* Large Attraction Image Container */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 cursor-pointer"
        >
          <Image
            src={attraction.image}
            alt={`${attraction.name} - Proposed Waterpark Attraction at Soul Dive Auraiya`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={priority}
          />
        </div>

        {/* Card Body */}
        <div className="p-6 flex flex-col flex-grow justify-between bg-white">
          <div className="space-y-2.5">
            {/* Small Category Label */}
            {attraction.categoryLabel && (
              <span className="text-[11px] font-bold tracking-wider text-brand-cyan uppercase block">
                {attraction.categoryLabel}
              </span>
            )}

            {/* Attraction Name (H3 for SEO) */}
            <h3 className="text-xl font-bold font-heading text-brand-navy leading-snug group-hover:text-brand-cyan transition-colors">
              {attraction.name}
            </h3>

            {/* Concise Engaging Description (max 20-25 words) */}
            <p className="text-sm text-slate-600 leading-relaxed">
              {attraction.shortDescription}
            </p>
          </div>

          {/* Simple Explore Link */}
          <div className="pt-5 mt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-coral hover:text-brand-coral-dark group/link focus:outline-none focus:underline"
              aria-label={`Explore details for ${attraction.name}`}
            >
              <span>Explore Attraction</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </button>
          </div>
        </div>
      </article>

      {/* Accessible Detail Lightbox Modal (Keeps full details, specs & SEO metadata available) */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={attraction.image}
        title={attraction.name}
        subtitle={attraction.description}
        badge={attraction.categoryLabel || "Proposed Facility"}
        features={attraction.features}
        zone={attraction.masterPlanZone}
      />
    </>
  );
};
