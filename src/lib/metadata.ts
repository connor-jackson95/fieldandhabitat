import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

interface BuildMetadataArgs {
  title: string;
  description: string;
  path: string;
}

export function buildMetadata({
  title,
  description,
  path,
}: BuildMetadataArgs): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} social card`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
