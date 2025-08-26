import Link from "next/link";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-3xl px-4 pb-12">
        <p className="text-sm text-zinc-300">
          We identify high-signal opportunities where cannabinoid pharmacology and rigorous study
          design can deliver meaningful clinical benefit. Our initial focus spans pain, concussion,
          and neuroprotection.
        </p>

        <ul className="mt-6 grid gap-3">
          <li>
            <Link
              href="/investors"
              className="block rounded-xl border border-white/10 p-4 hover:border-white/20"
            >
              <div className="font-medium">For investors</div>
              <div className="text-sm text-zinc-400">
                Strategy, milestones, and scientific leadership.
              </div>
            </Link>
          </li>

          <li>
            <Link
              href="/studies"
              className="block rounded-xl border border-white/10 p-4 hover:border-white/20"
            >
              <div className="font-medium">Evidence base</div>
              <div className="text-sm text-zinc-400">
                Explore studies relevant to our indications.
              </div>
            </Link>
          </li>

          <li>
            <Link
              href="/news"
              className="block rounded-xl border border-white/10 p-4 hover:border-white/20"
            >
              <div className="font-medium">Newsroom</div>
              <div className="text-sm text-zinc-400">
                Company updates and notable coverage.
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}

