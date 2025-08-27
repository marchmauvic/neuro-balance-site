export default function Investors() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Investors</h1>

      <section className="mt-4 space-y-4 text-gray-700">
        <p>
          For investor relations, contact our CEO:&nbsp;
          <a className="underline" href="mailto:mike@grawfinancial.com">
            mike@grawfinancial.com
          </a>
          .
        </p>

        <div className="pt-2">
          <a
            href="/assets/investor-deck.pdf"
            className="inline-flex items-center rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-gray-50"
            target="_blank"
            rel="noreferrer"
          >
            View Investor Deck (PDF)
          </a>
          <p className="mt-2 text-xs text-gray-500">
            Don’t see the deck? Drop the PDF at <code>/public/assets/investor-deck.pdf</code>.
          </p>
        </div>
      </section>
    </main>
  );
}

