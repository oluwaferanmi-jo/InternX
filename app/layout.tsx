// src/app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">
       < Navbar/>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
