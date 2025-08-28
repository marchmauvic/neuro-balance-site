// src/components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="container mx-auto flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Neuro Balance Rx"
            width={160}
            height={36}
            priority
          />
        </Link>

        <div className="flex items-center gap-5 text-sm">
          <Link href="/studies" className="hover:underline">Studies</Link>
          <Link href="/news" className="hover:underline">News</Link>
          <Link
            href="/investors"
            className="rounded-full border px-4 py-2 hover:bg-gray-50"
          >
            Investors
          </Link>
        </div>
      </nav>
    </header>
  );
}

