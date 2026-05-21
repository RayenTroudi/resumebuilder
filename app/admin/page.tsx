"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users, DollarSign, TrendingUp, Sparkles, Shield,
  Search, Filter, MoreHorizontal, CheckCircle2, XCircle, Clock,
  Activity, Server, AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockAdminUsers } from "@/data/mock";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, AreaChart, Area } from "recharts";

const revenueData = Array.from({ length: 12 }, (_, i) => ({
  month: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][i],
  revenue: Math.floor(Math.random() * 8000) + 4000,
  users: Math.floor(Math.random() * 400) + 200,
}));

const systemHealth = [
  { label: "API Uptime", value: "99.98%", status: "healthy", icon: Activity },
  { label: "AI Service", value: "99.91%", status: "healthy", icon: Sparkles },
  { label: "Database", value: "99.99%", status: "healthy", icon: Server },
  { label: "CDN", value: "degraded", status: "warning", icon: AlertTriangle },
];

const statusColors: Record<string, string> = {
  active: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  suspended: "bg-red-500/10 text-red-400 border-red-500/20",
  pending: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export default function AdminPage() {
  const [search, setSearch] = useState("");
  const filtered = mockAdminUsers.filter(
    u => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="font-display font-bold">Admin Dashboard</h1>
            <p className="text-xs text-muted-foreground">CareerForge AI · Internal</p>
          </div>
        </div>
        <Badge variant="secondary" className="bg-red-500/10 text-red-400 border-red-500/20">Admin Access</Badge>
      </div>

      <div className="p-6 space-y-6 max-w-7xl">
        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total Users", value: "12,847", change: "+18%", icon: Users, color: "from-indigo-500 to-purple-500" },
            { label: "Monthly Revenue", value: "$48,320", change: "+24%", icon: DollarSign, color: "from-emerald-500 to-teal-500" },
            { label: "Pro Subscribers", value: "3,241", change: "+11%", icon: TrendingUp, color: "from-amber-500 to-orange-500" },
            { label: "AI Generations", value: "284K", change: "+31%", icon: Sparkles, color: "from-purple-500 to-pink-500" },
          ].map((kpi, i) => (
            <motion.div key={kpi.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <p className="text-xs text-muted-foreground">{kpi.label}</p>
                <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${kpi.color} flex items-center justify-center`}>
                  <kpi.icon className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
              <p className="text-2xl font-display font-bold">{kpi.value}</p>
              <p className="text-xs text-emerald-400 mt-1">{kpi.change} this month</p>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-5">
            <h2 className="font-semibold text-sm mb-4">Monthly Revenue</h2>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={revenueData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="month" tick={{ fontSize: 10 }} stroke="var(--muted-foreground)" />
                <YAxis tick={{ fontSize: 10 }} stroke="var(--muted-foreground)" />
                <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "8px", fontSize: 12 }} formatter={(v) => [`$${v}`, "Revenue"]} />
                <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} fill="url(#revGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <h2 className="font-semibold text-sm mb-4">New Users Per Month</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={revenueData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="month" tick={{ fontSize: 10 }} stroke="var(--muted-foreground)" />
                <YAxis tick={{ fontSize: 10 }} stroke="var(--muted-foreground)" />
                <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "8px", fontSize: 12 }} />
                <Bar dataKey="users" fill="#6366f1" radius={[4, 4, 0, 0]} name="New users" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* System Health */}
        <div className="bg-card border border-border rounded-xl p-5">
          <h2 className="font-semibold text-sm mb-4">System Health</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {systemHealth.map((s) => (
              <div key={s.label} className={`p-3 rounded-xl border flex items-center gap-3 ${s.status === "healthy" ? "border-emerald-500/20 bg-emerald-500/5" : "border-amber-500/20 bg-amber-500/5"}`}>
                <s.icon className={`w-4 h-4 flex-shrink-0 ${s.status === "healthy" ? "text-emerald-400" : "text-amber-400"}`} />
                <div>
                  <p className="text-xs font-medium">{s.label}</p>
                  <p className={`text-sm font-bold ${s.status === "healthy" ? "text-emerald-400" : "text-amber-400"}`}>{s.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Table */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-border/50">
            <h2 className="font-semibold text-sm">User Management</h2>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <Input
                  placeholder="Search users..."
                  className="pl-8 h-8 w-48 text-xs"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs">
                <Filter className="w-3 h-3" /> Filter
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50 bg-muted/20">
                  {["User", "Plan", "Status", "Joined", "Revenue", "AI Usage", "Actions"].map((h) => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((user, i) => (
                  <tr key={user.id} className={`border-b border-border/30 last:border-0 hover:bg-accent/30 transition-colors ${i % 2 === 0 ? "" : "bg-muted/5"}`}>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs font-bold text-indigo-400">
                          {user.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{user.name}</p>
                          <p className="text-xs text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <Badge variant="secondary" className="text-xs">{user.plan}</Badge>
                    </td>
                    <td className="px-5 py-3">
                      <Badge className={`text-xs border capitalize ${statusColors[user.status]}`}>
                        {user.status}
                      </Badge>
                    </td>
                    <td className="px-5 py-3 text-xs text-muted-foreground">{user.joined}</td>
                    <td className="px-5 py-3 text-xs font-medium">{user.revenue > 0 ? `$${user.revenue}` : "—"}</td>
                    <td className="px-5 py-3 text-xs text-muted-foreground">{user.aiUsage.toLocaleString()}</td>
                    <td className="px-5 py-3">
                      <div className="flex gap-1">
                        {user.status !== "suspended" ? (
                          <Button variant="ghost" size="sm" className="h-6 text-xs text-destructive hover:text-destructive px-2">Suspend</Button>
                        ) : (
                          <Button variant="ghost" size="sm" className="h-6 text-xs text-emerald-400 hover:text-emerald-400 px-2">Restore</Button>
                        )}
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <MoreHorizontal className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-3 border-t border-border/50 flex items-center justify-between">
            <p className="text-xs text-muted-foreground">Showing {filtered.length} of {mockAdminUsers.length} users</p>
            <div className="flex gap-1">
              <Button variant="outline" size="sm" className="h-7 text-xs">Previous</Button>
              <Button variant="outline" size="sm" className="h-7 text-xs">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
