import Link from "next/link";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="p-8">
      <Hero />

      <section className="mx-auto max-w-3xl py-4">
        <p className="text-sm text-zinc-300">
          We identify high-signal opportunities where cannabinoid pharmacology and rigorous
          study design can deliver meaningful clinical benefit. Our initial focus spans pain,
          concussion, and neuroprotection.
        </p>

        <ul className="mt-6 grid gap-3">
          <li className="block rounded-lg border border-white/10 hover:border-white/20">
            <Link href="/investors" className="block p-4">
              <div className="font-semibold">For investors</div>
              <div className="text-sm text-zinc-400">
                Strategy, milestones, and scientific leadership.
              </div>
            </Link>
          </li>

          <li className="block rounded-lg border border-white/10 hover:border-white/20">
            <Link href="/studies" className="block p-4">
              <div className="font-semibold">Evidence base</div>
              <div className="text-sm text-zinc-400">
                Explore studies relevant to our indications.
              </div>
            </Link>
          </li>

          <li className="block rounded-lg border border-white/10 hover:border-white/20">
            <Link href="/news" className="block p-4">
              <div className="font-semibold">Newsroom</div>
              <div className="text-sm text-zinc-400">
                Company updates and notable coverage.
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}

