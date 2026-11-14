import Image from "next/image";
import BottomNav from "@/components/BottomNav";
import HeroCupVideo from "@/components/HeroCupVideo";
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
  HERO_CUP_ALT,
  HERO_CUP_POSTER_SRC,
  HERO_CUP_VIDEO_SRC,
  HERO_CUP_VIDEO_WEBM_SRC,
  IMAGES,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  TIKTOK_HANDLE,
  TIKTOK_URL,
  MAPS_URL,
  ORDER_MODES,
  ORDER_URL,
  VALUES,
} from "@/lib/site";

// Label kecil bernomor di atas setiap judul section. Varian `dark`
// untuk pemakaian di atas latar hitam.
function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={
        dark
          ? "flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-zinc-400"
          : "flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500"
      }
    >
      <span
        aria-hidden="true"
        className={dark ? "h-px w-10 bg-white" : "h-px w-10 bg-black"}
      />
      {children}
    </p>
  );
}

const PILLARS = [
  {
    name: "Premium Coffee",
    description: "Racikan barista profesional, dari biji pilihan.",
    icon: (
      <path d="M5 4h11v7a5 5 0 0 1-10 0V4ZM16 6h2.5a2.5 2.5 0 0 1 0 5H16M8 20h8" />
    ),
  },
  {
    name: "Coffee Bean Roasting",
    description: "Jasa roasting untuk biji kopi pilihanmu.",
    icon: (
      <path d="M12 3c2 3-3 5-3 8a3 3 0 0 0 6 0c0-1.5-1-2.5-1-2.5s3 1.5 3 5a5 5 0 0 1-10 0c0-5 4-7 5-10.5Z" />
    ),
  },
  {
    name: "Community",
    description: "Ruang berkumpul untuk semua kalangan.",
    icon: (
      <>
        <circle cx="9" cy="9" r="3.5" />
        <circle cx="15.5" cy="10" r="2.8" />
        <path d="M4 20c0-3 2.5-5 5-5s5 2 5 5M14 20c.5-2.5 2-4 4-4 1.8 0 3 1.2 3.5 3" />
      </>
    ),
  },
  {
    name: "Billiard",
    description: "Coming soon.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <text
          x="12"
          y="14.5"
          textAnchor="middle"
          fontSize="6"
          fontWeight="700"
          fill="currentColor"
          stroke="none"
        >
          8
        </text>
      </>
    ),
  },
];

const CATEGORY_CARDS = [
  {
    title: "Coffee",
    category: "KOPI" as const,
    image: IMAGES.icedCoffee,
  },
  {
    title: "Non-Coffee",
    category: "NON KOPI" as const,
    image: IMAGES.matcha,
  },
  {
    title: "JajanDisini",
    category: "JAJANDISINI" as const,
    image: IMAGES.pastry,
  },
];

const GALLERY_ITEMS = [
  {
    image: IMAGES.galleryInterior,
    caption: "Sudut yang tenang untuk berlama-lama.",
    wide: false,
  },
  {
    image: IMAGES.galleryPour,
    caption: "Diseduh dengan teliti, cangkir demi cangkir.",
    wide: false,
  },
  {
    image: IMAGES.galleryFriends,
    caption: "Bareng teman, makin seru.",
    wide: true,
  },
];

// Ikon keranjang untuk tombol pesan versi ringkas.
function CartIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

// Ikon Instagram (garis, senada ikon lain) dan TikTok untuk tautan
// akun sosial media. Ikonnya yang diklik, bukan nama akunnya.
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

// Dua ikon akun sosial media yang bisa diklik. Warna mengikuti
// elemen pembungkus (currentColor).
function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className ?? ""}`}>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noreferrer"
        aria-label={`Instagram ${INSTAGRAM_HANDLE}`}
        className="transition-opacity hover:opacity-60"
      >
        <InstagramIcon className="h-6 w-6" />
      </a>
      <a
        href={TIKTOK_URL}
        target="_blank"
        rel="noreferrer"
        aria-label={`TikTok ${TIKTOK_HANDLE}`}
        className="transition-opacity hover:opacity-60"
      >
        <TikTokIcon className="h-6 w-6" />
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-white font-sans text-black">
      <header className="sticky top-0 z-20 border-b border-zinc-100 bg-white/95 text-black backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-3.5">
          <a
            href="#beranda"
            className="flex items-center gap-2.5"
            aria-label="kopidisini, kembali ke beranda"
          >
            <LogoImage
              src="/logo.png"
              alt=""
              width={1400}
              height={426}
              priority
              className="h-10 w-auto"
              fallback={
                <>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black font-display text-xl font-extrabold text-white">
                    k.
                  </span>
                  <span className="text-xl font-extrabold lowercase tracking-tight">
                    kopidisini.
                  </span>
                </>
              }
            />
          </a>
          <nav
            aria-label="Navigasi utama"
            className="hidden gap-8 text-xs font-bold uppercase tracking-[0.2em] text-zinc-600 sm:flex"
          >
            <a href="#tentang" className="nav-link hover:text-black">
              About
            </a>
            <a href="#proses" className="nav-link hover:text-black">
              Process
            </a>
            <a href="#menu" className="nav-link hover:text-black">
              Menu
            </a>
            <a href="#lokasi" className="nav-link hover:text-black">
              Location
            </a>
          </nav>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Pesan Sekarang"
            className="inline-flex min-h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-black px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-zinc-800 active:scale-95"
          >
            <CartIcon className="h-4 w-4" />
            Pesan
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero ala referensi: judul besar di kiri, video cup
            berputar 360 derajat yang dimiringkan sedikit di kanan,
            di atas latar abu sangat terang. */}
        <section id="beranda" className="overflow-hidden bg-zinc-100">
          <div className="mx-auto w-full max-w-6xl px-6 pb-14 pt-10 sm:pt-14 lg:pb-20 lg:pt-20">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <h1 className="font-head text-[3.25rem] font-extrabold leading-[0.95] tracking-[-0.02em] sm:text-7xl lg:text-8xl">
                  Kopi Enak,
                  <br />
                  Di Sini.
                </h1>
                <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-600 sm:text-lg">
                  kopidisini adalah ruang berkumpul modern: kopi premium
                  racikan barista dalam ruang yang nyaman. Untuk
                  nongkrong, bekerja, dan bersantai. Di sini, semua bisa.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <a
                    href="#menu"
                    className="inline-flex min-h-12 items-center text-base font-bold uppercase tracking-[0.12em] text-black underline decoration-zinc-400 underline-offset-8 transition-colors hover:decoration-black"
                  >
                    Lihat Menu
                  </a>
                </div>
              </Reveal>

              <Reveal
                delay={150}
                className="relative mx-auto w-full max-w-[20rem] sm:max-w-sm lg:max-w-md"
              >
                {/* Lingkaran orbit tipis di belakang cup, seperti referensi. */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 400 520"
                  fill="none"
                  className="pointer-events-none absolute -inset-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)] -rotate-[18deg] text-black"
                >
                  <ellipse
                    cx="200"
                    cy="260"
                    rx="195"
                    ry="250"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <ellipse
                    cx="200"
                    cy="260"
                    rx="165"
                    ry="215"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.35"
                  />
                </svg>
                <div className="relative rotate-[6deg]">
                  <HeroCupVideo
                    src={HERO_CUP_VIDEO_SRC}
                    webmSrc={HERO_CUP_VIDEO_WEBM_SRC}
                    poster={HERO_CUP_POSTER_SRC}
                    alt={HERO_CUP_ALT}
                  />
                </div>
                <div className="absolute bottom-8 left-0 z-10 max-w-[16rem] rounded-2xl bg-white px-5 py-4 text-black shadow-lg">
                  <p className="text-sm font-extrabold">Est. 2021</p>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                    Ruang berkumpul modern di Aceh Utara.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl px-6 pt-6 sm:pt-8">
          <dl className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              <Reveal className="rounded-3xl bg-zinc-100 p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                  Location
                </dt>
                <dd className="mt-2 text-sm leading-relaxed">{ADDRESS}</dd>
              </Reveal>
              <Reveal delay={90} className="rounded-3xl bg-zinc-100 p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                  How to Order
                </dt>
                <dd className="mt-2 text-sm leading-relaxed">
                  Take Away, Delivery, Dine In, dan Reservation.
                </dd>
              </Reveal>
              <Reveal delay={180} className="rounded-3xl bg-zinc-100 p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                  Social Media
                </dt>
                <dd className="mt-3">
                  <SocialLinks className="text-black" />
                </dd>
              </Reveal>
          </dl>
        </div>

        {/* Pilar: grid garis halus di dalam satu bingkai. */}
        <section
          aria-label="Yang kami tawarkan"
          className="mx-auto w-full max-w-6xl px-6 pb-16 sm:pb-20"
        >
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-200 lg:grid-cols-4">
            {PILLARS.map((pillar, index) => (
              <Reveal
                key={pillar.name}
                delay={index * 90}
                className="bg-white p-6 transition-colors hover:bg-zinc-100"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-black"
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
            ))}
          </div>
        </section>

        <section id="tentang" className="bg-zinc-100">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
              <Reveal className="lg:col-span-8">
                <Eyebrow>01 &middot; About Us</Eyebrow>
                <h2 className="mt-6 font-head text-3xl font-medium leading-[1.1] tracking-[-0.02em] sm:text-4xl">
                  Dari Kamar Kecil, Untuk Semua Yang Datang.
                </h2>
                <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-600">
                  <p>
                    kopidisini dibangun pada awal 2021 dari sebuah kamar kecil
                    yang disewa, dengan menu yang masih terbatas. Perlahan,
                    kamar itu tumbuh menjadi ruang F&amp;B yang nyaman dengan
                    menu yang makin menarik, lalu bertambah jasa roasting biji
                    kopi.
                  </p>
                  <p>
                    Kami percaya secangkir kopi berkualitas dan suasana yang
                    hangat adalah kombinasi sempurna untuk pengalaman sosial
                    yang berbeda. Karena itu kami membangun
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
            </div>

            <div className="mt-20">
              <Reveal>
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
                  Our Journey
                </h3>
              </Reveal>
              <ol className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    phase: "Early 2021",
                    title: "Berawal dari kamar kecil",
                    description:
                      "Sebuah kamar sewa dengan menu yang masih terbatas.",
                  },
                  {
                    phase: "Growing",
                    title: "Menjadi ruang F&B",
                    description:
                      "Menu makin menarik, suasana makin nyaman untuk berlama-lama.",
                  },
                  {
                    phase: "Today",
                    title: "Kopi & roasting",
                    description:
                      "Jasa roasting biji kopi melengkapi kedai.",
                  },
                ].map((step, index) => (
                  <li key={step.title}>
                    <Reveal delay={index * 90}>
                      <div className="h-full rounded-3xl border border-zinc-200 bg-white p-6 transition-[box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <p className="flex items-baseline justify-between gap-3">
                          <span className="font-display text-3xl font-black">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-black">
                            {step.phase}
                          </span>
                        </p>
                        <h4 className="mt-4 font-display text-lg font-bold leading-snug">
                          {step.title}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                          {step.description}
                        </p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-16">
              <Reveal>
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
                  Our Values
                </h3>
              </Reveal>
              <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {VALUES.map((value, index) => (
                  <li
                    key={value.name}
                    className={
                      index === VALUES.length - 1
                        ? "col-span-2 sm:col-span-1"
                        : undefined
                    }
                  >
                    <Reveal delay={index * 80}>
                      <div className="h-full rounded-3xl bg-black p-5 text-white">
                        <span className="font-display text-lg font-extrabold text-white">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h4 className="mt-3 text-base font-bold">
                          {value.name}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                          {value.description}
                        </p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <ProcessSection />

        <section
          aria-labelledby="signature-heading"
          className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24"
        >
          <Reveal>
            <Eyebrow>03 &middot; Signature</Eyebrow>
            <h2
              id="signature-heading"
              className="mt-6 font-head text-3xl font-medium leading-[1.1] tracking-[-0.02em] sm:text-4xl"
            >
              Most Wanted.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-600">
              Racikan andalan kami, dari kopi sampai cokelat signature.
            </p>
          </Reveal>
          <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {SIGNATURE_ITEMS.map((item, index) => {
              const image = imageForMenuItem(item);
              return (
                <li
                  key={item.name}
                  className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-[box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Reveal delay={index * 90}>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={image.src}
                        alt={item.name}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-black px-2.5 py-1 text-[11px] font-bold text-white shadow-sm">
                        Signature
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-base font-bold leading-snug sm:text-lg">
                        {item.name}
                      </h3>
                      <p className="mt-2 whitespace-nowrap text-sm font-bold tabular-nums sm:text-base">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </section>

        <section
          aria-labelledby="gallery-heading"
          className="mx-auto w-full max-w-6xl px-6 pb-16 sm:pb-24"
        >
          <Reveal>
            <Eyebrow>04 &middot; Ambience</Eyebrow>
            <h2
              id="gallery-heading"
              className="mt-6 max-w-xl font-head text-3xl font-medium leading-[1.1] tracking-[-0.02em] sm:text-4xl"
            >
              A Place To Linger.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-zinc-600">
              Cahaya hangat, meja kayu, dan aroma kopi. Tempat yang enak
              untuk berlama-lama, sendiri maupun bareng teman.
            </p>
          </Reveal>
          <ul className="mt-12 grid grid-cols-2 gap-4">
            <li className="col-span-2">
              <Reveal>
                <figure className="group">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
                    <Image
                      src={IMAGES.galleryWide.src}
                      alt={IMAGES.galleryWide.alt}
                      fill
                      sizes="(max-width: 1152px) 100vw, 1152px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </figure>
              </Reveal>
            </li>
            {GALLERY_ITEMS.map((item, index) => (
              <li key={item.caption} className={item.wide ? "col-span-2" : undefined}>
                <Reveal delay={index * 100}>
                  <figure className="group">
                    <div
                      className={
                        item.wide
                          ? "relative aspect-[16/9] overflow-hidden rounded-3xl"
                          : "relative aspect-[4/3] overflow-hidden rounded-3xl"
                      }
                    >
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        sizes={
                          item.wide
                            ? "(max-width: 1152px) 100vw, 1152px"
                            : "(max-width: 640px) 50vw, 50vw"
                        }
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
        </section>

        <section
          aria-labelledby="categories-heading"
          className="mx-auto w-full max-w-6xl px-6 pb-16 sm:pb-24"
        >
          <Reveal>
            <Eyebrow>05 &middot; Categories</Eyebrow>
            <h2
              id="categories-heading"
              className="mt-6 font-head text-3xl font-medium leading-[1.1] tracking-[-0.02em] sm:text-4xl"
            >
              Start With A Category.
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-3 sm:grid-cols-3 sm:gap-4">
            {CATEGORY_CARDS.map((card, index) => {
              const count = MENU_ITEMS.filter(
                (item) => item.category === card.category,
              ).length;
              return (
                <li key={card.category}>
                  <Reveal delay={index * 100}>
                    <a
                      href="#menu"
                      className="group flex items-center gap-4 rounded-3xl border-2 border-black bg-white p-4 transition-colors duration-300 hover:bg-black hover:text-white"
                    >
                      <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl">
                        <Image
                          src={card.image.src}
                          alt={card.image.alt}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-display text-xl font-bold leading-snug">
                          {card.title}
                        </span>
                        <span className="mt-0.5 block text-sm font-bold text-zinc-500 transition-colors group-hover:text-zinc-300">
                          {count} menu
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-lg text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black"
                      >
                        &rarr;
                      </span>
                    </a>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </section>

        <MenuSection />

        <section id="lokasi" className="mx-auto w-full max-w-6xl px-6 pb-16 sm:pb-24">
          <Reveal>
            <Eyebrow>07 &middot; Visit Us</Eyebrow>
            <h2 className="mt-6 max-w-xl font-head text-3xl font-medium leading-[1.1] tracking-[-0.02em] sm:text-4xl">
              Drop By, Or Order From Anywhere.
            </h2>
          </Reveal>
          <div className="mt-12 grid overflow-hidden rounded-[2rem] border-2 border-black lg:grid-cols-2">
            <Reveal className="bg-black p-6 text-white sm:p-10">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                Our Address
              </h3>
              <address className="mt-4 font-display text-2xl font-bold leading-snug not-italic">
                {ADDRESS}, Indonesia
              </address>
              <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-400">
                Datang untuk kopinya, tinggal untuk suasananya. Suasana kami
                hangat, modern, dan ramah untuk semua kalangan.
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-400">
                Jam buka akan diumumkan di sini. Untuk kabar terbaru, pantau
                akun kami:
              </p>
              <SocialLinks className="mt-4 text-white" />
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center rounded-full border-2 border-white px-7 py-3 text-base font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-black active:scale-95"
                >
                  Lihat di Google Maps
                </a>
              </div>
            </Reveal>
            <Reveal delay={120} className="bg-white p-6 sm:p-10">
              <ul className="divide-y divide-zinc-200">
                {ORDER_MODES.map((mode, index) => (
                  <li key={mode.name} className="flex gap-6 py-6 first:pt-0 last:pb-0">
                    <span className="font-display text-lg font-extrabold text-black">
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
        </section>

        {/* Billiard sebagai proyek berikutnya — tanpa detail fasilitas
            sampai pemilik memastikan konsepnya. */}
        <section
          aria-label="Billiard segera hadir"
          className="mx-auto w-full max-w-6xl px-6 pb-16 sm:pb-24"
        >
          <Reveal>
            <div className="rounded-[2rem] bg-black px-6 py-12 text-center text-white sm:px-10 sm:py-16">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
                08 &middot; Coming Soon
              </p>
              <h2 className="mt-6 font-head text-3xl font-medium leading-[1.1] tracking-[-0.02em] sm:text-4xl">
                Billiard.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-zinc-400">
                Billiard segera hadir di kopidisini sebagai proyek
                berikutnya. Nantikan kabarnya — untuk sekarang, nikmati
                dulu kopinya.
              </p>
              <p className="mt-8 inline-flex rounded-full border border-white/40 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em]">
                Segera Hadir
              </p>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="bg-black text-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <LogoImage
                src="/logo.png"
                alt="Logo kopidisini"
                width={1400}
                height={426}
                className="h-auto w-full max-w-xs"
                fallback={
                  <p className="font-display text-5xl font-extrabold lowercase tracking-[-0.02em] sm:text-6xl">
                    kopidisini.
                  </p>
                }
              />
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-zinc-400">
                Premium coffee in Aceh Utara
              </p>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-zinc-400">
                {ADDRESS}, Indonesia. Pemesanan dilayani lewat halaman
                pesanan kami.
              </p>
            </div>
            <nav
              aria-label="Tautan footer"
              className="grid grid-cols-2 gap-8 text-sm sm:gap-12 lg:col-span-7 lg:justify-items-end"
            >
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                  Explore
                </h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a href="#tentang" className="hover:underline">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#proses" className="hover:underline">
                      Process
                    </a>
                  </li>
                  <li>
                    <a href="#menu" className="hover:underline">
                      Menu
                    </a>
                  </li>
                  <li>
                    <a href="#lokasi" className="hover:underline">
                      Location
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                  Find Us
                </h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <SocialLinks className="text-white" />
                  </li>
                  <li>
                    <a href={MAPS_URL} target="_blank" rel="noreferrer" className="hover:underline">
                      Google Maps
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="mt-14 flex flex-col gap-3 border-t border-zinc-800 pt-8 text-xs leading-relaxed text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; 2026 kopidisini. Contoh tampilan (dummy) &mdash; jam
              buka, foto asli, dan detail lain akan dilengkapi.
            </p>
            <p className="font-bold tracking-[0.25em] text-white">
              #SEMUABISADISINI
            </p>
          </div>
        </div>
      </footer>

      <BottomNav />
      <div aria-hidden="true" className="h-14 sm:hidden" />
    </div>
  );
}
