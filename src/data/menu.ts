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
