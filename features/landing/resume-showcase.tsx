"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  TemplateClassic,
  TemplateSidebar,
  TemplateMinimal,
} from "@/features/resume/resume-templates";
import { RESUME_EXAMPLES, SECTORS } from "@/features/resume/resume-examples-data";

/* visible sector filters – a curated subset for the landing page */
const LANDING_SECTORS = [
  "All",
  "Engineering",
  "Healthcare",
  "Legal",
  "Finance",
  "Education",
  "Government",
  "Marketing",
  "Retail",
  "Maintenance & Repair",
  "Information Technology",
  "Construction",
  "Accounting",
  "Social Services",
];

function ResumeCard({ example, index }: { example: typeof RESUME_EXAMPLES[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const atsColor =
    example.atsScore >= 95 ? "#10b981" : example.atsScore >= 90 ? "#3b82f6" : "#f59e0b";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
      className="group relative flex-shrink-0 w-[200px] cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* paper card */}
      <div className="relative rounded-xl overflow-hidden border border-border/30 shadow-md group-hover:shadow-2xl transition-all duration-300 bg-white group-hover:-translate-y-1.5">
        {/* scaled resume */}
        <div className="relative bg-white overflow-hidden" style={{ paddingBottom: "141%" }}>
          <div className="absolute inset-0">
            <div
              style={{
                width: "640px",
                height: "904px",
                transform: "scale(0.3125)",
                transformOrigin: "top left",
              }}
            >
              {example.template === "classic" && (
                <TemplateClassic data={example.data} accent={example.accent} />
              )}
              {example.template === "sidebar" && (
                <TemplateSidebar data={example.data} accent={example.accent} />
              )}
              {example.template === "minimal" && (
                <TemplateMinimal data={example.data} accent={example.accent} />
              )}
            </div>
          </div>
        </div>

        {/* hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0 flex flex-col items-center justify-end pb-4 gap-2"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)" }}
            >
              <Link href="/dashboard/resume/examples">
                <button
                  className="px-4 py-1.5 rounded-full text-xs font-semibold text-white shadow-lg"
                  style={{ background: example.accent }}
                >
                  Use Template
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ATS badge – top right */}
        <div
          className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold text-white shadow-sm"
          style={{ background: atsColor }}
        >
          <CheckCircle className="w-2.5 h-2.5" />
          {example.atsScore}%
        </div>
      </div>

      {/* label */}
      <div className="mt-2.5 px-0.5">
        <p className="text-sm font-semibold text-foreground truncate leading-snug">
          {example.role}
        </p>
        <p className="text-xs text-muted-foreground">{example.sector}</p>
      </div>
    </motion.div>
  );
}

export function ResumeShowcase() {
  const [activeSector, setActiveSector] = useState("All");
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const filtered =
    activeSector === "All"
      ? RESUME_EXAMPLES
      : RESUME_EXAMPLES.filter((ex) => ex.sector === activeSector);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -460 : 460, behavior: "smooth" });
  };

  return (
    <section id="templates" ref={sectionRef} className="py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            ATS-verified examples
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Resume templates for
            <br />
            <span className="gradient-text">every career path</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse {RESUME_EXAMPLES.length}+ expert-written resume examples across{" "}
            {SECTORS.length - 1} industries. Each one scores 89%+ on major ATS systems.
          </p>
        </motion.div>

        {/* ── sector filter pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center gap-2 mb-8 overflow-x-auto scrollbar-hide pb-1"
        >
          {LANDING_SECTORS.map((sector) => (
            <button
              key={sector}
              onClick={() => setActiveSector(sector)}
              className={cn(
                "whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all flex-shrink-0 border",
                activeSector === sector
                  ? "bg-primary text-primary-foreground border-primary shadow-sm shadow-primary/20"
                  : "bg-card/60 border-border/60 text-muted-foreground hover:text-foreground hover:border-border"
              )}
            >
              {sector}
            </button>
          ))}
        </motion.div>

        {/* ── scroll gallery ── */}
        <div className="relative">
          {/* left fade + arrow */}
          <div className="absolute left-0 top-0 bottom-8 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <button
            onClick={() => scroll("left")}
            className="absolute left-1 top-[38%] -translate-y-1/2 z-20 w-9 h-9 rounded-full border border-border/70 bg-card/90 backdrop-blur-sm shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-card transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* right fade + arrow */}
          <div className="absolute right-0 top-0 bottom-8 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <button
            onClick={() => scroll("right")}
            className="absolute right-1 top-[38%] -translate-y-1/2 z-20 w-9 h-9 rounded-full border border-border/70 bg-card/90 backdrop-blur-sm shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-card transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* cards row */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide px-2 py-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((example, i) => (
                <div key={example.id} style={{ scrollSnapAlign: "start" }}>
                  <ResumeCard example={example} index={i} />
                </div>
              ))}
            </AnimatePresence>

            {/* "See all" card at the end */}
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-shrink-0 w-[200px] flex flex-col"
            >
              <Link href="/dashboard/resume/examples" className="flex-1">
                <div
                  className="rounded-xl border-2 border-dashed border-border/60 hover:border-primary/40 transition-colors cursor-pointer flex flex-col items-center justify-center gap-3 text-center h-full"
                  style={{ paddingBottom: "141%", position: "relative" }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">See all examples</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {RESUME_EXAMPLES.length}+ templates
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ── bottom stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* stat pills */}
          <div className="flex flex-wrap items-center gap-4 justify-center sm:justify-start">
            {[
              { value: `${RESUME_EXAMPLES.length}+`, label: "expert-written examples" },
              { value: `${SECTORS.length - 1}`, label: "industries covered" },
              { value: "89–97%", label: "ATS compatibility range" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span className="text-lg font-bold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link href="/dashboard/resume/examples">
            <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              Browse All Examples
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
