import React from "react";
import { siteConfig } from "@/config/site";

interface JsonLdProps {
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export const JsonLd: React.FC<JsonLdProps> = ({ breadcrumbs }) => {
  // LocalBusiness / AmusementPark Schema
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["AmusementPark", "LocalBusiness"],
    "@id": `${siteConfig.url}/#waterpark`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/soul-dive-logo.png`,
    image: `${siteConfig.url}/images/soul-dive-hero-cinematic.jpg`,
    description: siteConfig.meta.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Auraiya" },
      { "@type": "City", name: "Dibiyapur" },
      { "@type": "City", name: "Etawah" },
      { "@type": "City", name: "Bidhuna" },
      { "@type": "City", name: "Phaphund" },
    ],
    hasMap: siteConfig.maps?.url || `${siteConfig.url}/location`,
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.youtube,
    ].filter(Boolean),
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.meta.description,
    publisher: {
      "@id": `${siteConfig.url}/#waterpark`,
    },
    inLanguage: ["en-IN", "hi-IN"],
  };

  // Breadcrumbs Schema (if provided)
  const breadcrumbSchema = breadcrumbs
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </>
  );
};

export const BreadcrumbJsonLd: React.FC<{
  items: Array<{ name: string; url: string }>;
}> = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
