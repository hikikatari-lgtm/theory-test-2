import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Music Theory Test II",
  description: "理論を学び、理解を深める — 下巻。解説付き3択音楽理論クイズ",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-radial-gold antialiased">{children}</body>
    </html>
  );
}
