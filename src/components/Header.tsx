"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled || open
          ? "border-slate-200/80 bg-white/92 shadow-[0_8px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl"
          : "border-transparent bg-[#f7f8fa]/70 backdrop-blur-md",
      ].join(" ")}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="focus-ring flex items-center gap-2.5 rounded-lg"
          aria-label="FormaOps — главная"
        >
          <Image src="/favicon.svg" alt="" width={32} height={32} />
          <span className="text-base font-semibold tracking-[-0.02em] text-ink">
            FormaOps
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex"
          aria-label="Основная навигация"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "focus-ring rounded-md transition hover:text-ink",
                pathname === item.href ? "text-ink" : "",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="/contacts"
            className="focus-ring rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary"
          >
            Обсудить задачу
          </Link>
        </div>

        <button
          type="button"
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white lg:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative h-4 w-5">
            <span
              className={[
                "absolute left-0 top-1 h-px w-5 bg-ink transition",
                open ? "translate-y-1 rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute bottom-1 left-0 h-px w-5 bg-ink transition",
                open ? "-translate-y-1 -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] border-t border-slate-200 bg-white px-5 py-7 lg:hidden">
          <nav
            className="mx-auto flex max-w-xl flex-col"
            aria-label="Мобильная навигация"
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring border-b border-slate-100 py-4 text-xl font-semibold tracking-tight text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacts"
              className="focus-ring mt-7 rounded-full bg-ink px-6 py-3.5 text-center font-semibold text-white"
            >
              Обсудить задачу
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
