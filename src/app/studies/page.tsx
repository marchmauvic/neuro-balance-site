import type { Study } from '../../types/study';
import data from '../../data/studies.json';
import StudyCard from '../../components/StudyCard';

const studies = data as Study[];

export default function StudiesIndex() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Studies</h1>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {studies.map((s) => (
          <StudyCard key={s.slug} study={s} />
        ))}
      </div>
    </main>
  );
}

