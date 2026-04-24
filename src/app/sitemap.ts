import type { MetadataRoute } from "next";
import { articles, categories } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/articles",
    "/articles/template",
    "/categories",
    "/writers",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const categoryPages = categories.map((category) => ({
    url: `${siteConfig.url}/categories/${category.slug}`,
    lastModified: new Date(),
  }));

  const articlePages = articles.map((article) => ({
    url: `${siteConfig.url}/articles/${article.slug}`,
    lastModified: new Date(article.updatedAt ?? article.publishedAt),
  }));

  return [...staticPages, ...categoryPages, ...articlePages];
}
