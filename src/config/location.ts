/**
 * Soul Dive Location Configuration
 * Centralized, editable configuration for physical site coordinates,
 * travel distance matrix, copy, and visitor parking guidelines.
 */

export const SOUL_DIVE_COORDINATES = {
  // Verified physical site coordinates: Soul Dive waterpark, Biriya, Dibiyapur Road, Auraiya (UP)
  lat: 26.497275,
  lng: 79.53479,
  zoom: 17, // Zoomed in 2 levels from 15 so site pin is focused and distinct
  name: "Soul Dive Water Park",
  locality: "Biriya",
  road: "Dibiyapur Road",
  city: "Auraiya",
  district: "Auraiya",
  state: "Uttar Pradesh",
  postalCode: "206122",
  fullAddress: "Biriya, Dibiyapur Road, Auraiya, Uttar Pradesh 206122, India",
  googleMapsUrl: "https://maps.app.goo.gl/pqZceRkoguW8zFLT7",
  placeId: "ChIJRYMuxdnznTkROkr12yl2A04",
} as const;

export interface PrimaryDistanceStat {
  id: string;
  minutes: number;
  unit: string;
  name: string;
  distance: string;
  iconName: "car" | "compass" | "train";
  highlight?: boolean;
  stationNote?: string;
}

export interface SecondaryDistanceItem {
  id: string;
  name: string;
  distance: string;
  time: string;
  routeDetail?: string;
}

export interface ConnectivityItem {
  id: string;
  name: string;
  distance: string;
  time: string;
}

// Shared top connectivity items used across the Location section and Footer
export const CONNECTIVITY_DISTANCES: ConnectivityItem[] = [
  {
    id: "auraiya-center",
    name: "Auraiya City Center",
    distance: "4 km",
    time: "8 mins",
  },
  {
    id: "dibiyapur-town",
    name: "Dibiyapur Town",
    distance: "12 km",
    time: "18 mins",
  },
  {
    id: "railway-station",
    name: "Phaphund Railway Station",
    distance: "14 km",
    time: "22 mins",
  },
  {
    id: "etawah",
    name: "Etawah (NH-19)",
    distance: "52 km",
    time: "55 mins",
  },
];

// Top 3 primary distance stats (rendered as large, high-impact stat tiles)
export const PRIMARY_DISTANCES: PrimaryDistanceStat[] = [
  {
    id: "auraiya-center",
    minutes: 8,
    unit: "min",
    name: "Auraiya City Center",
    distance: "4 km",
    iconName: "car",
    highlight: true,
  },
  {
    id: "dibiyapur-town",
    minutes: 18,
    unit: "min",
    name: "Dibiyapur Town",
    distance: "12 km",
    iconName: "compass",
  },
  {
    id: "railway-station",
    minutes: 22,
    unit: "min",
    name: "Railway Station",
    distance: "14 km",
    iconName: "train",
    stationNote: "Phaphund Railway Station (PHD)",
  },
];

// Secondary distances (rendered in collapsible "More distances" accordion)
export const SECONDARY_DISTANCES: SecondaryDistanceItem[] = [
  {
    id: "bidhuna",
    name: "Bidhuna",
    distance: "38 km",
    time: "50 min",
    routeDetail: "Via State Highway connection",
  },
  {
    id: "etawah",
    name: "Etawah",
    distance: "52 km",
    time: "55 min",
    routeDetail: "Via NH-19 expressway & Auraiya exit",
  },
  {
    id: "kanpur-dehat",
    name: "Kanpur Dehat",
    distance: "58 km",
    time: "65 min",
    routeDetail: "Via NH-19 westward corridor",
  },
];

export const LOCATION_CONFIG = {
  eyebrow: "FIND US",
  heading: "Just 8 Minutes from Auraiya",
  subtext: "Located on Dibiyapur Road at Biriya, Soul Dive Water Park is just minutes from Auraiya and Dibiyapur with dedicated on-site parking.",
  ctaText: "Get Directions",
  planYourTripNote: "Free parking at the entrance on Dibiyapur Road",
  googleMapsDirectionsUrl: "https://maps.app.goo.gl/pqZceRkoguW8zFLT7",
  // Verified embed URL centered on real Google Maps listing with business pin
  embedUrl: `https://www.google.com/maps?q=Soul+Dive+waterpark&ll=${SOUL_DIVE_COORDINATES.lat},${SOUL_DIVE_COORDINATES.lng}&z=${SOUL_DIVE_COORDINATES.zoom}&output=embed`,
};

