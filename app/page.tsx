import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/features/landing/hero-section";
import { TrustedBy } from "@/features/landing/trusted-by";
import { FeaturesGrid } from "@/features/landing/features-grid";
import { ResumeShowcase } from "@/features/landing/resume-showcase";
import { CoverLetterShowcase } from "@/features/landing/cover-letter-showcase";
import { AIFeaturesSection } from "@/features/landing/ai-features";
import { Testimonials } from "@/features/landing/testimonials";
import { PricingPreview } from "@/features/landing/pricing-preview";
import { FAQ } from "@/features/landing/faq";
import { CTAFooter } from "@/features/landing/cta-footer";
import { SiteFooter } from "@/features/landing/site-footer";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden w-full" suppressHydrationWarning>
      <Navbar transparent />
      <HeroSection />
      <TrustedBy />
      <FeaturesGrid />
      <ResumeShowcase />
      <CoverLetterShowcase />
      <AIFeaturesSection />
      <Testimonials />
      <PricingPreview />
      <FAQ />
      <CTAFooter />
      <SiteFooter />
    </div>
  );
}
