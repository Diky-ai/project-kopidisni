import Image from "next/image";
import BottomNav from "@/components/BottomNav";
import LogoImage from "@/components/LogoImage";
import MenuSection from "@/components/MenuSection";
import Reveal from "@/components/Reveal";
import { MENU_ITEMS, SIGNATURE_ITEMS, formatPrice } from "@/data/menu";
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
      <span aria-hidden="true" className="h-px w-10 bg-kopi" />
      {children}
    </p>
  );
}

const PILLARS = [
  {
    name: "Kopi Premium",
    description: "Racikan barista profesional, dari biji pilihan.",
    icon: (
      <path d="M5 4h11v7a5 5 0 0 1-10 0V4ZM16 6h2.5a2.5 2.5 0 0 1 0 5H16M8 20h8" />
    ),
  },
  {
    name: "Billiard",
    description: "Fasilitas nyaman berstandar tinggi, siap dimainkan.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="currentColor"
          stroke="none"
        >
          8
        </text>
      </>
    ),
  },
  {
    name: "Roasting Biji Kopi",
    description: "Jasa roasting untuk biji kopi pilihanmu.",
    icon: (
      <path d="M12 3c2 3-3 5-3 8a3 3 0 0 0 6 0c0-1.5-1-2.5-1-2.5s3 1.5 3 5a5 5 0 0 1-10 0c0-5 4-7 5-10.5Z" />
    ),
  },
  {
    name: "Komunitas",
    description: "Ruang berkumpul untuk semua kalangan.",
    icon: (
      <>
        <circle cx="9" cy="9" r="3.5" />
        <circle cx="15.5" cy="10" r="2.8" />
        <path d="M4 20c0-3 2.5-5 5-5s5 2 5 5M14 20c.5-2.5 2-4 4-4 1.8 0 3 1.2 3.5 3" />
      </>
    ),
  },
];

const CATEGORY_CARDS = [
  {
    title: "Kopi",
    category: "KOPI" as const,
    image: IMAGES.icedCoffee,
  },
  {
    title: "Non Kopi",
    category: "NON KOPI" as const,
    image: IMAGES.matcha,
  },
  {
    title: "JajanDisini",
    category: "JAJANDISINI" as const,
    image: IMAGES.pastry,
  },
];

const STATS = [
  { value: "46", label: "Menu & racikan" },
  { value: "2 in 1", label: "Kopi & billiard" },
  { value: "2021", label: "Berdiri sejak" },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-white font-sans text-black">
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#beranda"
            className="flex items-center gap-2.5"
            aria-label="kopidisini, kembali ke beranda"
          >
            <LogoImage
              src="/logo-mark.png"
              alt=""
              width={512}
              height={512}
              priority
              className="h-10 w-10"
              fallback={
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black font-display text-xl font-semibold text-white">
                  k<span className="text-kopi-soft">.</span>
                </span>
              }
            />
            <span className="text-xl font-extrabold lowercase tracking-tight">
              kopidisini<span className="text-kopi">.</span>
            </span>
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
            className="whitespace-nowrap rounded-full bg-black px-5 py-2.5 text-sm font-bold text-white transition-all hover:opacity-80 active:scale-95"
          >
            Pesan Sekarang
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section
          id="beranda"
          className="mx-auto w-full max-w-6xl px-6 pb-16 pt-12 sm:pb-20 sm:pt-16"
        >
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="animate-rise">
                <Eyebrow>Kedai kopi &amp; billiard &middot; Aceh Utara</Eyebrow>
              </div>
              <h1
                className="animate-rise mt-8 font-display text-6xl font-light leading-[0.95] tracking-[-0.02em] sm:text-7xl xl:text-8xl"
                style={{ animationDelay: "80ms" }}
              >
                Kopi enak,
                <br />
                <em className="font-normal text-kopi">di sini.</em>
              </h1>
              <p
                className="animate-rise mt-8 max-w-md text-lg leading-relaxed text-zinc-600"
                style={{ animationDelay: "160ms" }}
              >
                kopidisini adalah ruang berkumpul modern: kopi premium racikan
                barista dan meja billiard yang nyaman dalam satu tempat. Untuk
                nongkrong, bekerja, bersantai, dan main bersama. Di sini,
                semua bisa.
              </p>
              <div
                className="animate-rise mt-10 flex flex-wrap items-center gap-6"
                style={{ animationDelay: "240ms" }}
              >
                <a
                  href={ORDER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-black px-7 py-3.5 text-base font-bold text-white transition-all hover:opacity-80 active:scale-95"
                >
                  Pesan Sekarang
                  <span aria-hidden="true"> &rarr;</span>
                </a>
                <a
                  href="#menu"
                  className="text-base font-bold underline decoration-zinc-300 underline-offset-8 transition-colors hover:decoration-kopi"
                >
                  Lihat Menu
                </a>
              </div>
              <p
                className="animate-rise mt-10 text-sm font-bold tracking-[0.25em] text-kopi"
                style={{ animationDelay: "320ms" }}
              >
                #SEMUABISADISINI
              </p>
            </div>
            <div
              className="animate-rise lg:col-span-5"
              style={{ animationDelay: "200ms" }}
            >
              <figure className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[5/4] lg:aspect-[4/5]">
                  <Image
                    src={IMAGES.barista.src}
                    alt={IMAGES.barista.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-xs font-bold shadow-md">
                  Berdiri sejak 2021
                </figcaption>
              </figure>
              <p className="mt-3 text-sm text-zinc-500">Foto ilustrasi.</p>
            </div>
          </div>
          <dl className="mt-16 grid gap-8 border-t border-zinc-200 pt-8 sm:grid-cols-3">
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
        </section>

        <section
          aria-label="Sekilas kopidisini"
          className="border-y border-zinc-200"
        >
          <dl className="mx-auto grid w-full max-w-6xl grid-cols-3 divide-x divide-zinc-200 px-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="px-4 py-8 text-center sm:py-10">
                <dt className="order-2 mt-2 block text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 sm:text-sm">
                  {stat.label}
                </dt>
                <dd className="font-display text-3xl font-light sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          aria-label="Yang kami tawarkan"
          className="mx-auto w-full max-w-6xl px-6 py-14 sm:py-16"
        >
          <ul className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {PILLARS.map((pillar, index) => (
              <li key={pillar.name}>
                <Reveal delay={index * 90}>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-kopi"
                  >
                    {pillar.icon}
                  </svg>
                  <h2 className="mt-4 text-base font-bold sm:text-lg">
                    {pillar.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {pillar.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
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

        <section id="tentang" className="bg-cream">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <Eyebrow>01 &middot; Tentang</Eyebrow>
                <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-[-0.01em] sm:text-5xl">
                  Dari kamar kecil, untuk semua yang{" "}
                  <em className="font-normal text-kopi">datang.</em>
                </h2>
                <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-600">
                  <p>
                    kopidisini dibangun pada awal 2021 dari sebuah kamar kecil
                    yang disewa, dengan menu yang masih terbatas. Perlahan,
                    kamar itu tumbuh menjadi ruang F&amp;B yang nyaman dengan
                    menu yang makin menarik, lalu bertambah jasa roasting biji
                    kopi dan area billiard.
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
                    terutama Fakultas Agribisnis, dan menerima mahasiswa
                    magang.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={120} className="lg:pt-16">
                <div className="grid grid-cols-2 gap-4">
                  <figure>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                      <Image
                        src={IMAGES.beans.src}
                        alt={IMAGES.beans.alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-2 text-xs text-zinc-500">
                      Biji kopi pilihan, di-roasting sendiri.
                    </figcaption>
                  </figure>
                  <figure>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                      <Image
                        src={IMAGES.billiard.src}
                        alt={IMAGES.billiard.alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
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
              </Reveal>
            </div>

            <Reveal className="mt-20">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
                Yang kami pegang
              </h3>
              <ul className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
                {VALUES.map((value, index) => (
                  <li
                    key={value.name}
                    className="border-t border-zinc-300 pt-5"
                  >
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
            </Reveal>
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
              Yang paling{" "}
              <em className="font-normal text-kopi-soft">dicari.</em>
            </h2>
            <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {SIGNATURE_ITEMS.map((item, index) => (
                <li
                  key={item.name}
                  className="group border-t border-zinc-800 pt-6 transition-colors"
                >
                  <Reveal delay={index * 90}>
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
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="categories-heading"
          className="mx-auto w-full max-w-6xl px-6 pb-4 pt-20 sm:pt-28"
        >
          <Eyebrow>03 &middot; Kategori menu</Eyebrow>
          <h2
            id="categories-heading"
            className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-[-0.01em] sm:text-5xl"
          >
            Mulai dari <em className="font-normal text-kopi">kategorinya.</em>
          </h2>
          <ul className="mt-12 grid gap-4 sm:grid-cols-3">
            {CATEGORY_CARDS.map((card, index) => {
              const count = MENU_ITEMS.filter(
                (item) => item.category === card.category,
              ).length;
              return (
                <li key={card.category}>
                  <Reveal delay={index * 100}>
                    <a
                      href="#menu"
                      className="group relative block aspect-[16/10] overflow-hidden rounded-3xl sm:aspect-[3/4]"
                    >
                      <Image
                        src={card.image.src}
                        alt={card.image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                      />
                      <span className="absolute inset-x-0 bottom-0 p-6 text-white">
                        <span className="block font-display text-3xl font-normal">
                          {card.title}
                        </span>
                        <span className="mt-2 block text-sm font-bold">
                          {count} menu &middot; Lihat menu{" "}
                          <span aria-hidden="true">&rarr;</span>
                        </span>
                      </span>
                    </a>
                  </Reveal>
                </li>
              );
            })}
          </ul>
          <p className="mt-4 text-sm text-zinc-500">Foto ilustrasi.</p>
        </section>

        <MenuSection />

        <section id="lokasi" className="border-t border-zinc-200">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
            <Eyebrow>05 &middot; Lokasi &amp; cara pesan</Eyebrow>
            <h2 className="mt-6 max-w-2xl font-display text-4xl font-light leading-[1.05] tracking-[-0.01em] sm:text-5xl">
              Mampir, atau pesan dari{" "}
              <em className="font-normal text-kopi">mana saja.</em>
            </h2>
            <div className="mt-14 grid gap-12 lg:grid-cols-2">
              <Reveal>
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
                  className="mt-8 inline-block rounded-full bg-black px-7 py-3.5 text-base font-bold text-white transition-all hover:opacity-80 active:scale-95"
                >
                  Pesan Sekarang
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </Reveal>
              <Reveal delay={120}>
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
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
          <LogoImage
            src="/logo.png"
            alt="Logo kopidisini"
            width={1400}
            height={426}
            className="h-auto w-full max-w-md"
            fallback={
              <p className="font-display text-6xl font-light lowercase tracking-[-0.02em] sm:text-7xl">
                kopidisini<em className="font-normal text-kopi-soft">.</em>
              </p>
            }
          />
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

      <BottomNav />
      <div aria-hidden="true" className="h-14 sm:hidden" />
    </div>
  );
}
