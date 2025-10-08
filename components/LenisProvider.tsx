// src/components/LenisProvider.tsx
"use client";

import { useEffect, useRef } from "react";
import Lenis, { type LenisOptions } from "lenis";
import "lenis/dist/lenis.css";
import { usePathname } from "next/navigation";

/**
 * Helper that waits for an element matching `selector` to appear.
 * Tries up to `attempts` times, waiting `intervalMs` between tries.
 */
async function waitForElement(
  selector: string,
  attempts = 20,
  intervalMs = 100
): Promise<Element | null> {
  for (let i = 0; i < attempts; i++) {
    const el = document.querySelector(selector);
    if (el) return el;
    // wait
    // eslint-disable-next-line no-await-in-loop
    await new Promise((res) => setTimeout(res, intervalMs));
  }
  return null;
}

export default function LenisProvider(): null {
  const pathname = usePathname(); // triggers effect on navigation
  const lenisRef = useRef<Lenis | null>(null);
  const wrapperSelector = "#enroll-lenis-wrapper";

  useEffect(() => {
    let destroyed = false;

    // Build base options as a Partial to be safe with different Lenis versions
    const baseOptions: Partial<LenisOptions> = {
      lerp: 0.06,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      autoResize: true,
      orientation: "vertical",
      gestureOrientation: "vertical",
    };

    // init function that optionally accepts wrapper/content
    function initLenis(opts: Partial<LenisOptions>) {
      // destroy previous if exists
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }

      // cast is safe because runtime object will match Lenis expectations
      const instance = new Lenis(opts as LenisOptions);

      // RAF loop in case this build requires manual raf (most do expose raf)
      function raf(t: number) {
        (instance as unknown as { raf?: (time: number) => void }).raf?.(t);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      lenisRef.current = instance;

      if (process.env.NODE_ENV === "development") {
        (window as unknown as { lenis?: Lenis }).lenis = instance;
      }
    }

    // Primary startup: try to detect wrapper first (useful for enrollment page)
    (async () => {
      // Wait a bit for the page to mount — if wrapper exists, we prefer wrapper-mode
      const wrapper = await waitForElement(wrapperSelector, 30, 100); // ~3s max

      if (destroyed) return;

      if (wrapper) {
        // If wrapper found, init Lenis with wrapper/content
        const finalOpts: Record<string, unknown> = { ...baseOptions };
        finalOpts.wrapper = wrapper;
        finalOpts.content = (wrapper.firstElementChild as Element) ?? wrapper;
        initLenis(finalOpts as Partial<LenisOptions>);
      } else {
        // No wrapper found: init Lenis for the whole document (global)
        initLenis(baseOptions);
      }
    })();

    // Re-check on route change (pathname changes trigger this effect)
    // This ensures if user navigates to /enroll via Link, we will detect wrapper and re-init.
    // We rely on the effect to re-run because `pathname` is a dependency below.

    return () => {
      destroyed = true;
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      if (process.env.NODE_ENV === "development") {
        const w = window as unknown as { lenis?: Lenis };
        if (w.lenis) delete w.lenis;
      }
    };
    // Re-run on pathname change so provider can re-detect wrapper after client nav
  }, [pathname]);

  return null;
}
