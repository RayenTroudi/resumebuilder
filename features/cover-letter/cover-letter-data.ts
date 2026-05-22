export interface CoverLetterTemplate {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  accent: string;
  bg: string;
  preview: {
    header: string;
    title: string;
    company: string;
    body: string;
  };
}

export const COVER_LETTER_TEMPLATES: CoverLetterTemplate[] = [
  {
    id: "cl-professional",
    slug: "professional",
    name: "Professional",
    subtitle: "Clean & corporate",
    accent: "#1d4ed8",
    bg: "#eff6ff",
    preview: {
      header: "John Anderson",
      title: "Senior Product Manager",
      company: "Google",
      body: "Dear Hiring Manager,\n\nI am writing to express my strong interest in the Product Manager position at Google. With over 8 years of experience leading cross-functional teams and delivering data-driven products at scale, I am confident in my ability to contribute meaningfully to your mission.\n\nThroughout my career at Amazon, I have owned products serving 12M+ monthly active users, driving a 34% increase in engagement year-over-year through rigorous A/B testing and customer research.\n\nI would welcome the opportunity to discuss how my background aligns with your team's goals.",
    },
  },
  {
    id: "cl-modern",
    slug: "modern",
    name: "Modern",
    subtitle: "Bold sidebar accent",
    accent: "#7c3aed",
    bg: "#f5f3ff",
    preview: {
      header: "Sofia Martinez",
      title: "UX Designer",
      company: "Figma",
      body: "Hi Figma Team,\n\nDesign tools shape how creators think. That's why I've spent five years crafting interfaces that reduce friction and amplify creativity — and why joining Figma feels like the natural next step.\n\nAt Shopify, I redesigned the merchant onboarding flow, reducing drop-off by 28% and earning an internal design excellence award. I thrive in collaborative, fast-moving environments where research informs every pixel.\n\nI'd love to bring that energy to your design systems team.",
    },
  },
  {
    id: "cl-minimal",
    slug: "minimal",
    name: "Minimal",
    subtitle: "Understated elegance",
    accent: "#059669",
    bg: "#f0fdf4",
    preview: {
      header: "David Chen",
      title: "Data Scientist",
      company: "Stripe",
      body: "Dear Stripe Recruiting,\n\nData tells a story — and I want to help Stripe write its next chapter. With a background in ML engineering and statistical modeling, I specialize in turning noisy datasets into actionable signals that drive product decisions.\n\nPreviously at Airbnb, I built a pricing optimization model that increased host revenue by $14M annually. I'm drawn to Stripe's infrastructure challenges and would be excited to contribute to your risk and fraud detection systems.\n\nThank you for your consideration.",
    },
  },
  {
    id: "cl-creative",
    slug: "creative",
    name: "Creative",
    subtitle: "Stand out instantly",
    accent: "#dc2626",
    bg: "#fef2f2",
    preview: {
      header: "Aaliyah Brooks",
      title: "Marketing Director",
      company: "Spotify",
      body: "To the Spotify Marketing Team,\n\nMusic moves people. So does great marketing — and I've built a career at the intersection of both. As Marketing Director at Warner Music Group, I led campaigns that generated 2.4B streams and broke three artists into the Billboard Hot 100.\n\nI believe Spotify's next growth chapter lives in creator-led storytelling, and I have a roadmap to prove it. My team won three Cannes Lions in the past two years, and I'm ready to bring that creative firepower to your brand.\n\nLet's make something loud.",
    },
  },
  {
    id: "cl-executive",
    slug: "executive",
    name: "Executive",
    subtitle: "Command authority",
    accent: "#0f172a",
    bg: "#f8fafc",
    preview: {
      header: "Robert Williams",
      title: "Chief Technology Officer",
      company: "Fortune 500",
      body: "Dear Board of Directors,\n\nTransforming technology organizations is what I do. Over 20 years in enterprise software, I have led digital transformations at three Fortune 500 companies, delivered $400M+ in cost efficiencies, and built engineering teams that shipped at twice the industry average velocity.\n\nAt my current organization, I restructured a 1,200-person engineering division, adopted cloud-native architecture, and reduced time-to-market by 60% in 18 months.\n\nI am prepared to bring that same rigor and vision to your leadership team.",
    },
  },
];
