import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import Spotlight from "./components/Spotlight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mark Ferritto | Front-end Developer",
  description: "Front-end developer specializing in React, TypeScript, and Next.js. View my projects and get in touch.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="relative">
        <Spotlight />
        <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[60]">
          {/* Increased z-index to show above header */}
          <ThemeToggle />
        </div>
        <div className="relative z-40">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
