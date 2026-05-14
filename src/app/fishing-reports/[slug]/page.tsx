import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  fishingReportRegions,
  getFishingReportRegion,
  hasItems,
  mayReportDate,
  mayReportLabel,
} from "@/lib/fishing-reports";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return fishingReportRegions.map((region) => ({ slug: region.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const region = getFishingReportRegion(slug);

    if (!region) {
      return buildMetadata({
        title: "Fishing Reports",
        description: "Fishing report region not found.",
        path: "/fishing-reports",
      });
    }

    return buildMetadata({
      title: `${region.title} Fishing Report`,
      description: `${mayReportLabel} for ${region.title} from Field and Habitat.`,
      path: `/fishing-reports/${region.slug}`,
    });
  });
}

export default async function FishingReportRegionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const region = getFishingReportRegion(slug);

  if (!region) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${region.title} Fishing Report`,
          url: `${siteConfig.url}/fishing-reports/${region.slug}`,
        }}
      />
      <PageHero
        eyebrow={mayReportLabel}
        title={region.title}
        description={mayReportDate}
        className="py-8 sm:py-10"
      />
      <section className="py-12 sm:py-14">
        <Container className="space-y-4">
          {region.waters.map((water) => (
            <article
              key={water.name}
              className="rounded-[1.75rem] border border-border bg-card p-7 shadow-editorial sm:p-8"
            >
              <div className="space-y-4">
                <div>
                  <h2 className="font-serif text-3xl text-ink">{water.name}</h2>
                  <p className="mt-3 text-base leading-8 text-muted sm:text-lg">
                    {water.summary}
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {water.sections.map((section) => (
                    <div
                      key={`${water.name}-${section.title}`}
                      className="rounded-[1.5rem] border border-border bg-surface px-5 py-4"
                    >
                      <p className="text-xs uppercase tracking-[0.24em] text-moss">
                        {section.title}
                      </p>
                      {hasItems(section) ? (
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-muted sm:text-base">
                          {section.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                          {section.text}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
          <Link
            href="/fishing-reports"
            className="inline-flex rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-pine hover:bg-surface"
          >
            Back to Fishing Reports
          </Link>
        </Container>
      </section>
    </>
  );
}
