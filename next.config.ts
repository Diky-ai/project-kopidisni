import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export statis untuk hosting cPanel (rumahweb): hasil `npm run build`
  // berupa folder `out/` berisi HTML/CSS/JS murni yang bisa diunggah
  // ke public_html. Tidak butuh server Node.js.
  output: "export",
  /* config options here */
  images: {
    // Optimasi gambar butuh server Node.js, jadi dimatikan untuk
    // export statis. URL Pexels sudah membawa parameter ukuran.
    unoptimized: true,
    // Foto ilustrasi dari Pexels (lisensi gratis). Nanti diganti
    // foto asli kedai begitu tersedia.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
