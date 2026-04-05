"use client";

import { useMemo, useState } from "react";

type BriefItem = {
  id: string;
  title: string;
  meta: string;
  body: string;
  priority: "High" | "Medium" | "Low";
};

const initialBriefItems: BriefItem[] = [
  {
    id: "1",
    title: "Client contract needs approval",
    meta: "Legal • Due today • 3 stakeholders",
    body: "This contract requires your signature before the client can proceed. Delaying risks pushing the project timeline back by 1-2 weeks. The legal team has already reviewed and approved the terms.",
    priority: "High",
  },
  {
    id: "2",
    title: "Schedule request for Thursday",
    meta: "Calendar • Time-sensitive • 2 participants",
    body: "Your client proposed a meeting time that conflicts with an existing commitment. Responding today ensures we can find an alternative before their calendar fills up.",
    priority: "Medium",
  },
  {
    id: "3",
    title: "Invoice #INV-2023-045 pending",
    meta: "Finance • 2 days overdue • $4,500",
    body: "This invoice is now past due. The vendor has followed up twice. Payment today avoids potential service interruptions and maintains our good standing.",
    priority: "High",
  },
  {
    id: "4",
    title: "Recruiter follow-up: Senior PM role",
    meta: "Opportunity • 1 day old • $180-220k",
    body: "The recruiter has shared additional details about the compensation package and team structure. Responding within 48 hours keeps you in their active candidate pool.",
    priority: "Low",
  },
];

const priorityClasses: Record<BriefItem["priority"], string> = {
  High: "border border-red-400/20 bg-red-500/10 text-red-200",
  Medium: "border border-amber-400/20 bg-amber-500/10 text-amber-200",
  Low: "border border-emerald-400/20 bg-emerald-500/10 text-emerald-200",
};

export function DailyBrief() {
  const [dismissedIds, setDismissedIds] = useState<string[]>([]);

  const briefItems = useMemo(
    () => initialBriefItems.filter((item) => !dismissedIds.includes(item.id)),
    [dismissedIds]
  );

  return (
    <section className="glass rounded-[28px] p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">
            Your Action Plan
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
            Today&apos;s Critical Path
          </h2>
          <p className="mt-2 text-sm text-white/65">
            Prioritized by impact and urgency. Tap to expand details.
          </p>
        </div>

        <div className="glass-soft rounded-[16px] px-4 py-2 text-sm text-white/75">
          {briefItems.length} critical items
        </div>
      </div>

      {briefItems.length === 0 ? (
        <div className="glass-soft rounded-[22px] p-6 text-sm text-white/65">
          You cleared the current brief. Nothing urgent is left for now.
        </div>
      ) : (
        <div className="grid gap-4">
          {briefItems.map((item) => (
            <article
              key={item.id}
              className="glass-soft rounded-[22px] p-5 transition hover:bg-white/[0.07]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-cyan-200/80">{item.meta}</p>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${priorityClasses[item.priority]}`}
                  >
                    {item.priority}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setDismissedIds((current) => [...current, item.id])
                    }
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60 transition hover:border-white/20 hover:text-white"
                  >
                    Dismiss
                  </button>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-white/68">{item.body}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
