import type { Metadata } from "next";
import "./globals.css";

// Sengaja tidak memakai next/font/google di starter ini, supaya
// build tidak bergantung pada unduhan font dari internet.
// Font yang dipakai adalah font sistem (lihat globals.css).


export const metadata: Metadata = {
  title: "kopidisini — Kopi enak, di sini.",
  description:
    "kopidisini, kedai kopi di Aceh Utara. Lihat menu kopi, non kopi, dan JajanDisini, lalu pesan lewat halaman pesanan kami.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
