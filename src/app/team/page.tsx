import team from "../../data/team.json";

export const metadata = {
  title: "Team | Neuro Balance",
};

export default function TeamPage() {
  const people = team as any[];
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold">Team & Advisors</h1>
      <ul className="mt-6 grid gap-4">
        {people.map((p) => (
          <li key={p.name} className="rounded-xl border border-white/10 p-5">
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="text-sm text-zinc-400">{p.title}</p>
            <p className="mt-2 text-zinc-300">{p.bio}</p>
            {p.link && (
              <a className="mt-2 inline-block underline text-sm" href={p.link} target="_blank" rel="noreferrer">
                Learn more
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

