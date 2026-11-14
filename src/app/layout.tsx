import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

// Tipografi kopidisini: satu keluarga font, Inter, untuk seluruh UI
// (permintaan pemilik 2026-11-14). Judul-judul besar memakai weight
// 500 (font-medium + utilitas font-head); teks, label, tombol, dan
// angka memakai weight yang sudah ada di kelasnya. next/font/google
// mengunduh file font saat build/dev pertama (butuh internet sekali),
// lalu font disajikan lokal. Kalau unduhan gagal, CSS memakai font
// sistem cadangan yang didefinisikan di globals.css.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "kopidisini — Kopi enak, di sini.",
  description:
    "kopidisini, kedai kopi di Aceh Utara. Kopi premium racikan barista dan ruang komunitas yang nyaman. #SEMUABISADISINI.",
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
    <html lang="id" className={`h-full antialiased ${inter.variable}`}>
      <body className="min-h-full flex flex-col">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
