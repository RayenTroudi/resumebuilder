"use client";

import { motion } from "framer-motion";

const companies = [
  "Google", "Stripe", "Figma", "Vercel", "Linear", "Notion",
  "Anthropic", "OpenAI", "Airbnb", "Netflix",
];

export function TrustedBy() {
  return (
    <section className="py-16 border-y border-border/50 bg-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-8">
        <p className="text-sm text-muted-foreground font-medium tracking-widest uppercase">
          Our users passed ATS filters at
        </p>
      </div>
      <div className="relative flex overflow-hidden w-full">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 sm:gap-12 items-center whitespace-nowrap"
        >
          {[...companies, ...companies].map((company, i) => (
            <span
              key={i}
              className="text-xl font-display font-semibold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors cursor-default tracking-tight flex-shrink-0"
            >
              {company}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
