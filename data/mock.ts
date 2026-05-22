import type {
  User, Resume, Portfolio, Project, CoverLetter,
  InterviewQuestion, BillingHistory, PricingPlan,
  Notification, Analytics, AdminUser, PortfolioTheme
} from "@/types";

export const mockUser: User = {
  id: "usr_1",
  name: "Alex Rivera",
  email: "alex@example.com",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  plan: "pro",
  createdAt: "2024-01-15",
  aiCreditsUsed: 47,
  aiCreditsTotal: 100,
  role: "user",
};

export const mockResumes: Resume[] = [
  {
    id: "res_1",
    title: "Senior Full-Stack Engineer",
    template: "modern",
    lastModified: "2024-03-12",
    score: 87,
    atsScore: 92,
    views: 143,
    sections: [
      {
        id: "sec_summary",
        type: "summary",
        title: "Professional Summary",
        order: 0,
        items: [{
          id: "sum_1",
          title: "Summary",
          description: "Passionate full-stack engineer with 5+ years building scalable web applications. Expertise in React, Node.js, and cloud architecture. Led teams of 3–8 engineers, delivering projects 15% under budget."
        }]
      },
      {
        id: "sec_exp",
        type: "experience",
        title: "Experience",
        order: 1,
        items: [
          {
            id: "exp_1",
            title: "Senior Software Engineer",
            subtitle: "Stripe",
            date: "2022-01",
            endDate: "Present",
            location: "San Francisco, CA",
            bullets: [
              "Led development of payment SDK used by 50,000+ merchants globally",
              "Reduced API latency by 40% through architectural refactoring",
              "Mentored 4 junior engineers, conducting weekly code reviews",
              "Built real-time fraud detection pipeline processing 2M+ transactions/day"
            ]
          },
          {
            id: "exp_2",
            title: "Software Engineer",
            subtitle: "Vercel",
            date: "2020-06",
            endDate: "2022-01",
            location: "Remote",
            bullets: [
              "Contributed to Next.js core — 3 features shipped in v12",
              "Built edge middleware system, cutting TTFB by 60%",
              "Collaborated with design to ship Vercel Analytics dashboard"
            ]
          }
        ]
      },
      {
        id: "sec_edu",
        type: "education",
        title: "Education",
        order: 2,
        items: [
          {
            id: "edu_1",
            title: "B.S. Computer Science",
            subtitle: "UC Berkeley",
            date: "2016",
            endDate: "2020",
            location: "Berkeley, CA",
            description: "GPA: 3.8 | Dean's List | ACM Club President"
          }
        ]
      },
      {
        id: "sec_skills",
        type: "skills",
        title: "Skills",
        order: 3,
        items: [
          {
            id: "skill_1",
            title: "Languages",
            skills: ["TypeScript", "Python", "Go", "Rust", "SQL"]
          },
          {
            id: "skill_2",
            title: "Frontend",
            skills: ["React", "Next.js", "Vue", "Tailwind CSS", "Framer Motion"]
          },
          {
            id: "skill_3",
            title: "Backend",
            skills: ["Node.js", "GraphQL", "PostgreSQL", "Redis", "Kafka"]
          },
          {
            id: "skill_4",
            title: "Cloud & DevOps",
            skills: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform"]
          }
        ]
      },
      {
        id: "sec_proj",
        type: "projects",
        title: "Projects",
        order: 4,
        items: [
          {
            id: "proj_1",
            title: "OpenMetrics",
            description: "Open-source observability platform with 2,400+ GitHub stars",
            url: "https://github.com/alex/openmetrics",
            skills: ["Go", "ClickHouse", "React", "Prometheus"]
          }
        ]
      }
    ]
  },
  {
    id: "res_2",
    title: "Product Manager — Tech",
    template: "clean",
    lastModified: "2024-02-28",
    score: 74,
    atsScore: 81,
    views: 67,
    sections: []
  },
  {
    id: "res_3",
    title: "ML Engineer (Draft)",
    template: "minimal",
    lastModified: "2024-01-05",
    score: 61,
    atsScore: 69,
    views: 12,
    sections: []
  }
];

export const portfolioThemes: PortfolioTheme[] = [
  {
    id: "theme_obsidian",
    name: "Obsidian",
    preview: "/themes/obsidian.png",
    colors: { primary: "#6366f1", background: "#0a0a0f", text: "#e4e4f7", accent: "#818cf8" },
    font: "Sora",
    style: "minimal"
  },
  {
    id: "theme_arctic",
    name: "Arctic",
    preview: "/themes/arctic.png",
    colors: { primary: "#0ea5e9", background: "#f8fafc", text: "#0f172a", accent: "#38bdf8" },
    font: "DM Sans",
    style: "corporate"
  },
  {
    id: "theme_ember",
    name: "Ember",
    preview: "/themes/ember.png",
    colors: { primary: "#f59e0b", background: "#0c0a09", text: "#fef3c7", accent: "#fbbf24" },
    font: "Space Grotesk",
    style: "bold"
  },
  {
    id: "theme_sage",
    name: "Sage",
    preview: "/themes/sage.png",
    colors: { primary: "#22c55e", background: "#050f08", text: "#dcfce7", accent: "#4ade80" },
    font: "Inter",
    style: "creative"
  },
  {
    id: "theme_aurora",
    name: "Aurora",
    preview: "/themes/aurora.png",
    colors: { primary: "#ec4899", background: "#0d0514", text: "#fce7f3", accent: "#f472b6" },
    font: "Sora",
    style: "creative"
  },
  {
    id: "theme_slate",
    name: "Slate",
    preview: "/themes/slate.png",
    colors: { primary: "#64748b", background: "#f1f5f9", text: "#1e293b", accent: "#94a3b8" },
    font: "DM Sans",
    style: "minimal"
  }
];

export const mockPortfolio: Portfolio = {
  id: "port_1",
  title: "Alex Rivera — Developer",
  theme: portfolioThemes[0],
  subdomain: "alexrivera",
  views: 1847,
  published: true,
  lastModified: "2024-03-10",
  sections: [
    { id: "s_hero", type: "hero", enabled: true, content: { headline: "I build things for the web.", subline: "Senior Engineer • Open Source • SF Bay Area" } },
    { id: "s_about", type: "about", enabled: true, content: {} },
    { id: "s_skills", type: "skills", enabled: true, content: {} },
    { id: "s_projects", type: "projects", enabled: true, content: {} },
    { id: "s_experience", type: "experience", enabled: true, content: {} },
    { id: "s_contact", type: "contact", enabled: true, content: {} },
  ]
};

export const mockProjects: Project[] = [
  {
    id: "proj_1",
    title: "OpenMetrics",
    description: "Open-source observability platform. Real-time metrics, distributed tracing, and alerting at scale.",
    techStack: ["Go", "ClickHouse", "React", "Prometheus", "Kubernetes"],
    githubUrl: "https://github.com/alex/openmetrics",
    liveUrl: "https://openmetrics.dev",
    featured: true,
    stars: 2400
  },
  {
    id: "proj_2",
    title: "Zap CLI",
    description: "Blazing-fast CLI tool for scaffolding full-stack projects with opinionated defaults.",
    techStack: ["Rust", "Clap", "Tokio"],
    githubUrl: "https://github.com/alex/zap",
    featured: true,
    stars: 890
  },
  {
    id: "proj_3",
    title: "StreamDB",
    description: "Lightweight event-sourcing database built on top of SQLite for indie apps.",
    techStack: ["TypeScript", "SQLite", "Node.js"],
    githubUrl: "https://github.com/alex/streamdb",
    liveUrl: "https://streamdb.sh",
    featured: false,
    stars: 340
  },
  {
    id: "proj_4",
    title: "ResumeJSON",
    description: "Open standard for structured resume data. JSON Schema + CLI tools + integrations.",
    techStack: ["TypeScript", "JSON Schema", "Python"],
    githubUrl: "https://github.com/alex/resumejson",
    featured: false,
    stars: 180
  }
];

export const mockCoverLetters: CoverLetter[] = [
  {
    id: "cl_1",
    jobTitle: "Staff Engineer",
    company: "Linear",
    generatedAt: "2024-03-11",
    tone: "professional",
    content: `Dear Hiring Manager,\n\nI am writing to express my strong interest in the Staff Engineer position at Linear. With five years of experience building developer tools and a deep appreciation for Linear's commitment to craftsmanship, I believe I am uniquely positioned to contribute to your mission.\n\nAt Stripe, I led the development of our payment SDK—a product now relied upon by over 50,000 merchants. I learned that truly great software is not just about code quality, but about the experience it creates for the developer using it. Linear exemplifies this philosophy, and it's the reason I use it every day.\n\nI would love the opportunity to discuss how my background in distributed systems, frontend performance, and team leadership aligns with the work you're doing.\n\nBest regards,\nAlex Rivera`
  }
];

export const mockInterviewQuestions: InterviewQuestion[] = [
  {
    id: "iq_1",
    question: "Tell me about a time you had to make a difficult technical decision with incomplete information.",
    category: "behavioral",
    difficulty: "medium",
    answer: "At Stripe, we faced a critical choice: rewrite our fraud detection pipeline in Go for performance, or patch the existing Node.js system. We had 2 weeks before Black Friday. I organized a spike, assigned two engineers to prototype the Go approach, and set clear success criteria. We used the data to make an informed call—incremental patch with a Go rewrite scheduled for Q1. The key was defining what 'enough information' looked like before we started.",
    tips: ["Use the STAR framework", "Quantify the impact", "Highlight your decision-making process", "Show what you learned"]
  },
  {
    id: "iq_2",
    question: "How do you approach system design for high-traffic, low-latency APIs?",
    category: "technical",
    difficulty: "hard",
    answer: "I start with requirements: what's the SLA, what's the expected QPS, what's the acceptable p99 latency? Then I work through the stack: load balancing strategy, caching layers (CDN, Redis, in-process), database choice and indexing strategy, async processing for non-critical paths, and observability from day one. I've found that most latency issues stem from N+1 queries or missing indexes—so profiling early is essential.",
    tips: ["Always clarify requirements first", "Draw the architecture", "Discuss tradeoffs explicitly", "Mention monitoring and observability"]
  },
  {
    id: "iq_3",
    question: "Describe your approach to code review.",
    category: "behavioral",
    difficulty: "easy",
    answer: "I treat code review as a teaching and learning opportunity, not a gatekeeping exercise. I focus on logic errors and security issues first, then architecture concerns, and finally style. I try to leave at least one positive comment per PR. I use the 'nitpick' prefix for style suggestions that I don't block on. The goal is shipping quality code while keeping the author's motivation high.",
    tips: ["Mention specific review priorities", "Show empathy for the author", "Discuss async vs. synchronous review"]
  },
  {
    id: "iq_4",
    question: "How do you handle technical debt?",
    category: "situational",
    difficulty: "medium",
    answer: "I categorize debt: strategic debt (deliberate shortcuts with a plan), accidental debt (mistakes), and legacy debt (outdated patterns). I maintain a tech debt backlog and negotiate dedicated cleanup sprints—usually 20% of each cycle. I make debt visible to stakeholders by tying it to business outcomes: 'This module causes 3 hours of extra debugging per release.'",
    tips: ["Show you have a systematic approach", "Tie debt to business impact", "Demonstrate balance between delivery and quality"]
  },
  {
    id: "iq_5",
    question: "What's your experience with distributed systems and consensus?",
    category: "technical",
    difficulty: "hard",
    answer: "I've worked extensively with distributed systems at both Stripe and in my open-source work. I understand CAP theorem tradeoffs and have practical experience with Kafka for event streaming, Redis Sentinel for HA, and Kubernetes for orchestration. I've debugged split-brain scenarios and implemented idempotency keys for at-least-once delivery. The hardest part is always observability—distributed tracing with OpenTelemetry has been invaluable.",
    tips: ["Reference real systems you've used", "Show understanding of failure modes", "Discuss consistency models"]
  },
  {
    id: "iq_6",
    question: "Why do you want to work here?",
    category: "culture",
    difficulty: "easy",
    answer: "I've followed Linear's journey closely—the product philosophy, the team's writing on product craftsmanship, and the way you've built a tool that developers actually love. I want to work somewhere where design quality and engineering rigor are treated as inseparable. That's rare, and Linear has it.",
    tips: ["Be specific about the company", "Tie to your values", "Show you've done research", "Be authentic"]
  }
];

export const mockBillingHistory: BillingHistory[] = [
  { id: "bill_1", date: "2024-03-01", amount: 8, description: "Pro Plan — March 2024", status: "paid", invoice: "INV-2024-0301" },
  { id: "bill_2", date: "2024-02-01", amount: 8, description: "Pro Plan — February 2024", status: "paid", invoice: "INV-2024-0201" },
  { id: "bill_3", date: "2024-01-01", amount: 8, description: "Pro Plan — January 2024", status: "paid", invoice: "INV-2024-0101" },
  { id: "bill_4", date: "2023-12-01", amount: 0, description: "Free Plan", status: "paid", invoice: "INV-2023-1201" },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    yearlyPrice: 0,
    description: "Build your first ATS-ready resume",
    features: [
      "1 Resume",
      "ATS scan preview",
      "Basic templates (3)",
      "Limited PDF exports",
      "Real-time ATS score",
    ],
    notIncluded: [
      "Unlimited resumes",
      "AI tailoring",
      "Full ATS scoring",
      "Recruiter insights",
      "Keyword optimization",
      "Unlimited PDF export",
    ],
    cta: "Get Started Free",
    color: "from-slate-500 to-slate-600",
  },
  {
    id: "weekly",
    name: "Weekly",
    price: 1.9,
    yearlyPrice: 0,
    billingPeriod: "week",
    description: "Try Pro features for a full week",
    features: [
      "Unlimited Resumes",
      "AI tailoring & rewrites",
      "Full ATS scoring",
      "Recruiter insights",
      "PDF export",
      "Keyword optimization",
      "All templates",
    ],
    notIncluded: [
      "Priority support",
    ],
    cta: "Start Weekly — $1.9/wk",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "pro",
    name: "Pro",
    price: 5.9,
    yearlyPrice: 5,
    billingPeriod: "month",
    description: "Everything you need to land interviews",
    features: [
      "Unlimited Resumes",
      "AI tailoring & rewrites",
      "Full ATS scoring",
      "Recruiter insights",
      "PDF export",
      "Keyword optimization",
      "All templates",
      "Priority support",
    ],
    popular: true,
    cta: "Start Pro — $5.9/mo",
    color: "from-indigo-500 to-purple-600",
  },
];

export const mockAnalytics: Analytics[] = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
  resumeViews: Math.floor(Math.random() * 30) + 5,
  portfolioViews: Math.floor(Math.random() * 80) + 20,
  aiGenerations: Math.floor(Math.random() * 8) + 1,
}));

export const mockNotifications: Notification[] = [
  { id: "n1", type: "ai", title: "AI Suggestion Ready", message: "Your resume has 3 new AI improvement suggestions", time: "2 min ago", read: false },
  { id: "n2", type: "success", title: "Portfolio Published", message: "alexrivera.careerforge.ai is now live", time: "1 hour ago", read: false },
  { id: "n3", type: "info", title: "New Template Available", message: "Check out the new 'Executive' resume template", time: "3 hours ago", read: true },
  { id: "n4", type: "warning", title: "Credits Running Low", message: "You have 53 AI credits remaining this month", time: "1 day ago", read: true },
];

export const mockAdminUsers: AdminUser[] = [
  { id: "a1", name: "Sarah Chen", email: "sarah@techcorp.com", plan: "Pro", status: "active", joined: "2024-01-10", revenue: 87, aiUsage: 340 },
  { id: "a2", name: "Marcus Johnson", email: "marcus@startup.io", plan: "Team", status: "active", joined: "2024-02-03", revenue: 237, aiUsage: 1200 },
  { id: "a3", name: "Priya Patel", email: "priya@dev.co", plan: "Free", status: "active", joined: "2024-03-01", revenue: 0, aiUsage: 15 },
  { id: "a4", name: "Tom Eriksson", email: "tom@agency.se", plan: "Team", status: "active", joined: "2023-11-22", revenue: 711, aiUsage: 3400 },
  { id: "a5", name: "Yuki Tanaka", email: "yuki@design.jp", plan: "Pro", status: "suspended", joined: "2024-01-28", revenue: 58, aiUsage: 89 },
  { id: "a6", name: "Elena Rodriguez", email: "elena@vc.com", plan: "Pro", status: "active", joined: "2024-02-14", revenue: 58, aiUsage: 210 },
  { id: "a7", name: "James Kim", email: "james@bootcamp.edu", plan: "Free", status: "pending", joined: "2024-03-12", revenue: 0, aiUsage: 5 },
  { id: "a8", name: "Aisha Mohammed", email: "aisha@ml.ai", plan: "Pro", status: "active", joined: "2024-01-05", revenue: 116, aiUsage: 480 },
];

export const testimonials = [
  {
    id: "t1",
    name: "Sarah Chen",
    role: "Software Engineer @ Google",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content: "CareerForge AI helped me land my dream job at Google. The ATS optimization alone was worth every penny — my callback rate went from 10% to 60%.",
    rating: 5,
    plan: "Pro"
  },
  {
    id: "t2",
    name: "Marcus Johnson",
    role: "Product Manager @ Figma",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    content: "I had zero idea my resume was being filtered by ATS bots. CareerForge's score jumped from 42% to 91% in one session. Got 3 calls the next week.",
    rating: 5,
    plan: "Pro"
  },
  {
    id: "t3",
    name: "Priya Patel",
    role: "ML Engineer @ Anthropic",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    content: "The AI keyword optimization found 14 missing terms from the job description I would have never noticed. Absolute game-changer for technical roles.",
    rating: 5,
    plan: "Pro"
  },
  {
    id: "t4",
    name: "Tom Eriksson",
    role: "Senior Dev @ Linear",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom",
    content: "The recruiter insights showed me exactly how hiring managers read my resume in the first 6 seconds. I restructured everything. Landed 2 offers.",
    rating: 5,
    plan: "Pro"
  },
  {
    id: "t5",
    name: "Yuki Tanaka",
    role: "UX Designer @ Vercel",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yuki",
    content: "Went from a generic resume to an ATS-scoring 94% in under an hour. The AI tailoring actually sounds like me, not a robot.",
    rating: 5,
    plan: "Pro"
  },
  {
    id: "t6",
    name: "Aisha Mohammed",
    role: "Researcher @ DeepMind",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha",
    content: "Used CareerForge to transition from academia to industry. The AI rewrote my academic CV into a compelling engineering resume. Got 4 offers.",
    rating: 5,
    plan: "Pro"
  }
];

export const faqs = [
  {
    question: "What exactly is an ATS, and why does it matter?",
    answer: "An Applicant Tracking System (ATS) is software used by 99% of Fortune 500 companies to automatically filter resumes before a human ever sees them. If your resume isn't ATS-optimized, it gets rejected by a bot — no matter how qualified you are. CareerForge ensures you pass every filter."
  },
  {
    question: "How does the AI tailoring work?",
    answer: "Paste any job description and our AI analyzes it for required keywords, skills, and phrases. It then rewrites your resume bullets to naturally incorporate those terms, improving your ATS score and making your experience directly relevant to the role."
  },
  {
    question: "What's included in the free plan?",
    answer: "The free plan lets you build 1 resume, see a preview of your ATS scan score, use 3 templates, and export a limited number of PDFs. It's designed to let you experience the builder — upgrade to Pro for unlimited everything plus full AI features."
  },
  {
    question: "Can I cancel Pro anytime?",
    answer: "Yes, cancel anytime from your account settings. You'll keep Pro access until the end of your billing period, then seamlessly revert to the free plan. No cancellation fees, no questions asked."
  },
  {
    question: "What are recruiter insights?",
    answer: "Pro users get data on how recruiters actually read resumes — heat maps of attention, optimal resume length for your industry, and which sections hiring managers skip. This turns guesswork into strategy."
  },
  {
    question: "Is my resume data private?",
    answer: "Absolutely. Your resume data is encrypted, never shared with third parties, and never used to train AI models. We are fully GDPR compliant. You can export or delete all your data at any time."
  }
];
