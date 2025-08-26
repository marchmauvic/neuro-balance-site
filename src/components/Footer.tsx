export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10 text-sm text-zinc-400">
      <div className="mx-auto max-w-3xl px-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Neuro Balance. All rights reserved.</p>
          <nav className="flex gap-4">
            <a className="hover:text-white" href="/investors">Investors</a>
            <a className="hover:text-white" href="/studies">Studies</a>
            <a className="hover:text-white" href="/news">News</a>
            <a className="hover:text-white" href="/contact">Contact</a>
          </nav>
        </div>
        <p className="mt-4 text-xs">
          This site may include forward-looking statements for informational purposes only and is not an
          offer to sell or a solicitation of an offer to buy securities.
        </p>
      </div>
    </footer>
  );
}

