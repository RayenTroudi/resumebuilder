"use client";

import React from "react";

/* ─────────────────────── shared types ─────────────────────── */

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  website?: string;
  summary: string;
  experience: {
    company: string;
    role: string;
    period: string;
    location: string;
    bullets: string[];
  }[];
  education: {
    degree: string;
    school: string;
    period: string;
    note?: string;
  }[];
  skills: { category: string; items: string[] }[];
  certifications?: string[];
  extras?: { label: string; value: string }[];
}

/* ─────────────────────── Template A – Classic (single column, serif header) ─────── */

export function TemplateClassic({
  data,
  accent = "#1e40af",
}: {
  data: ResumeData;
  accent?: string;
}) {
  return (
    <div
      className="bg-white text-gray-900 w-full h-full"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: "10px", lineHeight: 1.45 }}
    >
      {/* header */}
      <div className="px-9 pt-8 pb-5">
        <h1 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.3px", color: "#111", marginBottom: 3 }}>
          {data.name}
        </h1>
        <p style={{ fontSize: "11px", fontWeight: 600, color: accent, marginBottom: 6 }}>{data.title}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", fontSize: "9.5px", color: "#6b7280" }}>
          <span>{data.email}</span>
          <span>{data.phone}</span>
          <span>{data.location}</span>
          {data.linkedin && <span>{data.linkedin}</span>}
          {data.website && <span>{data.website}</span>}
        </div>
        <div style={{ marginTop: "10px", height: "2px", background: accent, width: "100%" }} />
      </div>

      <div style={{ padding: "0 36px 36px", display: "flex", flexDirection: "column", gap: "14px" }}>
        {/* summary */}
        <Section label="Professional Summary" accent={accent}>
          <p style={{ color: "#4b5563", lineHeight: 1.6 }}>{data.summary}</p>
        </Section>

        {/* experience */}
        <Section label="Work Experience" accent={accent}>
          {data.experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: i < data.experience.length - 1 ? "12px" : 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "10.5px", color: "#111" }}>{exp.role}</p>
                  <p style={{ color: accent, fontWeight: 600, fontSize: "9.5px" }}>{exp.company} · {exp.location}</p>
                </div>
                <span style={{ fontSize: "9px", color: "#9ca3af", whiteSpace: "nowrap", marginLeft: 8 }}>{exp.period}</span>
              </div>
              <ul style={{ marginTop: "5px", paddingLeft: 0, listStyle: "none" }}>
                {exp.bullets.map((b, j) => (
                  <li key={j} style={{ display: "flex", gap: "7px", alignItems: "flex-start", marginBottom: "2px" }}>
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: accent, flexShrink: 0, marginTop: "4px" }} />
                    <span style={{ color: "#4b5563" }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        {/* education */}
        <Section label="Education" accent={accent}>
          {data.education.map((edu, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: i < data.education.length - 1 ? "8px" : 0 }}>
              <div>
                <p style={{ fontWeight: 700, fontSize: "10.5px", color: "#111" }}>{edu.degree}</p>
                <p style={{ color: accent, fontSize: "9.5px" }}>{edu.school}</p>
                {edu.note && <p style={{ color: "#9ca3af", fontSize: "9px" }}>{edu.note}</p>}
              </div>
              <span style={{ fontSize: "9px", color: "#9ca3af", whiteSpace: "nowrap", marginLeft: 8 }}>{edu.period}</span>
            </div>
          ))}
        </Section>

        {/* skills */}
        <Section label="Skills" accent={accent}>
          {data.skills.map((sg, i) => (
            <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "3px" }}>
              <span style={{ fontWeight: 700, color: "#374151", minWidth: "80px", flexShrink: 0 }}>{sg.category}:</span>
              <span style={{ color: "#6b7280" }}>{sg.items.join(", ")}</span>
            </div>
          ))}
        </Section>

        {/* certifications */}
        {data.certifications && data.certifications.length > 0 && (
          <Section label="Certifications" accent={accent}>
            <ul style={{ paddingLeft: 0, listStyle: "none" }}>
              {data.certifications.map((c, i) => (
                <li key={i} style={{ display: "flex", gap: "7px", alignItems: "flex-start", marginBottom: "2px" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: accent, flexShrink: 0, marginTop: "4px" }} />
                  <span style={{ color: "#4b5563" }}>{c}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────── Template B – Sidebar (colored left panel) ─────── */

export function TemplateSidebar({
  data,
  accent = "#7c3aed",
}: {
  data: ResumeData;
  accent?: string;
}) {
  return (
    <div
      className="bg-white text-gray-900 w-full h-full flex"
      style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: "9.5px" }}
    >
      {/* left sidebar */}
      <div style={{ width: "36%", background: accent, padding: "28px 16px", display: "flex", flexDirection: "column", gap: "16px" }}>
        {/* avatar */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontWeight: 700, fontSize: "16px" }}>
              {data.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
            </span>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "white", fontWeight: 700, fontSize: "12px", lineHeight: 1.3 }}>{data.name}</p>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "9px", marginTop: "2px" }}>{data.title}</p>
          </div>
        </div>

        {/* contact */}
        <SidebarSection label="Contact" light>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "3px" }}>{data.email}</p>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "3px" }}>{data.phone}</p>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "3px" }}>{data.location}</p>
          {data.linkedin && <p style={{ color: "rgba(255,255,255,0.7)" }}>{data.linkedin}</p>}
        </SidebarSection>

        {/* skills */}
        <SidebarSection label="Skills" light>
          {data.skills.flatMap(sg => sg.items).slice(0, 10).map((s, i) => (
            <div key={i} style={{ marginBottom: "4px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2px" }}>
                <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "9px" }}>{s}</span>
              </div>
              <div style={{ height: "3px", background: "rgba(255,255,255,0.2)", borderRadius: "2px" }}>
                <div style={{ height: "100%", background: "rgba(255,255,255,0.7)", borderRadius: "2px", width: `${70 + (i % 3) * 10}%` }} />
              </div>
            </div>
          ))}
        </SidebarSection>

        {/* education */}
        <SidebarSection label="Education" light>
          {data.education.map((edu, i) => (
            <div key={i} style={{ marginBottom: "6px" }}>
              <p style={{ color: "white", fontWeight: 600, fontSize: "9px" }}>{edu.degree}</p>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "8.5px" }}>{edu.school}</p>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "8px" }}>{edu.period}</p>
            </div>
          ))}
        </SidebarSection>

        {data.certifications && (
          <SidebarSection label="Certifications" light>
            {data.certifications.map((c, i) => (
              <p key={i} style={{ color: "rgba(255,255,255,0.8)", marginBottom: "3px", fontSize: "8.5px" }}>• {c}</p>
            ))}
          </SidebarSection>
        )}
      </div>

      {/* right main */}
      <div style={{ flex: 1, padding: "28px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
        {/* summary */}
        <div>
          <p style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9ca3af", marginBottom: "6px" }}>Profile</p>
          <p style={{ color: "#4b5563", lineHeight: 1.6 }}>{data.summary}</p>
        </div>

        {/* experience */}
        <div>
          <p style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9ca3af", marginBottom: "8px" }}>Experience</p>
          {data.experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "11px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "10px", color: "#111" }}>{exp.role}</p>
                  <p style={{ fontSize: "9px", color: accent, fontWeight: 600 }}>{exp.company}</p>
                </div>
                <span style={{ fontSize: "8.5px", color: "#9ca3af", whiteSpace: "nowrap" }}>{exp.period}</span>
              </div>
              <ul style={{ marginTop: "4px", listStyle: "none", paddingLeft: 0 }}>
                {exp.bullets.slice(0, 3).map((b, j) => (
                  <li key={j} style={{ display: "flex", gap: "6px", marginBottom: "2px" }}>
                    <span style={{ width: "3px", height: "3px", background: accent, borderRadius: "50%", flexShrink: 0, marginTop: "4px" }} />
                    <span style={{ color: "#4b5563", fontSize: "9px" }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* extras */}
        {data.extras && (
          <div>
            <p style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9ca3af", marginBottom: "6px" }}>Additional</p>
            {data.extras.map((e, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "3px" }}>
                <span style={{ fontWeight: 600, color: "#374151", minWidth: "80px" }}>{e.label}:</span>
                <span style={{ color: "#6b7280" }}>{e.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────── Template C – Minimal modern (clean sans) ─────── */

export function TemplateMinimal({
  data,
  accent = "#0f172a",
}: {
  data: ResumeData;
  accent?: string;
}) {
  return (
    <div
      className="bg-white text-gray-900 w-full h-full"
      style={{ fontFamily: "'Arial', 'Helvetica Neue', sans-serif", fontSize: "9.5px", padding: "36px 40px" }}
    >
      {/* name block */}
      <div style={{ marginBottom: "18px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#0f172a", letterSpacing: "-0.5px" }}>{data.name}</h1>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "4px" }}>
          <span style={{ fontSize: "11px", color: accent, fontWeight: 600 }}>{data.title}</span>
          <span style={{ color: "#e5e7eb" }}>|</span>
          <span style={{ fontSize: "9.5px", color: "#6b7280" }}>{data.location}</span>
          <span style={{ color: "#e5e7eb" }}>|</span>
          <span style={{ fontSize: "9.5px", color: "#6b7280" }}>{data.email}</span>
          <span style={{ color: "#e5e7eb" }}>|</span>
          <span style={{ fontSize: "9.5px", color: "#6b7280" }}>{data.phone}</span>
        </div>
        <div style={{ height: "1.5px", background: "#f3f4f6", marginTop: "10px" }} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {/* summary */}
        <div>
          <p style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#9ca3af", marginBottom: "5px" }}>Summary</p>
          <p style={{ color: "#4b5563", lineHeight: 1.65 }}>{data.summary}</p>
        </div>

        {/* experience */}
        <div>
          <p style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#9ca3af", marginBottom: "8px" }}>Experience</p>
          {data.experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "10px", paddingLeft: "10px", borderLeft: `2px solid ${accent}30` }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <span style={{ fontWeight: 700, fontSize: "10px", color: "#111" }}>{exp.role}</span>
                  <span style={{ color: "#9ca3af", margin: "0 5px" }}>·</span>
                  <span style={{ color: accent, fontSize: "9.5px", fontWeight: 600 }}>{exp.company}</span>
                </div>
                <span style={{ fontSize: "8.5px", color: "#9ca3af" }}>{exp.period}</span>
              </div>
              <ul style={{ marginTop: "4px", listStyle: "none", paddingLeft: 0 }}>
                {exp.bullets.map((b, j) => (
                  <li key={j} style={{ color: "#4b5563", marginBottom: "2px", paddingLeft: "10px", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: accent }}>›</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* skills as pills */}
        <div>
          <p style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#9ca3af", marginBottom: "7px" }}>Skills</p>
          {data.skills.map((sg, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "5px" }}>
              <span style={{ fontSize: "9px", fontWeight: 700, color: "#374151", minWidth: "72px", paddingTop: "2px" }}>{sg.category}</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
                {sg.items.map((s, j) => (
                  <span key={j} style={{ fontSize: "8.5px", padding: "1.5px 7px", borderRadius: "20px", border: `1px solid ${accent}40`, color: "#374151" }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* education */}
        <div>
          <p style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#9ca3af", marginBottom: "7px" }}>Education</p>
          {data.education.map((edu, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <div>
                <p style={{ fontWeight: 700, color: "#111", fontSize: "10px" }}>{edu.degree}</p>
                <p style={{ color: accent, fontSize: "9.5px" }}>{edu.school}</p>
                {edu.note && <p style={{ color: "#9ca3af", fontSize: "8.5px" }}>{edu.note}</p>}
              </div>
              <span style={{ fontSize: "8.5px", color: "#9ca3af" }}>{edu.period}</span>
            </div>
          ))}
        </div>

        {data.certifications && (
          <div>
            <p style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#9ca3af", marginBottom: "5px" }}>Certifications</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
              {data.certifications.map((c, i) => (
                <span key={i} style={{ fontSize: "8.5px", padding: "2px 8px", borderRadius: "4px", background: `${accent}10`, color: accent, border: `1px solid ${accent}30` }}>{c}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────── shared helpers ─────────────────────── */

function Section({ label, accent, children }: { label: string; accent: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
        <p style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: accent, whiteSpace: "nowrap" }}>{label}</p>
        <div style={{ flex: 1, height: "1px", background: `${accent}30` }} />
      </div>
      {children}
    </div>
  );
}

function SidebarSection({ label, children, light }: { label: string; children: React.ReactNode; light?: boolean }) {
  return (
    <div>
      <p style={{ fontSize: "8.5px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: light ? "rgba(255,255,255,0.45)" : "#9ca3af", marginBottom: "7px", borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "4px" }}>{label}</p>
      {children}
    </div>
  );
}
