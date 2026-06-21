import type { Metadata } from "next";
import { DarkFeatureSection, EditorialSection } from "@/components/Editorial";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  DeploymentPackageSwitcher,
  EcosystemPositioning,
  IndustryTabs,
  LocalDeploymentSection,
  PilotOffer,
  ProductScenarioSection,
  SheetNormBenefitsBento,
  SheetNormHero,
} from "@/components/SheetNormSections";
import { ExcelTransformationDemo } from "@/components/StudioSections";
import { sheetNormFaq } from "@/lib/demo";

export const metadata: Metadata = {
  title: "SheetNorm — сложные Excel-отчёты в готовые данные",
  description:
    "SheetNorm помогает создать проверяемое правило и повторно обрабатывать сложные Excel-отчёты.",
  alternates: { canonical: "/products/sheetnorm" },
  openGraph: {
    title: "SheetNorm — нормализация Excel-отчётов",
    description:
      "Локальная система с ИИ-помощником, шаблонами и отчётом качества.",
  },
};

export default function SheetNormPage() {
  return (
    <>
      <SheetNormHero />
      <EditorialSection
        eyebrow="Проблема → результат"
        title="От сложного отчёта — к плоской таблице"
        description="Объединённые ячейки, несколько строк заголовков, месяцы в колонках и итоги становятся проверяемой структурой."
      >
        <ExcelTransformationDemo />
      </EditorialSection>
      <section id="how-it-works">
        <EditorialSection
          eyebrow="Как работает"
          title="Три продуктовых сценария"
          description="Путь пользователя короче внутренней архитектуры: описать, проверить, применить повторно."
        >
          <ProductScenarioSection />
        </EditorialSection>
      </section>
      <EditorialSection eyebrow="Возможности" title="Почему SheetNorm">
        <SheetNormBenefitsBento />
      </EditorialSection>
      <DarkFeatureSection
        eyebrow="Позиционирование"
        title="Не ещё один чат с Excel"
        description="AI используется при создании правила, пользователь проверяет результат, а шаблон выполняет массовую обработку."
      >
        <div className="grid items-center gap-4 text-sm font-semibold sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
          <span className="rounded-2xl bg-slate-800 p-5 text-center">
            AI создаёт проект правила
          </span>
          <span className="text-center text-blue-300">→</span>
          <span className="rounded-2xl bg-primary p-5 text-center">
            Пользователь проверяет
          </span>
          <span className="text-center text-blue-300">→</span>
          <span className="rounded-2xl bg-slate-800 p-5 text-center">
            Шаблон обрабатывает файлы
          </span>
        </div>
      </DarkFeatureSection>
      <EditorialSection
        eyebrow="Экосистема"
        title="SheetNorm готовит данные для существующих инструментов"
        description="Каждый инструмент полезен в своей зоне. SheetNorm закрывает этап подготовки сложных Excel-файлов к аналитике."
      >
        <EcosystemPositioning />
      </EditorialSection>
      <EditorialSection
        eyebrow="После пилота"
        title="Team или Enterprise"
        description="Переключатель показывает целевые различия. Параметры не являются гарантией до нагрузочного тестирования."
      >
        <DeploymentPackageSwitcher />
      </EditorialSection>
      <DarkFeatureSection
        title="Данные могут оставаться внутри корпоративного контура"
        description="Локальная установка и хранение обсуждаются с учётом требований компании. Абсолютная безопасность без аудита не обещается."
      >
        <LocalDeploymentSection />
      </DarkFeatureSection>
      <EditorialSection eyebrow="Сценарии" title="Для кого особенно полезно">
        <IndustryTabs />
      </EditorialSection>
      <EditorialSection
        eyebrow="Пилот"
        title="Проверьте SheetNorm на 3–5 обезличенных файлах"
      >
        <PilotOffer />
      </EditorialSection>
      <section className="container-page section-space">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              FAQ
            </p>
            <h2 className="section-title mt-4 text-ink">Вопросы до пилота</h2>
            <p className="mt-5 leading-7 text-muted">
              Коротко о покупке, локальной обработке, роли AI и нагрузке.
            </p>
          </div>
          <FAQAccordion items={sheetNormFaq} />
        </div>
      </section>
    </>
  );
}
