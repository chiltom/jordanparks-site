import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./ui/navigation/SiteNavbar";
import Footer from "./ui/navigation/SiteFooter";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jordan Parks",
  description: "Jordan Parks' Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
