import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProblemSection } from '@/components/ProblemSection';
import { FeatureSection } from '@/components/FeatureSection';
import { HowItWorks } from '@/components/HowItWorks';
import { DifferentiationSection } from '@/components/DifferentiationSection';
import { UseCasesSection } from '@/components/UseCasesSection';
import { MarketOpportunity } from '@/components/MarketOpportunity';
import { PricingSection } from '@/components/PricingSection';
import { FAQSection } from '@/components/FAQSection';
import { WaitlistSection } from '@/components/WaitlistSection';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main className="bg-[#070F1D]">
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
