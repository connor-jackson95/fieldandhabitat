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
          <form className="space-y-3 rounded-[2rem] border border-border bg-card p-7 shadow-editorial sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="space-y-1.5 text-sm text-muted">
                <span>Name</span>
                <input
                  type="text"
                  className="h-12 w-full rounded-2xl border border-border bg-canvas px-4 text-ink outline-none"
                />
              </label>
              <label className="space-y-1.5 text-sm text-muted">
                <span>Email</span>
                <input
                  type="email"
                  className="h-12 w-full rounded-2xl border border-border bg-canvas px-4 text-ink outline-none"
                />
              </label>
            </div>
            <label className="space-y-1.5 text-sm text-muted">
              <span>Subject</span>
              <input
                type="text"
                className="h-12 w-full rounded-2xl border border-border bg-canvas px-4 text-ink outline-none"
              />
            </label>
            <label className="space-y-1.5 text-sm text-muted">
              <span>Message</span>
              <textarea className="min-h-40 w-full rounded-[1.5rem] border border-border bg-canvas px-4 py-3 text-ink outline-none" />
            </label>
            <button
              type="submit"
              className="rounded-full bg-pine px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#f5efe4] hover:bg-pine-deep"
            >
              Send Inquiry
            </button>
          </form>
        </Container>
      </section>
    </>
  );
}
