// src/app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="
          relative min-h-screen font-sans antialiased
          bg-gradient-to-b from-slate-900 via-slate-950 to-black text-foreground
          overflow-x-hidden                         /* <-- allow vertical scroll */
        "
      >
        {/* Decorative: faint grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0
                     [mask-image:radial-gradient(70%_70%_at_50%_40%,black,transparent)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), " +
              "linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px, 40px 40px",
            backgroundPosition: "center",
          }}
        />
        {/* Decorative: cyan arc (fixed + clipped, no horizontal scroll) */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div
            className="
              absolute top-20 right-0 translate-x-[200px]
              h-[600px] w-[600px] rounded-full blur-3xl opacity-30
            "
            style={{
              background:
                "conic-gradient(from 200deg at 50% 50%, rgba(6,182,212,.65), rgba(139,92,246,.25), transparent 70%)",
            }}
          />
        </div>



        <div className="relative z-10">
          <Navbar />
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
