import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-white/10 p-10 bg-gradient-to-br from-white/5 to-transparent">
        <h1 className="text-4xl font-semibold">
          Translating cannabinoid science into clinical impact
        </h1>
        <p className="mt-4 text-zinc-300 max-w-2xl">
          Neuro Balance curates and advances studies on cannabinoids in pain, concussion and
          neuroprotection. Explore our evidence base and learn about the team.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/studies" className="rounded-lg px-4 py-2 bg-white text-black font-medium">
            Browse studies
          </Link>
          <Link href="/about" className="rounded-lg px-4 py-2 border border-white/20">
            About &amp; team
          </Link>
        </div>
      </section>

      <section className="grid sm:grid-cols-3 gap-4">
        <Link href="/studies" className="rounded-xl border border-white/10 p-6 hover:bg-white/5">
          <h3 className="font-semibold">Studies</h3>
          <p className="text-sm text-zinc-400 mt-2">Peer-reviewed and ongoing research summaries.</p>
        </Link>
        <Link href="/news" className="rounded-xl border border-white/10 p-6 hover:bg-white/5">
          <h3 className="font-semibold">Newsroom</h3>
          <p className="text-sm text-zinc-400 mt-2">Partnerships and funding announcements.</p>
        </Link>
        <Link href="/contact" className="rounded-xl border border-white/10 p-6 hover:bg-white/5">
          <h3 className="font-semibold">Investor contact</h3>
          <p className="text-sm text-zinc-400 mt-2">Reach us for diligence materials and meetings.</p>
        </Link>
      </section>
    </div>
  );
}

