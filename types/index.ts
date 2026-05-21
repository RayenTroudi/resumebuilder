export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  plan: "free" | "pro" | "team";
  createdAt: string;
  aiCreditsUsed: number;
  aiCreditsTotal: number;
  role: "user" | "admin";
}

export interface Resume {
  id: string;
  title: string;
  template: string;
  lastModified: string;
  score: number;
  atsScore: number;
  views: number;
  sections: ResumeSection[];
}

export interface ResumeSection {
  id: string;
  type: "experience" | "education" | "skills" | "projects" | "certifications" | "summary";
  title: string;
  items: ResumeSectionItem[];
  order: number;
}

export interface ResumeSectionItem {
  id: string;
  title: string;
  subtitle?: string;
  date?: string;
  endDate?: string;
  description?: string;
  bullets?: string[];
  skills?: string[];
  url?: string;
  location?: string;
}

export interface Portfolio {
  id: string;
  title: string;
  theme: PortfolioTheme;
  subdomain: string;
  views: number;
  published: boolean;
  lastModified: string;
  sections: PortfolioSection[];
}

export interface PortfolioTheme {
  id: string;
  name: string;
  preview: string;
  colors: {
    primary: string;
    background: string;
    text: string;
    accent: string;
  };
  font: string;
  style: "minimal" | "bold" | "creative" | "corporate";
}

export interface PortfolioSection {
  id: string;
  type: "hero" | "about" | "skills" | "projects" | "experience" | "education" | "contact";
  enabled: boolean;
  content: Record<string, unknown>;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  stars?: number;
}

export interface CoverLetter {
  id: string;
  jobTitle: string;
  company: string;
  generatedAt: string;
  tone: "professional" | "conversational" | "enthusiastic" | "formal";
  content: string;
}

export interface InterviewQuestion {
  id: string;
  question: string;
  category: "behavioral" | "technical" | "situational" | "culture";
  difficulty: "easy" | "medium" | "hard";
  answer: string;
  tips: string[];
}

export interface BillingHistory {
  id: string;
  date: string;
  amount: number;
  description: string;
  status: "paid" | "pending" | "failed";
  invoice: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  notIncluded?: string[];
  popular?: boolean;
  cta: string;
  color: string;
}

export interface Notification {
  id: string;
  type: "info" | "success" | "warning" | "ai";
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export interface Analytics {
  date: string;
  resumeViews: number;
  portfolioViews: number;
  aiGenerations: number;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  plan: string;
  status: "active" | "suspended" | "pending";
  joined: string;
  revenue: number;
  aiUsage: number;
}
