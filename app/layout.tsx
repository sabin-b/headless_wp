import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  adjustFontFallback: false,
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Headless Wp",
  description: "Built by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", inter.variable)}>
        {children}
      </body>
    </html>
  );
}
