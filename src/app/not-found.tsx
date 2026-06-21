import Link from "next/link";
export default function NotFound() {
  return (
    <main className="container-page flex min-h-[70vh] flex-col items-start justify-center py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        Ошибка 404
      </p>
      <h1 className="editorial-title mt-5 text-ink">Страница не найдена</h1>
      <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
        Возможно, адрес изменился или страница больше недоступна.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-full bg-ink px-6 py-3.5 font-semibold text-white"
        >
          На главную
        </Link>
        <Link
          href="/products"
          className="rounded-full border border-slate-200 bg-white px-6 py-3.5 font-semibold text-ink"
        >
          Посмотреть продукты
        </Link>
      </div>
    </main>
  );
}
