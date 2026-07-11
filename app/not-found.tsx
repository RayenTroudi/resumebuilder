"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-20" style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.5) 0%, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <Link href="/" className="flex items-center gap-2 justify-center mb-12">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-bold">CareerForge <span className="gradient-text">AI</span></span>
        </Link>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display text-[10rem] font-bold leading-none gradient-text mb-4"
        >
          404
        </motion.div>

        <h1 className="font-display text-2xl font-bold mb-3">This page doesn&apos;t exist.</h1>
        <p className="text-muted-foreground mb-8">
          Looks like you wandered off the resume. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 shadow-lg shadow-indigo-500/20"
            asChild
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4" /> Go Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/dashboard">Open Dashboard</Link>
          </Button>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [-8, 8, -8], rotate: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 hidden md:flex items-center justify-center"
        >
          <span className="text-xl">📄</span>
        </motion.div>
        <motion.div
          animate={{ y: [8, -8, 8], rotate: [5, -5, 5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 left-16 w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 hidden md:flex items-center justify-center"
        >
          <span className="text-lg">✨</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
