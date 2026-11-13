import Image from "next/image";
import BottomNav from "@/components/BottomNav";
import CupImage from "@/components/CupImage";
import LogoImage from "@/components/LogoImage";
import MenuSection from "@/components/MenuSection";
import ProcessSection from "@/components/ProcessSection";
import Reveal from "@/components/Reveal";
import {
  MENU_ITEMS,
  SIGNATURE_ITEMS,
  formatPrice,
  imageForMenuItem,
} from "@/data/menu";
import {
  ADDRESS,
  CUP_HOT_ALT,
  CUP_HOT_FALLBACK,
  CUP_HOT_SRC,
  CUP_ICE_ALT,
  CUP_ICE_SRC,
  IMAGES,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_URL,
  ORDER_MODES,
  ORDER_URL,
  VALUES,
} from "@/lib/site";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
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

const GALLERY_ITEMS = [
  {
    image: IMAGES.galleryInterior,
    caption: "Sudut yang tenang untuk berlama-lama.",
  },
  {
    image: IMAGES.galleryPour,
    caption: "Diseduh dengan teliti, cangkir demi cangkir.",
  },
  {
    image: IMAGES.galleryFriends,
    caption: "Bareng teman, makin seru.",
  },
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
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black font-display text-xl font-extrabold text-white">
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
            <a href="#tentang" className="nav-link">
              Tentang
            </a>
            <a href="#proses" className="nav-link">
              Proses
            </a>
            <a href="#menu" className="nav-link">
              Menu
            </a>
            <a href="#lokasi" className="nav-link">
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
              <Reveal>
                <Eyebrow>Kedai kopi &amp; billiard &middot; Aceh Utara</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-8 max-w-xl font-display text-5xl font-black leading-[1.05] tracking-[-0.01em] sm:text-6xl lg:text-7xl">
                  Kopi enak,
                  <br />
                  <span className="text-kopi">di sini.</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-600 sm:text-lg">
                  kopidisini adalah ruang berkumpul modern: kopi premium
                  racikan barista dan meja billiard yang nyaman dalam satu
                  tempat. Untuk nongkrong, bekerja, bersantai, dan main
                  bersama. Di sini, semua bisa.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-10 flex flex-wrap items-center gap-6">
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
                    href="#tentang"
                    className="rounded-full border-2 border-black px-7 py-3 text-base font-bold text-black transition-all hover:bg-black hover:text-white active:scale-95"
                  >
                    Kenalan Dulu
                  </a>
                  <a
                    href="#menu"
                    className="text-base font-bold underline decoration-zinc-300 underline-offset-8 transition-colors hover:decoration-kopi"
                  >
                    Lihat Menu
                  </a>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <p className="mt-10 text-sm font-bold tracking-[0.25em] text-kopi">
                  #SEMUABISADISINI
                </p>
              </Reveal>
            </div>
            <Reveal delay={200} className="lg:col-span-5">
              <figure className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -right-5 -top-5 h-36 w-36 rounded-full border-2 border-dashed border-kopi/50 sm:h-44 sm:w-44"
                />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[5/4] lg:aspect-[4/5]">
                  <CupImage
                    src={CUP_ICE_SRC}
                    fallbackSrc={IMAGES.icedCoffee.src}
                    alt={CUP_ICE_ALT}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="absolute bottom-4 left-4 max-w-[16rem] rounded-2xl bg-white px-5 py-4 shadow-lg">
                  <span className="block text-sm font-extrabold">
                    Berdiri sejak 2021
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-zinc-600">
                    Kopi &amp; billiard dalam satu tempat, di Aceh Utara.
                  </span>
                </figcaption>
              </figure>
            </Reveal>
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
              <div
                key={stat.label}
                className="flex flex-col px-4 py-8 text-center sm:py-10"
              >
                <dd className="order-1 font-display text-2xl font-black sm:text-4xl">
                  {stat.value}
                </dd>
                <dt className="order-2 mt-2 text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500 sm:text-xs">
                  {stat.label}
                </dt>
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

        <section id="tentang" className="bg-cream">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <Eyebrow>01 &middot; Tentang</Eyebrow>
                <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.01em] sm:text-4xl">
                  Dari kamar kecil, untuk semua yang{" "}
                  <span className="text-kopi">datang.</span>
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
                  <figure className="row-span-2">
                    <div className="relative h-full min-h-72 overflow-hidden rounded-2xl">
                      <CupImage
                        src={CUP_HOT_SRC}
                        fallbackSrc={CUP_HOT_FALLBACK.src}
                        alt={CUP_HOT_ALT}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-2 text-xs text-zinc-500">
                      Kopi panas, diseduh saat dipesan.
                    </figcaption>
                  </figure>
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
              </Reveal>
            </div>

            <Reveal className="mt-20">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
                Perjalanan kami
              </h3>
              <ol className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-3">
                {[
                  {
                    phase: "Awal 2021",
                    title: "Berawal dari kamar kecil",
                    description:
                      "Sebuah kamar sewa dengan menu yang masih terbatas.",
                  },
                  {
                    phase: "Bertumbuh",
                    title: "Menjadi ruang F&B",
                    description:
                      "Menu makin menarik, suasana makin nyaman untuk berlama-lama.",
                  },
                  {
                    phase: "Hari ini",
                    title: "Kopi, roasting & billiard",
                    description:
                      "Jasa roasting biji kopi dan area billiard melengkapi kedai.",
                  },
                ].map((step) => (
                  <li
                    key={step.title}
                    className="border-t-2 border-black pt-5"
                  >
                    <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-kopi">
                      {step.phase}
                    </span>
                    <h4 className="mt-3 font-display text-lg font-bold leading-snug">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal className="mt-16">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
                Yang kami pegang
              </h3>
              <ul className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
                {VALUES.map((value, index) => (
                  <li
                    key={value.name}
                    className="border-t border-zinc-300 pt-5"
                  >
                    <span className="font-display text-lg font-extrabold text-zinc-400">
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

        <ProcessSection />

        <section
          aria-labelledby="signature-heading"
          className="bg-black text-white"
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
              <span aria-hidden="true" className="h-px w-10 bg-zinc-700" />
              03 &middot; Signature
            </p>
            <h2
              id="signature-heading"
              className="mt-6 font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.01em] sm:text-4xl"
            >
              Yang paling{" "}
              <span className="text-kopi-soft">dicari.</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-400">
              Racikan andalan kami, dari kopi sampai cokelat signature.
            </p>
            <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SIGNATURE_ITEMS.map((item, index) => {
                const image = imageForMenuItem(item);
                return (
                  <li
                    key={item.name}
                    className="group overflow-hidden rounded-3xl bg-zinc-900 ring-1 ring-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:ring-zinc-600"
                  >
                    <Reveal delay={index * 90}>
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={image.src}
                          alt={`${item.name} (ilustrasi)`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute left-3 top-3 rounded-full bg-kopi px-2.5 py-1 text-[11px] font-bold text-white shadow-sm">
                          Signature
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="font-display text-lg font-bold leading-snug">
                          {item.name}
                        </h3>
                        <div className="mt-4 flex items-center justify-between gap-3">
                          <p className="text-base font-bold tabular-nums text-kopi-soft">
                            {formatPrice(item.price)}
                          </p>
                          <a
                            href={ORDER_URL}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Pesan ${item.name}`}
                            className="shrink-0 rounded-full bg-white px-4 py-2 text-xs font-bold text-black transition-all hover:opacity-80 active:scale-95"
                          >
                            Pesan
                          </a>
                        </div>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="gallery-heading"
          className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
              <span aria-hidden="true" className="h-px w-10 bg-kopi" />
              04 &middot; Suasana
              <span aria-hidden="true" className="h-px w-10 bg-kopi" />
            </p>
            <h2
              id="gallery-heading"
              className="mt-6 font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.01em] sm:text-4xl"
            >
              Suasana yang bikin{" "}
              <span className="text-kopi">betah.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600">
              Cahaya hangat, meja kayu, dan aroma kopi. Tempat yang enak
              untuk berlama-lama, sendiri maupun bareng teman.
            </p>
          </div>
          <Reveal className="mt-12">
            <div className="relative aspect-[21/9] overflow-hidden rounded-3xl">
              <Image
                src={IMAGES.galleryWide.src}
                alt={IMAGES.galleryWide.alt}
                fill
                sizes="(max-width: 1152px) 100vw, 1152px"
                className="animate-kenburns object-cover"
              />
            </div>
          </Reveal>
          <ul className="mt-4 grid gap-4 sm:grid-cols-3">
            {GALLERY_ITEMS.map((item, index) => (
              <li key={item.caption}>
                <Reveal delay={index * 100}>
                  <figure className="group">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-zinc-600">
                      {item.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-zinc-500">
            Foto ilustrasi.
          </p>
        </section>

        <section
          aria-labelledby="categories-heading"
          className="mx-auto w-full max-w-6xl px-6 pb-4 pt-16 sm:pt-24"
        >
          <Eyebrow>05 &middot; Kategori menu</Eyebrow>
          <h2
            id="categories-heading"
            className="mt-6 font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.01em] sm:text-4xl"
          >
            Mulai dari <span className="text-kopi">kategorinya.</span>
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
                        <span className="block font-display text-2xl font-bold">
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
          <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
            <Eyebrow>07 &middot; Lokasi &amp; cara pesan</Eyebrow>
            <h2 className="mt-6 max-w-xl font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.01em] sm:text-4xl">
              Mampir, atau pesan dari{" "}
              <span className="text-kopi">mana saja.</span>
            </h2>
            <div className="mt-14 grid gap-12 lg:grid-cols-2">
              <Reveal>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                  Alamat kedai
                </h3>
                <address className="mt-4 font-display text-2xl font-bold leading-snug not-italic">
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
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={ORDER_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-full bg-black px-7 py-3.5 text-base font-bold text-white transition-all hover:opacity-80 active:scale-95"
                  >
                    Pesan Sekarang
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-full border-2 border-black px-7 py-3 text-base font-bold text-black transition-all hover:bg-black hover:text-white active:scale-95"
                  >
                    Lihat di Google Maps
                  </a>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <ul>
                  {ORDER_MODES.map((mode, index) => (
                    <li
                      key={mode.name}
                      className="flex gap-6 border-t border-zinc-200 py-6 last:border-b"
                    >
                      <span className="font-display text-lg font-extrabold text-zinc-400">
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
              <p className="font-display text-5xl font-extrabold lowercase tracking-[-0.02em] sm:text-6xl">
                kopidisini<span className="text-kopi-soft">.</span>
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
