import Link from 'next/link';
import type { Study } from '../types/study';

export default function StudyCard({ study }: { study: Study }) {
  return (
    <article className="rounded-2xl border bg-white p-5 shadow-sm">
      <header className="mb-2">
        <h3 className="text-lg font-semibold leading-snug">{study.title}</h3>
        <p className="text-sm text-gray-600">
          {study.year}
          {study.venue ? ` · ${study.venue}` : ''}
          {study.indication ? ` · ${study.indication}` : ''}
        </p>
      </header>
      <p className="text-sm text-gray-700">{study.design}</p>
      <div className="mt-4">
        <Link
          href={`/studies/${study.slug}`}
          className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm hover:bg-gray-50"
        >
          View study
        </Link>
      </div>
    </article>
  );
}

