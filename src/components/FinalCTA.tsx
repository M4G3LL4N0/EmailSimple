import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="glass rounded-[32px] p-10 text-center">
          <p className="eyebrow">Get early access</p>
          <h2 className="section-title mt-4">
            See what matters. Every day.
          </h2>
          <p className="section-copy mx-auto mt-6 max-w-2xl">
            EmailSimple turns inbox overload into a clean daily command layer
            for priorities, deadlines, and actions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/waitlist" className="primary-btn">
              Join the waitlist
            </Link>
            <Link href="/dashboard" className="secondary-btn">
              View dashboard
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
