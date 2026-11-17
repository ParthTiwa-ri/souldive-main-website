export interface AboutHighlight {
  id: string;
  title: string;
  description: string;
  iconName: "Sparkles" | "Waves" | "Heart";
}

export interface AboutFounderQuote {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

/**
 * Single Config Constant for the primary About Section / Page main image.
 *
 * FLAGGED ISSUE / THIRD-PARTY ASSET NOTICE:
 * The current concept image (/images/soul-dive-vision-tropical.jpg) contains visible
 * third-party signage:
 *   - "WILD TROPICS WATERPARK" on the entrance archway
 *   - "LAGOON CAFE" on the poolside dining facade
 * Please replace this constant once a customized, signage-free 3D render or
 * authentic on-site photograph is available.
 */
export const ABOUT_PAGE_MAIN_IMAGE = "/images/soul-dive-vision-tropical.jpg";
export const ABOUT_PAGE_IMAGE = ABOUT_PAGE_MAIN_IMAGE;

export interface AboutSectionConfig {
  eyebrow: string;
  heading: string;
  paragraph: string;
  /**
   * Primary vision image for the About section.
   * NOTE / FLAGGED ISSUE:
   * The current concept visualization (/images/soul-dive-vision-tropical.jpg)
   * contains visible third-party signage ('WILD TROPICS WATERPARK' on the arch
   * and 'LAGOON CAFE' on the dining facade).
   * Swap this constant once a customized, signage-free render is produced.
   */
  image: string;
  imageAlt: string;
  /**
   * Floating badge launch year.
   * Editable placeholder: Please confirm the real target opening season with leadership.
   */
  openingYearBadge: string;
  highlights: AboutHighlight[];
  ctaText: string;
  ctaHref: string;
  /**
   * Optional vision / founder quote slot. Rendered only when defined.
   */
  founderQuote?: AboutFounderQuote;
}

export const aboutConfig: AboutSectionConfig = {
  eyebrow: "ABOUT SOUL DIVE",
  heading: "Auraiya’s Day Out, Reimagined",
  paragraph:
    "Soul Dive is a family water park coming to Biriya on Dibiyapur Road, with thrilling slides, rolling waves and shaded pools for every age.",
  image: ABOUT_PAGE_MAIN_IMAGE,
  imageAlt:
    "Soul Dive Water Park Auraiya - Family Aquatic Leisure Destination",
  openingYearBadge: "Opening 2027",
  highlights: [
    {
      id: "generation-fun",
      title: "Fun for every generation",
      description: "Gentle splash pools for kids to high-thrill slides for youth.",
      iconName: "Sparkles",
    },
    {
      id: "complete-day",
      title: "A complete day out",
      description: "Wave pools, rain dance arena, green lawns & poolside dining.",
      iconName: "Waves",
    },
    {
      id: "family-comfort",
      title: "Family-first comfort",
      description: "Shaded cabanas, clean lockers, hot showers and guest-first safety.",
      iconName: "Heart",
    },
  ],
  ctaText: "Our Story",
  ctaHref: "/about",
  // founderQuote is optional; left undefined by default:
  // founderQuote: {
  //   quote: "We set out to create a world-class water retreat where every generation in Auraiya can laugh, splash, and unwind.",
  //   author: "Soul Dive Vision Team",
  //   role: "Project Promoters",
  // }
};
