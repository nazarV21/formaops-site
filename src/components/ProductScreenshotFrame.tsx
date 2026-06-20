import Image from "next/image";

type ProductScreenshotFrameProps = {
  screenshotSrc?: string;
  fallbackSrc?: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export function ProductScreenshotFrame({
  screenshotSrc,
  fallbackSrc = "/illustrations/sheetnorm-product-mockup.svg",
  alt,
  priority = false,
  className = "",
}: ProductScreenshotFrameProps) {
  const source = screenshotSrc || fallbackSrc;

  return (
    <figure
      className={[
        "group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-[0_28px_80px_rgba(15,23,42,0.13)]",
        className,
      ].join(" ")}
    >
      <div className="absolute inset-x-16 top-0 h-24 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/15" />
      <Image
        src={source}
        alt={alt}
        width={1400}
        height={900}
        priority={priority}
        className="relative h-auto w-full rounded-[1.5rem]"
      />
      <figcaption className="sr-only">
        {screenshotSrc
          ? "Реальный продуктовый скриншот"
          : "Синтетический демонстрационный mockup"}
      </figcaption>
    </figure>
  );
}
