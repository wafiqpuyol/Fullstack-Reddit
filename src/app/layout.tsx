import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Reddit - Dive into anything",
  description: "A discussion hub.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={(cn("antialiased light"), inter.className)}>
      <body className="min-h-screen bg-[#1A1A1B] text-white antialiased pt-20 px-5">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
