export interface FAQItem {
  question: string;
  hindiQuestion?: string;
  answer: string;
  category: "General" | "Location" | "Attractions" | "Timelines & Tickets";
}

export const faqs: FAQItem[] = [
  {
    category: "General",
    question: "Is Soul Dive Water Park currently open to the public?",
    hindiQuestion: "क्या सोल डाइव वाटर पार्क अभी खुला है?",
    answer:
      "No. Soul Dive Water Park is currently under active development and construction in Auraiya, Uttar Pradesh. The park is non-operational at this stage. We are preparing a world-class aquatic experience for our guests. You can register on our website or contact us via WhatsApp to receive official opening announcements as we approach completion.",
  },
  {
    category: "Location",
    question: "Where is Soul Dive Water Park located?",
    hindiQuestion: "सोल डाइव वाटर पार्क कहाँ स्थित है?",
    answer:
      "The park is located at Biriya, Dibiyapur Road, Auraiya, Uttar Pradesh (PIN: 206122). It is strategically situated along the main Dibiyapur Road corridor, approximately 4 km from Auraiya city center, 12 km from Dibiyapur town, and within easy driving distance from Etawah (52 km via NH-19) and Kanpur Dehat.",
  },
  {
    category: "Attractions",
    question: "What attractions and rides will Soul Dive feature?",
    hindiQuestion: "सोल डाइव में कौन-कौन से मुख्य झूले और पूल होंगे?",
    answer:
      "Soul Dive will feature a large beach-entry Mega Wave Pool, a central multi-story Waterslide Complex (featuring the Pendulum Ride and Family Raft Slide), an Adult Leisure Pool, a specialized Junior Splash Pool with mushroom fountains and mini-slides, a high-energy Rain Dance Arena, expansive landscaped picnic lawns, a restaurant, and an outdoor shaded café.",
  },
  {
    category: "Timelines & Tickets",
    question: "When will Soul Dive Water Park open, and what will ticket prices be?",
    hindiQuestion: "वाटर पार्क कब खुलेगा और टिकट की कीमतें क्या होंगी?",
    answer:
      "An official opening date and ticket pricing structure have not been finalized yet. We strictly avoid speculative claims. Accurate ticket prices, timing packages (for adults, children, and students), and launch dates will be publicly announced through our official website and WhatsApp channel once project milestones are achieved.",
  },
  {
    category: "Attractions",
    question: "Will the water park be suitable for young children and families?",
    hindiQuestion: "क्या यह वाटर पार्क छोटे बच्चों और परिवारों के लिए सुरक्षित है?",
    answer:
      "Yes, family entertainment is our primary design objective. Soul Dive includes a completely dedicated Kids Pool (0.3m to 0.6m safe shallow depth) with soft-spray water mushrooms and mini-slides, surrounded by dedicated shade cabanas so parents have full visibility of their children at all times.",
  },
  {
    category: "Location",
    question: "Is parking available at the venue?",
    hindiQuestion: "क्या परिसर में पार्किंग की सुविधा उपलब्ध है?",
    answer:
      "Yes. The park layout includes extensive four-wheeler and two-wheeler parking bays directly outside the main entrance concourse along Dibiyapur Road to ensure convenient, secure guest arrival.",
  },
  {
    category: "General",
    question: "How can I get construction updates and early announcements?",
    hindiQuestion: "मुझे निर्माण कार्य और उद्घाटन की जानकारी कैसे मिल सकती है?",
    answer:
      "You can submit your phone number or email through the “Opening Updates” form on this website, or connect with our official team directly via WhatsApp (+91 97201 51220) to join our VIP early-access notification list.",
  },
];

