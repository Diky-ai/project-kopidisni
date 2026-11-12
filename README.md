# Kopidisni Builder — Starter

Starter web/app builder untuk pemula. Halaman dirender dari data JSON,
bukan dari HTML yang ditulis manual. Ini fondasi untuk editor
drag-and-drop di fase berikutnya.

Stack: Next.js 16 + React 19 + TypeScript + Tailwind CSS 4, dibuat
dengan `create-next-app`.

## Cara menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000 di browser.

Perintah lain:

```bash
npm run build   # build produksi, sekaligus cek TypeScript
npm run lint    # cek gaya dan masalah umum di kode
```

## Coba ubah halamannya

1. Buka `src/data/example-page.json`.
2. Ubah salah satu teksnya, lalu simpan.
3. Lihat halaman di browser ikut berubah (halaman ter-update otomatis).

Tidak perlu mengubah komponen apa pun untuk mengubah isi halaman.
Itulah pola dasar builder: data berubah, tampilan ikut berubah.

## Struktur folder

```
src/
  app/
    page.tsx            Halaman utama, menampilkan hasil render
    layout.tsx          Kerangka HTML dasar semua halaman
    globals.css         Gaya dasar Tailwind
  components/builder/
    Renderer.tsx        Membaca daftar blok, menampilkan komponennya
    HeadingBlock.tsx    Blok judul
    TextBlock.tsx       Blok teks
    ButtonBlock.tsx     Blok tombol
    ImageBlock.tsx      Blok gambar
  lib/
    types.ts            Bentuk data halaman dan blok (TypeScript)
  data/
    example-page.json   Contoh 1 landing page dalam JSON
```

Penjelasan tiap file ada di komentar di dalam kodenya, dalam
Bahasa Indonesia.

## Bentuk data halaman

```json
{
  "title": "Landing page contoh",
  "blocks": [
    { "id": "1", "type": "heading", "text": "Selamat datang", "size": "large" },
    { "id": "2", "type": "text", "text": "Ini halaman yang dibuat dari JSON." },
    { "id": "3", "type": "button", "text": "Mulai", "href": "#" }
  ]
}
```

Tipe blok yang didukung starter ini: `heading`, `text`, `button`,
dan `image`. Menambah tipe blok baru berarti menambah 1 jenis di
`src/lib/types.ts`, 1 komponen di `src/components/builder/`, dan
1 cabang di `Renderer.tsx`.

## Supabase (belum dipakai)

File `.env.example` berisi nama variabel Supabase yang akan dipakai
nanti. Salin menjadi `.env.local` dan isi nilai aslinya di sana
saat fase penyimpanan tiba. Jangan commit `.env.local` atau key
asli apa pun ke Git.

## Yang belum ada (sengaja)

Starter ini belum punya editor drag-and-drop, login, penyimpanan
ke database, dan tombol publish. Itu fase berikutnya, setelah pola
JSON dan renderer ini dipahami. Roadmap lengkapnya ada di
percakapan perencanaan project ini.
