import { cn } from "@/components/utils";

export function PlaceholderCard({
  label,
  detail,
  className,
}: Readonly<{
  label: string;
  detail: string;
  className?: string;
}>) {
  return (
    <div
      className={cn(
        "rounded-[1.75rem] border border-border bg-card p-6 shadow-editorial",
        className,
      )}
    >
      <div className="mb-6 h-48 rounded-[1.35rem] bg-gradient-to-br from-surface via-[#efe5d4] to-surface-strong texture-grid" />
      <div className="space-y-3">
        <div className="h-3 w-24 rounded-full bg-surface-strong" />
        <p className="font-serif text-2xl text-ink">{label}</p>
        <p className="text-sm leading-7 text-muted">{detail}</p>
      </div>
    </div>
  );
}
