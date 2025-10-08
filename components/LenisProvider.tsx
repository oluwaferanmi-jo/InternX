// src/components/LenisProvider.tsx
"use client";

import { useEffect } from "react";
import Lenis, { type LenisOptions } from "lenis";
import "lenis/dist/lenis.css";

export default function LenisProvider(): null {
  useEffect(() => {
    const wrapperEl = document.getElementById("enroll-lenis-wrapper");
    
    // Detect if we're on mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    const baseOptions: Partial<LenisOptions> = {
      lerp: 0.05,
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 0.9,
      // Increase touch multiplier on mobile for better response
      touchMultiplier: isMobile ? 2 : 1,
      autoResize: true,
      orientation: "vertical",
      gestureOrientation: "vertical",
      // Prevent Lenis from blocking native scroll on mobile
      prevent: (node: Element) => {
        // Don't prevent scroll on mobile devices
        if (isMobile || isTouch) {
          return false;
        }
        return node.hasAttribute('data-lenis-prevent');
      },
    };

    const finalOpts = { ...baseOptions } as Record<string, unknown>;

    if (wrapperEl) {
      finalOpts.wrapper = wrapperEl;
      finalOpts.content = (wrapperEl.firstElementChild as Element) ?? wrapperEl;
      
      // Add touch-action CSS for mobile
      if (isMobile || isTouch) {
        wrapperEl.style.touchAction = 'pan-y';
        (wrapperEl.style as any).webkitOverflowScrolling = 'touch';
      }
    }

    const lenis = new Lenis(finalOpts as LenisOptions);

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