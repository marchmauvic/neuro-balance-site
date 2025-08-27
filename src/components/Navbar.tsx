import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
      <Link href="/" className="font-semibold">NeuroBalance</Link>
      <div className="flex gap-4 text-sm">
        <Link href="/studies">Studies</Link>
        <Link href="/news">News</Link>
        <Link href="/investors">Investors</Link>
      </div>
    </nav>
  );
}

