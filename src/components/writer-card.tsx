import Image from "next/image";
import Link from "next/link";
import type { Author } from "@/lib/content";

export function WriterCard({
  author,
  href = "/writers",
}: Readonly<{
  author: Author;
  href?: string;
}>) {
  return (
    <Link
      href={href}
      className="group rounded-[1.75rem] border border-border bg-card p-6 shadow-editorial"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        {author.imageSrc ? (
          <div className="h-32 w-32 shrink-0 overflow-hidden rounded-[1.5rem] border border-border bg-surface">
            <Image
              src={author.imageSrc}
              alt={author.name}
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-[1.5rem] border border-border bg-gradient-to-br from-surface via-[#e7ddca] to-surface-strong text-center">
            <span className="px-4 text-xs uppercase tracking-[0.24em] text-muted">
              {author.imageLabel}
            </span>
          </div>
        )}
        <div className="space-y-3">
          <div>
            <p className="font-serif text-2xl text-ink">{author.name}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.24em] text-moss">
              {author.role}
            </p>
          </div>
          <p className="text-sm leading-7 text-muted">{author.shortBio}</p>
          <span className="inline-flex text-xs font-semibold uppercase tracking-[0.22em] text-pine group-hover:text-pine-deep">
            View full bio
          </span>
        </div>
      </div>
    </Link>
  );
}
