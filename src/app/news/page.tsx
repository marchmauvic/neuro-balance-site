import Link from "next/link";
import newsRaw from "../../data/news.json";

type NewsItem = {
  date: string;        // e.g. "2022-01-31"
  title: string;       // headline
  url: string;         // external URL
  sourceLabel?: string; // e.g. "Source"
};

const news: NewsItem[] = newsRaw as unknown as NewsItem[];

export default function NewsIndex() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="mb-6 text-2xl font-bold">Newsroom</h1>
      <ul className="space-y-4">
        {news.map((n, i) => (
          <li key={i} className="rounded-xl border border-white/10 p-4">
            <div className="text-xs text-zinc-400">{n.date}</div>
            <div className="mt-1 text-lg">{n.title}</div>
            <div className="mt-3">
              <a
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-white/10 px-3 py-1 text-sm hover:border-white/20"
              >
                {n.sourceLabel ?? "Source"}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

