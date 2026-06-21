"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="container-page flex min-h-[70vh] flex-col items-start justify-center py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600">
        Ошибка
      </p>
      <h1 className="editorial-title mt-5 text-ink">
        Не удалось загрузить страницу
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
        Попробуйте повторить действие. Если ошибка сохраняется, свяжитесь с
        FormaOps.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-full bg-ink px-6 py-3.5 font-semibold text-white"
      >
        Попробовать снова
      </button>
    </main>
  );
}
