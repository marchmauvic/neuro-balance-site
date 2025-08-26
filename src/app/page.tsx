// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="rounded-2xl border bg-white p-8 md:p-12">
        <p className="text-xs uppercase tracking-widest text-gray-500">NeuroBalance</p>
        <h1 className="mt-2 text-3xl font-semibold leading-tight md:text-4xl">
          Restoring balance to the nervous system with rigorous clinical science
        </h1>
        <p className="mt-3 max-w-2xl text-gray-600">
          Explore our study pipeline and investor updates.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/studies"
            className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            View Studies
          </Link>
          <Link
            href="/news"
            className="inline-flex items-center rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-gray-50"
          >
            Latest News
          </Link>
        </div>
      </section>
    </main>
  );
}

