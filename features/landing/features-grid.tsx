"use client";

import { motion } from "framer-motion";
import {
  FileText, Target, Sparkles, BarChart3, Download,
  Key, Eye, Zap,
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Real-Time ATS Scoring",
    description: "See your ATS compatibility score update live as you type. Know exactly where you stand before you apply.",
    color: "from-emerald-500 to-teal-500",
    highlight: true,
  },
  {
    icon: Key,
    title: "Keyword Optimization",
    description: "Our AI identifies every keyword the ATS is scanning for and tells you exactly which ones are missing.",
    color: "from-violet-500 to-pink-500",
  },
  {
    icon: Eye,
    title: "Recruiter Insights",
    description: "Understand how recruiters actually read your resume — eye-tracking data, 6-second test results, and section priority.",
    color: "from-sky-500 to-indigo-500",
  },
  {
    icon: BarChart3,
    title: "ATS Compatibility Check",
    description: "Test against 50+ ATS systems used by top companies. Catch parsing errors before they silently reject you.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: FileText,
    title: "ATS-Friendly Templates",
    description: "Every template is designed by experts to be machine-readable first, beautiful second. No hidden boxes or columns.",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "One-Click Improvements",
    description: "AI surfaces the top 3 changes that will most improve your score. Apply all in one click, or review each one.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Download,
    title: "PDF Export",
    description: "Export pixel-perfect, ATS-safe PDFs with correct font embedding and no parsing artifacts.",
    color: "from-slate-500 to-slate-600",
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="gradient-text">Features</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`group relative p-6 rounded-2xl border border-border/50 bg-card hover:border-border transition-all duration-300 hover:shadow-lg ${
                feature.highlight ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
              >
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity bg-gradient-to-br ${feature.color} pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
