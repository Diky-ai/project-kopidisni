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
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Menu
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-black sm:text-5xl">
            Pilih favoritmu.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-zinc-600">
          Harga dari halaman pesanan kami. Klik Pesan untuk lanjut memesan
          lewat halaman pesanan.
        </p>
      </div>

      <div
        className="mt-10 flex flex-wrap gap-2"
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
                  ? "rounded-full bg-black px-5 py-2 text-sm font-semibold text-white"
                  : "rounded-full border border-zinc-300 bg-white px-5 py-2 text-sm font-semibold text-black transition-colors hover:border-black"
              }
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <ul className="mt-10 grid gap-px overflow-hidden border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <li
            key={item.name}
            className="flex flex-col justify-between gap-6 bg-white p-6"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  {item.category}
                </span>
                {item.signature ? (
                  <span className="rounded-full bg-black px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
                    Signature
                  </span>
                ) : null}
              </div>
              <h3 className="mt-3 text-lg font-bold leading-snug text-black">
                {item.name}
              </h3>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-black">
                {formatPrice(item.price)}
              </span>
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer"
                aria-label={`Pesan ${item.name}`}
                className="rounded-full border border-black px-4 py-1.5 text-sm font-semibold text-black transition-colors hover:bg-black hover:text-white"
              >
                Pesan
              </a>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm text-zinc-500">
        Menampilkan {visible.length} dari {MENU_ITEMS.length} menu.
      </p>
    </section>
  );
}
