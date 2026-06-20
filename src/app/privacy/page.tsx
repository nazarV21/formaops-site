import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Политика обработки персональных данных — FormaOps",
  description:
    "Шаблон политики обработки персональных данных для сайта FormaOps. Требует юридической проверки перед публикацией.",
};

export default function PrivacyPage() {
  return (
    <section className="container-page py-16">
      <SectionHeading
        title="Политика обработки персональных данных"
        description="Этот текст является шаблоном и требует юридической проверки перед публикацией. На странице не указаны реквизиты оператора, потому что они должны быть добавлены владельцем сайта после проверки."
      />
      <div className="mt-10 space-y-8 rounded-3xl border border-borderline bg-white p-8 leading-8 text-muted shadow-sm">
        <section>
          <h2 className="text-2xl font-semibold text-ink">
            Какие данные может передавать пользователь
          </h2>
          <p className="mt-3">
            Через форму заявки пользователь может передать имя, компанию,
            должность, email, телефон или Telegram, а также описание задачи. Эти
            данные используются для обработки запроса и обратной связи.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-ink">
            Файлы и конфиденциальная информация
          </h2>
          <p className="mt-3">
            Пользователь не должен отправлять конфиденциальные файлы через форму
            сайта. Передача файлов, включая обезличенные Excel-файлы для пилота,
            обсуждается отдельно после первичного контакта.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-ink">Цели обработки</h2>
          <p className="mt-3">
            Данные формы могут использоваться для связи с пользователем,
            уточнения задачи, подготовки предложения о пилоте и ведения
            внутреннего учёта обращений.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-ink">Перед публикацией</h2>
          <p className="mt-3">
            Перед запуском сайта необходимо проверить текст с юристом, добавить
            сведения об операторе, сроки хранения, порядок отзыва согласия,
            применимое право и технические меры защиты.
          </p>
        </section>
      </div>
    </section>
  );
}
