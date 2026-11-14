"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { PROCESS_VIDEOS } from "@/lib/site";

// Satu baris proses: video full-bleed yang digerakkan oleh scroll —
// posisi scroll menentukan frame videonya (scrub), jadi video hanya
// bergerak saat pengguna meng-scroll. Tidak perlu tools tambahan:
// pendengar scroll biasa + requestAnimationFrame sudah cukup.
// Kalau pengguna meminta gerakan dikurangi, yang tampil hanya foto
// posternya.
function ProcessVideo({
  src,
  poster,
  posterAlt,
}: {
  src: string;
  poster: string;
  posterAlt: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container || reduceMotion) return;

    const syncToScroll = () => {
      const duration = video.duration;
      if (!Number.isFinite(duration) || duration <= 0) return;
      const rect = container.getBoundingClientRect();
      const total = rect.height + window.innerHeight;
      const progress = Math.min(
        Math.max((window.innerHeight - rect.top) / total, 0),
        1,
      );
      const target = progress * duration;
      if (Math.abs(video.currentTime - target) > 0.04) {
        video.currentTime = target;
      }
    };

    let raf = 0;
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(() => {
        raf = 0;
        syncToScroll();
      });
    };

    syncToScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduceMotion]);

  return (
    <div ref={containerRef} className="absolute inset-0 bg-zinc-800">
      {reduceMotion ? (
        <Image
          src={poster}
          alt={posterAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          aria-label={posterAlt}
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={() => {
            const video = videoRef.current;
            const container = containerRef.current;
            if (!video || !container || !Number.isFinite(video.duration)) {
              return;
            }
            const rect = container.getBoundingClientRect();
            const total = rect.height + window.innerHeight;
            const progress = Math.min(
              Math.max((window.innerHeight - rect.top) / total, 0),
              1,
            );
            video.currentTime = progress * video.duration;
          }}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section
      id="proses"
      aria-labelledby="process-heading"
      className="bg-black pb-16 text-white sm:pb-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6 pt-16 sm:pt-24">
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
              <span aria-hidden="true" className="h-px w-10 bg-white" />
              02 &middot; Our Process
            </p>
            <h2
              id="process-heading"
              className="mt-6 font-head text-3xl font-medium leading-[1.1] tracking-[-0.02em] sm:text-4xl"
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
      </div>

      <ul className="mt-12 flex flex-col">
        {PROCESS_VIDEOS.map((step) => (
          <li
            key={step.title}
            className="relative h-[60vh] min-h-[420px] w-full overflow-hidden sm:h-[70vh]"
          >
            <ProcessVideo
              src={step.src}
              poster={step.poster}
              posterAlt={step.posterAlt}
            />
            <div aria-hidden="true" className="absolute inset-0 bg-black/30" />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"
            />
            <span className="absolute left-4 top-4 rounded-full bg-black/70 px-2.5 py-1 font-display text-[11px] font-bold text-white backdrop-blur-sm sm:left-6 sm:top-6">
              {step.step}
            </span>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/90 drop-shadow-md sm:text-sm">
                  {step.overlayEyebrow}
                </p>
                <h3 className="mx-auto mt-4 max-w-3xl font-overlay text-4xl leading-[1.05] text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
                  {step.overlayHeadline}
                </h3>
              </Reveal>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
