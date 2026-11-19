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

// Jumlah menu yang tampil sebelum tombol "Lihat Selengkapnya"
// ditekan — supaya section menu tidak memakan terlalu banyak ruang.
const INITIAL_COUNT = 4;

export default function MenuSection() {
  const [filter, setFilter] = useState<MenuCategory | "SEMUA">("SEMUA");
  const [expanded, setExpanded] = useState(false);
  const reduceMotion = useReducedMotion();
  const visible =
    filter === "SEMUA"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === filter);
  const shown = expanded ? visible : visible.slice(0, INITIAL_COUNT);

  return (
    <section id="menu" className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
      <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
        <span aria-hidden="true" className="h-px w-10 bg-black" />
        07 &middot; Our Menu
      </p>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-head text-3xl font-medium leading-[1.1] tracking-[-0.02em] sm:text-4xl">
          Pick Your Favorite.
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
              onClick={() => {
                setFilter(option.value);
                setExpanded(false);
              }}
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
                  className="absolute inset-x-0 -bottom-px h-0.5 bg-black"
                />
              ) : null}
              {active && reduceMotion ? (
                <span className="absolute inset-x-0 -bottom-px h-0.5 bg-black" />
              ) : null}
            </button>
          );
        })}
      </div>

      <ul
        key={filter}
        className="mt-10 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 xl:grid-cols-4"
      >
        {shown.map((item, index) => {
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
              className="group overflow-hidden rounded-xl border border-zinc-200 bg-white transition-[box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[2/1] overflow-hidden sm:aspect-[16/9]">
                <Image
                  src={image.src}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.signature ? (
                  <span className="absolute left-1.5 top-1.5 rounded-full bg-black px-1.5 py-0.5 text-[8px] font-bold text-white shadow-sm sm:text-[9px]">
                    Signature
                  </span>
                ) : null}
              </div>
              <div className="p-2 sm:p-2.5">
                <h3 className="font-display text-xs font-bold leading-snug sm:text-sm">
                  {item.name}
                </h3>
                <p className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-400 sm:text-[9px]">
                  {CATEGORY_LABELS[item.category]}
                </p>
                <p className="mt-1 whitespace-nowrap text-[11px] font-bold tabular-nums sm:mt-1.5 sm:text-[13px]">
                  {formatPrice(item.price)}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ul>

      {visible.length > INITIAL_COUNT ? (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            className="inline-flex min-h-12 items-center rounded-full border-2 border-black bg-black px-7 py-3 text-base font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-black active:scale-95"
          >
            {expanded ? "Lihat Lebih Sedikit" : "Lihat Selengkapnya"}
          </button>
        </div>
      ) : null}

      <p aria-live="polite" className="mt-8 text-sm text-zinc-500">
        Menampilkan {shown.length} dari {MENU_ITEMS.length} menu. Bubuk
        dan biji kopi tersedia dalam kemasan 250g, 500g, dan 1000g.
      </p>
    </section>
  );
}
