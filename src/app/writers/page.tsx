import Image from "next/image";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { authors } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Writers",
  description:
    "Meet the writers of Field and Habitat with full biographies, names, and photo placements.",
  path: "/writers",
});

export default function WritersPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Field and Habitat Writers",
          url: `${siteConfig.url}/writers`,
        }}
      />
      <PageHero
        eyebrow="Editorial Team"
        title="Meet the writers"
        description="This page is ready for headshots, contributor names, and full biographies. Replace the neutral image areas with personal photos when they are available."
      />
      <section className="py-12 sm:py-14">
        <Container className="grid gap-6">
          {authors.map((author) => (
            <article
              key={author.slug}
              className="grid gap-6 rounded-[2rem] border border-border bg-card p-7 shadow-editorial md:grid-cols-[200px_1fr] md:items-start sm:p-8"
            >
              {author.imageSrc ? (
                <div className="overflow-hidden rounded-[1.75rem] border border-border bg-surface">
                  <Image
                    src={author.imageSrc}
                    alt={author.name}
                    width={600}
                    height={700}
                    className="h-52 w-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-52 w-full items-center justify-center rounded-[1.75rem] border border-border bg-gradient-to-br from-surface via-[#e7ddca] to-surface-strong">
                  <span className="px-4 text-center text-xs uppercase tracking-[0.24em] text-muted">
                    {author.imageLabel}
                  </span>
                </div>
              )}
              <div className="space-y-4">
                <div>
                  <h2 className="font-serif text-3xl text-ink">{author.name}</h2>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-moss">
                    {author.role}
                  </p>
                </div>
                <p className="text-base leading-8 text-muted sm:text-lg">{author.bio}</p>
              </div>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
