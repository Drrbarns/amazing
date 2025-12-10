import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Amazing Grace Kover",
    default: "Amazing Grace Kover | Strategic Accounting & HR Solutions",
  },
  description: "Amazing Grace Kover is a Ghana-based consultancy firm offering specialized accounting, financial, and HR solutions to small and medium-sized businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow pt-14 sm:pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
