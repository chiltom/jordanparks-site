import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "./ui/navigation/SiteNavbar";
import Footer from "./ui/navigation/SiteFooter";
import "./styles/globals.css";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jordan Parks | Musician",
  description:
    "Official website of Jordan Parks - Musician, Performer, and Instructor",
  icons: {
    icon: "/favicon.ico",
  },
};

// Move viewport configuration to its own export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        <main>
          <Suspense
            fallback={
              <div className="h-screen w-full flex items-center justify-center">
                Loading...
              </div>
            }
          >
            {children}
          </Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}
