import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layoutcomponent from "./components/LayoutComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "By Mohammad Sakib Chowdhury",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-cols-3 justify-end`}
      >
        <div className="col-span-1">
          <Layoutcomponent />
        </div>
        <div className="col-span-2 flex justify-start pr-10">
          {children}
        </div>
      </body>
    </html>
  );
}
