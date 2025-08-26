import Link from "next/link";
import type { Study } from "@/types/study";
import raw from "@/data/studies.json";

const studies = raw as Study[];

export default function Studies() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Studies</h1>
      <ul className="grid gap-4">
        {studies.map((s) => (
          <li key={s.slug} className="rounded-xl border border-white/10 p-4">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-zinc-400">
              {[s.design, s.population].filter(Boolean).join(" · ")}
            </p>
            <Link className="underline text-sm" href={`/studies/${s.slug}`}>
              View study
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

