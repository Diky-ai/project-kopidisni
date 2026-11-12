import MenuSection from "@/components/MenuSection";
import { SIGNATURE_ITEMS, formatPrice } from "@/data/menu";
import {
  ADDRESS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  ORDER_MODES,
  ORDER_URL,
} from "@/lib/site";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-white text-black">
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#beranda"
            className="text-xl font-black lowercase tracking-tight"
          >
            kopidisini.
          </a>
          <nav aria-label="Navigasi utama" className="hidden gap-8 text-sm font-medium sm:flex">
            <a href="#tentang" className="hover:underline">
              Tentang
            </a>
            <a href="#menu" className="hover:underline">
              Menu
            </a>
            <a href="#lokasi" className="hover:underline">
              Lokasi
            </a>
          </nav>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-80"
          >
            Pesan Sekarang
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section
          id="beranda"
          className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-24"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Kedai kopi &middot; Aceh Utara
          </p>
          <h1 className="mt-6 max-w-3xl text-6xl font-black leading-[0.95] tracking-tight sm:text-8xl">
            Kopi enak, di sini.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
            kopidisini adalah kedai kopi untuk nongkrong santai dan menyeruput
            kopi favoritmu. Pesan dari mana saja, lalu ambil di kedai, diantar,
            atau nikmati langsung di tempat.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-black px-7 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-80"
            >
              Pesan Sekarang
            </a>
            <a
              href="#menu"
              className="rounded-full border border-black px-7 py-3.5 text-base font-semibold text-black transition-colors hover:bg-black hover:text-white"
            >
              Lihat Menu
            </a>
          </div>
          <dl className="mt-16 grid gap-6 border-t border-zinc-200 pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Lokasi
              </dt>
              <dd className="mt-2 text-sm leading-relaxed">{ADDRESS}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Cara pesan
              </dt>
              <dd className="mt-2 text-sm leading-relaxed">
                Take Away, Delivery, Dine In, dan Reservasi.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Instagram
              </dt>
              <dd className="mt-2 text-sm leading-relaxed">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4"
                >
                  {INSTAGRAM_HANDLE}
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <div
          aria-hidden="true"
          className="overflow-hidden bg-black py-4 text-white"
        >
          <p className="whitespace-nowrap text-center text-sm font-semibold uppercase tracking-[0.3em]">
            Kopi &nbsp;&middot;&nbsp; Non Kopi &nbsp;&middot;&nbsp;
            JajanDisini &nbsp;&middot;&nbsp; Kopi &nbsp;&middot;&nbsp; Non Kopi
            &nbsp;&middot;&nbsp; JajanDisini
          </p>
        </div>

        <section
          id="tentang"
          className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                Tentang
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Sederhana saja. Kopi yang jujur, tempat yang nyaman.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-zinc-600">
              <p>
                kopidisini berdiri di Aceh Utara sebagai tempat singgah untuk
                penikmat kopi: dari espresso dan americano sampai racikan
                signature seperti Es Kopidisini dan Es Kopigudang. Buat yang
                tidak minum kopi, ada matcha, coklat, teh, dan squash.
              </p>
              <p>
                Semua pemesanan dilakukan lewat halaman pesanan kami, jadi kamu
                bisa memilih mau take away, delivery, dine in, atau reservasi
                sebelum datang.
              </p>
              <div className="flex items-center justify-center rounded-2xl border-2 border-dashed border-zinc-300 bg-zinc-50 px-6 py-12 text-center text-sm text-zinc-500">
                Foto kedai dan produk akan tampil di sini.
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="signature-heading" className="bg-black text-white">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
              Signature
            </p>
            <h2
              id="signature-heading"
              className="mt-3 text-4xl font-black tracking-tight sm:text-5xl"
            >
              Yang paling dicari.
            </h2>
            <ul className="mt-12 grid gap-px overflow-hidden border border-zinc-800 bg-zinc-800 sm:grid-cols-2 lg:grid-cols-4">
              {SIGNATURE_ITEMS.map((item, index) => (
                <li
                  key={item.name}
                  className="flex flex-col justify-between gap-10 bg-black p-6"
                >
                  <span className="text-sm font-semibold text-zinc-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold leading-snug">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-base font-semibold text-zinc-300">
                      {formatPrice(item.price)}
                    </p>
                    <a
                      href={ORDER_URL}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Pesan ${item.name}`}
                      className="mt-5 inline-block rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-black transition-opacity hover:opacity-80"
                    >
                      Pesan
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <MenuSection />

        <section id="lokasi" className="border-t border-zinc-200">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Lokasi &amp; cara pesan
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
              Mampir, atau pesan dari mana saja.
            </h2>
            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-lg font-bold">Alamat kedai</h3>
                <address className="mt-3 text-base leading-relaxed not-italic text-zinc-600">
                  {ADDRESS}, Indonesia
                </address>
                <p className="mt-6 text-base leading-relaxed text-zinc-600">
                  Jam buka akan diumumkan di sini. Untuk kabar terbaru, pantau
                  Instagram kami di{" "}
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-black underline underline-offset-4"
                  >
                    {INSTAGRAM_HANDLE}
                  </a>
                  .
                </p>
                <a
                  href={ORDER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-block rounded-full bg-black px-7 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-80"
                >
                  Pesan Sekarang
                </a>
              </div>
              <ul className="divide-y divide-zinc-200 border-y border-zinc-200">
                {ORDER_MODES.map((mode) => (
                  <li key={mode.name} className="flex gap-6 py-5">
                    <h3 className="w-32 shrink-0 text-base font-bold">
                      {mode.name}
                    </h3>
                    <p className="text-base leading-relaxed text-zinc-600">
                      {mode.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <p className="text-4xl font-black lowercase tracking-tight sm:text-5xl">
            kopidisini.
          </p>
          <div className="mt-10 flex flex-col gap-8 border-t border-zinc-800 pt-8 text-sm leading-relaxed text-zinc-400 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-xs">
              <p>{ADDRESS}, Indonesia</p>
              <p className="mt-3">
                Pemesanan dilayani lewat halaman pesanan kami.
              </p>
            </div>
            <nav aria-label="Tautan footer" className="flex flex-col gap-2">
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-white hover:underline"
              >
                Pesan Sekarang
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Instagram {INSTAGRAM_HANDLE}
              </a>
              <a href="#menu" className="hover:underline">
                Lihat Menu
              </a>
            </nav>
          </div>
          <p className="mt-12 text-xs text-zinc-500">
            &copy; 2026 kopidisini. Contoh tampilan (dummy) &mdash; jam buka,
            foto, dan detail lain akan dilengkapi.
          </p>
        </div>
      </footer>
    </div>
  );
}
