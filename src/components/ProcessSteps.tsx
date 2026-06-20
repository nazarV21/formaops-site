type ProcessStepsProps = {
  steps: string[];
};

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => (
        <li key={step} className="rounded-3xl border border-borderline bg-surface p-5 shadow-sm">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
            {index + 1}
          </div>
          <p className="leading-7 text-ink">{step}</p>
        </li>
      ))}
    </ol>
  );
}
