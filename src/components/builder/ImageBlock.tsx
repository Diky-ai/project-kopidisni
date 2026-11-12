import Image from "next/image";
import type { Block } from "@/lib/types";

type ImageBlockProps = Extract<Block, { type: "image" }>;

export default function ImageBlock({
  src,
  alt,
  width = 1200,
  height = 630,
}: ImageBlockProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="h-auto w-full rounded-xl"
    />
  );
}
