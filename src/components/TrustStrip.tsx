import React from 'react';

export function TrustStrip() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow mx-auto">
            <span className="eyebrow-dot" />
            Why EmailSimple Wins          </div>
          <h2 className="section-title mt-5">
            Beyond summarization - real workflow automation
          </h2>
          <p className="section-copy mt-4">
            We don't just shorten your emails - we extract what matters and put it where it belongs in your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="glass rounded-[28px] p-6 text-center">
            <div className="text-[32px] mb-4">📋</div>
            <h3 className="text-[20px] font-bold">Automated Action Tracking</h3>
            <p className="text-muted mt-2">
              Automatically extract action items from emails and track them in your project management tools
            </p>
          </div>
          <div className="glass rounded-[28px] p-6 text-center">
            <div className="text-[32px] mb-4">⭐️</div>
            <h3 className="text-[20px] font-bold">Priority Scoring</h3>
            <p className="text-muted mt-2">
              Assign priority scores to emails based on team impact and urgency
            </p>
          </div>
          <div className="glass rounded-[28px] p-6 text-center">
            <div className="text-[32px] mb-4">👥</div>
            <h3 className="text-[20px] font-bold">Shared Inbox Management</h3>
            <p className="text-muted mt-2">
              Manage shared inboxes with delegated ownership and accountability tracking
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
