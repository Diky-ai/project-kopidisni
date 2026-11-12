import Image from "next/image";
import MenuSection from "@/components/MenuSection";
import { SIGNATURE_ITEMS, formatPrice } from "@/data/menu";
import {
  ADDRESS,
  IMAGES,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  ORDER_MODES,
  ORDER_URL,
  VALUES,
} from "@/lib/site";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
      <span aria-hidden="true" className="h-px w-10 bg-zinc-300" />
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-white font-sans text-black">
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#beranda"
            className="font-display text-2xl font-semibold lowercase tracking-tight"
          >
            kopidisini.
          </a>
          <nav
            aria-label="Navigasi utama"
            className="hidden gap-8 text-xs font-bold uppercase tracking-[0.2em] sm:flex"
          >
            <a href="#tentang" className="transition-opacity hover:opacity-60">
              Tentang
            </a>
            <a href="#menu" className="transition-opacity hover:opacity-60">
              Menu
            </a>
            <a href="#lokasi" className="transition-opacity hover:opacity-60">
              Lokasi
            </a>
          </nav>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-80"
          >
            Pesan Sekarang
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section
          id="beranda"
          className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-24"
        >
          <Eyebrow>Kedai kopi &amp; billiard &middot; Aceh Utara</Eyebrow>
          <h1 className="mt-8 max-w-4xl font-display text-7xl font-light leading-[0.95] tracking-[-0.02em] sm:text-8xl lg:text-9xl">
            Kopi enak,
            <br />
            <em className="font-normal">di sini.</em>
          </h1>
          <div className="mt-10 flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-lg leading-relaxed text-zinc-600">
              kopidisini adalah ruang berkumpul modern: kopi premium racikan
              barista dan meja billiard yang nyaman dalam satu tempat. Untuk
              nongkrong, bekerja, bersantai, dan main bersama. Di sini, semua
              bisa.
            </p>
            <div className="flex shrink-0 flex-wrap items-center gap-6">
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-black px-7 py-3.5 text-base font-bold text-white transition-opacity hover:opacity-80"
              >
                Pesan Sekarang
                <span aria-hidden="true"> &rarr;</span>
              </a>
              <a
                href="#menu"
                className="text-base font-bold underline decoration-zinc-300 underline-offset-8 transition-colors hover:decoration-black"
              >
                Lihat Menu
              </a>
            </div>
          </div>
          <p className="mt-10 text-sm font-bold tracking-[0.25em]">
            #SEMUABISADISINI
          </p>
          <dl className="mt-10 grid gap-8 border-t border-zinc-200 pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                Lokasi
              </dt>
              <dd className="mt-3 text-sm leading-relaxed">{ADDRESS}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                Cara pesan
              </dt>
              <dd className="mt-3 text-sm leading-relaxed">
                Take Away, Delivery, Dine In, dan Reservasi.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                Instagram
              </dt>
              <dd className="mt-3 text-sm leading-relaxed">
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
          <figure className="mt-14">
            <div className="relative aspect-[21/9] overflow-hidden rounded-2xl">
              <Image
                src={IMAGES.beans.src}
                alt={IMAGES.beans.alt}
                fill
                sizes="(max-width: 1152px) 100vw, 1152px"
                className="object-cover grayscale"
              />
            </div>
            <figcaption className="mt-3 text-sm text-zinc-500">
              Biji kopi pilihan. Kami juga melayani jasa roasting biji kopi.
              Foto ilustrasi.
            </figcaption>
          </figure>
        </section>

        <div
          aria-hidden="true"
          className="overflow-hidden bg-black py-4 text-white"
        >
          <div className="marquee-track flex w-max whitespace-nowrap">
            {[0, 1].map((copy) => (
              <p
                key={copy}
                className="pr-8 text-sm font-bold uppercase tracking-[0.3em]"
              >
                Kopi &nbsp;&mdash;&nbsp; Billiard &nbsp;&mdash;&nbsp;
                #Semuabisadisini &nbsp;&mdash;&nbsp; Kopi &nbsp;&mdash;&nbsp;
                Billiard &nbsp;&mdash;&nbsp; #Semuabisadisini
                &nbsp;&mdash;&nbsp;
              </p>
            ))}
          </div>
        </div>

        <section
          id="tentang"
          className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>01 &middot; Tentang</Eyebrow>
              <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-[-0.01em] sm:text-5xl">
                Dari kamar kecil, untuk semua yang{" "}
                <em className="font-normal">datang.</em>
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-600">
                <p>
                  kopidisini dibangun pada awal 2021 dari sebuah kamar kecil
                  yang disewa, dengan menu yang masih terbatas. Perlahan, kamar
                  itu tumbuh menjadi ruang F&amp;B yang nyaman dengan menu yang
                  makin menarik, lalu bertambah jasa roasting biji kopi dan
                  area billiard.
                </p>
                <p>
                  Kami percaya secangkir kopi berkualitas dan permainan
                  billiard yang menyenangkan adalah kombinasi sempurna untuk
                  pengalaman sosial yang berbeda. Karena itu kami membangun
                  lebih dari sekadar tempat jualan: kami membangun komunitas,
                  tempat setiap pengunjung merasa menjadi bagiannya.
                </p>
                <p>
                  Kami pernah bekerja sama dengan Universitas Malikussaleh,
                  terutama Fakultas Agribisnis, dan menerima mahasiswa magang.
                </p>
              </div>
            </div>
            <div className="lg:pt-16">
              <div className="grid grid-cols-2 gap-4">
                <figure>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={IMAGES.barista.src}
                      alt={IMAGES.barista.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover grayscale"
                    />
                  </div>
                  <figcaption className="mt-2 text-xs text-zinc-500">
                    Kopi premium, racikan barista.
                  </figcaption>
                </figure>
                <figure>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={IMAGES.billiard.src}
                      alt={IMAGES.billiard.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover grayscale"
                    />
                  </div>
                  <figcaption className="mt-2 text-xs text-zinc-500">
                    Fasilitas billiard yang nyaman.
                  </figcaption>
                </figure>
              </div>
              <p className="mt-4 text-sm text-zinc-500">
                Foto ilustrasi. Foto asli kedai menyusul.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
              Yang kami pegang
            </h3>
            <ul className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
              {VALUES.map((value, index) => (
                <li key={value.name} className="border-t border-zinc-200 pt-5">
                  <span className="font-display text-lg font-light text-zinc-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-3 text-base font-bold">{value.name}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="signature-heading"
          className="bg-black text-white"
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
              <span aria-hidden="true" className="h-px w-10 bg-zinc-700" />
              02 &middot; Signature
            </p>
            <h2
              id="signature-heading"
              className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-[-0.01em] sm:text-5xl"
            >
              Yang paling <em className="font-normal">dicari.</em>
            </h2>
            <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {SIGNATURE_ITEMS.map((item, index) => (
                <li
                  key={item.name}
                  className="group border-t border-zinc-800 pt-6 transition-colors"
                >
                  <span className="font-display text-5xl font-light text-zinc-600 transition-colors group-hover:text-zinc-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-normal leading-snug">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-base font-bold tabular-nums text-zinc-300">
                    {formatPrice(item.price)}
                  </p>
                  <a
                    href={ORDER_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Pesan ${item.name}`}
                    className="mt-5 inline-block text-sm font-bold underline decoration-zinc-600 underline-offset-8 transition-colors hover:decoration-white"
                  >
                    Pesan
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <MenuSection />

        <section id="lokasi" className="border-t border-zinc-200">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
            <Eyebrow>04 &middot; Lokasi &amp; cara pesan</Eyebrow>
            <h2 className="mt-6 max-w-2xl font-display text-4xl font-light leading-[1.05] tracking-[-0.01em] sm:text-5xl">
              Mampir, atau pesan dari{" "}
              <em className="font-normal">mana saja.</em>
            </h2>
            <div className="mt-14 grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                  Alamat kedai
                </h3>
                <address className="mt-4 font-display text-2xl font-normal leading-snug not-italic">
                  {ADDRESS}, Indonesia
                </address>
                <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-600">
                  Datang untuk kopinya, tinggal untuk billiardnya. Suasana
                  kami hangat, modern, dan ramah untuk semua kalangan.
                </p>
                <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-600">
                  Jam buka akan diumumkan di sini. Untuk kabar terbaru, pantau
                  Instagram kami di{" "}
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-black underline underline-offset-4"
                  >
                    {INSTAGRAM_HANDLE}
                  </a>
                  .
                </p>
                <a
                  href={ORDER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-block rounded-full bg-black px-7 py-3.5 text-base font-bold text-white transition-opacity hover:opacity-80"
                >
                  Pesan Sekarang
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
              <ul>
                {ORDER_MODES.map((mode, index) => (
                  <li
                    key={mode.name}
                    className="flex gap-6 border-t border-zinc-200 py-6 last:border-b"
                  >
                    <span className="font-display text-lg font-light text-zinc-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base font-bold">{mode.name}</h3>
                      <p className="mt-1 text-base leading-relaxed text-zinc-600">
                        {mode.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
          <p className="font-display text-6xl font-light lowercase tracking-[-0.02em] sm:text-7xl">
            kopidisini<em className="font-normal">.</em>
          </p>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-zinc-400">
            Kopi &amp; billiard dalam satu tempat &middot; #Semuabisadisini
          </p>
          <div className="mt-12 flex flex-col gap-10 border-t border-zinc-800 pt-10 text-sm leading-relaxed text-zinc-400 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-xs">
              <p>{ADDRESS}, Indonesia</p>
              <p className="mt-3">
                Pemesanan dilayani lewat halaman pesanan kami.
              </p>
            </div>
            <nav
              aria-label="Tautan footer"
              className="flex flex-col gap-3 text-base"
            >
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-white hover:underline"
              >
                Pesan Sekarang
                <span aria-hidden="true"> &rarr;</span>
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:underline">
                Instagram {INSTAGRAM_HANDLE}
              </a>
              <a href="#menu" className="hover:underline">
                Lihat Menu
              </a>
            </nav>
          </div>
          <p className="mt-14 text-xs leading-relaxed text-zinc-500">
            &copy; 2026 kopidisini. Contoh tampilan (dummy) &mdash; jam buka,
            foto asli, dan detail lain akan dilengkapi. Foto ilustrasi dari
            Pexels.
          </p>
        </div>
      </footer>
    </div>
  );
}
