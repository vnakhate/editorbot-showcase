import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EditorBot — AI Video Editor for Convention Vendors",
  description:
    "21 minutes of raw booth footage → 9 platform-ready reels. AI-powered clip detection, smart crop, word-by-word captions, and overlays.",
  openGraph: {
    title: "EditorBot — 21 Min In, 9 Reels Out",
    description: "AI video editor that turns convention footage into TikTok-ready reels.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Fragment+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
