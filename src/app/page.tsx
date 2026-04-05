import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { ProblemSection } from "@/components/ProblemSection";
import { FeatureSection } from "@/components/FeatureSection";
import { HowItWorks } from "@/components/HowItWorks";
import { DifferentiationSection } from "@/components/DifferentiationSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { MarketOpportunity } from "@/components/MarketOpportunity";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { FinalCTA } from "@/components/FinalCTA";

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
