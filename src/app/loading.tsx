export default function Loading() {
  return (
    <div
      className="container-page flex min-h-[60vh] items-center justify-center"
      role="status"
      aria-label="Загрузка"
    >
      <div className="h-9 w-9 animate-spin rounded-full border-2 border-slate-200 border-t-primary" />
    </div>
  );
}
