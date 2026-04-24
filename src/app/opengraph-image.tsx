import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #18291f 0%, #284233 40%, #6d7551 100%)",
          color: "#f5efe4",
          padding: 56,
          position: "relative",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 20,
            border: "1px solid rgba(245,239,228,0.18)",
            borderRadius: 28,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 50,
            bottom: 50,
            width: 420,
            height: 160,
            borderRadius: 999,
            background: "rgba(245,239,228,0.12)",
            filter: "blur(30px)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            Field and Habitat
          </div>
          <div style={{ fontSize: 74, lineHeight: 1.02, maxWidth: 760 }}>
            Outdoor Traditions for Modern Conservation
          </div>
          <div
            style={{
              maxWidth: 780,
              fontSize: 28,
              lineHeight: 1.4,
              fontFamily: "Arial, sans-serif",
              color: "#e6dfd2",
            }}
          >
            {siteConfig.description}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
