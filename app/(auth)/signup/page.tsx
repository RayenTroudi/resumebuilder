"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Zap, ArrowRight, Code2, Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const perks = [
  "Free resume builder & templates",
  "5 AI generations per month",
  "No credit card required",
];

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const firstName = form.get("firstName") as string;
    const lastName = form.get("lastName") as string;
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: `${firstName} ${lastName}`.trim(), email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.error ?? "Something went wrong");
      setLoading(false);
      return;
    }

    await signIn("credentials", { email, password, redirect: false });
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left: Visual */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-purple-950 via-indigo-950 to-background items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(168,85,247,0.2) 0%, transparent 60%)" }} />
        <div className="relative max-w-sm">
          <div className="mb-8">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Join 12,400+ professionals already using CareerForge AI
            </h2>
            <p className="text-white/60">Everything you need to land your dream job, in one platform.</p>
          </div>
          <div className="space-y-3">
            {perks.map((perk) => (
              <div key={perk} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span className="text-sm text-white/80">{perk}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex -space-x-2">
            {["Alex", "Sarah", "Marcus", "Priya"].map((name) => (
              <img key={name} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}&backgroundColor=6366f1`} alt={name} className="w-9 h-9 rounded-full border-2 border-purple-900 bg-indigo-500/20" />
            ))}
            <div className="w-9 h-9 rounded-full border-2 border-purple-900 bg-indigo-500/20 flex items-center justify-center">
              <span className="text-xs text-white font-medium">+12K</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm"
        >
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold">CareerForge <span className="gradient-text">AI</span></span>
          </Link>

          <h1 className="font-display text-2xl font-bold mb-1">Create your account</h1>
          <p className="text-muted-foreground text-sm mb-8">Free forever • No credit card needed</p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <Button variant="outline" className="gap-2"><Code2 className="w-4 h-4" /> GitHub</Button>
            <Button variant="outline" className="gap-2"><Globe className="w-4 h-4" /> Google</Button>
          </div>

          <div className="relative mb-6">
            <Separator />
            <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground">
              or sign up with email
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <p className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-3 py-2">{error}</p>
            )}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label>First name</Label>
                <Input name="firstName" placeholder="Alex" required />
              </div>
              <div className="space-y-2">
                <Label>Last name</Label>
                <Input name="lastName" placeholder="Rivera" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input name="email" type="email" placeholder="alex@example.com" required />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <div className="relative">
                <Input name="password" type={showPassword ? "text" : "password"} placeholder="••••••••" required minLength={8} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-xs text-muted-foreground">Minimum 8 characters</p>
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 shadow-lg shadow-indigo-500/20 group" disabled={loading}>
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Creating account...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Create Free Account <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              By signing up, you agree to our{" "}
              <Link href="#" className="text-indigo-400 hover:underline">Terms</Link> and{" "}
              <Link href="#" className="text-indigo-400 hover:underline">Privacy Policy</Link>.
            </p>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">Sign in</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
