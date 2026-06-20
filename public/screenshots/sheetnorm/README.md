# Скриншоты SheetNorm

Сюда можно добавить утверждённые продуктовые скриншоты:

- `dashboard.webp` — главная панель;
- `convert.webp` — повторная обработка по шаблону;
- `assistant.webp` — AI-помощник и предпросмотр;
- `rules.webp` — библиотека правил;
- `jobs.webp` — очередь и статусы задач;
- `quality-report.webp` — отчёт качества;
- `deployment.webp` — экран конфигураций и развёртывания.

Рекомендуемый формат: WebP или PNG, ширина 1600–2400 px, без реальных персональных или корпоративных данных.

Чтобы заменить SVG-mockup, передайте путь в `ProductScreenshotFrame`:

```tsx
<ProductScreenshotFrame
  screenshotSrc="/screenshots/sheetnorm/dashboard.webp"
  fallbackSrc="/illustrations/sheetnorm-product-mockup.svg"
  alt="Интерфейс SheetNorm"
/>
```

Если `screenshotSrc` не передан, компонент показывает `fallbackSrc`.
