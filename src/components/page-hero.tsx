import { Container } from "@/components/container";
import { cn } from "@/components/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
  titleClassName,
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  titleClassName?: string;
}>) {
  return (
    <section className={cn("border-b border-border/70 py-10 sm:py-12", className)}>
      <Container>
        <div className="editorial-shell overflow-hidden rounded-[2.25rem] border border-border bg-card px-6 py-8 shadow-editorial sm:px-8 sm:py-10 lg:px-12">
          <div className="topo-lines absolute inset-0 opacity-70" />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_0.6fr] lg:items-end">
            <div className="space-y-4 section-fade">
              <p className="text-xs uppercase tracking-[0.35em] text-moss">{eyebrow}</p>
              <h1
                className={cn(
                  "balanced-text max-w-4xl whitespace-pre-line font-serif text-4xl leading-tight font-semibold text-ink sm:text-5xl lg:text-6xl",
                  titleClassName,
                )}
              >
                {title}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {description}
              </p>
            </div>
            {children ? <div className="relative">{children}</div> : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
