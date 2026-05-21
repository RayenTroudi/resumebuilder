"use client";

import { motion } from "framer-motion";
import { CreditCard, Download, Zap, Shield, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { mockBillingHistory, pricingPlans, mockUser } from "@/data/mock";
import { formatCurrency, formatDate } from "@/lib/utils";
import Link from "next/link";

export default function BillingPage() {
  const currentPlan = pricingPlans.find(p => p.id === mockUser.plan)!;

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold mb-1">Billing & Subscription</h1>
        <p className="text-muted-foreground text-sm">Manage your plan, payment methods, and billing history</p>
      </div>

      {/* Current Plan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="font-semibold">Current Plan</h2>
              <Badge className={`bg-gradient-to-r ${currentPlan.color} text-white border-0`}>{currentPlan.name}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">{currentPlan.description}</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-display font-bold">${currentPlan.price}</p>
            <p className="text-xs text-muted-foreground">/month</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
          {[
            { label: "Resumes", value: "Unlimited" },
            { label: "AI Tailoring", value: "Unlimited" },
            { label: "ATS Scoring", value: "Full" },
            { label: "Next billing", value: "Apr 1, 2024" },
          ].map((s) => (
            <div key={s.label} className="bg-muted/50 rounded-lg p-3">
              <p className="text-xs text-muted-foreground">{s.label}</p>
              <p className="text-sm font-medium mt-0.5">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <a href="/pricing"><Zap className="w-3.5 h-3.5 text-indigo-400" /> View Plans</a>
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-destructive text-sm">
            Cancel Subscription
          </Button>
        </div>
      </motion.div>

      {/* Plan comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <h2 className="font-semibold mb-4">Compare Plans</h2>
        <div className="grid grid-cols-3 gap-4">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`p-4 rounded-xl border transition-all ${
                plan.id === mockUser.plan
                  ? "border-indigo-500/50 bg-indigo-500/5"
                  : "border-border"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-sm">{plan.name}</span>
                {plan.id === mockUser.plan && (
                  <Badge variant="secondary" className="text-xs bg-indigo-500/10 text-indigo-400 border-indigo-500/20">Current</Badge>
                )}
              </div>
              <p className="text-2xl font-display font-bold mb-3">
                {plan.price === 0 ? "Free" : `$${plan.price}`}
                {plan.price > 0 && <span className="text-sm text-muted-foreground font-normal">/mo</span>}
              </p>
              <ul className="space-y-1.5 mb-4">
                {plan.features.slice(0, 5).map((f) => (
                  <li key={f} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              {plan.id !== mockUser.plan && (
                <Button size="sm" className="w-full text-xs h-7" variant={plan.id === "pro" ? "default" : "outline"} asChild>
                  <Link href="/pricing">Switch to {plan.name}</Link>
                </Button>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Payment method */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold">Payment Method</h2>
          <Button variant="outline" size="sm" className="h-7 text-xs">Update</Button>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border/50">
          <div className="w-10 h-7 rounded bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center">
            <span className="text-white text-xs font-bold">VISA</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Visa ending in 4242</p>
            <p className="text-xs text-muted-foreground">Expires 12/2026</p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs text-emerald-400">Default</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
          <Shield className="w-3.5 h-3.5 text-emerald-400" />
          <span>Payments secured by Stripe. We never store your card details.</span>
        </div>
      </motion.div>

      {/* Billing history */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <h2 className="font-semibold mb-4">Billing History</h2>
        <div className="space-y-0">
          {mockBillingHistory.map((bill, i) => (
            <div key={bill.id}>
              <div className="flex items-center gap-4 py-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{bill.description}</p>
                  <p className="text-xs text-muted-foreground">{formatDate(bill.date)}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{bill.amount === 0 ? "—" : formatCurrency(bill.amount)}</p>
                  <Badge
                    variant="secondary"
                    className={`text-xs ${
                      bill.status === "paid"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : "bg-red-500/10 text-red-400 border-red-500/20"
                    }`}
                  >
                    {bill.status}
                  </Badge>
                </div>
                <Button variant="ghost" size="sm" className="h-7 text-xs gap-1">
                  <Download className="w-3 h-3" /> PDF
                </Button>
              </div>
              {i < mockBillingHistory.length - 1 && <Separator className="opacity-50" />}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
