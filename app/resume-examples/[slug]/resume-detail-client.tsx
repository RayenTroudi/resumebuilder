"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, Download, Edit3, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/features/landing/site-footer";
import {
  TemplateClassic,
  TemplateSidebar,
  TemplateMinimal,
} from "@/features/resume/resume-templates";
import type { ResumeExample } from "@/features/resume/resume-examples-data";

/* ─── helpers ─── */

function atsColor(score: number) {
  return score >= 95 ? "#10b981" : score >= 90 ? "#3b82f6" : "#f59e0b";
}

function idToSlug(id: string, slugMap: Record<string, string>): string {
  return Object.entries(slugMap).find(([, v]) => v === id)?.[0] ?? id;
}

/* ─── resume renderer ─── */

function ResumeRenderer({ example }: { example: ResumeExample }) {
  return (
    <>
      {example.template === "classic" && <TemplateClassic data={example.data} accent={example.accent} />}
      {example.template === "sidebar" && <TemplateSidebar data={example.data} accent={example.accent} />}
      {example.template === "minimal" && <TemplateMinimal data={example.data} accent={example.accent} />}
    </>
  );
}

/* ─── responsive large preview ─── */

export function LargeResumePreview({ example }: { example: ResumeExample }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    function measure() {
      if (containerRef.current) {
        setScale(containerRef.current.offsetWidth / 640);
      }
    }
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-border/20 w-full">
      <div className="relative overflow-hidden" style={{ paddingBottom: `${(904 / 640) * 100}%` }}>
        <div className="absolute inset-0">
          <div
            className="absolute top-0 left-0 origin-top-left"
            style={{ width: 640, height: 904, transform: `scale(${scale})` }}
          >
            <ResumeRenderer example={example} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── small thumbnail card ─── */

function ExampleCard({
  example,
  index,
  slugMap,
}: {
  example: ResumeExample;
  index: number;
  slugMap: Record<string, string>;
}) {
  const color = atsColor(example.atsScore);
  const slug = idToSlug(example.id, slugMap);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.06, 0.4) }}
    >
      <Link href={`/resume-examples/${slug}`}>
        <div className="group cursor-pointer">
          <div className="relative rounded-xl overflow-hidden border border-border/30 shadow-md group-hover:shadow-xl transition-all duration-300 bg-white group-hover:-translate-y-1">
            <div className="relative bg-white overflow-hidden" style={{ paddingBottom: "141%" }}>
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 origin-top-left" style={{ width: 640, transform: "scale(0.3125)" }}>
                  <div style={{ width: 640, height: 904 }}>
                    <ResumeRenderer example={example} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-center pb-4"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)" }}
            >
              <button className="px-4 py-1.5 rounded-full text-xs font-semibold text-white shadow-lg" style={{ background: example.accent }}>
                Use Template
              </button>
            </div>
            <div
              className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold text-white shadow-sm"
              style={{ background: color }}
            >
              <CheckCircle className="w-2.5 h-2.5" />
              {example.atsScore}%
            </div>
          </div>
          <div className="mt-2.5 px-0.5">
            <p className="text-sm font-semibold text-foreground truncate">{example.role}</p>
            <p className="text-xs text-muted-foreground">{example.sector}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── info panel ─── */

function InfoPanel({ example }: { example: ResumeExample }) {
  const color = atsColor(example.atsScore);
  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold text-white" style={{ background: color }}>
            <CheckCircle className="w-3 h-3" />
            ATS Score: {example.atsScore}%
          </span>
          <span className="text-xs text-muted-foreground border border-border/60 px-2.5 py-1 rounded-full">
            {example.sector}
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          {example.role} Resume Example
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          A professionally written {example.role.toLowerCase()} resume template that passes ATS filters and gets noticed by recruiters. Customize it instantly with CareerForge AI.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { value: `${example.atsScore}%`, label: "ATS Score" },
          { value: "< 2 min", label: "To customize" },
          { value: "3", label: "Layouts" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border/50 bg-card/60 p-4 text-center">
            <p className="text-xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/15 p-4 flex items-start gap-3">
        <Sparkles className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
        <div className="text-sm">
          <p className="font-semibold text-foreground mb-1">Written by career experts</p>
          <p className="text-muted-foreground text-xs leading-relaxed">
            Crafted by certified resume writers and verified to score {example.atsScore}%+ across Workday, Taleo, Greenhouse, and iCIMS.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
        </div>
        <span>4.9 · used by 1,200+ job seekers</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/signup" className="flex-1">
          <Button size="lg" className="w-full gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-indigo-500/20">
            <Edit3 className="w-4 h-4" />
            Use This Template
          </Button>
        </Link>
        <Button size="lg" variant="outline" className="gap-2" asChild>
          <Link href="/signup">
            <Download className="w-4 h-4" />
            Download PDF
          </Link>
        </Button>
      </div>
      <p className="text-xs text-muted-foreground text-center">No credit card required · Free plan available</p>
    </div>
  );
}

/* ─── more examples grid ─── */

function MoreExamplesGrid({
  examples,
  sector,
  title,
  slugMap,
}: {
  examples: ResumeExample[];
  sector: string;
  title: string;
  slugMap: Record<string, string>;
}) {
  return (
    <div className="border-t border-border/40 bg-muted/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            {sector && (
              <p className="text-sm text-muted-foreground mt-1">Showing {sector} resumes first</p>
            )}
          </div>
          <Link href="/resume-examples" className="text-sm text-primary hover:underline flex items-center gap-1">
            View all <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {examples.map((ex, i) => (
            <ExampleCard key={ex.id} example={ex} index={i} slugMap={slugMap} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── bottom CTA ─── */

function BottomCTA({ role }: { role: string }) {
  return (
    <div className="py-16 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border-t border-indigo-500/10">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-3">Build your {role} resume today</h2>
        <p className="text-muted-foreground mb-8">
          Start from this template and let our AI tailor it to your experience and target job.
        </p>
        <Link href="/signup">
          <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0 shadow-xl shadow-indigo-500/20 gap-2">
            Create my resume — it's free
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

/* ─── exported page views ─── */

export function ExampleDetailView({
  example,
  sectorHref,
  moreExamples,
  slugMap,
}: {
  example: ResumeExample;
  sectorHref: string;
  moreExamples: ResumeExample[];
  slugMap: Record<string, string>;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <div className="border-b border-border/40 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/resume-examples" className="hover:text-foreground transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              Resume Examples
            </Link>
            <span>/</span>
            <Link href={sectorHref} className="hover:text-foreground transition-colors">
              {example.sector}
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{example.role}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="lg:sticky lg:top-24">
              <LargeResumePreview example={example} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <InfoPanel example={example} />
            </motion.div>
          </div>
        </div>

        <MoreExamplesGrid
          examples={moreExamples}
          sector={example.sector}
          title="More Resume Templates"
          slugMap={slugMap}
        />
        <BottomCTA role={example.role} />
      </main>
      <SiteFooter />
    </div>
  );
}

export function SectorDetailView({
  sector,
  featured,
  rest,
  slugMap,
}: {
  sector: string;
  featured: ResumeExample;
  rest: ResumeExample[];
  slugMap: Record<string, string>;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <div className="border-b border-border/40 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/resume-examples" className="hover:text-foreground transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              Resume Examples
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{sector}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              {sector} resume examples
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-3">
              {sector} Resume Examples
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Browse {rest.length + 1} expert-written {sector.toLowerCase()} resume templates, each ATS-verified and ready to customize in minutes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="lg:sticky lg:top-24">
              <LargeResumePreview example={featured} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <InfoPanel example={featured} />
            </motion.div>
          </div>
        </div>

        {rest.length > 0 && (
          <MoreExamplesGrid
            examples={rest}
            sector={sector}
            title={`More ${sector} Resume Examples`}
            slugMap={slugMap}
          />
        )}
        <BottomCTA role={sector.toLowerCase()} />
      </main>
      <SiteFooter />
    </div>
  );
}
