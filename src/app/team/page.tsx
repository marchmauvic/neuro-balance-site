import teamRaw from "../../data/team.json";

type TeamMember = {
  name: string;
  role?: string;
  bio?: string;
  url?: string;
};

const team: TeamMember[] = teamRaw as unknown as TeamMember[];

export default function TeamPage() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="mb-4 text-2xl font-bold">Team</h1>
      <ul className="space-y-4">
        {team.map((m, i) => (
          <li key={i} className="rounded-xl border border-white/10 p-4">
            <div className="text-lg font-semibold">{m.name}</div>
            {m.role && <div className="text-sm text-zinc-400">{m.role}</div>}
            {m.bio && <p className="mt-2 text-sm text-zinc-300">{m.bio}</p>}
            {m.url && (
              <a
                className="mt-2 inline-block text-sm underline"
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Profile
              </a>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}

