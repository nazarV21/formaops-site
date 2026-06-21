import type { Metadata } from "next";
import { LegalDocumentLayout, type LegalSection } from "@/components/Legal";
export const metadata: Metadata = {
  title: "Политика обработки персональных данных — FormaOps",
  description:
    "Рабочая заготовка политики обработки персональных данных FormaOps.",
  alternates: { canonical: "/privacy" },
};
const sections: LegalSection[] = [
  {
    id: "data",
    title: "Какие данные обрабатываются",
    content: (
      <p>
        Через форму пользователь может передать имя, компанию, должность, email,
        телефон или Telegram и описание задачи.
      </p>
    ),
  },
  {
    id: "purpose",
    title: "Цели обработки",
    content: (
      <p>
        Данные используются для обработки запроса, обратной связи, уточнения
        задачи и подготовки предложения о пилоте.
      </p>
    ),
  },
  {
    id: "files",
    title: "Файлы и конфиденциальность",
    content: (
      <p>
        Пользователь не должен отправлять конфиденциальные файлы через форму.
        Передача обезличенных примеров обсуждается отдельно.
      </p>
    ),
  },
  {
    id: "storage",
    title: "Хранение и защита",
    content: (
      <p>
        До публикации необходимо определить сроки хранения, порядок удаления,
        технические меры защиты и доступ ответственных лиц.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Права пользователя",
    content: (
      <p>
        Порядок отзыва согласия, изменения и удаления данных должен быть уточнён
        после юридической проверки и добавления реквизитов оператора.
      </p>
    ),
  },
];
export default function PrivacyPage() {
  return (
    <LegalDocumentLayout
      title="Политика обработки персональных данных"
      description="Правила обработки данных, которые пользователь передаёт через форму сайта FormaOps."
      sections={sections}
    />
  );
}
