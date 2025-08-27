import Link from "next/link";

type Cta = { href: string; label: string; variant?: "default" | "outline" };
type HeroProps = { eyebrow?: string; title: string; subtitle?: string; ctas?: Cta[] };

export default function Hero({ eyebrow, title, subtitle, ctas = [] }: HeroProps) {
  return (
    <header className="rounded-2xl border bg-white p-6 md:p-10">
      {eyebrow && (
        <div className="text-xs font-medium uppercase tracking-widest text-gray-500">
          {eyebrow}
        </div>
      )}
      <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
      {subtitle && <p className="mt-3 max-w-3xl text-gray-600">{subtitle}</p>}
      {ctas.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {ctas.map(({ href, label, variant = "default" }) => {
            const base = "inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium";
            const styles =
              variant === "outline"
                ? "border hover:bg-gray-50"
                : "border border-transparent bg-black text-white hover:bg-gray-800";
            return (
              <Link key={href} href={href} className={`${base} ${styles}`}>
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}

