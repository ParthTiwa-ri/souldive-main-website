"use client";

import React, { useState } from "react";
import { Copy, Check, Compass } from "lucide-react";

interface CopyCoordinatesButtonProps {
  coordinates?: string;
  className?: string;
}

export const CopyCoordinatesButton: React.FC<CopyCoordinatesButtonProps> = ({
  coordinates = "26.497275, 79.534790",
  className = "",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(coordinates);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is not available
      const textarea = document.createElement("textarea");
      textarea.value = coordinates;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral ${className}`}
      aria-label="Copy GPS coordinates"
      title="Copy GPS coordinates to clipboard"
    >
      <Compass className="w-3.5 h-3.5 text-brand-coral shrink-0" />
      <span>{copied ? "Coordinates Copied!" : "Copy coordinates"}</span>
      {copied ? (
        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
      ) : (
        <Copy className="w-3 h-3 text-slate-400 shrink-0" />
      )}
    </button>
  );
};

