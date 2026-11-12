import type { Block } from "@/lib/types";
import ButtonBlock from "./ButtonBlock";
import HeadingBlock from "./HeadingBlock";
import ImageBlock from "./ImageBlock";
import TextBlock from "./TextBlock";

// Renderer: jantung builder.
// Menerima daftar blok (dari JSON), lalu untuk tiap blok memilih
// komponen yang cocok berdasarkan `type`-nya.
//
// Editor nanti tidak mengubah komponen ini. Editor hanya mengubah
// daftar bloknya, dan Renderer menampilkan hasil akhirnya.
export default function Renderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block) => {
        switch (block.type) {
          case "heading":
            return <HeadingBlock key={block.id} {...block} />;
          case "text":
            return <TextBlock key={block.id} {...block} />;
          case "button":
            return <ButtonBlock key={block.id} {...block} />;
          case "image":
            return <ImageBlock key={block.id} {...block} />;
          default: {
            // Kalau ada `type` baru yang belum ditangani, TypeScript
            // akan menolaknya di sini. Itu sengaja: setiap tipe blok
            // baru harus punya komponen tampilannya sendiri.
            const _exhaustive: never = block;
            return _exhaustive;
          }
        }
      })}
    </div>
  );
}
