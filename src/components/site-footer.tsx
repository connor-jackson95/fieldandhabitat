import Link from "next/link";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Articles" },
  { href: "/categories", label: "Categories" },
  { href: "/writers", label: "Writers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-pine-deep text-[#f1ebdf]">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <p className="font-serif text-2xl">Field and Habitat</p>
          <p className="max-w-md text-sm leading-7 text-[#d9d0c1]">
            Credible outdoor journalism for people who hunt, fish, cook, restore habitat,
            and care about conservation.
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c4baa9]">
            Navigation
          </p>
          <div className="space-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-[#f1ebdf] hover:text-sand"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c4baa9]">
            Social
          </p>
          <div className="space-y-3">
            {siteConfig.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-[#f1ebdf] hover:text-sand"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
