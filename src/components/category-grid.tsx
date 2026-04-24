import Link from "next/link";
import { categories } from "@/lib/content";

export function CategoryGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/categories/${category.slug}`}
          className={`group rounded-[1.75rem] border border-border bg-gradient-to-br ${category.accent} p-[1px] shadow-editorial`}
        >
          <div className="h-full rounded-[1.7rem] bg-card/94 p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                {category.eyebrow}
              </p>
              <h3 className="mt-4 font-serif text-3xl text-ink">{category.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
