import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-4 pt-16 pb-8">
      <h1 className="text-4xl font-bold tracking-tight">Science-first solutions for neuro-inflammation</h1>
      <p className="mt-4 text-lg text-zinc-300">
        We translate peer-reviewed cannabinoid science into therapies aimed at pain, concussion, and
        neuroprotection. Built with clinical rigor and operational focus.
      </p>
      <div className="mt-6 flex gap-3">
        <Link href="/investors" className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black">
          Investors
        </Link>
        <Link href="/studies" className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white">
          Browse studies
        </Link>
      </div>
    </section>
  );
}

