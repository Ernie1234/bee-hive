import type { Metadata } from "next";
import { Exo, Raleway } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

const exo = Exo({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-exo", //css variables name
});

const raleway = Raleway({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "The Hive Incubator",
  description:
    "The Hive Incubator in Akure, Nigeria, strives to bridge a market void by offering extensive assistance and resources to up-and-coming entrepreneurs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exo.variable} ${raleway.variable} bg-foreground text-background`}
      >
        {children}
      </body>
    </html>
  );
}
