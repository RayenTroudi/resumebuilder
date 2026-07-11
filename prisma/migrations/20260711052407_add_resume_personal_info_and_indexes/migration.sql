-- AlterTable
ALTER TABLE "resumes" ADD COLUMN     "email" TEXT,
ADD COLUMN     "fullName" TEXT,
ADD COLUMN     "headline" TEXT,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "website" TEXT;

-- CreateIndex
CREATE INDEX "resume_section_items_sectionId_idx" ON "resume_section_items"("sectionId");

-- CreateIndex
CREATE INDEX "resume_sections_resumeId_idx" ON "resume_sections"("resumeId");

-- CreateIndex
CREATE INDEX "resumes_userId_idx" ON "resumes"("userId");
