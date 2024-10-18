import type { Metadata } from "next";
import { Lilita_One, Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/nav-bar";

const inter = Montserrat({ subsets: ["latin"], weight: ["500", "600", "700"] });

const lilitaFont = Lilita_One({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Next",
  description:
    "Curated recipes based on 10+ different cuisines such as Indian, American, Asian and more.",
  /* - added auto
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  */
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${lilitaFont.className}`}>
        <>
          <NavBar />
          {children}
        </>
      </body>
    </html>
  );
}
