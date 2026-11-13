"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

// Bilah tipis di atas layar yang terisi mengikuti posisi scroll.
// Disembunyikan kalau pengguna meminta gerakan dikurangi.
export default function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  if (reduceMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-30 h-0.5 origin-left bg-kopi"
    />
  );
}
