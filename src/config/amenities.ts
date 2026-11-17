export interface Amenity {
  id: string;
  title: string;
  category: "Dining" | "Entertainment" | "Access" | "Comfort" | "Safety" | "Relaxation";
  description: string;
  type: "feature" | "utility";
  image?: string;
  imageAlt?: string;
  iconName: "UtensilsCrossed" | "Music" | "Car" | "ShowerHead" | "ShieldAlert" | "Sparkles";
  badge?: string;
}

export const amenities: Amenity[] = [
  {
    id: "restaurant-cafe",
    title: "Restaurant & Outdoor Café",
    category: "Dining",
    description: "Poolside dining and shaded tables for snacks, meals and cool drinks.",
    type: "feature",
    image: "/images/soul-dive-cafe-dining.jpg",
    imageAlt: "Soul Dive Restaurant & Outdoor Café - Poolside Dining and Shaded Tables",
    iconName: "UtensilsCrossed",
  },
  {
    id: "rain-dance-arena",
    title: "Rain Dance Music Arena",
    category: "Entertainment",
    description: "Misting rain jets and a live music floor for splash-and-dance celebrations.",
    type: "feature",
    image: "/images/rain-dance-3d.jpg",
    imageAlt: "Soul Dive Rain Dance Music Arena - Misting Rain Jets and Dance Floor",
    iconName: "Music",
  },
  {
    id: "dedicated-parking",
    title: "Dedicated Parking",
    category: "Access",
    description: "Easy two- and four-wheeler parking right at the entrance.",
    type: "utility",
    iconName: "Car",
    badge: "Easy Access",
  },
  {
    id: "lockers-changing-rooms",
    title: "Lockers & Changing Rooms",
    category: "Comfort",
    description: "Clean changing rooms, hot showers, costume counters and secure lockers.",
    type: "utility",
    iconName: "ShowerHead",
    badge: "Guest Care",
  },
  /*
   * Extended amenities can be easily enabled or added here:
   * e.g. First Aid, Shaded Seating, Pure Drinking Water:
   *
   * {
   *   id: "first-aid-care",
   *   title: "First Aid & Lifeguard Station",
   *   category: "Safety",
   *   description: "Trained first-response medical attendants and active water safety patrols.",
   *   type: "utility",
   *   iconName: "ShieldAlert",
   *   badge: "Safety",
   * },
   */
];

