export type Package = {
  name: string;
  badge: "Team" | "Enterprise";
  audience: string;
  summary: string;
  items: string[];
};

export const sheetNormPackages: Package[] = [
  {
    name: "SheetNorm Team",
    badge: "Team",
    audience: "Для отделов и рабочих групп.",
    summary:
      "Подходит, если нужно автоматизировать регулярную обработку Excel-файлов в одном подразделении.",
    items: [
      "10–30 пользователей",
      "сотни файлов в месяц",
      "библиотека шаблонов",
      "история обработки",
      "очередь задач",
      "базовые роли",
      "база данных",
      "подходит для финансов, аналитики, производства и отчётности"
    ]
  },
  {
    name: "SheetNorm Enterprise",
    badge: "Enterprise",
    audience: "Для крупной компании и нескольких подразделений.",
    summary:
      "Подходит, если система должна стать частью корпоративной инфраструктуры.",
    items: [
      "30–100+ пользователей",
      "тысячи файлов в месяц",
      "PostgreSQL",
      "Redis/RQ или Celery",
      "отдельные workers",
      "файловое хранилище",
      "аудит",
      "мониторинг",
      "резервное копирование",
      "LDAP/AD в перспективе",
      "API-интеграции"
    ]
  }
];
