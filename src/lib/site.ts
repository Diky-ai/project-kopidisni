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
  galleryWide: {
    src: "https://images.pexels.com/photos/17502245/pexels-photo-17502245/free-photo-of-table-and-chairs-in-restaurant.jpeg?auto=compress&w=800",
    alt: "Interior kedai kopi modern yang disinari matahari.",
  },
  galleryInterior: {
    src: "https://images.pexels.com/photos/11689773/pexels-photo-11689773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    alt: "Interior kafe modern dengan meja kayu dan kursi nyaman.",
  },
  galleryPour: {
    src: "https://images.pexels.com/photos/1924951/pexels-photo-1924951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Barista menuang susu dari pitcher ke dalam mug untuk latte art.",
  },
  galleryFriends: {
    src: "https://images.pexels.com/photos/36729520/pexels-photo-36729520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Empat teman bersulang dengan mug di meja kayu sebuah kafe.",
  },
};

// Foto cup asli kopidisini (file JPG di public/, ditambahkan lewat git
// oleh pemilik repo; tidak bisa di-push lewat snapshot karena biner).
// Setiap foto punya foto ilustrasi Pexels sebagai cadangan kalau
// filenya belum ada.
export const CUP_ICE_SRC = "/cup-ice.jpg";
export const CUP_HOT_SRC = "/cup-hot.jpg";
export const CUP_ICE_ALT = "Cup es kopi kopidisini dengan logo pin.";
export const CUP_HOT_ALT = "Cup kopi panas kopidisini dengan logo pin.";
export const CUP_HOT_FALLBACK = {
  src: "https://images.pexels.com/photos/6772461/pexels-photo-6772461.jpeg?auto=compress&cs=tinysrgb&w=800&loading=lazy",
  alt: "Secangkir latte dengan latte art berbentuk hati.",
};

// Tautan Google Maps untuk alamat kedai (pencarian berdasarkan alamat).
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=kopidisini%2C%20Jl.%20kiara%20payung%20no.%20A1%2C%20komp.%20AAF%2C%20Aceh%20Utara";

// Video proses pembuatan kopi dari Pexels (lisensi gratis, sudah
// diverifikasi 2026-11-13: file 720p, poster foto 1200px). Video
// diputar tanpa suara dan berulang; poster dipakai sebagai gambar
// diam untuk prefers-reduced-motion dan sebelum video dimuat.
// Ganti dengan video asli kedai begitu tersedia.
export const PROCESS_VIDEOS = [
  {
    step: "01",
    title: "Roasting",
    description:
      "Biji kopi pilihan di-roasting untuk mengeluarkan karakter rasanya. Kami juga melayani jasa roasting biji kopi.",
    src: "https://videos.pexels.com/video-files/13882353/13882353-hd_1280_720_25fps.mp4",
    poster:
      "https://images.pexels.com/photos/4940744/pexels-photo-4940744.jpeg?auto=compress&cs=tinysrgb&w=1200",
    posterAlt: "Biji kopi yang sedang di-roasting di dalam mesin roasting.",
  },
  {
    step: "02",
    title: "Grinding",
    description:
      "Biji yang sudah di-roasting digiling sesuai cara seduh yang dipakai, supaya ekstraksinya seimbang.",
    src: "https://videos.pexels.com/video-files/2849942/2849942-hd_1280_720_24fps.mp4",
    poster:
      "https://images.pexels.com/photos/13272708/pexels-photo-13272708.jpeg?auto=compress&cs=tinysrgb&w=1200",
    posterAlt: "Mesin grinder kopi yang terisi biji kopi yang sudah di-roasting.",
  },
  {
    step: "03",
    title: "Ekstraksi",
    description:
      "Barista mengekstraksi kopi dengan mesin espresso, cangkir demi cangkir, saat dipesan.",
    src: "https://videos.pexels.com/video-files/7487671/7487671-hd_1280_720_24fps.mp4",
    poster:
      "https://images.pexels.com/photos/5192028/pexels-photo-5192028.jpeg?auto=compress&cs=tinysrgb&w=1200",
    posterAlt: "Espresso yang sedang dituang dari mesin ke dalam gelas.",
  },
];
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
