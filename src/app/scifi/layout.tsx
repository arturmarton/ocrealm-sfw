import type { Metadata } from "next";
import localFont from "next/font/local";
import { Gugi } from "next/font/google";
import "./scifi.css";
import type { ReactNode } from "react";
import Background from "@components/scifi/Background";
import Header from "@components/scifi/Header";
import Footer from "@components/scifi/Footer";


const nebulaFont = localFont({
  src: "../../../public/fonts/Nebula.otf",
  variable: "--font-nebula",
  display: "swap",
});

const gugiFont = Gugi({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gugi",
  display: "swap",
});

const lubriFont = localFont({
  src: "../../../public/fonts/Lubrifont.woff",
  weight: "400",
  variable: "--font-lubri",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OCRealm",
    template: "%s | OCRealm",
  },
  description: "",
  openGraph: {
    title: "%s | OCRealm",
    description: "",
    url: "https://ocrealm.ovh/",
    siteName: "OCRealm",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${nebulaFont.variable} ${gugiFont.variable} ${lubriFont.variable} `}>
        <div className="relative min-h-screen overflow-x-hidden bg-background font-game text-primary">
          <Background />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}