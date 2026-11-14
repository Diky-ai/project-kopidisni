// Navigasi bawah khusus HP (gaya aplikasi/PWA). Hanya tampil di
// layar kecil; di layar besar navigasi atas yang dipakai.
const ITEMS = [
  {
    href: "#beranda",
    label: "Home",
    icon: (
      <path d="M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5" />
    ),
  },
  {
    href: "#tentang",
    label: "About",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5M12 8h.01" />
      </>
    ),
  },
  {
    href: "#menu",
    label: "Menu",
    icon: (
      <path d="M5 4h11v7a5 5 0 0 1-10 0V4ZM16 6h2.5a2.5 2.5 0 0 1 0 5H16M8 20h8" />
    ),
  },
  {
    href: "#lokasi",
    label: "Location",
    icon: (
      <>
        <path d="M12 21s-6.5-5.4-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.6 12 21 12 21Z" />
        <circle cx="12" cy="10.5" r="2.2" />
      </>
    ),
  },
];

export default function BottomNav() {
  return (
    <nav
      aria-label="Bottom navigation"
      className="fixed inset-x-0 bottom-0 z-20 border-t border-zinc-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur sm:hidden"
    >
      <ul className="grid grid-cols-4">
        {ITEMS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="flex min-h-14 flex-col items-center justify-center gap-1 px-1 text-[11px] font-bold text-zinc-700 transition-transform active:scale-90"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                {item.icon}
              </svg>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
