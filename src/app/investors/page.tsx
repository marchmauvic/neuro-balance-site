import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Investors — Neuro Balance' };

type Milestone = { quarter: string; summary: string };
type Leader = { name: string; role: string; blurb?: string; href?: string };

const milestones: Milestone[] = [
  { quarter: 'Q4 2025', summary: 'Protocol finalize for concussion pilot; IRB submission' },
  { quarter: 'Q1 2026', summary: 'First patient in; pain indication feasibility readout' },
];

const leadership: Leader[] = [
  {
    name: 'Ethan Russo, MD',
    role: 'Scientific Advisor',
    blurb: 'Neurologist and cannabinoid researcher',
    href: 'https://ethanrusso.org/about-ethan-russo-md/',
  },
];

export default function InvestorsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-3xl font-bold">Investors</h1>
      <p className="mt-2 text-zinc-300">
        Focused strategy, capital discipline, and rigorous science. This page summarizes our plans and
        the people behind them.
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Milestones</h2>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          {milestones.map((m) => (
            <li key={m.quarter}>
              <span className="font-medium">{m.quarter} — </span>
              <span>{m.summary}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Leadership</h2>
        <ul className="mt-3 grid gap-3">
          {leadership.map((p) => (
            <li key={p.name} className="rounded-xl border border-white/10 p-4">
              <div className="font-medium">{p.name}</div>
              <div className="text-sm text-zinc-400">
                {p.role}{p.blurb ? ` — ${p.blurb}` : ''}
              </div>
              {p.href ? (
                <a href={p.href} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm underline">
                  Learn more
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">More</h2>
        <ul className="mt-3 grid gap-2">
          <li><Link href="/studies" className="underline">Evidence base</Link></li>
          <li><Link href="/news" className="underline">News & updates</Link></li>
        </ul>
      </section>
    </main>
  );
}

