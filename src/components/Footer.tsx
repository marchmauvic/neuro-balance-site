"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto mt-12 w-full max-w-4xl border-t border-white/10 px-6 py-6 text-sm text-zinc-400">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} Neuro Balance</div>
        <nav className="flex gap-4">
          <Link href="/investors" className="hover:text-white">Investors</Link>
          <Link href="/studies" className="hover:text-white">Studies</Link>
          <Link href="/news" className="hover:text-white">News</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

