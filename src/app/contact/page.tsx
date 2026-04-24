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
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
