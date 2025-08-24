import Link from "next/link";
import ClauseHighlighter from "@/components/ClauseHighlighter";

export default function Home() {
  const clauseLines = [
    {
      text: "3.2 Termination: Either party may terminate with a ninety (90) day written notice.",
      highlights: [{ start: 47, end: 68, tone: "warn" }], // "ninety (90) day"
    },
    {
      text: "4.1 Late Fee: A charge of twelve percent (12%) per annum applies on overdue amounts.",
      highlights: [{ start: 28, end: 57, tone: "ok" }], // "twelve percent (12%)"
    },
    {
      text: "6.3 Auto-Renewal: This Agreement auto-renews unless cancelled 30 days prior to expiry.",
      highlights: [{ start: 16, end: 28, tone: "warn" }], // "auto-renews"
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-10 text-center">
        <h1 className="fade-up text-5xl font-bold tracking-tight">
          See Through the Fine Print <span className="inline-block">👀</span>
        </h1>
        <p className="fade-up-delay mx-auto mt-6 max-w-2xl text-lg leading-7 text-gray-700">
          Legaleyz makes contracts simple, visual, and transparent. Upload any agreement
          and instantly understand every clause, obligation, and risk.
        </p>
        <div className="fade-up-delay-2 mt-8 flex justify-center gap-4">
          <Link href="/upload" className="rounded-md bg-black px-6 py-3 text-white hover:bg-gray-800">
            Get Started
          </Link>
          <Link href="/about" className="rounded-md border border-black px-6 py-3 hover:bg-gray-100">
            Learn More
          </Link>
        </div>
      </section>

      {/* Animated Clause Highlighter */}
      <section className="mx-auto max-w-4xl px-6 py-6">
        <h2 className="mb-3 text-left text-lg font-semibold">Clause preview</h2>
        <ClauseHighlighter lines={clauseLines} />
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-6 py-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="fade-up rounded-xl border bg-white p-6 text-left">
          <h3 className="text-xl font-semibold">Clause Summaries</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Every clause explained in plain English—no legal jargon.
          </p>
        </div>
        <div className="fade-up-delay rounded-xl border bg-white p-6 text-left opacity-0">
          <h3 className="text-xl font-semibold">Risk Highlighting</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Auto-flags risky terms like long notice periods or high penalties.
          </p>
        </div>
        <div className="fade-up-delay-2 rounded-xl border bg-white p-6 text-left opacity-0">
          <h3 className="text-xl font-semibold">Visual Dashboards</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Timelines and waterfalls so you see obligations at a glance.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Legaleyz · A product from{" "}
          <Link href="https://uupp.app" className="underline hover:text-black">
            uupp.app
          </Link>
        </p>
      </footer>
    </main>
  );
}
