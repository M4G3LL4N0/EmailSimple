import { 
  PageShell,
  PageHero,
  ProblemSection,
  DifferentiationSection,
  UseCasesSection,
  MarketOpportunity,
  FAQSection,
  WaitlistSection,
  FinalCTA
} from "@/components";

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
      <DifferentiationSection />
      <UseCasesSection />
      <MarketOpportunity />
      <FAQSection />
      <WaitlistSection />
      <FinalCTA />
    </PageShell>
  );
}
