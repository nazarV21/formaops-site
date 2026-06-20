import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-borderline/80 bg-white/90 backdrop-blur">
      <div className="container-page flex min-h-20 flex-wrap items-center justify-between gap-4 py-4">
        <Link className="focus-ring flex items-center gap-3 rounded-md" href="/" aria-label="FormaOps — главная">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ink text-lg font-bold text-white">F</span>
          <span>
            <span className="block text-lg font-semibold leading-none text-ink">FormaOps</span>
            <span className="text-xs text-muted">прикладные ИИ-инструменты</span>
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-slate-700" aria-label="Основная навигация">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} className="focus-ring rounded-md transition hover:text-primary" href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="focus-ring rounded-full bg-primary px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700" href="/pilot">
            Запросить пилот
          </Link>
        </nav>
      </div>
    </header>
  );
}
