"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft, Plus, Trash2, Save, Check, Loader2, Palette,
  User, Briefcase, GraduationCap, Code2, FolderOpen, Award, FileText,
  Eye, Settings2, BookOpen, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn, getScoreColor } from "@/lib/utils";
import { updateResume, type ResumeInput } from "@/lib/actions/resume";

/* ─── Types ─── */

export type SectionType =
  | "summary" | "experience" | "education" | "skills" | "projects" | "certifications";

export type EditorItem = {
  title: string; subtitle: string; date: string; endDate: string;
  description: string; url: string; location: string;
  bullets: string[]; skills: string[];
};

export type EditorSection = { type: SectionType; title: string; items: EditorItem[] };

export type EditorResume = {
  id: string; title: string; template: string; accentColor: string;
  fullName: string; headline: string; email: string; phone: string;
  location: string; website: string; score: number; atsScore: number;
  sections: EditorSection[];
};

/* ─── Local (keyed) state ─── */

let _uid = 0;
const uid = () => `k${Date.now().toString(36)}_${_uid++}`;

type ItemState = EditorItem & { key: string };
type SectionState = { key: string; type: SectionType; title: string; items: ItemState[] };

const emptyItem = (): ItemState => ({
  key: uid(), title: "", subtitle: "", date: "", endDate: "",
  description: "", url: "", location: "", bullets: [], skills: [],
});

/* ─── Templates ─── */

const TEMPLATES = [
  { id: "stockholm", name: "Stockholm", accent: "#2563eb", variant: "single" as const },
  { id: "new-york",  name: "New York",  accent: "#0f172a", variant: "single" as const },
  { id: "vienna",    name: "Vienna",    accent: "#7c3aed", variant: "sidebar" as const },
  { id: "sydney",    name: "Sydney",    accent: "#059669", variant: "single" as const },
  { id: "london",    name: "London",    accent: "#dc2626", variant: "sidebar" as const },
  { id: "toronto",   name: "Toronto",   accent: "#d97706", variant: "single" as const },
];
const ACCENTS = ["#2563eb", "#7c3aed", "#059669", "#dc2626", "#d97706", "#0f172a", "#db2777", "#0891b2"];

const SECTION_META: Record<SectionType, { label: string; icon: React.ReactNode }> = {
  summary:        { label: "Summary",        icon: <User className="w-3.5 h-3.5" /> },
  experience:     { label: "Experience",     icon: <Briefcase className="w-3.5 h-3.5" /> },
  education:      { label: "Education",       icon: <GraduationCap className="w-3.5 h-3.5" /> },
  skills:         { label: "Skills",         icon: <Code2 className="w-3.5 h-3.5" /> },
  projects:       { label: "Projects",       icon: <FolderOpen className="w-3.5 h-3.5" /> },
  certifications: { label: "Certifications", icon: <Award className="w-3.5 h-3.5" /> },
};
const ALL_TYPES: SectionType[] = ["summary", "experience", "education", "skills", "projects", "certifications"];

/* ─── Preview document ─── */

function ResumeDocument({
  state, accent, variant,
}: { state: EditorFullState; accent: string; variant: "single" | "sidebar" }) {
  const contacts = [state.email, state.phone, state.location, state.website].filter(Boolean);
  const entrySections = state.sections.filter((s) => s.type !== "summary" && s.type !== "skills");
  const summary = state.sections.find((s) => s.type === "summary")?.items[0]?.description;
  const skillGroups = state.sections.find((s) => s.type === "skills")?.items ?? [];

  const Header = (
    <div>
      <h1 className="text-[22px] font-bold tracking-tight text-gray-900 leading-tight">
        {state.fullName || "Your Name"}
      </h1>
      {state.headline && (
        <p className="text-sm font-medium mt-0.5" style={{ color: accent }}>{state.headline}</p>
      )}
    </div>
  );

  const SkillsBlock = skillGroups.length > 0 && (
    <section>
      <h2 className="text-[10px] font-bold uppercase tracking-[0.15em] mb-2" style={{ color: accent }}>Skills</h2>
      <div className="space-y-1.5">
        {skillGroups.map((g, i) => (
          <div key={i} className="text-[11px]">
            {g.title && <span className="font-semibold text-gray-700">{g.title}: </span>}
            <span className="text-gray-600">{g.skills.join(", ")}</span>
          </div>
        ))}
      </div>
    </section>
  );

  const EntryBlocks = entrySections.map((s) =>
    s.items.length === 0 ? null : (
      <section key={s.key}>
        <h2 className="text-[10px] font-bold uppercase tracking-[0.15em] mb-2" style={{ color: accent }}>
          {s.title || SECTION_META[s.type].label}
        </h2>
        <div className="space-y-3">
          {s.items.map((it) => (
            <div key={it.key}>
              <div className="flex items-baseline justify-between gap-2">
                <div>
                  <p className="text-[12px] font-bold text-gray-900">{it.title}</p>
                  {(it.subtitle || it.location) && (
                    <p className="text-[11px]" style={{ color: accent }}>
                      {[it.subtitle, it.location].filter(Boolean).join(" · ")}
                    </p>
                  )}
                </div>
                {(it.date || it.endDate) && (
                  <span className="text-[10px] text-gray-400 whitespace-nowrap flex-shrink-0">
                    {[it.date, it.endDate].filter(Boolean).join(" – ")}
                  </span>
                )}
              </div>
              {it.description && <p className="text-[11px] text-gray-600 mt-0.5">{it.description}</p>}
              {it.bullets.length > 0 && (
                <ul className="mt-1 space-y-0.5">
                  {it.bullets.map((b, bi) => (
                    <li key={bi} className="text-[11px] text-gray-600 flex gap-2 items-start">
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
    )
  );

  const SummaryBlock = summary && (
    <section>
      <h2 className="text-[10px] font-bold uppercase tracking-[0.15em] mb-2" style={{ color: accent }}>Summary</h2>
      <p className="text-[11.5px] text-gray-600 leading-relaxed">{summary}</p>
    </section>
  );

  if (variant === "sidebar") {
    return (
      <div className="bg-white text-gray-900 h-full flex" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>
        <div className="w-[35%] flex-shrink-0 px-4 py-6 space-y-4 text-white" style={{ background: accent }}>
          <div>
            <h1 className="text-[16px] font-bold leading-tight">{state.fullName || "Your Name"}</h1>
            {state.headline && <p className="text-[10px] text-white/70 mt-0.5">{state.headline}</p>}
          </div>
          {contacts.length > 0 && (
            <div className="space-y-1 text-[10px] text-white/85 break-words">
              {contacts.map((c, i) => <div key={i}>{c}</div>)}
            </div>
          )}
          {skillGroups.length > 0 && (
            <div>
              <h2 className="text-[9px] font-bold uppercase tracking-widest text-white/60 mb-2">Skills</h2>
              <div className="space-y-2">
                {skillGroups.map((g, i) => (
                  <div key={i}>
                    {g.title && <p className="text-[10px] font-semibold text-white/85 mb-0.5">{g.title}</p>}
                    <p className="text-[10px] text-white/70">{g.skills.join(", ")}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex-1 px-5 py-6 space-y-4 min-w-0">
          {SummaryBlock}
          {EntryBlocks}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-900 h-full" style={{ fontFamily: "'Georgia', serif" }}>
      <div className="px-8 pt-8 pb-4 border-b-2" style={{ borderColor: accent }}>
        {Header}
        {contacts.length > 0 && (
          <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-2 text-[11px] text-gray-500">
            {contacts.map((c, i) => <span key={i}>{c}</span>)}
          </div>
        )}
      </div>
      <div className="px-8 py-5 space-y-4">
        {SummaryBlock}
        {EntryBlocks}
        {SkillsBlock}
      </div>
    </div>
  );
}

/* ─── Full editor state ─── */

type EditorFullState = {
  title: string; template: string; accentColor: string;
  fullName: string; headline: string; email: string; phone: string;
  location: string; website: string; sections: SectionState[];
};

function toState(r: EditorResume): EditorFullState {
  return {
    title: r.title, template: r.template, accentColor: r.accentColor,
    fullName: r.fullName, headline: r.headline, email: r.email, phone: r.phone,
    location: r.location, website: r.website,
    sections: r.sections.map((s) => {
      // Summary is edited as a single text block — guarantee one item exists.
      const items = s.items.map((it) => ({ ...it, key: uid() }));
      if (s.type === "summary" && items.length === 0) items.push(emptyItem());
      return { key: uid(), type: s.type, title: s.title, items };
    }),
  };
}

function toInput(s: EditorFullState): ResumeInput {
  return {
    title: s.title, template: s.template, accentColor: s.accentColor,
    fullName: s.fullName, headline: s.headline, email: s.email, phone: s.phone,
    location: s.location, website: s.website,
    sections: s.sections.map((sec) => ({
      type: sec.type,
      title: sec.title,
      items: sec.items.map((it) => ({
        title: it.title, subtitle: it.subtitle, date: it.date, endDate: it.endDate,
        description: it.description, url: it.url, location: it.location,
        bullets: it.bullets, skills: it.skills,
      })),
    })),
  };
}

/* ─── Main editor ─── */

type MobileTab = "edit" | "preview";

export function ResumeEditor({ resume }: { resume: EditorResume }) {
  const router = useRouter();
  const [state, setState] = useState<EditorFullState>(() => toState(resume));
  const [saving, startSave] = useTransition();
  const [savedAt, setSavedAt] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [showDesign, setShowDesign] = useState(false);
  const [mobileTab, setMobileTab] = useState<MobileTab>("edit");

  const variant = useMemo(
    () => TEMPLATES.find((t) => t.id === state.template)?.variant ?? "single",
    [state.template]
  );

  const set = <K extends keyof EditorFullState>(k: K, v: EditorFullState[K]) => {
    setState((s) => ({ ...s, [k]: v }));
    setSavedAt(null);
  };

  const updateSection = (key: string, fn: (s: SectionState) => SectionState) => {
    setState((st) => ({ ...st, sections: st.sections.map((s) => (s.key === key ? fn(s) : s)) }));
    setSavedAt(null);
  };
  const updateItem = (sk: string, ik: string, patch: Partial<ItemState>) =>
    updateSection(sk, (s) => ({ ...s, items: s.items.map((it) => (it.key === ik ? { ...it, ...patch } : it)) }));
  const addItem = (sk: string) =>
    updateSection(sk, (s) => ({ ...s, items: [...s.items, emptyItem()] }));
  const removeItem = (sk: string, ik: string) =>
    updateSection(sk, (s) => ({ ...s, items: s.items.filter((it) => it.key !== ik) }));
  const removeSection = (sk: string) => {
    setState((st) => ({ ...st, sections: st.sections.filter((s) => s.key !== sk) }));
    setSavedAt(null);
  };
  const addSection = (type: SectionType) => {
    setState((st) => ({
      ...st,
      sections: [...st.sections, { key: uid(), type, title: SECTION_META[type].label, items: type === "summary" ? [emptyItem()] : [] }],
    }));
    setSavedAt(null);
  };

  const handleSave = () => {
    setError("");
    startSave(async () => {
      const res = await updateResume(resume.id, toInput(state));
      if (res.ok) { setSavedAt(Date.now()); router.refresh(); }
      else setError(res.error);
    });
  };

  const accent = state.accentColor;
  const missingTypes = ALL_TYPES.filter((t) => !state.sections.some((s) => s.type === t));

  return (
    <div className="h-full flex flex-col -m-4 md:-m-6 lg:-m-7 overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 border-b border-border/50 bg-background/90 backdrop-blur-sm flex-shrink-0 z-10">
        <Link href="/dashboard/resumes" className="text-muted-foreground hover:text-foreground flex-shrink-0">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: `${accent}20` }}>
            <FileText className="w-3.5 h-3.5" style={{ color: accent }} />
          </div>
          <Input
            value={state.title}
            onChange={(e) => set("title", e.target.value)}
            className="h-8 text-sm font-semibold border-0 bg-transparent px-1 focus-visible:ring-1 max-w-[280px]"
            placeholder="Resume title"
          />
        </div>

        <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-card border border-border/60 flex-shrink-0">
          <span className={cn("text-sm font-bold tabular-nums", getScoreColor(resume.score))}>{resume.score}%</span>
          <span className="text-[9px] font-medium text-muted-foreground hidden sm:block">Score</span>
        </div>

        <div className="flex items-center gap-1 flex-shrink-0">
          <Link href="/dashboard/resume/examples" className="hidden lg:block">
            <Button variant="outline" size="sm" className="h-7 text-xs gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> Examples
            </Button>
          </Link>
          {savedAt && !saving && (
            <span className="text-[11px] text-emerald-500 items-center gap-1 hidden sm:flex">
              <Check className="w-3.5 h-3.5" /> Saved
            </span>
          )}
          <Button
            size="sm"
            className="h-7 text-xs gap-1.5 text-white border-0 px-2 sm:px-3"
            style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)` }}
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{saving ? "Saving…" : "Save"}</span>
          </Button>
        </div>
      </div>

      {error && (
        <p className="text-xs text-destructive bg-destructive/10 border-b border-destructive/20 px-4 py-2">{error}</p>
      )}

      {/* Mobile tabs */}
      <div className="flex border-b border-border/50 bg-background/60 flex-shrink-0 lg:hidden">
        {([["edit", <Settings2 key="e" className="w-3.5 h-3.5" />, "Edit"], ["preview", <Eye key="p" className="w-3.5 h-3.5" />, "Preview"]] as [MobileTab, React.ReactNode, string][]).map(([k, ic, lbl]) => (
          <button key={k} onClick={() => setMobileTab(k)}
            className={cn("flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium",
              mobileTab === k ? "text-foreground border-b-2 border-primary" : "text-muted-foreground")}>
            {ic}{lbl}
          </button>
        ))}
      </div>

      {/* Body */}
      <div className="flex-1 overflow-hidden flex">
        {/* LEFT — editor */}
        <div className={cn(
          "border-r border-border/50 flex flex-col bg-background/60 lg:flex lg:w-[380px] lg:flex-shrink-0",
          mobileTab === "edit" ? "flex w-full" : "hidden lg:flex"
        )}>
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {/* Design */}
            <div className="rounded-xl border border-border/60 bg-card/40">
              <button onClick={() => setShowDesign((v) => !v)}
                className="w-full flex items-center gap-2 px-3 py-2.5 text-xs font-semibold">
                <Palette className="w-3.5 h-3.5" style={{ color: accent }} /> Template &amp; Colour
              </button>
              {showDesign && (
                <div className="px-3 pb-3 space-y-3 border-t border-border/40 pt-3">
                  <div className="grid grid-cols-3 gap-2">
                    {TEMPLATES.map((t) => (
                      <button key={t.id} onClick={() => set("template", t.id)}
                        className={cn("rounded-lg border-2 px-2 py-1.5 text-[11px] font-medium transition-all",
                          state.template === t.id ? "border-primary" : "border-border/50 text-muted-foreground hover:border-border")}>
                        {t.name}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {ACCENTS.map((c) => (
                      <button key={c} onClick={() => set("accentColor", c)}
                        className={cn("w-6 h-6 rounded-full border-2 transition-transform hover:scale-110",
                          accent === c ? "border-foreground scale-110" : "border-transparent")}
                        style={{ background: c }} aria-label={`Accent ${c}`} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Personal info */}
            <div className="rounded-xl border border-border/60 bg-card/40 p-3 space-y-2">
              <p className="text-xs font-semibold flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> Personal Details</p>
              <div className="grid grid-cols-2 gap-2">
                <Field label="Full name" value={state.fullName} onChange={(v) => set("fullName", v)} />
                <Field label="Headline" value={state.headline} onChange={(v) => set("headline", v)} />
                <Field label="Email" value={state.email} onChange={(v) => set("email", v)} />
                <Field label="Phone" value={state.phone} onChange={(v) => set("phone", v)} />
                <Field label="Location" value={state.location} onChange={(v) => set("location", v)} />
                <Field label="Website" value={state.website} onChange={(v) => set("website", v)} />
              </div>
            </div>

            {/* Sections */}
            {state.sections.map((section) => (
              <SectionEditor
                key={section.key}
                section={section}
                onTitle={(v) => updateSection(section.key, (s) => ({ ...s, title: v }))}
                onAddItem={() => addItem(section.key)}
                onRemoveItem={(ik) => removeItem(section.key, ik)}
                onItem={(ik, patch) => updateItem(section.key, ik, patch)}
                onRemoveSection={() => removeSection(section.key)}
              />
            ))}

            {/* Add section */}
            {missingTypes.length > 0 && (
              <div className="rounded-xl border border-dashed border-border/60 p-3">
                <p className="text-[11px] font-semibold text-muted-foreground mb-2">Add section</p>
                <div className="flex flex-wrap gap-1.5">
                  {missingTypes.map((t) => (
                    <button key={t} onClick={() => addSection(t)}
                      className="text-[11px] px-2 py-1 rounded-lg border border-border/60 hover:border-primary hover:text-primary flex items-center gap-1 transition-colors">
                      <Plus className="w-3 h-3" /> {SECTION_META[t].label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CENTER — preview */}
        <div className={cn(
          "bg-[#f0f2f5] dark:bg-[#0e0e14] flex-col items-center lg:flex lg:flex-1 lg:overflow-y-auto",
          mobileTab === "preview" ? "flex flex-1 overflow-y-auto" : "hidden lg:flex"
        )}>
          <div className="w-full flex flex-col items-center py-6 gap-3 px-4">
            <div className="w-full max-w-[640px] rounded-sm shadow-[0_8px_40px_rgba(0,0,0,0.18)] overflow-hidden bg-white" style={{ minHeight: "780px" }}>
              <ResumeDocument state={state} accent={accent} variant={variant} />
            </div>
            <p className="text-[11px] text-muted-foreground pb-4">Live preview · A4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Small field ─── */

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block">
      <span className="text-[10px] font-medium text-muted-foreground">{label}</span>
      <Input value={value} onChange={(e) => onChange(e.target.value)} className="h-8 text-xs mt-0.5" />
    </label>
  );
}

/* ─── Section editor ─── */

function SectionEditor({
  section, onTitle, onAddItem, onRemoveItem, onItem, onRemoveSection,
}: {
  section: SectionState;
  onTitle: (v: string) => void;
  onAddItem: () => void;
  onRemoveItem: (ik: string) => void;
  onItem: (ik: string, patch: Partial<ItemState>) => void;
  onRemoveSection: () => void;
}) {
  const meta = SECTION_META[section.type];
  const isSummary = section.type === "summary";
  const isSkills = section.type === "skills";

  // Ensure the summary always has one item to edit.
  const summaryItem = section.items[0];

  return (
    <div className="rounded-xl border border-border/60 bg-card/40">
      <div className="flex items-center gap-2 px-3 py-2.5 border-b border-border/40">
        <span className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">{meta.icon}</span>
        <Input value={section.title} onChange={(e) => onTitle(e.target.value)}
          className="h-7 text-xs font-semibold border-0 bg-transparent px-1 focus-visible:ring-1 flex-1" />
        <button onClick={onRemoveSection} className="text-muted-foreground/40 hover:text-destructive" aria-label="Remove section">
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="p-3 space-y-2">
        {isSummary ? (
          <Textarea
            value={summaryItem?.description ?? ""}
            onChange={(e) => onItem(summaryItem?.key ?? "", { description: e.target.value })}
            placeholder="Write a short professional summary…"
            className="text-xs resize-none h-24 bg-background/60"
          />
        ) : (
          <>
            {section.items.map((it) => (
              <div key={it.key} className="rounded-lg border border-border/40 bg-background/60 p-2.5 space-y-1.5">
                <div className="flex items-start gap-2">
                  <Input value={it.title} onChange={(e) => onItem(it.key, { title: e.target.value })}
                    placeholder={isSkills ? "Group (e.g. Languages)" : "Title"}
                    className="h-7 text-xs font-semibold flex-1" />
                  <button onClick={() => onRemoveItem(it.key)} className="text-muted-foreground/40 hover:text-destructive mt-1" aria-label="Remove">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {isSkills ? (
                  <Input
                    value={it.skills.join(", ")}
                    onChange={(e) => onItem(it.key, { skills: e.target.value.split(",").map((x) => x.trim()).filter(Boolean) })}
                    placeholder="Comma-separated skills"
                    className="h-7 text-xs"
                  />
                ) : (
                  <>
                    <Input value={it.subtitle} onChange={(e) => onItem(it.key, { subtitle: e.target.value })}
                      placeholder="Subtitle (company / school)" className="h-7 text-xs" />
                    <div className="grid grid-cols-3 gap-1.5">
                      <Input value={it.date} onChange={(e) => onItem(it.key, { date: e.target.value })} placeholder="Start" className="h-7 text-xs" />
                      <Input value={it.endDate} onChange={(e) => onItem(it.key, { endDate: e.target.value })} placeholder="End" className="h-7 text-xs" />
                      <Input value={it.location} onChange={(e) => onItem(it.key, { location: e.target.value })} placeholder="Location" className="h-7 text-xs" />
                    </div>
                    {section.type === "projects" && (
                      <Input value={it.url} onChange={(e) => onItem(it.key, { url: e.target.value })} placeholder="URL" className="h-7 text-xs" />
                    )}
                    <BulletsEditor bullets={it.bullets} onChange={(b) => onItem(it.key, { bullets: b })} />
                  </>
                )}
              </div>
            ))}
            <button onClick={onAddItem}
              className="w-full flex items-center justify-center gap-1.5 py-1.5 text-[11px] text-primary/70 hover:text-primary border border-dashed border-primary/20 hover:border-primary/40 rounded-lg transition-colors">
              <Plus className="w-3 h-3" /> Add {isSkills ? "skill group" : "entry"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/* ─── Bullets ─── */

function BulletsEditor({ bullets, onChange }: { bullets: string[]; onChange: (b: string[]) => void }) {
  return (
    <div className="space-y-1">
      {bullets.map((b, i) => (
        <div key={i} className="flex gap-1.5 items-center">
          <span className="text-primary text-[10px] flex-shrink-0">•</span>
          <Input value={b}
            onChange={(e) => onChange(bullets.map((x, xi) => (xi === i ? e.target.value : x)))}
            placeholder="Achievement / responsibility" className="h-6 text-[11px]" />
          <button onClick={() => onChange(bullets.filter((_, xi) => xi !== i))}
            className="text-muted-foreground/40 hover:text-destructive flex-shrink-0" aria-label="Remove bullet">
            <X className="w-3 h-3" />
          </button>
        </div>
      ))}
      <button onClick={() => onChange([...bullets, ""])}
        className="text-[11px] text-primary/70 hover:text-primary flex items-center gap-1">
        <Plus className="w-2.5 h-2.5" /> Add bullet
      </button>
    </div>
  );
}
