import Link from "next/link";
import team from "../../data/team.json";

export const metadata = {
  title: "Investors | Neuro Balance",
  description: "Overview, strategy, and leadership for investors.",
};

export default function InvestorsPage() {
  const russo = (team as any[]).find((p) => p.name.includes("Ethan Russo"));
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold">Investors</h1>
      <p className="mt-3 text-zinc-300">
        Neuro Balance translates validated cannabinoid science into focused applications across pain,
        concussion, and neuroprotection. We operate with clinical rigor, lean execution, and a clear
        regulatory path.
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Why now</h2>
        <ul className="mt-3 list-disc pl-6 text-zinc-300">
          <li>Growing clinical evidence around cannabinoid mechanisms in pain and neuro-inflammation.</li>
          <li>Unmet needs in post-concussion care and chronic pain with opioid-sparing potential.</li>
          <li>Regulatory landscape maturing for evidence-based formulations and endpoints.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Focus</h2>
        <ul className="mt-3 list-disc pl-6 text-zinc-300">
          <li>Indications: post-concussion symptoms, sports-related pain, and neuroprotection.</li>
          <li>Evidence: prioritize high-quality randomized trials and translational biomarkers.</li>
          <li>Execution: partnered clinical sites, clear milestones, disciplined capital use.</li>
        </ul>
      </section>

      {russo && (
        <section className="mt-10 rounded-xl border border-white/10 p-5">
          <h3 className="text-lg font-semibold">Scientific leadership</h3>
          <div className="mt-3">
            <p className="font-medium">{russo.name} — {russo.title}</p>
            <p className="mt-1 text-zinc-300">{russo.bio}</p>
            <Link className="mt-2 inline-block underline text-sm" href={russo.link} target="_blank" rel="noreferrer">
              Learn more
            </Link>
          </div>
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Next milestones</h2>
        <ol className="mt-3 list-decimal pl-6 text-zinc-300">
          <li>Finalize protocol and endpoints for the lead indication.</li>
          <li>Site selection and IRB submission.</li>
          <li>Initiate early clinical readouts and publish interim data.</li>
        </ol>
      </section>

      <section className="mt-10">
        <Link href="/contact" className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black">
          Contact the team
        </Link>
      </section>
    </div>
  );
}

