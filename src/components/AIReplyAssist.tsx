"use client";

import { useState } from "react";

type ReplySuggestion = {
  id: string;
  thread: string;
  context: string;
  draft: string;
};

const suggestions: ReplySuggestion[] = [
  {
    id: "1",
    thread: "Client contract approval",
    context: "Client is waiting on confirmation to move forward.",
    draft:
      "Thanks for sending this over. I reviewed it and I’m good to move forward. Please send the next steps and I’ll take a look today.",
  },
  {
    id: "2",
    thread: "Recruiter follow-up",
    context: "Recruiter resurfaced an opportunity and is awaiting response.",
    draft:
      "Thanks for following up. I’m interested and would be happy to learn more. Please send over the details and a few times that could work this week.",
  },
  {
    id: "3",
    thread: "Invoice reminder",
    context: "Payment-related email needs acknowledgment.",
    draft:
      "Thanks for the reminder. I’ve seen this and I’m reviewing it now. I’ll follow up shortly with confirmation and next steps.",
  },
];

export function AIReplyAssist() {
  const [activeId, setActiveId] = useState<string>(suggestions[0].id);

  const active =
    suggestions.find((item) => item.id === activeId) ?? suggestions[0];

  return (
    <section className="glass rounded-[28px] p-6">
      <div className="mb-5">
        <p className="text-xs uppercase tracking-[0.18em] text-white/45">
          Context-Aware Composer
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
          Intelligent Reply Assistant
        </h2>
        <p className="mt-2 text-sm text-white/65">
          Drafts tailored to thread context, tone, and urgency
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-3">
          {suggestions.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={`glass-soft rounded-[20px] p-4 text-left transition ${
                item.id === active.id
                  ? "border border-cyan-400/30 bg-cyan-500/10"
                  : ""
              }`}
            >
              <div className="text-sm font-semibold text-white">
                {item.thread}
              </div>
              <div className="mt-2 text-sm leading-6 text-white/60">
                {item.context}
              </div>
            </button>
          ))}
        </div>

        <div className="glass-soft rounded-[22px] p-5">
          <div className="text-sm text-cyan-200">{active.thread}</div>
          <p className="mt-3 text-sm leading-7 text-white/65">
            {active.context}
          </p>

          <div className="mt-5 rounded-[18px] border border-white/10 bg-black/20 p-4">
            <p className="text-sm leading-7 text-white/80">{active.draft}</p>
          </div>

          <div className="mt-4 flex gap-3">
            <button type="button" className="primary-btn">
              Use draft
            </button>
            <button type="button" className="secondary-btn">
              Regenerate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
