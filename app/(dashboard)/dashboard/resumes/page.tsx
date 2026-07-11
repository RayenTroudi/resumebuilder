import { getResumes } from "@/lib/actions/resume";
import { ResumesClient } from "./resumes-client";

export const metadata = {
  title: "My Resumes · CareerForge AI",
};

// User-scoped data — never statically cached.
export const dynamic = "force-dynamic";

export default async function ResumesPage() {
  const resumes = await getResumes();
  return <ResumesClient resumes={resumes} />;
}
