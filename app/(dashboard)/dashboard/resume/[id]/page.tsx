import { notFound } from "next/navigation";
import { getResume } from "@/lib/actions/resume";
import { ResumeEditor, type EditorResume } from "./editor-client";

export const dynamic = "force-dynamic";

export const metadata = { title: "Resume Editor · CareerForge AI" };

export default async function ResumeEditorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const resume = await getResume(id);
  if (!resume) notFound();

  // Project to a plain, serializable DTO for the client editor.
  const dto: EditorResume = {
    id: resume.id,
    title: resume.title,
    template: resume.template,
    accentColor: resume.accentColor,
    fullName: resume.fullName ?? "",
    headline: resume.headline ?? "",
    email: resume.email ?? "",
    phone: resume.phone ?? "",
    location: resume.location ?? "",
    website: resume.website ?? "",
    score: resume.score,
    atsScore: resume.atsScore,
    sections: resume.sections.map((s) => ({
      type: s.type,
      title: s.title,
      items: s.items.map((it) => ({
        title: it.title,
        subtitle: it.subtitle ?? "",
        date: it.date ?? "",
        endDate: it.endDate ?? "",
        description: it.description ?? "",
        url: it.url ?? "",
        location: it.location ?? "",
        bullets: it.bullets ?? [],
        skills: it.skills ?? [],
      })),
    })),
  };

  return <ResumeEditor resume={dto} />;
}
