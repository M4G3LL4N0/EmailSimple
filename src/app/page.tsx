import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FeatureSection } from '@/components/FeatureSection';
import { HowItWorks } from '@/components/HowItWorks';
import { PricingSection } from '@/components/PricingSection';
import { WaitlistSection } from '@/components/WaitlistSection';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <FeatureSection />
      <HowItWorks />
      <PricingSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
