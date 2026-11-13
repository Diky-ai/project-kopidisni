"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  MENU_ITEMS,
  formatPrice,
  imageForMenuItem,
  type MenuCategory,
} from "@/data/menu";
import { ORDER_URL } from "@/lib/site";

const FILTERS: Array<{ label: string; value: MenuCategory | "SEMUA" }> = [
  { label: "All", value: "SEMUA" },
  { label: "Coffee", value: "KOPI" },
  { label: "Non-Coffee", value: "NON KOPI" },
  { label: "JajanDisini", value: "JAJANDISINI" },
];

// Label kategori yang tampil di kartu (data mentahnya tetap
// memakai istilah Indonesia dari halaman pesanan).
const CATEGORY_LABELS: Record<MenuCategory, string> = {
  KOPI: "Coffee",
  "NON KOPI": "Non-Coffee",
  JAJANDISINI: "JajanDisini",
};

export default function MenuSection() {
  const [filter, setFilter] = useState<MenuCategory | "SEMUA">("SEMUA");
  const reduceMotion = useReducedMotion();
  const visible =
    filter === "SEMUA"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="menu" className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
      <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
        <span aria-hidden="true" className="h-px w-10 bg-kopi" />
        06 &middot; Our Menu
      </p>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-4xl">
          Pick Your <span className="text-kopi">Favorite.</span>
        </h2>
        <p className="max-w-sm text-sm leading-relaxed text-zinc-600">
          Harga dari halaman pesanan kami. Klik Pesan untuk lanjut memesan
          lewat halaman pesanan.
        </p>
      </div>

      <div
        className="mt-12 flex flex-nowrap gap-x-8 overflow-x-auto border-b border-zinc-200"
        role="tablist"
        aria-label="Filter menu"
      >
        {FILTERS.map((option) => {
          const active = filter === option.value;
          return (
            <button
              key={option.value}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(option.value)}
              className={
                active
                  ? "relative -mb-px shrink-0 whitespace-nowrap pb-3 text-sm font-bold text-black"
                  : "relative -mb-px shrink-0 whitespace-nowrap pb-3 text-sm font-bold text-zinc-400 transition-colors hover:text-black"
              }
            >
              {option.label}
              {active && !reduceMotion ? (
                <motion.span
                  layoutId="menu-tab-underline"
                  transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  className="absolute inset-x-0 -bottom-px h-0.5 bg-kopi"
                />
              ) : null}
              {active && reduceMotion ? (
                <span className="absolute inset-x-0 -bottom-px h-0.5 bg-kopi" />
              ) : null}
            </button>
          );
        })}
      </div>

      <ul
        key={filter}
        className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4"
      >
        {visible.map((item, index) => {
          const image = imageForMenuItem(item);
          return (
            <motion.li
              key={item.name}
              initial={
                reduceMotion ? false : { opacity: 0, y: 16, scale: 0.92 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: Math.min(index, 7) * 0.05,
                ease: [0.34, 1.4, 0.64, 1],
              }}
              className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-[box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={`${item.name} (ilustrasi)`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.signature ? (
                  <span className="absolute left-3 top-3 rounded-full bg-kopi px-2.5 py-1 text-[11px] font-bold text-white shadow-sm">
                    Signature
                  </span>
                ) : null}
              </div>
              <div className="p-4">
                <h3 className="font-display text-base font-bold leading-snug sm:text-lg">
                  {item.name}
                </h3>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                  {CATEGORY_LABELS[item.category]}
                </p>
                <p className="mt-2 whitespace-nowrap text-sm font-bold tabular-nums sm:text-base">
                  {formatPrice(item.price)}
                </p>
                <a
                  href={ORDER_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Pesan ${item.name}`}
                  className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-black px-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all hover:opacity-80 active:scale-95"
                >
                  Pesan
                </a>
              </div>
            </motion.li>
          );
        })}
      </ul>

      <p aria-live="polite" className="mt-8 text-sm text-zinc-500">
        Menampilkan {visible.length} dari {MENU_ITEMS.length} menu. Foto
        ilustrasi, bukan foto asli kedai. Bubuk dan biji kopi tersedia dalam
        kemasan 250g, 500g, dan 1000g.
      </p>
    </section>
  );
}
