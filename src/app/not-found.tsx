import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-[2rem] border border-border bg-card p-8 shadow-editorial sm:p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-moss">Not found</p>
          <h1 className="mt-4 font-serif text-4xl text-ink">That page does not exist.</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
            The route may be unpublished, removed, or not connected to live content yet.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-pine px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#f5efe4] hover:bg-pine-deep"
          >
            Return home
          </Link>
        </div>
      </Container>
    </section>
  );
}
