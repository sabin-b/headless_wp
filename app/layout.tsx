import { getCtaProperties } from "@/actions/cta-action";
import Navbar from "@/components/main-header";
import { getMainMenus } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getSiteLogo } from "@/actions/site-logo";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menus = await getMainMenus();
  const { __typename, ...ctaProps } = await getCtaProperties();
  const siteLogo = await getSiteLogo();
  // console.log(ctaProps);
  // console.log(siteLogo)
  // console.log(menus);
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", inter.variable)}>
        <Navbar siteLogo={siteLogo} ctaprops={ctaProps} menus={menus} />
        {children}
      </body>
    </html>
  );
}
