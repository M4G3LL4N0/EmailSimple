"use client";

import { useMemo, useState } from "react";

type BriefItem = {
  id: string;
  title: string;
  meta: string;
  body: string;
  priority: "Critical" | "High" | "Medium" | "Low";
  status: "new" | "seen" | "completed" | "deferred";
  context: {
    stakeholders: string[];
    deadline?: Date;
    value?: number;
    risks: string[];
    benefits: string[];
    relatedItems?: string[];
  };
  actions: {
    suggested: string;
    alternatives?: string[];
    estimatedTime: number; // minutes
    resourcesNeeded?: string[];
  };
};

const initialBriefItems: BriefItem[] = [
  {
    id: "1",
    title: "Client contract needs approval",
    meta: "Legal • Due today • 3 stakeholders",
    body: "This contract requires your signature before the client can proceed. Delaying risks pushing the project timeline back by 1-2 weeks. The legal team has already reviewed and approved the terms.",
    priority: "Critical",
    status: "new",
    context: {
      stakeholders: ["John Smith (Client)", "Jane Doe (Legal)", "Mike Johnson (Finance)"],
      deadline: new Date(new Date().setHours(17, 0)), // 5pm today
      value: 250000, // $250k deal value
      risks: ["Project delay", "Client frustration", "Revenue impact"],
      benefits: ["Deal closure", "Strengthened relationship", "Revenue realization"],
      relatedItems: ["INV-2023-045"]
    },
    actions: {
      suggested: "Review and approve contract by EOD today",
      alternatives: ["Request legal review", "Schedule call with client"],
      estimatedTime: 30,
      resourcesNeeded: ["Contract PDF", "Approval workflow"]
    }
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
  Critical: "border border-red-400/20 bg-red-500/10 text-red-200",
  High: "border border-orange-400/20 bg-orange-500/10 text-orange-200",
  Medium: "border border-amber-400/20 bg-amber-500/10 text-amber-200",
  Low: "border border-emerald-400/20 bg-emerald-500/10 text-emerald-200",
};

const statusClasses: Record<BriefItem["status"], string> = {
  new: "border border-blue-400/20 bg-blue-500/10 text-blue-200",
  seen: "border border-purple-400/20 bg-purple-500/10 text-purple-200",
  completed: "border border-green-400/20 bg-green-500/10 text-green-200",
  deferred: "border border-gray-400/20 bg-gray-500/10 text-gray-200",
};

export function DailyBrief() {
  const [items, setItems] = useState<BriefItem[]>(initialBriefItems);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"all" | "active" | "completed">("active");

  const filteredItems = useMemo(() => {
    return items.filter(item => 
      viewMode === "all" || 
      (viewMode === "active" && item.status !== "completed") ||
      (viewMode === "completed" && item.status === "completed")
    );
  }, [items, viewMode]);

  const handleStatusChange = (id: string, status: BriefItem["status"]) => {
    setItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, status } : item
      )
    );
  };

  const stats = useMemo(() => {
    const activeItems = items.filter(item => item.status !== "completed");
    return {
      total: items.length,
      active: activeItems.length,
      completed: items.filter(item => item.status === "completed").length,
      critical: activeItems.filter(item => item.priority === "Critical").length,
      high: activeItems.filter(item => item.priority === "High").length,
      medium: activeItems.filter(item => item.priority === "Medium").length,
      low: activeItems.filter(item => item.priority === "Low").length,
      valueAtRisk: activeItems.reduce((sum, item) => sum + (item.context.value || 0), 0),
      estimatedTime: activeItems.reduce((sum, item) => sum + (item.actions.estimatedTime || 0), 0)
    };
  }, [items]);

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

        <div className="flex items-center gap-4">
          <div className="glass-soft rounded-[16px] px-4 py-2 text-sm">
            <span className="text-white/75">Total:</span> {initialBriefItems.length}
          </div>
          <div className="glass-soft rounded-[16px] px-4 py-2 text-sm">
            <span className="text-white/75">Remaining:</span> {briefItems.length}
          </div>
          <div className="glass-soft rounded-[16px] px-4 py-2 text-sm">
            <span className="text-white/75">Completed:</span> {dismissedIds.length}
          </div>
        </div>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <button
          onClick={() => setViewMode("all")}
          className={`text-sm px-4 py-2 rounded-full transition ${
            viewMode === "all"
              ? "bg-white/10 text-white"
              : "bg-transparent text-white/60 hover:bg-white/5"
          }`}
        >
          All ({stats.total})
        </button>
        <button
          onClick={() => setViewMode("active")}
          className={`text-sm px-4 py-2 rounded-full transition ${
            viewMode === "active"
              ? "bg-white/10 text-white"
              : "bg-transparent text-white/60 hover:bg-white/5"
          }`}
        >
          Active ({stats.active})
        </button>
        <button
          onClick={() => setViewMode("completed")}
          className={`text-sm px-4 py-2 rounded-full transition ${
            viewMode === "completed"
              ? "bg-white/10 text-white"
              : "bg-transparent text-white/60 hover:bg-white/5"
          }`}
        >
          Completed ({stats.completed})
        </button>
      </div>

      {filteredItems.length === 0 ? (
        <div className="glass-soft rounded-[22px] p-6 text-sm text-white/65">
          {viewMode === "completed"
            ? "No completed items yet"
            : "You cleared the current brief. Nothing urgent is left for now."}
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredItems.map((item) => (
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
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${statusClasses[item.status]}`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-white/68">{item.body}</p>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-white/80">Context</p>
                  <div className="text-sm text-white/60">
                    <p>Stakeholders: {item.context.stakeholders.join(", ")}</p>
                    {item.context.deadline && (
                      <p>Deadline: {item.context.deadline.toLocaleString()}</p>
                    )}
                    {item.context.value && (
                      <p>Value: ${item.context.value.toLocaleString()}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-white/80">Actions</p>
                  <div className="text-sm text-white/60">
                    <p>Suggested: {item.actions.suggested}</p>
                    <p>Estimated Time: {item.actions.estimatedTime} mins</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleStatusChange(item.id, "completed")}
                  className="text-sm px-3 py-1 rounded-full bg-green-500/10 text-green-200 hover:bg-green-500/20"
                >
                  Complete
                </button>
                <button
                  onClick={() => handleStatusChange(item.id, "deferred")}
                  className="text-sm px-3 py-1 rounded-full bg-gray-500/10 text-gray-200 hover:bg-gray-500/20"
                >
                  Defer
                </button>
                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="text-sm px-3 py-1 rounded-full bg-white/10 text-white hover:bg-white/20"
                >
                  {expandedId === item.id ? "Collapse" : "Expand"}
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
