import Link from "next/link";
import type { NewsItem } from "@/types/news";
import raw from "@/data/news.json";

const items = raw as NewsItem[];

export default function NewsIndex() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Newsroom</h1>
      <ul className="space-y-4">
        {items.map((n, i) => (
          <li key={i} className="rounded-xl border border-white/10 p-4">
            {n.date && <p className="text-xs text-zinc-400">{n.date}</p>}
            <h3 className="font-semibold">{n.title}</h3>
            {n.summary && <p className="text-sm text-zinc-300">{n.summary}</p>}
            {n.url && (
              <Link
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-sm"
              >
                Source
              </Link>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}

