"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/studies", label: "Studies" },
  { href: "/news", label: "News" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold">Neuro Balance</Link>
        <ul className="flex gap-5 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`hover:underline ${pathname === l.href ? "text-white" : "text-zinc-300"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

