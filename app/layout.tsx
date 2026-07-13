import type { Metadata } from "next";
import { Unbounded, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Unbounded({
  subsets: ["latin"],
  weight: ["400", "600", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "REA4V-Lab — GitHub organization overview",
  description:
    "A tour of every public repository under github.com/REA4V-Lab: SpigBan, Rinthy, rinthy-website, and Website.",
  metadataBase: new URL("https://rea4v-lab.vercel.app"),
  openGraph: {
    title: "REA4V-Lab",
    description:
      "A tour of every public repository under github.com/REA4V-Lab.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>
        <div className="lab-grid" />
        <div className="grain" />
        <div className="crt-scan" />
        {children}
      </body>
    </html>
  );
}
