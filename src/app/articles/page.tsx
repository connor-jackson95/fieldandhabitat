import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { SearchPanel } from "@/components/search-panel";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Articles",
  description:
    "Search and browse Field and Habitat articles across hunting, fishing, finance, conservation, and cooking.",
  path: "/articles",
});

export default function ArticlesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Field and Habitat Articles",
          url: `${siteConfig.url}/articles`,
        }}
      />
      <section className="py-12 sm:py-14">
        <Container>
          <SearchPanel />
        </Container>
      </section>
    </>
  );
}
