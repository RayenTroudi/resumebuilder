"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Files,
  Target,
  Settings,
  CreditCard,
  ChevronLeft,
  ChevronRight,
  Zap,
  Shield,
  Sparkles,
  BookOpen,
  X,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useSessionUser } from "@/components/providers/session-user-provider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard",       href: "/dashboard",                  badge: undefined, group: "main" },
  { icon: Files,           label: "My Resumes",      href: "/dashboard/resumes",           badge: undefined, group: "main" },
  { icon: BookOpen,        label: "Resume Examples", href: "/dashboard/resume/examples",   badge: undefined, group: "main" },
  { icon: MessageSquare,   label: "Cover Letter",    href: "/dashboard/cover-letter",      badge: undefined, group: "tools" },
  { icon: Target,          label: "Interview Prep",  href: "/dashboard/interview",         badge: undefined, group: "tools" },
];

const bottomItems = [
  { icon: CreditCard, label: "Billing",  href: "/dashboard/billing" },
  { icon: Settings,   label: "Settings", href: "/dashboard/settings" },
  { icon: Shield,     label: "Admin",    href: "/admin", adminOnly: true },
];

const groups = [
  { key: "main",     label: "Overview" },
  { key: "tools",    label: "Tools" },
];

interface SidebarProps {
  onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const user = useSessionUser();
  const isAdmin = user.role === "ADMIN";
  const creditsTotal = user.aiCreditsTotal || 1;
  const creditPercent = Math.min(100, (user.aiCreditsUsed / creditsTotal) * 100);
  const creditsRemaining = Math.max(0, user.aiCreditsTotal - user.aiCreditsUsed);
  const isMobile = !!onClose;

  return (
    <motion.aside
      animate={{ width: collapsed && !isMobile ? 72 : 256 }}
      transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
      className="relative flex flex-col h-full bg-white dark:bg-[oklch(0.11_0.025_264)] border-r border-border/60 shadow-sm overflow-visible"
      style={{ minWidth: collapsed && !isMobile ? 72 : 256 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-border/40">
        <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/25">
          <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
          <div className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
        </div>
        <AnimatePresence>
          {(!collapsed || isMobile) && (
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.18 }}
              className="flex-1 min-w-0"
            >
              <span className="font-display font-bold text-sm whitespace-nowrap overflow-hidden tracking-tight">
                CareerForge <span className="gradient-text">AI</span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {isMobile && (
          <button
            onClick={onClose}
            className="ml-auto w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Nav Groups */}
      <nav className="flex-1 px-2 py-3 space-y-4 overflow-y-auto scrollbar-hide">
        {groups.map((group) => {
          const items = navItems.filter((n) => n.group === group.key);
          return (
            <div key={group.key}>
              <AnimatePresence>
                {(!collapsed || isMobile) && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="px-3 mb-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 select-none"
                  >
                    {group.label}
                  </motion.p>
                )}
              </AnimatePresence>
              <div className="space-y-0.5">
                {items.map((item) => {
                  const active = pathname === item.href || pathname.startsWith(item.href + "/");
                  return (
                    <Link
                      key={`${item.href}-${item.label}`}
                      href={item.href}
                      onClick={isMobile ? onClose : undefined}
                    >
                      <div
                        className={cn(
                          "relative flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-150 group",
                          active
                            ? "text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
                        )}
                      >
                        {active && (
                          <motion.div
                            layoutId="sidebar-pill"
                            className="absolute inset-0 rounded-lg bg-primary/8 border border-primary/15"
                            transition={{ type: "spring", bounce: 0.15, duration: 0.35 }}
                          />
                        )}
                        <item.icon
                          className={cn(
                            "w-4 h-4 flex-shrink-0 transition-colors",
                            active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                          )}
                          strokeWidth={active ? 2.5 : 2}
                        />
                        <AnimatePresence>
                          {(!collapsed || isMobile) && (
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.15 }}
                              className="text-sm font-medium whitespace-nowrap overflow-hidden flex-1 relative z-10"
                            >
                              {item.label}
                            </motion.span>
                          )}
                        </AnimatePresence>
                        {item.badge && (!collapsed || isMobile) && (
                          <span className="relative z-10 text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-400 border border-indigo-500/20 leading-none">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>

      {/* AI Credits Gauge */}
      <AnimatePresence>
        {(!collapsed || isMobile) && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="mx-2 mb-2 p-3 rounded-xl border border-border/50 bg-gradient-to-br from-indigo-500/5 to-purple-600/5"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-xs font-semibold text-foreground/80">AI Credits</span>
              </div>
              <span className="text-[11px] text-muted-foreground tabular-nums">
                {user.aiCreditsUsed}/{user.aiCreditsTotal}
              </span>
            </div>
            <div className="h-1.5 bg-muted/60 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${creditPercent}%` }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
              />
            </div>
            <p className="text-[11px] text-muted-foreground mt-1.5">
              {creditsRemaining} credits remaining
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Nav */}
      <div className="px-2 py-2 border-t border-border/40 space-y-0.5">
        {bottomItems.map((item) => {
          if (item.adminOnly && !isAdmin) return null;
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} onClick={isMobile ? onClose : undefined}>
              <div
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-150",
                  active
                    ? "bg-primary/8 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
                )}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" strokeWidth={active ? 2.5 : 2} />
                <AnimatePresence>
                  {(!collapsed || isMobile) && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-sm font-medium whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Collapse Toggle — desktop only */}
      {!isMobile && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-[4.5rem] w-6 h-6 rounded-full border border-border bg-card shadow-sm hover:bg-accent z-20 transition-transform hover:scale-110"
        >
          {collapsed ? (
            <ChevronRight className="w-3 h-3" />
          ) : (
            <ChevronLeft className="w-3 h-3" />
          )}
        </Button>
      )}
    </motion.aside>
  );
}
