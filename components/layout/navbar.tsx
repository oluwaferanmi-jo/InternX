"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const nav = [
  { href: "/about", label: "About" },
  { href: "/tracks", label: "Tracks" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-colors",
        scrolled
          ? "backdrop-blur supports-[backdrop-filter]:bg-background/50 border-b border-white/10"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-wide"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-primary/20 text-primary">
            X
          </span>
          <span className="text-foreground">InternX</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/75 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="text-sm text-foreground/75 hover:text-foreground"
          >
            Log in
          </Link>
          <Button
            asChild
            className="rounded-full px-5 shadow-[0_0_0_1px_rgba(6,182,212,.35)_inset,0_8px_30px_rgba(6,182,212,.2)] bg-primary hover:bg-primary/90"
          >
            <Link href="/signup">Join Cohort</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              aria-label="Open menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5"
            >
              <Menu className="h-5 w-5 text-foreground" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-primary/20 text-primary">
                    X
                  </span>
                  InternX
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-foreground/80 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="mt-2 h-px bg-white/10" />

                <Link
                  href="/login"
                  className="text-sm text-foreground/80 hover:text-foreground"
                >
                  Log in
                </Link>
                <Button
                  asChild
                  className="mt-1 rounded-full bg-primary hover:bg-primary/90"
                >
                  <Link href="/signup">Join Cohort</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
