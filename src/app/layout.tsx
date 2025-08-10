import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebCraft - Your Business, Online in 7 Days | Local Business Websites",
  description: "Professional websites for local businesses - restaurants, gyms, salons. Fast 7-day delivery with WhatsApp integration and Google Maps. Mobile-friendly designs that boost customer engagement.",
  keywords: "local business website, restaurant website, gym website, salon website, small business web design, WhatsApp integration, mobile-friendly websites, 7-day website delivery",
  authors: [{ name: "WebCraft" }],
  creator: "WebCraft",
  publisher: "WebCraft",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webcraft.com",
    siteName: "WebCraft",
    title: "WebCraft - Professional Websites for Local Businesses",
    description: "Get your business online in just 7 days. Modern, mobile-friendly websites with WhatsApp integration for restaurants, gyms, salons and more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebCraft - Local Business Websites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebCraft - Professional Websites for Local Businesses",
    description: "Get your business online in just 7 days. Modern, mobile-friendly websites with WhatsApp integration.",
    images: ["/og-image.jpg"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
