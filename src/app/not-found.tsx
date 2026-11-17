import React from "react";
import Link from "next/link";
import { Waves, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-brand-foam py-20 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 text-center shadow-water-card border border-cyan-100 space-y-5">
        <div className="w-16 h-16 rounded-3xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mx-auto animate-float">
          <Waves className="w-8 h-8" />
        </div>

        <span className="inline-flex px-3 py-1 rounded-full text-xs font-bold bg-brand-coral/10 text-brand-coral">
          404 • Page Not Found
        </span>

        <h1 className="text-3xl font-black font-heading text-brand-navy">
          You Drifted Off Course!
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed">
          The wave carried you to a page that doesn’t exist. Let’s guide you back to the main concourse or to explore our proposed rides.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs bg-brand-coral hover:bg-brand-coral-dark text-white shadow-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/attractions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs bg-brand-foam text-brand-navy hover:bg-cyan-100 border border-cyan-200 transition-all"
          >
            <Compass className="w-4 h-4 text-brand-cyan" />
            <span>Explore Rides</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

