export default function About() {
  return (
    <article className="space-y-10">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-semibold">About Neuro Balance</h1>
        <p className="mt-4 text-zinc-300">
          We’re focused on rigorous cannabinoid science with direct relevance to athletes and
          patients: analgesia, concussion recovery, and neuroprotection.
        </p>
      </header>

      <section className="rounded-2xl border border-white/10 p-6">
        <h2 className="text-xl font-semibold">Scientific Leadership</h2>
        <div className="mt-4 space-y-2">
          <h3 className="font-medium">Ethan Russo, MD</h3>
          <p className="text-zinc-300">
            Neurologist and researcher widely known for work on cannabinoids and the
            endocannabinoid system, with decades of clinical and translational research leadership.
            Dr. Russo advises on study design, clinical endpoints and translational strategy.
          </p>
          <a
            className="underline text-sm"
            href="https://ethanrusso.org/about-ethan-russo-md/"
            target="_blank"
            rel="noreferrer"
          >
            Learn more
          </a>
        </div>
      </section>
    </article>
  );
}

