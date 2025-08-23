import Link from "next/link";
import allStudies from "../../../data/studies.json";
import type { Study } from "../../../types/study";

type Params = { slug: string };

export function generateStaticParams() {
  const items = allStudies as Study[];
  return items.map((s) => ({ slug: s.slug }));
}

export default function StudyPage({ params }: { params: Params }) {
  const s = (allStudies as Study[]).find((x) => x.slug === params.slug);
  if (!s) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold">Study not found</h1>
        <p className="mt-2">
          Try the list at <Link href="/studies" className="underline">/studies</Link>.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-3xl font-bold">{s.title}</h1>
      <p className="text-sm text-neutral-600">
        {s.year}{s.venue ? ` • ${s.venue}` : ""} • {s.design}
      </p>

      <section className="mt-6 space-y-1 text-sm">
        <div><strong>Indication:</strong> {s.indication}</div>
        <div><strong>Population:</strong> {s.population}</div>
        <div><strong>n:</strong> {s.n}</div>
        <div><strong>Endpoints:</strong> {s.endpoints?.map((e) => `${e.type}: ${e.name}`).join("; ")}</div>
      </section>

      <section className="mt-8">
        <h2 className="font-semibold text-xl">Summary</h2>
        <p className="mt-2">{s.results}</p>

        {s.keyFindings?.length ? (
          <>
            <h3 className="mt-6 font-semibold">Key findings</h3>
            <ul className="mt-2 list-disc ml-6">
              {s.keyFindings.map((k, i) => <li key={i}>{k}</li>)}
            </ul>
          </>
        ) : null}

        {s.assets?.length ? (
          <>
            <h3 className="mt-6 font-semibold">Resources</h3>
            <ul className="list-disc ml-6">
              {s.assets.map((a, i) => (
                <li key={i}>
                  <a className="underline" href={a.url} target="_blank" rel="noreferrer">{a.label}</a>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </section>
    </main>
  );
}

