import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-borderline bg-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link
            className="focus-ring inline-flex items-center gap-3 rounded-md"
            href="/"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ink text-lg font-bold text-white">
              F
            </span>
            <span className="text-lg font-semibold text-ink">FormaOps</span>
          </Link>
          <p className="mt-4 max-w-md leading-7 text-muted">
            {siteConfig.description}
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Материалы сайта не являются публичной офертой.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Разделы
          </h2>
          <ul className="mt-4 space-y-3">
            {siteConfig.footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className="focus-ring rounded-md text-muted transition hover:text-primary"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Контакты
          </h2>
          <ul className="mt-4 space-y-3 text-muted">
            <li>
              <a
                className="focus-ring rounded-md transition hover:text-primary"
                href={"mailto:" + siteConfig.contacts.email}
              >
                {siteConfig.contacts.email}
              </a>
            </li>
            <li>{siteConfig.contacts.telegram}</li>
            <li>{siteConfig.contacts.city}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
