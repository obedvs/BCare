import { Inter } from "next/font/google";

import "@/css/style.css";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "B-Care",
  description: "B-Care ZENCON 2023 Hackathon Project.",
  icons: {
    icon: "/bcare.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight isolate`}
        suppressHydrationWarning
      >
        <main className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </main>
      </body>
    </html>
  );
}
