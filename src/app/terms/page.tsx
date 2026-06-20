import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Условия использования сайта — FormaOps",
  description:
    "Шаблон условий использования сайта FormaOps. Требует юридической проверки перед публикацией.",
};

export default function TermsPage() {
  return (
    <section className="container-page py-16">
      <SectionHeading
        title="Условия использования сайта"
        description="Этот текст является шаблоном и требует юридической проверки перед публикацией. Материалы сайта не являются публичной офертой."
      />
      <div className="mt-10 space-y-8 rounded-3xl border border-borderline bg-white p-8 leading-8 text-muted shadow-sm">
        <section>
          <h2 className="text-2xl font-semibold text-ink">Назначение сайта</h2>
          <p className="mt-3">
            Сайт предоставляет информацию о студии FormaOps, продуктах, пилотном
            внедрении и способах связи. Описания продуктов носят информационный
            характер.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-ink">Заявки</h2>
          <p className="mt-3">
            При отправке формы пользователь указывает имя, компанию, должность,
            email, телефон или Telegram и описание задачи. Пользователь не
            должен отправлять конфиденциальные файлы через форму.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-ink">
            Пилот и промышленное внедрение
          </h2>
          <p className="mt-3">
            Пилотное внедрение, промышленная конфигурация, сроки, стоимость, SLA
            и юридические условия определяются отдельно после обсуждения задачи
            и тестирования на данных компании.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-ink">Перед публикацией</h2>
          <p className="mt-3">
            Перед запуском сайта необходимо проверить условия с юристом и
            добавить корректные сведения о владельце сайта, применимое право и
            порядок взаимодействия с пользователями.
          </p>
        </section>
      </div>
    </section>
  );
}
