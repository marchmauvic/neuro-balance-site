import type { Metadata } from 'next';
import teamData from '../../data/team.json';

export const metadata: Metadata = { title: 'Team — Neuro Balance' };

type LinkRef = { label: string; url: string };
type TeamMember = { name: string; role: string; bio?: string; links?: LinkRef[] };

const team: TeamMember[] = teamData as TeamMember[];

export default function TeamPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-3xl font-bold">Team</h1>
      <div className="mt-6 grid gap-3">
        {team.map((m) => (
          <article key={m.name} className="rounded-xl border border-white/10 p-4">
            <h2 className="font-semibold">{m.name}</h2>
            <div className="text-sm text-zinc-400">{m.role}</div>
            {m.bio ? <p className="mt-2 text-sm text-zinc-300">{m.bio}</p> : null}
            {m.links && m.links.length > 0 ? (
              <ul className="mt-2 flex flex-wrap gap-3 text-sm">
                {m.links.map((l) => (
                  <li key={l.url}>
                    <a href={l.url} target="_blank" rel="noreferrer" className="underline">{l.label}</a>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </main>
  );
}

