import Link from "next/link";
import type { Study } from "@/types/study";

export default function StudyCard({ study }: { study: Study }) {
  return (
    <article className="rounded-xl border border-white/10 p-5 hover:bg-white/5 transition">
      <h3 className="font-semibold text-lg">
        <Link href={`/studies/${study.slug}`} className="hover:underline">
          {study.title}
        </Link>
      </h3>
      <p className="text-sm text-zinc-400 mt-1">
        {study.year} · {study.venue ?? "Unpublished"} · {study.design}
      </p>
      <p className="mt-3 line-clamp-3 text-zinc-300">{study.results}</p>
      {study.keyFindings?.length ? (
        <div className="mt-3 text-xs text-zinc-400">
          {study.keyFindings.slice(0, 3).join(" • ")}
        </div>
      ) : null}
    </article>
  );
}

