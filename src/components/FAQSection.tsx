const faqs = [
  {
    question: "Is EmailSimple just an email summarizer?",
    answer:
      "No. It is designed to turn email into priorities, deadlines, actions, follow-ups, and reply assistance.",
  },
  {
    question: "Who is it for?",
    answer:
      "Founders, operators, professionals, and teams whose inbox is tied to real work and real risk.",
  },
  {
    question: "Does it connect to live inboxes yet?",
    answer:
      "The current product experience is being structured for real integrations while remaining safe to demo and deploy.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title mt-4">Common questions</h2>
        </div>

        <div className="mt-10 grid gap-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="glass rounded-[24px] p-6">
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
