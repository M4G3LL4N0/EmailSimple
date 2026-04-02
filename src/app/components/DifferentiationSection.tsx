import React from 'react';

// Define a type for the differentiator items
interface Differentiator {
  title: string;
  icon: string;
  description: string;
}

// Define the differentiator items array
const differentiators: Differentiator[] = [
  {
    title: "Automated Action Tracking",
    icon: "📋",
    description: "Automatically extract action items from emails and track them in your project management tools"
  },
  {
    title: "Priority Scoring",
    icon: "⭐️",
    description: "Assign priority scores to emails based on team impact and urgency"
  },
  {
    title: "Shared Inbox Management",
    icon: "👥",
    description: "Manage shared inboxes with delegated ownership and accountability tracking"
  }
];

export function DifferentiationSection() {
  return (
    <section className="py-[80px] bg-gradient-to-b from-[rgba(7,17,31,0.5)] to-[rgba(7,17,31,0.9)]">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow mx-auto">
            <span className="eyebrow-dot" />
            Why EmailSimple Wins
          </div>
          <h2 className="section-title mt-5">
            Beyond summarization - real workflow automation
          </h2>
          <p className="section-copy mt-4">
            We don't just shorten your emails - we extract what matters and put it where it belongs in your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {differentiators.map((item) => (
            <div key={item.title} className="glass rounded-[28px] p-6 text-center">
              <div className="text-[32px] mb-4">{item.icon}</div>
              <h3 className="text-[20px] font-bold">{item.title}</h3>
              <p className="text-muted mt-2">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="glass rounded-[28px] p-6 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-8 items-center">
            <div>
              <h3 className="text-[22px] font-bold">
                Built for how teams actually work
              </h3>
              <p className="text-muted mt-3">
                EmailSimple understands shared inboxes, delegated items, and team workflows - not just individual productivity.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-blue-2">✓</span>
                  <span>Shared action tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-2">✓</span>
                  <span>Team priority scoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-2">✓</span>
                  <span>Collaboration insights</span>
                </li>
              </ul>
            </div>
            <div className="glass-soft rounded-[22px] p-4 aspect-[4/3] flex items-center justify-center">
              <div className="text-center">
                <div className="text-muted text-sm">Team Workflow View</div>
                <div className="text-2xl mt-2">👥 → 📅 → ✅</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
