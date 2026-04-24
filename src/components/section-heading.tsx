import { cn } from "@/components/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: Readonly<{
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}>) {
  return (
    <div className={cn("max-w-3xl space-y-3", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-moss">
        {eyebrow}
      </p>
      <h2 className="balanced-text font-serif text-3xl leading-tight font-semibold text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
