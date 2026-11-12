# kopidisini — Website Kedai Kopi (Contoh/Dummy)

Website pengenalan kedai kopi kopidisini: tampil modern dan minimalis
dengan warna utama hitam putih. Tombol pesan mengarah ke halaman
pesanan (Olsera), jadi website ini tidak punya checkout sendiri.

Stack: Next.js 16 + React 19 + TypeScript + Tailwind CSS 4.

## Isi website

- Beranda: perkenalan singkat, alamat, cara pesan, dan Instagram.
- Signature: 4 menu signature (Es Kopidisini, Es Avanger, Es Kopigudang,
  Manis Lembut).
- Menu: 46 menu dari halaman pesanan, bisa difilter per kategori
  (Kopi, Non Kopi, JajanDisini). Nama dan harga disalin dari
  https://kopdis.antarinmakan.com (dicek 2026-11-12).
- Lokasi: alamat kedai dan 4 cara pesan (Take Away, Delivery,
  Dine In, Reservasi).

## Yang masih dummy

- Jam buka: belum tersedia, tertulis "akan diumumkan di sini".
- Foto kedai/produk dan logo: belum ada, diganti kotak placeholder.
- Nomor WhatsApp: belum tersedia.

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

- `src/app/page.tsx` — seluruh halaman beranda (header, hero, tentang,
  signature, lokasi, footer).
- `src/components/MenuSection.tsx` — daftar menu dengan filter kategori.
- `src/data/menu.ts` — data 46 menu dan harga.
- `src/lib/site.ts` — link pemesanan, Instagram, alamat, dan cara pesan.
- `src/components/builder/`, `src/lib/types.ts`, `src/data/example-page.json`
  — sisa starter web/app builder sebelumnya, tidak dipakai halaman ini.
  Riwayatnya tetap tersimpan di Git.

## Catatan

- Font memakai font sistem (Arial/Helvetica), tanpa unduhan font eksternal.
- Jangan commit file `.env.local` atau key asli apa pun. Repo ini publik.
