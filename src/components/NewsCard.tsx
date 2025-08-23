import Link from "next/link";

type News = { title: string; date: string; summary: string; url: string };

export default function NewsCard({ item }: { item: News }) {
  const d = new Date(item.date);
  return (
    <article className="rounded-xl border border-white/10 p-5 hover:bg-white/5 transition">
      <time className="text-xs text-zinc-400">{d.toLocaleDateString()}</time>
      <h3 className="font-semibold text-lg mt-1">
        <Link href={item.url} target="_blank" className="hover:underline">
          {item.title}
        </Link>
      </h3>
      <p className="mt-2 text-zinc-300">{item.summary}</p>
      <Link href={item.url} target="_blank" className="mt-3 inline-block underline text-sm">
        Source
      </Link>
    </article>
  );
}

