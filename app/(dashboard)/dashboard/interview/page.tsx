"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, ChevronDown, ChevronRight, Sparkles, Filter, User, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockInterviewQuestions } from "@/data/mock";
import type { InterviewQuestion } from "@/types";
import { cn } from "@/lib/utils";

const difficultyColors: Record<string, string> = {
  easy: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  medium: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  hard: "bg-red-500/10 text-red-400 border-red-500/20",
};

const categoryColors: Record<string, string> = {
  behavioral: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  technical: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  situational: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  culture: "bg-pink-500/10 text-pink-400 border-pink-500/20",
};

function QuestionCard({ q }: { q: InterviewQuestion }) {
  const [expanded, setExpanded] = useState(false);
  const [generating, setGenerating] = useState(false);

  return (
    <motion.div
      layout
      className="bg-card border border-border rounded-xl overflow-hidden hover:border-border/80 hover:shadow-md transition-all"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-start gap-3 p-4 text-left hover:bg-accent/30 transition-colors"
      >
        <div className="flex-1">
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge className={cn("text-xs border capitalize", categoryColors[q.category])}>{q.category}</Badge>
            <Badge className={cn("text-xs border capitalize", difficultyColors[q.difficulty])}>{q.difficulty}</Badge>
          </div>
          <p className="text-sm font-medium leading-snug">{q.question}</p>
        </div>
        {expanded ? (
          <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
        ) : (
          <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
        )}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-4 border-t border-border/50">
              {/* AI Answer */}
              <div className="mt-4 p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="text-xs font-medium text-indigo-400">Model Answer</span>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">{q.answer}</p>
              </div>

              {/* Tips */}
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-2">💡 Tips</p>
                <ul className="space-y-1">
                  {q.tips.map((tip, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex gap-2">
                      <span className="text-indigo-400">·</span>{tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 text-xs gap-1"
                  onClick={() => { setGenerating(true); setTimeout(() => setGenerating(false), 1500); }}
                  disabled={generating}
                >
                  {generating ? (
                    <span className="w-3 h-3 border border-muted-foreground/50 border-t-foreground rounded-full animate-spin" />
                  ) : (
                    <Sparkles className="w-3 h-3" />
                  )}
                  Regenerate Answer
                </Button>
                <Button size="sm" variant="outline" className="h-7 text-xs">Mark Practiced</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function InterviewPage() {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all"
    ? mockInterviewQuestions
    : mockInterviewQuestions.filter(q => q.category === filter || q.difficulty === filter);

  return (
    <div className="max-w-5xl space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold mb-1">Interview Prep</h1>
          <p className="text-muted-foreground text-sm">AI-generated questions matched to your target roles</p>
        </div>
        <Button className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0">
          <Sparkles className="w-4 h-4" /> Generate Custom Questions
        </Button>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Questions", value: "50+", icon: MessageSquare, color: "text-indigo-400" },
          { label: "Practiced", value: "12", icon: User, color: "text-emerald-400" },
          { label: "AI Answers", value: "6", icon: Sparkles, color: "text-purple-400" },
          { label: "Readiness", value: "73%", icon: Zap, color: "text-amber-400" },
        ].map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <s.icon className={`w-4 h-4 ${s.color}`} />
              <span className="text-xs text-muted-foreground">{s.label}</span>
            </div>
            <p className={`text-2xl font-display font-bold ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      <Tabs defaultValue="all">
        <div className="flex items-center gap-3 flex-wrap">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="all" className="text-xs" onClick={() => setFilter("all")}>All Questions</TabsTrigger>
            <TabsTrigger value="behavioral" className="text-xs" onClick={() => setFilter("behavioral")}>Behavioral</TabsTrigger>
            <TabsTrigger value="technical" className="text-xs" onClick={() => setFilter("technical")}>Technical</TabsTrigger>
            <TabsTrigger value="culture" className="text-xs" onClick={() => setFilter("culture")}>Culture</TabsTrigger>
          </TabsList>

          <div className="flex gap-2 flex-wrap">
            {["easy", "medium", "hard"].map((d) => (
              <button
                key={d}
                onClick={() => setFilter(filter === d ? "all" : d)}
                className={cn(
                  "text-xs px-3 py-1 rounded-full border transition-colors capitalize",
                  filter === d ? difficultyColors[d] : "border-border text-muted-foreground hover:border-border/80"
                )}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <TabsContent value="all" className="mt-4 space-y-3">
          {filtered.map((q) => <QuestionCard key={q.id} q={q} />)}
        </TabsContent>
        <TabsContent value="behavioral" className="mt-4 space-y-3">
          {filtered.map((q) => <QuestionCard key={q.id} q={q} />)}
        </TabsContent>
        <TabsContent value="technical" className="mt-4 space-y-3">
          {filtered.map((q) => <QuestionCard key={q.id} q={q} />)}
        </TabsContent>
        <TabsContent value="culture" className="mt-4 space-y-3">
          {filtered.map((q) => <QuestionCard key={q.id} q={q} />)}
        </TabsContent>
      </Tabs>

    </div>
  );
}
