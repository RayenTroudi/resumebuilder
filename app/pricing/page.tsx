"use client";

import { motion } from "framer-motion";
import { Check, X, Zap } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/features/landing/site-footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { pricingPlans, faqs } from "@/data/mock";
import Link from "next/link";
import { FAQ } from "@/features/landing/faq";

const featureRows = [
  { label: "Resumes", free: "1", pro: "Unlimited" },
  { label: "ATS Scan Preview", free: true, pro: true },
  { label: "Full ATS Scoring", free: false, pro: true },
  { label: "AI Tailoring", free: false, pro: true },
  { label: "Keyword Optimization", free: false, pro: true },
  { label: "Recruiter Insights", free: false, pro: true },
  { label: "PDF Export", free: "Limited", pro: "Unlimited" },
  { label: "Templates", free: "3", pro: "All" },
  { label: "One-Click AI Improvements", free: false, pro: true },
  { label: "ATS Parser Simulation", free: false, pro: true },
  { label: "Priority Support", free: false, pro: true },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
            <Badge variant="secondary" className="mb-4 border border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
              Simple, transparent pricing
            </Badge>
            <h1 className="font-display text-5xl font-bold tracking-tight mb-4">
              Three plans.
              <br /><span className="gradient-text">Zero confusion.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Start free. Try Weekly for $1.9, or unlock full ATS power with Pro at $5.9/month.
            </p>
          </motion.div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl p-7 border flex flex-col ${
                  plan.popular
                    ? "border-indigo-500/50 bg-gradient-to-b from-indigo-500/10 to-card shadow-xl shadow-indigo-500/10"
                    : "border-border bg-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 shadow-lg px-4">
                      <Zap className="w-3 h-3 mr-1" /> Most Popular
                    </Badge>
                  </div>
                )}
                <h2 className="font-display text-2xl font-bold mb-1">{plan.name}</h2>
                <p className="text-sm text-muted-foreground mb-5">{plan.description}</p>
                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-display font-bold">
                      {plan.price === 0 ? "Free" : `$${plan.price}`}
                    </span>
                    {plan.price > 0 && (
                      <span className="text-muted-foreground mb-2">
                        /{plan.billingPeriod === "week" ? "week" : "month"}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </li>
                  ))}
                  {plan.notIncluded?.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-muted-foreground/30 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground/40">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className={`w-full ${plan.popular ? "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-indigo-500/20" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href="/signup">{plan.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Feature comparison table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-display text-2xl font-bold text-center mb-8">Full Feature Comparison</h2>
            <div className="rounded-2xl border border-border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-5 py-4 text-sm font-medium text-muted-foreground">Feature</th>
                    <th className="px-5 py-4 text-center">
                      <span className="text-sm font-semibold">Free</span>
                    </th>
                    <th className="px-5 py-4 text-center">
                      <span className="text-sm font-semibold text-indigo-400">Pro</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {featureRows.map((row, i) => (
                    <tr key={row.label} className={`border-b border-border/50 last:border-0 ${i % 2 === 0 ? "bg-transparent" : "bg-muted/10"}`}>
                      <td className="px-5 py-3 text-sm text-muted-foreground">{row.label}</td>
                      {(["free", "pro"] as const).map((plan) => {
                        const val = row[plan as keyof typeof row];
                        return (
                          <td key={plan} className="px-5 py-3 text-center">
                            {typeof val === "boolean" ? (
                              val ? (
                                <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                              ) : (
                                <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />
                              )
                            ) : (
                              <span className="text-sm font-medium">{val}</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <FAQ />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
