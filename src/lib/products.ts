export type ProductStatus = "pilot" | "development";

export type Product = {
  name: string;
  slug: string;
  status: ProductStatus;
  statusLabel: string;
  description: string;
  href?: string;
};

export const products: Product[] = [
  {
    name: "SheetNorm",
    slug: "sheetnorm",
    status: "pilot",
    statusLabel: "Готов к пилоту",
    description:
      "Нормализация сложных Excel-отчётов для аналитики, 1С, Power BI, SQL и корпоративных хранилищ.",
    href: "/products/sheetnorm",
  },
  {
    name: "DocuFlow",
    slug: "docuflow",
    status: "development",
    statusLabel: "В разработке",
    description:
      "ИИ-инструмент для подготовки документов по шаблонам: договоров, заявок, писем, служебных записок и отчётов.",
  },
  {
    name: "TenderCheck",
    slug: "tendercheck",
    status: "development",
    statusLabel: "В разработке",
    description:
      "Помощник для анализа тендерной документации, требований, сроков, рисков и состава обязательных документов.",
  },
  {
    name: "ActFlow",
    slug: "actflow",
    status: "development",
    statusLabel: "В разработке",
    description:
      "Система для подготовки актов, ведомостей и отчётных документов по данным компании.",
  },
  {
    name: "DataCheck",
    slug: "datacheck",
    status: "development",
    statusLabel: "В разработке",
    description:
      "Инструмент для проверки таблиц на ошибки, пропуски, дубликаты, неверные форматы и несоответствия.",
  },
];

export const readyProducts = products.filter(
  (product) => product.status === "pilot",
);
export const developmentProducts = products.filter(
  (product) => product.status === "development",
);
