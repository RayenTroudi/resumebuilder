"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { requireUserId } from "@/lib/session";

export type ResumeListItem = {
  id: string;
  title: string;
  template: string;
  accentColor: string;
  score: number;
  atsScore: number;
  views: number;
  updatedAt: Date;
};

export type ActionResult<T = void> =
  | { ok: true; data: T }
  | { ok: false; error: string };

/** All resumes owned by the current user, most recently updated first. */
export async function getResumes(): Promise<ResumeListItem[]> {
  const userId = await requireUserId();
  return db.resume.findMany({
    where: { userId },
    orderBy: { updatedAt: "desc" },
    select: {
      id: true,
      title: true,
      template: true,
      accentColor: true,
      score: true,
      atsScore: true,
      views: true,
      updatedAt: true,
    },
  });
}

/** A single resume with its sections and items — ownership enforced. */
export async function getResume(id: string) {
  const userId = await requireUserId();
  return db.resume.findFirst({
    where: { id, userId },
    include: {
      sections: {
        orderBy: { order: "asc" },
        include: { items: { orderBy: { order: "asc" } } },
      },
    },
  });
}

const SECTION_TYPES = [
  "summary",
  "experience",
  "education",
  "skills",
  "projects",
  "certifications",
] as const;
type SectionType = (typeof SECTION_TYPES)[number];

const DEFAULT_SECTIONS = [
  { type: "summary" as const, title: "Professional Summary", order: 0 },
  { type: "experience" as const, title: "Experience", order: 1 },
  { type: "education" as const, title: "Education", order: 2 },
  { type: "skills" as const, title: "Skills", order: 3 },
];

/** Create a new resume (seeds header from the user + a default section scaffold). */
export async function createResume(
  formData?: FormData
): Promise<ActionResult<{ id: string }>> {
  try {
    const userId = await requireUserId();
    const rawTitle =
      typeof formData?.get("title") === "string"
        ? (formData.get("title") as string).trim()
        : "";
    const title = rawTitle.slice(0, 120) || "Untitled Resume";

    const user = await db.user.findUnique({
      where: { id: userId },
      select: { name: true, email: true },
    });

    const resume = await db.resume.create({
      data: {
        userId,
        title,
        fullName: user?.name ?? null,
        email: user?.email ?? null,
        sections: { create: DEFAULT_SECTIONS },
      },
      select: { id: true },
    });

    revalidatePath("/dashboard/resumes");
    revalidatePath("/dashboard");
    return { ok: true, data: { id: resume.id } };
  } catch (err) {
    console.error("[createResume]", err);
    return { ok: false, error: "Could not create resume" };
  }
}

// ─── Full-document save ──────────────────────────────────────────────────────

export type ResumeItemInput = {
  title: string;
  subtitle?: string;
  date?: string;
  endDate?: string;
  description?: string;
  url?: string;
  location?: string;
  bullets?: string[];
  skills?: string[];
};

export type ResumeSectionInput = {
  type: SectionType;
  title: string;
  items: ResumeItemInput[];
};

export type ResumeInput = {
  title: string;
  template: string;
  accentColor: string;
  fullName?: string;
  headline?: string;
  email?: string;
  phone?: string;
  location?: string;
  website?: string;
  sections: ResumeSectionInput[];
};

const str = (v: unknown, max: number) =>
  (typeof v === "string" ? v : "").trim().slice(0, max);
const strList = (v: unknown, maxItems: number, maxLen: number) =>
  Array.isArray(v)
    ? v
        .filter((x): x is string => typeof x === "string")
        .map((x) => x.trim())
        .filter(Boolean)
        .slice(0, maxItems)
        .map((x) => x.slice(0, maxLen))
    : [];

/**
 * Persist an entire resume (header fields + sections + items) in one
 * transaction. Uses a replace strategy: the resume's sections are rebuilt from
 * the payload, which keeps the save logic simple and always consistent.
 */
export async function updateResume(
  id: string,
  input: ResumeInput
): Promise<ActionResult> {
  try {
    const userId = await requireUserId();

    const owned = await db.resume.findFirst({
      where: { id, userId },
      select: { id: true },
    });
    if (!owned) return { ok: false, error: "Resume not found" };

    const title = str(input.title, 120) || "Untitled Resume";
    const sections = (Array.isArray(input.sections) ? input.sections : [])
      .filter((s) => SECTION_TYPES.includes(s.type as SectionType))
      .slice(0, 20);

    await db.$transaction(async (tx) => {
      await tx.resume.update({
        where: { id },
        data: {
          title,
          template: str(input.template, 40) || "stockholm",
          accentColor: str(input.accentColor, 9) || "#2563eb",
          fullName: str(input.fullName, 120) || null,
          headline: str(input.headline, 160) || null,
          email: str(input.email, 160) || null,
          phone: str(input.phone, 40) || null,
          location: str(input.location, 120) || null,
          website: str(input.website, 200) || null,
        },
      });

      // Rebuild sections/items from the payload.
      await tx.resumeSection.deleteMany({ where: { resumeId: id } });

      for (let si = 0; si < sections.length; si++) {
        const s = sections[si];
        const items = (Array.isArray(s.items) ? s.items : []).slice(0, 50);
        await tx.resumeSection.create({
          data: {
            resumeId: id,
            type: s.type as SectionType,
            title: str(s.title, 80) || s.type,
            order: si,
            items: {
              create: items.map((it, ii) => ({
                title: str(it.title, 160),
                subtitle: str(it.subtitle, 160) || null,
                date: str(it.date, 40) || null,
                endDate: str(it.endDate, 40) || null,
                description: str(it.description, 2000) || null,
                url: str(it.url, 200) || null,
                location: str(it.location, 120) || null,
                bullets: strList(it.bullets, 20, 500),
                skills: strList(it.skills, 60, 60),
                order: ii,
              })),
            },
          },
        });
      }
    });

    revalidatePath(`/dashboard/resume/${id}`);
    revalidatePath("/dashboard/resumes");
    revalidatePath("/dashboard");
    return { ok: true, data: undefined };
  } catch (err) {
    console.error("[updateResume]", err);
    return { ok: false, error: "Could not save resume" };
  }
}

/** Rename a resume the user owns. */
export async function renameResume(
  id: string,
  title: string
): Promise<ActionResult> {
  try {
    const userId = await requireUserId();
    const clean = title.trim().slice(0, 120);
    if (!clean) return { ok: false, error: "Title cannot be empty" };

    const result = await db.resume.updateMany({
      where: { id, userId },
      data: { title: clean },
    });
    if (result.count === 0) return { ok: false, error: "Resume not found" };

    revalidatePath("/dashboard/resumes");
    return { ok: true, data: undefined };
  } catch (err) {
    console.error("[renameResume]", err);
    return { ok: false, error: "Could not rename resume" };
  }
}

/** Delete a resume the user owns (cascades to sections/items). */
export async function deleteResume(id: string): Promise<ActionResult> {
  try {
    const userId = await requireUserId();
    const result = await db.resume.deleteMany({ where: { id, userId } });
    if (result.count === 0) return { ok: false, error: "Resume not found" };

    revalidatePath("/dashboard/resumes");
    revalidatePath("/dashboard");
    return { ok: true, data: undefined };
  } catch (err) {
    console.error("[deleteResume]", err);
    return { ok: false, error: "Could not delete resume" };
  }
}
