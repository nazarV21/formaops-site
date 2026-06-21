import type { Metadata } from "next";
import Image from "next/image";
import {
  EditorialSection,
  FinalCTA,
  InternalPageHero,
} from "@/components/Editorial";
import { PrinciplesStrip } from "@/components/StudioSections";

export const metadata: Metadata = {
  title: "О студии — FormaOps",
  description:
    "FormaOps создаёт прикладные локальные инструменты вокруг реальных процессов.",
  alternates: { canonical: "/about" },
};
const principles = [
  [
    "От процесса — к продукту",
    "Начинаем с повторяемой ручной задачи и формулируем проверяемый результат.",
  ],
  ["Пилот до внедрения", "Проверяем применимость на обезличенных данных."],
  [
    "Локальная обработка",
    "Проектируем целевой сценарий внутри инфраструктуры компании.",
  ],
  ["B2B-ориентация", "Учитываем роли, контроль, хранение и эксплуатацию."],
  [
    "Продуктовая линейка",
    "SheetNorm готов к пилоту, следующие направления развиваются.",
  ],
];
export default function AboutPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="О FormaOps"
        title="Создаём прикладные инструменты вокруг реальных процессов"
        description="FormaOps разрабатывает локальные продукты для задач, которые сотрудники регулярно выполняют вручную: подготовки данных, документов, отчётности и проверок."
      >
        <Image
          src="/illustrations/hero-studio-flow.svg"
          alt="Визуальный язык FormaOps: документы, данные, правила и результат"
          width={1200}
          height={820}
          className="h-auto w-full"
        />
      </InternalPageHero>
      <section className="container-page section-space">
        <div className="max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Манифест
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-ink sm:text-6xl">
            Не внедряем ИИ ради самого ИИ
          </h2>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-muted">
            Продукт должен решать{" "}
            <strong className="text-ink">конкретную операционную задачу</strong>
            , давать <strong className="text-ink">проверяемый результат</strong>{" "}
            и иметь понятный путь{" "}
            <strong className="text-ink">от пилота к внедрению</strong>.
          </p>
        </div>
      </section>
      <EditorialSection
        eyebrow="Принципы"
        title="Рабочая система вместо демонстрации технологии"
      >
        <div className="grid gap-5 lg:grid-cols-12">
          {principles.map(([title, text], index) => (
            <article
              key={title}
              className={[
                "rounded-[1.75rem] border border-slate-200 bg-white p-6",
                index === 0
                  ? "lg:col-span-7 lg:row-span-2 lg:p-9"
                  : "lg:col-span-5",
              ].join(" ")}
            >
              <span className="text-xs font-bold text-primary">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-3 leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </EditorialSection>
      <EditorialSection
        eyebrow="Как появляется продукт"
        title="Пять шагов от задачи к конфигурации"
      >
        <PrinciplesStrip
          items={[
            "Находим ручную задачу",
            "Формулируем результат",
            "Создаём пилот",
            "Проверяем ограничения",
          ]}
        />
        <p className="mt-6 text-center text-sm font-semibold text-primary">
          → Формируем продуктовую конфигурацию
        </p>
      </EditorialSection>
      <EditorialSection
        eyebrow="Линейка"
        title="SheetNorm — первый продукт студии"
      >
        <div className="flex flex-col gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-ink">SheetNorm · готов к пилоту</p>
            <p className="mt-2 text-sm text-muted">
              DocuFlow · TenderCheck · ActFlow · DataCheck — в разработке
            </p>
          </div>
          <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            Пилот → конфигурация
          </span>
        </div>
      </EditorialSection>
      <FinalCTA
        title="Есть повторяемый ручной процесс?"
        text="Опишите задачу — оценим, можно ли проверить её на коротком пилоте."
      />
    </>
  );
}
