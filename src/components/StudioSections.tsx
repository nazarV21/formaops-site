"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useState, useEffect } from "react";
import { ProductScreenshotFrame } from "@/components/ProductScreenshotFrame";
import { StatusBadge } from "@/components/StatusBadge";
import type { Product } from "@/lib/products";
import { beforeTable, afterTable } from "@/lib/demo";

export function StudioHeroVisual() {
  const reduceMotion = useReducedMotion();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      initial={isMounted && reduceMotion ? false : { opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative lg:-mr-16 xl:-mr-28"
    >
      <Image
        src="/illustrations/hero-studio-flow.svg"
        alt="Файлы, документы и таблицы превращаются в рабочий инструмент FormaOps"
        width={1200}
        height={820}
        priority
        className="h-auto w-full"
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-[8%] top-[12%] h-14 w-14 rounded-2xl border border-white/80 bg-white/80 shadow-xl backdrop-blur"
        animate={isMounted && reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

export function PrinciplesStrip({ items }: { items: string[] }) {
  return (
    <div className="container-page border-y border-slate-200">
      <ul className="grid divide-y divide-slate-200 text-sm text-slate-600 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 px-4 py-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MiniTable({ clean = false }: { clean?: boolean }) {
  return (
    <div className="grid grid-cols-4 gap-1 text-[9px]">
      {Array.from({ length: 12 }).map((_, index) => (
        <span
          key={index}
          className={[
            "h-7 rounded-md border",
            clean
              ? "border-emerald-100 bg-emerald-50"
              : index === 1 || index === 7
                ? "col-span-2 border-amber-200 bg-amber-50"
                : "border-slate-200 bg-white",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

export function StudioBento() {
  return (
    <div className="grid gap-5 lg:grid-cols-12">
      <article className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 lg:col-span-7 lg:row-span-2">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          Excel и отчётность
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
          От сложной формы — к плоским данным
        </h3>
        <div className="mt-7 grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
          <MiniTable />
          <span className="text-xl text-primary">→</span>
          <MiniTable clean />
        </div>
      </article>
      <article className="rounded-[1.75rem] border border-slate-200 bg-[#f2efff] p-6 lg:col-span-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
          Документы и шаблоны
        </p>
        <h3 className="mt-3 text-xl font-semibold text-ink">
          Поля заполняются по правилам
        </h3>
        <div className="mt-5 rounded-xl bg-white p-4 shadow-sm">
          <div className="h-2 w-2/3 rounded bg-slate-200" />
          <div className="mt-3 grid grid-cols-2 gap-2">
            <span className="h-8 rounded bg-violet-50" />
            <span className="h-8 rounded bg-violet-50" />
          </div>
          <div className="mt-2 h-2 w-4/5 rounded bg-slate-100" />
        </div>
      </article>
      <article className="rounded-[1.75rem] border border-slate-200 bg-[#fff8eb] p-6 lg:col-span-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-700">
          Контроль данных
        </p>
        <h3 className="mt-3 text-xl font-semibold text-ink">
          Ошибки видны до загрузки
        </h3>
        <div className="mt-5 flex gap-3">
          <span className="rounded-xl bg-white p-3 text-sm text-rose-600 shadow-sm">
            2 ошибки
          </span>
          <span className="rounded-xl bg-white p-3 text-sm text-amber-700 shadow-sm">
            5 проверок
          </span>
        </div>
      </article>
      <article className="rounded-[1.75rem] border border-slate-200 bg-[#ecfdf5] p-6 lg:col-span-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
          Локальные инструменты
        </p>
        <h3 className="mt-3 text-xl font-semibold text-ink">
          Внутри корпоративного контура
        </h3>
        <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-600">
          <span className="rounded-xl bg-white p-3">Пользователи</span>
          <span>→</span>
          <span className="rounded-xl bg-white p-3">FormaOps</span>
        </div>
      </article>
      <article className="rounded-[1.75rem] border border-slate-200 bg-[#eff6ff] p-6 lg:col-span-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          Индивидуальные пилоты
        </p>
        <h3 className="mt-3 text-xl font-semibold text-ink">
          Задача → тест → проверяемый результат
        </h3>
        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white">
          <div className="h-full w-4/5 rounded-full bg-primary" />
        </div>
      </article>
    </div>
  );
}

const processSteps = [
  ["01", "Задача", "Фиксируем ручной процесс"],
  ["02", "Данные", "Берём обезличенные примеры"],
  ["03", "Пилот", "Собираем рабочий сценарий"],
  ["04", "Проверка", "Измеряем результат и ограничения"],
  ["05", "Внедрение", "Подбираем конфигурацию"],
];
export function StudioProcessTimeline() {
  const reduceMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative">
      <div className="absolute bottom-5 left-5 top-5 w-px bg-slate-700 lg:left-5 lg:right-5 lg:top-5 lg:h-px lg:w-auto" />
      <motion.div
        className="absolute bottom-5 left-5 top-5 w-px origin-top bg-primary lg:hidden"
        initial={isMounted && reduceMotion ? false : { scaleY: 0 }}
        whileInView={reduceMotion ? undefined : { scaleY: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="absolute left-5 right-5 top-5 hidden h-px origin-left bg-primary lg:block"
        initial={isMounted && reduceMotion ? false : { scaleX: 0 }}
        whileInView={reduceMotion ? undefined : { scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2 }}
      />
      <ol className="relative grid gap-6 lg:grid-cols-5">
        {processSteps.map(([number, title, text], index) => (
          <motion.li
            key={title}
            initial={isMounted && reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="grid grid-cols-[2.5rem_1fr] gap-4 lg:block"
          >
            <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#0f172a] bg-primary text-xs font-bold text-white">
              {number}
            </span>
            <div className="lg:mt-6">
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

export function FeaturedProductSection() {
  return (
    <div className="grid items-center gap-10 xl:grid-cols-[0.68fr_1.32fr]">
      <div>
        <StatusBadge tone="green">Готов к пилоту</StatusBadge>
        <h3 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-ink">
          SheetNorm
        </h3>
        <p className="mt-5 text-lg leading-8 text-muted">
          Нормализация сложных Excel-отчётов для 1С, Power BI, SQL и
          корпоративной аналитики.
        </p>
        <ul className="mt-6 space-y-3 text-sm text-slate-700">
          {[
            "Сложные Excel-структуры",
            "Проверяемые шаблоны",
            "Локальная обработка",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/products/sheetnorm"
            className="rounded-full bg-ink px-6 py-3 font-semibold text-white hover:bg-primary"
          >
            Подробнее
          </Link>
          <Link
            href="/pilot"
            className="rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-ink hover:border-primary"
          >
            Запросить пилот
          </Link>
        </div>
      </div>
      <div className="relative">
        <ProductScreenshotFrame alt="Интерфейс SheetNorm" />
        <FloatingNote className="-left-3 top-[20%]" text="Шаблон сохранён" />
        <FloatingNote
          className="right-2 top-[8%]"
          text="Обработка завершена"
          green
        />
        <FloatingNote className="bottom-[8%] right-0" text="Отчёт качества" />
      </div>
    </div>
  );
}

function FloatingNote({
  text,
  className,
  green,
}: {
  text: string;
  className: string;
  green?: boolean;
}) {
  return (
    <div
      className={[
        "absolute hidden rounded-full border bg-white/95 px-4 py-2 text-xs font-semibold shadow-xl backdrop-blur md:block",
        green
          ? "border-emerald-200 text-emerald-700"
          : "border-slate-200 text-slate-700",
        className,
      ].join(" ")}
    >
      {text}
    </div>
  );
}

export function ExcelTransformationDemo() {
  const [mode, setMode] = useState<"before" | "after">("before");
  const rows = mode === "before" ? beforeTable : afterTable;
  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 p-5">
        <p className="text-sm text-muted">Синтетический пример</p>
        <div
          role="tablist"
          aria-label="Состояние таблицы"
          className="flex rounded-full bg-slate-100 p-1"
        >
          {(["before", "after"] as const).map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={mode === item}
              onClick={() => setMode(item)}
              className={[
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                mode === item
                  ? "bg-white text-ink shadow-sm"
                  : "text-slate-500",
              ].join(" ")}
            >
              {item === "before" ? "Исходный файл" : "После обработки"}
            </button>
          ))}
        </div>
      </div>
      <motion.div
        key={mode}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-x-auto p-5 sm:p-8"
      >
        <div className="min-w-[680px] overflow-hidden rounded-2xl border border-slate-200">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={[
                "grid",
                mode === "before" ? "grid-cols-4" : "grid-cols-5",
                rowIndex === 0
                  ? mode === "before"
                    ? "bg-amber-50"
                    : "bg-emerald-50"
                  : "bg-white",
              ].join(" ")}
            >
              {row.map((cell, cellIndex) => (
                <span
                  key={`${cell}-${cellIndex}`}
                  className={[
                    "border-b border-r border-slate-100 px-4 py-3 text-xs text-slate-600",
                    !cell ? "bg-slate-50" : "",
                    mode === "before" && rowIndex === 0 && cellIndex === 0
                      ? "col-span-2"
                      : "",
                  ].join(" ")}
                >
                  {cell || "—"}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-3 text-sm text-muted">
          <span
            className={[
              "h-2 w-2 rounded-full",
              mode === "after" ? "bg-secondary" : "bg-amber-500",
            ].join(" ")}
          />
          {mode === "after"
            ? "Плоская структура готова для BI / SQL / 1С"
            : "Объединённые ячейки, итоги и периоды в колонках"}
        </div>
      </motion.div>
    </div>
  );
}

const accents: Record<string, string> = {
  docuflow: "bg-violet-50 text-violet-700",
  tendercheck: "bg-amber-50 text-amber-700",
  actflow: "bg-sky-50 text-sky-700",
  datacheck: "bg-emerald-50 text-emerald-700",
};
export function RoadmapProductCard({ product }: { product: Product }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 transition hover:border-slate-300"
    >
      <div
        className={[
          "h-40 overflow-hidden rounded-2xl p-5",
          accents[product.slug] || "bg-slate-50",
        ].join(" ")}
      >
        <RoadmapVisual slug={product.slug} />
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        <StatusBadge tone="slate">В разработке</StatusBadge>
        <span className="text-xs text-slate-400">Направление</span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink">
        {product.name}
      </h3>
      <p className="mt-3 min-h-14 text-sm leading-6 text-muted">
        {product.description}
      </p>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
        Что автоматизирует
      </p>
      <Link
        href="/contacts"
        className="mt-4 inline-flex text-sm font-semibold text-primary"
      >
        Сообщить об интересе →
      </Link>
    </motion.article>
  );
}
function RoadmapVisual({ slug }: { slug: string }) {
  if (slug === "docuflow")
    return (
      <div className="mx-auto h-full max-w-[180px] rounded-xl bg-white p-4 shadow-sm">
        <div className="h-2 w-2/3 bg-violet-200" />
        <div className="mt-4 space-y-2">
          <div className="h-6 rounded bg-violet-50" />
          <div className="h-6 rounded bg-violet-50" />
          <div className="h-2 w-4/5 bg-slate-100" />
        </div>
      </div>
    );
  if (slug === "tendercheck")
    return (
      <div className="space-y-3">
        {["Требования", "Сроки", "Документы"].map((item, i) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-xs">
              {i + 1}
            </span>
            <span className="text-xs font-semibold">{item}</span>
          </div>
        ))}
      </div>
    );
  if (slug === "actflow")
    return (
      <div className="flex h-full items-center justify-center gap-2 text-xs font-semibold">
        <span className="rounded-xl bg-white p-4 shadow-sm">Черновик</span>
        <span>→</span>
        <span className="rounded-xl bg-white p-4 shadow-sm">Проверка</span>
        <span>→</span>
        <span className="rounded-xl bg-white p-4 shadow-sm">Готово</span>
      </div>
    );
  return (
    <div className="grid grid-cols-4 gap-2">
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          className={[
            "h-8 rounded-md border bg-white",
            i === 5 || i === 10 ? "border-rose-300" : "border-emerald-100",
          ].join(" ")}
        />
      ))}
    </div>
  );
}
