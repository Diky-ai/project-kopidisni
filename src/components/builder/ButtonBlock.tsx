import type { Block } from "@/lib/types";

type ButtonBlockProps = Extract<Block, { type: "button" }>;

export default function ButtonBlock({ text, href }: ButtonBlockProps) {
  return (
    <div>
      <a
        href={href}
        className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-300"
      >
        {text}
      </a>
    </div>
  );
}
