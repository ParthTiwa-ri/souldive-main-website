"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { Send, CheckCircle2, AlertCircle, Sparkles, MessageCircle } from "lucide-react";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  variant?: "opening-updates" | "general-contact";
}

export const ContactForm: React.FC<ContactFormProps> = ({
  title = "Get VIP Opening Updates",
  subtitle = "Register to receive official announcements on launch dates, exclusive early-bird ticket offers, and progress milestones.",
  variant = "opening-updates",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Auraiya",
    interest: "Family Outing",
    message: "",
    honeypot: "", // hidden anti-spam field
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam check
    if (formData.honeypot) {
      console.warn("Spam detected");
      return;
    }

    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please provide your full name and a valid phone or WhatsApp number.");
      return;
    }

    const phoneRegex = /^[0-9+\s-]{10,14}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setStatus("submitting");

    // Simulate async server-action processing
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Unable to submit. Please contact us directly on WhatsApp.");
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-water-card border border-cyan-100 max-w-xl mx-auto">
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-gold/20 text-brand-navy border border-brand-gold/30 uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
          Pre-Launch Registration
        </span>
        <h3 className="text-2xl sm:text-3xl font-black font-heading text-brand-navy">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto">
          {subtitle}
        </p>
      </div>

      {status === "success" ? (
        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-emerald-900 font-heading">
              Thank You, {formData.name}!
            </h4>
            <p className="text-sm text-emerald-800 mt-1">
              Your details have been registered. You will be among the first to receive verified opening updates and exclusive launch packages for Soul Dive Water Park Auraiya.
            </p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%20Soul%20Dive%20Water%20Park,%20I%20just%20registered%20on%20your%20website%20for%20opening%20updates!`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect on WhatsApp Now</span>
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot field (hidden from genuine users) */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="website_url_check"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {status === "error" && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 text-sm outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1">
                Mobile / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 98765 43210"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 text-sm outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. rahul@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 text-sm outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1">
                Your City / Town
              </label>
              <select
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 text-sm outline-none bg-white transition-all"
              >
                <option value="Auraiya">Auraiya</option>
                <option value="Dibiyapur">Dibiyapur</option>
                <option value="Etawah">Etawah</option>
                <option value="Bidhuna">Bidhuna</option>
                <option value="Phaphund">Phaphund</option>
                <option value="Kanpur Dehat">Kanpur Dehat</option>
                <option value="Jalaun">Jalaun</option>
                <option value="Other">Other Region</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1">
              Interested In
            </label>
            <select
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 text-sm outline-none bg-white transition-all"
            >
              <option value="Family Outing">Family Weekend Outing</option>
              <option value="Group of Friends">Youth / Friends Day Out</option>
              <option value="School / College Picnic">School / College Group Picnic</option>
              <option value="Birthday / Celebration">Birthday / Celebration Booking</option>
              <option value="General Information">General Project Information</option>
            </select>
          </div>

          {variant === "general-contact" && (
            <div>
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1">
                Your Message / Query
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Ask any questions regarding location, facilities, or timeline..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 text-sm outline-none transition-all"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3.5 px-6 rounded-2xl font-bold bg-brand-coral hover:bg-brand-coral-dark text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 text-base"
          >
            {status === "submitting" ? (
              <span>Registering Details...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit & Receive Opening Updates</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-slate-500 text-center">
            🔒 We respect your privacy. No spam. You will only receive verified project milestones and official ticket launch updates.
          </p>
        </form>
      )}
    </div>
  );
};

