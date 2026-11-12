import Renderer from "@/components/builder/Renderer";
import examplePage from "@/data/example-page.json";
import type { PageData } from "@/lib/types";

// Data halaman contoh. Bentuk JSON-nya sama persis dengan PageData,
// jadi konversi ini aman. Coba ubah teks di example-page.json,
// simpan, lalu halaman ini ikut berubah.
const pageData = examplePage as PageData;

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <Renderer blocks={pageData.blocks} />
      <footer className="mt-16 border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800">
        Halaman ini dirender dari{" "}
        <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono dark:bg-zinc-800">
          src/data/example-page.json
        </code>
        . Ubah teksnya di file itu, simpan, lalu refresh halaman ini.
      </footer>
    </main>
  );
}
