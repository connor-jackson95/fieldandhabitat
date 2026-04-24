interface SocialShareProps {
  title: string;
  url: string;
}

export function SocialShare({ title, url }: Readonly<SocialShareProps>) {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const links = [
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    },
    {
      label: "Email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
    },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted hover:border-moss hover:text-pine"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
