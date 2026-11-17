import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// =============================================================================
// Zod Schema for Inbound Form Validation
// =============================================================================
const inquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name cannot exceed 80 characters"),
  phone: z
    .string()
    .trim()
    .transform((val) => val.replace(/\D/g, ""))
    .refine((val) => val.length === 10 && /^[6-9]/.test(val), {
      message: "Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9",
    }),
  variant: z
    .enum(["opening-updates", "general-contact"])
    .default("opening-updates"),
  message: z
    .string()
    .trim()
    .max(1000, "Message cannot exceed 1000 characters")
    .optional()
    .default(""),
  honeypot: z
    .string()
    .max(0, "Spam detected")
    .optional()
    .default(""),
  turnstileToken: z
    .string()
    .optional(),
});

export type InquiryPayload = z.infer<typeof inquirySchema>;

// =============================================================================
// In-Memory Rate Limiting (5 requests per 10 minutes per IP)
// =============================================================================
interface RateLimitBucket {
  count: number;
  resetAt: number;
}
const rateLimitMap = new Map<string, RateLimitBucket>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Lead deduplication cache: phone -> last timestamp (5 min window)
const recentPhoneSubmissions = new Map<string, number>();

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return "127.0.0.1";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = rateLimitMap.get(ip);

  if (!bucket || now > bucket.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (bucket.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  bucket.count += 1;
  return true;
}

// =============================================================================
// Cloudflare Turnstile Verification
// =============================================================================
async function verifyTurnstile(token: string | undefined, ip: string): Promise<{ valid: boolean; error?: string }> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    // If Turnstile secret is not configured, allow pass-through
    return { valid: true };
  }

  if (!token) {
    return { valid: false, error: "Turnstile verification token is missing." };
  }

  try {
    const formData = new URLSearchParams();
    formData.append("secret", secretKey);
    formData.append("response", token);
    formData.append("remoteip", ip);

    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    const data = await res.json();
    if (!data.success) {
      return { valid: false, error: "Turnstile challenge verification failed." };
    }
    return { valid: true };
  } catch (err) {
    console.error("[TURNSTILE-ERROR]", err);
    return { valid: false, error: "Unable to verify human security challenge." };
  }
}

// =============================================================================
// Resend Email Dispatch (Email-Only Architecture: No Databases, No JSON Files)
// =============================================================================
interface EmailDispatchResult {
  success: boolean;
  messageId?: string;
  error?: string;
  statusCode?: number;
}

async function dispatchEmailViaResend(data: InquiryPayload, ip: string, userAgent: string): Promise<EmailDispatchResult> {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return {
      success: false,
      error: "RESEND_API_KEY environment variable is not configured on the server.",
      statusCode: 500,
    };
  }

  const recipient = process.env.NOTIFICATION_EMAIL || "parthtiwari421@gmail.com";
  // Allow custom sender if domain is verified in Resend; fallback to onboarding@resend.dev
  const fromAddress = process.env.RESEND_FROM_EMAIL || "Soul Dive Water Park <onboarding@resend.dev>";
  const formattedPhone = `+91 ${data.phone.slice(0, 5)} ${data.phone.slice(5)}`;
  const inquiryTypeLabel = data.variant === "opening-updates" ? "VIP Opening Updates" : "General Inquiry";
  const now = new Date();
  const timestampStr = now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const emailHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #00C4D9; border-radius: 16px; background-color: #F0FBFD; color: #062038;">
      <div style="text-align: center; margin-bottom: 20px;">
        <h1 style="color: #062038; font-size: 24px; font-weight: 800; margin: 0 0 6px 0; letter-spacing: -0.02em;">SOUL DIVE WATER PARK</h1>
        <p style="color: #0081B3; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; margin: 0;">New Website Enquiry Received</p>
      </div>

      <div style="background-color: #ffffff; border-radius: 12px; padding: 20px; box-shadow: 0 4px 12px rgba(6, 32, 56, 0.05); border: 1px solid #e2f4f8;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr style="border-bottom: 1px solid #f0f7f9;">
            <td style="padding: 10px 0; color: #64748b; width: 140px;"><strong>Enquiry Type:</strong></td>
            <td style="padding: 10px 0; color: #FF5722; font-weight: bold;">${inquiryTypeLabel}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f7f9;">
            <td style="padding: 10px 0; color: #64748b;"><strong>Guest Name:</strong></td>
            <td style="padding: 10px 0; color: #062038; font-weight: bold; font-size: 15px;">${data.name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f7f9;">
            <td style="padding: 10px 0; color: #64748b;"><strong>Mobile Number:</strong></td>
            <td style="padding: 10px 0;">
              <a href="tel:+91${data.phone}" style="color: #0081B3; font-weight: bold; text-decoration: none; font-size: 15px;">${formattedPhone}</a>
              <span style="margin: 0 8px; color: #cbd5e1;">|</span>
              <a href="https://wa.me/91${data.phone}?text=Hi%20${encodeURIComponent(data.name)},%20thank%20you%20for%20contacting%20Soul%20Dive%20Water%20Park!" target="_blank" style="color: #22c55e; font-weight: bold; text-decoration: none;">
                Chat on WhatsApp &rarr;
              </a>
            </td>
          </tr>
          ${data.message ? `
          <tr style="border-bottom: 1px solid #f0f7f9;">
            <td style="padding: 10px 0; color: #64748b; vertical-align: top;"><strong>Message:</strong></td>
            <td style="padding: 10px 0; color: #334155; line-height: 1.5;">${data.message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</td>
          </tr>
          ` : ""}
          <tr style="border-bottom: 1px solid #f0f7f9;">
            <td style="padding: 10px 0; color: #64748b;"><strong>Time (IST):</strong></td>
            <td style="padding: 10px 0; color: #64748b;">${timestampStr}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #64748b;"><strong>Sender IP:</strong></td>
            <td style="padding: 10px 0; color: #94a3b8; font-family: monospace; font-size: 12px;">${ip}</td>
          </tr>
        </table>
      </div>

      <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #94a3b8; line-height: 1.5;">
        <p style="margin: 0;">Soul Dive Water Park • Biriya, Dibiyapur Road, Auraiya, Uttar Pradesh 206122</p>
        <p style="margin: 4px 0 0 0;"><a href="https://souldive.in" style="color: #00A3E0; text-decoration: none;">https://souldive.in</a></p>
      </div>
    </div>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [recipient],
        reply_to: recipient,
        subject: `[Soul Dive Lead] ${data.name} — ${inquiryTypeLabel}`,
        html: emailHtml,
      }),
    });

    const resData = await res.json().catch(() => null);

    if (!res.ok) {
      console.error("[RESEND-API-ERROR]", res.status, resData);
      return {
        success: false,
        statusCode: res.status,
        error: resData?.message || `Resend rejected request with HTTP status ${res.status}.`,
      };
    }

    return {
      success: true,
      messageId: resData?.id,
    };
  } catch (err: unknown) {
    console.error("[RESEND-NETWORK-ERROR]", err);
    return {
      success: false,
      statusCode: 500,
      error: err instanceof Error ? err.message : "Failed to connect to Resend API.",
    };
  }
}

// =============================================================================
// Route Handler: POST /api/inquiries
// =============================================================================
export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const userAgent = request.headers.get("user-agent") || "unknown";

    // 1. Rate Limiting Check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many submissions. Please wait a few minutes before trying again or reach us directly on WhatsApp.",
        },
        { status: 429 }
      );
    }

    // 2. Parse & Validate Payload
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON request body." },
        { status: 400 }
      );
    }

    const parseResult = inquirySchema.safeParse(body);
    if (!parseResult.success) {
      const firstIssue = parseResult.error.issues[0];
      return NextResponse.json(
        {
          success: false,
          error: firstIssue ? firstIssue.message : "Validation failed. Please verify your input.",
          fieldErrors: parseResult.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    const data = parseResult.data;

    // 3. Spam Honeypot Check (Silently drop bots)
    if (data.honeypot && data.honeypot.trim().length > 0) {
      return NextResponse.json({ success: true, message: "Thank you!" });
    }

    // 4. Cloudflare Turnstile Verification (if configured)
    const turnstileCheck = await verifyTurnstile(data.turnstileToken, ip);
    if (!turnstileCheck.valid) {
      return NextResponse.json(
        { success: false, error: turnstileCheck.error || "Turnstile verification failed." },
        { status: 403 }
      );
    }

    // 5. Duplicate Submission Guard (5-minute window for same phone)
    const now = Date.now();
    const lastSub = recentPhoneSubmissions.get(data.phone);
    if (lastSub && now - lastSub < 5 * 60 * 1000) {
      return NextResponse.json({
        success: true,
        message: "We already received your registration! Our team will send updates to your WhatsApp number.",
      });
    }

    // 6. Resend Email Dispatch (Email-Only Architecture)
    const dispatchResult = await dispatchEmailViaResend(data, ip, userAgent);

    // CRITICAL: NEVER show success if Resend rejects the request!
    if (!dispatchResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: dispatchResult.error || "Unable to dispatch notification email. Please reach us directly on WhatsApp.",
        },
        { status: dispatchResult.statusCode || 502 }
      );
    }

    // Cache phone to prevent duplicates after successful email dispatch
    recentPhoneSubmissions.set(data.phone, now);

    return NextResponse.json(
      {
        success: true,
        message:
          data.variant === "opening-updates"
            ? "Thank you for registering! Your enquiry has been delivered to our team and you’re on the VIP list."
            : "Thank you! Your message has been emailed directly to our project desk. We will connect with you promptly.",
        messageId: dispatchResult.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[INQUIRY-API-ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again or message us directly on WhatsApp.",
      },
      { status: 500 }
    );
  }
}

// Block unsupported HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed. Use POST to submit inquiries." },
    { status: 405 }
  );
}
