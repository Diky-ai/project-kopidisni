// Info kedai kopidisini. Alamat dan link pemesanan sudah terverifikasi
// dari halaman pesanan (2026-11-12). Jam buka dan nomor WhatsApp belum
// tersedia, jadi belum ditampilkan sebagai fakta di situs ini.

export const ORDER_URL = "https://kopdis.antarinmakan.com";
export const INSTAGRAM_URL = "https://www.instagram.com/kopidisini_official";
export const INSTAGRAM_HANDLE = "@kopidisini_official";
export const ADDRESS = "Jl. kiara payung no. A1, komp. AAF, Aceh Utara (Kab.)";

export const ORDER_MODES = [
  {
    name: "Take Away",
    description: "Pesan, lalu ambil sendiri di kedai.",
  },
  {
    name: "Delivery",
    description: "Pesan dan diantar ke alamatmu.",
  },
  {
    name: "Dine In",
    description: "Pesan dari meja dengan memindai QR di meja.",
  },
  {
    name: "Reservasi",
    description: "Amankan tempatmu sebelum datang.",
  },
];

// Foto ilustrasi dari Pexels (lisensi gratis, sudah diverifikasi
// 2026-11-13). Foto ditampilkan berwarna; hitam putih tetap dominan
// lewat latar, teks, dan tombol. Ganti dengan foto asli kedai
// begitu tersedia.
export const IMAGES = {
  beans: {
    src: "https://images.pexels.com/photos/30444143/pexels-photo-30444143/free-photo-of-close-up-of-roasted-coffee-beans-in-focus.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Biji kopi yang sudah di-roasting, tampak dari dekat.",
  },
  barista: {
    src: "https://images.pexels.com/photos/30226644/pexels-photo-30226644.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Barista sedang meracik kopi dengan mesin espresso.",
  },
  billiard: {
    src: "https://images.pexels.com/photos/8724476/pexels-photo-8724476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Bola billiard di atas meja billiard beserta stiknya.",
  },
  icedCoffee: {
    src: "https://images.pexels.com/photos/16550825/pexels-photo-16550825/free-photo-of-glass-of-coffee-on-table.jpeg?auto=compress&cs=tinysrgb&w=600&loading=lazy",
    alt: "Segelas es kopi di atas meja kayu.",
  },
  matcha: {
    src: "https://images.pexels.com/photos/911810/pexels-photo-911810.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Matcha latte dilihat dari atas.",
  },
  pastry: {
    src: "https://images.pexels.com/photos/5594474/pexels-photo-5594474.jpeg?auto=compress&cs=tinysrgb&w=600&loading=lazy",
    alt: "Croissant di atas piring saji bersama secangkir kopi.",
  },
};

// Nilai-nilai kopidisini dari dokumen Core Identity (2026-11-13).
// Kata-katanya diolah ulang agar ringkas untuk website.
export const VALUES = [
  {
    name: "Integritas",
    description: "Jujur dan transparan, dari bahan baku sampai pelayanan.",
  },
  {
    name: "Kualitas",
    description: "Setiap cangkir dan setiap meja memegang standar tinggi.",
  },
  {
    name: "Kebersamaan",
    description: "Ruang untuk bertemu, berinteraksi, dan membangun relasi.",
  },
  {
    name: "Inovasi",
    description: "Racikan kreatif dan konsep baru yang terus dicari.",
  },
  {
    name: "Keberlanjutan",
    description: "Peduli lingkungan dan komunitas di sekitar kami.",
  },
];
