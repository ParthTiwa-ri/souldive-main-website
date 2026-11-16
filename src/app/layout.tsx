import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { JsonLd } from "@/components/JsonLd";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.meta.defaultTitle,
    template: siteConfig.meta.titleTemplate,
  },
  description: siteConfig.meta.description,
  keywords: siteConfig.meta.keywords,
  authors: [{ name: "Soul Dive Water Park" }],
  creator: "Soul Dive Water Park",
  publisher: "Soul Dive Water Park",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.meta.defaultTitle,
    description: siteConfig.meta.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/soul-dive-hero-cinematic.jpg",
        width: 1200,
        height: 630,
        alt: "Soul Dive Water Park Auraiya - Premier Tropical Waterpark Destination",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.defaultTitle,
    description: siteConfig.meta.description,
    images: ["/images/soul-dive-hero-cinematic.jpg"],
  },
  icons: {
    icon: "/images/Soul Dive Water Park Logo-1.png",
    apple: "/images/Soul Dive Water Park Logo-1.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#00A3E0",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-brand-navy antialiased selection:bg-brand-cyan selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}

