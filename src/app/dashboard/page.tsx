"use client";

import { useState } from "react";

function Button({
  children,
  className = "",
  variant = "primary",
  type = "button",
  disabled = false,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition";
  const styles =
    variant === "secondary"
      ? "border border-white/10 bg-white/5 text-white hover:bg-white/10"
      : "bg-white text-black hover:opacity-90";

  return (
    <button type={type} disabled={disabled} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}

export default function DashboardPage() {
  const [syncing, setSyncing] = useState(false);

  async function handleSync(e: React.FormEvent) {
    e.preventDefault();
    setSyncing(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSyncing(false);
  }

  return (
    <main className="min-h-screen bg-[#0b0f14] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">EmailSimple</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em]">Dashboard</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
              Monitor inbox activity, review sync status, and keep your lightweight email workflow moving.
            </p>
          </div>
          <form onSubmit={handleSync}>
            <Button type="submit" variant="secondary" className="px-4 py-2 text-sm" disabled={syncing}>
              {syncing ? (
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white/70" />
                  Syncing...
                </span>
              ) : (
                "Sync Now"
              )}
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { label: "Unread", value: "18", sub: "Needs attention" },
            { label: "Drafts", value: "6", sub: "Pending review" },
            { label: "Sent Today", value: "24", sub: "Outbound activity" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/55">{item.label}</p>
              <p className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{item.value}</p>
              <p className="mt-2 text-sm text-white/45">{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Recent Activity</h2>
                <p className="mt-1 text-sm text-white/50">Latest inbox and outbound events</p>
              </div>
              <Button variant="secondary" className="secondary-btn w-full max-w-[160px] py-2 text-sm">
                View Full Inbox
              </Button>
            </div>

            <div className="space-y-3">
              {[
                { title: "New lead reply received", meta: "2 minutes ago", status: "Inbox" },
                { title: "Proposal follow-up sent", meta: "16 minutes ago", status: "Sent" },
                { title: "Draft saved for client outreach", meta: "38 minutes ago", status: "Draft" },
                { title: "Automation sync completed", meta: "1 hour ago", status: "System" },
              ].map((item) => (
                <div
                  key={`${item.title}-${item.meta}`}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-medium text-white">{item.title}</p>
                    <p className="mt-1 text-xs text-white/45">{item.meta}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <aside className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Quick Actions</h2>
            <p className="mt-1 text-sm text-white/50">Common tasks for fast execution</p>

            <div className="mt-5 grid gap-3">
              <Button className="w-full justify-center">Compose Message</Button>
              <Button variant="secondary" className="w-full justify-center">
                Review Drafts
              </Button>
              <Button variant="secondary" className="w-full justify-center">
                Manage Contacts
              </Button>
            </div>

            <div className="mt-8 rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm font-medium">Sync Health</p>
              <p className="mt-2 text-sm text-white/60">
                Last successful sync completed moments ago. All core systems appear healthy.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
