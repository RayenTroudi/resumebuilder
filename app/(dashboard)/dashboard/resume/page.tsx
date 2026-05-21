"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import Link from "next/link";
import {
  FileText, Sparkles, Download, Eye, Target,
  Plus, ChevronDown, ChevronRight, Wand2, CheckCircle2,
  AlertCircle, Zap, Palette, Trash2, GripVertical,
  User, Briefcase, GraduationCap, Code2, FolderOpen,
  Award, Check, X, ArrowLeft, Settings2,
  LayoutTemplate, Bot, BarChart3, MapPin, Calendar, BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { mockResumes } from "@/data/mock";
import { cn, getScoreColor, getScoreBg } from "@/lib/utils";

/* ─── data ─── */

const TEMPLATES = [
  { id: "stockholm", name: "Stockholm", accent: "#2563eb", layout: "single",  preview: "classic"  },
  { id: "new-york",  name: "New York",  accent: "#0f172a", layout: "single",  preview: "minimal"  },
  { id: "vienna",    name: "Vienna",    accent: "#7c3aed", layout: "sidebar", preview: "sidebar"  },
  { id: "sydney",    name: "Sydney",    accent: "#059669", layout: "single",  preview: "bold"     },
  { id: "london",    name: "London",    accent: "#dc2626", layout: "sidebar", preview: "compact"  },
  { id: "toronto",   name: "Toronto",   accent: "#d97706", layout: "single",  preview: "modern"   },
];

const SECTION_ICONS: Record<string, React.ReactNode> = {
  summary:       <User          className="w-3.5 h-3.5" />,
  experience:    <Briefcase     className="w-3.5 h-3.5" />,
  education:     <GraduationCap className="w-3.5 h-3.5" />,
  skills:        <Code2         className="w-3.5 h-3.5" />,
  projects:      <FolderOpen    className="w-3.5 h-3.5" />,
  certifications:<Award         className="w-3.5 h-3.5" />,
};

const AI_SUGGESTIONS = [
  { type: "impact",  text: "Add quantified metrics to \"Led development of payment SDK\"", priority: "high"   },
  { type: "keyword", text: "Missing keyword: \"distributed systems\" (found in JD)",       priority: "high"   },
  { type: "improve", text: "Summary reads passive — make it result-oriented",               priority: "medium" },
  { type: "format",  text: "Group skills by category for better ATS parsing",               priority: "low"    },
];

const ATS_KEYWORDS = {
  found:   ["TypeScript", "React", "Node.js", "AWS", "PostgreSQL", "Docker", "Agile", "GraphQL"],
  missing: ["distributed systems", "CI/CD", "microservices", "Kubernetes"],
};

const SCORE_BREAKDOWN = [
  { label: "Content Quality",    score: 87, color: "#6366f1" },
  { label: "ATS Compatibility",  score: 92, color: "#10b981" },
  { label: "Format & Structure", score: 95, color: "#0ea5e9" },
  { label: "Keyword Match",      score: 78, color: "#f59e0b" },
  { label: "Completeness",       score: 90, color: "#a855f7" },
];

/* ─── TemplateThumb ─── */

function TemplateThumb({ tpl, active, onClick }: {
  tpl: typeof TEMPLATES[0]; active: boolean; onClick: () => void;
}) {
  return (
    <button onClick={onClick} className="relative group flex flex-col gap-1.5 focus:outline-none">
      <div className={cn(
        "w-[56px] h-[72px] rounded-md border-2 overflow-hidden transition-all duration-200 bg-white flex flex-col",
        active
          ? "border-primary shadow-lg shadow-primary/20 scale-105"
          : "border-transparent opacity-60 hover:opacity-90 hover:border-border",
      )}>
        <div className="h-[22px] w-full flex-shrink-0" style={{ background: tpl.accent }} />
        <div className="flex-1 px-1.5 py-1 space-y-[3px]">
          {[100, 70, 85, 55, 90, 60].map((w, i) => (
            <div key={i} className="h-[3px] rounded-full bg-gray-200" style={{ width: `${w}%` }} />
          ))}
        </div>
      </div>
      <span className={cn("text-[10px] text-center font-medium leading-none transition-colors",
        active ? "text-foreground" : "text-muted-foreground")}>
        {tpl.name}
      </span>
      {active && (
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
          <Check className="w-2.5 h-2.5 text-white" />
        </span>
      )}
    </button>
  );
}

/* ─── SectionBlock ─── */

function SectionBlock({ section, expanded, onToggle }: {
  section: typeof mockResumes[0]["sections"][0]; expanded: boolean; onToggle: () => void;
}) {
  return (
    <div className="rounded-xl border border-border/60 overflow-hidden bg-card/40">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-2.5 px-3 py-2.5 hover:bg-accent/30 transition-colors text-left"
      >
        <GripVertical className="w-3.5 h-3.5 text-muted-foreground/30 flex-shrink-0" />
        <span className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
          {SECTION_ICONS[section.type] ?? <FileText className="w-3 h-3" />}
        </span>
        <span className="text-xs font-semibold flex-1">{section.title}</span>
        <span className="text-[10px] text-muted-foreground">{section.items.length}</span>
        {expanded
          ? <ChevronDown  className="w-3.5 h-3.5 text-muted-foreground" />
          : <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />}
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" } as Transition}
            className="overflow-hidden"
          >
            <div className="px-3 pb-3 pt-1 space-y-2 border-t border-border/40">
              {section.type === "summary" && section.items[0] && (
                <Textarea
                  defaultValue={section.items[0].description ?? ""}
                  className="text-xs resize-none h-20 bg-background/60"
                  placeholder="Write a professional summary…"
                />
              )}
              {section.type === "skills" && section.items.map(item => (
                <div key={item.id} className="bg-background/60 rounded-lg p-2 border border-border/40">
                  <p className="text-[10px] font-semibold text-muted-foreground mb-1.5">{item.title}</p>
                  <div className="flex flex-wrap gap-1">
                    {item.skills?.map(s => (
                      <span key={s} className="text-[10px] px-1.5 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">{s}</span>
                    ))}
                    <button className="text-[10px] px-1.5 py-0.5 rounded-md border border-dashed border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                      + add
                    </button>
                  </div>
                </div>
              ))}
              {(section.type === "experience" || section.type === "education" || section.type === "projects") &&
                section.items.slice(0, 2).map(item => (
                  <div key={item.id} className="bg-background/60 rounded-lg p-2.5 border border-border/40 space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <Input
                          defaultValue={item.title}
                          className="h-6 text-xs font-semibold bg-transparent border-0 border-b border-border/40 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
                        />
                        {item.subtitle && (
                          <Input
                            defaultValue={item.subtitle}
                            className="h-5 text-[11px] text-primary bg-transparent border-0 rounded-none px-0 focus-visible:ring-0 mt-0.5"
                          />
                        )}
                      </div>
                      <button className="text-muted-foreground/40 hover:text-destructive transition-colors flex-shrink-0 mt-1">
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                    {(item.date || item.location) && (
                      <div className="flex items-center gap-2 text-[10px] text-muted-foreground flex-wrap">
                        {item.date && <span className="flex items-center gap-1"><Calendar className="w-2.5 h-2.5" />{item.date} – {item.endDate}</span>}
                        {item.location && <span className="flex items-center gap-1"><MapPin className="w-2.5 h-2.5" />{item.location}</span>}
                      </div>
                    )}
                    {item.bullets && (
                      <div className="space-y-1 mt-1">
                        {item.bullets.slice(0, 2).map((b, i) => (
                          <div key={i} className="flex gap-1.5 items-start">
                            <span className="text-primary text-[10px] mt-0.5 flex-shrink-0">•</span>
                            <Input
                              defaultValue={b}
                              className="h-5 text-[11px] bg-transparent border-0 border-b border-border/30 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    {item.description && (
                      <Input
                        defaultValue={item.description}
                        className="h-5 text-[11px] bg-transparent border-0 border-b border-border/30 rounded-none px-0 focus-visible:ring-0"
                      />
                    )}
                  </div>
                ))}
              <button className="w-full flex items-center justify-center gap-1.5 py-1.5 text-[11px] text-primary/70 hover:text-primary border border-dashed border-primary/20 hover:border-primary/40 rounded-lg transition-colors">
                <Plus className="w-3 h-3" /> Add {section.title} entry
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Resume preview templates ─── */

function ResumePreviewClassic({ accent }: { accent: string }) {
  const resume = mockResumes[0];
  return (
    <div className="bg-white text-gray-900 h-full" style={{ fontFamily: "'Georgia', serif" }}>
      <div className="px-8 pt-8 pb-5 border-b-2" style={{ borderColor: accent }}>
        <h1 className="text-[24px] font-bold tracking-tight" style={{ color: "#111", fontFamily: "Georgia, serif" }}>Alex Rivera</h1>
        <p className="text-sm font-medium mt-0.5" style={{ color: accent }}>Senior Full-Stack Engineer</p>
        <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-2 text-[11px] text-gray-500">
          <span>alex@example.com</span><span>San Francisco, CA</span>
          <span>github.com/alex</span><span>linkedin.com/in/alexrivera</span>
        </div>
      </div>
      <div className="px-8 py-5 space-y-4">
        <section>
          <h2 className="text-[10px] font-bold uppercase tracking-[0.15em] mb-2" style={{ color: accent }}>Professional Summary</h2>
          <p className="text-[11.5px] text-gray-600 leading-relaxed">
            Passionate full-stack engineer with 5+ years building scalable web applications. Expertise in React, Node.js, and cloud architecture. Led teams of 3–8 engineers, delivering projects 15% under budget.
          </p>
        </section>
        <section>
          <h2 className="text-[10px] font-bold uppercase tracking-[0.15em] mb-3" style={{ color: accent }}>Experience</h2>
          <div className="space-y-3">
            {resume.sections.find(s => s.type === "experience")?.items.map(exp => (
              <div key={exp.id}>
                <div className="flex items-baseline justify-between gap-2">
                  <div>
                    <p className="text-[12px] font-bold text-gray-900">{exp.title}</p>
                    <p className="text-[11px]" style={{ color: accent }}>{exp.subtitle} · {exp.location}</p>
                  </div>
                  <span className="text-[10px] text-gray-400 whitespace-nowrap flex-shrink-0">{exp.date} – {exp.endDate}</span>
                </div>
                {exp.bullets && (
                  <ul className="mt-1.5 space-y-0.5">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="text-[11px] text-gray-600 flex gap-2 items-start">
                        <span className="flex-shrink-0 mt-1 w-1 h-1 rounded-full" style={{ background: accent }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-[10px] font-bold uppercase tracking-[0.15em] mb-2.5" style={{ color: accent }}>Skills</h2>
          <div className="space-y-1.5">
            {resume.sections.find(s => s.type === "skills")?.items.map(sg => (
              <div key={sg.id} className="flex gap-2 text-[11px]">
                <span className="font-semibold text-gray-700 w-20 shrink-0">{sg.title}:</span>
                <span className="text-gray-500">{sg.skills?.join(", ")}</span>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-[10px] font-bold uppercase tracking-[0.15em] mb-2.5" style={{ color: accent }}>Education</h2>
          {resume.sections.find(s => s.type === "education")?.items.map(edu => (
            <div key={edu.id} className="flex items-baseline justify-between gap-2">
              <div>
                <p className="text-[12px] font-bold text-gray-900">{edu.title}</p>
                <p className="text-[11px]" style={{ color: accent }}>{edu.subtitle} · {edu.location}</p>
                {edu.description && <p className="text-[10.5px] text-gray-400 mt-0.5">{edu.description}</p>}
              </div>
              <span className="text-[10px] text-gray-400 whitespace-nowrap flex-shrink-0">{edu.date} – {edu.endDate}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

function ResumePreviewSidebar({ accent }: { accent: string }) {
  const resume = mockResumes[0];
  return (
    <div className="bg-white text-gray-900 h-full flex" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>
      <div className="w-[38%] flex-shrink-0 px-4 py-7 space-y-4" style={{ background: accent }}>
        <div>
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
            <span className="text-white font-bold">AR</span>
          </div>
          <h1 className="text-[16px] font-bold text-white leading-tight">Alex Rivera</h1>
          <p className="text-[10px] text-white/70 mt-0.5">Senior Full-Stack Engineer</p>
        </div>
        <div className="space-y-1 text-[10px] text-white/80">
          <div>alex@example.com</div><div>San Francisco, CA</div><div>github.com/alex</div>
        </div>
        <div>
          <h2 className="text-[9px] font-bold uppercase tracking-widest text-white/50 mb-2">Skills</h2>
          <div className="space-y-2">
            {resume.sections.find(s => s.type === "skills")?.items.slice(0, 3).map(sg => (
              <div key={sg.id}>
                <p className="text-[10px] font-semibold text-white/80 mb-1">{sg.title}</p>
                <div className="flex flex-wrap gap-1">
                  {sg.skills?.slice(0, 3).map(s => (
                    <span key={s} className="text-[9px] px-1.5 py-0.5 rounded bg-white/15 text-white">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 px-5 py-7 space-y-4 min-w-0">
        <section>
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Summary</h2>
          <p className="text-[11px] text-gray-600 leading-relaxed">
            Passionate full-stack engineer with 5+ years building scalable web applications.
          </p>
        </section>
        <section>
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Experience</h2>
          {resume.sections.find(s => s.type === "experience")?.items.map(exp => (
            <div key={exp.id} className="mb-3">
              <div className="flex justify-between items-baseline gap-2">
                <p className="text-[11px] font-bold text-gray-900 truncate">{exp.title}</p>
                <span className="text-[10px] text-gray-400 whitespace-nowrap flex-shrink-0">{exp.date}–{exp.endDate}</span>
              </div>
              <p className="text-[10px] font-medium mb-1" style={{ color: accent }}>{exp.subtitle}</p>
              {exp.bullets?.slice(0, 2).map((b, i) => (
                <div key={i} className="flex gap-1.5 items-start mb-0.5">
                  <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: accent }} />
                  <span className="text-[10px] text-gray-600">{b}</span>
                </div>
              ))}
            </div>
          ))}
        </section>
        <section>
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Education</h2>
          {resume.sections.find(s => s.type === "education")?.items.map(edu => (
            <div key={edu.id}>
              <p className="text-[11px] font-bold text-gray-900">{edu.title}</p>
              <p className="text-[10px]" style={{ color: accent }}>{edu.subtitle}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

function ResumePreviewMinimal({ accent }: { accent: string }) {
  const resume = mockResumes[0];
  return (
    <div className="bg-white text-gray-900 h-full px-8 py-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="mb-6">
        <h1 className="text-[26px] font-bold tracking-tight text-gray-950">Alex Rivera</h1>
        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
          <span className="text-sm font-medium text-gray-500">Senior Full-Stack Engineer</span>
          <span className="text-sm text-gray-400">· San Francisco · alex@example.com</span>
        </div>
        <div className="mt-3 h-[2px] w-12" style={{ background: accent }} />
      </div>
      <div className="space-y-5">
        <section>
          <p className="text-[11.5px] text-gray-600 leading-relaxed">
            Passionate full-stack engineer with 5+ years building scalable web applications. Expertise in React, Node.js, and cloud architecture.
          </p>
        </section>
        <section>
          <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-3">Experience</h2>
          {resume.sections.find(s => s.type === "experience")?.items.map(exp => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <p className="text-[12px] font-semibold text-gray-900">{exp.title}</p>
                  <p className="text-[11px] text-gray-500">{exp.subtitle} · {exp.location}</p>
                </div>
                <span className="text-[10px] text-gray-400 whitespace-nowrap flex-shrink-0">{exp.date}–{exp.endDate}</span>
              </div>
              {exp.bullets && (
                <ul className="mt-1.5 space-y-0.5 pl-3 border-l-2" style={{ borderColor: `${accent}40` }}>
                  {exp.bullets.slice(0, 3).map((b, i) => (
                    <li key={i} className="text-[11px] text-gray-600">{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
        <section>
          <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-2.5">Skills</h2>
          <div className="flex flex-wrap gap-1.5">
            {["TypeScript", "React", "Node.js", "AWS", "PostgreSQL", "Docker", "Go", "Kubernetes"].map(s => (
              <span key={s} className="text-[10.5px] px-2 py-0.5 rounded-full border border-gray-200 text-gray-600">{s}</span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function ResumePreview({ templateId }: { templateId: string }) {
  const tpl = TEMPLATES.find(t => t.id === templateId) ?? TEMPLATES[0];
  if (tpl.layout === "sidebar") return <ResumePreviewSidebar accent={tpl.accent} />;
  if (tpl.preview === "minimal")  return <ResumePreviewMinimal accent={tpl.accent} />;
  return <ResumePreviewClassic accent={tpl.accent} />;
}

/* ─── Score Panel ─── */

function ScorePanel({ accent, score, atsScore }: { accent: string; score: number; atsScore: number }) {
  return (
    <div className="p-4 space-y-5">
      {/* circular score */}
      <div className="flex flex-col items-center py-3">
        <div className="relative w-24 h-24">
          <svg className="w-24 h-24 -rotate-90" viewBox="0 0 96 96">
            <circle cx="48" cy="48" r="40" fill="none" stroke="currentColor" strokeWidth="7" className="text-muted/30" />
            <circle
              cx="48" cy="48" r="40" fill="none"
              stroke={accent} strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 40}`}
              strokeDashoffset={`${2 * Math.PI * 40 * (1 - score / 100)}`}
              className="transition-all duration-700"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={cn("text-2xl font-bold tabular-nums", getScoreColor(score))}>{score}</span>
            <span className="text-[10px] text-muted-foreground leading-none">/ 100</span>
          </div>
        </div>
        <p className="text-sm font-semibold mt-2">Resume Score</p>
        <p className="text-xs text-muted-foreground text-center mt-1 max-w-[200px] leading-relaxed">
          Great! A few improvements can push you above 90.
        </p>
      </div>

      {/* breakdown bars */}
      <div className="space-y-3">
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Score Breakdown</p>
        {SCORE_BREAKDOWN.map(s => (
          <div key={s.label}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs text-foreground/80">{s.label}</span>
              <span className="text-xs font-bold tabular-nums">{s.score}%</span>
            </div>
            <div className="h-2 rounded-full bg-muted/60 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${s.score}%` }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.1 } as Transition}
                className="h-full rounded-full"
                style={{ background: s.color }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ATS quick stat */}
      <div className="flex items-center gap-3 p-3 rounded-xl border border-border/50 bg-card/40">
        <div className="relative w-12 h-12 flex-shrink-0">
          <svg className="w-12 h-12 -rotate-90" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="4" className="text-muted/30" />
            <circle cx="24" cy="24" r="20" fill="none" stroke="#10b981" strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 20}`}
              strokeDashoffset={`${2 * Math.PI * 20 * (1 - atsScore / 100)}`}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[13px] font-bold text-emerald-500 tabular-nums">{atsScore}</span>
        </div>
        <div>
          <p className="text-xs font-semibold">ATS Score</p>
          <p className="text-[11px] text-muted-foreground">Excellent compatibility</p>
        </div>
      </div>
    </div>
  );
}

/* ─── ATS Panel ─── */

function AtsPanel({ accent, atsScore, jobDesc, setJobDesc, analyzing, onAnalyze }: {
  accent: string; atsScore: number; jobDesc: string;
  setJobDesc: (v: string) => void; analyzing: boolean; onAnalyze: () => void;
}) {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3 p-3 rounded-xl border border-border/50 bg-card/40">
        <div className="relative w-12 h-12 flex-shrink-0">
          <svg className="w-12 h-12 -rotate-90" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="4" className="text-muted/30" />
            <circle cx="24" cy="24" r="20" fill="none" stroke="#10b981" strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 20}`}
              strokeDashoffset={`${2 * Math.PI * 20 * (1 - atsScore / 100)}`}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[13px] font-bold text-emerald-500 tabular-nums">{atsScore}</span>
        </div>
        <div>
          <p className="text-xs font-semibold">ATS Score</p>
          <p className="text-[11px] text-muted-foreground">Excellent compatibility</p>
        </div>
      </div>
      <div>
        <p className="text-[11px] font-semibold text-emerald-500 mb-2 flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" /> Found ({ATS_KEYWORDS.found.length})
        </p>
        <div className="flex flex-wrap gap-1.5">
          {ATS_KEYWORDS.found.map(kw => (
            <span key={kw} className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">{kw}</span>
          ))}
        </div>
      </div>
      <div>
        <p className="text-[11px] font-semibold text-amber-500 mb-2 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" /> Missing ({ATS_KEYWORDS.missing.length})
        </p>
        <div className="flex flex-wrap gap-1.5">
          {ATS_KEYWORDS.missing.map(kw => (
            <button key={kw} className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 hover:bg-amber-500/20 transition-colors flex items-center gap-1">
              <Plus className="w-2.5 h-2.5" />{kw}
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-border/50 p-3 bg-card/40 space-y-2">
        <p className="text-[11px] font-semibold">Paste job description</p>
        <Textarea
          value={jobDesc}
          onChange={e => setJobDesc(e.target.value)}
          placeholder="Paste the job description to get targeted keyword analysis…"
          className="text-xs h-24 resize-none bg-background/60"
        />
        <Button
          size="sm"
          className="w-full h-8 text-xs gap-1.5 text-white border-0"
          style={{ background: `linear-gradient(135deg, ${accent}, ${accent}bb)` }}
          onClick={onAnalyze}
          disabled={analyzing || !jobDesc.trim()}
        >
          {analyzing
            ? <><span className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin" /> Analyzing…</>
            : <><Zap className="w-3 h-3" /> Analyze Keywords</>}
        </Button>
      </div>
    </div>
  );
}

/* ─── AI Panel ─── */

function AiPanel({ accent, aiLoading, onRewrite }: {
  accent: string; aiLoading: boolean; onRewrite: () => void;
}) {
  const [applied, setApplied] = useState<Set<number>>(new Set());
  const apply = (i: number) => setApplied(prev => new Set([...prev, i]));

  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold">AI Suggestions</p>
        <Badge variant="secondary" className="text-[10px]">{AI_SUGGESTIONS.length - applied.size}</Badge>
      </div>
      {AI_SUGGESTIONS.map((s, i) => {
        const isApplied = applied.has(i);
        return (
          <div
            key={i}
            className={cn(
              "p-3 rounded-xl border space-y-2 transition-all",
              isApplied ? "border-emerald-500/30 bg-emerald-500/5 opacity-60" : "border-border/50 bg-card/40"
            )}
          >
            <div className="flex items-start gap-2">
              {s.priority === "high"
                ? <AlertCircle  className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                : <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />}
              <p className="text-[11px] text-foreground/80 leading-snug">{s.text}</p>
            </div>
            <div className="flex gap-1.5">
              {isApplied ? (
                <span className="text-[10px] text-emerald-500 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Applied
                </span>
              ) : (
                <>
                  <Button
                    size="sm"
                    className="flex-1 h-6 text-[10px] gap-1 text-white border-0"
                    style={{ background: accent }}
                    onClick={() => apply(i)}
                  >
                    <Wand2 className="w-2.5 h-2.5" /> Apply
                  </Button>
                  <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground">
                    <X className="w-3 h-3" />
                  </Button>
                </>
              )}
            </div>
          </div>
        );
      })}
      <div className="rounded-xl border border-border/50 p-3 bg-card/40 space-y-2 mt-2">
        <p className="text-[11px] font-semibold flex items-center gap-1.5">
          <Sparkles className="w-3 h-3" style={{ color: accent }} /> Tailored AI Rewrite
        </p>
        <p className="text-[10px] text-muted-foreground">Paste a job description and our AI will rewrite your bullets to match.</p>
        <Textarea placeholder="Job description…" className="text-xs h-20 resize-none bg-background/60" />
        <Button
          size="sm"
          className="w-full h-8 text-xs gap-1.5 text-white border-0"
          style={{ background: `linear-gradient(135deg, ${accent}, ${accent}bb)` }}
          onClick={onRewrite}
          disabled={aiLoading}
        >
          {aiLoading
            ? <><span className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin" /> Rewriting…</>
            : <><Sparkles className="w-3 h-3" /> Rewrite with AI</>}
        </Button>
      </div>
    </div>
  );
}

/* ─── Design Panel ─── */

function DesignPanel({ activeTemplate, tplAccent, onTemplateChange }: {
  activeTemplate: string; tplAccent: string; onTemplateChange: (id: string) => void;
}) {
  return (
    <div className="p-4 space-y-5">
      <div>
        <p className="text-[11px] font-semibold text-muted-foreground mb-3 flex items-center gap-1.5">
          <Palette className="w-3.5 h-3.5" /> Templates
        </p>
        <div className="grid grid-cols-3 gap-3">
          {TEMPLATES.map(tpl => (
            <TemplateThumb
              key={tpl.id}
              tpl={tpl}
              active={activeTemplate === tpl.id}
              onClick={() => onTemplateChange(tpl.id)}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="text-[11px] font-semibold text-muted-foreground mb-2.5">Accent colour</p>
        <div className="flex gap-2 flex-wrap">
          {["#2563eb", "#7c3aed", "#059669", "#dc2626", "#d97706", "#0f172a", "#db2777", "#0891b2"].map(color => (
            <button
              key={color}
              className={cn(
                "w-6 h-6 rounded-full border-2 transition-transform hover:scale-110",
                tplAccent === color ? "border-foreground scale-110" : "border-transparent"
              )}
              style={{ background: color }}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="text-[11px] font-semibold text-muted-foreground mb-2">Font</p>
        <div className="space-y-1.5">
          {["Classic (Georgia)", "Modern (DM Sans)", "Humanist (Optima)"].map(f => (
            <button
              key={f}
              className={cn(
                "w-full text-left text-xs px-3 py-2 rounded-lg border transition-colors",
                f.includes("Classic")
                  ? "border-primary bg-primary/5 text-foreground"
                  : "border-border/50 text-muted-foreground hover:border-border hover:text-foreground"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */

type MobileTab = "edit" | "preview" | "analyze";
type RightPanel = "score" | "ats" | "ai";

export default function ResumePage() {
  const resume = mockResumes[0];

  const [activeTemplate, setActiveTemplate]   = useState("stockholm");
  const [expandedSection, setExpandedSection] = useState<string | null>("sec_exp");
  const [aiLoading, setAiLoading]             = useState(false);
  const [rightPanel, setRightPanel]           = useState<RightPanel>("score");
  const [leftTab, setLeftTab]                 = useState<"sections" | "design">("sections");
  const [jobDesc, setJobDesc]                 = useState("");
  const [analyzing, setAnalyzing]             = useState(false);
  const [mobileTab, setMobileTab]             = useState<MobileTab>("preview");
  const previewRef                            = useRef<HTMLDivElement>(null);

  const tplAccent = TEMPLATES.find(t => t.id === activeTemplate)?.accent ?? "#2563eb";

  const handleAIRewrite = () => {
    setAiLoading(true);
    setTimeout(() => setAiLoading(false), 2200);
  };

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => { setAnalyzing(false); setRightPanel("ats"); }, 1800);
  };

  return (
    <div className="h-full flex flex-col -m-4 md:-m-6 lg:-m-7 overflow-hidden">

      {/* ── Toolbar ── */}
      <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 border-b border-border/50 bg-background/90 backdrop-blur-sm flex-shrink-0 z-10">
        <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0">
          <ArrowLeft className="w-4 h-4" />
        </Link>

        {/* title */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: `${tplAccent}20` }}>
            <FileText className="w-3.5 h-3.5" style={{ color: tplAccent }} />
          </div>
          <div className="min-w-0">
            <h1 className="text-sm font-semibold truncate">{resume.title}</h1>
            <p className="text-[10px] text-muted-foreground hidden sm:block">Saved · {resume.views} views</p>
          </div>
        </div>

        {/* score pill — always visible */}
        <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-card border border-border/60 flex-shrink-0">
          <div className={cn("text-sm font-bold tabular-nums", getScoreColor(resume.score))}>{resume.score}%</div>
          <div className="hidden sm:block">
            <p className="text-[9px] font-medium leading-none text-muted-foreground mb-1">Resume Score</p>
            <div className="w-14 h-1 bg-muted rounded-full overflow-hidden">
              <div className={cn("h-full rounded-full", getScoreBg(resume.score))} style={{ width: `${resume.score}%` }} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 flex-shrink-0">
          <Link href="/dashboard/resume/examples">
            <Button variant="outline" size="sm" className="h-7 text-xs gap-1.5 hidden lg:flex">
              <BookOpen className="w-3.5 h-3.5" /> Examples
            </Button>
          </Link>
          <Button variant="outline" size="sm" className="h-7 text-xs gap-1.5 hidden md:flex">
            <Eye className="w-3.5 h-3.5" /> Preview
          </Button>
          <Button variant="outline" size="sm" className="h-7 text-xs gap-1 px-2 sm:px-3">
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Export PDF</span>
          </Button>
          <Button
            size="sm"
            className="h-7 text-xs gap-1.5 text-white border-0 px-2 sm:px-3"
            style={{ background: `linear-gradient(135deg, ${tplAccent}, ${tplAccent}cc)` }}
            onClick={handleAIRewrite}
            disabled={aiLoading}
          >
            {aiLoading
              ? <><span className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin" /><span className="hidden sm:inline"> Rewriting…</span></>
              : <><Sparkles className="w-3.5 h-3.5" /><span className="hidden sm:inline"> AI Rewrite</span></>}
          </Button>
        </div>
      </div>

      {/* ── Mobile tab bar ── */}
      <div className="flex border-b border-border/50 bg-background/60 flex-shrink-0 lg:hidden">
        {([
          { key: "edit",    icon: <Settings2 className="w-3.5 h-3.5" />,  label: "Edit"    },
          { key: "preview", icon: <Eye       className="w-3.5 h-3.5" />,  label: "Preview" },
          { key: "analyze", icon: <BarChart3 className="w-3.5 h-3.5" />,  label: "Analyze" },
        ] as { key: MobileTab; icon: React.ReactNode; label: string }[]).map(tab => (
          <button
            key={tab.key}
            onClick={() => setMobileTab(tab.key)}
            className={cn(
              "flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium transition-colors",
              mobileTab === tab.key
                ? "text-foreground border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.icon}{tab.label}
          </button>
        ))}
      </div>

      {/* ── Body: 3-col desktop, tab-driven mobile ── */}
      <div className="flex-1 overflow-hidden flex">

        {/* LEFT PANEL — always on desktop, conditional on mobile */}
        <div className={cn(
          "border-r border-border/50 flex flex-col bg-background/60",
          "lg:flex lg:w-[270px] lg:flex-shrink-0",
          mobileTab === "edit" ? "flex flex-col w-full" : "hidden lg:flex"
        )}>
          {/* left tabs */}
          <div className="flex border-b border-border/50 flex-shrink-0">
            {(["sections", "design"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setLeftTab(tab)}
                className={cn(
                  "flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium transition-colors",
                  leftTab === tab
                    ? "text-foreground border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab === "sections"
                  ? <Settings2 className="w-3.5 h-3.5" />
                  : <LayoutTemplate className="w-3.5 h-3.5" />}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {leftTab === "sections" && (
            <div className="flex-1 overflow-y-auto scrollbar-hide p-3 space-y-2">
              {resume.sections.map(section => (
                <SectionBlock
                  key={section.id}
                  section={section}
                  expanded={expandedSection === section.id}
                  onToggle={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                />
              ))}
              <button className="w-full flex items-center justify-center gap-2 py-2 text-xs text-primary/70 hover:text-primary border border-dashed border-primary/20 hover:border-primary/40 rounded-xl transition-colors">
                <Plus className="w-3.5 h-3.5" /> Add section
              </button>
            </div>
          )}

          {leftTab === "design" && (
            <div className="flex-1 overflow-y-auto scrollbar-hide">
              <DesignPanel
                activeTemplate={activeTemplate}
                tplAccent={tplAccent}
                onTemplateChange={setActiveTemplate}
              />
            </div>
          )}
        </div>

        {/* CENTER PANEL — preview */}
        <div className={cn(
          "bg-[#f0f2f5] dark:bg-[#0e0e14] flex flex-col items-center",
          "lg:flex lg:flex-1 lg:overflow-y-auto",
          mobileTab === "preview" ? "flex flex-1 overflow-y-auto" : "hidden lg:flex"
        )}>
          <div className="w-full flex flex-col items-center py-6 gap-4 px-4">
            <div
              ref={previewRef}
              className="w-full max-w-[640px] rounded-sm shadow-[0_8px_40px_rgba(0,0,0,0.18)] overflow-hidden"
              style={{ minHeight: "780px", background: "white" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTemplate}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 } as Transition}
                  className="h-full"
                >
                  <ResumePreview templateId={activeTemplate} />
                </motion.div>
              </AnimatePresence>
            </div>
            <p className="text-[11px] text-muted-foreground pb-4">Page 1 of 1 · A4 format</p>
          </div>
        </div>

        {/* RIGHT PANEL — score/ats/ai */}
        <div className={cn(
          "border-l border-border/50 flex flex-col bg-background/60",
          "lg:flex lg:w-[280px] lg:flex-shrink-0",
          mobileTab === "analyze" ? "flex flex-col w-full" : "hidden lg:flex"
        )}>
          {/* right tabs */}
          <div className="flex border-b border-border/50 flex-shrink-0">
            {([
              { key: "score", icon: <BarChart3 className="w-3.5 h-3.5" />, label: "Score" },
              { key: "ats",   icon: <Target    className="w-3.5 h-3.5" />, label: "ATS"   },
              { key: "ai",    icon: <Bot       className="w-3.5 h-3.5" />, label: "AI"    },
            ] as { key: RightPanel; icon: React.ReactNode; label: string }[]).map(tab => (
              <button
                key={tab.key}
                onClick={() => setRightPanel(tab.key)}
                className={cn(
                  "flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium transition-colors",
                  rightPanel === tab.key
                    ? "text-foreground border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab.icon}{tab.label}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-hide">
            {rightPanel === "score" && (
              <ScorePanel accent={tplAccent} score={resume.score} atsScore={resume.atsScore} />
            )}
            {rightPanel === "ats" && (
              <AtsPanel
                accent={tplAccent}
                atsScore={resume.atsScore}
                jobDesc={jobDesc}
                setJobDesc={setJobDesc}
                analyzing={analyzing}
                onAnalyze={handleAnalyze}
              />
            )}
            {rightPanel === "ai" && (
              <AiPanel accent={tplAccent} aiLoading={aiLoading} onRewrite={handleAIRewrite} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
