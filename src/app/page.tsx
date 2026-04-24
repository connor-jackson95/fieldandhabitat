import Image from "next/image";
import Link from "next/link";
import { AboutPreview } from "@/components/about-preview";
import { CategoryGrid } from "@/components/category-grid";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { articles } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Outdoor Traditions for Modern Conservation",
  description:
    "Field and Habitat is a premium outdoor media brand built for credible hunting, fishing, gear, cooking, and conservation coverage.",
  path: "/",
});

const recentArticles = articles.slice(0, 3);
const featuredArticle = recentArticles[0];

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
        }}
      />
      <section className="border-b border-border/70 py-8 sm:py-10">
        <Container>
          <div className="rounded-[2rem] border border-border bg-card p-7 shadow-editorial sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-moss">Featured Story</p>
            <div className="mt-5 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="space-y-4">
                {featuredArticle ? (
                  <>
                    <h1 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
                      {featuredArticle.title}
                    </h1>
                    <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
                      {featuredArticle.excerpt}
                    </p>
                    <Link
                      href={`/articles/${featuredArticle.slug}`}
                      className="inline-flex rounded-full bg-pine px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#f5efe4] hover:bg-pine-deep"
                    >
                      Read Story
                    </Link>
                  </>
                ) : (
                  <>
                    <p className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
                      Reserved for a lead story with strong photography and editorial emphasis.
                    </p>
                    <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
                      Use this space for your biggest current piece, seasonal package, or
                      conservation-driven feature once publishing begins.
                    </p>
                  </>
                )}
              </div>
              {featuredArticle?.heroImage ? (
                <div className="overflow-hidden rounded-[1.75rem] border border-border bg-surface">
                  <Image
                    src={featuredArticle.heroImage}
                    alt={featuredArticle.title}
                    width={1600}
                    height={1000}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              ) : (
                <div className="h-56 rounded-[1.75rem] bg-gradient-to-br from-surface via-[#e7ddca] to-surface-strong texture-grid" />
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-14">
        <Container className="space-y-8">
          <SectionHeading
            eyebrow="Recent"
            title="Recent articles"
            description="The latest stories from Field and Habitat."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {recentArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="rounded-[1.75rem] border border-border bg-card p-6 shadow-editorial"
              >
                {article.heroImage ? (
                  <div className="mb-6 h-48 overflow-hidden rounded-[1.35rem] border border-border bg-surface">
                    <Image
                      src={article.heroImage}
                      alt={article.title}
                      width={1600}
                      height={1000}
                      className={`h-full w-full object-cover ${
                        article.slug === "bass-on-the-long-rod" ? "object-top" : ""
                      }`}
                    />
                  </div>
                ) : (
                  <div className="mb-6 h-48 rounded-[1.35rem] bg-gradient-to-br from-surface via-[#efe5d4] to-surface-strong texture-grid" />
                )}
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-moss">
                    {article.tags.join(" / ")}
                  </p>
                  <h3 className="font-serif text-2xl leading-tight text-ink">
                    {article.title}
                  </h3>
                  <p className="text-sm leading-7 text-muted">{article.excerpt}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    {article.readingTime} min read by {article.author.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border/70 bg-surface/70 py-12 sm:py-14">
        <Container className="space-y-8">
          <SectionHeading
            eyebrow="Browse"
            title="Five Core Pillars"
            description="Coverage is organized around hunting, fishing, gear, conservation, and cooking so readers can move quickly to the stories that matter most to them."
          />
          <CategoryGrid />
        </Container>
      </section>

      <section className="py-12 sm:py-14">
        <Container>
          <AboutPreview />
        </Container>
      </section>
    </>
  );
}
