"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

// Logo resmi kopidisini (file PNG di public/, ditambahkan lewat git).
// Kalau file logonya belum ada, tampilkan fallback teks supaya header
// dan footer tidak pernah terlihat rusak.
export default function LogoImage({
  src,
  alt,
  width,
  height,
  className,
  priority,
  fallback,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  fallback: ReactNode;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return <>{fallback}</>;
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
