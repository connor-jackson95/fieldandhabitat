import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
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
        description=""
        className="py-6 sm:py-8"
        shellClassName="px-5 py-5 sm:px-6 sm:py-6 lg:px-8"
        bodyClassName="gap-3"
        titleClassName="text-3xl sm:text-4xl lg:text-5xl"
      />
      <section className="py-4 sm:py-5">
        <Container className="space-y-2">
          <div className="flex justify-end">
            <Link
              href="/articles"
              className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-pine hover:bg-surface-strong"
            >
              View all articles
            </Link>
          </div>
          {categoryArticles.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {categoryArticles.map((article) => (
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
                  ) : null}
                  <h3 className="font-serif text-2xl text-ink">{article.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{article.excerpt}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-editorial">
              <p className="text-sm leading-7 text-muted">
                No published articles are in this category yet.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
