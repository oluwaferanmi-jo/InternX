// src/app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/navbar";
import SmoothScroll from "@/components/LenisProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">
       < Navbar/>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
           <SmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
