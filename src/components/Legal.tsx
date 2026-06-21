import Link from "next/link";
import { InlineNotice } from "@/components/Editorial";

export type LegalSection = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export function LegalTableOfContents({
  sections,
}: {
  sections: LegalSection[];
}) {
  return (
    <nav aria-label="Оглавление">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        Содержание
      </p>
      <ul className="mt-4 space-y-3 text-sm">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="focus-ring rounded-md text-slate-600 transition hover:text-primary"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function LegalDocumentLayout({
  title,
  description,
  sections,
}: {
  title: string;
  description: string;
  sections: LegalSection[];
}) {
  return (
    <main className="container-page section-space">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        Документы FormaOps
      </p>
      <h1 className="editorial-title mt-5 max-w-4xl text-ink">{title}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
        {description}
      </p>
      <div className="mt-8 max-w-3xl">
        <InlineNotice>
          Документ является рабочей заготовкой и требует юридической проверки
          перед публикацией.
        </InlineNotice>
      </div>
      <dl className="mt-8 grid max-w-3xl gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-sm sm:grid-cols-3">
        <div>
          <dt className="text-slate-400">Владелец / оператор</dt>
          <dd className="mt-1 font-medium text-ink">Требует заполнения</dd>
        </div>
        <div>
          <dt className="text-slate-400">Вступление в силу</dt>
          <dd className="mt-1 font-medium text-ink">Требует заполнения</dd>
        </div>
        <div>
          <dt className="text-slate-400">Дата обновления</dt>
          <dd className="mt-1 font-medium text-ink">Требует заполнения</dd>
        </div>
      </dl>
      <details className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 lg:hidden">
        <summary className="cursor-pointer font-semibold text-ink">
          Оглавление
        </summary>
        <div className="mt-5">
          <LegalTableOfContents sections={sections} />
        </div>
      </details>
      <div className="mt-12 grid gap-12 lg:grid-cols-[220px_minmax(0,780px)] lg:items-start">
        <aside className="sticky top-24 hidden lg:block">
          <LegalTableOfContents sections={sections} />
        </aside>
        <article className="space-y-12 leading-8 text-muted">
          {sections.map((section) => (
            <section id={section.id} key={section.id} className="scroll-mt-28">
              <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4">{section.content}</div>
            </section>
          ))}
          <p className="border-t border-slate-200 pt-8 text-sm">
            <Link href="/contacts" className="text-primary hover:underline">
              Возник вопрос? Связаться с FormaOps
            </Link>
          </p>
        </article>
      </div>
    </main>
  );
}
