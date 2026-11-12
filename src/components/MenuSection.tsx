"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MENU_ITEMS,
  formatPrice,
  imageForMenuItem,
  type MenuCategory,
} from "@/data/menu";
import { ORDER_URL } from "@/lib/site";

const FILTERS: Array<{ label: string; value: MenuCategory | "SEMUA" }> = [
  { label: "Semua", value: "SEMUA" },
  { label: "Kopi", value: "KOPI" },
  { label: "Non Kopi", value: "NON KOPI" },
  { label: "JajanDisini", value: "JAJANDISINI" },
];

export default function MenuSection() {
  const [filter, setFilter] = useState<MenuCategory | "SEMUA">("SEMUA");
  const visible =
    filter === "SEMUA"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="menu" className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
      <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
        <span aria-hidden="true" className="h-px w-10 bg-kopi" />
        04 &middot; Menu
      </p>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display text-4xl font-light leading-[1.05] tracking-[-0.01em] sm:text-5xl">
          Pilih <em className="font-normal text-kopi">favoritmu.</em>
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
                  ? "-mb-px shrink-0 whitespace-nowrap border-b-2 border-kopi pb-3 text-sm font-bold text-black"
                  : "-mb-px shrink-0 whitespace-nowrap border-b-2 border-transparent pb-3 text-sm font-bold text-zinc-400 transition-colors hover:text-black"
              }
            >
              {option.label}
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
            <li
              key={item.name}
              style={{ animationDelay: `${Math.min(index, 7) * 50}ms` }}
              className="menu-card-enter group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
                <h3 className="font-display text-lg font-normal leading-snug">
                  {item.name}
                </h3>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                  {item.category}
                </p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="text-base font-bold tabular-nums">
                    {formatPrice(item.price)}
                  </span>
                  <a
                    href={ORDER_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Pesan ${item.name}`}
                    className="shrink-0 rounded-full bg-black px-4 py-2 text-xs font-bold text-white transition-all hover:opacity-80 active:scale-95"
                  >
                    Pesan
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="mt-8 text-sm text-zinc-500">
        Menampilkan {visible.length} dari {MENU_ITEMS.length} menu. Foto
        ilustrasi, bukan foto asli kedai. Bubuk dan biji kopi tersedia dalam
        kemasan 250g, 500g, dan 1000g.
      </p>
    </section>
  );
}
