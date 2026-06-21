export const siteConfig = {
  name: "FormaOps",
  tagline: "Превращаем хаос в рабочие инструменты.",
  description:
    "FormaOps разрабатывает локальные продукты для автоматизации работы с Excel-файлами, документами, отчётностью и корпоративными данными.",
  url: "https://formaops.vercel.app",
  contacts: {
    email: "c30nazar@gmail.com",
    telegram: "@ngggoat",
    city: "Россия, Тюмень",
  },
  nav: [
    { label: "Продукты", href: "/products" },
    { label: "Пилот", href: "/pilot" },
    { label: "О студии", href: "/about" },
    { label: "Контакты", href: "/contacts" },
  ],
  footerLinks: [
    { label: "Продукты", href: "/products" },
    { label: "Пилот", href: "/pilot" },
    { label: "О студии", href: "/about" },
    { label: "Контакты", href: "/contacts" },
    { label: "Политика", href: "/privacy" },
    { label: "Условия", href: "/terms" },
  ],
} as const;

export const pilotSteps = [
  "Компания описывает задачу.",
  "Передаёт 3–5 обезличенных файлов.",
  "Мы анализируем структуру данных.",
  "Настраиваем демонстрационный сценарий.",
  "Показываем результат.",
  "Оцениваем экономию времени.",
  "Предлагаем конфигурацию Team или Enterprise.",
];
