import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kosher Connect — Your Jewish Community Hub";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1B3A5C 0%, #142d47 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Star icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 20,
            background: "rgba(197, 165, 90, 0.15)",
            marginBottom: 32,
          }}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="#C5A55A"
          >
            <path d="M12 2L9 9H2l5.5 4.5L5 21l7-5 7 5-2.5-7.5L22 9h-7z" />
          </svg>
        </div>

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 14,
          }}
        >
          <span
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-1px",
            }}
          >
            Kosher Connect
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 16,
            fontSize: 24,
            color: "rgba(197, 165, 90, 0.8)",
            letterSpacing: "3px",
            textTransform: "uppercase" as const,
            fontWeight: 300,
          }}
        >
          Your Jewish Community Hub
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(to right, #C5A55A, #8B2252, #1B3A5C)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
