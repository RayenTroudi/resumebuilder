"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] opacity-30 dark:opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(99,102,241,0.4) 0%, rgba(168,85,247,0.2) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[400px] opacity-15 dark:opacity-10"
          style={{
            background: "radial-gradient(ellipse at center, rgba(16,185,129,0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          ATS resumes that
          <br />
          <span className="gradient-text">actually get read.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          CareerForge AI builds ATS-optimized resumes with real-time scoring, AI keyword tailoring, and recruiter insights — so your resume passes every filter.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 w-full px-2 sm:px-0"
        >
          <Button
            size="lg"
            className="h-12 px-8 text-base bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0 shadow-xl shadow-indigo-500/25 group w-full sm:w-auto"
            asChild
          >
            <Link href="/signup">
              Build My ATS Resume Free
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base w-full sm:w-auto" asChild>
            <Link href="#features">See How It Works</Link>
          </Button>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-sm text-muted-foreground mb-16 px-2"
        >
          {[
            "No credit card required",
            "Free plan available",
            "Setup in 5 minutes",
          ].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground mb-12 sm:mb-20"
        >
          <div className="flex items-center gap-1.5">
            <div className="flex -space-x-2">
              {["Alex", "Sarah", "Marcus", "Priya", "Tom"].map((name) => (
                <img
                  key={name}
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}&backgroundColor=6366f1`}
                  alt={name}
                  className="w-7 h-7 rounded-full border-2 border-background bg-indigo-500/20"
                />
              ))}
            </div>
            <span>12,400+ interviews landed</span>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-1">4.9/5 from 2,100+ reviews</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-indigo-400" />
            <span>Average ATS score: 91%</span>
          </div>
        </motion.div>

        {/* Hero preview card */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl border-x border-b border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl overflow-hidden">
            {/* Floating AI badge */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 sm:-right-4 top-24 bg-card border border-indigo-500/30 rounded-xl px-3 py-2 shadow-xl hidden sm:flex items-center gap-2"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Zap className="w-3 h-3 text-white" />
              </div>
              <div>
                <p className="text-xs font-medium">AI Tailoring</p>
                <p className="text-xs text-muted-foreground">Adding missing keywords...</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-2 sm:-left-4 bottom-8 bg-card border border-emerald-500/30 rounded-xl px-3 py-2 shadow-xl hidden sm:flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-xs font-medium text-emerald-400">ATS: Passing ✓</p>
            </motion.div>
          </div>

          {/* Glow */}
          <div
            className="absolute -inset-1 rounded-2xl -z-10 opacity-20"
            style={{
              background: "radial-gradient(ellipse at center, rgba(99,102,241,0.5) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
