export interface Attraction {
  id: string;
  name: string;
  hindiName: string;
  category: "Thrill" | "Family" | "Kids" | "Relaxation" | "Dining & Amenities";
  categoryLabel: string;
  shortDescription: string;
  description: string;
  image: string;
  badge: string;
  chips: string[];
  features: string[];
  masterPlanZone: string;
  disclaimer: string;
}

export const attractions: Attraction[] = [
  {
    id: "wave-pool",
    name: "Mega Wave Pool",
    hindiName: "वेव पूल",
    category: "Family",
    categoryLabel: "Family Waves",
    shortDescription: "Real ocean-style waves rolling onto a sandy beach edge.",
    description:
      "A sprawling artificial beach-entry wave pool engineered with automated wave generation technology. Designed for families and swimmers of all ages to float, jump through crests, or lounge on the sun-deck shores in Auraiya.",
    image: "/images/mega-wave-pool-clean.jpg",
    badge: "Signature Attraction",
    chips: ["All ages", "Family friendly", "Wave: Gentle to Swell"],
    features: [
      "Gradual shallow-to-deep zero beach entry",
      "Pneumatic mechanical wave generation chamber",
      "Expansive waterside chaise lounge sundecks",
      "Dedicated lifeguard observation perimeters",
    ],
    masterPlanZone: "North Park Apex",
    disclaimer: "Facility under development. Subject to final execution.",
  },
  {
    id: "water-slides",
    name: "Pendulum & Family Raft Slides",
    hindiName: "वाटर स्लाइड्स कॉम्प्लेक्स",
    category: "Thrill",
    categoryLabel: "Signature Slides",
    shortDescription:
      "Drop, curve and spin on boomerang chutes, or ride together on family rafts.",
    description:
      "A multi-level slide launch tower hosting two premier waterslide experiences: the high-velocity Pendulum Ride (boomerang half-pipe wall) and the wide-channel Family Raft Ride for multi-passenger thrills in Auraiya.",
    image: "/images/water-slides-3d.jpg",
    badge: "Signature Thrill Ride",
    chips: ["Thrill: High", "Family rafts", "Launch tower"],
    features: [
      "Engineered steel slide launch tower with safety railings",
      "Pendulum boomerang wall with zero-gravity sensation",
      "Multi-rider family tube slide with cascading curves",
      "Deep runout deceleration splash pool",
    ],
    masterPlanZone: "Central Slide Complex",
    disclaimer: "Attraction visualization. Actual ride specs subject to final engineering.",
  },
  {
    id: "adult-pool",
    name: "Curvilinear Leisure Pool",
    hindiName: "एडल्ट लेज़र पूल",
    category: "Relaxation",
    categoryLabel: "Leisure Pool",
    shortDescription:
      "Slow down in a freeform pool surrounded by palms, stone and timber decks.",
    description:
      "A masterfully shaped freeform swimming pool designed for relaxed laps, sun-drenched floating, and leisurely family swimming. Bordered by stone coping and shaded wooden deck lounges.",
    image: "/images/adult-pool-3d.jpg",
    badge: "Leisure & Swim",
    chips: ["Relaxation", "Tropical palms", "Timber deck"],
    features: [
      "Curvilinear pool profile with paved perimeter",
      "Dedicated timber sundeck with sun-shade umbrellas",
      "Continuous circulation & advanced sand-filtration system",
      "Direct pathway connection to the outdoor cafe",
    ],
    masterPlanZone: "West Central Aquatic Hub",
    disclaimer: "Facility visualization. Dimensions per engineering proposal.",
  },
  {
    id: "rain-dance",
    name: "Rain Dance Arena",
    hindiName: "रेन डांस एरीना",
    category: "Family",
    categoryLabel: "Rain Party",
    shortDescription:
      "Misting rain jets and a live music floor for splash-and-dance celebrations.",
    description:
      "A circular paved open-air dance amphitheater equipped with an overhead cantilevered rain-canopy, multi-directional high-pressure water nozzles, and dynamic party sound infrastructure.",
    image: "/images/rain-dance-3d.jpg",
    badge: "Music & Rain Party",
    chips: ["All ages", "Music & DJ", "Water jets"],
    features: [
      "Circular spray canopy with misting jets",
      "Anti-skid patterned mosaic drainage flooring",
      "Integrated audio truss for high-energy music parties",
      "Enclosed by blooming bougainvillea & tropical palms",
    ],
    masterPlanZone: "Central Festival Plaza",
    disclaimer: "Facility under construction. Sound and spray configurations subject to launch.",
  },
  {
    id: "kids-pool",
    name: "Junior Splash Lagoon",
    hindiName: "किड्स स्प्लैश पूल",
    category: "Kids",
    categoryLabel: "Kids Zone",
    shortDescription:
      "A gentle splash zone with mini slides and water toys for little ones.",
    description:
      "A dedicated circular zero-depth to shallow wading pool designed exclusively for toddlers and children. Features colorful mushroom fountains, mini-flume slides, tipping buckets, and cushioned shade cabanas for parents.",
    image: "/images/kids-pool-3d.jpg",
    badge: "Toddler & Kids Paradise",
    chips: ["Toddlers & Kids", "0.3m–0.6m depth", "Fountains"],
    features: [
      "Safe 0.3m–0.6m wading depth with zero-depth entry",
      "Interactive mushroom spray fountains & tipping water buckets",
      "Gentle dual mini-slides for younger children",
      "Surrounding cabana loungers with full parent visibility",
    ],
    masterPlanZone: "South-West Kids Zone (Adjacent to Green Ground for Kids)",
    disclaimer: "Children’s attraction visualization.",
  },
  {
    id: "restaurant-cafe",
    name: "Outdoor Café",
    hindiName: "आउटडोर कैफ़े",
    category: "Dining & Amenities",
    categoryLabel: "Dining & Cafe",
    shortDescription:
      "Poolside dining and shaded tables for snacks, meals and cool drinks.",
    description:
      "A modern restaurant building paired with a spacious al-fresco terrace featuring shaded dining tables, poolside reflection fountains, and quick-service kiosks serving family-favorite refreshments.",
    image: "/images/soul-dive-cafe-dining.jpg",
    badge: "Dining & Hospitality",
    chips: ["Multi-cuisine", "Poolside patio", "Snacks"],
    features: [
      "Air-conditioned indoor dining hall and commercial kitchen",
      "Expansive outdoor patio with large sun umbrellas",
      "Ready food kiosks for quick snacks & chilled drinks",
      "Scenic water park vistas overlooking the central pools",
    ],
    masterPlanZone: "South-West Concourse & Dining Block",
    disclaimer: "Hospitality amenities. Menu offerings to be announced closer to launch.",
  },
  {
    id: "entrance-concourse",
    name: "Grand Arrival Concourse",
    hindiName: "प्रवेश द्वार एवं स्वागत परिसर",
    category: "Dining & Amenities",
    categoryLabel: "Guest Services",
    shortDescription:
      "A welcoming entrance with ticketing, guest services and easy access.",
    description:
      "A modern entrance concourse housing streamlined ticket counters, turnstile entries, waiting lobby, costume issue & return counters, private changing suites, clean shower stalls, and secure electronic lockers.",
    image: "/images/entrance-concourse-3d.jpg",
    badge: "Guest Services",
    chips: ["Ticketing", "Lockers & showers", "Parking"],
    features: [
      "Multiple ticket sales windows for rapid guest entry",
      "Spacious gender-separated locker and changing facilities",
      "Costume issue and return counters",
      "Organized 4-wheeler and 2-wheeler guest parking",
    ],
    masterPlanZone: "South Perimeter Arrival Hub",
    disclaimer: "Concourse visualization.",
  },
];
