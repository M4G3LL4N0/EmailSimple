import Link from "next/link";

const brief = [
  {
    title: "Approval waiting on you",
    detail: "A vendor asked for a yes before noon. The thread is the decision, not a pile of copies.",
  },
  {
    title: "Invoice with a date",
    detail: "The due date is in the message. It sits above newsletters and automated receipts.",
  },
  {
    title: "Follow-up going quiet",
    detail: "A conversation you started has not moved. The brief names it before it disappears.",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#0b0f14] py-10 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-xs uppercase tracking-[0.18em] text-white/45">Illustrative preview</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em]">The morning brief</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
          A calmer morning starts with the approval, the invoice, and the conversation about to go quiet.
        </p>
        <ol className="mt-8 grid gap-4">
          {brief.map((item, index) => (
            <li key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs text-white/45">{index + 1}</p>
              <h2 className="mt-1 text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/70">{item.detail}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8">
          <Link href="/" className="text-sm text-white/80 underline">
            Back to EmailSimple
          </Link>
        </p>
      </div>
    </main>
  );
}
