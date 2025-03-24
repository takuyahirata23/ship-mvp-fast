import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ship MVP Fast",
  description: "Turn your idea into reality. Build and launch your MVP fast to validate it in the real world.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.shipmvpfast.com/"
  },
  keywords: ["mvp builder", "ship fast", "build mvp", "mvp for startups", "mvp product", "minimum viable product services"],
  openGraph: {
    type: "website",
    siteName: "Ship MVP Fast",
    locale: "en_US",
    // images: {
    //   alt: "Ship your MVP fast",
    //   width: 1200,
    //   height: 630,
    // }
  },
  twitter: {
    card: "summary_large_image",
    title: "Ship MVP Fast",
    description: "Build and launch your MVP fast to validate your idea in the real world.",
    creator: "@tkhirata21"
  }

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
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="max-w-5xl mx-auto px-4 pb-12 md:pb-24 flex-1 mt-18">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
