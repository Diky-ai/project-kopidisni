"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useInView, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { PROCESS_VIDEOS } from "@/lib/site";

// Satu kartu langkah proses: video yang mulai berputar saat masuk
// layar dan berhenti saat keluar layar, supaya tidak membebani
// perangkat. Kalau pengguna meminta gerakan dikurangi, yang tampil
// hanya foto posternya.
function ProcessVideo({
  src,
  poster,
  posterAlt,
}: {
  src: string;
  poster: string;
  posterAlt: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(videoRef, { margin: "-10% 0px -10% 0px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;
    if (inView) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [inView, reduceMotion]);

  if (reduceMotion) {
    return (
      <Image
        src={poster}
        alt={posterAlt}
        fill
        sizes="(max-width: 640px) 100vw, 33vw"
        className="object-cover"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      aria-label={posterAlt}
      muted
      loop
      playsInline
      preload="metadata"
      className="h-full w-full object-cover"
    />
  );
}

export default function ProcessSection() {
  return (
    <section
      id="proses"
      aria-labelledby="process-heading"
      className="bg-black text-white"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
              <span aria-hidden="true" className="h-px w-10 bg-white" />
              02 &middot; Our Process
            </p>
            <h2
              id="process-heading"
              className="mt-6 font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-4xl"
            >
              From Bean To Cup.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-lg text-base leading-relaxed text-zinc-400 lg:ml-auto">
              Setiap cangkir melewati tiga langkah yang kami jaga:
              di-roasting, digiling, lalu diekstraksi oleh barista.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {PROCESS_VIDEOS.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 110}>
                <article className="group overflow-hidden rounded-3xl bg-zinc-900 ring-1 ring-zinc-800 transition-[box-shadow,translate] duration-300 hover:-translate-y-1 hover:ring-zinc-600">
                  <div className="relative aspect-video overflow-hidden bg-zinc-800">
                    <ProcessVideo
                      src={step.src}
                      poster={step.poster}
                      posterAlt={step.posterAlt}
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 font-display text-[11px] font-bold text-white backdrop-blur-sm">
                      {step.step}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-bold leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {step.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-zinc-500">
          Video &amp; foto ilustrasi dari Pexels.
        </p>
      </div>
    </section>
  );
}
