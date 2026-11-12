import type { Block } from "@/lib/types";

type HeadingBlockProps = Extract<Block, { type: "heading" }>;

const sizeClass = {
  small: "text-2xl",
  medium: "text-4xl",
  large: "text-5xl",
} as const;

export default function HeadingBlock({ text, size = "medium" }: HeadingBlockProps) {
  return (
    <h1 className={`font-semibold leading-tight tracking-tight ${sizeClass[size]}`}>
      {text}
    </h1>
  );
}
