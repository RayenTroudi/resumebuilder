"use client";

import { motion } from "framer-motion";
import { Check, X, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { pricingPlans } from "@/data/mock";

export function PricingPreview() {
  return (
    <section className="py-24 sm:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Simple, transparent <span className="gradient-text">pricing.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Start free. Try Weekly for $1.9, or go Pro for $5.9/month when you're ready to land interviews.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto pt-4">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-5 sm:p-6 border flex flex-col ${
                plan.popular
                  ? "border-indigo-500/50 bg-gradient-to-b from-indigo-500/10 to-card shadow-xl shadow-indigo-500/10"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 shadow-lg px-3">
                    <Zap className="w-3 h-3 mr-1" /> Most Popular
                  </Badge>
                </div>
              )}

              <h3 className="font-display font-bold text-xl mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-display font-bold">
                  {plan.price === 0 ? "Free" : `$${plan.price}`}
                </span>
                {plan.price > 0 && (
                  <span className="text-muted-foreground text-sm">
                    /{plan.billingPeriod === "week" ? "week" : "month"}
                  </span>
                )}
              </div>

              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
                {plan.notIncluded?.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-muted-foreground/30 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground/50">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-indigo-500/20"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
                asChild
              >
                <Link href="/signup">{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/pricing" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
            View full feature comparison →
          </Link>
        </div>
      </div>
    </section>
  );
}
