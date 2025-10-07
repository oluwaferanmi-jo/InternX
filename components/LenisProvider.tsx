// components/SmoothScroll.tsx
'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export default function SmoothScroll() {
  useEffect(() => {
    const wrapper = document.getElementById('enroll-lenis-wrapper')

    // base options same as yours
    const options: any = {
      autoRaf: true,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
    }

    if (wrapper) {
      // Some Lenis builds accept `wrapper` and `content` nodes — set them
      options.wrapper = wrapper
      // If the scrollable content is the left column, point to it. Here we use the first child as content fallback.
      options.content = (wrapper.firstElementChild as HTMLElement) ?? wrapper
    }

    const lenis = new Lenis(options)

    // No manual RAF loop needed because autoRaf: true
    // But if you ever disable autoRaf, use:
    // function raf(t: number) { lenis.raf(t); requestAnimationFrame(raf) }
    // requestAnimationFrame(raf)

    // Expose in dev for quick debugging
    if (process.env.NODE_ENV === 'development') (window as any).lenis = lenis

    return () => {
      lenis.destroy()
      if ((window as any).lenis) delete (window as any).lenis
    }
  }, [])

  return null
}
