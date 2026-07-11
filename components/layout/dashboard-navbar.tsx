"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell, Moon, Sun, Search, Plus, CheckCircle2,
  Info, AlertTriangle, Sparkles, Menu, X,
} from "lucide-react";
import { useTheme } from "next-themes";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { mockNotifications } from "@/data/mock";
import { useSessionUser } from "@/components/providers/session-user-provider";
import { cn } from "@/lib/utils";
import Link from "next/link";

const notifIcons = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  ai: Sparkles,
};

const notifColors = {
  info: "text-blue-400",
  success: "text-emerald-400",
  warning: "text-amber-400",
  ai: "text-purple-400",
};

const notifBg = {
  info: "bg-blue-500/10",
  success: "bg-emerald-500/10",
  warning: "bg-amber-500/10",
  ai: "bg-purple-500/10",
};

interface DashboardNavbarProps {
  title?: string;
  onMenuClick?: () => void;
}

export function DashboardNavbar({ title, onMenuClick }: DashboardNavbarProps) {
  const { theme, setTheme } = useTheme();
  const user = useSessionUser();
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [signingOut, setSigningOut] = useState(false);
  const unreadCount = mockNotifications.filter((n) => !n.read).length;
  const profileRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  const displayName = user.name?.trim() || user.email.split("@")[0];
  const initials =
    displayName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "U";
  const planLabel = user.plan.charAt(0) + user.plan.slice(1).toLowerCase();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-14 border-b border-border/50 flex items-center px-3 sm:px-5 gap-3 bg-background/95 backdrop-blur-md sticky top-0 z-30 shrink-0">
      {/* Mobile menu button */}
      <button
        onClick={onMenuClick}
        className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors flex-shrink-0"
        aria-label="Open menu"
      >
        <Menu className="w-4.5 h-4.5" />
      </button>

      {/* Page title — desktop only */}
      {title && (
        <h1 className="text-sm font-semibold font-display mr-2 hidden sm:block text-foreground/90">
          {title}
        </h1>
      )}

      {/* Search */}
      <div className={cn(
        "relative transition-all duration-300 hidden sm:block",
        searchFocused ? "flex-1 max-w-sm" : "w-44 lg:w-64"
      )}>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
        <Input
          placeholder="Search anything..."
          className="pl-9 h-8 text-sm bg-muted/40 border-transparent focus:border-border/80 focus:bg-background transition-all rounded-lg"
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
        />
      </div>

      <div className="ml-auto flex items-center gap-1">
        {/* Quick Create */}
        <Button
          size="sm"
          className="h-8 text-xs bg-gradient-to-r from-indigo-500 to-violet-600 text-white border-0 shadow-sm shadow-indigo-500/20 hidden sm:flex gap-1.5 hover:opacity-90 transition-opacity"
          asChild
        >
          <Link href="/dashboard/resume">
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden md:inline">New Resume</span>
            <span className="md:hidden">New</span>
          </Link>
        </Button>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground hover:text-foreground"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            {theme === "dark" ? (
              <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Sun className="w-4 h-4" />
              </motion.div>
            ) : (
              <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Moon className="w-4 h-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>

        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 relative text-muted-foreground hover:text-foreground"
            onClick={() => { setNotifOpen(!notifOpen); setProfileOpen(false); }}
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full ring-2 ring-background"
              />
            )}
          </Button>

          <AnimatePresence>
            {notifOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute right-0 top-11 w-[340px] max-w-[calc(100vw-1rem)] bg-white dark:bg-zinc-900 border border-border/70 rounded-xl shadow-2xl shadow-black/20 overflow-hidden z-50"
                >
                  <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
                    <span className="text-sm font-semibold">Notifications</span>
                    <div className="flex items-center gap-2">
                      {unreadCount > 0 && (
                        <Badge variant="secondary" className="text-[11px] px-2 h-5 bg-indigo-500/10 text-indigo-400 border-indigo-500/20">
                          {unreadCount} new
                        </Badge>
                      )}
                      <button
                        onClick={() => setNotifOpen(false)}
                        className="w-5 h-5 flex items-center justify-center rounded text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  <div className="max-h-[360px] overflow-y-auto divide-y divide-border/30">
                    {mockNotifications.map((notif) => {
                      const Icon = notifIcons[notif.type];
                      return (
                        <div
                          key={notif.id}
                          className={cn(
                            "flex gap-3 px-4 py-3 hover:bg-accent/40 transition-colors cursor-pointer",
                            !notif.read && "bg-accent/20"
                          )}
                        >
                          <div className={cn("w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5", notifBg[notif.type])}>
                            <Icon className={cn("w-3.5 h-3.5", notifColors[notif.type])} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-foreground leading-snug">{notif.title}</p>
                            <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{notif.message}</p>
                            <p className="text-[11px] text-muted-foreground/50 mt-1">{notif.time}</p>
                          </div>
                          {!notif.read && (
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Profile */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => { setProfileOpen(!profileOpen); setNotifOpen(false); }}
            className="flex items-center gap-2 hover:bg-accent/60 rounded-lg px-2 py-1.5 transition-colors"
          >
            <Avatar className="w-7 h-7 ring-2 ring-border">
              <AvatarImage src={user.image ?? undefined} alt={displayName} />
              <AvatarFallback className="text-[11px] font-bold bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="hidden md:block text-left">
              <p className="text-xs font-semibold leading-none text-foreground/90">{displayName}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{planLabel} plan</p>
            </div>
          </button>

          <AnimatePresence>
            {profileOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute right-0 top-11 w-56 bg-white dark:bg-zinc-900 border border-border/70 rounded-xl shadow-2xl shadow-black/20 overflow-hidden z-50"
                >
                  <div className="px-4 py-3 border-b border-border/50 bg-gradient-to-br from-indigo-500/5 to-violet-500/5">
                    <p className="text-sm font-semibold text-foreground">{displayName}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{user.email}</p>
                    <span className="inline-flex items-center gap-1 mt-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-wide">
                      {planLabel} plan
                    </span>
                  </div>
                  <div className="p-1.5">
                    {[
                      { label: "Dashboard",  href: "/dashboard" },
                      { label: "Settings",   href: "/dashboard/settings" },
                      { label: "Billing",    href: "/dashboard/billing" },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setProfileOpen(false)}
                        className="block px-3 py-2 text-sm rounded-lg hover:bg-accent/70 transition-colors text-foreground/80 hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className="border-t border-border/50 mt-1 pt-1">
                      <button
                        onClick={() => {
                          setSigningOut(true);
                          void signOut({ callbackUrl: "/login" });
                        }}
                        disabled={signingOut}
                        className="w-full text-left px-3 py-2 text-sm text-destructive hover:bg-destructive/8 rounded-lg transition-colors disabled:opacity-60"
                      >
                        {signingOut ? "Signing out…" : "Sign out"}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
