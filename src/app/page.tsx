import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { ProblemSection } from "@/app/components/ProblemSection";
import { FeatureSection } from "@/components/FeatureSection";
import { HowItWorks } from "@/components/HowItWorks";
import { DifferentiationSection } from "@/app/components/DifferentiationSection";
import { UseCasesSection } from "@/app/components/UseCasesSection";
import { MarketOpportunity } from "@/app/components/MarketOpportunity";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/app/components/FAQSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { FinalCTA } from "@/app/components/FinalCTA";

export default function Page() {
  return (
    <PageShell>
      <PageHero
        title="Your inbox, simplified into what matters"
        subtitle="EmailSimple turns overwhelming email into a clean daily brief with priorities, deadlines, replies, follow-ups, and calendar-ready actions"
        eyebrow="Inbox clarity, without inbox chaos"
        cta={{ text: "Join the Waitlist", href: "#waitlist" }}
        secondaryCta={{ text: "See the Product", href: "/dashboard" }}
      />
      <ProblemSection />
      <FeatureSection />
      <HowItWorks />
      <DifferentiationSection />
      <UseCasesSection />
      <MarketOpportunity />
      <PricingSection />
      <FAQSection />
      <WaitlistSection />
      <FinalCTA />
    </PageShell>
  );
}
