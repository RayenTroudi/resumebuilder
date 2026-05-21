"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Download, Copy, RefreshCw, ChevronDown, Briefcase, MessageCircle, Zap, GraduationCap, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { mockCoverLetters } from "@/data/mock";

const tones = [
  {
    id: "professional",
    label: "Professional",
    description: "Polished & authoritative",
    icon: Briefcase,
    accent: "from-indigo-500 to-blue-500",
    glow: "shadow-indigo-500/25",
    pill: "bg-indigo-500/10 text-indigo-400 border-indigo-500/25",
    dot: "bg-indigo-400",
  },
  {
    id: "conversational",
    label: "Conversational",
    description: "Warm & approachable",
    icon: MessageCircle,
    accent: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/25",
    pill: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    dot: "bg-emerald-400",
  },
  {
    id: "enthusiastic",
    label: "Enthusiastic",
    description: "Bold & energetic",
    icon: Zap,
    accent: "from-amber-500 to-orange-500",
    glow: "shadow-amber-500/25",
    pill: "bg-amber-500/10 text-amber-400 border-amber-500/25",
    dot: "bg-amber-400",
  },
  {
    id: "formal",
    label: "Formal",
    description: "Structured & precise",
    icon: GraduationCap,
    accent: "from-violet-500 to-purple-500",
    glow: "shadow-violet-500/25",
    pill: "bg-violet-500/10 text-violet-400 border-violet-500/25",
    dot: "bg-violet-400",
  },
];

function ToneDropdown({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = tones.find((t) => t.id === value) ?? tones[0];
  const SelectedIcon = selected.icon;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`
          group w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all duration-200
          bg-card hover:bg-accent/40
          ${open ? "border-indigo-500/50 ring-2 ring-indigo-500/15" : "border-border hover:border-border/80"}
        `}
      >
        {/* Icon badge */}
        <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${selected.accent} flex items-center justify-center flex-shrink-0 shadow-md ${selected.glow}`}>
          <SelectedIcon className="w-3.5 h-3.5 text-white" strokeWidth={2.2} />
        </div>

        {/* Labels */}
        <div className="flex-1 text-left min-w-0">
          <p className="text-sm font-medium text-foreground leading-none">{selected.label}</p>
          <p className="text-[11px] text-muted-foreground mt-0.5 truncate">{selected.description}</p>
        </div>

        {/* Chevron */}
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
          <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        </motion.div>
      </button>

      {/* Dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-50 left-0 right-0 mt-1.5 bg-white dark:bg-[oklch(0.13_0.02_264)] border border-border rounded-xl shadow-xl shadow-black/20 overflow-hidden"
          >
            <div className="p-1.5 space-y-0.5">
              {tones.map((tone) => {
                const Icon = tone.icon;
                const isSelected = tone.id === value;
                return (
                  <button
                    key={tone.id}
                    type="button"
                    onClick={() => { onChange(tone.id); setOpen(false); }}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-150
                      ${isSelected ? "bg-accent/60" : "hover:bg-accent/40"}
                    `}
                  >
                    {/* Icon */}
                    <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${tone.accent} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                      <Icon className="w-3.5 h-3.5 text-white" strokeWidth={2.2} />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground leading-none">{tone.label}</p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">{tone.description}</p>
                    </div>

                    {/* Selected check */}
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      >
                        <Check className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CoverLetterPage() {
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(true);
  const [selectedTone, setSelectedTone] = useState("professional");
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => { setGenerating(false); setGenerated(true); }, 2500);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold mb-1">Cover Letter Generator</h1>
        <p className="text-muted-foreground text-sm">AI-crafted, personalized cover letters in 30 seconds</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Input */}
        <div className="space-y-5">
          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <h2 className="font-semibold text-sm">Job Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label className="text-xs">Job Title</Label>
                <Input placeholder="Senior Engineer" className="h-8 text-sm" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Company</Label>
                <Input placeholder="Linear" className="h-8 text-sm" />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs">Tone</Label>
              <ToneDropdown value={selectedTone} onChange={setSelectedTone} />
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs">Job Description</Label>
              <Textarea
                placeholder="Paste the job description here. Our AI will analyze it and craft a tailored letter highlighting your most relevant experience..."
                className="resize-none h-48 text-sm"
              />
            </div>

            <Button
              onClick={handleGenerate}
              disabled={generating}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 shadow-lg shadow-indigo-500/20 gap-2"
            >
              {generating ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Generating with AI...
                </>
              ) : (
                <><Sparkles className="w-4 h-4" /> Generate Cover Letter</>
              )}
            </Button>
          </div>

          {/* Previous letters */}
          <div className="bg-card border border-border rounded-xl p-5">
            <h2 className="font-semibold text-sm mb-3">Previous Letters</h2>
            <div className="space-y-2">
              {mockCoverLetters.map((cl) => (
                <div key={cl.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer border border-border/50">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{cl.jobTitle} @ {cl.company}</p>
                    <p className="text-xs text-muted-foreground capitalize">{cl.tone} · {cl.generatedAt}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="h-7 text-xs">Load</Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Generated letter */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-semibold text-sm">Generated Letter</h2>
            {generated && (
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="h-7 text-xs gap-1" onClick={handleCopy}>
                  <Copy className="w-3 h-3" /> {copied ? "Copied!" : "Copy"}
                </Button>
                <Button variant="outline" size="sm" className="h-7 text-xs gap-1">
                  <RefreshCw className="w-3 h-3" /> Regenerate
                </Button>
                <Button variant="outline" size="sm" className="h-7 text-xs gap-1">
                  <Download className="w-3 h-3" /> Export
                </Button>
              </div>
            )}
          </div>

          <AnimatePresence mode="wait">
            {generating ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-card border border-border rounded-xl p-6 min-h-[500px] flex flex-col items-center justify-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-indigo-400 animate-pulse" />
                </div>
                <div className="text-center">
                  <p className="font-medium">AI is writing your cover letter...</p>
                  <p className="text-sm text-muted-foreground">Analyzing your resume + job description</p>
                </div>
                <div className="w-48 h-1.5 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="h-full w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full"
                  />
                </div>
              </motion.div>
            ) : generated ? (
              <motion.div
                key="letter"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
                  <Badge variant="secondary" className="text-xs bg-emerald-500/10 text-emerald-400 border-emerald-500/20">AI Generated</Badge>
                  <Badge variant="secondary" className={`text-xs capitalize border ${tones.find(t => t.id === selectedTone)?.pill ?? ""}`}>{selectedTone}</Badge>
                </div>
                <div className="p-6">
                  <Textarea
                    defaultValue={mockCoverLetters[0].content}
                    className="min-h-[460px] resize-none text-sm leading-relaxed border-0 p-0 focus-visible:ring-0 bg-transparent"
                  />
                </div>
                <div className="px-6 pb-4 flex gap-3">
                  <Button size="sm" className="gap-1.5 text-xs bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0">
                    <Download className="w-3.5 h-3.5" /> Download PDF
                  </Button>
                  <Button size="sm" variant="outline" className="gap-1.5 text-xs">
                    <Download className="w-3.5 h-3.5" /> Download DOCX
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                className="bg-card border border-border border-dashed rounded-xl min-h-[500px] flex items-center justify-center"
              >
                <div className="text-center text-muted-foreground">
                  <Sparkles className="w-10 h-10 mx-auto mb-3 opacity-30" />
                  <p className="font-medium">Your cover letter will appear here</p>
                  <p className="text-sm">Fill in the job details and click Generate</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
