import Link from "next/link";
import { siteConfig } from "@/lib/site";

const groups = [
  {
    title: "Продукты",
    links: [
      ["SheetNorm", "/products/sheetnorm"],
      ["Все продукты", "/products"],
    ],
  },
  {
    title: "Студия",
    links: [
      ["Пилот", "/pilot"],
      ["О студии", "/about"],
      ["Контакты", "/contacts"],
    ],
  },
  {
    title: "Документы",
    links: [
      ["Политика", "/privacy"],
      ["Условия", "/terms"],
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.7fr_0.7fr]">
          <div>
            <Link
              href="/"
              className="focus-ring rounded-md text-lg font-semibold tracking-tight text-ink"
            >
              FormaOps
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
              {siteConfig.description}
            </p>
            <p className="mt-4 text-xs text-slate-400">
              Материалы сайта не являются публичной офертой.
            </p>
          </div>
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {group.links.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      className="focus-ring rounded-md text-slate-600 transition hover:text-primary"
                      href={href}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} FormaOps</span>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a
              href={`mailto:${siteConfig.contacts.email}`}
              className="hover:text-primary"
            >
              {siteConfig.contacts.email}
            </a>
            <span>{siteConfig.contacts.telegram}</span>
            <span>{siteConfig.contacts.city}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
