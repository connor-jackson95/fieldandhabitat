import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { PlaceholderCard } from "@/components/placeholder-card";
import { SocialShare } from "@/components/social-share";
import { allTags, getArticle, getCategory } from "@/lib/content";
import { siteConfig } from "@/lib/site";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

function renderTextWithBold(text: string, boldPhrases: string[] = []) {
  if (boldPhrases.length === 0) {
    return text;
  }

  const escapedPhrases = boldPhrases.map((phrase) =>
    phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  const pattern = new RegExp(`(${escapedPhrases.join("|")})`, "g");

  return text.split(pattern).map((part, index) =>
    boldPhrases.includes(part) ? (
      <strong key={`${part}-${index}`} className="font-semibold text-ink">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {
      title: "Article Template",
      description:
        "Field and Habitat article template with author, tags, related stories, and social share support.",
      alternates: { canonical: `/articles/${slug}` },
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url: `${siteConfig.url}/articles/${article.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  const shareUrl = `${siteConfig.url}/articles/${slug}`;
  const publishedLabel = article
    ? new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
        timeStyle: "short",
      }).format(new Date(article.publishedAt))
    : null;

  if (slug !== "template" && !article) {
    notFound();
  }

  if (!article) {
    return (
      <section className="py-12 sm:py-14">
        <Container className="space-y-8">
          <div className="rounded-[2.25rem] border border-border bg-card p-7 shadow-editorial sm:p-10">
            <p className="text-xs uppercase tracking-[0.35em] text-moss">Article template</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">
              This route is ready for live article entries from your CMS.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              The production template already supports reading time, tags, author details,
              sharing controls, and related content. When there is no published record for a
              slug, it falls back to this neutral state instead of rendering fake editorial
              content.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-border bg-surface px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted">
                -- min read
              </span>
              {allTags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <article className="space-y-6 rounded-[2rem] border border-border bg-card p-7 shadow-editorial sm:p-10">
              <div className="h-72 rounded-[1.75rem] bg-gradient-to-br from-surface via-[#e7ddca] to-surface-strong texture-grid" />
              <div className="space-y-4 text-base leading-8 text-muted">
                <p>
                  Connect a CMS to map article title, dek, body blocks, media, authors, tags,
                  and publish dates into this template.
                </p>
                <p>
                  The page structure intentionally avoids invented story copy while preserving a
                  launch-ready editorial system for future content.
                </p>
              </div>
              <SocialShare title="Field and Habitat Article Template" url={shareUrl} />
            </article>

            <aside className="space-y-6">
              <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-editorial">
                <p className="text-xs uppercase tracking-[0.3em] text-moss">Author bio</p>
                <p className="mt-4 font-serif text-2xl text-ink">Author profile block</p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Add author headshots, biographies, role labels, and social links from your
                  CMS author model.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-editorial">
                <p className="text-xs uppercase tracking-[0.3em] text-moss">Related articles</p>
                <div className="mt-4 space-y-3">
                  <PlaceholderCard
                    label="Suggested story slot"
                    detail="Prepared for relevance-based article recommendations."
                    className="p-4 shadow-none"
                  />
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    );
  }

  const category = getCategory(article.category);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          author: {
            "@type": "Person",
            name: article.author.name,
          },
          datePublished: article.publishedAt,
          dateModified: article.updatedAt ?? article.publishedAt,
          articleSection: category?.name,
          keywords: article.tags.join(", "),
        }}
      />
      <section className="py-12 sm:py-14">
        <Container className="space-y-8">
          <div className="rounded-[2.25rem] border border-border bg-card p-7 shadow-editorial sm:p-10">
            <p className="text-xs uppercase tracking-[0.35em] text-moss">{category?.name}</p>
            <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-start">
              <h1 className="max-w-4xl flex-1 font-serif text-4xl leading-tight sm:text-5xl">
                {article.title}
              </h1>
              {article.heroImage ? (
                <div className="w-full overflow-hidden rounded-[1.5rem] border border-border bg-surface lg:max-w-[360px] lg:flex-none">
                  <Image
                    src={article.heroImage}
                    alt={article.title}
                    width={1600}
                    height={1000}
                    className={`w-full object-cover ${
                      article.slug === "bass-on-the-long-rod"
                        ? "h-[260px] object-top"
                        : "h-auto"
                    }`}
                    priority
                  />
                </div>
              ) : null}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {publishedLabel ? (
                <span className="rounded-full border border-border bg-surface px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted">
                  Published {publishedLabel}
                </span>
              ) : null}
              <span className="rounded-full border border-border bg-surface px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted">
                {article.readingTime} min read
              </span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <article className="rounded-[2rem] border border-border bg-card p-7 shadow-editorial sm:p-10">
            <div className="space-y-6 text-base leading-8 text-muted sm:text-lg">
              {article.body.map((block, index) => {
                if (block.type === "gallery") {
                  return (
                    <figure key={`gallery-${index}`} className="space-y-3">
                      <div className="mx-auto grid max-w-[720px] gap-4 sm:grid-cols-2">
                        {block.images.map((image) => (
                          <div
                            key={image.src}
                            className="overflow-hidden rounded-[1.5rem] border border-border bg-surface"
                          >
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={1600}
                              height={1000}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      {block.caption ? (
                        <figcaption className="text-sm italic leading-7 text-muted">
                          {block.caption}
                        </figcaption>
                      ) : null}
                    </figure>
                  );
                }

                if (block.type === "image") {
                  return (
                    <figure key={`image-${index}`} className="space-y-3">
                      <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-[1.5rem] border border-border bg-surface">
                        <Image
                          src={block.src}
                          alt={block.alt}
                          width={1600}
                          height={1000}
                          className="h-auto w-full"
                        />
                      </div>
                      {block.caption ? (
                        <figcaption className="text-sm italic leading-7 text-muted">
                          {block.caption}
                        </figcaption>
                      ) : null}
                    </figure>
                  );
                }

                if (block.type === "table") {
                  const [head, ...rows] = block.rows;

                  return (
                    <div
                      key={`table-${index}`}
                      className="overflow-x-auto rounded-[1.25rem] border border-border"
                    >
                      <table className="w-full min-w-[720px] border-collapse bg-surface text-left text-sm">
                        <thead>
                          <tr>
                            {head.map((cell) => (
                              <th
                                key={cell}
                                className="border-b border-border bg-surface-strong px-4 py-3 font-semibold text-ink"
                              >
                                {cell}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((row) => (
                            <tr key={row.join("-")}>
                              {row.map((cell) => (
                                <td key={cell} className="border-b border-border px-4 py-3">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }

                if (block.type === "list") {
                  return (
                    <ul
                      key={`list-${index}`}
                      className="list-disc space-y-2 pl-6 text-base leading-8 text-muted sm:text-lg"
                    >
                      {block.items.map((item) => (
                        <li key={item.text}>
                          {item.bold ? (
                            <strong className="font-semibold text-ink">{item.text}</strong>
                          ) : (
                            item.text
                          )}
                        </li>
                      ))}
                    </ul>
                  );
                }

                if (block.variant === "heading") {
                  return (
                    <h2
                      key={`${block.text}-${index}`}
                      className="pt-4 font-serif text-2xl leading-tight font-semibold text-ink sm:text-3xl"
                    >
                      {renderTextWithBold(block.text, block.boldPhrases)}
                    </h2>
                  );
                }

                return (
                  <p
                    key={`${block.text}-${index}`}
                    className={[
                      block.italic ? "italic" : "",
                      block.size === "small" ? "text-sm leading-7" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {renderTextWithBold(block.text, block.boldPhrases)}
                  </p>
                );
              })}
            </div>
            <div className="mt-10">
              <SocialShare title={article.title} url={shareUrl} />
            </div>
          </article>
          <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-editorial">
            <p className="text-xs uppercase tracking-[0.3em] text-moss">Author</p>
            <p className="mt-4 font-serif text-2xl text-ink">{article.author.name}</p>
            <p className="mt-1 text-sm uppercase tracking-[0.18em] text-muted">
              {article.author.role}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/articles"
              className="rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-pine hover:bg-surface-strong"
            >
              Back to articles
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
