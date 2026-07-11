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

const DEFAULT_SECTIONS = [
  { type: "summary" as const, title: "Professional Summary", order: 0 },
  { type: "experience" as const, title: "Experience", order: 1 },
  { type: "education" as const, title: "Education", order: 2 },
  { type: "skills" as const, title: "Skills", order: 3 },
];

/** Create a new resume (with an empty default section scaffold). */
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

    const resume = await db.resume.create({
      data: {
        userId,
        title,
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
