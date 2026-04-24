import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { PlaceholderCard } from "@/components/placeholder-card";
import { categories, getArticlesByCategory, getCategory } from "@/lib/content";
import { siteConfig } from "@/lib/site";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    return {};
  }

  return {
    title: category.name,
    description: category.description,
    alternates: {
      canonical: `/categories/${category.slug}`,
    },
    openGraph: {
      title: `${category.name} | ${siteConfig.name}`,
      description: category.description,
      url: `${siteConfig.url}/categories/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const categoryArticles = getArticlesByCategory(category.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${category.name} articles`,
          description: category.description,
          url: `${siteConfig.url}/categories/${category.slug}`,
        }}
      />
      <PageHero
        eyebrow={category.eyebrow}
        title={category.name}
        description={category.description}
      >
        <div className="rounded-[1.75rem] border border-border bg-surface p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-moss">Featured tags</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {category.featuredTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-card px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </PageHero>
      <section className="py-12 sm:py-14">
        <Container className="space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-moss">Archive state</p>
              <h2 className="mt-3 font-serif text-3xl text-ink">Category landing page</h2>
            </div>
            <Link
              href="/articles"
              className="rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-pine hover:bg-surface-strong"
            >
              View all articles
            </Link>
          </div>
          {categoryArticles.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {categoryArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="rounded-[1.75rem] border border-border bg-card p-6 shadow-editorial"
                >
                  <h3 className="font-serif text-2xl text-ink">{article.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{article.excerpt}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <PlaceholderCard
                label="Feature slot"
                detail="Ready for a lead story, strong visuals, and category-specific metadata."
              />
              <PlaceholderCard
                label="Service journalism slot"
                detail="Prepared for practical how-to coverage tied to tags and future search."
              />
              <PlaceholderCard
                label="Analysis slot"
                detail="Reserved for conservation, policy, seasonal, or field reporting."
              />
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
