import Link from "next/link";

type CTASectionProps = {
  title: string;
  text: string;
  buttonLabel: string;
  href: string;
};

export function CTASection({ title, text, buttonLabel, href }: CTASectionProps) {
  return (
    <section className="container-page py-16">
      <div className="rounded-[2rem] border border-primary/20 bg-primary p-8 text-white shadow-soft sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-blue-50">{text}</p>
          </div>
          <Link className="focus-ring rounded-full bg-white px-6 py-3 text-center font-semibold text-primary transition hover:bg-blue-50" href={href}>
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
