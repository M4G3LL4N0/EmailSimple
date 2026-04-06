import { PageShell } from "@/components/PageShell";
import { AccountConnect } from "@/components/AccountConnect";
import { Button } from "@/components/ui/button";

export default function OnboardingPage() {
  return (
    <PageShell showBackground={false} className="flex items-center justify-center">
      <div className="container max-w-4xl py-12">
        <div className="glass rounded-[32px] p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-4">
              Connect Your Inbox
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              EmailSimple works best when connected to your email provider. 
              We'll analyze your inbox to surface priorities, deadlines, and actions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Connect a real inbox</h2>
              <AccountConnect />
              <p className="text-sm text-white/60">
                We use OAuth for secure, read-only access. Your data stays private.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Try with demo data</h2>
              <div className="glass-soft rounded-[24px] p-6">
                <p className="mb-4">
                  Explore EmailSimple with realistic demo data showing how it works.
                </p>
                <Button variant="secondary" className="w-full">
                  Launch Demo Dashboard
                </Button>
              </div>
              <p className="text-sm text-white/60">
                You can connect your real inbox later from settings.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-lg font-medium mb-4">How we protect your data</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Read-only access",
                  description: "We never modify or send emails from your account"
                },
                {
                  title: "Encrypted storage",
                  description: "All data is encrypted at rest and in transit"
                },
                {
                  title: "No human access",
                  description: "Your emails are processed automatically by our systems"
                }
              ].map((item) => (
                <div key={item.title} className="glass-soft rounded-[20px] p-4">
                  <h4 className="font-medium mb-2">{item.title}</h4>
                  <p className="text-sm text-white/60">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
