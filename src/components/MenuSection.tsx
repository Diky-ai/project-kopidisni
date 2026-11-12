"use client";

import { useState } from "react";
import { MENU_ITEMS, formatPrice, type MenuCategory } from "@/data/menu";
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

      <ul className="mt-4 grid gap-x-12 lg:grid-cols-2">
        {visible.map((item) => (
          <li
            key={item.name}
            className="-mx-2 flex flex-col gap-3 border-b border-zinc-100 px-2 py-5 transition-colors hover:bg-zinc-50 sm:flex-row sm:items-baseline sm:gap-4"
          >
            <div className="min-w-0">
              <h3 className="font-display text-xl font-normal leading-snug">
                {item.name}
              </h3>
              <p className="mt-1 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                {item.category}
                {item.signature ? (
                  <span className="rounded-full bg-kopi px-2 py-0.5 normal-case tracking-normal text-white">
                    Signature
                  </span>
                ) : null}
              </p>
            </div>
            <span
              aria-hidden="true"
              className="mx-1 hidden min-w-6 flex-1 border-b border-dotted border-zinc-300 sm:block"
            />
            <div className="flex items-center gap-4">
              <span className="shrink-0 text-base font-bold tabular-nums">
                {formatPrice(item.price)}
              </span>
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer"
                aria-label={`Pesan ${item.name}`}
                className="shrink-0 py-1 text-sm font-bold underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-kopi"
              >
                Pesan
              </a>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-sm text-zinc-500">
        Menampilkan {visible.length} dari {MENU_ITEMS.length} menu. Bubuk dan
        biji kopi tersedia dalam kemasan 250g, 500g, dan 1000g.
      </p>
    </section>
  );
}
