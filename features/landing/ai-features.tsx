"use client";

import { motion } from "framer-motion";
import { Sparkles, Wand2, Target, Zap } from "lucide-react";

const aiFeatures = [
  {
    icon: Wand2,
    title: "Job Description Matching",
    description: "Paste any job description. AI instantly identifies every required skill and keyword, then rewrites your bullets to match — without making it sound generic.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Target,
    title: "ATS Parser Simulation",
    description: "We simulate how 50+ ATS systems parse your resume and flag every formatting issue, unreadable section, or keyword miss before you apply.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Sparkles,
    title: "Bullet Point Rewriter",
    description: "AI transforms weak, vague bullets into quantified, action-verb-led achievements that hiring managers and ATS bots both love.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Zap,
    title: "Instant Score Feedback",
    description: "Real-time ATS compatibility score updates as you type. See exactly what changed your score and why — no black boxes.",
    color: "from-rose-500 to-pink-500",
  },
];

export function AIFeaturesSection() {
  return (
    <section className="py-24 sm:py-32 bg-muted/20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            AI-Powered
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Not just a template tool.
            <br />
            <span className="gradient-text">An ATS-beating machine.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Our AI has studied 10,000+ successful resumes and real ATS data from top companies to give your resume an unfair advantage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-border/80 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity bg-gradient-to-br ${feature.color} rounded-2xl`}
              />
              <div className="relative">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI rewrite demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20"
        >
          <div className="flex flex-col xs:flex-row items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-indigo-400 font-medium mb-2 uppercase tracking-widest">AI Bullet Rewrite — Live Example</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-2 font-medium">Before (ATS score: 42%):</p>
                  <p className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3 border border-border/50">
                    "Worked on the backend and fixed some performance issues"
                  </p>
                </div>
                <div>
                  <p className="text-xs text-emerald-400 mb-2 font-medium">After AI tailoring (ATS score: 91%):</p>
                  <p className="text-sm bg-emerald-500/10 text-foreground rounded-lg p-3 border border-emerald-500/20">
                    "Optimized REST API endpoints using Node.js and Redis caching, reducing p95 latency by 35% and resolving 12 critical production bottlenecks"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
