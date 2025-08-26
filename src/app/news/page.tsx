import type { Metadata } from 'next';
import newsData from '../../data/news.json';

export const metadata: Metadata = { title: 'News — Neuro Balance' };

type NewsItem = {
  date: string;
  title: string;
  summary?: string;
  url: string;
  source?: string;
};

const items: NewsItem[] = newsData as NewsItem[];

export default function NewsIndex() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-3xl font-bold">Newsroom</h1>
      <ul className="mt-6 grid gap-3">
        {items.map((n) => (
          <li key={n.url} className="rounded-xl border border-white/10 p-4">
            <div className="text-sm text-zinc-400">{n.date}</div>
            <div className="mt-1 font-medium">{n.title}</div>
            {n.summary ? <p className="mt-1 text-sm text-zinc-300">{n.summary}</p> : null}
            <a href={n.url} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm underline">
              Source{n.source ? ` — ${n.source}` : ''}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

