"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Download, Edit3, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/features/landing/site-footer";
import type { CoverLetterTemplate } from "@/features/cover-letter/cover-letter-data";

/* ─── large letter preview ─── */

function LargeCoverLetterPreview({ template }: { template: CoverLetterTemplate }) {
  const paragraphs = template.preview.body.split("\n\n");

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-2xl border border-border/20 w-full"
      style={{ background: template.bg }}
    >
      <div className="p-8 sm:p-12 flex flex-col gap-6 min-h-[560px]">
        {/* accent bar */}
        <div className="h-1.5 w-20 rounded-full" style={{ background: template.accent }} />

        {/* header */}
        <div className="flex flex-col gap-0.5">
          <p className="text-xl font-bold" style={{ color: template.accent }}>
            {template.preview.header}
          </p>
          <p className="text-sm text-gray-500">{template.preview.title}</p>
        </div>

        {/* divider */}
        <div className="h-px w-full" style={{ background: template.accent + "33" }} />

        {/* date + recipient */}
        <div className="text-sm text-gray-500 space-y-0.5">
          <p>May 2026</p>
          <p className="font-medium text-gray-700">Hiring Team — {template.preview.company}</p>
        </div>

        {/* body */}
        <div className="flex flex-col gap-4 text-sm leading-relaxed text-gray-700">
          {paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* sign-off */}
        <div className="mt-auto pt-4 text-sm text-gray-700 space-y-1">
          <p>Sincerely,</p>
          <p className="font-semibold" style={{ color: template.accent }}>
            {template.preview.header}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── small thumbnail card ─── */

function CoverLetterCard({ template, index }: { template: CoverLetterTemplate; index: number }) {
  const lines = template.preview.body.split("\n\n");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.06, 0.4) }}
    >
      <Link href={`/cover-letter-examples/${template.slug}`}>
        <div className="group cursor-pointer">
          <div className="relative rounded-xl overflow-hidden border border-border/30 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
            <div
              className="relative overflow-hidden"
              style={{ paddingBottom: "141%", background: template.bg }}
            >
              <div className="absolute inset-0 p-3 flex flex-col gap-2 overflow-hidden">
                <div className="h-1.5 w-12 rounded-full" style={{ background: template.accent }} />
                <div>
                  <p className="text-[7px] font-bold leading-tight" style={{ color: template.accent }}>
                    {template.preview.header}
                  </p>
                  <p className="text-[5.5px] text-gray-500 leading-tight">{template.preview.title}</p>
                </div>
                <div className="h-px w-full" style={{ background: template.accent + "33" }} />
                <div className="flex-1 overflow-hidden space-y-1.5">
                  {lines.slice(0, 3).map((para, i) => (
                    <div key={i} className="space-y-0.5">
                      {para.split(" ").reduce<string[][]>((acc, word, wi) => {
                        const rowIdx = Math.floor(wi / 7);
                        if (!acc[rowIdx]) acc[rowIdx] = [];
                        acc[rowIdx].push(word);
                        return acc;
                      }, []).map((_, ri) => (
                        <div
                          key={ri}
                          className="h-[3px] rounded-full bg-gray-300"
                          style={{ width: `${65 + ((i * 13 + ri * 7) % 30)}%` }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                <div className="space-y-0.5">
                  <div className="h-[3px] w-14 rounded-full bg-gray-300" />
                  <div className="h-[3px] w-10 rounded-full" style={{ background: template.accent + "66" }} />
                </div>
              </div>
            </div>

            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-center pb-4"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)" }}
            >
              <button
                className="px-4 py-1.5 rounded-full text-xs font-semibold text-white shadow-lg"
                style={{ background: template.accent }}
              >
                Use Template
              </button>
            </div>

            <div
              className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full border-2 border-white shadow-sm"
              style={{ background: template.accent }}
            />
          </div>
          <div className="mt-2.5 px-0.5">
            <p className="text-sm font-semibold text-foreground">{template.name}</p>
            <p className="text-xs text-muted-foreground">{template.subtitle}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── info panel ─── */

function InfoPanel({ template }: { template: CoverLetterTemplate }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold text-white"
            style={{ background: template.accent }}
          >
            Cover Letter
          </span>
          <span className="text-xs text-muted-foreground border border-border/60 px-2.5 py-1 rounded-full">
            {template.subtitle}
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          {template.name} Cover Letter Template
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          A professionally written {template.name.toLowerCase()} cover letter template crafted to
          make hiring managers keep reading. Customize it instantly with CareerForge AI.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { value: "AI", label: "Personalized" },
          { value: "< 2 min", label: "To generate" },
          { value: "5", label: "Style variants" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border/50 bg-card/60 p-4 text-center">
            <p className="text-xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-purple-500/5 border border-purple-500/15 p-4 flex items-start gap-3">
        <Sparkles className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
        <div className="text-sm">
          <p className="font-semibold text-foreground mb-1">Written by career experts</p>
          <p className="text-muted-foreground text-xs leading-relaxed">
            Pair this cover letter with a matching resume template and let CareerForge AI tailor
            both to your target role in minutes.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span>4.8 · used by 900+ job seekers</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/signup" className="flex-1">
          <Button
            size="lg"
            className="w-full gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-indigo-500/20"
          >
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

/* ─── more templates grid ─── */

function MoreTemplatesGrid({ templates }: { templates: CoverLetterTemplate[] }) {
  return (
    <div className="border-t border-border/40 bg-muted/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">More Cover Letter Templates</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Browse all {templates.length + 1} styles and find your perfect match
            </p>
          </div>
          <Link
            href="/#cover-letter-templates"
            className="text-sm text-primary hover:underline flex items-center gap-1"
          >
            View all <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {templates.map((tpl, i) => (
            <CoverLetterCard key={tpl.id} template={tpl} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── bottom CTA ─── */

function BottomCTA({ name }: { name: string }) {
  return (
    <div className="py-16 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border-t border-indigo-500/10">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-3">Create your {name.toLowerCase()} cover letter today</h2>
        <p className="text-muted-foreground mb-8">
          Start from this template and let our AI tailor it to your experience and target job.
        </p>
        <Link href="/signup">
          <Button
            size="lg"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0 shadow-xl shadow-indigo-500/20 gap-2"
          >
            Create my cover letter — it's free
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

/* ─── exported page view ─── */

export function CoverLetterDetailView({
  template,
  others,
}: {
  template: CoverLetterTemplate;
  others: CoverLetterTemplate[];
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* breadcrumb */}
        <div className="border-b border-border/40 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/#cover-letter-templates"
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Cover Letter Examples
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{template.name}</span>
          </div>
        </div>

        {/* hero: preview + info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:sticky lg:top-24"
            >
              <LargeCoverLetterPreview template={template} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <InfoPanel template={template} />
            </motion.div>
          </div>
        </div>

        <MoreTemplatesGrid templates={others} />
        <BottomCTA name={template.name} />
      </main>
      <SiteFooter />
    </div>
  );
}
