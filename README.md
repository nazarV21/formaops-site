# FormaOps site

Сайт-витрина FormaOps — студии прикладных ИИ-решений для бизнеса. Сайт объясняет позиционирование студии, первый продукт SheetNorm, будущую продуктовую линейку, пилотное внедрение и форму заявки.

## Запуск

```bash
npm install
npm run dev
npm run format
npm run lint
npm run build
```

Локальный адрес разработки: `http://localhost:3000`.

## Где менять контент

- Контакты, навигация и базовые настройки: `src/lib/site.ts`.
- Список продуктов и статусы: `src/lib/products.ts`.
- Конфигурации SheetNorm Team/Enterprise: `src/lib/packages.ts`.
- Синтетические данные интерфейсных mockup-блоков, таблиц до/после, FAQ и timeline: `src/lib/demo.ts`.

## Визуальные компоненты

Основная система:

- `Editorial.tsx` — внутренние hero, светлые/тёмные секции и финальные CTA;
- `StudioSections.tsx` — hero-визуал студии, bento, process timeline, флагман, roadmap-карточки и интерактивное преобразование Excel;
- `SheetNormSections.tsx` — product hero, сценарии, benefits bento, экосистема, Team/Enterprise switcher, отраслевые вкладки и пилот;
- `ProductScreenshotFrame` — реальный скриншот или fallback SVG;
- `LeadForm` / `LeadFormPanel` — единая системная форма;
- `LegalDocumentLayout` — юридические страницы с оглавлением;
- `FAQAccordion` — единый раскрывающийся FAQ;
- `Header`, `SiteFooter`, `ContactMethodCard` — общая оболочка сайта.

Все файлы, названия подразделений, цифры и строки в mockup-интерфейсах являются синтетическими демонстрационными примерами. Они не описывают клиентов или реальные внедрения.

Тексты блока преимуществ, сравнение с альтернативами и карточки целевых подразделений редактируются в `src/lib/sheetnorm-content.ts`. В этом файле важно сохранять нейтральную формулировку: альтернативные инструменты полезны в своей зоне, а SheetNorm закрывает этап подготовки сложной Excel-отчётности.

Сайт не содержит реальных клиентов, отзывов или кейсов.

## SVG-иллюстрации

Законченные image-like ассеты лежат в `public/illustrations/`:

- `hero-studio-flow.svg` — студийный workflow FormaOps;
- `sheetnorm-product-mockup.svg` — интерфейс SheetNorm;
- `before-after-excel.svg` — Excel до и после нормализации;
- `local-deployment.svg` — локальный контур компании;
- `team-enterprise-architecture.svg` — целевые конфигурации Team и Enterprise;
- `pilot-timeline.svg` — этапы пилота;
- `why-sheetnorm.svg` — визуальная карта преимуществ SheetNorm.

Таблицы, имена файлов, статусы, показатели и архитектурные параметры внутри SVG являются синтетическими демонстрационными данными. Они не описывают клиентов, реальные кейсы или гарантированные параметры промышленной нагрузки.

## Реальные скриншоты SheetNorm

Утверждённые скриншоты нужно складывать в `public/screenshots/sheetnorm/`. В README внутри этой папки перечислены рекомендуемые экраны и требования к подготовке файлов.

Компонент `src/components/ProductScreenshotFrame.tsx` показывает SVG-mockup по умолчанию. Чтобы заменить его реальным экраном, передайте `screenshotSrc`:

```tsx
<ProductScreenshotFrame
  screenshotSrc="/screenshots/sheetnorm/dashboard.webp"
  fallbackSrc="/illustrations/sheetnorm-product-mockup.svg"
  alt="Интерфейс SheetNorm"
/>
```

Если `screenshotSrc` не задан, остаётся безопасный синтетический mockup.

## Анимации

Анимации реализованы через Motion for React (`motion`):

- появление блоков при скролле;
- мягкий hover lift карточек;
- анимированные линии потоков;
- прогресс обработки;
- раскрытие FAQ;
- спокойный фон без тяжёлых эффектов.

Сайт учитывает системную настройку `prefers-reduced-motion`. Чтобы дополнительно уменьшить анимации, можно:

1. сократить или убрать `animate`, `whileInView` и `whileHover` в компонентах;
2. изменить длительности в `StudioSections.tsx` и `SheetNormSections.tsx`;
3. отключить фон, удалив `AnimatedGridBackground` из `src/app/layout.tsx`;
4. изменить правила `@media (prefers-reduced-motion: reduce)` в `src/app/globals.css`.

## Форма заявки

Компонент формы: `src/components/LeadForm.tsx`. API route: `src/app/api/lead/route.ts`.

На текущем этапе заявка:

- валидируется на клиенте и сервере;
- не принимает файлы;
- сохраняется в `data/leads.json`;
- получает `createdAt` и `sourcePage`.
- содержит honeypot и ограничения длины;

Каталог `data/` добавлен в `.gitignore`.

Перед production нужно подключить реальную доставку заявок: email, Telegram bot, CRM, Supabase или другой согласованный канал. Также нужны защита от спама, политика хранения заявок и уведомления ответственных.

## Юридические страницы

Страницы `/privacy` и `/terms` являются шаблонами и требуют юридической проверки перед публикацией. Через форму не следует отправлять конфиденциальные файлы.

## Перед production

- проверить актуальность контактов в `src/lib/site.ts`;
- подтвердить реальный домен и `metadataBase`;
- подключить канал доставки заявок;
- согласовать privacy/terms с юристом;
- определить меры защиты и сроки хранения данных;
- провести accessibility, performance и cross-browser аудит;
- при необходимости заменить демонстрационные mockup-данные на утверждённые продуктовые материалы.
