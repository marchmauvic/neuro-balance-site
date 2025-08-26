// src/app/studies/[slug]/page.tsx
import { notFound } from 'next/navigation';
import type { Study } from '../../../types/study';
import studiesData from '../../../data/studies.json';

type Params = { slug: string };

// Cast JSON to our Study[] type (runtime stays the same)
const studies = studiesData as Study[];

export function generateStaticParams() {
  return studies.map((s) => ({ slug: s.slug }));
}

export default function StudyPage({ params }: { params: Params }) {
  const s = studies.find((x) => x.slug === params.slug);
  if (!s) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold leading-snug">{s.title}</h1>
        <p className="mt-1 text-sm text-gray-600">
          <span className="font-medium">{s.year}</span>
          {s.venue ? <span className="mx-2">•</span> : null}
          {s.venue ? <span className="italic">{s.venue}</span> : null}
        </p>
      </header>

      <section className="space-y-2 text-sm">
        <div>
          <strong className="mr-2">Design:</strong>{s.design}
        </div>
        <div>
          <strong className="mr-2">Population:</strong>{s.population}
        </div>
        {s.indication && (
          <div>
            <strong className="mr-2">Indication:</strong>{s.indication}
          </div>
        )}
      </section>

      {Array.isArray(s.endpoints) && s.endpoints.length > 0 && (
        <section className="mt-6">
          <h2 className="text-base font-medium">Endpoints</h2>
          <ul className="mt-2 list-inside list-disc text-sm text-gray-800">
            {s.endpoints.map((ep) => (
              <li key={`${ep.type}:${ep.name}`}>
                <span className="font-medium">{ep.type}:</span> {ep.name}
              </li>
            ))}
          </ul>
        </section>
      )}

      {Array.isArray(s.keyFindings) && s.keyFindings.length > 0 && (
        <section className="mt-6">
          <h2 className="text-base font-medium">Key findings</h2>
          <ul className="mt-2 list-inside list-disc text-sm text-gray-800">
            {s.keyFindings.map((kf, i) => (
              <li key={`kf-${i}`}>{kf}</li>
            ))}
          </ul>
        </section>
      )}

      {Array.isArray(s.assets) && s.assets.length > 0 && (
        <section className="mt-6">
          <h2 className="text-base font-medium">Assets</h2>
          <ul className="mt-2 flex flex-wrap gap-2 text-sm">
            {s.assets.map((a) => (
              <li key={`${a.label}:${a.url}`}>
                <a
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border px-3 py-1 hover:bg-gray-50"
                >
                  {a.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

