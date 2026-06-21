"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useState, useEffect } from "react";
import { ProductScreenshotFrame } from "@/components/ProductScreenshotFrame";
import { StatusBadge } from "@/components/StatusBadge";
import { sheetNormPackages } from "@/lib/packages";
import { audienceCards } from "@/lib/sheetnorm-content";

export function SheetNormHero() {
  const reduceMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="container-page pb-16 pt-20 text-center sm:pt-28">
      <StatusBadge tone="green">Готов к пилоту</StatusBadge>
      <h1 className="editorial-title mx-auto mt-6 max-w-5xl text-ink">
        Превращайте сложные Excel-отчёты в готовые данные
      </h1>
      <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-muted">
        SheetNorm анализирует структуру файла, помогает создать проверяемое
        правило и повторно применяет его к похожим отчётам.
      </p>
      <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-slate-500">
        AI помогает создать правило. Пользователь проверяет результат. Массовая
        обработка выполняется по сохранённым шаблонам.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/pilot"
          className="rounded-full bg-ink px-6 py-3.5 font-semibold text-white hover:bg-primary"
        >
          Запросить пилот
        </Link>
        <a
          href="#how-it-works"
          className="rounded-full border border-slate-200 bg-white px-6 py-3.5 font-semibold text-ink hover:border-primary"
        >
          Посмотреть, как работает ↓
        </a>
      </div>
      <motion.div
        initial={
          isMounted && reduceMotion ? false : { opacity: 0, y: 40, rotateX: 4 }
        }
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ delay: 0.12, duration: 0.9 }}
        className="relative mt-14 [perspective:1400px]"
      >
        <ProductScreenshotFrame
          alt="Интерфейс SheetNorm"
          priority
          className="mx-auto max-w-[1220px]"
        />
        <HeroBadge className="left-[5%] top-[18%]" text="Файл обработан" />
        <HeroBadge
          className="right-[4%] top-[12%]"
          text="Шаблон сохранён"
          green
        />
        <HeroBadge
          className="bottom-[8%] left-[8%]"
          text="2 предупреждения"
          amber
        />
        <HeroBadge
          className="bottom-[10%] right-[6%]"
          text="Готово для BI"
          green
        />
      </motion.div>
    </section>
  );
}
function HeroBadge({
  text,
  className,
  green,
  amber,
}: {
  text: string;
  className: string;
  green?: boolean;
  amber?: boolean;
}) {
  return (
    <span
      className={[
        "absolute hidden rounded-full border bg-white/95 px-4 py-2 text-xs font-semibold shadow-xl backdrop-blur md:block",
        green
          ? "border-emerald-200 text-emerald-700"
          : amber
            ? "border-amber-200 text-amber-700"
            : "border-slate-200 text-slate-700",
        className,
      ].join(" ")}
    >
      {text}
    </span>
  );
}

const scenarioData = [
  {
    step: "01",
    title: "Опишите результат",
    text: "Загрузите Excel-файл и опишите требуемое преобразование обычным языком.",
    visual: "instruction",
  },
  {
    step: "02",
    title: "Проверьте правило",
    text: "Сравните предпросмотр, операции, предупреждения и отчёт качества до сохранения.",
    visual: "quality",
  },
  {
    step: "03",
    title: "Применяйте повторно",
    text: "Сохраните проверенный шаблон и используйте его для похожих файлов без ручной настройки.",
    visual: "repeat",
  },
];
export function ProductScenarioSection() {
  return (
    <div className="space-y-24">
      {scenarioData.map((item, index) => (
        <div
          key={item.step}
          className="grid items-center gap-10 lg:grid-cols-2"
        >
          <div className={index % 2 ? "lg:order-2" : ""}>
            <span className="text-xs font-bold tracking-[0.18em] text-primary">
              СЦЕНАРИЙ {item.step}
            </span>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {item.title}
            </h3>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
              {item.text}
            </p>
          </div>
          <ScenarioVisual type={item.visual} />
        </div>
      ))}
    </div>
  );
}
function ScenarioVisual({ type }: { type: string }) {
  if (type === "instruction")
    return (
      <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-500">
          filial_report_may.xlsx
        </div>
        <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-5 text-sm leading-6 text-slate-700">
          Заголовки на строке 4. Удалить «Итого». Месяцы перенести в колонку
          «Период».
        </div>
        <div className="mt-4 flex gap-2 text-xs">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
            кросс-таблица
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1">
            анализ завершён
          </span>
        </div>
      </div>
    );
  if (type === "quality")
    return (
      <div className="grid gap-3 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2">
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs text-slate-400">Правило</p>
          <p className="mt-2 font-semibold">Отчёт филиала · v1</p>
        </div>
        <div className="rounded-xl bg-emerald-50 p-4">
          <p className="text-xs text-emerald-700">Качество</p>
          <p className="mt-2 font-semibold">Проверено</p>
        </div>
        <div className="rounded-xl bg-amber-50 p-4">
          <p className="text-xs text-amber-700">Предупреждения</p>
          <p className="mt-2 font-semibold">2 требуют проверки</p>
        </div>
        <div className="rounded-xl bg-blue-50 p-4">
          <p className="text-xs text-primary">Строки</p>
          <p className="mt-2 font-semibold">148 → 96</p>
        </div>
      </div>
    );
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
        <div className="space-y-2">
          {["may.xlsx", "june.xlsx", "july.xlsx"].map((file) => (
            <div key={file} className="rounded-xl bg-slate-50 p-3 text-sm">
              {file}
            </div>
          ))}
        </div>
        <span className="text-xl text-primary">→</span>
        <div className="rounded-2xl bg-emerald-50 p-6 text-center">
          <p className="font-semibold text-emerald-800">Проверенный шаблон</p>
          <p className="mt-2 text-xs text-emerald-700">3 результата готовы</p>
        </div>
      </div>
    </div>
  );
}

export function SheetNormBenefitsBento() {
  return (
    <div className="grid gap-5 lg:grid-cols-12">
      <Benefit
        className="lg:col-span-7 lg:row-span-2"
        title="Сложные Excel-структуры"
        text="Объединённые ячейки, несколько заголовков, кросс-таблицы, итоги и служебные строки"
      >
        <Image
          src="/illustrations/before-after-excel.svg"
          alt=""
          aria-hidden
          width={700}
          height={360}
          className="mt-6 h-auto w-full rounded-xl"
        />
      </Benefit>
      <Benefit
        className="lg:col-span-5"
        title="AI + контроль человека"
        text="Инструкция → правило → проверка"
      >
        <Flow labels={["AI", "Правило", "Проверка"]} />
      </Benefit>
      <Benefit
        className="lg:col-span-5"
        title="Повторяемые шаблоны"
        text="Один шаблон применяется к похожим файлам"
      >
        <Flow labels={["Файлы", "Шаблон", "Результат"]} />
      </Benefit>
      <Benefit
        className="lg:col-span-7"
        title="История и качество"
        text="Статусы, предупреждения, строки до/после и quality report"
      >
        <div className="mt-6 grid grid-cols-3 gap-2 text-xs">
          <span className="rounded-xl bg-emerald-50 p-3">Успешно</span>
          <span className="rounded-xl bg-amber-50 p-3">2 предупреждения</span>
          <span className="rounded-xl bg-blue-50 p-3">148 → 96</span>
        </div>
      </Benefit>
      <Benefit
        className="lg:col-span-5"
        title="Локальное развёртывание"
        text="Целевой корпоративный контур"
      >
        <Flow labels={["Users", "SheetNorm", "Storage"]} />
      </Benefit>
      <Benefit
        className="lg:col-span-7"
        title="Team / Enterprise"
        text="Конфигурация подбирается после пилота"
      >
        <div className="mt-6 grid grid-cols-2 gap-3">
          <span className="rounded-xl bg-blue-50 p-4 font-semibold text-primary">
            Team · отдел
          </span>
          <span className="rounded-xl bg-emerald-50 p-4 font-semibold text-emerald-700">
            Enterprise · компания
          </span>
        </div>
      </Benefit>
    </div>
  );
}
function Benefit({
  title,
  text,
  children,
  className,
}: {
  title: string;
  text: string;
  children: React.ReactNode;
  className: string;
}) {
  return (
    <article
      className={[
        "overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6",
        className,
      ].join(" ")}
    >
      <h3 className="text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
      {children}
    </article>
  );
}
function Flow({ labels }: { labels: string[] }) {
  return (
    <div className="mt-6 flex items-center gap-2 text-xs font-semibold">
      {labels.map((label, index) => (
        <div key={label} className="contents">
          <span className="flex-1 rounded-xl bg-slate-50 p-3 text-center">
            {label}
          </span>
          {index < labels.length - 1 ? (
            <span className="text-primary">→</span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

const ecosystem = [
  {
    name: "Excel вручную",
    strength: "Быстро исправить один файл",
    role: "Автоматизировать повторяющуюся подготовку",
  },
  {
    name: "Power Query",
    strength: "Трансформация подготовленных данных",
    role: "Подготовить сложные структуры и процесс",
  },
  {
    name: "AI в Excel",
    strength: "Помощь внутри таблицы",
    role: "Сначала нормализовать исходный файл",
  },
  {
    name: "Python-скрипты",
    strength: "Точечная автоматизация",
    role: "Дать интерфейс, шаблоны и историю",
  },
];
export function EcosystemPositioning() {
  return (
    <div>
      <div className="flex flex-col items-stretch gap-3 rounded-[1.75rem] bg-[#0f172a] p-5 text-sm font-semibold text-white sm:flex-row sm:items-center sm:justify-between">
        {[
          "Исходные отчёты",
          "SheetNorm",
          "Подготовленные данные",
          "1С / Power BI / SQL",
        ].map((item, index) => (
          <div key={item} className="contents">
            <span
              className={
                index === 1
                  ? "rounded-xl bg-primary p-4 text-center"
                  : "rounded-xl bg-slate-800 p-4 text-center"
              }
            >
              {item}
            </span>
            {index < 3 ? (
              <span className="text-center text-blue-300">→</span>
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {ecosystem.map((item) => (
          <article
            key={item.name}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <h3 className="font-semibold text-ink">{item.name}</h3>
            <p className="mt-3 text-sm text-muted">
              <strong className="text-slate-700">Сильная сторона:</strong>{" "}
              {item.strength}
            </p>
            <p className="mt-2 text-sm text-muted">
              <strong className="text-primary">Роль SheetNorm:</strong>{" "}
              {item.role}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function DeploymentPackageSwitcher() {
  const [active, setActive] = useState<0 | 1>(0);
  const item = sheetNormPackages[active];
  return (
    <div>
      <div
        role="tablist"
        aria-label="Конфигурация SheetNorm"
        className="mb-6 inline-flex rounded-full bg-slate-100 p-1"
      >
        {sheetNormPackages.map((pkg, index) => (
          <button
            key={pkg.badge}
            role="tab"
            aria-selected={active === index}
            onClick={() => setActive(index as 0 | 1)}
            className={[
              "rounded-full px-5 py-2.5 text-sm font-semibold",
              active === index
                ? "bg-white text-ink shadow-sm"
                : "text-slate-500",
            ].join(" ")}
          >
            {pkg.badge}
          </button>
        ))}
      </div>
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-6 rounded-[1.75rem] border border-slate-200 bg-white p-6 lg:grid-cols-[0.85fr_1.15fr]"
      >
        <div>
          <StatusBadge tone={active === 0 ? "blue" : "green"}>
            {item.badge}
          </StatusBadge>
          <h3 className="mt-5 text-3xl font-semibold tracking-tight text-ink">
            {item.name}
          </h3>
          <p className="mt-3 leading-7 text-muted">{item.summary}</p>
          <ul className="mt-5 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
            {item.items.map((value) => (
              <li key={value} className="flex gap-2">
                <span className="text-primary">•</span>
                {value}
              </li>
            ))}
          </ul>
        </div>
        <PackageDiagram enterprise={active === 1} />
      </motion.div>
      <p className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
        Промышленная конфигурация подбирается после пилотного проекта и
        тестирования на файлах компании. Нагрузка, количество пользователей и
        SLA не обещаются без отдельного нагрузочного тестирования.
      </p>
    </div>
  );
}
function PackageDiagram({ enterprise }: { enterprise: boolean }) {
  const nodes = enterprise
    ? ["Подразделения", "Web App", "Queue", "Workers", "PostgreSQL + Files"]
    : ["Пользователи", "SheetNorm", "Библиотека правил", "История"];
  return (
    <div className="flex min-h-64 flex-col justify-center rounded-2xl bg-slate-50 p-5">
      <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
        {nodes.map((node, index) => (
          <div key={node} className="contents">
            <span className="flex-1 rounded-xl border border-slate-200 bg-white p-3 text-center text-xs font-semibold">
              {node}
            </span>
            {index < nodes.length - 1 ? (
              <span className="text-center text-primary">→</span>
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-500">
        {(enterprise
          ? ["Аудит", "Мониторинг", "Backup", "API"]
          : ["10–30 пользователей", "Сотни файлов", "Базовые роли"]
        ).map((x) => (
          <span key={x} className="rounded-full bg-white px-3 py-1.5">
            {x}
          </span>
        ))}
      </div>
    </div>
  );
}

export function LocalDeploymentSection() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[0.72fr_1.28fr]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
          Локальное развёртывание
        </p>
        <h2 className="section-title mt-4 text-white">
          Данные могут оставаться внутри корпоративного контура
        </h2>
        <ul className="mt-6 space-y-3 text-sm text-slate-300">
          {[
            "локальная установка",
            "отдельное файловое хранилище",
            "база проверенных правил",
            "требования согласуются до внедрения",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-blue-400">—</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-6 text-slate-400">
          Конкретные меры защиты и права доступа требуют отдельного согласования
          и аудита.
        </p>
      </div>
      <Image
        src="/illustrations/local-deployment.svg"
        alt="Архитектура локального развёртывания SheetNorm"
        width={1200}
        height={720}
        className="h-auto w-full rounded-[1.75rem]"
      />
    </div>
  );
}

export function IndustryTabs() {
  const [active, setActive] = useState(0);
  const item = audienceCards[active];
  const labels = [
    "Финансы",
    "Производство",
    "Строительство",
    "Аналитика",
    "Аутсорсинг",
  ];
  const inputs = [
    "Филиальные отчёты, бюджеты, план-факт",
    "Сменные ведомости и показатели",
    "Акты и таблицы подрядчиков",
    "Отчёты для BI и хранилищ",
    "Файлы разных организаций",
  ];
  const results = [
    "Единая таблица для BI",
    "Нормализованные показатели",
    "Данные по объектам",
    "Структура для SQL / Power BI",
    "Повторяемые шаблоны обработки",
  ];
  return (
    <div>
      <div
        role="tablist"
        aria-label="Отраслевые сценарии"
        className="flex gap-2 overflow-x-auto pb-2"
      >
        {labels.map((label, index) => (
          <button
            key={label}
            role="tab"
            aria-selected={active === index}
            onClick={() => setActive(index)}
            className={[
              "shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold",
              active === index
                ? "bg-ink text-white"
                : "border border-slate-200 bg-white text-slate-600",
            ].join(" ")}
          >
            {label}
          </button>
        ))}
      </div>
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-5 grid gap-5 rounded-[1.75rem] border border-slate-200 bg-white p-6 md:grid-cols-2"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
            Вход
          </p>
          <h3 className="mt-3 text-xl font-semibold text-ink">
            {inputs[active]}
          </h3>
          <p className="mt-3 text-sm leading-6 text-muted">{item[1]}</p>
        </div>
        <div className="rounded-2xl bg-emerald-50 p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-emerald-700">
            Результат
          </p>
          <p className="mt-3 text-xl font-semibold text-emerald-900">
            {results[active]}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function PilotOffer() {
  const columns = [
    {
      title: "Компания передаёт",
      items: ["3–5 обезличенных файлов", "описание ожидаемого результата"],
    },
    {
      title: "FormaOps выполняет",
      items: ["анализ структуры", "настройку сценария", "демонстрацию"],
    },
    {
      title: "Компания получает",
      items: [
        "пример до/после",
        "оценку применимости",
        "рекомендацию Team или Enterprise",
      ],
    },
  ];
  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-3">
        {columns.map((column, index) => (
          <article
            key={column.title}
            className="rounded-[1.5rem] border border-slate-200 bg-white p-6"
          >
            <span className="text-xs font-bold text-primary">0{index + 1}</span>
            <h3 className="mt-4 text-xl font-semibold text-ink">
              {column.title}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              {column.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-secondary">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <Link
        href="/pilot"
        className="mt-7 inline-flex rounded-full bg-ink px-6 py-3.5 font-semibold text-white hover:bg-primary"
      >
        Запросить пилот
      </Link>
    </div>
  );
}
