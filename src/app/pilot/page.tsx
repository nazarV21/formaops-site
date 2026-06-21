import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  DarkFeatureSection,
  EditorialSection,
  InternalPageHero,
} from "@/components/Editorial";
import { FAQAccordion } from "@/components/FAQAccordion";
import { LeadFormPanel } from "@/components/LeadFormPanel";
import { PrinciplesStrip } from "@/components/StudioSections";
import { sheetNormFaq } from "@/lib/demo";

export const metadata: Metadata = {
  title: "Пилотное внедрение — FormaOps",
  description:
    "Проверьте решение FormaOps на обезличенных данных до внедрения.",
  alternates: { canonical: "/pilot" },
};
const phases = [
  ["01", "Обсуждение", "Фиксируем процесс и результат"],
  ["02", "Обезличенные данные", "Получаем 3–5 типовых файлов"],
  ["03", "Настройка сценария", "Анализируем структуру и правила"],
  ["04", "Демонстрация", "Проверяем результат и экономию"],
  ["05", "Рекомендация", "Предлагаем путь внедрения"],
];
const exchange = [
  {
    title: "Компания предоставляет",
    items: [
      "3–5 обезличенных файлов",
      "описание текущего процесса",
      "пример ожидаемого результата",
    ],
  },
  {
    title: "FormaOps выполняет",
    items: [
      "анализ структуры",
      "настройку сценария",
      "демонстрацию",
      "фиксацию ограничений",
    ],
  },
  {
    title: "Компания получает",
    items: [
      "пример до/после",
      "оценку применимости",
      "рекомендации",
      "предложение Team или Enterprise",
    ],
  },
];
export default function PilotPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Пилотное внедрение"
        title="Проверьте решение на своих данных до внедрения"
        description="Начинаем с короткого пилота на обезличенных файлах, чтобы подтвердить применимость решения, зафиксировать ограничения и подобрать промышленную конфигурацию."
      >
        <div>
          <Image
            src="/illustrations/pilot-timeline.svg"
            alt="Фазы пилота FormaOps"
            width={1400}
            height={440}
            className="h-auto w-full rounded-2xl"
          />
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="#lead-form"
              className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
            >
              Оставить заявку
            </Link>
            <Link
              href="/products/sheetnorm"
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-ink"
            >
              Посмотреть SheetNorm →
            </Link>
          </div>
        </div>
      </InternalPageHero>
      <PrinciplesStrip
        items={[
          "3–5 обезличенных файлов",
          "Проверка на реальном сценарии",
          "Team или Enterprise после тестирования",
          "Без покупки до подтверждения применимости",
        ]}
      />
      <EditorialSection
        eyebrow="Зачем"
        title="Пилот снижает неопределённость до внедрения"
        description="Проверяем не абстрактную возможность, а конкретный процесс и типовые файлы компании."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {[
            [
              "Применимость файлов",
              "Можно ли устойчиво распознавать структуру",
            ],
            ["Необходимые правила", "Какие уточнения и шаблоны нужны"],
            ["Потенциальная экономия", "Что меняется в ручном процессе"],
            [
              "Требования к внедрению",
              "Какая инфраструктура и роли потребуются",
            ],
          ].map(([title, text], index) => (
            <article
              key={title}
              className={[
                "rounded-[1.75rem] border border-slate-200 bg-white p-6",
                index === 0 ? "lg:row-span-2 lg:p-8" : "",
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
      <DarkFeatureSection
        eyebrow="Пять фаз"
        title="От обсуждения до рекомендации"
        description="Анализ структуры и оценка экономии встроены в пять основных фаз пилота."
      >
        <div className="relative grid gap-6 lg:grid-cols-5">
          <div className="absolute bottom-5 left-5 top-5 w-px bg-slate-700 lg:left-5 lg:right-5 lg:top-5 lg:h-px lg:w-auto" />
          {phases.map(([n, t, d]) => (
            <div
              key={n}
              className="relative grid grid-cols-[2.5rem_1fr] gap-4 lg:block"
            >
              <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#0f172a] bg-primary text-xs font-bold">
                {n}
              </span>
              <div className="lg:mt-6">
                <h3 className="font-semibold text-white">{t}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </DarkFeatureSection>
      <EditorialSection
        eyebrow="Обмен"
        title="Что нужно для пилота и что вы получите"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {exchange.map((column, index) => (
            <article
              key={column.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6"
            >
              <span className="text-xs font-bold text-primary">
                0{index + 1}
              </span>
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
      </EditorialSection>
      <section className="container-page section-space">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              FAQ
            </p>
            <h2 className="section-title mt-4 text-ink">До передачи файлов</h2>
            <p className="mt-5 leading-7 text-muted">
              Файлы не прикладываются через форму. Условия передачи обсуждаются
              отдельно.
            </p>
          </div>
          <FAQAccordion items={sheetNormFaq} />
        </div>
      </section>
      <section id="lead-form" className="container-page pb-24">
        <div className="grid gap-10 rounded-[2rem] bg-blue-50/70 p-6 sm:p-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Заявка
            </p>
            <h2 className="section-title mt-4 text-ink">
              Расскажите о процессе, который хотите автоматизировать
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-muted">
              <li>Файлы пока не прикладываются.</li>
              <li>Конфиденциальные данные отправлять не нужно.</li>
              <li>Передачу примеров согласуем отдельно.</li>
            </ul>
          </div>
          <LeadFormPanel />
        </div>
      </section>
    </>
  );
}
