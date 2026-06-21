import type { Metadata } from "next";
import { LegalDocumentLayout, type LegalSection } from "@/components/Legal";
export const metadata: Metadata = {
  title: "Условия использования сайта — FormaOps",
  description: "Рабочая заготовка условий использования сайта FormaOps.",
  alternates: { canonical: "/terms" },
};
const sections: LegalSection[] = [
  {
    id: "purpose",
    title: "Назначение сайта",
    content: (
      <p>
        Сайт предоставляет информацию о FormaOps, продуктах, пилотном внедрении
        и способах связи. Описания носят информационный характер.
      </p>
    ),
  },
  {
    id: "offer",
    title: "Не является публичной офертой",
    content: (
      <p>
        Условия пилота, стоимость, сроки, SLA и состав промышленной конфигурации
        определяются отдельно и фиксируются в соответствующих документах.
      </p>
    ),
  },
  {
    id: "requests",
    title: "Заявки",
    content: (
      <p>
        При отправке формы пользователь передаёт контактные данные и описание
        задачи. Конфиденциальные файлы через форму не принимаются.
      </p>
    ),
  },
  {
    id: "pilot",
    title: "Пилот и внедрение",
    content: (
      <p>
        Промышленная конфигурация предлагается после тестирования на данных
        компании. Показатели нагрузки не гарантируются без отдельного
        тестирования.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Изменение условий",
    content: (
      <p>
        Перед публикацией необходимо добавить сведения о владельце сайта,
        применимое право и порядок обновления документа.
      </p>
    ),
  },
];
export default function TermsPage() {
  return (
    <LegalDocumentLayout
      title="Условия использования сайта"
      description="Информационные условия работы с сайтом FormaOps и отправки заявок."
      sections={sections}
    />
  );
}
