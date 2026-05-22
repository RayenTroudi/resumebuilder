"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COVER_LETTER_TEMPLATES } from "@/features/cover-letter/cover-letter-data";
import type { CoverLetterTemplate } from "@/features/cover-letter/cover-letter-data";

function CoverLetterCard({ template, index }: { template: CoverLetterTemplate; index: number }) {
  const lines = template.preview.body.split("\n\n");

  return (
    <Link href={`/cover-letter-examples/${template.slug}`}>
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.08, 0.4) }}
      className="group relative flex-shrink-0 w-[200px] cursor-pointer"
    >
      <div className="relative rounded-xl overflow-hidden border border-border/30 shadow-md group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1.5">
        {/* paper preview */}
        <div className="relative overflow-hidden" style={{ paddingBottom: "141%", background: template.bg }}>
          <div className="absolute inset-0 p-3 flex flex-col gap-2 overflow-hidden">
            {/* accent bar */}
            <div className="h-1.5 w-12 rounded-full" style={{ background: template.accent }} />
            {/* name */}
            <div>
              <p className="text-[7px] font-bold leading-tight" style={{ color: template.accent }}>
                {template.preview.header}
              </p>
              <p className="text-[5.5px] text-gray-500 leading-tight">{template.preview.title}</p>
            </div>
            {/* divider */}
            <div className="h-px w-full" style={{ background: template.accent + "33" }} />
            {/* body text lines */}
            <div className="flex-1 overflow-hidden space-y-1.5">
              {lines.slice(0, 3).map((para, i) => (
                <div key={i} className="space-y-0.5">
                  {para.split(" ").reduce<string[][]>((acc, word, wi) => {
                    const rowIdx = Math.floor(wi / 7);
                    if (!acc[rowIdx]) acc[rowIdx] = [];
                    acc[rowIdx].push(word);
                    return acc;
                  }, []).map((_, ri) => (
                    <div key={ri} className="h-[3px] rounded-full bg-gray-300" style={{ width: `${65 + Math.random() * 30}%` }} />
                  ))}
                </div>
              ))}
            </div>
            {/* closing line */}
            <div className="space-y-0.5">
              <div className="h-[3px] w-14 rounded-full bg-gray-300" />
              <div className="h-[3px] w-10 rounded-full" style={{ background: template.accent + "66" }} />
            </div>
          </div>
        </div>

        {/* hover overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)" }}>
          <button
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-white shadow-lg"
            style={{ background: template.accent }}
          >
            Use Template
          </button>
        </div>

        {/* color chip top-right */}
        <div
          className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full border-2 border-white shadow-sm"
          style={{ background: template.accent }}
        />
      </div>

      <div className="mt-2.5 px-0.5">
        <p className="text-sm font-semibold text-foreground">{template.name}</p>
        <p className="text-xs text-muted-foreground">{template.subtitle}</p>
      </div>
    </motion.div>
    </Link>
  );
}

export function CoverLetterShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="cover-letter-templates" ref={sectionRef} className="py-24 sm:py-32 overflow-hidden bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            AI-powered cover letters
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Cover letter templates that
            <br />
            <span className="gradient-text">open doors</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pair your resume with a compelling cover letter. Choose from{" "}
            {COVER_LETTER_TEMPLATES.length}+ designs — each crafted to make hiring managers keep reading.
          </p>
        </motion.div>

        {/* cards row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex gap-5 justify-start sm:justify-center flex-nowrap overflow-x-auto scrollbar-hide px-4 sm:px-2 py-4"
        >
          {COVER_LETTER_TEMPLATES.map((tpl, i) => (
            <CoverLetterCard key={tpl.id} template={tpl} index={i} />
          ))}
        </motion.div>

        {/* bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div className="flex flex-wrap items-center gap-4 justify-center sm:justify-start">
            {[
              { value: `${COVER_LETTER_TEMPLATES.length}+`, label: "cover letter designs" },
              { value: "AI", label: "powered personalization" },
              { value: "2 min", label: "to generate" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span className="text-lg font-bold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
          <Link href="/signup">
            <Button className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-indigo-500/20">
              Create Cover Letter
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
