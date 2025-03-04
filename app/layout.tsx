import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layoutcomponent from "./components/LayoutComponent";
import Head from "next/head";
import Link from "next/link";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import AnalyticsComponent from "./components/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sakib's Portfolio",
  description: "By Mohammad Sakib Chowdhury",
  openGraph: {
    title: "Sakib's Portfolio",
    description: "By Mohammad Sakib Chowdhury",
    images: [
      {
        url: "/Sakib.jpg", // Path to your meta image
        width: 1200,
        height: 630,
        alt: "Mohammad Sakib Chowdhury - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Sakib Chowdhury - Portfolio",
    description: "Welcome to my digital playground!",
    images: ["/Sakib.jpg"], // Path to your meta image
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {


  return (
    <html lang="en">
      <Head>
        <AnalyticsComponent />
        <Link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>


      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <BackgroundGradientAnimation className="pointer-events-none absolute inset-0 z-0" />
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-end absolute z-50 inset-0 text-white font-bold px-4 overflow-y-scroll">
          {/* Keep Layoutcomponent interactive */}
          <div className="lg:col-span-1 pointer-events-auto">
            <Layoutcomponent />
          </div>
          {/* Keep children interactive */}
          <div className="lg:col-span-2 max-w-5xl flex justify-start lg:pr-10 pointer-events-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
