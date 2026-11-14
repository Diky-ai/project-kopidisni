"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useInView, useReducedMotion } from "framer-motion";

// Video cup hero: render 3D cup berputar 360 derajat (file dari
// pemilik) yang mulai berputar saat masuk layar dan berhenti saat
// keluar layar. Latar videonya dibaurkan ke latar hero (zinc-100)
// lewat mix-blend-multiply + feather di tepinya. WebM dipakai dulu
// (lebih tajam di ukuran file yang sama), MP4 sebagai cadangan.
// Kalau pengguna meminta gerakan dikurangi, yang tampil hanya foto
// posternya.
export default function HeroCupVideo({
  src,
  webmSrc,
  poster,
  alt,
}: {
  src: string;
  webmSrc: string;
  poster: string;
  alt: string;
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

  return (
    <div className="relative">
      {reduceMotion ? (
        <Image
          src={poster}
          alt={alt}
          width={1040}
          height={1440}
          priority
          className="hero-cup-media h-auto w-full"
        />
      ) : (
        <video
          ref={videoRef}
          poster={poster}
          aria-label={alt}
          muted
          loop
          playsInline
          preload="auto"
          className="hero-cup-media h-auto w-full"
        >
          <source src={webmSrc} type="video/webm" />
          <source src={src} type="video/mp4" />
        </video>
      )}
      <div
        aria-hidden="true"
        className="hero-cup-feather pointer-events-none absolute inset-0"
      />
    </div>
  );
}
