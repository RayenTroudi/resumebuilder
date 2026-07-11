"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Zap, ChevronDown, GraduationCap, Landmark, Wrench, ShoppingBag, Star, Users, BookOpen, Calculator, LayoutGrid, FileText, Palette, Minimize2, Briefcase, Layers, Cpu, HeartPulse, Scale, TrendingUp, Mail, Sparkles, Crown } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const resumeExamplesItems = [
  {
    heading: "Resume Examples",
    items: [
      { label: "Education", description: "Educate employers on your skills with a resume fit for any role", href: "/resume-examples/education", icon: GraduationCap },
      { label: "Government", description: "Create a government resume that commands the attention of recruiters", href: "/resume-examples/government", icon: Landmark },
      { label: "Engineering", description: "Build the foundation for success with a tailored engineering resume", href: "/resume-examples/engineering", icon: Wrench },
      { label: "Retail", description: "Showcase your retail experience with a well-crafted resume", href: "/resume-examples/retail", icon: ShoppingBag },
    ],
  },
  {
    heading: "Most Popular",
    items: [
      { label: "Nurse", href: "/resume-examples/nurse", icon: Star },
      { label: "High School Student", href: "/resume-examples/high-school-student", icon: BookOpen },
      { label: "Internship", href: "/resume-examples/internship", icon: Users },
      { label: "Student", href: "/resume-examples/student", icon: GraduationCap },
      { label: "Accountant", href: "/resume-examples/accountant", icon: Calculator },
      { label: "All Examples", href: "/resume-examples", icon: LayoutGrid },
    ],
  },
];

const resumeTemplatesItems = [
  {
    heading: "By Style",
    items: [
      { label: "Classic", description: "Timeless layout trusted by Fortune 500 recruiters worldwide", href: "/#templates", icon: FileText },
      { label: "Modern", description: "Bold sidebar accent that makes your profile unforgettable", href: "/#templates", icon: Layers },
      { label: "Minimal", description: "Understated elegance that lets your experience speak", href: "/#templates", icon: Minimize2 },
      { label: "Creative", description: "Stand-out designs for portfolios and creative roles", href: "/#templates", icon: Palette },
    ],
  },
  {
    heading: "By Industry",
    items: [
      { label: "Tech & Engineering", href: "/#templates", icon: Cpu },
      { label: "Healthcare", href: "/#templates", icon: HeartPulse },
      { label: "Finance & Law", href: "/#templates", icon: Scale },
      { label: "Marketing", href: "/#templates", icon: TrendingUp },
      { label: "Business", href: "/#templates", icon: Briefcase },
      { label: "All Templates", href: "/#templates", icon: LayoutGrid },
    ],
  },
];

const coverLetterItems = [
  {
    heading: "Cover Letter Templates",
    items: [
      { label: "Professional", description: "Clean & corporate — trusted by hiring managers everywhere", href: "/cover-letter-examples/professional", icon: Briefcase },
      { label: "Modern", description: "Bold sidebar accent that makes a lasting first impression", href: "/cover-letter-examples/modern", icon: Sparkles },
      { label: "Minimal", description: "Understated elegance — let your words do the talking", href: "/cover-letter-examples/minimal", icon: Minimize2 },
      { label: "Creative", description: "Stand out instantly with a design as bold as your story", href: "/cover-letter-examples/creative", icon: Palette },
    ],
  },
  {
    heading: "Most Popular",
    items: [
      { label: "Executive", href: "/cover-letter-examples/executive", icon: Crown },
      { label: "Entry Level", href: "/cover-letter-examples/entry-level", icon: GraduationCap },
      { label: "Career Change", href: "/cover-letter-examples/career-change", icon: TrendingUp },
      { label: "Internship", href: "/cover-letter-examples/internship", icon: BookOpen },
      { label: "Remote Job", href: "/cover-letter-examples/remote-job", icon: Mail },
      { label: "All Examples", href: "/cover-letter-examples", icon: LayoutGrid },
    ],
  },
];

type DropdownSection = {
  heading: string;
  items: { label: string; href: string; icon: React.ComponentType<{ className?: string }>; description?: string }[];
};

function NavDropdown({
  label,
  isOpen,
  setIsOpen,
  items,
  allLabel,
}: {
  label: string;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  items: DropdownSection[];
  allLabel: string;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent">
        {label}
        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full mt-2 w-[min(520px,calc(100vw-2rem))] rounded-2xl border border-border/60 bg-white shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-0">
              {/* Left column */}
              <div className="p-4 border-r border-border/40">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-2">
                  {items[0].heading}
                </p>
                <div className="space-y-0.5">
                  {items[0].items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-start gap-3 px-2 py-2.5 rounded-lg hover:bg-accent transition-colors group"
                    >
                      <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/15 transition-colors">
                        <item.icon className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground">{item.label}</p>
                        {item.description && (
                          <p className="text-xs text-muted-foreground leading-snug mt-0.5 line-clamp-2">{item.description}</p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right column */}
              <div className="p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-2">
                  {items[1].heading}
                </p>
                <div className="space-y-0.5">
                  {items[1].items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-accent transition-colors text-sm",
                        item.label === allLabel
                          ? "text-primary font-semibold mt-1 border-t border-border/30 pt-3"
                          : "text-foreground"
                      )}
                    >
                      <item.icon className={cn("w-3.5 h-3.5 flex-shrink-0", item.label === allLabel ? "text-primary" : "text-muted-foreground")} />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [examplesOpen, setExamplesOpen] = useState(false);
  const [templatesOpen, setTemplatesOpen] = useState(false);
  const [coverLetterOpen, setCoverLetterOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Client-only mount guard to avoid theme/SSR hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || !transparent
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/25 transition-shadow">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              CareerForge{" "}
              <span className="gradient-text">AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/#features"
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
            >
              Pricing
            </Link>

            {/* Resume Templates dropdown */}
            <NavDropdown
              label="Resume Templates"
              isOpen={templatesOpen}
              setIsOpen={setTemplatesOpen}
              items={resumeTemplatesItems}
              allLabel="All Templates"
            />

            {/* Cover Letter dropdown */}
            <NavDropdown
              label="Cover Letter"
              isOpen={coverLetterOpen}
              setIsOpen={setCoverLetterOpen}
              items={coverLetterItems}
              allLabel="All Examples"
            />

            {/* Resume Examples dropdown */}
            <NavDropdown
              label="Resume Examples"
              isOpen={examplesOpen}
              setIsOpen={setExamplesOpen}
              items={resumeExamplesItems}
              allLabel="All Examples"
            />
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 rounded-lg"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>
            )}
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Sign in</Link>
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-indigo-500/20"
                asChild
              >
                <Link href="/signup">Create my resume</Link>
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden w-9 h-9"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {[
                { label: "Features", href: "/#features" },
                { label: "Pricing", href: "/pricing" },
                { label: "Resume Templates", href: "/#templates" },
                { label: "Cover Letter", href: "/cover-letter-examples" },
                { label: "Resume Examples", href: "/resume-examples" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <Button variant="outline" asChild className="w-full">
                  <Link href="/login" onClick={() => setMobileOpen(false)}>Sign in</Link>
                </Button>
                <Button
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0"
                  asChild
                >
                  <Link href="/signup" onClick={() => setMobileOpen(false)}>Create my resume</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
