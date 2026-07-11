"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText, Plus, Trash2, Pencil, Eye, Target, Sparkles, Loader2, X, Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn, getScoreColor } from "@/lib/utils";
import {
  createResume, deleteResume, renameResume, type ResumeListItem,
} from "@/lib/actions/resume";

function formatUpdated(d: Date | string) {
  const date = typeof d === "string" ? new Date(d) : d;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function ResumesClient({ resumes }: { resumes: ResumeListItem[] }) {
  const router = useRouter();
  const [creating, startCreate] = useTransition();
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");
  const [pendingId, setPendingId] = useState<string | null>(null);

  const handleCreate = () => {
    setError("");
    startCreate(async () => {
      const res = await createResume();
      if (res.ok) router.push(`/dashboard/resume/${res.data.id}`);
      else setError(res.error);
    });
  };

  const handleDelete = (id: string) => {
    if (!confirm("Delete this resume? This cannot be undone.")) return;
    setPendingId(id);
    setError("");
    startCreate(async () => {
      const res = await deleteResume(id);
      if (!res.ok) setError(res.error);
      setPendingId(null);
      router.refresh();
    });
  };

  const handleRename = (id: string) => {
    const title = editValue.trim();
    if (!title) return;
    setEditingId(null);
    startCreate(async () => {
      const res = await renameResume(id, title);
      if (!res.ok) setError(res.error);
      router.refresh();
    });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight">My Resumes</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {resumes.length === 0
              ? "Create your first ATS-optimized resume."
              : `${resumes.length} resume${resumes.length === 1 ? "" : "s"} · stored securely in your account`}
          </p>
        </div>
        <Button
          onClick={handleCreate}
          disabled={creating}
          className="h-9 text-sm bg-gradient-to-r from-indigo-500 to-violet-600 text-white border-0 shadow-md shadow-indigo-500/20 gap-2 hover:opacity-90 self-start sm:self-auto"
        >
          {creating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
          New Resume
        </Button>
      </div>

      {error && (
        <p className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      {/* Empty state */}
      {resumes.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border/70 bg-card/40 p-12 text-center">
          <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-4">
            <FileText className="w-6 h-6 text-indigo-400" />
          </div>
          <h2 className="font-display font-semibold text-lg">No resumes yet</h2>
          <p className="text-sm text-muted-foreground mt-1 max-w-sm mx-auto">
            Start building your first resume and let AI optimize it to beat applicant tracking systems.
          </p>
          <Button
            onClick={handleCreate}
            disabled={creating}
            className="mt-5 h-9 text-sm bg-gradient-to-r from-indigo-500 to-violet-600 text-white border-0 gap-2"
          >
            {creating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            Create your first resume
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resumes.map((resume, i) => (
            <motion.div
              key={resume.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className={cn(
                "group relative rounded-2xl border border-border/60 bg-card p-4 hover:border-border hover:shadow-lg transition-all",
                pendingId === resume.id && "opacity-50 pointer-events-none"
              )}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${resume.accentColor}18` }}
                >
                  <FileText className="w-5 h-5" style={{ color: resume.accentColor }} />
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    aria-label="Rename"
                    onClick={() => { setEditingId(resume.id); setEditValue(resume.title); }}
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                  </button>
                  <button
                    aria-label="Delete"
                    onClick={() => handleDelete(resume.id)}
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {editingId === resume.id ? (
                <div className="flex items-center gap-1.5 mb-2">
                  <Input
                    autoFocus
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleRename(resume.id);
                      if (e.key === "Escape") setEditingId(null);
                    }}
                    className="h-8 text-sm"
                  />
                  <button
                    onClick={() => handleRename(resume.id)}
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-emerald-500 hover:bg-emerald-500/10"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-accent"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <Link href={`/dashboard/resume/${resume.id}`}>
                  <h3 className="font-semibold text-sm truncate hover:text-primary transition-colors">
                    {resume.title}
                  </h3>
                </Link>
              )}

              <p className="text-xs text-muted-foreground capitalize mb-3">
                {resume.template} · updated {formatUpdated(resume.updatedAt)}
              </p>

              <div className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1">
                  <Target className="w-3.5 h-3.5 text-emerald-400" />
                  <span className={cn("font-bold tabular-nums", getScoreColor(resume.atsScore))}>
                    {resume.atsScore}%
                  </span>
                  <span className="text-muted-foreground">ATS</span>
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Eye className="w-3.5 h-3.5" />
                  {resume.views}
                </span>
              </div>

              <Button
                asChild
                size="sm"
                variant="outline"
                className="w-full mt-4 h-8 text-xs gap-1.5 border-border/70"
              >
                <Link href={`/dashboard/resume/${resume.id}`}>Open editor</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
