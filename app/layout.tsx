import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { inter } from "@/lib/fonts";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "ULinks | shinjith-dev",
  description: "A curated collection of useful links for developers",
  metadataBase: new URL("https://ulinks.shinjith.dev"),
  openGraph: {
    siteName: "ULinks | shinjith-dev",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  applicationName: "ULinks | shinjith-dev",
  appleWebApp: {
    title: "ULinks | shinjith-dev",
    statusBarStyle: "default",
    capable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-w-4xl mx-auto bg-[#fafafa] dark:bg-dark-100 transition`}
      >
        <Navbar />

        <main className="px-4">{children}</main>
      </body>
    </html>
  );
}
