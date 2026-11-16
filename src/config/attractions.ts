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
    shortDescription:
      "Experience exciting artificial ocean waves in a spacious beach-style pool designed for refreshing family fun.",
    description:
      "A sprawling artificial beach-entry wave pool engineered with automated wave generation technology. Designed for families and swimmers of all ages to float, jump through crests, or lounge on the sun-deck shores in Auraiya.",
    image: "/images/mega-wave-pool-clean.jpg",
    badge: "Proposed Main Attraction",
    features: [
      "Gradual shallow-to-deep zero beach entry",
      "Pneumatic mechanical wave generation chamber",
      "Expansive waterside chaise lounge sundecks",
      "Dedicated lifeguard observation perimeters",
    ],
    masterPlanZone: "North Park Apex (Master Plan Drawing 12.11.2026)",
    disclaimer: "Proposed facility under development. Subject to architectural execution.",
  },
  {
    id: "water-slides",
    name: "Pendulum & Family Raft Slides",
    hindiName: "वाटर स्लाइड्स कॉम्प्लेक्स",
    category: "Thrill",
    categoryLabel: "Signature Slides",
    shortDescription:
      "Twist and plunge through high-speed boomerang chutes and multi-passenger family raft slides for exhilarating thrills.",
    description:
      "A multi-level slide launch tower hosting two premier waterslide experiences: the high-velocity Pendulum Ride (boomerang half-pipe wall) and the wide-channel Family Raft Ride for multi-passenger thrills in Auraiya.",
    image: "/images/water-slides-3d.jpg",
    badge: "Signature Thrill Ride",
    features: [
      "Engineered steel slide launch tower with safety railings",
      "Pendulum boomerang wall with zero-gravity sensation",
      "Multi-rider family tube slide with cascading curves",
      "Deep runout deceleration splash pool",
    ],
    masterPlanZone: "Central Slide Complex (Master Plan Drawing 12.11.2026)",
    disclaimer: "Proposed attraction visualization. Actual ride specs subject to final engineering.",
  },
  {
    id: "adult-pool",
    name: "Curvilinear Leisure Pool",
    hindiName: "एडल्ट लेज़र पूल",
    category: "Relaxation",
    categoryLabel: "Leisure Pool",
    shortDescription:
      "Swim and unwind in crystal-clear freeform waters framed by natural stone coping, wooden decks, and tropical palms.",
    description:
      "A masterfully shaped freeform swimming pool designed for relaxed laps, sun-drenched floating, and leisurely family swimming. Bordered by stone coping and shaded wooden deck lounges.",
    image: "/images/adult-pool-3d.jpg",
    badge: "Leisure & Swim",
    features: [
      "Curvilinear architectural pool profile with paved perimeter",
      "Dedicated timber sundeck with sun-shade umbrellas",
      "Continuous circulation & advanced sand-filtration system",
      "Direct pathway connection to the outdoor cafe",
    ],
    masterPlanZone: "West Central Aquatic Hub",
    disclaimer: "Proposed architectural visualization. Dimensions per master plan proposal.",
  },
  {
    id: "rain-dance",
    name: "Rain Dance Disk Arena",
    hindiName: "रेन डांस डिस्क",
    category: "Family",
    categoryLabel: "Rain Party",
    shortDescription:
      "Dance under refreshing overhead rain canopies and choreographed water jets set to high-energy party music.",
    description:
      "A circular paved open-air dance amphitheater equipped with an overhead cantilevered rain-canopy, multi-directional high-pressure water nozzles, and dynamic party sound infrastructure.",
    image: "/images/rain-dance-3d.jpg",
    badge: "Music & Rain Party",
    features: [
      "Architectural circular spray canopy with misting jets",
      "Anti-skid patterned mosaic drainage flooring",
      "Integrated audio truss for high-energy music parties",
      "Enclosed by blooming bougainvillea & tropical palms",
    ],
    masterPlanZone: "Central Festival Plaza",
    disclaimer: "Proposed facility under construction. Sound and spray configurations subject to launch.",
  },
  {
    id: "kids-pool",
    name: "Junior Splash Lagoon",
    hindiName: "किड्स स्प्लैश पूल",
    category: "Kids",
    categoryLabel: "Kids Zone",
    shortDescription:
      "A safe shallow water haven featuring mushroom spray umbrellas, tipping buckets, and gentle mini-slides for children.",
    description:
      "A dedicated circular zero-depth to shallow wading pool designed exclusively for toddlers and children. Features colorful mushroom fountains, mini-flume slides, tipping buckets, and cushioned shade cabanas for parents.",
    image: "/images/kids-pool-3d.jpg",
    badge: "Toddler & Kids Paradise",
    features: [
      "Safe 0.3m–0.6m wading depth with zero-depth entry",
      "Interactive mushroom spray fountains & tipping water buckets",
      "Gentle dual mini-slides for younger children",
      "Surrounding cabana loungers with full parent visibility",
    ],
    masterPlanZone: "South-West Kids Zone (Adjacent to Green Ground for Kids)",
    disclaimer: "Proposed children's attraction visualization.",
  },
  {
    id: "restaurant-cafe",
    name: "The Palm Grill & Outdoor Café",
    hindiName: "रेस्टोरेंट और आउटडोर कैफ़े",
    category: "Dining & Amenities",
    categoryLabel: "Dining & Cafe",
    shortDescription:
      "Enjoy delicious family meals, chilled refreshments, and quick bites on our scenic poolside al-fresco terrace.",
    description:
      "A modern restaurant building paired with a spacious al-fresco terrace featuring shaded dining tables, poolside reflection fountains, and quick-service kiosks serving family-favorite refreshments.",
    image: "/images/restaurant-cafe-3d.jpg",
    badge: "Dining & Hospitality",
    features: [
      "Air-conditioned indoor dining hall and commercial kitchen",
      "Expansive outdoor patio with large sun umbrellas",
      "Ready food kiosks for quick snacks & chilled drinks",
      "Scenic waterpark vistas overlooking the central pools",
    ],
    masterPlanZone: "South-West Concourse & Dining Block",
    disclaimer: "Proposed hospitality amenities. Menu offerings to be announced closer to launch.",
  },
  {
    id: "entrance-concourse",
    name: "Grand Arrival Concourse & Facilities",
    hindiName: "प्रवेश द्वार एवं स्वागत परिसर",
    category: "Dining & Amenities",
    categoryLabel: "Guest Services",
    shortDescription:
      "Streamlined ticketing windows, secure lockers, spacious changing rooms, and guest parking for hassle-free visits.",
    description:
      "A modern entrance concourse housing streamlined ticket counters, turnstile entries, waiting lobby, costume issue & return counters, private changing suites, clean shower stalls, and secure electronic lockers.",
    image: "/images/entrance-concourse-3d.jpg",
    badge: "Guest Services",
    features: [
      "Multiple ticket sales windows for rapid guest entry",
      "Spacious gender-separated locker and changing facilities",
      "Costume issue and return counters",
      "Organized 4-wheeler and 2-wheeler guest parking",
    ],
    masterPlanZone: "South Perimeter Arrival Hub",
    disclaimer: "Proposed architectural concourse visualization.",
  },
];
