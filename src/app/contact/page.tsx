import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Field and Habitat for editorial inquiries, partnerships, and future contributor submissions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Field and Habitat",
          email: siteConfig.contactEmail,
        }}
      />
      <PageHero
        eyebrow="Contact"
        title={`Please reach out with a story idea,\npartnership inquiry, or if you would like to contribute.`}
        description=""
        titleClassName="text-2xl sm:text-3xl lg:text-[2.15rem]"
      />
      <section className="py-10 sm:py-12">
        <Container className="max-w-3xl">
          <div className="mb-4 rounded-[1.75rem] border border-border bg-card px-6 py-5 shadow-editorial">
            <p className="text-xs uppercase tracking-[0.3em] text-moss">Social</p>
            <div className="mt-3 space-y-2 text-sm leading-7 text-muted sm:text-base">
              <p>
                Instagram:{" "}
                <a
                  href="https://instagram.com/fieldandhabitat"
                  className="font-semibold text-pine hover:text-pine-deep"
                  target="_blank"
                  rel="noreferrer"
                >
                  @fieldandhabitat
                </a>
              </p>
              <p>
                TikTok:{" "}
                <a
                  href="https://tiktok.com/@fieldandhabitat"
                  className="font-semibold text-pine hover:text-pine-deep"
                  target="_blank"
                  rel="noreferrer"
                >
                  @fieldandhabitat
                </a>
              </p>
            </div>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
