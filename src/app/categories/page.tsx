import { CategoryGrid } from "@/components/category-grid";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Categories",
  description:
    "Browse Field and Habitat coverage across hunting, fishing, gear, conservation, and cooking.",
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Coverage"
        title="Explore the five pillars of Field and Habitat."
        description=""
      />
      <section className="py-10 sm:py-12">
        <Container>
          <CategoryGrid />
        </Container>
      </section>
    </>
  );
}
