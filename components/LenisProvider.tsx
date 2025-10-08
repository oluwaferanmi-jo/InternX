// src/components/LenisProvider.tsx
"use client";

import { useEffect } from "react";
import Lenis, { type LenisOptions } from "lenis";
import "lenis/dist/lenis.css";

export default function LenisProvider(): null {
  useEffect(() => {
    // Don't use a wrapper - let Lenis control the window scroll instead
    const baseOptions: Partial<LenisOptions> = {
      lerp: 0.06,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      autoResize: true,
      orientation: "vertical",
      gestureOrientation: "vertical",
    };

    const lenis = new Lenis(baseOptions as LenisOptions);

    function raf(time: number) {
      (lenis as unknown as { raf?: (t: number) => void }).raf?.(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (process.env.NODE_ENV === "development") {
      (window as unknown as { lenis?: Lenis }).lenis = lenis;
    }

    return () => {
      lenis.destroy();
      if (process.env.NODE_ENV === "development") {
        const w = window as unknown as { lenis?: Lenis };
        if (w.lenis) delete w.lenis;
      }
    };
  }, []);

  return null;
}