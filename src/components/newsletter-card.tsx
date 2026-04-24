export function NewsletterCard() {
  return (
    <section className="rounded-[2rem] border border-border bg-pine px-6 py-8 text-[#f5efe4] shadow-editorial sm:px-8 sm:py-10">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d6cfbf]">Newsletter</p>
          <h2 className="balanced-text font-serif text-3xl leading-tight sm:text-4xl">
            Weekly field notes, conservation reporting, and practical outdoor coverage.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-[#e3dbce] sm:text-base">
            Connect your email provider or CMS form endpoint later. The section is already
            structured for a production signup flow.
          </p>
        </div>
        <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Email address"
            className="h-12 rounded-full border border-[#7f907a] bg-[#f5efe4] px-5 text-ink outline-none ring-0 placeholder:text-muted"
          />
          <button
            type="submit"
            className="h-12 rounded-full bg-sand px-6 text-sm font-semibold uppercase tracking-[0.2em] text-pine-deep hover:bg-[#d6c09c]"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}
