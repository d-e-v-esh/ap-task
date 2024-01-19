import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "./components/Footer";
import { Banner } from "./components/Banner";
import { InnerNavbar } from "./components/InnerNavbar";
import { Navbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });
export const devanagari = Noto_Sans_Devanagari({ subsets: ["devanagari"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "relative h-full font-sans antialiased",
          inter.className
        )}>
        <main className="flex min-h-screen w-full flex-col justify-between relative">
          <Navbar />
          <Banner />
          <InnerNavbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
