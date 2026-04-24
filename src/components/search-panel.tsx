"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { allTags, articles, categories } from "@/lib/content";

export function SearchPanel() {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const results = useMemo(() => {
    return articles.filter((article) => {
      const matchesQuery =
        query.length === 0 ||
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase());
      const matchesTag =
        selectedTag === "All" || article.tags.some((tag) => tag === selectedTag);
      return matchesQuery && matchesTag;
    });
  }, [query, selectedTag]);

  return (
    <section className="space-y-6 rounded-[2rem] border border-border bg-card p-6 shadow-editorial sm:p-8">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h2 className="font-serif text-3xl text-ink">Search articles</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedTag("All")}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] ${
              selectedTag === "All"
                ? "border-pine bg-pine text-[#f5efe4]"
                : "border-border bg-surface text-muted"
            }`}
          >
            All
          </button>
          {allTags.slice(0, 6).map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] ${
                selectedTag === tag
                  ? "border-pine bg-pine text-[#f5efe4]"
                  : "border-border bg-surface text-muted"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <label className="block">
        <span className="sr-only">Search articles</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by headline or excerpt"
          className="h-13 w-full rounded-full border border-border bg-canvas px-5 text-sm text-ink outline-none placeholder:text-muted"
        />
      </label>
      {results.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {results.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="rounded-[1.5rem] border border-border bg-surface p-5"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-moss">
                {categories.find((category) => category.slug === article.category)?.name}
              </p>
              <h3 className="mt-3 font-serif text-2xl">{article.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-[1.5rem] border border-dashed border-border bg-surface p-8">
          <p className="font-serif text-2xl text-ink">No published articles yet.</p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            This search experience is ready for live content. Once your CMS is connected,
            article titles, tags, excerpts, and taxonomies will be queryable here.
          </p>
        </div>
      )}
    </section>
  );
}
