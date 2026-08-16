import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import PointerField from "@/components/site/PointerField";
import RevealController from "@/components/site/RevealController";
import { siteContent, siteUrl } from "@/content/site";

import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteContent.title,
    template: `%s | ${siteContent.name}`,
  },
  description: siteContent.description,
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "48x48" },
      { url: "/site-icon-1024.png", type: "image/png", sizes: "1024x1024" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable}`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        <PointerField />
        <RevealController />
      </body>
    </html>
  );
}
