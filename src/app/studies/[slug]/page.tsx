import { notFound } from 'next/navigation';
import type { Study } from '../../../types/study';
import data from '../../../data/studies.json';

const studies = data as Study[];

export function generateStaticParams() {
  return studies.map((s) => ({ slug: s.slug }));
}

export default function StudyShow({ params }: { params: { slug: string } }) {
  const study = studies.find((s) => s.slug === params.slug);
  if (!study) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold leading-tight">{study.title}</h1>
      <p className="mt-1 text-sm text-gray-600">
        {study.year}
        {study.venue ? ` · ${study.venue}` : ''}
        {study.indication ? ` · ${study.indication}` : ''}
      </p>

      <section className="mt-6 space-y-3 text-sm">
        <div><strong>Design:</strong> {study.design}</div>
        <div><strong>Population:</strong> {study.population}</div>
        <div>
          <strong>Endpoints:</strong>{' '}
          {study.endpoints.map((e) => `${e.type}: ${e.name}`).join(' · ')}
        </div>
        <div>
          <strong>Key findings:</strong>
          <ul className="mt-2 list-disc pl-5">
            {study.keyFindings.map((k, i) => (
              <li key={i}>{k}</li>
            ))}
          </ul>
        </div>
        {study.assets?.length ? (
          <div>
            <strong>Assets:</strong>
            <ul className="mt-2 list-disc pl-5">
              {study.assets.map((a, i) => (
                <li key={i}>
                  <a className="underline" href={a.url} target="_blank" rel="noreferrer">
                    {a.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>
    </main>
  );
}

