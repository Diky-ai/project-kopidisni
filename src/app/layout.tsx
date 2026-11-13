import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

// Tipografi kopidisini: Jost untuk judul dan teks — sans geometris
// (gaya Futura) sesuai referensi Dribbble Alowishus yang dipilih
// pemilik. Satu keluarga font untuk seluruh UI.
// next/font/google mengunduh file font saat build/dev pertama (butuh
// internet sekali), lalu font disajikan lokal. Kalau unduhan gagal,
// CSS memakai font sistem cadangan yang didefinisikan di globals.css.
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["400", "500", "600", "700", "800", "900"],
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
    <html lang="id" className={`h-full antialiased ${jost.variable}`}>
      <body className="min-h-full flex flex-col">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
