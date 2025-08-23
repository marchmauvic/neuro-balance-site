export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {year} Neuro Balance</p>
        <p>
          For investors: <a href="/contact" className="underline">contact us</a>
        </p>
      </div>
    </footer>
  );
}

