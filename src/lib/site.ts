export const siteConfig = {
  name: "FormaOps",
  tagline: "Превращаем хаос в рабочие инструменты.",
  description:
    "FormaOps разрабатывает локальные продукты для автоматизации работы с Excel-файлами, документами, отчётностью и корпоративными данными.",
  url: "https://formaops.ru",
  contacts: {
    email: "your-email@example.com",
    telegram: "@your_telegram",
    city: "Россия"
  },
  nav: [
    { label: "Продукты", href: "/products" },
    { label: "SheetNorm", href: "/products/sheetnorm" },
    { label: "Пилот", href: "/pilot" },
    { label: "О студии", href: "/about" },
    { label: "Контакты", href: "/contacts" }
  ],
  footerLinks: [
    { label: "Продукты", href: "/products" },
    { label: "SheetNorm", href: "/products/sheetnorm" },
    { label: "Пилот", href: "/pilot" },
    { label: "О студии", href: "/about" },
    { label: "Контакты", href: "/contacts" },
    { label: "Политика", href: "/privacy" },
    { label: "Условия", href: "/terms" }
  ]
} as const;

export const pilotSteps = [
  "Компания описывает задачу.",
  "Передаёт 3–5 обезличенных файлов.",
  "Мы анализируем структуру данных.",
  "Настраиваем демонстрационный сценарий.",
  "Показываем результат.",
  "Оцениваем экономию времени.",
  "Предлагаем конфигурацию Team или Enterprise."
];
