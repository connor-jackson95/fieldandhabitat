import Link from "next/link";

export function AboutPreview() {
  return (
    <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
      <div className="rounded-[2rem] border border-border bg-card p-7 shadow-editorial">
        <p className="text-xs uppercase tracking-[0.3em] text-moss">About the Brand</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-ink">
          Outdoor Traditions for Modern Conservation
        </h2>
      </div>
      <div className="space-y-4">
        <p className="text-base leading-8 text-muted sm:text-lg">
          Field and Habitat is dedicated to bringing news and stories to all who
          support the traditions of the outdoors and the conservation for the future.
        </p>
        <Link
          href="/about"
          className="inline-flex rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-pine hover:bg-surface-strong"
        >
          Read About Field and Habitat
        </Link>
      </div>
    </section>
  );
}
