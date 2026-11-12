"use client";

import Image from "next/image";
import { useState } from "react";

// Foto cup asli kopidisini (file JPG di public/, ditambahkan lewat git).
// Kalau filenya belum ada, tampilkan foto ilustrasi Pexels supaya
// halaman tidak pernah terlihat rusak.
export default function CupImage({
  src,
  fallbackSrc,
  alt,
  fill,
  width,
  height,
  sizes,
  className,
  priority,
}: {
  src: string;
  fallbackSrc: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const current = failed ? fallbackSrc : src;
  if (fill) {
    return (
      <Image
        src={current}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={className}
        onError={() => setFailed(true)}
      />
    );
  }
  return (
    <Image
      src={current}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
