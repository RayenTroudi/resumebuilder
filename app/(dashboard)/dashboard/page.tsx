"use client";

import { useState, useEffect } from "react";
import { motion, type Transition } from "framer-motion";
import Link from "next/link";
import {
  FileText, Sparkles, TrendingUp, Eye, Clock,
  ArrowRight, Plus, Zap, CheckCircle2, Target, Key,
  ChevronRight, Activity, Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockUser, mockResumes } from "@/data/mock";
import { getScoreColor, formatDate } from "@/lib/utils";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid,
} from "recharts";

// Deterministic mock data — no Math.random() to avoid SSR/client hydration mismatch
const scoreOffsets = [0, 3, 1, 5, 2, 6, 4, 7, 3, 5, 6, 4, 7, 5];
const viewCounts   = [8, 12, 6, 15, 9, 22, 11, 18, 7, 14, 20, 10, 25, 13];
const BASE_DATE = new Date("2026-05-07T12:00:00.000Z");
const chartData = Array.from({ length: 14 }, (_, i) => ({
  date: new Date(BASE_DATE.getTime() + i * 24 * 60 * 60 * 1000)
    .toISOString().split("T")[0].slice(5),
  score: Math.min(100, Math.floor(70 + i * 1.8 + scoreOffsets[i])),
  views: viewCounts[i],
}));

const recentActivity = [
  { icon: Sparkles, text: "AI tailored resume to 'Staff Engineer @ Linear'", time: "2 min ago", color: "text-violet-400", bg: "bg-violet-500/10" },
  { icon: Target,   text: "ATS score improved from 74% → 91%",              time: "2 min ago", color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { icon: Key,      text: "Found 4 missing keywords in job description",      time: "1 hr ago",  color: "text-indigo-400",  bg: "bg-indigo-500/10" },
  { icon: FileText, text: "New resume created: ML Engineer (draft)",          time: "3 hrs ago", color: "text-sky-400",     bg: "bg-sky-500/10" },
  { icon: CheckCircle2, text: "PDF exported: Senior_Engineer_Resume.pdf",    time: "1 day ago", color: "text-emerald-400", bg: "bg-emerald-500/10" },
];

const stats = [
  {
    label: "ATS Score",
    value: "91%",
    delta: "+17%",
    deltaDir: "up",
    icon: Target,
    gradient: "from-emerald-500 to-teal-500",
    textColor: "text-emerald-400",
    glowColor: "shadow-emerald-500/20",
    bgColor: "bg-emerald-500/8",
  },
  {
    label: "Keywords",
    value: "34/38",
    delta: "4 missing",
    deltaDir: "warn",
    icon: Key,
    gradient: "from-indigo-500 to-violet-500",
    textColor: "text-indigo-400",
    glowColor: "shadow-indigo-500/20",
    bgColor: "bg-indigo-500/8",
  },
  {
    label: "Resume Views",
    value: "143",
    delta: "by recruiters",
    deltaDir: "neutral",
    icon: Eye,
    gradient: "from-sky-500 to-indigo-500",
    textColor: "text-sky-400",
    glowColor: "shadow-sky-500/20",
    bgColor: "bg-sky-500/8",
  },
  {
    label: "AI Suggestions",
    value: "3",
    delta: "ready to apply",
    deltaDir: "up",
    icon: Sparkles,
    gradient: "from-violet-500 to-pink-500",
    textColor: "text-violet-400",
    glowColor: "shadow-violet-500/20",
    bgColor: "bg-violet-500/8",
  },
];

const missingKeywords = ["TypeScript", "AWS", "CI/CD", "Terraform"];

const quickActions = [
  { label: "New Resume",      href: "/dashboard/resume",       icon: FileText, accent: "indigo" },
  { label: "Tailor to Job",   href: "/dashboard/resume",       icon: Sparkles, accent: "violet" },
  { label: "ATS Score",       href: "/dashboard/resume",       icon: Target,   accent: "emerald" },
  { label: "Export PDF",      href: "/dashboard/resume",       icon: Activity, accent: "sky" },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.38, delay } as Transition,
});

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border/70 rounded-xl px-3 py-2 shadow-xl text-xs">
      <p className="text-muted-foreground mb-1 font-medium">{label}</p>
      {payload.map((p: any) => (
        <p key={p.name} className="font-semibold" style={{ color: p.color }}>
          {p.name}: {p.value}%
        </p>
      ))}
    </div>
  );
};

export default function DashboardPage() {
  const atsScore = 91;
  const keywordsMatched = 34;
  const keywordsTotal = 38;
  const keywordsPercent = Math.round((keywordsMatched / keywordsTotal) * 100);
  const firstName = mockUser.name.split(" ")[0];

  // Computed client-side only to avoid SSR/client time-zone mismatch
  const [greeting, setGreeting] = useState("Good morning");
  const [dateLabel, setDateLabel] = useState("");
  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    setGreeting(hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening");
    setDateLabel(now.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }));
  }, []);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">

      {/* Welcome Header */}
      <motion.div {...fade(0)} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-1.5 h-5 rounded-full bg-gradient-to-b from-indigo-500 to-violet-600" />
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              {dateLabel}
            </p>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
            {greeting}, {firstName}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Your top resume is scoring{" "}
            <span className="text-emerald-400 font-semibold">{atsScore}% ATS</span>
            {" "}— 3 AI improvements ready
          </p>
        </div>
        <Button
          size="sm"
          className="h-9 text-sm bg-gradient-to-r from-indigo-500 to-violet-600 text-white border-0 shadow-md shadow-indigo-500/20 flex items-center gap-2 hover:opacity-90 transition-opacity self-start sm:self-auto"
          asChild
        >
          <Link href="/dashboard/resume">
            <Plus className="w-4 h-4" />
            New Resume
          </Link>
        </Button>
      </motion.div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            {...fade(0.06 + i * 0.07)}
            className={`relative group overflow-hidden rounded-2xl border border-border/60 bg-card p-4 hover:border-border transition-all duration-200 hover:shadow-lg ${stat.glowColor}`}
          >
            {/* Subtle bg accent */}
            <div className={`absolute top-0 right-0 w-20 h-20 rounded-full ${stat.bgColor} blur-2xl -mr-6 -mt-6 pointer-events-none`} />
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
                <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-md`}>
                  <stat.icon className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <p className={`text-2xl sm:text-3xl font-display font-bold tabular-nums ${stat.textColor}`}>
                {stat.value}
              </p>
              <div className="flex items-center gap-1 mt-1.5">
                {stat.deltaDir === "up" && <TrendingUp className="w-3 h-3 text-emerald-400" />}
                <p className={`text-xs ${stat.deltaDir === "up" ? "text-emerald-400" : stat.deltaDir === "warn" ? "text-amber-400" : "text-muted-foreground"}`}>
                  {stat.delta}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Grid: Chart + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
        {/* ATS Progress Chart */}
        <motion.div {...fade(0.22)} className="lg:col-span-2 rounded-2xl border border-border/60 bg-card p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-display font-semibold text-sm text-foreground">ATS Score Progress</h2>
              <p className="text-xs text-muted-foreground mt-0.5">14-day trajectory</p>
            </div>
            <Badge className="text-[11px] px-2.5 h-6 bg-emerald-500/10 text-emerald-400 border-emerald-500/20 font-semibold">
              ↑ 17% this week
            </Badge>
          </div>
          <ResponsiveContainer width="100%" height={168}>
            <AreaChart data={chartData} margin={{ top: 4, right: 4, left: -24, bottom: 0 }}>
              <defs>
                <linearGradient id="atsGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#10b981" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="2 4" stroke="var(--border)" strokeOpacity={0.6} />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                axisLine={false}
                tickLine={false}
                domain={[60, 100]}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: "var(--border)", strokeWidth: 1, strokeDasharray: "4 4" }} />
              <Area
                type="monotone"
                dataKey="score"
                stroke="#10b981"
                strokeWidth={2}
                fill="url(#atsGrad)"
                name="ATS Score"
                dot={false}
                activeDot={{ r: 4, fill: "#10b981", strokeWidth: 2, stroke: "var(--card)" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Recent Activity */}
        <motion.div {...fade(0.28)} className="rounded-2xl border border-border/60 bg-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-semibold text-sm">Recent Activity</h2>
            <Activity className="w-4 h-4 text-muted-foreground/50" />
          </div>
          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.3 }}
                className="flex gap-3 items-start group"
              >
                <div className={`w-6 h-6 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <item.icon className={`w-3 h-3 ${item.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-foreground/75 leading-snug">{item.text}</p>
                  <p className="text-[11px] text-muted-foreground/50 flex items-center gap-1 mt-0.5">
                    <Clock className="w-2.5 h-2.5" />
                    {item.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Grid: Resumes + Keyword + Plan */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
        {/* Your Resumes */}
        <motion.div {...fade(0.32)} className="rounded-2xl border border-border/60 bg-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-semibold text-sm">Your Resumes</h2>
            <Button size="sm" variant="outline" className="h-7 text-xs gap-1.5 border-border/70" asChild>
              <Link href="/dashboard/resume">
                <Plus className="w-3 h-3" /> New
              </Link>
            </Button>
          </div>
          <div className="space-y-2">
            {mockResumes.map((resume, i) => (
              <motion.div
                key={resume.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.07 }}
              >
                <Link href="/dashboard/resume">
                  <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent/50 transition-all duration-150 group border border-transparent hover:border-border/40">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate text-foreground/90">{resume.title}</p>
                      <p className="text-xs text-muted-foreground">Modified {formatDate(resume.lastModified)}</p>
                    </div>
                    <div className="text-right flex-shrink-0 flex items-center gap-2">
                      <div>
                        <p className={`text-sm font-bold tabular-nums ${getScoreColor(resume.atsScore)}`}>
                          {resume.atsScore}%
                        </p>
                        <p className="text-[10px] text-muted-foreground/60">ATS</p>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-muted-foreground transition-colors" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Keywords + Plan */}
        <motion.div {...fade(0.36)} className="space-y-4">
          {/* Keyword Match */}
          <div className="rounded-2xl border border-border/60 bg-card p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-display font-semibold text-sm">Keyword Match</h2>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {keywordsPercent}% matched
              </span>
            </div>

            {/* Progress bar */}
            <div className="h-2 bg-muted/60 rounded-full overflow-hidden mb-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${keywordsPercent}%` }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
              />
            </div>

            <p className="text-xs text-muted-foreground mb-3">
              {keywordsMatched} of {keywordsTotal} keywords found · 4 missing
            </p>

            {/* Missing keywords */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {missingKeywords.map((kw) => (
                <span
                  key={kw}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-rose-500/8 text-rose-400 border border-rose-500/20"
                >
                  + {kw}
                </span>
              ))}
            </div>

            <Button
              size="sm"
              className="w-full h-8 text-xs bg-gradient-to-r from-indigo-500 to-violet-600 text-white border-0 shadow-sm shadow-indigo-500/20 hover:opacity-90 transition-opacity"
              asChild
            >
              <Link href="/dashboard/resume">
                <Sparkles className="w-3 h-3 mr-1.5" />
                Add with AI
              </Link>
            </Button>
          </div>

          {/* Plan Card */}
          <div className="rounded-2xl border border-border/60 bg-card p-5">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-indigo-400" />
                <h2 className="font-display font-semibold text-sm">Your Plan</h2>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-wide">
                {mockUser.plan === "pro" ? "Pro" : "Free"}
              </span>
            </div>
            {mockUser.plan !== "pro" ? (
              <>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  Upgrade to Pro for full ATS scoring, AI tailoring, and unlimited resumes.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full h-8 text-xs border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/8 transition-colors"
                  asChild
                >
                  <Link href="/pricing">
                    Upgrade to Pro — $5.9/mo
                    <ArrowRight className="w-3 h-3 ml-1.5" />
                  </Link>
                </Button>
              </>
            ) : (
              <p className="text-xs text-muted-foreground leading-relaxed">
                Full access to all Pro features: AI tailoring, ATS scoring, unlimited resumes, and priority support.
              </p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div {...fade(0.42)} className="rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/5 via-violet-500/5 to-pink-500/5 p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-sm">
            <Zap className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
          </div>
          <h2 className="font-display font-semibold text-sm">Quick Actions</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {quickActions.map((action) => (
            <Button
              key={action.label}
              variant="outline"
              className="h-auto py-3.5 flex-col gap-2 text-xs border-border/60 hover:border-border hover:bg-accent/50 transition-all duration-150 group"
              asChild
            >
              <Link href={action.href}>
                <action.icon className="w-4.5 h-4.5 text-indigo-400 group-hover:scale-110 transition-transform duration-150" />
                <span className="text-foreground/80 font-medium">{action.label}</span>
              </Link>
            </Button>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
