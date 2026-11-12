// Bentuk data halaman builder.
//
// Ide intinya: sebuah halaman bukan ditulis sebagai HTML manual,
// melainkan sebagai daftar "blok" dalam JSON. Renderer (lihat
// components/builder/Renderer.tsx) membaca daftar ini dan
// menampilkannya sebagai halaman web.
//
// Nanti, editor drag-and-drop akan mengubah daftar blok ini juga,
// jadi format ini adalah fondasi seluruh builder.

export type Block =
  | {
      id: string;
      type: "heading";
      text: string;
      size?: "small" | "medium" | "large";
    }
  | { id: string; type: "text"; text: string }
  | { id: string; type: "button"; text: string; href: string }
  | {
      id: string;
      type: "image";
      src: string;
      alt: string;
      width?: number;
      height?: number;
    };

export type PageData = {
  title: string;
  blocks: Block[];
};
