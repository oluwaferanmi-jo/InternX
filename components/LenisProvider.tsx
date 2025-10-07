// src/components/LenisProvider.tsx
"use client";

import { useEffect } from "react";
import Lenis, { type LenisOptions } from "lenis";
import "lenis/dist/lenis.css";

export default function LenisProvider(): null {
  useEffect(() => {
    // Optional: wrapper id used when you want Lenis to control a specific container.
    const wrapperEl = document.getElementById("enroll-lenis-wrapper");

    // Base config as a partial of LenisOptions (safe w/ TS)
    const baseOptions: Partial<LenisOptions> = {
      // smoothing using lerp gives continuous inertia
      lerp: 0.06,
      // fallback duration/easing for programmatic scrolls
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      autoResize: true,
      orientation: "vertical",
      gestureOrientation: "vertical",
    };

    // Build final options object (we'll add wrapper/content only if we have elements)
    const finalOpts = { ...baseOptions } as Record<string, unknown>;

    if (wrapperEl) {
      // assign wrapper/content only when the element exists (never assign null)
      finalOpts.wrapper = wrapperEl;
      finalOpts.content = (wrapperEl.firstElementChild as Element) ?? wrapperEl;
    }

    // Cast to LenisOptions when calling constructor (runtime shape is correct)
    const lenis = new Lenis(finalOpts as LenisOptions);

    // Use an RAF loop that calls lenis.raf if available on this build
    function raf(time: number) {
      // lenis may expose raf; call it via an unknown-cast to avoid `any`
      (lenis as unknown as { raf?: (t: number) => void }).raf?.(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Expose for dev debugging
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
