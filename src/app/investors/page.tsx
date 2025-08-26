import Link from "next/link";

export default function InvestorsPage() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-2xl font-bold">Investors</h1>
      <p className="mt-3 text-zinc-300">
        We’re building a focused pipeline where cannabinoid pharmacology and rigorous clinical
        design intersect. Our near-term milestones include study initiations and partnership
        development.
      </p>

      <section className="mt-6 space-y-3">
        <div className="rounded-xl border border-white/10 p-4">
          <div className="font-semibold">Why now</div>
          <p className="text-sm text-zinc-300">
            Patient need is high, the preclinical signal is compelling, and study designs
            can de-risk translation.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 p-4">
          <div className="font-semibold">Near-term milestones</div>
          <ul className="list-disc pl-5 text-sm text-zinc-300">
            <li>Finalize protocols and site selection</li>
            <li>Kick-off concussion and pain studies</li>
            <li>Publish early data readouts</li>
          </ul>
        </div>

        <div className="rounded-xl border border-white/10 p-4">
          <div className="font-semibold">Learn more</div>
          <ul className="list-disc pl-5 text-sm">
            <li>
              <Link className="underline" href="/studies">
                Evidence base
              </Link>
            </li>
            <li>
              <Link className="underline" href="/news">
                Newsroom
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

