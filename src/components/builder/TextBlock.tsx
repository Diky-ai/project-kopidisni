import type { Block } from "@/lib/types";

type TextBlockProps = Extract<Block, { type: "text" }>;

export default function TextBlock({ text }: TextBlockProps) {
  return <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">{text}</p>;
}
