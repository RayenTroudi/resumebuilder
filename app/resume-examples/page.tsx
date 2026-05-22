"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, X, CheckCircle, Sparkles, ArrowRight, LayoutTemplate } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/features/landing/site-footer";
import {
  TemplateClassic,
  TemplateSidebar,
  TemplateMinimal,
} from "@/features/resume/resume-templates";
import { RESUME_EXAMPLES, SECTORS, type ResumeExample } from "@/features/resume/resume-examples-data";

const SLUG_MAP: Record<string, string> = {
  "eng-software": "software-engineer",
  "eng-civil": "civil-engineer",
  "eng-mechanical": "mechanical-engineer",
  "eng-electrical": "electrical-engineer",
  "edu-teacher": "teacher",
  "edu-admin": "university-administrator",
  "edu-principal": "school-principal",
  "edu-instructional": "instructional-designer",
  "gov-policy": "government-policy-analyst",
  "gov-law-enforcement": "law-enforcement-officer",
  "gov-public-health": "public-health-officer",
  "health-nurse": "registered-nurse",
  "hc-physicaltherapist": "physical-therapist",
  "hc-pharmacist": "clinical-pharmacist",
  "legal-attorney": "attorney",
  "legal-paralegal": "paralegal",
  "legal-corporate-counsel": "corporate-counsel",
  "retail-manager": "retail-manager",
  "retail-buyer": "buying-merchandiser",
  "retail-store-manager": "store-manager",
  "retail-customer-service": "customer-service-representative",
  "maint-tech": "maintenance-technician",
  "maint-hvac": "hvac-technician",
  "maint-electrician": "electrician",
  "fin-analyst": "financial-analyst",
  "fin-investment-banker": "investment-banking-analyst",
  "fin-cfo": "chief-financial-officer",
  "mkt-manager": "marketing-manager",
  "mkt-content": "content-strategist",
  "mkt-seo": "seo-specialist",
  "it-support": "it-support-specialist",
  "it-data-engineer": "data-engineer",
  "it-cybersecurity": "cybersecurity-analyst",
  "it-product-manager": "product-manager",
  "con-pm": "construction-project-manager",
  "const-foreman": "construction-foreman",
  "const-architect": "licensed-architect",
  "social-worker": "social-worker",
  "ss-counselor": "licensed-counselor",
  "acc-cpa": "accountant",
  "acc-audit": "audit-manager",
  "acc-tax": "tax-specialist",
};

function getSlug(id: string) {
  return SLUG_MAP[id] ?? id;
}

function ResumeThumbnail({ example }: { example: ResumeExample }) {
  const atsColor =
    example.atsScore >= 95 ? "#10b981" : example.atsScore >= 90 ? "#3b82f6" : "#f59e0b";
  const slug = getSlug(example.id);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.22 }}
      className="group relative cursor-pointer"
    >
      <Link href={`/resume-examples/${slug}`}>
        <div className="relative rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300 border border-border/40 bg-white">
          <div className="relative bg-white overflow-hidden" style={{ paddingBottom: "141%" }}>
            <div className="absolute inset-0" style={{ transformOrigin: "top left" }}>
              <div style={{ width: "640px", height: "904px", transform: "scale(0.375)", transformOrigin: "top left" }}>
                {example.template === "classic" && <TemplateClassic data={example.data} accent={example.accent} />}
                {example.template === "sidebar" && <TemplateSidebar data={example.data} accent={example.accent} />}
                {example.template === "minimal" && <TemplateMinimal data={example.data} accent={example.accent} />}
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-colors duration-300 rounded-lg flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
            <button
              className="px-4 py-2 rounded-full text-xs font-semibold text-white shadow-lg"
              style={{ background: example.accent }}
            >
              View Example
            </button>
          </div>

          <div
            className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold text-white shadow-sm"
            style={{ background: atsColor }}
          >
            <CheckCircle className="w-2.5 h-2.5" />
            {example.atsScore}%
          </div>
        </div>

        <div className="mt-2.5 px-0.5">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">{example.role}</p>
              <p className="text-xs text-muted-foreground">{example.sector}</p>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <span className="text-xs font-bold tabular-nums" style={{ color: atsColor }}>{example.atsScore}%</span>
              <span className="text-[10px] text-muted-foreground">ATS</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ResumeExamplesPublicPage() {
  const [activeSector, setActiveSector] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = RESUME_EXAMPLES.filter((ex) => {
    const matchSector = activeSector === "All" || ex.sector === activeSector;
    const matchSearch =
      !search ||
      ex.role.toLowerCase().includes(search.toLowerCase()) ||
      ex.sector.toLowerCase().includes(search.toLowerCase());
    return matchSector && matchSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* hero */}
        <div className="bg-gradient-to-b from-indigo-50/50 to-background dark:from-indigo-950/20 border-b border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Expert-written & ATS-verified
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Resume Examples for Every Career
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Browse {RESUME_EXAMPLES.length}+ professionally written resume examples across{" "}
              {SECTORS.length - 1} industries. Each scores 89%+ on major ATS systems.
            </p>

            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by job title or industry…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-10 py-3 text-sm rounded-xl border border-border/60 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all shadow-sm"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* sector filters */}
          <div className="flex items-center gap-2 mb-8 overflow-x-auto scrollbar-hide pb-1">
            {SECTORS.map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveSector(sector)}
                className={cn(
                  "whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all flex-shrink-0 border",
                  activeSector === sector
                    ? "bg-primary text-primary-foreground border-primary shadow-sm shadow-primary/20"
                    : "bg-card/60 border-border/60 text-muted-foreground hover:text-foreground hover:border-border"
                )}
              >
                {sector}
              </button>
            ))}
          </div>

          {/* count + info bar */}
          <div className="flex items-center justify-between mb-6 gap-4">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filtered.length}</span> example{filtered.length !== 1 ? "s" : ""}
              {activeSector !== "All" && <> in <span className="font-semibold text-foreground">{activeSector}</span></>}
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <LayoutTemplate className="w-3.5 h-3.5" />
              3 template layouts
            </div>
          </div>

          {/* grid */}
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
            <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-8">
              <AnimatePresence mode="popLayout">
                {filtered.map((example) => (
                  <ResumeThumbnail key={example.id} example={example} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Ready to build yours?</h2>
            <p className="text-muted-foreground mb-6">Use any of these examples as a starting point. Our AI will tailor it to your experience.</p>
            <Link href="/signup">
              <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-indigo-500/20 gap-2">
                Create my resume
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
