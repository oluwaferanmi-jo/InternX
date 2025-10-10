// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/about", label: "About" },
  { href: "/tracks", label: "Tracks" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [overTransparentSection, setOverTransparentSection] = useState(false);
  // optional: track whether the marked section declares 'dark' or 'light'
  const [transparentSectionIsDark, setTransparentSectionIsDark] = useState(true);

  // scroll handler (scrolled state)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // lock body scroll while drawer open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : original;
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // check overlap between header and the first element with data-nav="transparent"
  useEffect(() => {
    let rafId = 0;

    const checkOverlap = () => {
      rafId = requestAnimationFrame(() => {
        const headerEl = headerRef.current;
        if (!headerEl) return setOverTransparentSection(false);

        const target = document.querySelector<HTMLElement>('[data-nav="transparent"]');
        if (!target) {
          setOverTransparentSection(false);
          return;
        }

        // optional: read declared background preference
        const declaredBg = target.getAttribute("data-nav-bg");
        setTransparentSectionIsDark(declaredBg !== "light"); // default dark if not specified

        const headerRect = headerEl.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();

        // Overlap check: true when header intersects the target's bounding rect
        const overlaps = targetRect.bottom > headerRect.top && targetRect.top < headerRect.bottom;
        setOverTransparentSection(Boolean(overlaps));
      });
    };

    // initial check
    checkOverlap();

    // listen to scroll and resize
    window.addEventListener("scroll", checkOverlap, { passive: true });
    window.addEventListener("resize", checkOverlap);

    // also observe DOM changes of target (in case it's mounted later)
    const mo = new MutationObserver(checkOverlap);
    mo.observe(document.documentElement, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", checkOverlap);
      window.removeEventListener("resize", checkOverlap);
      mo.disconnect();
    };
  }, []);

  /*
    Header decision:
    - If scrolled -> solid (always)
    - If not scrolled:
      - If overTransparentSection && transparentSectionIsDark -> header transparent (light text)
      - Else -> solid (dark background for header)
  */
  const headerBase = "fixed inset-x-0 top-0 z-50 transition-colors duration-200";
  const headerSolid = "bg-slate-950 text-white border-b border-white/6 shadow-sm";
  const headerTransparent = "bg-transparent text-white";

  const useTransparent = !scrolled && overTransparentSection && transparentSectionIsDark;
  const headerClass = useTransparent ? headerTransparent : headerSolid;

  return (
    <header ref={headerRef} className={`${headerBase} ${headerClass}`}>
      <div className="mx-auto flex h-14 md:h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-wide" aria-label="InternX home">
          <span
            className={`inline-flex h-6 w-6 items-center justify-center rounded-md ${
              useTransparent ? "bg-white/10 text-white" : "bg-primary/20 text-primary"
            }`}
          >
            X
          </span>

          <span className={useTransparent ? "text-white" : "text-white"}>InternX</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${useTransparent ? "text-white/90 hover:text-white" : "text-white/90 hover:text-white"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right actions (desktop) */}
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className="text-sm text-white/90 hover:text-white">
            Log in
          </Link>

          <Button asChild className="rounded-full px-5 py-2 bg-primary hover:bg-primary/90">
            <Link href="/signup">Join Cohort</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-md border transition-colors ${
              useTransparent ? "border-white/20 bg-white/10 text-white" : "border-white/10 bg-white/5 text-white"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile overlay + drawer */}
      <div className={`fixed inset-0 z-50 transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} aria-hidden={!open}>
        <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
        <aside
          role="dialog"
          aria-modal="true"
          className={`absolute right-0 top-0 h-full w-[87%] max-w-sm p-6 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          } ${useTransparent ? "bg-transparent text-white" : "bg-slate-950 text-white"}`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/20 text-primary">X</span>
              <span className="text-lg font-semibold">InternX</span>
            </div>

            <button aria-label="Close menu" onClick={() => setOpen(false)} className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-transparent bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-2">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-white/5">
                {item.label}
              </Link>
            ))}

            <div className="my-4 h-px bg-white/6" />

            <Link href="/login" onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-white/5">
              Log in
            </Link>

            <div>
              <Button asChild className="rounded-full px-4 py-2 w-full">
                <Link href="/signup" onClick={() => setOpen(false)} className="w-full block text-center">
                  Join Cohort
                </Link>
              </Button>
            </div>
          </nav>
        </aside>
      </div>
    </header>
  );
}
