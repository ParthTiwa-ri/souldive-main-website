"use client";

import React, { useState, useRef } from "react";
import { siteConfig } from "@/config/site";
import {
  Bell,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Loader2,
  Send,
} from "lucide-react";

interface ContactFormProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  variant?: "opening-updates" | "general-contact";
  titleAs?: "h2" | "h3";
}

export const ContactForm: React.FC<ContactFormProps> = ({
  eyebrow,
  title,
  subtitle,
  variant = "opening-updates",
  titleAs = "h2",
}) => {
  const isGeneral = variant === "general-contact";
  const resolvedEyebrow = eyebrow !== undefined ? eyebrow : isGeneral ? "" : "VIP UPDATES";
  const resolvedTitle = title || (isGeneral ? "Send Us a Message" : "Be First to Dive In");
  const resolvedSubtitle =
    subtitle ||
    (isGeneral
      ? "Fill out the form below and our project team will get back to you promptly."
      : "Get opening news and early offers on WhatsApp. No spam.");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");

  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  const validateName = (val: string): string => {
    if (!val.trim()) {
      return "Please enter your name.";
    }
    return "";
  };

  const validatePhone = (val: string): string => {
    const digits = val.replace(/\D/g, "");
    if (!digits || digits.length !== 10 || !/^[6-9]/.test(digits)) {
      return "Please enter a valid 10-digit mobile number.";
    }
    return "";
  };

  const handleNameBlur = () => {
    const err = validateName(name);
    setErrors((prev) => ({ ...prev, name: err || undefined }));
  };

  const handlePhoneBlur = () => {
    const err = validatePhone(phone);
    setErrors((prev) => ({ ...prev, phone: err || undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent double submission
    if (status === "submitting") return;

    // Spam honeypot protection
    if (honeypot) {
      console.warn("Spam detected");
      return;
    }

    const trimmedName = name.trim();
    const nameErr = validateName(trimmedName);
    const phoneErr = validatePhone(phone);

    setErrors({
      name: nameErr || undefined,
      phone: phoneErr || undefined,
    });

    if (nameErr) {
      nameInputRef.current?.focus();
      return;
    }

    if (phoneErr) {
      phoneInputRef.current?.focus();
      return;
    }

    setStatus("submitting");
    setSubmitError("");

    const cleanPhone = phone.replace(/\D/g, "");

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          phone: cleanPhone,
          variant,
          ...(isGeneral && message.trim() ? { message: message.trim() } : {}),
          honeypot,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.success) {
        throw new Error(data?.error || "Unable to submit inquiry. Please try again.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      const errorMsg =
        err instanceof Error
          ? err.message
          : "Unable to submit. Please check your connection or contact us on WhatsApp.";
      setSubmitError(errorMsg);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-water-card border border-cyan-100 max-w-[520px] mx-auto">
      {/* Header Block */}
      <div className="text-center mb-5 sm:mb-6">
        {resolvedEyebrow ? (
          <span className="text-xs sm:text-sm font-bold text-brand-aqua uppercase tracking-[0.12em] block mb-1.5">
            {resolvedEyebrow}
          </span>
        ) : null}
        {titleAs === "h3" ? (
          <h3 className="text-2xl sm:text-[1.75rem] font-bold font-heading text-brand-navy tracking-[-0.01em] [text-wrap:balance] leading-tight">
            {resolvedTitle}
          </h3>
        ) : (
          <h2 className="text-2xl sm:text-[1.75rem] font-bold font-heading text-brand-navy tracking-[-0.01em] [text-wrap:balance] leading-tight">
            {resolvedTitle}
          </h2>
        )}
        <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-sm mx-auto leading-relaxed [text-wrap:balance]">
          {resolvedSubtitle}
        </p>
      </div>

      {status === "success" ? (
        /* =========================================================================
           SUCCESS STATE: Replaces form with checkmark, confirmation, and WhatsApp CTA
           ========================================================================= */
        <div className="py-6 sm:py-8 px-4 text-center space-y-3 animate-in fade-in motion-reduce:animate-none">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy">
            {isGeneral ? `Thank You, ${name.trim()}!` : "You’re on the list!"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xs mx-auto leading-relaxed">
            {isGeneral
              ? "Your message has been sent successfully. Our team will get back to you on WhatsApp shortly."
              : "We’ll message you on WhatsApp soon."}
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                isGeneral
                  ? `Hi Soul Dive, I just submitted an inquiry on your website: ${name}`
                  : "Hi Soul Dive Water Park, I just registered for VIP opening updates!"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      ) : (
        /* =========================================================================
           FORM: 2 Fields (Side-by-side desktop, stacked mobile, inline errors, noValidate)
           ========================================================================= */
        <form onSubmit={handleSubmit} noValidate className="space-y-3.5 sm:space-y-4">
          {/* Honeypot field (hidden from genuine users) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="vip-website-check">Leave this field empty</label>
            <input
              id="vip-website-check"
              type="text"
              name="website_url_check"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Submission Failure / Error Banner with Retry */}
          {status === "error" && (
            <div
              role="alert"
              className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{submitError || "Something went wrong. Please try again."}</span>
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className="text-xs font-bold text-rose-900 underline hover:no-underline shrink-0 min-h-[44px] px-2 flex items-center"
              >
                Retry
              </button>
            </div>
          )}

          {/* 2 Form Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 items-start">
            {/* Field 1: Your name */}
            <div>
              <label
                htmlFor="vip-name"
                className="block text-sm font-medium text-slate-700 mb-1.5 text-left"
              >
                Your name
              </label>
              <input
                ref={nameInputRef}
                id="vip-name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) {
                    setErrors((prev) => ({ ...prev, name: undefined }));
                  }
                }}
                onBlur={handleNameBlur}
                placeholder="Rahul Sharma"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "vip-name-error" : undefined}
                className={`w-full h-11 sm:h-12 min-h-[44px] px-3.5 sm:px-4 rounded-xl border text-sm text-brand-navy placeholder:text-slate-500 bg-white transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-1 motion-reduce:transition-none ${errors.name
                    ? "border-brand-coral bg-orange-50/20 ring-1 ring-brand-coral/40"
                    : "border-slate-300 hover:border-slate-400 focus:border-brand-coral"
                  }`}
              />
              {errors.name && (
                <p
                  id="vip-name-error"
                  role="alert"
                  aria-live="polite"
                  className="mt-1.5 text-xs font-medium text-brand-coral flex items-center gap-1 text-left"
                >
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Field 2: WhatsApp number */}
            <div>
              <label
                htmlFor="vip-phone"
                className="block text-sm font-medium text-slate-700 mb-1.5 text-left"
              >
                WhatsApp number
              </label>
              <div className="relative flex items-center">
                <span
                  className="absolute left-3.5 text-sm font-semibold text-slate-500 select-none pointer-events-none"
                  aria-hidden="true"
                >
                  +91
                </span>
                <input
                  ref={phoneInputRef}
                  id="vip-phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  required
                  value={phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^\d\s]/g, "").slice(0, 11);
                    setPhone(val);
                    if (errors.phone) {
                      setErrors((prev) => ({ ...prev, phone: undefined }));
                    }
                  }}
                  onBlur={handlePhoneBlur}
                  placeholder="98765 43210"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "vip-phone-error" : undefined}
                  className={`w-full h-11 sm:h-12 min-h-[44px] pl-12 pr-3.5 sm:pr-4 rounded-xl border text-sm text-brand-navy placeholder:text-slate-500 bg-white transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-1 motion-reduce:transition-none ${errors.phone
                      ? "border-brand-coral bg-orange-50/20 ring-1 ring-brand-coral/40"
                      : "border-slate-300 hover:border-slate-400 focus:border-brand-coral"
                    }`}
                />
              </div>
              {errors.phone && (
                <p
                  id="vip-phone-error"
                  role="alert"
                  aria-live="polite"
                  className="mt-1.5 text-xs font-medium text-brand-coral flex items-center gap-1 text-left"
                >
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>
          </div>

          {/* Optional message field when invoked in general-contact mode */}
          {variant === "general-contact" && (
            <div>
              <label
                htmlFor="vip-message"
                className="block text-sm font-medium text-slate-700 mb-1.5 text-left"
              >
                Your message
              </label>
              <textarea
                id="vip-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask any questions regarding location, facilities, or timeline..."
                className="w-full p-3.5 rounded-xl border border-slate-300 text-sm text-brand-navy placeholder:text-slate-500 bg-white outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-1"
              />
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-1">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full min-h-[44px] h-11 sm:h-12 py-3 px-6 rounded-full font-bold bg-brand-coral hover:bg-brand-coral-dark text-white shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin motion-reduce:animate-none" />
                  <span>{isGeneral ? "Sending Message..." : "Registering..."}</span>
                </>
              ) : isGeneral ? (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Notify Me</span>
                  <Bell className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Note below button */}
            <p className="text-[11px] text-slate-500 text-center leading-relaxed mt-2.5">
              {isGeneral
                ? "🔒 We respect your privacy. We will never share your contact details."
                : "By submitting, you agree to receive opening updates on WhatsApp. We’ll never share your number."}
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
