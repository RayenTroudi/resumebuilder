"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTAFooter() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.15) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6">
            <Target className="w-3.5 h-3.5" />
            Free plan — no credit card needed
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Stop getting filtered
            <br />
            <span className="gradient-text">by a robot.</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join 12,400+ job seekers who used CareerForge AI to build ATS-optimized resumes and land the interviews they deserved.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
            <Button
              size="lg"
              className="h-14 px-10 text-base bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0 shadow-2xl shadow-indigo-500/30 group w-full sm:w-auto"
              asChild
            >
              <Link href="/signup">
                Build My ATS Resume Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" className="w-full sm:w-auto" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Free forever · Weekly at $1.9/wk · Pro at $5.9/month · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
