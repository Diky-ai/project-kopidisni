import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

// Tipografi kopidisini: Fraunces untuk judul (serif editorial) dan
// Manrope untuk teks (sans modern). next/font/google mengunduh file
// font saat build/dev pertama (butuh internet sekali), lalu font
// disajikan lokal. Kalau unduhan gagal, CSS memakai font sistem
// cadangan yang didefinisikan di globals.css.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "kopidisini — Kopi enak, di sini.",
  description:
    "kopidisini, kedai kopi dan billiard di Aceh Utara. Kopi premium racikan barista, meja billiard yang nyaman, dan ruang komunitas. #SEMUABISADISINI.",
  appleWebApp: {
    capable: true,
    title: "kopidisini",
    statusBarStyle: "black-translucent",
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`h-full antialiased ${fraunces.variable} ${manrope.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
