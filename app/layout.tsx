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
  title: "ULinks",
  description: "A curated collection of useful links for developers",
  metadataBase: new URL("https://ulinks.shinjith.dev"),
  openGraph: {
    siteName: "ULinks",
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
  applicationName: "ULinks",
  appleWebApp: {
    title: "ULinks",
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
        className={`${inter.className} max-w-4xl mx-auto bg-[#fafafa] dark:bg-dark-100 transition flex flex-col min-h-screen`}
      >
        <Navbar />

        <main className="px-4 grow flex flex-col">{children}</main>

        <footer className="text-center py-3 px-8 text-light-200 dark:text-dark-500">Created and maintained by shinjith-dev</footer>
      </body>
    </html>
  );
}
