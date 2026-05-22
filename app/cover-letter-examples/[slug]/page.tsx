import { notFound } from "next/navigation";
import { COVER_LETTER_TEMPLATES } from "@/features/cover-letter/cover-letter-data";
import { CoverLetterDetailView } from "./cover-letter-detail-client";

export default async function CoverLetterDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const template = COVER_LETTER_TEMPLATES.find((t) => t.slug === slug);
  if (!template) notFound();

  const others = COVER_LETTER_TEMPLATES.filter((t) => t.slug !== slug);

  return <CoverLetterDetailView template={template} others={others} />;
}
