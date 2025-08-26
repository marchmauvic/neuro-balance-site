// src/components/StudyCard.tsx
import type { Study } from '../types/study';

type Props = { study: Study; className?: string };

export default function StudyCard({ study, className }: Props) {
  const { title, year, venue, design, population, endpoints, keyFindings, assets } = study;

  return (
    <article
      className={[
        "rounded-2xl border border-gray-200 p-5 shadow-sm transition hover:shadow-md",
        "bg-white",
        className ?? "",
      ].join(" ")}
    >
      <header className="mb-3">
        <h3 className="text-lg font-semibold leading-snug">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">
          <span className="font-medium">{year}</span>
          {venue ? <span className="mx-2">•</span> : null}
          {venue ? <span className="italic">{venue}</span> : null}
        </p>
      </header>

      <dl className="grid grid-cols-1 gap-2 text-sm text-gray-700 sm:grid-cols-2">
        <div>
          <dt className="font-medium text-gray-900">Design</dt>
          <dd>{design}</dd>
        </div>
        <div>
          <dt className="font-medium text-gray-900">Population</dt>
          <dd>{population}</dd>
        </div>
      </dl>

      {Array.isArray(endpoints) && endpoints.length > 0 && (
        <section className="mt-4">
          <h4 className="text-sm font-medium text-gray-900">Endpoints</h4>
          <ul className="mt-1 list-inside list-disc text-sm text-gray-700">
            {endpoints.map((ep) => (
              <li key={`${ep.type}:${ep.name}`}>
                <span className="font-medium">{ep.type}:</span> {ep.name}
              </li>
            ))}
          </ul>
        </section>
      )}

      {Array.isArray(keyFindings) && keyFindings.length > 0 && (
        <section className="mt-4">
          <h4 className="text-sm font-medium text-gray-900">Key findings</h4>
          <ul className="mt-1 list-inside list-disc text-sm text-gray-700">
            {keyFindings.map((k, i) => (
              <li key={`kf-${i}`}>{k}</li>
            ))}
          </ul>
        </section>
      )}

      {Array.isArray(assets) && assets.length > 0 && (
        <section className="mt-4">
          <h4 className="text-sm font-medium text-gray-900">Assets</h4>
          <ul className="mt-1 flex flex-wrap gap-2 text-sm">
            {assets.map((a) => (
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
    </article>
  );
}

