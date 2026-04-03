import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProblemSection } from '@/app/components/ProblemSection';
import { FeatureSection } from '@/components/FeatureSection';
import { HowItWorks } from '@/components/HowItWorks';
import { DifferentiationSection } from '@/app/components/DifferentiationSection';
import { UseCasesSection } from '@/app/components/UseCasesSection';
import { MarketOpportunity } from '@/app/components/MarketOpportunity';
import { PricingSection } from '@/components/PricingSection';
import { FAQSection } from '@/app/components/FAQSection';
import { WaitlistSection } from '@/components/WaitlistSection';
import { FinalCTA } from '@/app/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
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
      <Footer />
    </main>
  );
}
