import type { MetadataRoute } from "next";

// Wajib untuk `output: "export"`: manifest harus dinyatakan statis.
export const dynamic = "force-static";

// Manifest PWA kopidisini. Ikon PNG (192, 512, maskable) dan
// apple-touch-icon dibuat terpisah dan perlu diletakkan di public/
// lewat git, karena push snapshot tidak menerima file biner.
// Ikon SVG di bawah adalah cadangan sampai PNG tersedia.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "kopidisini",
    short_name: "kopidisini",
    description:
      "Kedai kopi di Aceh Utara. Kopi premium racikan barista dan ruang komunitas yang nyaman. #SEMUABISADISINI",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
