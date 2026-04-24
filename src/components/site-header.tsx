import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";

const links = [
  { href: "/articles", label: "Articles" },
  { href: "/categories", label: "Categories" },
  { href: "/writers", label: "Writers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-canvas/90 backdrop-blur">
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/images/homepage/Logo Only.png"
            alt="Field and Habitat logo"
            width={320}
            height={100}
            className="h-auto w-28 origin-left -translate-x-10 scale-[2] self-center"
          />
          <div className="ml-2 flex flex-col justify-center">
            <p className="font-serif text-lg font-semibold tracking-[0.08em] text-ink uppercase">
              Field and Habitat
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-[0.18em] text-muted hover:text-pine"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
