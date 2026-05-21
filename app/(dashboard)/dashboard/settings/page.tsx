"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Bell, Shield, Link2, Palette, Moon, Sun, Monitor, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { mockUser } from "@/data/mock";
import { useTheme } from "next-themes";

const connectedAccounts = [
  { name: "GitHub", icon: "GH", connected: true, username: "@alexrivera", color: "bg-gray-800" },
  { name: "LinkedIn", icon: "in", connected: true, username: "linkedin.com/in/alex", color: "bg-blue-700" },
  { name: "Google", icon: "G", connected: false, username: null, color: "bg-red-500" },
  { name: "Twitter/X", icon: "X", connected: false, username: null, color: "bg-black" },
];

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="w-full max-w-3xl space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold mb-1">Settings</h1>
        <p className="text-muted-foreground text-sm">Manage your profile, preferences, and account security</p>
      </div>

      <Tabs defaultValue="profile">
        <div className="overflow-x-auto mb-6">
          <TabsList className="bg-muted/50 w-max min-w-full sm:w-auto">
            <TabsTrigger value="profile" className="text-xs gap-1.5"><User className="w-3 h-3" /> Profile</TabsTrigger>
            <TabsTrigger value="appearance" className="text-xs gap-1.5"><Palette className="w-3 h-3" /> Appearance</TabsTrigger>
            <TabsTrigger value="notifications" className="text-xs gap-1.5"><Bell className="w-3 h-3" /> Notifications</TabsTrigger>
            <TabsTrigger value="security" className="text-xs gap-1.5"><Shield className="w-3 h-3" /> Security</TabsTrigger>
            <TabsTrigger value="accounts" className="text-xs gap-1.5"><Link2 className="w-3 h-3" /> Accounts</TabsTrigger>
          </TabsList>
        </div>

        {/* Profile */}
        <TabsContent value="profile" className="space-y-6 mt-0">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-semibold mb-5">Profile Information</h2>
            <div className="flex items-center gap-5 mb-6">
              <Avatar className="w-16 h-16">
                <AvatarImage src={mockUser.avatar} />
                <AvatarFallback className="bg-indigo-500 text-white text-lg font-bold">
                  {mockUser.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <Button variant="outline" size="sm" className="text-xs">Change Avatar</Button>
                <p className="text-xs text-muted-foreground mt-1">JPG, PNG or GIF · max 2MB</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <Label className="text-xs">First Name</Label>
                <Input defaultValue="Alex" className="h-9" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs">Last Name</Label>
                <Input defaultValue="Rivera" className="h-9" />
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <Label className="text-xs">Email</Label>
              <Input defaultValue={mockUser.email} className="h-9" />
            </div>
            <div className="space-y-2 mb-4">
              <Label className="text-xs">Bio</Label>
              <Input defaultValue="Senior Full-Stack Engineer · Open Source · SF Bay Area" className="h-9" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <Label className="text-xs">Location</Label>
                <Input defaultValue="San Francisco, CA" className="h-9" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs">Website</Label>
                <Input defaultValue="https://alexrivera.dev" className="h-9" />
              </div>
            </div>
            <Button onClick={handleSave} className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0">
              <Save className="w-4 h-4" /> {saved ? "Saved!" : "Save Changes"}
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-semibold mb-1">Delete Account</h2>
            <p className="text-sm text-muted-foreground mb-4">Permanently delete your account and all associated data. This action cannot be undone.</p>
            <Button variant="outline" className="text-destructive hover:bg-destructive/10 hover:text-destructive border-destructive/30">Delete Account</Button>
          </motion.div>
        </TabsContent>

        {/* Appearance */}
        <TabsContent value="appearance" className="space-y-6 mt-0">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-semibold mb-5">Theme</h2>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "light", label: "Light", icon: Sun },
                { value: "dark", label: "Dark", icon: Moon },
                { value: "system", label: "System", icon: Monitor },
              ].map((t) => (
                <button
                  key={t.value}
                  onClick={() => setTheme(t.value)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                    theme === t.value
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-border/80"
                  }`}
                >
                  <t.icon className={`w-5 h-5 ${theme === t.value ? "text-primary" : "text-muted-foreground"}`} />
                  <span className="text-sm font-medium">{t.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications" className="space-y-6 mt-0">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-semibold mb-5">Notification Preferences</h2>
            <div className="space-y-0">
              {[
                { label: "AI Suggestions", desc: "Get notified when new AI improvements are available for your resume", default: true },
{ label: "Resume Opened", desc: "Alert when a recruiter opens your resume link", default: true },
                { label: "AI Credit Alerts", desc: "Notify when you have 20% of credits remaining", default: true },
                { label: "Product Updates", desc: "New features, templates, and platform announcements", default: false },
                { label: "Marketing Emails", desc: "Tips, career advice, and promotional offers", default: false },
              ].map((n, i) => (
                <div key={n.label}>
                  <div className="flex items-center justify-between py-4">
                    <div>
                      <p className="text-sm font-medium">{n.label}</p>
                      <p className="text-xs text-muted-foreground">{n.desc}</p>
                    </div>
                    <Switch defaultChecked={n.default} />
                  </div>
                  {i < 5 && <Separator className="opacity-50" />}
                </div>
              ))}
            </div>
          </motion.div>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security" className="space-y-6 mt-0">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card border border-border rounded-xl p-6 space-y-5">
            <h2 className="font-semibold">Password</h2>
            <div className="space-y-3">
              <div className="space-y-2">
                <Label className="text-xs">Current Password</Label>
                <Input type="password" placeholder="••••••••" className="h-9" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs">New Password</Label>
                <Input type="password" placeholder="••••••••" className="h-9" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs">Confirm New Password</Label>
                <Input type="password" placeholder="••••••••" className="h-9" />
              </div>
              <Button variant="outline" size="sm">Update Password</Button>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Two-Factor Authentication</p>
                <p className="text-xs text-muted-foreground">Add an extra layer of security to your account</p>
              </div>
              <Switch />
            </div>
            <Separator />
            <div>
              <p className="text-sm font-medium mb-3">Active Sessions</p>
              {[
                { device: "MacBook Pro — Chrome", location: "San Francisco, CA", current: true },
                { device: "iPhone 15 — Safari", location: "San Francisco, CA", current: false },
              ].map((s) => (
                <div key={s.device} className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-xs font-medium">{s.device}</p>
                    <p className="text-xs text-muted-foreground">{s.location} {s.current && "· Current session"}</p>
                  </div>
                  {!s.current && (
                    <Button variant="ghost" size="sm" className="text-xs text-destructive hover:text-destructive">Revoke</Button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </TabsContent>

        {/* Connected Accounts */}
        <TabsContent value="accounts" className="space-y-6 mt-0">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-semibold mb-5">Connected Accounts</h2>
            <div className="space-y-3">
              {connectedAccounts.map((acc) => (
                <div key={acc.name} className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-muted/20">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg ${acc.color} flex items-center justify-center text-white text-xs font-bold`}>
                      {acc.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{acc.name}</p>
                      {acc.connected && acc.username && (
                        <p className="text-xs text-muted-foreground">{acc.username}</p>
                      )}
                    </div>
                  </div>
                  {acc.connected ? (
                    <Button variant="outline" size="sm" className="text-xs h-7 text-destructive hover:text-destructive border-destructive/30">Disconnect</Button>
                  ) : (
                    <Button variant="outline" size="sm" className="text-xs h-7">Connect</Button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
