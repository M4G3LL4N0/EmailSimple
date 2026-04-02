import React from 'react';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[92px] pb-[72px]">
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,17,31,0.6)] to-[rgba(7,17,31,0.5)]" />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center">
          <div>
            <div className="eyebrow">
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
        </div>
      </div>
    </section>
  );
}
