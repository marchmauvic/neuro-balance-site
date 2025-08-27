import type { NewsItem } from '../../types/news';
import data from '../../data/news.json';

const news = data as NewsItem[];

export default function NewsIndex() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Newsroom</h1>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {news.map((n: NewsItem) => (
          <article key={n.slug} className="rounded-2xl border bg-white p-5 shadow-sm">
            <header>
              <h2 className="text-lg font-semibold leading-snug">{n.title}</h2>
              <p className="mt-1 text-sm text-gray-600">
                <time dateTime={n.date}>{new Date(n.date).toLocaleDateString()}</time>
                {n.source ? <span className="mx-2">•</span> : null}
                {n.source ? <span>{n.source}</span> : null}
              </p>
            </header>

            <p className="mt-3 text-sm text-gray-700">{n.summary}</p>

            <div className="mt-4">
              <a
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm hover:bg-gray-50"
              >
                Read source
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

