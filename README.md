# kopidisini — Website Kedai Kopi (Contoh/Dummy)

Website pengenalan kedai kopi kopidisini: tampil modern dan minimalis
dengan warna utama hitam putih. Tombol pesan mengarah ke halaman
pesanan (Olsera), jadi website ini tidak punya checkout sendiri.

Stack: Next.js 16 + React 19 + TypeScript + Tailwind CSS 4.

## Isi website

- Beranda: perkenalan singkat, foto barista, statistik (46 menu, 2 in 1
  kopi & billiard, berdiri sejak 2021), dan 4 pilar (kopi premium,
  billiard, roasting biji kopi, komunitas), alamat, cara pesan, Instagram.
- Tentang: cerita dari kamar kecil 2021, nilai-nilai, dan kerja sama
  Universitas Malikussaleh.
- Signature: 4 menu signature (Es Kopidisini, Es Avanger, Es Kopigudang,
  Manis Lembut).
- Kategori menu: kartu bergambar Kopi, Non Kopi, dan JajanDisini.
- Menu: 46 menu dari halaman pesanan, bisa difilter per kategori
  (Kopi, Non Kopi, JajanDisini). Nama dan harga disalin dari
  https://kopdis.antarinmakan.com (dicek 2026-11-12).
- Lokasi: alamat kedai dan 4 cara pesan (Take Away, Delivery,
  Dine In, Reservasi).
- Di HP: ada navigasi bawah (Beranda, Tentang, Menu, Lokasi, Pesan)
  ala aplikasi.

## PWA

Situs ini disiapkan sebagai Progressive Web App: `src/app/manifest.ts`
menyediakan manifest (nama, warna tema hitam, tampilan standalone) dan
`src/app/icon.svg` menjadi ikon cadangan. Supaya prompt instalasi muncul
di Android/iOS, ikon PNG berikut perlu diletakkan di `public/` lewat git
(push snapshot tidak menerima file biner):

- `icon-192x192.png`, `icon-512x512.png`, `icon-maskable-512x512.png`
- `apple-touch-icon.png` (180x180, untuk iOS)

Dukungan offline (service worker) belum ditambahkan.

## Yang masih dummy

- Jam buka: belum tersedia, tertulis "akan diumumkan di sini".
- Foto kedai/produk dan logo: belum ada, dipakai foto ilustrasi dari
  Pexels (ditandai "Foto ilustrasi"). Ikon aplikasi masih huruf "k."
  sementara sampai logo asli tersedia.
- Nomor WhatsApp: belum tersedia.
- Detail billiard (jumlah meja, tarif, cara booking): belum tersedia.

Kirim jam buka, foto, dan logo kalau sudah ada, supaya bisa dipasang.

## Cara menjalankan

Butuh Node.js LTS dan Git terpasang di laptop.

```bash
git clone https://github.com/Diky-ai/project-kopidisni.git
cd project-kopidisni
npm install
npm run dev
```

Buka http://localhost:3000 di browser.

Perintah lain:

```bash
npm run build   # build produksi
npm run lint    # cek lint
```

## Struktur

- `src/app/page.tsx` — seluruh halaman beranda (header, hero, statistik,
  pilar, tentang, signature, kategori, lokasi, footer).
- `src/app/manifest.ts` — manifest PWA. `src/app/icon.svg` — ikon aplikasi.
- `src/components/MenuSection.tsx` — daftar menu dengan filter kategori.
- `src/components/BottomNav.tsx` — navigasi bawah khusus HP.
- `src/data/menu.ts` — data 46 menu dan harga.
- `src/lib/site.ts` — link pemesanan, Instagram, alamat, cara pesan,
  dan daftar gambar ilustrasi.
- `src/components/builder/`, `src/lib/types.ts`, `src/data/example-page.json`
  — sisa starter web/app builder sebelumnya, tidak dipakai halaman ini.
  Riwayatnya tetap tersimpan di Git.

## Catatan

- Tipografi: Fraunces (judul, serif) dan Manrope (teks, sans) lewat `next/font/google`. File font diunduh sekali saat `npm run dev` / `npm run build` pertama (butuh internet), lalu disajikan lokal. Kalau unduhan gagal, CSS memakai font sistem cadangan (Georgia/Arial).
- Jangan commit file `.env.local` atau key asli apa pun. Repo ini publik.
