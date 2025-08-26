'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-8 text-sm text-zinc-400">
      <div className="mx-auto max-w-4xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} Neuro Balance.</div>
        <nav className="flex gap-4">
          <Link href="/investors" className="hover:text-white">Investors</Link>
          <Link href="/studies" className="hover:text-white">Studies</Link>
          <Link href="/news" className="hover:text-white">News</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
          {/* External example */}
          <a href="https://vercel.com" target="_blank" rel="noreferrer" className="hover:text-white">
            Vercel
          </a>
        </nav>
      </div>
    </footer>
  );
}

