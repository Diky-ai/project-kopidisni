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
- Suasana: galeri foto suasana kafe (ilustrasi Pexels) dengan animasi
  zoom perlahan.
- Kategori menu: kartu bergambar Kopi, Non Kopi, dan JajanDisini.
- Menu: 46 menu dari halaman pesanan, bisa difilter per kategori
  (Kopi, Non Kopi, JajanDisini). Nama dan harga disalin dari
  https://kopdis.antarinmakan.com (dicek 2026-11-12).
- Lokasi: alamat kedai dan 4 cara pesan (Take Away, Delivery,
  Dine In, Reservasi).
- Di HP: ada navigasi bawah (Beranda, Tentang, Menu, Lokasi, Pesan)
  ala aplikasi.

## Deploy ke hosting cPanel (rumahweb)

Situs ini memakai export statis (`output: "export"` di
`next.config.ts`), jadi tidak butuh server Node.js di hosting.

```bash
npm run build   # menghasilkan folder `out/` berisi HTML/CSS/JS murni
```

Unggah **isi** folder `out/` (bukan foldernya) ke `public_html` lewat
File Manager cPanel atau FTP. Untuk staging yang belum dipublish,
unggah ke subdomain atau subfolder tersendiri, misalnya
`staging.namadomain.com` atau `public_html/staging/`.

Sebelum build, letakkan file logo dan ikon PWA di `public/` supaya
ikut tersalin ke `out/`: `logo.png`, `logo-mark.png`,
`icon-192x192.png`, `icon-512x512.png`, `icon-maskable-512x512.png`,
dan `apple-touch-icon.png`.

Catatan: optimasi gambar `next/image` dimatikan (`unoptimized: true`)
karena butuh server Node.js. URL foto Pexels sudah membawa parameter
ukuran, jadi foto tetap dimuat dalam ukuran yang sesuai.

Situs ini disiapkan sebagai Progressive Web App: `src/app/manifest.ts`
menyediakan manifest (nama, warna tema hitam, tampilan standalone) dan
`src/app/icon.svg` menjadi ikon cadangan. Ikon PNG dan file logo resmi
perlu diletakkan di `public/` lewat git (push snapshot tidak menerima
file biner):

- `logo.png` (logo lengkap) dan `logo-mark.png` (tanda pin saja, untuk
  header) — dibuat dari logo resmi kopidisini.
- `icon-192x192.png`, `icon-512x512.png`, `icon-maskable-512x512.png`
- `apple-touch-icon.png` (180x180, untuk iOS)

Supaya prompt instalasi muncul di Android/iOS, keempat ikon PNG harus
ada. Kalau file logonya belum ada, header dan footer otomatis
menampilkan teks sebagai pengganti. Dukungan offline (service worker)
belum ditambahkan.

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
- `src/components/MenuSection.tsx` — daftar menu berupa kartu bergambar
  dengan filter kategori.
- `src/components/BottomNav.tsx` — navigasi bawah khusus HP.
- `src/components/LogoImage.tsx` — logo resmi dengan fallback teks.
- `src/components/Reveal.tsx` — animasi muncul saat di-scroll.
- `src/data/menu.ts` — data 46 menu dan harga, plus pemetaan gambar
  ilustrasi tiap menu.
- `src/lib/site.ts` — link pemesanan, Instagram, alamat, cara pesan,
  dan daftar gambar ilustrasi.
- `src/components/builder/`, `src/lib/types.ts`, `src/data/example-page.json`
  — sisa starter web/app builder sebelumnya, tidak dipakai halaman ini.
  Riwayatnya tetap tersimpan di Git.

## Catatan

- Tipografi: hanya 2 font web, Fraunces (judul, serif) dan Manrope
  (teks, sans), lewat `next/font/google` — sesuai batas maksimal 3 font.
  File font diunduh sekali saat `npm run dev` / `npm run build` pertama
  (butuh internet), lalu disajikan lokal. Kalau unduhan gagal, CSS
  memakai font sistem cadangan (Georgia/Arial).
- Animasi: reveal saat scroll, animasi masuk hero, animasi ganti filter
  menu, zoom perlahan pada foto suasana, elemen melayang di hero, garis
  bawah navigasi yang tumbuh, dan efek hover/aktif pada kartu dan tombol.
  Semua dimatikan otomatis untuk pengguna yang mengaktifkan
  prefers-reduced-motion.
- Jangan commit file `.env.local` atau key asli apa pun. Repo ini publik.
