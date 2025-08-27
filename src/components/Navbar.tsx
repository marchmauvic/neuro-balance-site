import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Neuro Balance Rx" width={28} height={28} />
        <span className="font-semibold">Neuro Balance Rx</span>
      </Link>
      <div className="flex flex-wrap items-center gap-4 text-sm">
        <Link href="/about">About</Link>
        <Link href="/team">Team</Link>
        <Link href="/studies">Studies</Link>
        <Link href="/news">News</Link>
        <Link href="/investors">Investors</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

