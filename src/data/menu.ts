// Data menu kopidisini, disalin dari halaman pesanan
// https://kopdis.antarinmakan.com (dicek 2026-11-12).
// Ejaan nama menu dipertahankan apa adanya. Harga dalam rupiah.

export type MenuCategory = "KOPI" | "NON KOPI" | "JAJANDISINI";

export type MenuItem = {
  name: string;
  price: number;
  category: MenuCategory;
  signature?: boolean;
};

export const MENU_ITEMS: MenuItem[] = [
  // KOPI
  { name: "Es kopi Crunchy bisscoff", price: 27000, category: "KOPI" },
  { name: "Bubuk/Biji kopi 1000gram", price: 300000, category: "KOPI" },
  { name: "Bubuk/Biji kopi 500gram", price: 150000, category: "KOPI" },
  { name: "Bubuk/Biji kopi 250gram", price: 75000, category: "KOPI" },
  { name: "HOT LONG BLACK", price: 12000, category: "KOPI" },
  { name: "HOT SANGKLAT", price: 17000, category: "KOPI" },
  { name: "HOT KOPIDISINI", price: 22000, category: "KOPI" },
  { name: "ESPRESSO", price: 12000, category: "KOPI" },
  { name: "HOT AMERICANO", price: 12000, category: "KOPI" },
  { name: "ES AMERICANO", price: 15000, category: "KOPI" },
  { name: "SANGER ESPRESSO", price: 14000, category: "KOPI" },
  { name: "ES SANGER ESPRESSO", price: 17000, category: "KOPI" },
  { name: "ES SANGKLAT", price: 20000, category: "KOPI" },
  { name: "ES AVANGER", price: 22000, category: "KOPI", signature: true },
  { name: "ES KOPIDISINI", price: 24000, category: "KOPI", signature: true },
  { name: "ES KOPI LEMON MADU", price: 27000, category: "KOPI" },
  { name: "ES KOPI HIJAU", price: 27000, category: "KOPI" },
  { name: "ES KOPI MERAH", price: 24000, category: "KOPI" },
  { name: "ES KOPI UNGU", price: 24000, category: "KOPI" },
  { name: "ES KOPI COKLAT", price: 22000, category: "KOPI" },
  { name: "ES KOPIGUDANG", price: 24000, category: "KOPI", signature: true },
  // NON KOPI
  { name: "Hot Teh Hijau Susu", price: 12000, category: "NON KOPI" },
  {
    name: "Manis Lembut (Coklat Signature)",
    price: 20000,
    category: "NON KOPI",
    signature: true,
  },
  { name: "Teh Hijau Susu", price: 15000, category: "NON KOPI" },
  { name: "All Varian Squash", price: 10000, category: "NON KOPI" },
  { name: "HOT LEMON MADU", price: 17000, category: "NON KOPI" },
  { name: "HOT TARO", price: 13000, category: "NON KOPI" },
  { name: "ES TEH LEYA (LEMON YAKULT)", price: 15000, category: "NON KOPI" },
  { name: "HOT LEMON TEA ORI", price: 10000, category: "NON KOPI" },
  { name: "ES LEMON TEA ORI", price: 13000, category: "NON KOPI" },
  { name: "TEH PANAS", price: 5000, category: "NON KOPI" },
  { name: "ES TEH", price: 5000, category: "NON KOPI" },
  { name: "HOT COKLAT", price: 15000, category: "NON KOPI" },
  { name: "ES COKLAT", price: 17000, category: "NON KOPI" },
  { name: "HOT TEH HIJAU", price: 7000, category: "NON KOPI" },
  { name: "ES TEH HIJAU", price: 10000, category: "NON KOPI" },
  { name: "ES MATCHA", price: 20000, category: "NON KOPI" },
  { name: "HOT MATCHA", price: 18000, category: "NON KOPI" },
  { name: "ES SUSU", price: 14000, category: "NON KOPI" },
  { name: "HOT SUSU", price: 10000, category: "NON KOPI" },
  { name: "ES TARO", price: 15000, category: "NON KOPI" },
  { name: "ES REDVELVET", price: 17000, category: "NON KOPI" },
  { name: "ES LEMON MADU", price: 20000, category: "NON KOPI" },
  { name: "HOT LEMON", price: 7000, category: "NON KOPI" },
  { name: "ES LEMON", price: 10000, category: "NON KOPI" },
  // JAJANDISINI
  { name: "Toast Keju", price: 15000, category: "JAJANDISINI" },
];

export const SIGNATURE_ITEMS = MENU_ITEMS.filter((item) => item.signature);

export function formatPrice(price: number): string {
  return `Rp ${price.toLocaleString("id-ID")}`;
}

// Foto ilustrasi menu dari Pexels (bukan foto asli kedai). Setiap nama
// menu dipetakan ke satu gambar sesuai jenis minumannya; gambar yang
// mirip dipakai bergantian supaya variasinya lebih banyak.
export type MenuImageKey =
  | "beans"
  | "hotBlack"
  | "hotLatte"
  | "hotTea"
  | "hotChocolate"
  | "icedBlack"
  | "icedMilk"
  | "icedMilk2"
  | "matchaHot"
  | "matchaIced"
  | "mocha"
  | "lemonTea"
  | "lemonTea2"
  | "taro"
  | "squash"
  | "milk"
  | "strawberry"
  | "pinkMilk"
  | "toast";

export const MENU_IMAGES: Record<MenuImageKey, { src: string; alt: string }> =
  {
    beans: {
      src: "https://images.pexels.com/photos/30444143/pexels-photo-30444143/free-photo-of-close-up-of-roasted-coffee-beans-in-focus.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Biji kopi yang sudah di-roasting, dari dekat.",
    },
    hotBlack: {
      src: "https://images.pexels.com/photos/16045159/pexels-photo-16045159.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200",
      alt: "Secangkir kopi hitam di atas meja gelap.",
    },
    hotLatte: {
      src: "https://images.pexels.com/photos/6772461/pexels-photo-6772461.jpeg?auto=compress&cs=tinysrgb&w=800&loading=lazy",
      alt: "Secangkir latte dengan latte art berbentuk hati.",
    },
    hotTea: {
      src: "https://images.pexels.com/photos/31657739/pexels-photo-31657739.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Secangkir teh panas yang mengepul.",
    },
    hotChocolate: {
      src: "https://images.pexels.com/photos/19404174/pexels-photo-19404174.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200",
      alt: "Secangkir cokelat panas dalam suasana hangat.",
    },
    icedBlack: {
      src: "https://images.pexels.com/photos/28901490/pexels-photo-28901490/free-photo-of-refrescante-vaso-de-cafe-helado-en-el-mostrador-de-una-cafeteria.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Gelas tinggi berisi es kopi hitam.",
    },
    icedMilk: {
      src: "https://images.pexels.com/photos/16550825/pexels-photo-16550825/free-photo-of-glass-of-coffee-on-table.jpeg?auto=compress&cs=tinysrgb&w=600&loading=lazy",
      alt: "Segelas es kopi susu di atas meja kayu.",
    },
    icedMilk2: {
      src: "https://images.pexels.com/photos/32441304/pexels-photo-32441304.jpeg?auto=compress&cs=tinysrgb&w=600&loading=lazy",
      alt: "Segelas es kopi susu di atas meja kayu rustic.",
    },
    matchaHot: {
      src: "https://images.pexels.com/photos/911810/pexels-photo-911810.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      alt: "Matcha latte dilihat dari atas.",
    },
    matchaIced: {
      src: "https://images.pexels.com/photos/32599369/pexels-photo-32599369/free-photo-of-refreshing-iced-matcha-latte-in-elegant-glass.jpeg?auto=compress&cs=tinysrgb&w=600&loading=lazy",
      alt: "Gelas es matcha latte berwarna hijau cerah.",
    },
    mocha: {
      src: "https://images.pexels.com/photos/36925832/pexels-photo-36925832/free-photo-of-artistic-chocolate-mocha-on-rustic-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Minuman mocha cokelat berlapis di atas meja kayu.",
    },
    lemonTea: {
      src: "https://images.pexels.com/photos/40594/lemon-tea-cold-beverages-summer-offerings-40594.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Gelas teh lemon dingin dengan irisan lemon segar.",
    },
    lemonTea2: {
      src: "https://images.pexels.com/photos/4021975/pexels-photo-4021975.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Segelas limun dingin dengan es, irisan lemon, dan daun mint.",
    },
    taro: {
      src: "https://images.pexels.com/photos/5335709/pexels-photo-5335709.jpeg?auto=compress&cs=tinysrgb&w=750",
      alt: "Minuman ungu berlapis dengan taburan warna-warni.",
    },
    squash: {
      src: "https://images.pexels.com/photos/28525183/pexels-photo-28525183/free-photo-of-minuman-bersoda-rasa-buah-beri-yang-menyegarkan.jpeg?auto=compress&w=1260&h=750&dpr=1",
      alt: "Segelas minuman soda rasa buah beri yang menyegarkan.",
    },
    milk: {
      src: "https://images.pexels.com/photos/5946733/pexels-photo-5946733.jpeg?auto=compress&cs=tinysrgb&w=600&loading=lazy",
      alt: "Segelas susu putih di atas meja kayu.",
    },
    strawberry: {
      src: "https://images.pexels.com/photos/17648333/pexels-photo-17648333/free-photo-of-koktejl-piti-sklenice-sklo.jpeg?auto=compress&w=600",
      alt: "Minuman susu stroberi berwarna merah muda.",
    },
    pinkMilk: {
      src: "https://images.pexels.com/photos/31540614/pexels-photo-31540614.jpeg?auto=compress&w=600",
      alt: "Segelas susu dingin berwarna merah muda di atas meja kayu.",
    },
    toast: {
      src: "https://images.pexels.com/photos/5532494/pexels-photo-5532494.jpeg?auto=compress&cs=tinysrgb&w=600&loading=lazy",
      alt: "Roti panggang keju dengan keju meleleh.",
    },
  };

const MENU_IMAGE_BY_NAME: Record<string, MenuImageKey> = {
  "Es kopi Crunchy bisscoff": "icedMilk2",
  "Bubuk/Biji kopi 1000gram": "beans",
  "Bubuk/Biji kopi 500gram": "beans",
  "Bubuk/Biji kopi 250gram": "beans",
  "HOT LONG BLACK": "hotBlack",
  "HOT SANGKLAT": "hotLatte",
  "HOT KOPIDISINI": "hotLatte",
  ESPRESSO: "hotBlack",
  "HOT AMERICANO": "hotBlack",
  "ES AMERICANO": "icedBlack",
  "SANGER ESPRESSO": "hotLatte",
  "ES SANGER ESPRESSO": "icedMilk",
  "ES SANGKLAT": "icedMilk2",
  "ES AVANGER": "icedMilk",
  "ES KOPIDISINI": "icedMilk2",
  "ES KOPI LEMON MADU": "lemonTea",
  "ES KOPI HIJAU": "matchaIced",
  "ES KOPI MERAH": "strawberry",
  "ES KOPI UNGU": "taro",
  "ES KOPI COKLAT": "mocha",
  "ES KOPIGUDANG": "icedMilk",
  "Hot Teh Hijau Susu": "matchaHot",
  "Manis Lembut (Coklat Signature)": "hotChocolate",
  "Teh Hijau Susu": "matchaIced",
  "All Varian Squash": "squash",
  "HOT LEMON MADU": "lemonTea2",
  "HOT TARO": "taro",
  "ES TEH LEYA (LEMON YAKULT)": "lemonTea2",
  "HOT LEMON TEA ORI": "lemonTea",
  "ES LEMON TEA ORI": "lemonTea2",
  "TEH PANAS": "hotTea",
  "ES TEH": "lemonTea",
  "HOT COKLAT": "hotChocolate",
  "ES COKLAT": "mocha",
  "HOT TEH HIJAU": "matchaHot",
  "ES TEH HIJAU": "matchaIced",
  "ES MATCHA": "matchaIced",
  "HOT MATCHA": "matchaHot",
  "ES SUSU": "milk",
  "HOT SUSU": "milk",
  "ES TARO": "taro",
  "ES REDVELVET": "pinkMilk",
  "ES LEMON MADU": "lemonTea2",
  "HOT LEMON": "lemonTea",
  "ES LEMON": "lemonTea2",
  "Toast Keju": "toast",
};

export function imageForMenuItem(item: MenuItem): {
  src: string;
  alt: string;
} {
  const key = MENU_IMAGE_BY_NAME[item.name];
  if (key) return MENU_IMAGES[key];
  if (item.category === "JAJANDISINI") return MENU_IMAGES.toast;
  if (item.category === "NON KOPI") return MENU_IMAGES.matchaHot;
  return MENU_IMAGES.icedMilk;
}
