import Link from "next/link";
import Hero from "../components/Hero";
import Section from "../components/Section";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <Hero
        eyebrow="Neuro Balance Rx"
        title="Transforming TBI & Pain Management"
        subtitle="Licensed, natural therapeutic formulations for TBI & pain — developed with world-renowned neurologist Dr. Ethan Russo."
        ctas={[
          { href: '/studies', label: 'View Studies' },
          { href: '/news', label: 'Latest News', variant: 'outline' }
        ]}
      />

      <Section title="Highlights">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Link href="/studies" className="rounded-2xl border bg-white p-5 hover:bg-gray-50">
            <h3 className="font-semibold">Clinical Studies</h3>
            <p className="mt-1 text-sm text-gray-600">Endpoints, designs, and findings.</p>
          </Link>
          <Link href="/news" className="rounded-2xl border bg-white p-5 hover:bg-gray-50">
            <h3 className="font-semibold">Newsroom</h3>
            <p className="mt-1 text-sm text-gray-600">Funding, partnerships, and press.</p>
          </Link>
          <Link href="/investors" className="rounded-2xl border bg-white p-5 hover:bg-gray-50">
            <h3 className="font-semibold">Investors</h3>
            <p className="mt-1 text-sm text-gray-600">Overview and materials.</p>
          </Link>
        </div>
      </Section>
    </main>
  );
}

