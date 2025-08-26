import type { FC } from "react";

type TeamMember = {
  name: string;
  role?: string;
  bio?: string;
  headshot?: string;
  linkedin?: string;
};

import raw from "@/data/team.json";
const people = raw as TeamMember[];

const TeamPage: FC = () => (
  <main className="p-8 max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold mb-6">Team</h1>
    <ul className="grid gap-6">
      {people.map((p, i) => (
        <li key={i} className="rounded-xl border border-white/10 p-4">
          <h3 className="font-semibold">{p.name}</h3>
          {p.role && <p className="text-sm text-zinc-400">{p.role}</p>}
          {p.bio && <p className="text-sm text-zinc-300 mt-2">{p.bio}</p>}
        </li>
      ))}
    </ul>
  </main>
);

export default TeamPage;

