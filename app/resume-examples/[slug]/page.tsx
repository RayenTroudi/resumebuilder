import { notFound } from "next/navigation";
import { RESUME_EXAMPLES, RESUME_SLUG_MAP } from "@/features/resume/resume-examples-data";
import { ExampleDetailView, SectorDetailView } from "./resume-detail-client";

/* ─── sector slug → sector label ─── */
const SECTOR_SLUG_MAP: Record<string, string> = {
  "education": "Education",
  "government": "Government",
  "engineering": "Engineering",
  "retail": "Retail",
  "healthcare": "Healthcare",
  "legal": "Legal",
  "finance": "Finance",
  "marketing": "Marketing",
  "information-technology": "Information Technology",
  "construction": "Construction",
  "social-services": "Social Services",
  "accounting": "Accounting",
  "maintenance-repair": "Maintenance & Repair",
};

function sectorToHref(sector: string) {
  return `/resume-examples/${sector.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-")}`;
}

export default async function ResumeExampleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  /* 1 — try exact example slug */
  const id = RESUME_SLUG_MAP[slug];
  if (id) {
    const example = RESUME_EXAMPLES.find((e) => e.id === id);
    if (example) {
      const sameSector = RESUME_EXAMPLES.filter((e) => e.id !== id && e.sector === example.sector);
      const others = RESUME_EXAMPLES.filter((e) => e.id !== id && e.sector !== example.sector);
      const moreExamples = [...sameSector, ...others].slice(0, 10);

      return (
        <ExampleDetailView
          example={example}
          sectorHref={sectorToHref(example.sector)}
          moreExamples={moreExamples}
          slugMap={RESUME_SLUG_MAP}
        />
      );
    }
  }

  /* 2 — try sector slug */
  const sectorLabel = SECTOR_SLUG_MAP[slug];
  if (sectorLabel) {
    const examples = RESUME_EXAMPLES.filter((e) => e.sector === sectorLabel);
    if (examples.length > 0) {
      return (
        <SectorDetailView
          sector={sectorLabel}
          featured={examples[0]}
          rest={examples.slice(1)}
          slugMap={RESUME_SLUG_MAP}
        />
      );
    }
  }

  notFound();
}
