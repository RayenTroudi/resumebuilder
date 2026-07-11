"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search, X, ArrowLeft, Download, Edit3, CheckCircle,
  ChevronLeft, ChevronRight, Sparkles, LayoutTemplate, Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  TemplateClassic,
  TemplateSidebar,
  TemplateMinimal,
} from "@/features/resume/resume-templates";
import {
  RESUME_EXAMPLES,
  SECTORS,
  type ResumeExample,
} from "@/features/resume/resume-examples-data";
import { createResumeFromInput, type ResumeInput } from "@/lib/actions/resume";

/* Map an example's display data into a persistable resume payload. */
const TEMPLATE_MAP: Record<ResumeExample["template"], string> = {
  classic: "stockholm",
  sidebar: "vienna",
  minimal: "new-york",
};

function splitPeriod(period: string): { date: string; endDate: string } {
  const parts = (period || "").split(/\s*[–—-]\s*/);
  return { date: (parts[0] || "").trim(), endDate: (parts[1] || "").trim() };
}

function exampleToResumeInput(ex: ResumeExample): ResumeInput {
  const d = ex.data;
  const sections: ResumeInput["sections"] = [];

  if (d.summary)
    sections.push({ type: "summary", title: "Professional Summary", items: [{ title: "", description: d.summary }] });

  if (d.experience?.length)
    sections.push({
      type: "experience", title: "Experience",
      items: d.experience.map((e) => ({
        title: e.role, subtitle: e.company, ...splitPeriod(e.period),
        location: e.location, bullets: e.bullets,
      })),
    });

  if (d.education?.length)
    sections.push({
      type: "education", title: "Education",
      items: d.education.map((e) => ({
        title: e.degree, subtitle: e.school, ...splitPeriod(e.period), description: e.note ?? "",
      })),
    });

  if (d.skills?.length)
    sections.push({
      type: "skills", title: "Skills",
      items: d.skills.map((s) => ({ title: s.category, skills: s.items })),
    });

  if (d.certifications?.length)
    sections.push({
      type: "certifications", title: "Certifications",
      items: d.certifications.map((c) => ({ title: c })),
    });

  return {
    title: `${ex.role} Resume`,
    template: TEMPLATE_MAP[ex.template],
    accentColor: ex.accent,
    fullName: d.name,
    headline: d.title,
    email: d.email,
    phone: d.phone,
    location: d.location,
    website: d.website ?? d.linkedin ?? "",
    score: ex.atsScore,
    atsScore: ex.atsScore,
    sections,
  };
}

/* ─────────────────── mini thumbnail renderer ─────────────────── */

function ResumeThumbnail({
  example,
  onClick,
  onUse,
  creating,
}: {
  example: ResumeExample;
  onClick: () => void;
  onUse: () => void;
  creating: boolean;
}) {
  const atsColor =
    example.atsScore >= 95
      ? "#10b981"
      : example.atsScore >= 90
      ? "#3b82f6"
      : "#f59e0b";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.22 }}
      className="group relative cursor-pointer"
      onClick={onClick}
    >
      {/* paper shadow */}
      <div className="relative rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300 border border-border/40 bg-white">
        {/* scaled-down resume preview — we render at 640px wide then scale to fit */}
        <div className="relative bg-white overflow-hidden" style={{ paddingBottom: "141%" }}>
          <div
            className="absolute inset-0"
            style={{ transformOrigin: "top left" }}
          >
            <div style={{ width: "640px", height: "904px", transform: "scale(0.375)", transformOrigin: "top left" }}>
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
        <div className={cn(
          "absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-colors duration-300 rounded-lg flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100",
          creating && "opacity-100 bg-black/8"
        )}>
          <div className="flex gap-2">
            <button
              disabled={creating}
              onClick={(e) => { e.stopPropagation(); onUse(); }}
              className="px-4 py-2 rounded-full text-xs font-semibold text-white shadow-lg disabled:opacity-80 flex items-center"
              style={{ background: example.accent }}
            >
              {creating
                ? <><Loader2 className="w-3 h-3 inline mr-1.5 animate-spin" />Creating…</>
                : <><Edit3 className="w-3 h-3 inline mr-1.5" />Use Template</>}
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onClick(); }}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-white text-gray-900 shadow-lg"
            >
              <Search className="w-3 h-3 inline mr-1.5" />Preview
            </button>
          </div>
        </div>
      </div>

      {/* metadata below card */}
      <div className="mt-2.5 px-0.5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">{example.role}</p>
            <p className="text-xs text-muted-foreground">{example.sector}</p>
          </div>
          <div className="flex items-center gap-1 flex-shrink-0">
            <span
              className="text-xs font-bold tabular-nums"
              style={{ color: atsColor }}
            >
              {example.atsScore}%
            </span>
            <span className="text-[10px] text-muted-foreground">ATS</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────── full preview modal ─────────────────── */

function PreviewModal({
  example,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  onUse,
  creating,
}: {
  example: ResumeExample;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  onUse: () => void;
  creating: boolean;
}) {
  const atsColor =
    example.atsScore >= 95
      ? "#10b981"
      : example.atsScore >= 90
      ? "#3b82f6"
      : "#f59e0b";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        {/* backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="relative z-10 flex gap-6 items-start max-h-[92vh] px-4"
          onClick={e => e.stopPropagation()}
        >
          {/* nav prev */}
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className={cn(
              "w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all mt-32 flex-shrink-0",
              !hasPrev && "opacity-30 cursor-not-allowed"
            )}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* resume paper */}
          <div className="flex flex-col gap-4 items-center">
            {/* close button */}
            <div className="flex w-full items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">{example.role}</h2>
                <p className="text-sm text-white/60">{example.sector} · ATS Score:&nbsp;
                  <span className="font-semibold" style={{ color: atsColor }}>{example.atsScore}%</span>
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* the actual resume, readable size */}
            <div
              className="bg-white rounded-lg overflow-hidden shadow-2xl overflow-y-auto"
              style={{ width: "560px", maxHeight: "72vh" }}
            >
              <div style={{ width: "640px", transformOrigin: "top left", transform: "scale(0.875)" }}>
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

            {/* actions */}
            <div className="flex gap-3">
              <Button
                onClick={onUse}
                disabled={creating}
                className="gap-2 text-white border-0 shadow-lg"
                style={{ background: example.accent }}
              >
                {creating
                  ? <><Loader2 className="w-4 h-4 animate-spin" /> Creating…</>
                  : <><Edit3 className="w-4 h-4" /> Use This Template</>}
              </Button>
              <Button variant="outline" className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Download className="w-4 h-4" /> Download PDF
              </Button>
            </div>
          </div>

          {/* nav next */}
          <button
            onClick={onNext}
            disabled={!hasNext}
            className={cn(
              "w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all mt-32 flex-shrink-0",
              !hasNext && "opacity-30 cursor-not-allowed"
            )}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─────────────────── main page ─────────────────── */

export default function ResumeExamplesPage() {
  const router = useRouter();
  const [activeSector, setActiveSector] = useState("All");
  const [search, setSearch] = useState("");
  const [previewIdx, setPreviewIdx] = useState<number | null>(null);
  const [creatingId, setCreatingId] = useState<string | null>(null);
  const [useError, setUseError] = useState("");
  const [, startUse] = useTransition();

  const handleUse = (example: ResumeExample) => {
    if (creatingId) return;
    setUseError("");
    setCreatingId(example.id);
    startUse(async () => {
      const res = await createResumeFromInput(exampleToResumeInput(example));
      if (res.ok) router.push(`/dashboard/resume/${res.data.id}`);
      else {
        setUseError(res.error);
        setCreatingId(null);
      }
    });
  };

  const filtered = RESUME_EXAMPLES.filter(ex => {
    const matchSector = activeSector === "All" || ex.sector === activeSector;
    const matchSearch =
      !search ||
      ex.role.toLowerCase().includes(search.toLowerCase()) ||
      ex.sector.toLowerCase().includes(search.toLowerCase()) ||
      ex.data.title.toLowerCase().includes(search.toLowerCase());
    return matchSector && matchSearch;
  });

  const openPreview = (idx: number) => setPreviewIdx(idx);
  const closePreview = () => setPreviewIdx(null);

  const previewExample =
    previewIdx !== null ? filtered[previewIdx] : null;

  return (
    <div className="min-h-full flex flex-col">

      {/* ── page header ── */}
      <div className="border-b border-border/50">
        <div className="px-6 py-4">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/dashboard/resume">
              <button className="w-8 h-8 rounded-lg hover:bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </button>
            </Link>
            <div>
              <h1 className="text-xl font-bold">Resume Examples</h1>
              <p className="text-sm text-muted-foreground">
                {RESUME_EXAMPLES.length} ATS-optimized templates across {SECTORS.length - 1} industries
              </p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <div className="flex items-center gap-1.5 text-xs text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                <CheckCircle className="w-3.5 h-3.5" />
                All ATS-Verified
              </div>
            </div>
          </div>

          {/* search row */}
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by job title or industry…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-border/60 bg-card/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* sector filter pills – scrolls with page */}
      <div className="px-6 py-3 border-b border-border/40 flex items-center gap-2 overflow-x-auto scrollbar-hide">
        {SECTORS.map(sector => (
          <button
            key={sector}
            onClick={() => setActiveSector(sector)}
            className={cn(
              "whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition-all flex-shrink-0",
              activeSector === sector
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-card border border-border/60 text-muted-foreground hover:text-foreground hover:border-border"
            )}
          >
            {sector}
          </button>
        ))}
      </div>

      {/* ── info bar ── */}
      <div className="px-6 py-3 bg-primary/5 border-b border-primary/10 flex items-center gap-2 text-xs text-primary/80">
        <Sparkles className="w-3.5 h-3.5" />
        <span>All examples are written by career experts and scored 89%+ on major ATS systems including Workday, Taleo, Greenhouse, and iCIMS.</span>
      </div>

      {/* ── results count ── */}
      <div className="px-6 pt-5 pb-3 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span> example{filtered.length !== 1 ? "s" : ""}
          {activeSector !== "All" && <> in <span className="font-semibold text-foreground">{activeSector}</span></>}
        </p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <LayoutTemplate className="w-3.5 h-3.5" />
          3 template layouts
        </div>
      </div>

      {/* ── gallery grid ── */}
      <div className="flex-1 px-6 pb-10">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <div className="w-16 h-16 rounded-2xl bg-muted/40 flex items-center justify-center">
              <Search className="w-7 h-7 text-muted-foreground" />
            </div>
            <p className="text-base font-semibold">No examples found</p>
            <p className="text-sm text-muted-foreground">Try a different search or sector filter.</p>
            <Button variant="outline" size="sm" onClick={() => { setSearch(""); setActiveSector("All"); }}>
              Clear filters
            </Button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-8"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((example, i) => (
                <ResumeThumbnail
                  key={example.id}
                  example={example}
                  onClick={() => openPreview(i)}
                  onUse={() => handleUse(example)}
                  creating={creatingId === example.id}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* ── preview modal ── */}
      {previewExample !== null && previewIdx !== null && (
        <PreviewModal
          example={previewExample}
          onClose={closePreview}
          onPrev={() => setPreviewIdx(i => (i !== null && i > 0 ? i - 1 : i))}
          onNext={() => setPreviewIdx(i => (i !== null && i < filtered.length - 1 ? i + 1 : i))}
          hasPrev={previewIdx > 0}
          hasNext={previewIdx < filtered.length - 1}
          onUse={() => handleUse(previewExample)}
          creating={creatingId === previewExample.id}
        />
      )}

      {useError && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[60] text-sm text-white bg-destructive px-4 py-2 rounded-lg shadow-xl">
          {useError}
        </div>
      )}
    </div>
  );
}
