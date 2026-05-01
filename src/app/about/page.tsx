import { WriterCard } from "@/components/writer-card";
import { authors } from "@/lib/content";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn the mission, editorial posture, and publishing direction behind Field and Habitat.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Field and Habitat",
          description: siteConfig.mission,
        }}
      />
      <PageHero
        eyebrow="Mission"
        title="Sharing stories to preserve traditions and habitat"
        description="Field and Habitat is built to cover hunting, fishing, finance, cooking, and conservation."
      />
      <section className="py-12 sm:py-14">
        <Container className="space-y-8">
          <div className="rounded-[2rem] border border-border bg-card p-7 shadow-editorial sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-moss">Meet the writers</p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl">
                  The editorial team behind Field and Habitat.
                </h2>
              </div>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {authors.map((author) => (
                <WriterCard key={author.slug} author={author} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
