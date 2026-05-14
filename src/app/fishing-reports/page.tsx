import Link from "next/link";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/metadata";
import { fishingReportRegions, mayReportDate, mayReportLabel } from "@/lib/fishing-reports";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Fishing Reports",
  description:
    "Fishing reports from Field and Habitat with room for current conditions, seasonal notes, and regional updates.",
  path: "/fishing-reports",
});

export default function FishingReportsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Field and Habitat Fishing Reports",
          url: `${siteConfig.url}/fishing-reports`,
        }}
      />
      <PageHero eyebrow="On The Water" title="Fishing Reports" description="" />
      <section className="py-12 sm:py-14">
        <Container className="space-y-6">
          <div className="rounded-[2rem] border border-border bg-card p-7 shadow-editorial sm:p-8">
            <p className="font-serif text-2xl text-ink sm:text-3xl">{mayReportLabel}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.24em] text-moss">
              {mayReportDate}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {fishingReportRegions.map((region) => (
              <Link
                key={region.slug}
                href={`/fishing-reports/${region.slug}`}
                className="rounded-[1.75rem] border border-border bg-card px-6 py-5 shadow-editorial transition-colors hover:bg-surface"
              >
                <p className="font-serif text-2xl text-ink">{region.title}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
